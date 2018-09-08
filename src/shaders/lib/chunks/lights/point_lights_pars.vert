#if (NUM_POINT_LIGHTS > 0)
  uniform mat4 pointLightShadowMatricies[NUM_POINT_LIGHTS];
  out vec4 v_pointShadowCoords[NUM_POINT_LIGHTS];
#endif
