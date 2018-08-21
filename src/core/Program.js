import fragDefault from '../shaders/lib/default.frag';
import vertDefault from '../shaders/lib/default.vert';
import {UniformStack} from './UniformStack';

import {Geometry} from './Geometry';

const _geometryRefs = new WeakMap();

export class Program {
  static createShader = (gl, type, source) => {
    type = type === 'vertex' ? gl.VERTEX_SHADER : gl.FRAGMENT_SHADER;
    const shader = gl.createShader(type);

    gl.shaderSource(shader, source);
    gl.compileShader(shader);

    return Program.debugShader(gl, shader);
  }

  static dynamicDefines = (gl, shader, defines) => {
    let source = gl.getShaderSource(shader);
    source = source.substr(source.indexOf('#version 300 es') + 15, source.length);

    for (let name in defines) {
      source = source.replace(new RegExp(`\\#define\\s(${name})\\s(.*)`), '#define $1 ' + defines[name]);
      if (source.indexOf(`#define ${name}`) < 0) source = `#define ${name} ${defines[name]} \n` + source;
    }

    gl.shaderSource(shader, '#version 300 es\n' + source);
    // gl.compileShader(shader);
  }

  static debugShader = (gl, shader) => {
    const success = gl.getShaderParameter(shader, gl.COMPILE_STATUS);

    if (success)
      return shader;

    // TODO: Cleanup error logging + add troubleshooting
    console.warn(gl.getShaderInfoLog(shader));
    console.warn(
      gl.getShaderSource(shader).split('\n')
        .map((line, i) => `${i < 9 ? '0' : ''}${i+1}:  ${line}`)
        .join('\n')
    );

    gl.deleteShader(shader);
  }

  static debugProgram = (gl, program, fragShader, vertShader) => {
    const success = gl.getProgramParameter(program, gl.LINK_STATUS);

    if (success)
      return program;

    // TODO: Cleanup error logging + add troubleshooting
    console.error(gl.getProgramInfoLog(program));

    console.warn('Fragment shader: \n' +
      gl.getShaderSource(fragShader).split('\n')
        .map((line, i) => `${i < 9 ? '0' : ''}${i+1}:  ${line}`)
        .join('\n')
    );

    console.warn('Vertex shader: \n' +
      gl.getShaderSource(vertShader).split('\n')
        .map((line, i) => `${i < 9 ? '0' : ''}${i+1}:  ${line}`)
        .join('\n')
    );

    gl.deleteProgram(program);
  }

  constructor(options = {}, geometry) {
    const {
      vert, frag, draw, count,
      vertexShader, fragmentShader, uniforms
    } = Object.assign({
      vert: vertDefault,
      frag: fragDefault,
      vertexShader: null,
      fragmentShader: null,
      uniforms: {}
    }, options);

    const _geometry = geometry || new Geometry();

    _geometryRefs.set(this, _geometry);

    this.vertexShader = vertexShader;
    this.fragmentShader = fragmentShader;

    this.vert = vertexShader ? 'linked shader is used' : vert;
    this.frag = fragmentShader ? 'linked shader is used' : frag;

    this.draw = draw || 'triangles';
    this.uniforms = uniforms instanceof UniformStack ? uniforms : new UniformStack(uniforms);
    this.count = count || _geometry.getCount() || 3;
    this.needsUpdate = true;
    this.enabled = true;
    this.mesh = null;
    this.state = {};

    Object.defineProperties(this, {
      attributes: {
        get: () => _geometry.attributes,

        set(attribs) {
          _geometry.attributes = attribs;
        }
      },
      index: {
        get: () => _geometry.index,

        set(index) {
          _geometry.index = index;
        }
      }
    });
  }

  getGeometryRef() {
    return _geometryRefs.get(this);
  }

  setAttribute(name, attribute) {
    this.attributes[name] = attribute;
  }

  setIndex(attribute) {
    this.index = attribute;
  }

  _compile = gl => {
    this.vertexShader = this.vertexShader || Program.createShader(gl, 'vertex', this.vert);
    this.fragmentShader = this.fragmentShader || Program.createShader(gl, 'fragment', this.frag);

    const program = gl.createProgram();

    gl.attachShader(program, this.vertexShader);
    gl.attachShader(program, this.fragmentShader);
    gl.linkProgram(program);

    const success = gl.getProgramParameter(program, gl.LINK_STATUS);

    const vao = _geometryRefs.get(this);

    if (!vao._compiledVAO) vao._compile(gl);
    this._bind(gl, true, program);

    if (success)
      return program;

    // TODO: Cleanup error logging + add troubleshooting
    console.log(gl.getProgramInfoLog(program));
    gl.deleteProgram(program);
  }

  _bind = (gl, vaoNeedsUpdate = false, program) => {
    _geometryRefs.get(this)._bind(gl);

    if (vaoNeedsUpdate) {
      // // index attribute
      if (this.index) {
        if (!this.index._compiledBuffer) this.index._compile(gl, true);
        this.index._bind(gl, null, true);
      }
      //
      // // non-index attributes
      for (const [attrName, attr] of Object.entries(this.attributes)) {
        if (!attr._compiledBuffer) attr._compile(gl, false);
        attr._bind(gl, gl.getAttribLocation(program, attrName), false);
      }
    }
  }
}
