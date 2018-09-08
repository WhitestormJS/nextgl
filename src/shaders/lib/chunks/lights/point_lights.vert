// #if (NUM_POINT_LIGHTS > 0)
//   out vec4 v_pointShadowCoord[NUM_DIRECTIONAL_LIGHTS];
// #endif

#if (NUM_POINT_LIGHTS > 0)
  for (int i = 0; i < NUM_POINT_LIGHTS; i++) {
    vec4 ShadowCoord = pointLightShadowMatricies[i] * modelMatrix * vec4(position, 1.0);

    ShadowCoord.xyz /= 2.0;
    ShadowCoord.xyz += vec3(0.5);
    ShadowCoord.xyz /= ShadowCoord.w;

    v_pointShadowCoords[i] = ShadowCoord;
  }
#endif
