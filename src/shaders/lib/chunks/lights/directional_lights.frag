#if (NUM_DIRECTIONAL_LIGHTS > 0)
  #pragma unroll_loop
  for (int i = 0; i < NUM_DIRECTIONAL_LIGHTS; i++) {
    lightAffection = processDirectionalLightShadow(v_directionalShadowCoords[i], directionalLightShadowMaps[i], directionalLights[i]);
    color += processDirectionalLight(matColor, directionalLights[i], normal) * lightAffection;
  }
#endif
