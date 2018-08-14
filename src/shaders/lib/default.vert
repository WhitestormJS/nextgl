#version 300 es

precision mediump float;
in vec4 position;

uniform mat4 projectionMatrix;
uniform mat4 modelMatrix;

void main() {
  gl_Position = projectionMatrix * modelMatrix * position; // projectionMatrix *
  // gl_Position = vec4(position, 1.0);
}
