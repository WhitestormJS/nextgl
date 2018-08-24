#if (NUM_DIRECTIONAL_LIGHTS > 0)
  uniform mat4 directionalLightShadowMatricies[NUM_DIRECTIONAL_LIGHTS];
  out vec4 v_directionalShadowCoords[NUM_DIRECTIONAL_LIGHTS];
#endif
