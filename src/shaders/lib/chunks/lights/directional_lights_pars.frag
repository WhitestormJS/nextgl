#if (NUM_DIRECTIONAL_LIGHTS > 0)
  uniform sampler2D directionalLightShadowMaps[NUM_DIRECTIONAL_LIGHTS];
#endif

struct DirectionalLight
{
  float intensity;
  vec3 color;
  vec3 direction;
};
