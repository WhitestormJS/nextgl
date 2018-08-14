import shaders from './shaders';

export class Shader {
  constructor(raw) {
    this.raw = raw;
  }

  assemble() {
    return this.raw.replace(/\[([fv])\s([aA-zZ]*)\]/g, (match, shaderType, chunkName) => {
      console.log(shaderType);
      return shaders.chunks[shaderType + '_' + chunkName];
    });
  }
}
