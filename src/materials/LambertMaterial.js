import {Material} from '../shaders/Material';

export class LambertMaterial extends Material {
  constructor(options = {}) {
    super({
      type: 'lambert',
      defines: Object.assign({
        USE_COLOR: true,
        USE_MAP: Boolean(options.map)
      }, options.defines || {}),
      alias: {
        map: 'map',
        diffuse: 'color'
      }
    });

    this.color = options.color || [0, 0, 0];
    this.map = options.map;
    this.state = {
      lights: true
    };

    this.initializeUniforms();
  }
}
