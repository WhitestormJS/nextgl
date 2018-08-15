precision mediump float;
out vec4 outColor;

[f init_pars]
[f normal_pars]
[f lambert_light_pars]

void main() {
  [f init]
  [f normal]
  [f lambert_light]

  outColor = vec4(color, 1.0);
}
