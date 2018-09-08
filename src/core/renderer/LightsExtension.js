import {multiply, invert, identity, transpose, copy} from 'gl-mat4';
import {transformMat4} from 'gl-vec3';
import {Program} from '../Program';

export default {
  init(self) {
    if (self.STATE_SHADOWMAP) return;
    self.LIGHTS = [];
    self.NUM_DIRECTIONAL_LIGHTS = 0;
    self.NUM_POINT_LIGHTS = 0;
  },
  object(object, self) {
    if (!object.isLight || self.STATE_SHADOWMAP) return;

    self.NUM_LIGHTS_CHANGED = true;
    self.LIGHTS.push(object);

    if (object.type === 'DirectionalLight')
      self.NUM_DIRECTIONAL_LIGHTS++;
    else if (object.type === 'PointLight')
      self.NUM_POINT_LIGHTS++;
  },
  program(gl, program, self) {
    if (!self.NUM_LIGHTS_CHANGED || self.STATE_SHADOWMAP) return;

    const defines = {
      NUM_DIRECTIONAL_LIGHTS: self.NUM_DIRECTIONAL_LIGHTS,
      NUM_POINT_LIGHTS: self.NUM_POINT_LIGHTS,
      MESH_RECEIVE_SHADOW: program.mesh.receiveShadow
    };


    if (program.mesh.receiveShadow) defines.USE_UV = true;

    Program.dynamicDefines(gl, program.fragmentShader, defines);
    Program.dynamicDefines(gl, program.vertexShader, defines);

    program.needsUpdate = true;
  },
  before(gl, self) {
    if (self.STATE_SHADOWMAP) return;

    const dirLights = new Float32Array(self.NUM_DIRECTIONAL_LIGHTS * 16);
    const pointLights = new Float32Array(self.NUM_POINT_LIGHTS * 16);
    const lights = new Float32Array(dirLights.length + pointLights.length);

    let dirOffs = 0, pointOffs = 0;
    self.LIGHTS.forEach(light => {
      // TODO: lvl up all matricies
      light.updateMatrix();
      light.updateMatrixWorld(); // invert

      switch (light.type) {
        case 'DirectionalLight': {
          light.shadowCamera.matrixWorld.copy(light.matrixWorld);

          self.STATE_SHADOWMAP = true;
          this.render(light.shadowCamera, light.shadowMap, {depthOnly: true});
          self.STATE_SHADOWMAP = false;

          // identity(light.shadowCamera.matrixWorld.value);

          const dir = light.quaternion.getDirection().value;

          // float intensity
          dirLights[dirOffs++] = light.intensity; // x
          dirLights[dirOffs++] = 0.0; // y
          dirLights[dirOffs++] = 0.0; // z
          dirLights[dirOffs++] = 0.0; // w

          // vec3 color
          dirLights[dirOffs++] = light.color[0]; // r
          dirLights[dirOffs++] = light.color[1]; // g
          dirLights[dirOffs++] = light.color[2]; // b
          dirLights[dirOffs++] = 0.0; // b

          // vec3 direction
          dirLights[dirOffs++] = dir[0]; // x
          dirLights[dirOffs++] = dir[1]; // y
          dirLights[dirOffs++] = dir[2]; // z
          dirLights[dirOffs++] = 0.0; // w

          // vec2 shadowSize
          dirLights[dirOffs++] = light.shadowMap.width; // x
          dirLights[dirOffs++] = light.shadowMap.height; // y
          dirLights[dirOffs++] = 0.0; // z
          dirLights[dirOffs++] = 0.0; // w
          break;
        } case 'PointLight': {
          light.shadowCamera.matrixWorld.copy(light.matrixWorld);

          self.STATE_SHADOWMAP = true;
          this.render(light.shadowCamera, light.shadowMap, {depthOnly: true});
          self.STATE_SHADOWMAP = false;

          // identity(light.shadowCamera.matrixWorld.value);



          const pos = light.position.value;
          // console.log(pos);

          // float intensity
          pointLights[pointOffs++] = light.intensity; // x
          pointLights[pointOffs++] = 0.0; // y
          pointLights[pointOffs++] = 0.0; // z
          pointLights[pointOffs++] = 0.0; // w

          // vec3 color
          pointLights[pointOffs++] = light.color[0]; // r
          pointLights[pointOffs++] = light.color[1]; // g
          pointLights[pointOffs++] = light.color[2]; // b
          pointLights[pointOffs++] = 0.0; // b

          // vec3 position
          pointLights[pointOffs++] = pos[0]; // x
          pointLights[pointOffs++] = pos[1]; // y
          pointLights[pointOffs++] = pos[2]; // z
          pointLights[pointOffs++] = 0.0; // w

          // vec2 shadowSize
          pointLights[pointOffs++] = light.shadowMap.width; // x
          pointLights[pointOffs++] = light.shadowMap.height; // y
          pointLights[pointOffs++] = 0.0; // z
          pointLights[pointOffs++] = 0.0; // w
          break;
        } default:
      }
    });

    lights.set(dirLights, 0);
    lights.set(pointLights, dirLights.length);

    self.LIGHTS_BUFFER = lights;
  },
  render(gl, program, self) { // TODO: Move lights part to "before"
    if (self.STATE_SHADOWMAP) return;

    if (self.LIGHTS.length > 0 && program.state.lights && program.mesh.receiveShadow) {
      let directionalShadowMapIndices = [];
      let pointShadowMapIndices = [];

      self.LIGHTS.forEach((light, i) => {
        switch (light.type) {
          case 'DirectionalLight': {
            const texture = light.shadowMap.depthTexture;

            const projectionViewMatrix = multiply([], light.shadowCamera.projectionMatrix.value, invert([], light.shadowCamera.matrixWorld.value));
            gl.uniformMatrix4fv(gl.getUniformLocation(program._compiledProgram, `directionalLightShadowMatricies[${i}]`), false, projectionViewMatrix);

            directionalShadowMapIndices.push(texture._bind(gl));
            break;
          } case 'PointLight': {
            const texture = light.shadowMap.depthTexture;

            const projectionViewMatrix = multiply([], light.shadowCamera.projectionMatrix.value, invert([], light.shadowCamera.matrixWorld.value));
            gl.uniformMatrix4fv(gl.getUniformLocation(program._compiledProgram, `pointLightShadowMatricies[${i}]`), false, projectionViewMatrix);

            pointShadowMapIndices.push(texture._bind(gl));
            break;
          } default:

        }
      });

      gl.uniform1iv(gl.getUniformLocation(program._compiledProgram, `directionalLightShadowMaps[0]`), directionalShadowMapIndices);
      gl.uniform1iv(gl.getUniformLocation(program._compiledProgram, `pointLightShadowMaps[0]`), pointShadowMapIndices);

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
