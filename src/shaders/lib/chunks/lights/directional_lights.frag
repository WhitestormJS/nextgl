#if (NUM_DIRECTIONAL_LIGHTS > 0)
  DirectionalLight directionalLight = directionalLights[0];

  for (int i = 0; i < NUM_DIRECTIONAL_LIGHTS; i++) {
    directionalLight = directionalLights[i];
    color += matColor * dot(directionalLight.direction, normal) * directionalLight.intensity;

    if (MESH_RECEIVE_SHADOW) {
      color = texture(directionalLightShadowMaps[i], v_uv).xyz;
      // color = vec3(0.0, 1.0, 0.0);
    }
  }
#endif
