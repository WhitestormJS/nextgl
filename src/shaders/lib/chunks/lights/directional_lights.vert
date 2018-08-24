// #if (NUM_DIRECTIONAL_LIGHTS > 0)
//   out vec4 v_directionalShadowCoord[NUM_DIRECTIONAL_LIGHTS];
// #endif

#if (NUM_DIRECTIONAL_LIGHTS > 0)
  for (int i = 0; i < NUM_DIRECTIONAL_LIGHTS; i++) {
    vec4 ShadowCoord = directionalLightShadowMatricies[i] * modelMatrix * vec4(position, 1.0);

    ShadowCoord.xyz /= 2.0;
    ShadowCoord.xyz += vec3(0.5);
    ShadowCoord.xyz /= ShadowCoord.w;

    v_directionalShadowCoords[i] = ShadowCoord;
  }
#endif
