const textureUnit = new WeakMap();
let textureUnitInt = 1;

export default function getTextureUnit(object) {
  if (!textureUnit.has(object)) {
    textureUnit.set(object, textureUnitInt);
    return textureUnitInt++;
  } else {
    return textureUnit.get(object);
  }
}
