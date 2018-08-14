// TODO: Make a better example

const renderer = new NEXT.Renderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.canvas);

const program = new NEXT.Program({
  draw: 'lines',
  count: 4
});

program.setAttribute('position', new NEXT.Attribute(new Float32Array([
  // line 1
  0, 0, -1, // eslint-disable-line
  0.5, 0, -1, // eslint-disable-line
  // line 2
  0, 0.5, -1, // eslint-disable-line
  0.5, 0.5, -1 // eslint-disable-line
]), 3));

program.uniforms = {};

renderer.attach(program);
renderer.render();
