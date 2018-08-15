import {identity, fromScaling, multiply, fromRotationTranslation} from 'gl-mat4';
import Events from 'minivents';

export class Object3D extends Events {
  constructor() {
    super();

    // FIXME: replace identity() with create()
    this.matrix = identity([]);
    this.matrixWorld = identity([]);
    this.position = [0, 0, 0];
    this.scale = [1, 1, 1];
    this.quaternion = [0, 0, 0, 1];
    this.children = [];
    this.matrixAutoUpdate = true;
    this.matrixWorldAutoUpdate = true;
  }

  updateMatrix() {
    fromRotationTranslation(fromScaling(this.matrix, this.scale), this.quaternion, this.position);
  }

  updateMatrixWorld() { // Consider to be called after updateMatrix()
    if (!this.parent) return;
    multiply(this.matrixWorld, this.matrix, this.parent.matrix);
  }

  add(child) {
    child.parent = this;
    this.children.push(child);

    const eventObject = {
      parent: this,
      object: child
    };

    child.emit('hierarchy-update', eventObject);
    this.emit('hierarchy-update', eventObject);

    let _parent = this.parent;

    while (_parent) {
      _parent.emit('hierarchy-update', eventObject);
      _parent = _parent.parent;
    }
  }

  traverse(cb) {
    const {children} = this;

    for (let i = 0, l = children.length; i < l; i++) {
      cb(children[i]);
      children[i].traverse(cb);
    }
  }
}
