import {Material} from '../shaders/Material';

export class LambertMaterial extends Material {
  constructor(options = {}) {
    super({type: 'lambert', defines: {
      USE_COLOR: true,
      USE_MAP: true
    }});

    this.map = options.map;

    Object.defineProperties(this.uniforms, {
      map: {get: () => this.map}
    });
  }
}
