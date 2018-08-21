import {Shader} from './Shader';
import {UniformStack} from '../core/UniformStack';

export class Material {
  constructor(options = {}) {
    options = Object.assign({
      type: 'flat',
      defines: {},
      alias: [],
      modifiers: {}
    }, options);

    const shader = Shader.collection[options.type];

    this.type = options.type;
    this._vertexShader = new Shader(shader.vert, options.modifiers).define(options.defines);
    this._fragmentShader = new Shader(shader.frag, options.modifiers).define(options.defines);

    this.uniforms = Object.assign({}, shader.uniforms);

    Object.defineProperties(this.uniforms, {
      ...Object.entries(options.alias).reduce((o, [n, v]) => Object.assign(o, {[n]: {
        get: () => this[v],
        set: input => {
          this[v] = input;
        }
      }}), {})
    });
  }

  initializeUniforms() {
    // TODO: Make uniforms clone tool
    this.uniforms = new UniformStack(this.uniforms);
  }

  get frag() {
    return this._fragmentShader.assemble();
  }

  get vert() {
    return this._vertexShader.assemble();
  }
}
