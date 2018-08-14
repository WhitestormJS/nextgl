import {perspective} from 'gl-mat4';

import {Object3D} from './Object3D';

export class Camera extends Object3D {
  constructor(options = {}) {
    super();

    options = Object.assign({
      fovy: Math.PI / 2,
      aspect: window.innerWidth / window.innerHeight,
      near: 1,
      far: 100
    }, options);

    this.projectionMatrix = perspective([], options.fovy, options.aspect, options.near, options.far);
  }
}
