import {Shader} from './Shader';

export class Material {
  constructor(options = {}) {
    options = Object.assign({
      type: 'flat'
    }, options);

    const shader = Shader.collection[options.type];

    this.type = options.type;
    this._vertexShader = new Shader(shader.vert).define(shader.defines);
    this._fragmentShader = new Shader(shader.frag).define(shader.defines);

    // TODO: Make uniforms clone tool
    this.uniforms = Object.assign({}, shader.uniforms);
  }

  get frag() {
    return this._fragmentShader.assemble();
  }

  get vert() {
    return this._vertexShader.assemble();
  }
}
