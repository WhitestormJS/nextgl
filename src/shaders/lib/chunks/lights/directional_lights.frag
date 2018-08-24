#if (NUM_DIRECTIONAL_LIGHTS > 0)
  DirectionalLight directionalLight;
  vec4 ShadowCoord;
  float lightAffection;

  #pragma unroll_loop
  for (int i = 0; i < NUM_DIRECTIONAL_LIGHTS; i++) {
    directionalLight = directionalLights[i];
    ShadowCoord = v_directionalShadowCoords[i];

    lightAffection = processDirectionalLightShadow(ShadowCoord, directionalLightShadowMaps[i]);
    color += processDirectionalLight(matColor, directionalLight, normal) * lightAffection;
  }
#endif
