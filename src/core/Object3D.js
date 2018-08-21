import {identity, fromScaling, multiply, fromRotationTranslation, copy} from 'gl-mat4';
import {Vec3} from '../math/Vec3';
import {Mat4} from '../math/Mat4';
import {Quat} from '../math/Quat';
import Events from 'minivents';

export class Object3D extends Events {
  constructor() {
    super();

    // FIXME: replace identity() with create()
    this.matrix = new Mat4();
    this.matrixWorld = new Mat4();
    this.position = new Vec3(0, 0, 0);
    this.scale = new Vec3(1, 1, 1);
    this.quaternion = new Quat();
    this.children = [];
    this.matrixAutoUpdate = true;
    this.matrixWorldAutoUpdate = true;
  }

  // lookAt(vector) {
  //
  // }

  updateMatrix() {
    this.matrix.compose(this.position, this.quaternion, this.scale);
  }

  updateMatrixWorld() { // Consider to be called after updateMatrix()
    // TODO: Replace with Math API
    if (!this.parent) {
      copy(this.matrixWorld.value, this.matrix.value);
      return;
    }

    multiply(this.matrixWorld.value, this.matrix.value, this.parent.matrix.value);
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
