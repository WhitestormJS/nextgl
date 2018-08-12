export class Renderer {
  constructor(options = {}) {
    this.canvas = options instanceof HTMLCanvasElement ? options : (options.canvas || document.createElement('canvas'));
    this.context = this.canvas.getContext('webgl2'); // TODO: Add webgl2 support check
    this.clearColor = options.clearColor || [0, 0, 0, 0];
    this._programs = [];
  }

  attach(program) {
    program._compiledProgram = program._compile(this.context, this);
    this._programs.push(program);
  }

  setSize(width, height) {
    this.canvas.width = width;
    this.canvas.height = height;
  }

  render() {
    const gl = this.context;

    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);

    // Clear the canvas
    gl.clearColor.apply(gl, this.clearColor);
    gl.clear(gl.COLOR_BUFFER_BIT);

    for (let i = 0, l = this._programs.length; i < l; i++) {
      const program = this._programs[i];
      const uniforms = Object.entries(program.uniforms);

      // Tell it to use our program (pair of shaders)
      gl.useProgram(program._compiledProgram);

      for (let k = 0, kl = uniforms.length; k < kl; k++) {
        const [uniformName, value] = uniforms[k];

        gl[Array.isArray(value) ? `uniform${value.length}fv` : 'uniform1f'](
          gl.getUniformLocation(program._compiledProgram, uniformName),
          value
        );
      }

      gl.drawArrays(gl.TRIANGLES, 0, 3);
    }
  }
}
