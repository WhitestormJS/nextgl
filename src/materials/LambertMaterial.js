import {Material} from '../shaders/Material';

export class LambertMaterial extends Material {
  constructor(options = {}) {
    super({type: 'lambert'});
  }
}
