//intensity

#if (NUM_POINT_LIGHTS > 0)
  #pragma unroll_loop
  for (int i = 0; i < NUM_POINT_LIGHTS; i++) {
    // lightAffection = processPointLightShadow(v_pointShadowCoords[i], pointLightShadowMaps[i], pointLights[i]);
    color += processPointLight(matColor, pointLights[i], normal) * 1.0;
    // color += pointLights[i].position;
  }

  // color = processPointLight(matColor, pointLights[0], normal) * 1.0;
#endif
