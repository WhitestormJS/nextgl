import {invert} from 'gl-mat4';
import LightsExtension from './renderer/LightsExtension';

const _locals = new WeakMap();

export class Renderer {
  static Lights = LightsExtension;

  static defaultExtensions = [
    LightsExtension
  ];

  constructor(options = {}) {
    options = Object.assign({
      extensions: Renderer.defaultExtensions
    }, options);

    this.canvas = options instanceof HTMLCanvasElement ? options : (options.canvas || document.createElement('canvas'));
    const gl = this.context = this.canvas.getContext('webgl2'); // eslint-disable-line
    // TODO: Add webgl2 support check
    this.clearColor = options.clearColor || [0, 0, 0, 0];
    this.extensions = options.extensions;
    this._programs = [];
    this._root_objects = new Set();

    gl.clearColor.apply(gl, this.clearColor); // eslint-disable-line
    gl.clear(gl.COLOR_BUFFER_BIT);

    gl.enable(gl.DEPTH_TEST);
    gl.enable(gl.CULL_FACE);

    _locals.set(this, {
      STATE_ASYNC: false,
      RENDER_REQUESTED_CAMERA: null,
      PROMISES: [],
      DRAW_CONSTANTS: {
        lines: gl.LINES,
        points: gl.POINTS,
        triangles: gl.TRIANGLES
      }
    });

    const self = _locals.get(this);

    for (let i = 0, l = this.extensions.length; i < l; i++)
      this.extensions[i].init.call(this, self);
  }

  attach(program) {
    if (!program._compiledProgram)
      program._compiledProgram = program._compile(this.context, this);

    const uniforms = Object.entries(Object.getOwnPropertyDescriptors(program.uniforms));
    const self = _locals.get(this);

    let hasPromises = false;

    for (let k = 0, kl = uniforms.length; k < kl; k++) {
      const [uniformName, descriptor] = uniforms[k];
      const value = descriptor.value || descriptor.get();

      if (value instanceof Promise) {
        hasPromises = true;
        self.STATE_ASYNC = true;
        self.PROMISES.push(value);

        value.then(data => {
          if (uniformName in program.uniforms)
            program.uniforms[uniformName] = data;
          else
            descriptor.set(data);
        });
      }
    }

    if (hasPromises)
      this._renderWhenSync();

    this._programs.push(program);
  }

  _renderWhenSync() {
    const self = _locals.get(this);
    const oldPromises = [].concat(self.PROMISES);

    Promise.all(self.PROMISES).then(() => {
      if (
        self.PROMISES.length !== oldPromises.length
        || self.PROMISES.reduce((v, n, i) => v || n !== oldPromises[i], false) // promises are not the same
      ) return;

      self.STATE_ASYNC = false;
      this.render(self.RENDER_REQUESTED_CAMERA);
    });
  }

  setSize(width, height) {
    this.canvas.width = width;
    this.canvas.height = height;
  }

  setScene(scene) {
    const self = _locals.get(this);
    this._root_objects.add(scene);

    scene.traverse(child => {
      if (child.isMesh) {
        this.attach(child.program);
        child.program.__scene = scene;
      }

      for (let i = 0, l = this.extensions.length; i < l; i++)
        this.extensions[i].object.call(this, child, self);
    });

    scene.on('hierarchy-update', ({object}) => {
      if (object.isMesh) {
        this.attach(object.program);
        object.program.__scene = scene;
      }

      for (let i = 0, l = this.extensions.length; i < l; i++)
        this.extensions[i].object.call(this, object, self);
    });
  }

  render(camera = null, frameBuffer = null) { // eslint-disable-line
    const gl = this.context;
    const self = _locals.get(this);
    const {DRAW_CONSTANTS, STATE_ASYNC} = self;

    if (STATE_ASYNC) {
      self.RENDER_REQUESTED_CAMERA = camera;
      return;
    }

    if (frameBuffer) {
      if (!frameBuffer._compiledFrameBuffer) frameBuffer._compile(gl);
      frameBuffer._bindFramebuffer(gl);
    } else
      gl.bindFramebuffer(gl.FRAMEBUFFER, null);

    if (camera.matrixAutoUpdate) camera.updateMatrix();
    if (camera.matrixWorldAutoUpdate) camera.updateMatrixWorld();

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
      if (!program.enabled) continue;
      const uniforms = Object.entries(Object.getOwnPropertyDescriptors(program.uniforms));

      // Tell it to use our program (pair of shaders)
      gl.useProgram(program._compiledProgram);
      program._bind(gl);

      let hasPromises = false;

      for (let k = 0, kl = uniforms.length; k < kl; k++) {
        const [uniformName, descriptor] = uniforms[k];
        const value = descriptor.value || descriptor.get();

        if (!value) continue;

        if (value instanceof Promise) {
          hasPromises = true;
          self.STATE_ASYNC = true;
          self.PROMISES.push(value);

          value.then(data => {
            if (uniformName in program.uniforms)
              program.uniforms[uniformName] = data;
            else
              descriptor.set(data);
          });

          continue;
        }

        if (value.isTexture) {
          if (!value._compiledTexture) value._compile(gl);
          const textureUnit = value._bind(gl);
          gl.uniform1i(gl.getUniformLocation(program._compiledProgram, uniformName), textureUnit);
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

      if (hasPromises)
        this._renderWhenSync();

      if (camera) {
        gl.uniformMatrix4fv(gl.getUniformLocation(program._compiledProgram, 'viewMatrix'), false, invert([], camera.matrixWorld));
        gl.uniformMatrix4fv(gl.getUniformLocation(program._compiledProgram, 'projectionMatrix'), false, camera.projectionMatrix);
      }

      for (let i = 0, l = this.extensions.length; i < l; i++)
        this.extensions[i].render.call(this, gl, self);

      if (program.index)
        gl.drawElements(DRAW_CONSTANTS[program.draw], program.count, gl.UNSIGNED_SHORT, 0);
      else
        gl.drawArrays(DRAW_CONSTANTS[program.draw], 0, program.count);
    }
  }
}
