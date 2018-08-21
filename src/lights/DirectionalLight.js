import {Light} from '../core/Light';
import {Camera} from '../core/Camera';
import {FrameBuffer} from '../core/FrameBuffer';

export class DirectionalLight extends Light {
  type = 'DirectionalLight';

  constructor() {
    super();

    this.shadowCamera = new Camera.ortho(1, 1);
    this.shadowCamera.parent = this;
    this.shadowMap = new FrameBuffer(null, null, {color: true, depth: true});

    window.shadowMap = this.shadowMap;
  }
}
