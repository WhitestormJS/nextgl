#if (NUM_DIRECTIONAL_LIGHTS > 0 || NUM_POINT_LIGHTS > 0)
  vec3 matColor = color;
  color = vec3(0, 0, 0);
#endif

float lightAffection;

[f directional_lights]
[f point_lights]

// test
