#version 300 es

precision mediump float;

// an attribute is an input (in) to a vertex shader.
// It will receive data from a buffer
in vec4 position;
in vec3 normal;
// in vec3 color;

out vec3 v_normal;
out mat4 v_modelMatrix;

uniform mat4 projectionMatrix;
uniform mat4 modelMatrix;

// all shaders have a main function
void main() {
  v_normal = normal;
  v_modelMatrix = modelMatrix;

  // gl_Position is a special variable a vertex shader
  // is responsible for setting
  gl_Position = projectionMatrix * modelMatrix * position;
}
