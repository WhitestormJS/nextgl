import {Object3D} from './Object3D';
import {Program} from './Program';

export class Mesh extends Object3D {
  isMesh = true;

  constructor(geometry, options = {}) {
    super();

    options = Object.assign({
      shader: {}
    }, options);

    this.program = new Program({
      vert: options.shader.vert,
      frag: options.shader.frag,
      uniforms: Object.assign(options.shader.uniforms || {}, {
        modelMatrix: this.matrixWorld
      })
    }, geometry);

    this.castShadow = false;
    this.receiveShadow = false;

    this.program.mesh = this;

    Object.assign(this.program.state, options.shader.state || {});
  }

  get visible() {
    return this.program.enabled;
  }

  set visible(value) {
    this.program.enabled = value;
  }
}
