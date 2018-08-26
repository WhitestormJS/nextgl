import {multiply, invert, identity, transpose, copy} from 'gl-mat4';
import {transformMat4} from 'gl-vec3';
import {Program} from '../Program';

export default {
  init(self) {
    if (self.STATE_SHADOWMAP) return;
    self.LIGHTS = [];
  },
  object(object, self) {
    if (!object.isLight || self.STATE_SHADOWMAP) return;

    self.NUM_LIGHTS_CHANGED = true;
    self.LIGHTS.push(object);
  },
  program(gl, program, self) {
    if (!self.NUM_LIGHTS_CHANGED || self.STATE_SHADOWMAP) return;

    const defines = {
      NUM_DIRECTIONAL_LIGHTS: self.LIGHTS.length,
      MESH_RECEIVE_SHADOW: program.mesh.receiveShadow
    };

    if (program.mesh.receiveShadow) defines.USE_UV = true;

    Program.dynamicDefines(gl, program.fragmentShader, defines);
    Program.dynamicDefines(gl, program.vertexShader, defines);

    program.needsUpdate = true;
  },
  before(gl, self) {
    if (self.STATE_SHADOWMAP) return;
    const lights = self.LIGHTS_BUFFER = new Float32Array(self.LIGHTS.length * 12);

    let offs = 0;
    self.LIGHTS.forEach(light => {
      // if (light.shadowMap) light.shadowMap.setSize(this.canvas.width, this.canvas.height);

      // TODO: lvl up all matricies
      light.updateMatrix();
      light.updateMatrixWorld(); // invert

      light.shadowCamera.matrixWorld.copy(light.matrixWorld);

      self.STATE_SHADOWMAP = true;
      if (window.test) window.test.visible = false;
      this.render(light.shadowCamera, light.shadowMap, {depthOnly: true});
      if (window.test) window.test.visible = true;
      self.STATE_SHADOWMAP = false;

      // identity(light.shadowCamera.matrixWorld.value);

      const dir = light.quaternion.getDirection().value;
      // const pos = light.position.value;
      // transformMat4(pos, pos, light.shadowCamera.matrixWorld);

      // float intensity
      lights[offs++] = light.intensity; // x
      // lights[offs++] = light.intensity; // x
      // lights[offs++] = light.intensity; // x
      lights[offs++] = 0.0; // y
      lights[offs++] = 0.0; // z
      lights[offs++] = 0.0; // w

      // vec3 color
      lights[offs++] = light.color[0]; // r
      lights[offs++] = light.color[1]; // g
      lights[offs++] = light.color[2]; // b
      lights[offs++] = 0.0; // b

      // vec3 direction
      lights[offs++] = dir[0]; // x
      lights[offs++] = dir[1]; // y
      lights[offs++] = dir[2]; // z
      lights[offs++] = 0.0; // w
    });
  },
  render(gl, program, self) { // TODO: Move lights part to "before"
    if (self.STATE_SHADOWMAP) return;

    if (self.LIGHTS.length > 0 && program.state.lights && program.mesh.receiveShadow) {
      let shadowMapIndices = [];

      self.LIGHTS.forEach((light, i) => {
        const texture = light.shadowMap.depthTexture;

        const projectionViewMatrix = multiply([], light.shadowCamera.projectionMatrix.value, invert([], light.shadowCamera.matrixWorld.value));
        gl.uniformMatrix4fv(gl.getUniformLocation(program._compiledProgram, `directionalLightShadowMatricies[${i}]`), false, projectionViewMatrix);

        shadowMapIndices.push(texture._bind(gl));
      });

      gl.uniform1iv(gl.getUniformLocation(program._compiledProgram, `directionalLightShadowMaps[0]`), shadowMapIndices);

      const location = gl.getUniformBlockIndex(program._compiledProgram, 'Lights');
      gl.uniformBlockBinding(program._compiledProgram, location, 0);

      var lightsBuffer = gl.createBuffer();
      gl.bindBuffer(gl.UNIFORM_BUFFER, lightsBuffer);
      gl.bufferData(gl.UNIFORM_BUFFER, self.LIGHTS_BUFFER, gl.DYNAMIC_DRAW);
      gl.bindBuffer(gl.UNIFORM_BUFFER, null);
      // //...
      // // Render
      gl.bindBufferBase(gl.UNIFORM_BUFFER, 0, lightsBuffer);
    }
  },
  after(gl, self) {
    if (self.STATE_SHADOWMAP) return;
    self.NUM_LIGHTS_CHANGED = false;
  }
};
