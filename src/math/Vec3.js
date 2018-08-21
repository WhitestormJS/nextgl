export class Vec3 {
  isValueUniform = true;
  isVec3 = true;

  constructor(x, y, z) {
    this.value = [x, y, z];
  }

  set(x, y, z) {
    this.value[0] = x;
    this.value[1] = y;
    this.value[2] = z;
  }

  fromArray(array) {
    this.value[0] = array[0];
    this.value[1] = array[1];
    this.value[2] = array[2];
  }

  copy(vector) {
    this.fromArray(vector.value);
  }

  clone() {
    return new Vec3().copy(this);
  }

  get x() {
    this.value[0];
  }

  set x(v) {
    this.value[0] = v;
  }

  get y() {
    this.value[1];
  }

  set y(v) {
    this.value[1] = v;
  }

  get z() {
    this.value[2];
  }

  set z(v) {
    this.value[2] = v;
  }
}
