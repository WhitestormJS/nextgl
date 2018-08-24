import {Object3D} from './Object3D';

export class Light extends Object3D {
  isLight = true;

  static shadowDefaults = {
    width: 1024,
    height: 1024
  }

  constructor() {
    super();
    this.color = [1, 1, 1];
    this.intensity = 1;
  }
}
