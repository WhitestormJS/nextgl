#define NUM_DIRECTIONAL_LIGHTS 0

[f directional_lights_pars]

#if (NUM_DIRECTIONAL_LIGHTS > 0)
  // uniform DirectionalLight directionalLights[NUM_DIRECTIONAL_LIGHTS];

  uniform Lights {
    DirectionalLight directionalLights[NUM_DIRECTIONAL_LIGHTS];
    // #if (NUM_DIRECTIONAL_LIGHTS > 0)
    // #endif
  };
#endif
