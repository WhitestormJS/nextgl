import {identity, fromScaling, multiply, fromRotationTranslation, copy, perspective, ortho} from 'gl-mat4';

export class Mat4 {
  isValueUniform = true;
  isMat4 = true;

  constructor(matArray) {
    this.value = new Float32Array(matArray || identity([]));
  }

  fromArray(array) {
    for (let i = 0; i < 16; i++)
      this.value[i] = array[i];
  }

  compose(position, quaternion, scale) {
    fromRotationTranslation(fromScaling(this.value, scale.value), quaternion.value, position.value);
  }

  perspective(fovy, aspect, near, far) {
    perspective(this.value, fovy, aspect, near, far);
  }

  ortho(left, right, top, bottom, near, far) {
    ortho(this.value, left, right, top, bottom, near, far);
  }

  copy(matrix) {
    this.fromArray(matrix.value);
  }

  clone() {
    return new Mat4().copy(this);
  }
}
