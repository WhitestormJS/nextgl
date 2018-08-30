import {multiply, invert, identity, transpose, copy} from 'gl-mat4';
import {transformMat4} from 'gl-vec3';
import {Program} from '../Program';

export default {
  init(self) {
    if (self.STATE_SHADOWMAP) return;
    self.LIGHTS = [];
    self.NUM_DIR_LIGHTS = 0;
    self.NUM_POINT_LIGHTS = 0;
  },
  object(object, self) {
    if (!object.isLight || self.STATE_SHADOWMAP) return;

    self.NUM_LIGHTS_CHANGED = true;
    self.LIGHTS.push(object);

    if (object.type === 'DirectionalLight')
      self.NUM_DIR_LIGHTS++;
    else if (object.type === 'PointLight')
      self.NUM_POINT_LIGHTS++;
  },
  program(gl, program, self) {
    if (!self.NUM_LIGHTS_CHANGED || self.STATE_SHADOWMAP) return;

    const defines = {
      NUM_DIRECTIONAL_LIGHTS: self.NUM_DIR_LIGHTS,
      MESH_RECEIVE_SHADOW: program.mesh.receiveShadow
    };

    if (program.mesh.receiveShadow) defines.USE_UV = true;

    Program.dynamicDefines(gl, program.fragmentShader, defines);
    Program.dynamicDefines(gl, program.vertexShader, defines);

    program.needsUpdate = true;
  },
  before(gl, self) {
    if (self.STATE_SHADOWMAP) return;

    const dirLights = new Float32Array(self.NUM_DIR_LIGHTS * 16);
    const pointLights = new Float32Array(self.NUM_POINT_LIGHTS * 16);

    let offs = 0;
    self.LIGHTS.forEach(light => {
      // TODO: lvl up all matricies
      light.updateMatrix();
      light.updateMatrixWorld(); // invert

      switch (light.type) {
        case 'DirectionalLight':
          light.shadowCamera.matrixWorld.copy(light.matrixWorld);

          self.STATE_SHADOWMAP = true;
          if (window.test) window.test.visible = false;
          this.render(light.shadowCamera, light.shadowMap, {depthOnly: true});
          if (window.test) window.test.visible = true;
          self.STATE_SHADOWMAP = false;

          // identity(light.shadowCamera.matrixWorld.value);

          const dir = light.quaternion.getDirection().value;

          // float intensity
          dirLights[offs++] = light.intensity; // x
          dirLights[offs++] = 0.0; // y
          dirLights[offs++] = 0.0; // z
          dirLights[offs++] = 0.0; // w

          // vec3 color
          dirLights[offs++] = light.color[0]; // r
          dirLights[offs++] = light.color[1]; // g
          dirLights[offs++] = light.color[2]; // b
          dirLights[offs++] = 0.0; // b

          // vec3 direction
          dirLights[offs++] = dir[0]; // x
          dirLights[offs++] = dir[1]; // y
          dirLights[offs++] = dir[2]; // z
          dirLights[offs++] = 0.0; // w

          // vec2 shadowSize
          dirLights[offs++] = light.shadowMap.width; // x
          dirLights[offs++] = light.shadowMap.height; // y
          dirLights[offs++] = 0.0; // z
          dirLights[offs++] = 0.0; // w
          break;
        case 'PointLight':
          light.shadowCamera.matrixWorld.copy(light.matrixWorld);

          self.STATE_SHADOWMAP = true;
          if (window.test) window.test.visible = false;
          this.render(light.shadowCamera, light.shadowMap, {depthOnly: true});
          if (window.test) window.test.visible = true;
          self.STATE_SHADOWMAP = false;

          // identity(light.shadowCamera.matrixWorld.value);

          const dir = light.quaternion.getDirection().value;

          // float intensity
          pointLights[offs++] = light.intensity; // x
          pointLights[offs++] = 0.0; // y
          pointLights[offs++] = 0.0; // z
          pointLights[offs++] = 0.0; // w

          // vec3 color
          pointLights[offs++] = light.color[0]; // r
          pointLights[offs++] = light.color[1]; // g
          pointLights[offs++] = light.color[2]; // b
          pointLights[offs++] = 0.0; // b

          // vec3 direction
          pointLights[offs++] = dir[0]; // x
          pointLights[offs++] = dir[1]; // y
          pointLights[offs++] = dir[2]; // z
          pointLights[offs++] = 0.0; // w

          // vec2 shadowSize
          pointLights[offs++] = light.shadowMap.width; // x
          pointLights[offs++] = light.shadowMap.height; // y
          pointLights[offs++] = 0.0; // z
          pointLights[offs++] = 0.0; // w
          break;
        default:

      }
    });

    self.LIGHTS_BUFFER = dirLights;
  },
  render(gl, program, self) { // TODO: Move lights part to "before"
    if (self.STATE_SHADOWMAP) return;

    if (self.LIGHTS.length > 0 && program.state.lights && program.mesh.receiveShadow) {
      let shadowMapIndices = [];

      self.LIGHTS.forEach((light, i) => {
        switch (light.type) {
          case 'DirectionalLight':
            const texture = light.shadowMap.depthTexture;

            const projectionViewMatrix = multiply([], light.shadowCamera.projectionMatrix.value, invert([], light.shadowCamera.matrixWorld.value));
            gl.uniformMatrix4fv(gl.getUniformLocation(program._compiledProgram, `directionalLightShadowMatricies[${i}]`), false, projectionViewMatrix);

            shadowMapIndices.push(texture._bind(gl));
            break;
          default:

        }
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
