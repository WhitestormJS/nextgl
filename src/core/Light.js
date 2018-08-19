import {Object3D} from './Object3D';

export class Light extends Object3D {
  isLight = true;

  constructor() {
    super();
    this.color = [];
  }
}
