export class Attribute {
  constructor(array, size) {
    this.array = array;
    this.size = size;
    this._compiledBuffer = null;
  }

  _compile = (gl) => {
    const buffer = gl.createBuffer();

    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, this.array, gl.STATIC_DRAW);

    this._compiledBuffer = buffer;
  }

  _bind = (gl, location) => {
    gl.enableVertexAttribArray(location);

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
