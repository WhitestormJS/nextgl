export class Attribute {
  static inlineArray(inArray) {
    return inArray.reduce((o, a) => {
      o.push(...a);
      return o
    }, [])
  }

  constructor(array, size) {
    this.array = array;
    this.size = size;
    this._compiledBuffer = null;
  }

  _compile = (gl, isIndex = false) => {
    const BUFFER_TYPE = isIndex ? gl.ELEMENT_ARRAY_BUFFER : gl.ARRAY_BUFFER;
    const buffer = gl.createBuffer();

    gl.bindBuffer(BUFFER_TYPE, buffer);
    gl.bufferData(BUFFER_TYPE, this.array, gl.STATIC_DRAW);

    this._compiledBuffer = buffer;
  }

  _bind = (gl, location, isIndex) => {
    const BUFFER_TYPE = isIndex ? gl.ELEMENT_ARRAY_BUFFER : gl.ARRAY_BUFFER;
    gl.bindBuffer(BUFFER_TYPE, this._compiledBuffer);

    if (isIndex === 'index')
      return;

    gl.enableVertexAttribArray(location);

    // TODO: Check for additional capabilities of vertexAttribPointer
    gl.vertexAttribPointer(
      location,
      this.size,  // 2 components per iteration
      gl.FLOAT,  // the data is 32bit floats
      false,  // don't normalize the data
      0,  // 0 = move forward size * sizeof(type) each iteration to get the next position
      0 // start at the beginning of the buffer
    );
  }
}
