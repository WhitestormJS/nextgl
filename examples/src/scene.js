const renderer = new NEXT.Renderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.canvas);

NEXT.Shader.collection = NEXT.shaders;

const scene = new NEXT.Scene();

const camera = new NEXT.Camera({
  type: 'perspective',
  aspect: window.innerWidth / window.innerHeight
});

const img = new Image();
img.src = './assets/texture.png';

// img.onload = () => {
//   const material = new NEXT.LambertMaterial({
//     map: new NEXT.Texture(img)
//   });
//
//   const sphere1 = new NEXT.Sphere({
//     radius: 1,
//     shader: material
//   });
//
//   vec3.set(sphere1.position, -4, 0, -10);
//   scene.add(sphere1);
// };

// setTimeout(() => {
  const material = new NEXT.LambertMaterial({
    // map: new NEXT.Texture(img)
  });

  const sphere1 = new NEXT.Sphere({
    radius: 1,
    shader: material
  });

  vec3.set(sphere1.position, -4, 0, -10);
  scene.add(sphere1);
// }, 0);



// const sphere2 = new NEXT.Sphere({
//   radius: 1,
//   shader: material
// });
//
// vec3.set(sphere2.position, 0, 10, -10);
// sphere1.add(sphere2);

// const plane = new NEXT.Plane({
//   width: 10,
//   height: 10,
//   shader: material
// });
// scene.add(plane);
//
// vec3.set(plane.position, -4, -4, -10);
// quat.rotateX(plane.quaternion, plane.quaternion, -Math.PI / 2);

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
