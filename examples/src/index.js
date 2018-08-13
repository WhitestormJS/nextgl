import bunny from 'bunny';

console.log(NEXT);
console.log(bunny);
const renderer = new NEXT.Renderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.canvas);

console.log(bunny);

const {vert, frag} = NEXT.shaders.test;

const positions = new Float32Array(NEXT.Attribute.inlineArray(bunny.positions));
const cells = new Uint16Array(NEXT.Attribute.inlineArray(bunny.cells));

const program = new NEXT.Program({
  vert, frag,
  count: cells.length
});

// const positions = new Float32Array([
//   0, 0, -1,
//   0, 1, -1,
//   1, 0, -1,
// ]);

const colors = new Float32Array([
  1, 0, 0,
  0, 1, 0,
  0, 0, 1
]);

console.log(positions);
console.log(cells);

program.setIndex(new NEXT.Attribute(cells, 1));

program.setAttribute('position', new NEXT.Attribute(
  positions
, 3));

program.uniforms = {
  bright: [0.2, 0.5],
  $projectionMatrix: mat4.perspective([], Math.PI / 2, window.innerWidth / window.innerHeight, 1, 100),
  $modelMatrix: mat4.fromTranslation([], [0, -5, -10])
};

let i = 0;
(function update() {
  requestAnimationFrame(update);

  mat4.rotateY(program.uniforms.$modelMatrix, program.uniforms.$modelMatrix, 0.02);
  // i += 0.002;

  renderer.render();
})();

renderer.attach(program);

renderer.render();

window.renderer = renderer;
