let textureUnitInt = 0;

const textureUnit = new WeakMap();

export class Texture {
  isTexture = true;

  static fromUrl(url) {
    return new Promise(resolve => {
      const img = new Image();
      img.src = url;

      img.onload = () => { // eslint-disable-line
        resolve(new Texture(img));
      };
    });
  }

  constructor(image, width, height) {
    this.image = image;
    this.width = width || 256;
    this.height = height || 256;
  }

  _compile(gl) {
    textureUnit.set(this, textureUnitInt++);
    // TODO: Cleanup comments, make the use of parameters
    const texture = gl.createTexture();

    // make unit 0 the active texture uint
    // (ie, the unit all other texture commands will affect
    if (this.image)
      gl.activeTexture(gl['TEXTURE' + textureUnit.get(this)]);

    // Bind it to texture unit 0' 2D bind point
    gl.bindTexture(gl.TEXTURE_2D, texture);

    // Set the parameters so we don't need mips and so we're not filtering
    // and we don't repeat
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);

    // Upload the image into the texture.
    const mipLevel = 0; // the largest mip
    const internalFormat = gl.RGBA; // format we want in the texture
    const srcFormat = gl.RGBA; // format of data we are supplying
    const srcType = gl.UNSIGNED_BYTE; // type of data we are supplying

    gl.texImage2D(
      gl.TEXTURE_2D,
      mipLevel,
      internalFormat,
      this.width,
      this.height,
      0, // border
      srcFormat,
      srcType,
      this.image
    );

    this._compiledTexture = texture;
  }

  _bind(gl) {
    gl.activeTexture(gl['TEXTURE' + textureUnit.get(this)]);
    gl.bindTexture(gl.TEXTURE_2D, this._compiledTexture);

    return textureUnit.get(this);
  }
}
