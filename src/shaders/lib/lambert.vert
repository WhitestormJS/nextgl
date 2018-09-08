[v init_pars]
[v normal_pars]
[v uv_pars]
[v lights_pars]

void main() {
  [v init]
  [v normal]
  [v uv]
  [v lights]

  gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position, 1.0);
}
