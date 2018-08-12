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

  constructor({vert, frag}) {
    this.vert = vert;
    this.frag = frag;
    this.attributes = {};
    this.uniforms = {};
  }

  setAttribute(name, attribute) {
    this.attributes[name] = attribute;
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

    for (let [attrName, attr] of Object.entries(this.attributes)) {
      if (!attr._compiledBuffer) attr._compile(gl);
      attr._bind(gl, gl.getAttribLocation(program, attrName));
    }

    if (success) {
      return program;
    }

    // TODO: Cleanup error logging + add troubleshooting
    console.log(gl.getProgramInfoLog(program));
    gl.deleteProgram(program);
  }
}
