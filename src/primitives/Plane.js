import generate from 'primitive-plane';

import {Mesh} from '../core/Mesh';
import {Geometry} from '../core/Geometry';
import {Attribute} from '../core/Attribute';

export class Plane extends Mesh {
  static Geometry({width = 1, height = 1, widthSegments = 1, heightSegments = 1}) {
    const data = generate(width, height, widthSegments, heightSegments);
    const geometry = new Geometry();

    geometry.setIndex(new Attribute(new Uint16Array(Attribute.inlineArray(data.cells)), 1));
    const poss = new Attribute(new Float32Array(Attribute.inlineArray(data.positions)), 3)
    geometry.setAttribute('position', poss);
    geometry.setAttribute('normal', new Attribute(new Float32Array(Attribute.inlineArray(data.normals)), 3));
    const uvs = new Attribute(new Float32Array(Attribute.inlineArray(data.uvs)), 2);
    geometry.setAttribute('uv', uvs);

    console.log(poss, uvs)

    return geometry;
  }

  constructor(options = {}) {
    super(Plane.Geometry(options), {
      shader: options.shader
    });
  }
}
