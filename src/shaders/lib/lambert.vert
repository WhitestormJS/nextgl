[v init_pars]
[v normal_pars]
[v uv_pars]

void main() {
  [v normal]
  [v uv]

  gl_Position = projectionMatrix * viewMatrix * modelMatrix * position;
}
