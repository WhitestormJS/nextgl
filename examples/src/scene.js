import _controls from 'orbit-controls';
const controls = _controls({
  position: [0, 0, 10]
});

const renderer = new NEXT.Renderer();

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.canvas);

NEXT.Shader.collection = NEXT.shaders;

const scene = new NEXT.Scene();

const dirLight = new NEXT.DirectionalLight();
scene.add(dirLight);

const camera = new NEXT.Camera({
  type: 'perspective',
  fovy: Math.PI / 3,
  aspect: window.innerWidth / window.innerHeight
});

vec3.set(camera.position, 0, 0, 10);

// img.onload = () => {
const material = new NEXT.LambertMaterial({
  map: new NEXT.Texture.fromUrl('./assets/texture.png')
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

vec3.set(sphere1.position, 0, 0, 0);
scene.add(sphere1);

const fb = new NEXT.FrameBuffer(window.innerWidth, window.innerHeight);
// const fb = null;

const flat2 = new NEXT.FlatMaterial({
  modifiers: {
    f_pars: () => `
      uniform sampler2D fbo;
    `,
    f_main: () => `
      color = texture(fbo, v_uv).xyz;
    `
  },
  defines: {
    USE_UV: true
  }
});

flat2.uniforms.fbo = fb;

// flat2

const plane = new NEXT.Plane({
  width: 4,
  height: 2,
  shader: flat2
});

vec3.set(plane.position, 6, 0, 0);
// quat.rotateX(plane.quaternion, plane.quaternion, -Math.PI / 2);
scene.add(plane);

(function update() {
  requestAnimationFrame(update);

  controls.update();

  vec3.copy(camera.position, controls.position);
  const _mat4 = mat4.lookAt([], camera.position, vec3.add([], camera.position, controls.direction), controls.up);
  quat.copy(camera.quaternion, quat.fromMat3([], mat3.transpose([], mat3.fromMat4([], _mat4))));

  plane.visible = false;
  renderer.render(camera, fb);
  plane.visible = true;
  renderer.render(camera);
})();

renderer.setScene(scene);
renderer.render(camera);

window.renderer = renderer;

// const sphereGeo = NEXT.Sphere.Geometry({
//   radius: 1
// });
//
// const mesh = new NEXT.Mesh(sphereGeo, {
//   shader: NEXT.shaders.default
// });

// scene.add(mesh);
