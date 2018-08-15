// import shaders from './shaders';

const _cache = new WeakMap();

// TODO: Assemble shader correct way.
export class Shader {
  static collection = null;

  constructor(raw, modifiers = {}) {
    if (Shader.collection === null)
      throw new Error('Shader.collection should be specified.');

    this.raw = raw;
    this.modifiers = modifiers;
    this.defines = {};
  }

  define(defines) {
    Object.assign(this.defines, defines);
    return this;
  }

  assemble(useCached = false) {
    const HEAD = '#version 300 es\n\n';

    const defines = Object.entries(this.defines)
      .map(([name, value]) => `#define ${name} ${value}`)
      .join('\n');

    if (!useCached || !cache.get(this)) {
      const staticPart = this.raw.replace(/(\s*)\[([fv])\s([aA-zZ]*)\]/g, (match, spaces, shaderType, chunkName) => {
        chunkName = shaderType + '_' + chunkName;
        let chunk = Shader.collection.chunks[chunkName]
          .split('\n')
          .slice(1)
          .join('\n');

        chunk = chunkName in this.modifiers ? this.modifiers[chunkName](
          chunk,
          (start, end) => chunk.split('\n').slice(start, end).join('\n')
        ) : chunk;

        return `\n${spaces}// [${chunkName}] \n` + chunk
          .split('\n')
          .map(str => spaces.slice(1) + str)
          .join('\n');
      });

      _cache.set(this, staticPart);

      return HEAD + defines + '\n\n' + staticPart;
    }

    return HEAD + defines + '\n\n' + cache.get(this);
  }
}
