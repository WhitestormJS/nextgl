[v init_pars]
[v normal_pars]

void main() {
  [v normal]
  
  gl_Position = projectionMatrix * modelMatrix * position;
}
