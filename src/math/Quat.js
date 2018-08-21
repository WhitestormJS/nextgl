import {identity, rotateX, rotateY, rotateZ} from 'gl-quat';
import {transformQuat} from 'gl-vec3';
import {Vec3} from './Vec3';

export class Quat {
  isValueUniform = true;
  isQuat = true;

  constructor(matArray) {
    this.value = identity([]);
  }

  fromArray(array) {
    this.value[0] = array[0];
    this.value[1] = array[1];
    this.value[2] = array[2];
    this.value[3] = array[3];
  }

  setFromEuler(x, y, z) {
    identity(this.value);
    rotateX(this.value, this.value, x);
    rotateX(this.value, this.value, y);
    rotateX(this.value, this.value, z);
  }

  getDirection() {
    const vec = new Vec3(0, 0, 1);
    transformQuat(vec.value, vec.value, this.value);
    return vec;
  }

  copy(quat) {
    this.fromArray(quat.value);
  }

  clone() {
    return new Quat().copy(this);
  }
}
