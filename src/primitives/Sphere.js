import generate from 'primitive-sphere';

import {Mesh} from '../core/Mesh';
import {Geometry} from '../core/Geometry';
import {Attribute} from '../core/Attribute';

export class Sphere extends Mesh {
  static Geometry({radius = 1, segments = 16}) {
    const data = generate(radius, {segments});
    const geometry = new Geometry();

    geometry.setIndex(new Attribute(new Uint16Array(Attribute.inlineArray(data.cells)), 1));
    geometry.setAttribute('position', new Attribute(new Float32Array(Attribute.inlineArray(data.positions)), 3));
    geometry.setAttribute('normal', new Attribute(new Float32Array(Attribute.inlineArray(data.normals)), 3));
    geometry.setAttribute('uv', new Attribute(new Float32Array(Attribute.inlineArray(data.uvs)), 3));

    return geometry;
  }

  constructor(options = {}) {
    super(Sphere.Geometry(options), {
      shader: options.shader
    });
  }
}
