const renderer = new NEXT.Renderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.canvas);

const scene = new NEXT.Scene();

const camera = new NEXT.Camera({
  type: 'perspective',
  aspect: window.innerWidth / window.innerHeight
});

const sphereGeo = NEXT.Sphere.Geometry({radius: 1});

const sphere1 = new NEXT.Mesh(sphereGeo, {
  shader: NEXT.shaders.default
});

vec3.set(sphere1.position, -4, 0, -10);
sphere1.updateMatrix();
scene.add(sphere1);

const sphere2 = new NEXT.Mesh(sphereGeo, {
  shader: NEXT.shaders.default
});

vec3.set(sphere2.position, 4, 0, -10);
sphere2.updateMatrix();
scene.add(sphere2);


// renderer.attach(sphere.program);
renderer.setScene(scene);
renderer.render(camera);

window.renderer = renderer;

const shader = new NEXT.Shader(`
  out vec3 color;

  void main() {
    [f lights]
  }
`);

window.shader = shader;

console.log(shader.assemble());

// const sphereGeo = NEXT.Sphere.Geometry({
//   radius: 1
// });
//
// const mesh = new NEXT.Mesh(sphereGeo, {
//   shader: NEXT.shaders.default
// });

// scene.add(mesh);
