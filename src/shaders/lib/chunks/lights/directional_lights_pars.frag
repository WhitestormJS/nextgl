#extension GL_OES_standard_derivatives : enable

#if (NUM_DIRECTIONAL_LIGHTS > 0)
  uniform sampler2D directionalLightShadowMaps[NUM_DIRECTIONAL_LIGHTS];
  in vec4 v_directionalShadowCoords[NUM_DIRECTIONAL_LIGHTS];
#endif

struct DirectionalLight
{
  float intensity;
  vec3 color;
  vec3 direction;
  vec2 shadowSize;
};

vec3 processDirectionalLight(in vec3 matColor, in DirectionalLight directionalLight, in vec3 normal) {
  return matColor * max(dot(directionalLight.direction, normal), 0.0) * directionalLight.intensity;
}

float processDirectionalLightShadow(in vec4 ShadowCoord, sampler2D shadowMap, in DirectionalLight directionalLight) {
  #ifdef MESH_RECEIVE_SHADOW
    if (MESH_RECEIVE_SHADOW) {
      // ShadowCoord.z /= fwidth(ShadowCoord.z); // bias 0.72 * ShadowCoord.z, 0.05 +

      bvec4 inFrustumVec = bvec4 (ShadowCoord.x >= 0.0, ShadowCoord.x <= 1.0, ShadowCoord.y >= 0.0, ShadowCoord.y <= 1.0);
      bool inFrustum = all(inFrustumVec);

      if (all(bvec2(inFrustum, ShadowCoord.z <= 1.0))) {
        float bias = 0.05;
        return SHADOW_SAMPLER_FUNC(shadowMap, ShadowCoord.xy, directionalLight.shadowSize, ShadowCoord.z, bias);
      }
    }
  #endif

  return 1.0;
}
