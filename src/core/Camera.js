import {Object3D} from './Object3D';
import {Mat4} from '../math/Mat4';

export class Camera extends Object3D {
  static ortho(width, height, near = 1, far = 100) {
    return new Camera({
      type: 'ortho',
      left: -width / 2,
      right: width / 2,
      top: -height / 2,
      bottom: height / 2,
      near, far
    });
  }

  constructor(options = {}) {
    super();

    options = this.options = Object.assign({
      type: 'perspective',
      fovy: Math.PI / 2,
      aspect: window.innerWidth / window.innerHeight,
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      near: 1,
      far: 100
    }, options);

    this.projectionMatrix = new Mat4();
    this.update();
  }

  update(options = {}) {
    options = this.options = Object.assign(this.options, options);
    this.type = options.type;

    if (this.type === 'perspective')
      this.projectionMatrix.perspective(options.fovy, options.aspect, options.near, options.far);
    else
      this.projectionMatrix.ortho(options.left, options.right, options.top, options.bottom, options.near, options.far);
  }
}
