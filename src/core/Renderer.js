const _locals = new WeakMap();

export class Renderer {
  constructor(options = {}) {
    this.canvas = options instanceof HTMLCanvasElement ? options : (options.canvas || document.createElement('canvas'));
    const gl = this.context = this.canvas.getContext('webgl2'); // eslint-disable-line
    // TODO: Add webgl2 support check
    this.clearColor = options.clearColor || [0, 0, 0, 0];
    this._programs = [];
    this._root_objects = new Set();

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
    this._root_objects.add(scene);

    scene.traverse(child => {
      if (!child.isMesh) return;

      this.attach(child.program);
      child.program.__scene = scene;
    });

    scene.on('hierarchy-update', ({object}) => {
      if (!object.isMesh) return;

      this.attach(object.program);
      object.program.__scene = scene;
    });
  }

  render(camera = null) {
    const gl = this.context;
    const {DRAW_CONSTANTS} = _locals.get(this);

    // TODO: add optimization feature to avoid iterating
    this._root_objects.forEach(root => {
      root.traverse(object => {
        if (object.matrixAutoUpdate) object.updateMatrix();
        if (object.matrixWorldAutoUpdate) object.updateMatrixWorld();
      });
    });

    // Clear the canvas
    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);

    for (let i = 0, l = this._programs.length; i < l; i++) {
      const program = this._programs[i];
      const uniforms = Object.entries(Object.getOwnPropertyDescriptors(program.uniforms));

      // Tell it to use our program (pair of shaders)
      gl.useProgram(program._compiledProgram);
      program._bind(gl);

      for (let k = 0, kl = uniforms.length; k < kl; k++) {
        const [uniformName, descriptor] = uniforms[k];
        const value = descriptor.value || descriptor.get();

        if (!value) continue;

        if (value.isTexture) {
          if (!value._compiledTexture) value._compile(gl);
          value._bind(gl);
          gl.uniform1i(gl.getUniformLocation(program._compiledProgram, uniformName), 0);
          continue;
        }

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
