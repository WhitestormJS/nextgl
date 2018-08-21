import {invert} from 'gl-mat4';
import {Program} from './Program';
import LightsExtension from './renderer/LightsExtension';

const _locals = new WeakMap();

const typeIsArray = {
  vec2: true, vec3: true, vec4: true,
  mat2: true, mat3: true, mat4: true
};

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
      },
      UNIFORM_FUNCS: {
        float: (loc, v, u) => gl.uniform1f(loc, v),
        vec2: (loc, v, u) => gl.uniform2fv(loc, v),
        vec3: (loc, v, u) => gl.uniform3fv(loc, u.isValueUniform ? v.value : v),
        vec4: (loc, v, u) => gl.uniform4fv(loc, v),
        mat2: (loc, v, u) => gl.uniformMatrix2fv(loc, false, v),
        mat3: (loc, v, u) => gl.uniformMatrix3fv(loc, false, v),
        mat4: (loc, v, u) => gl.uniformMatrix4fv(loc, false, u.isValueUniform ? v.value : v)
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
    const {DRAW_CONSTANTS, UNIFORM_FUNCS, STATE_ASYNC} = self;

    if (STATE_ASYNC) {
      self.RENDER_REQUESTED_CAMERA = camera;
      return;
    }

    for (let i = 0, l = this.extensions.length; i < l; i++)
      if (this.extensions[i].before) this.extensions[i].before.call(this, gl, self);

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
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    self.TEXTURE_UNIT = 0;

    for (let i = 0, l = this._programs.length; i < l; i++) {
      const program = this._programs[i];
      if (!program.enabled) continue;
      // const uniforms = Object.entries(Object.getOwnPropertyDescriptors(program.uniforms));

      for (let i = 0, l = this.extensions.length; i < l; i++)
        if (this.extensions[i].program) this.extensions[i].program.call(this, gl, program, self);

      if (program.needsUpdate) {
        gl.compileShader(program.fragmentShader);
        gl.compileShader(program.vertexShader);
        gl.linkProgram(program._compiledProgram);

        Program.debugProgram(gl, program._compiledProgram, program.fragmentShader, program.vertexShader);

        Program.debugShader(gl, program.fragmentShader);
        Program.debugShader(gl, program.vertexShader);

        program.needsUpdate = false;

        gl.useProgram(program._compiledProgram);
        program._bind(gl, true, program._compiledProgram);
      } else {
        gl.useProgram(program._compiledProgram);
        program._bind(gl);
      }

      let hasPromises = false;

      for (const uniform of program.uniforms) {
        const uniformName = uniform.name;
        const value = uniform.descriptor.value || uniform.descriptor.get();

        if (typeIsArray[uniform.type]) { // TODO: test in action.
          if (!uniform.cache || uniform.cache === value.toString()) {
            uniform.cache = value.toString();
            uniform.needsUpdate = true;
          }
        }

        if (!value || !uniform.needsUpdate) continue;

        if (uniform.type === 'promise') {
          hasPromises = true;
          self.STATE_ASYNC = true;
          self.PROMISES.push(value);

          continue;
        }

        // console.log(uniform);
        if (value.isTexture) {
          if (!value._compiledTexture) value._compile(gl);
          gl.uniform1i(gl.getUniformLocation(program._compiledProgram, uniformName), value._bind(gl));
          continue;
        }

        const location = gl.getUniformLocation(program._compiledProgram, uniformName);
        UNIFORM_FUNCS[uniform.type](location, value, uniform);

        uniform.needsUpdate = false;
      }

      if (hasPromises)
        this._renderWhenSync();

      if (camera) {
        gl.uniformMatrix4fv(gl.getUniformLocation(program._compiledProgram, 'viewMatrix'), false, invert([], camera.matrixWorld.value));
        gl.uniformMatrix4fv(gl.getUniformLocation(program._compiledProgram, 'projectionMatrix'), false, camera.projectionMatrix.value);
      }

      for (let i = 0, l = this.extensions.length; i < l; i++)
        if (this.extensions[i].render) this.extensions[i].render.call(this, gl, program, self);

      if (program.index)
        gl.drawElements(DRAW_CONSTANTS[program.draw], program.count, gl.UNSIGNED_SHORT, 0);
      else
        gl.drawArrays(DRAW_CONSTANTS[program.draw], 0, program.count);
    }

    for (let i = 0, l = this.extensions.length; i < l; i++)
      if (this.extensions[i].after) this.extensions[i].after.call(this, gl, self);

    // gl.bindTexture(gl.TEXTURE_2D, null);
  }
}
