import {identity, fromScaling, translate} from 'gl-mat4';

export class Object3D {
  constructor() {
    this.matrix = identity([]);
    this.position = [0, 0, 0];
    this.scale = [1, 1, 1];
    this.quaternion = [0, 0, 0, 1];
    this.children = [];
  }

  updateMatrix() {
    translate(this.matrix, fromScaling(this.matrix, this.scale), this.position);
  }

  add(child) {
    this.children.push(child);
  }

  traverse(cb) {
    const {children} = this;

    for (let i = 0, l = children.length; i < l; i++) {
      cb(children[i]);
      children[i].traverse(cb);
    }
  }
}
