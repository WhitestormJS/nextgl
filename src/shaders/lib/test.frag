#version 300 es

// fragment shaders don't have a default precision so we need
// to pick one. mediump is a good default. It means "medium precision"
precision mediump float;

// in vec3 v_color;
uniform vec2 bright;
in vec3 v_normal;
in mat4 v_modelMatrix;

// we need to declare an output for the fragment shader
out vec4 outColor;

void main() {
  vec3 normal = normalize(v_normal);
  vec3 color = vec3(1.0, 0.0, 0.0);
  vec4 dirLight = transpose(v_modelMatrix) * vec4(0.0, 0.0, 1.0, 0.0);
  float lightness = dot(dirLight.xyz, normal);

  outColor = vec4(color * lightness, 1);
}
