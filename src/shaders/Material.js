import {Shader} from './Shader';

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

    // TODO: Make uniforms clone tool
    this.uniforms = Object.assign({}, shader.uniforms);

    Object.defineProperties(this.uniforms, {
      ...options.alias.reduce((o, v) => Object.assign(o, {[v]: {
        get: () => this[v],
        set: input => {
          this[v] = input;
        }
      }}), {})
    });
  }

  get frag() {
    return this._fragmentShader.assemble();
  }

  get vert() {
    return this._vertexShader.assemble();
  }
}
