#if (NUM_DIRECTIONAL_LIGHTS > 0)
  uniform sampler2D directionalLightShadowMaps[NUM_DIRECTIONAL_LIGHTS];
  in vec4 v_directionalShadowCoords[NUM_DIRECTIONAL_LIGHTS];
#endif

struct DirectionalLight
{
  float intensity;
  vec3 color;
  vec3 direction;
};

vec3 processDirectionalLight(in vec3 matColor, in DirectionalLight directionalLight, in vec3 normal) {
  return matColor * dot(directionalLight.direction, normal) * directionalLight.intensity;
}

float processDirectionalLightShadow(in vec4 ShadowCoord, sampler2D shadowMap) {
  #ifdef MESH_RECEIVE_SHADOW
    if (MESH_RECEIVE_SHADOW) {
      ShadowCoord.z -= 0.05; // bias

      bvec4 inFrustumVec = bvec4 (ShadowCoord.x >= 0.0, ShadowCoord.x <= 1.0, ShadowCoord.y >= 0.0, ShadowCoord.y <= 1.0);
      bool inFrustum = all(inFrustumVec);

      if (all(bvec2(inFrustum, ShadowCoord.z <= 1.0))) {
        float shadowColor = texture(shadowMap, ShadowCoord.xy).r; // unpackRGBAToDepth(texture(directionalLightShadowMaps[i], ShadowCoord.xy));
        vec3 darkness = vec3(0.0);

        return shadowColor < ShadowCoord.z ? 0.0 : 1.0;
      }
    }
  #endif

  return 1.0;
}

const float UnpackDownscale = 255. / 256.; // 0..1 -> fraction (excluding 1)

const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256.,  256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );

float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
