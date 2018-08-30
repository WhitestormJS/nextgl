import getTextureUnit from './utils/getTextureUnit';
const _gl = new WeakMap();

export class CubeTexture {
  isTexture = true;

  // static fromUrl(url) {
  //   return new Promise(resolve => {
  //     const img = new Image();
  //     img.src = url;
  //
  //     img.onload = () => { // eslint-disable-line
  //       resolve(new Texture(img));
  //     };
  //   });
  // }

  static createDepthTexture() {
    return new CubeTexture(null, width, height, {
      internal: 'DEPTH_COMPONENT16',
      format: 'DEPTH_COMPONENT',
      type: 'UNSIGNED_INT',
      minFilter: 'NEAREST',
      magFilter: 'NEAREST'
    });
  }

  constructor(image, width, height, options = {}) {
    this.image = image;
    this.width = width || 256;
    this.height = height || 256;
    this.format = options.format || 'RGBA';
    this.internal = options.internal || options.format || 'RGBA';
    this.type = options.type || 'UNSIGNED_BYTE';
    this.wrapS = options.wrapS || 'CLAMP_TO_EDGE';
    this.wrapT = options.wrapT || options.wrapS || 'CLAMP_TO_EDGE';
    this.minFilter = options.minFilter || 'LINEAR';
    this.magFilter = options.magFilter || options.minFilter || 'LINEAR';
    this.isActive = false;
  }

  _compile(gl) {
    _gl.set(this, gl);

    const unit = getTextureUnit(this);
    // TODO: Cleanup comments, make the use of parameters
    const texture = gl.createTexture();

    // Bind it to texture unit 0' 2D bind point
    gl.bindTexture(gl.TEXTURE_CUBE_MAP, texture);
    // gl.activeTexture(gl.TEXTURE0 + textureUnitInt);

    // Set the parameters so we don't need mips and so we're not filtering
    // and we don't repeat
    gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_WRAP_S, gl[this.wrapS]);
    gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_WRAP_T, gl[this.wrapT]);
    gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_MIN_FILTER, gl[this.minFilter]);
    gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_MAG_FILTER, gl[this.magFilter]);

    const cubemapTargets = [
       // store texture targets in an array for convenience
       gl.TEXTURE_CUBE_MAP_POSITIVE_X, gl.TEXTURE_CUBE_MAP_NEGATIVE_X,
       gl.TEXTURE_CUBE_MAP_POSITIVE_Y, gl.TEXTURE_CUBE_MAP_NEGATIVE_Y,
       gl.TEXTURE_CUBE_MAP_POSITIVE_Z, gl.TEXTURE_CUBE_MAP_NEGATIVE_Z
    ];

    for (i = 0; i < 6; i++) {
      gl.texImage2D(
        cubemapTargets[i],
        0, // mipLevel, the largest mip
        gl[this.internal], // internalFormat, format we want in the texture
        this.width,
        this.height,
        0, // border
        gl[this.format], // srcFormat, format of data we are supplying
        gl[this.type],
        this.image
      );
    }

    gl.bindTexture(gl.TEXTURE_CUBE_MAP, null);

    console.log('compile', unit);

    this._compiledTexture = texture;
    // gl.bindTexture(gl.TEXTURE_2D, this._compiledTexture);
  }

  _bind(gl) {
    const unit = getTextureUnit(this);

    gl.activeTexture(gl.TEXTURE0 + unit);
    gl.bindTexture(gl.TEXTURE_2D, this._compiledTexture);

    return unit;
  }
}
