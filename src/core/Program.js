export class Program {
  static createShader = (gl, type, source) => {
    const shader = gl.createShader(type);

    gl.shaderSource(shader, source);
    gl.compileShader(shader);

    const success = gl.getShaderParameter(shader, gl.COMPILE_STATUS);

    if (success)
      return shader;

    // TODO: Cleanup error logging + add troubleshooting
    console.log(gl.getShaderInfoLog(shader));
    gl.deleteShader(shader);
  }

  constructor({vert, frag, count} = {}) {
    this.vert = vert;
    this.frag = frag;
    this.attributes = {};
    this.uniforms = {};
    this.count = count || 3;
    this.index = null;
  }

  setAttribute(name, attribute) {
    this.attributes[name] = attribute;
  }

  setIndex(attribute) {
    this.index = attribute;
  }

  _compile = (gl) => {
    const vertexShader = Program.createShader(gl, gl.VERTEX_SHADER, this.vert);
    const fragmentShader = Program.createShader(gl, gl.FRAGMENT_SHADER, this.frag);

    const program = gl.createProgram();

    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);

    const success = gl.getProgramParameter(program, gl.LINK_STATUS);

    const vao = gl.createVertexArray();
    gl.useProgram(program._compiledProgram);

    this._compiledVAO = vao;
    gl.bindVertexArray(program._compiledVAO);

    // index attribute
    if (this.index) {
      if (!this.index._compiledBuffer) this.index._compile(gl, true);
      this.index._bind(gl, null, true);
    }

    // non-index attributes
    for (let [attrName, attr] of Object.entries(this.attributes)) {
      if (!attr._compiledBuffer) attr._compile(gl, false);
      attr._bind(gl, gl.getAttribLocation(program, attrName), false);
    }

    if (success) {
      return program;
    }

    // TODO: Cleanup error logging + add troubleshooting
    console.log(gl.getProgramInfoLog(program));
    gl.deleteProgram(program);
  }
}
