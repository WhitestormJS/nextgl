const uniformsDataMap = new WeakMap();

function getType(value) {
  if (value.isMat4) return 'mat4';
  if (value.isVec3) return 'vec3';

  let type = 'float';

  if (value.isTexture)
    type = 'texture';
  else if (Array.isArray(value)) {
    if (value.length <= 4) type = `vec${value.length}`;
    else type = 'mat' + (value.length === 9 ? 3 : 4);
  }

  return type;
}

export class UniformStack {
  constructor(uniforms) {
    const uniformsData = {};
    uniformsDataMap.set(this, uniformsData);

    for (const [name, uniformDescriptor] of Object.entries(Object.getOwnPropertyDescriptors(uniforms))) {
      if (this[name]) throw new Error(`Uniform can't be a UniformStack#${name} as it is a part of UniformStack API`);
      this.addUniform(name, uniformDescriptor, uniformsData);
    }

    console.log(uniformsData);

    return new Proxy(this, {
      set: (object, key, value) => {
        if (object[key]) throw new Error(`Uniform can't be a UniformStack#${key} as it is a part of UniformStack API`);

        if (key in uniformsData) { // TODO: handle promises
          uniformsData[key].descriptor = {value};
          uniformsData[key].needsUpdate = true;
        } else
          this.addUniform(key, {value}, uniformsData);

        return true;
      },
      get: (object, key) => {
        return (object[key].bind ? object[key].bind(object) : object[key])
          || uniformsData[key].descriptor;
      }
    });
  }

  addUniform(name, uniformDescriptor, data = uniformsDataMap.get(this)) {
    const currentValue = uniformDescriptor.value || uniformDescriptor.get();

    if (!currentValue) return;

    let type = null;

    if (currentValue instanceof Promise) {
      currentValue.then(v => {
        data[name].type = getType(v);
        data[name].descriptor.set(v);
        data[name].isValueUniform = Boolean(v.isValueUniform);
      });

      type = 'promise';
    } else
      type = getType(currentValue);

    data[name] = {
      name,
      type,
      descriptor: uniformDescriptor,
      needsUpdate: true,
      isValueUniform: Boolean(currentValue.isValueUniform)
    };
  }

  getType(name) {
    const uniforms = uniformsDataMap.get(this);
    return uniforms[name] && uniforms[name].type;
  }

  * [Symbol.iterator]() {
    for (const uniform of Object.values(uniformsDataMap.get(this)))
      yield uniform;
  }
}
