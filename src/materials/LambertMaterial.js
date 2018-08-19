import {Material} from '../shaders/Material';

export class LambertMaterial extends Material {
  constructor(options = {}) {
    super({
      type: 'lambert',
      defines: {
        USE_COLOR: true,
        USE_MAP: Boolean(options.map)
      },
      alias: ['map']
    });

    this.map = options.map;
  }
}
