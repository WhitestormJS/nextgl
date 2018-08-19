import {Texture} from './Texture';

export class FrameBuffer extends Texture {
  constructor(width, height) {
    super(null, width, height);
  }

  _compile = gl => {
    super._compile(gl);

    // Create and bind the framebuffer
    const fb = gl.createFramebuffer();
    gl.bindFramebuffer(gl.FRAMEBUFFER, fb);

    // attach the texture as the first color attachment
    const attachmentPoint = gl.COLOR_ATTACHMENT0;
    gl.framebufferTexture2D(gl.FRAMEBUFFER, attachmentPoint, gl.TEXTURE_2D, this._compiledTexture, 0); // TODO: change level

    this._compiledFrameBuffer = fb;
  }

  _bindFramebuffer = gl => {
    gl.bindFramebuffer(gl.FRAMEBUFFER, this._compiledFrameBuffer);
  }
}
