import _controls from 'orbit-controls';
import lerp from 'lerp';

const controls = _controls({
  position: [0, 0, 10]
});

const renderer = new NEXT.Renderer();

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.canvas);

NEXT.Shader.collection = NEXT.shaders;

const scene = new NEXT.Scene();

const dirLight = new NEXT.DirectionalLight({
  shadow: {
    width: 100,
    height: 100
  }
});

dirLight.intensity = 0.2;
dirLight.position.set(0, 10, 0);
dirLight.quaternion.setFromEuler(-Math.PI / 2, 0, 0);

const dirLight2 = new NEXT.DirectionalLight({
  shadow: {
    width: 100,
    height: 100
  }
});

dirLight2.intensity = 0.2;
dirLight2.position.set(0, 5, 0);
dirLight2.quaternion.setFromEuler(-Math.PI / 3, 0, 0);

const pointLight = new NEXT.PointLight({
  shadow: {
    width: 100,
    height: 100
  }
});

pointLight.intensity = 1;
pointLight.position.set(0, 15, 0);
pointLight.quaternion.setFromEuler(-Math.PI / 1.5, 0, 0);
//
// const dirLight4 = new NEXT.DirectionalLight({
//   shadow: {
//     width: 100,
//     height: 100
//   }
// });
//
// dirLight4.intensity = 0.2;
// dirLight4.position.set(0, 5, 0);
// dirLight4.quaternion.setFromEuler(-Math.PI / 1.7, 0, 0);
// scene.add(dirLight);
// scene.add(dirLight2);
scene.add(pointLight);
// scene.add(dirLight3);
// scene.add(dirLight4);

const camera = new NEXT.Camera({
  type: 'perspective',
  fovy: Math.PI / 3,
  aspect: window.innerWidth / window.innerHeight
});

camera.position.set(0, 0, 10);

const camera2 = new NEXT.Camera({
  type: 'perspective',
  fovy: Math.PI / 3,
  aspect: window.innerWidth / window.innerHeight
});

const orthoCamera = new NEXT.Camera.ortho(1, 1);

// img.onload = () => {
const material = new NEXT.LambertMaterial({
  map: new NEXT.Texture.fromUrl('./assets/texture.png')
});

const material2 = new NEXT.LambertMaterial({
  color: [1, 0, 0]
});

// setTimeout(() => {
//   material.uniforms.map = new NEXT.Texture.fromUrl('./assets/texture2.jpg');
//   // material.uniforms.map.then(v => {
//   //   v.isTest = true;
//   // });
// }, 1000);

const sphere1 = new NEXT.Sphere({
  radius: 2,
  shader: material
});

sphere1.position.set(0, 0, 0);

// vec3.set(sphere1.position, 0, 0, 0);
scene.add(sphere1);

const planeReceiver = new NEXT.Plane({
  width: 20,
  height: 20,
  shader: material2
});

planeReceiver.receiveShadow = true;

planeReceiver.position.set(0, -4, 0);
planeReceiver.quaternion.setFromEuler(-Math.PI / 2, 0, 0);
scene.add(planeReceiver);

const fb = new NEXT.FrameBuffer(window.innerWidth, window.innerHeight, {depth: true});
// const fb = null;

const flat2 = new NEXT.FlatMaterial({
  modifiers: {
    f_pars: () => `
      uniform sampler2D fbo;
    `,
    f_main: () => `
      float n = 1.0;
      float f = 1.6;
      float z = texture(fbo, v_uv).x;
      float grey = (2.0 * n) / (f + n - z*(f-n));
      color = vec3(grey);
      // color = texture(fbo, v_uv).xyz;
    `,
    v_main: () => `
      v_uv.y = 1.0 - v_uv.y;
    `
  },
  defines: {
    USE_UV: true
  }
});

// setTimeout(() => {
  flat2.uniforms.fbo = dirLight.shadowMap.depthTexture;
// }, 1000);

// flat2

window.flat2 = flat2;

const plane = new NEXT.Plane({
  width: 4,
  height: 4,
  shader: flat2
});

plane.position.set(6, 0, 0);
window.test = plane;
// plane.quaternion.setFromEuler(-Math.PI, 0, 0);

// vec3.set(plane.position, 6, 0, 0);
// quat.rotateX(plane.quaternion, plane.quaternion, -Math.PI / 2);
scene.add(plane);

let cam = camera;

(function update(time) {
  requestAnimationFrame(update);

  controls.update();

  vec3.copy(cam.position.value, controls.position);
  const _mat4 = mat4.lookAt([], cam.position.value, vec3.add([], cam.position.value, controls.direction), controls.up);
  quat.copy(cam.quaternion.value, quat.fromMat3([], mat3.transpose([], mat3.fromMat4([], _mat4))));

  // orthoCamera.matrixAutoUpdate = false;
  // orthoCamera.matrix.copy(dirLight.matrix);
  // mat4.transpose(orthoCamera.matrix, orthoCamera.matrix);

  // plane.visible = false;
  // renderer.render(orthoCamera, fb);
  const progress = (Math.sin(time / 400) + 1) / 2;

  if (typeof dirLight !== 'undefined') {
    dirLight.position.y = lerp(10, 5, progress);
    dirLight.quaternion.setFromEuler(lerp(-Math.PI / 2, -Math.PI/ 4, progress), 0, 0);

    // dirLight3.position.y = lerp(5, 10, progress);
    // dirLight3.quaternion.setFromEuler(lerp(-Math.PI / 3, -Math.PI/ 2, progress), 0, 0);
  }

  plane.visible = true;

  // if (!window.tester)
  renderer.render(camera);
  //
  // window.tester = true;
})();

// console.log(orthoCamera);

renderer.setScene(scene);

window.renderer = renderer;
window.dirLight = dirLight;

// const sphereGeo = NEXT.Sphere.Geometry({
//   radius: 1
// });
//
// const mesh = new NEXT.Mesh(sphereGeo, {
//   shader: NEXT.shaders.default
// });

// scene.add(mesh);
