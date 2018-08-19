import {Material} from '../shaders/Material';

export class FlatMaterial extends Material {
  constructor(options = {}) {
    super({
      type: 'flat',
      defines: Object.assign({
        USE_COLOR: true,
        USE_MAP: Boolean(options.map)
      }, options.defines || {}),
      alias: ['map'],
      modifiers: options.modifiers || {}
    });

    this.map = options.map;
  }
}
