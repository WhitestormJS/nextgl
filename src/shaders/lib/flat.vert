[v init_pars]

void main() {
  gl_Position = projectionMatrix * modelMatrix * position;
}
