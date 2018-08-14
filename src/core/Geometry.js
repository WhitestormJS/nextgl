export class Geometry {
  constructor() {
    this.index = null;
    this.attributes = {};
  }

  setAttribute(name, attribute) {
    this.attributes[name] = attribute;
  }

  setIndex(attribute) {
    this.index = attribute;
  }

  getCount() {
    if (this.index)
      return this.index.array.length;
    else if (this.attributes.position)
      return this.attributes.position.array.length / 3;

    return null;
  }

  _compile = gl => {
    this._compiledVAO = gl.createVertexArray();
  }

  _bind = gl => {
    gl.bindVertexArray(this._compiledVAO);
  }
}
