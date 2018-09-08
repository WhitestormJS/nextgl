precision mediump float;

in vec3 vPosition;
in vec4 vWorldPosition;

uniform mat4 projectionMatrix;
uniform mat4 modelMatrix;
uniform mat4 viewMatrix;

#ifdef USE_COLOR
  uniform vec3 diffuse;
#endif
