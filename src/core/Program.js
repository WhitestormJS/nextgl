import fragDefault from '../shaders/lib/default.frag';
import vertDefault from '../shaders/lib/default.vert';

import {Geometry} from './Geometry';

const _geometryRefs = new WeakMap();

export class Program {
  static createShader = (gl, type, source) => {
    type = type === 'vertex' ? gl.VERTEX_SHADER : gl.FRAGMENT_SHADER;
    const shader = gl.createShader(type);

    gl.shaderSource(shader, source);
    gl.compileShader(shader);

    const success = gl.getShaderParameter(shader, gl.COMPILE_STATUS);

    if (success)
      return shader;

    // TODO: Cleanup error logging + add troubleshooting
    console.warn(gl.getShaderInfoLog(shader));
    console.warn(
      source.split('\n')
        .map((line, i) => `${i < 9 ? '0' : ''}${i+1}:  ${line}`)
        .join('\n')
    );

    gl.deleteShader(shader);
  }

  constructor(options = {}, geometry) {
    const {
      vert, frag, draw, count,
      vertexShader, fragmentShader
    } = Object.assign({
      vert: vertDefault,
      frag: fragDefault,
      vertexShader: null,
      fragmentShader: null
    }, options);

    const _geometry = geometry || new Geometry();

    _geometryRefs.set(this, _geometry);

    this.vertexShader = vertexShader;
    this.fragmentShader = fragmentShader;

    this.vert = vertexShader ? 'linked shader is used' : vert;
    this.frag = fragmentShader ? 'linked shader is used' : frag;

    this.draw = draw || 'triangles';
    this.uniforms = {};
    this.count = count || _geometry.getCount() || 3;
    this.enabled = true;

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
    const vertexShader = this.vertexShader || Program.createShader(gl, 'vertex', this.vert);
    const fragmentShader = this.fragmentShader || Program.createShader(gl, 'fragment', this.frag);

    const program = gl.createProgram();

    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);

    const success = gl.getProgramParameter(program, gl.LINK_STATUS);

    const vao = _geometryRefs.get(this);

    if (!vao._compiledVAO) vao._compile(gl);
    vao._bind(gl);

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

    if (success)
      return program;

    // TODO: Cleanup error logging + add troubleshooting
    console.log(gl.getProgramInfoLog(program));
    gl.deleteProgram(program);
  }

  _bind = gl => {
    _geometryRefs.get(this)._bind(gl);
  }
}
