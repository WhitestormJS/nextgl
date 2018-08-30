import {Light} from '../core/Light';
import {Camera} from '../core/Camera';
import {FrameBuffer} from '../core/FrameBuffer';

// TODO: make PointLight
export class PointLight extends Light {
  type = 'PointLight';

  constructor(options = {}) {
    super(options);

    options.shadow = Object.assign({}, Light.shadowDefaults, options.shadow || {});

    this.shadowCamera = new Camera.ortho(10, 10);
    this.shadowCamera.matrixAutoUpdate = false;
    this.shadowCamera.matrixWorldAutoUpdate = false;
    this.shadowMap = new FrameBuffer(options.shadow.width, options.shadow.height, {color: false, depth: true});
  }
}
