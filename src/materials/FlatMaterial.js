import {Material} from '../shaders/Material';

export class FlatMaterial extends Material {
  constructor(options = {}) {
    super({type: 'flat', defines: {
      USE_COLOR: true
    }});
  }
}
