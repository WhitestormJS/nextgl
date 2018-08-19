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
      frag: options.shader.frag
    }, geometry);

    // console.log(options.shader.uniforms);
    this.program.uniforms = Object.assign(options.shader.uniforms || {}, {
      $modelMatrix: this.matrixWorld
    });
  }

  get visible() {
    return this.program.enabled;
  }

  set visible(value) {
    this.program.enabled = value;
  }
}
