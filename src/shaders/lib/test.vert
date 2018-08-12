#version 300 es

// an attribute is an input (in) to a vertex shader.
// It will receive data from a buffer
in vec4 position;
in vec3 color;

out vec3 v_color;

// all shaders have a main function
void main() {
  v_color = color;

  // gl_Position is a special variable a vertex shader
  // is responsible for setting
  gl_Position = position;
}
