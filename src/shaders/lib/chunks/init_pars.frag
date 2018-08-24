precision mediump float;

uniform mat4 projectionMatrix;
uniform mat4 modelMatrix;
uniform mat4 viewMatrix;

#ifdef USE_COLOR
  uniform vec3 diffuse;
#endif
