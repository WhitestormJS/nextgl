const _locals = new WeakMap();

export class Renderer {
  constructor(options = {}) {
    this.canvas = options instanceof HTMLCanvasElement ? options : (options.canvas || document.createElement('canvas'));
    const gl = this.context = this.canvas.getContext('webgl2'); // eslint-disable-line
    // TODO: Add webgl2 support check
    this.clearColor = options.clearColor || [0, 0, 0, 0];
    this._programs = [];

    gl.clearColor.apply(gl, this.clearColor); // eslint-disable-line
    gl.clear(gl.COLOR_BUFFER_BIT);

    gl.enable(gl.DEPTH_TEST);
    gl.enable(gl.CULL_FACE);

    _locals.set(this, {
      DRAW_CONSTANTS: {
        lines: gl.LINES,
        points: gl.POINTS,
        triangles: gl.TRIANGLES
      }
    });
  }

  attach(program) {
    if (!program._compiledProgram)
      program._compiledProgram = program._compile(this.context, this);

    this._programs.push(program);
  }

  setSize(width, height) {
    this.canvas.width = width;
    this.canvas.height = height;
  }

  setScene(scene) {
    scene.traverse(child => {
      if (!child.isMesh) return;

      child.updateMatrix();
      this.attach(child.program);
      child.program.__scene = scene;
    });
  }

  render(camera = null) {
    const gl = this.context;
    const {DRAW_CONSTANTS} = _locals.get(this);

    // Clear the canvas
    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);

    for (let i = 0, l = this._programs.length; i < l; i++) {
      const program = this._programs[i];
      const uniforms = Object.entries(program.uniforms);

      // Tell it to use our program (pair of shaders)
      gl.useProgram(program._compiledProgram);

      for (let k = 0, kl = uniforms.length; k < kl; k++) {
        const [uniformName, value] = uniforms[k];

        const isMatrix = uniformName.indexOf('$') === 0;

        if (isMatrix) {
          gl[`uniformMatrix${value.length === 4 ? 2 : (value.length === 9 ? 3 : 4)}fv`](
            gl.getUniformLocation(program._compiledProgram, uniformName.slice(1)),
            false,
            value
          );
        } else {
          gl[Array.isArray(value) ? `uniform${value.length}fv` : 'uniform1f'](
            gl.getUniformLocation(program._compiledProgram, uniformName),
            value
          );
        }
      }

      if (camera)
        gl.uniformMatrix4fv(gl.getUniformLocation(program._compiledProgram, 'projectionMatrix'), false, camera.projectionMatrix);

      if (program.index)
        gl.drawElements(DRAW_CONSTANTS[program.draw], program.count, gl.UNSIGNED_SHORT, 0);
      else
        gl.drawArrays(DRAW_CONSTANTS[program.draw], 0, program.count);
    }
  }
}
