precision mediump float;
out vec4 outColor;

[f init_pars]
[f normal_pars]
[f uv_pars]
[f map_pars]
[f lights_pars]

void main() {
  [f init]
  [f normal]
  [f map]
  [f lights]

  outColor = vec4(color, 1.0);
}
