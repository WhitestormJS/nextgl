import bunny from 'bunny';
import makeNormals from 'normals';

const renderer = new NEXT.Renderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.canvas);

const {vert, frag} = NEXT.shaders.test;

const positions = new Float32Array(NEXT.Attribute.inlineArray(bunny.positions));
const normals = new Float32Array(NEXT.Attribute.inlineArray(makeNormals.vertexNormals(bunny.cells, bunny.positions)));
const cells = new Uint16Array(NEXT.Attribute.inlineArray(bunny.cells));

const program = new NEXT.Program({
  vert, frag,
  count: cells.length
});

program.setIndex(new NEXT.Attribute(cells, 1));

program.setAttribute('normal', new NEXT.Attribute(normals, 3));
program.setAttribute('position', new NEXT.Attribute(positions, 3));

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
