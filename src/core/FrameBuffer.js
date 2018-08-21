import {Texture} from './Texture';

export class FrameBuffer {
  constructor(width, height, options = {}) {
    options = Object.assign({
      color: true,
      depth: true,
      stencil: false
    }, options);

    this.width = width;
    this.height = height;

    this.color = Boolean(options.color);
    this.depth = Boolean(options.depth);
    this.stencil = Boolean(options.stencil);

    if (this.color) this.texture = new Texture(null, width, height, options);

    if (this.depth) {
      this.depthTexture = new Texture(null, width, height, {
        internal: 'DEPTH_COMPONENT24',
        format: 'DEPTH_COMPONENT',
        type: 'UNSIGNED_INT',
        minFilter: 'NEAREST',
        magFilter: 'NEAREST'
      });
    }

    if (this.stencil) {
      // FIXME: Make stencil work
      this.stencilTexture = new Texture(null, width, height, {
        internal: 'DEPTH_STENCIL',
        format: 'DEPTH_STENCIL',
        type: 'UNSIGNED_INT',
        minFilter: 'NEAREST',
        magFilter: 'NEAREST'
      });
    }
  }

  setSize(width, height) {
    this.width = width;
    this.height = height;

    if (this.color) this.texture.setSize(width, height);
    if (this.depth) this.depthTexture.setSize(width, height);
    if (this.stencil) this.stencilTexture.setSize(width, height);
  }

  _compile = gl => {
    // Create and bind the framebuffer
    const fb = gl.createFramebuffer();
    gl.bindFramebuffer(gl.FRAMEBUFFER, fb);

    if (this.color) {
      this.texture._compile(gl);
      gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, this.texture._compiledTexture, 0); // TODO: change level
    }

    if (this.depth) {
      this.depthTexture._compile(gl);
      gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.TEXTURE_2D, this.depthTexture._compiledTexture, 0); // TODO: change level
    }

    if (this.stencil) {
      this.stencilTexture._compile(gl);
      gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.STENCIL_ATTACHMENT, gl.TEXTURE_2D, this.stencilTexture._compiledTexture, 0); // TODO: change level
    };

    this._compiledFrameBuffer = fb;
  }

  _bindFramebuffer = gl => {
    // gl.bindTexture(gl.TEXTURE_2D, null);
    gl.bindFramebuffer(gl.FRAMEBUFFER, this._compiledFrameBuffer);
    // gl.enable(gl.DEPTH_TEST);
    // gl.clear(gl.DEPTH_BUFFER_BIT);
  }
}
