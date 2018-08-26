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
};

vec3 processDirectionalLight(in vec3 matColor, in DirectionalLight directionalLight, in vec3 normal) {
  return matColor * dot(directionalLight.direction, normal) * directionalLight.intensity;
}

float sdf(float value, float zPlane) {
  float sigDist = value - zPlane;
  return (sigDist) / fwidth(sigDist / 1000.0);
}

vec2 resolution = vec2(50, 50);

vec4 linearize(sampler2D tex, vec2 uv) {
    vec2 weight = fract(uv * resolution);
    vec2 scale = vec2(1.0) / resolution;

    vec4 bottom = mix(
      texture(tex, uv), // 00
      texture(tex, uv + vec2(1, 0) * scale), // 10
      weight.x
    );

    vec4 top = mix(
      texture(tex, uv + vec2(0, 1) * scale), // 01
      texture(tex, uv + vec2(1, 1) * scale), // 11
      weight.x
    );

    return mix(bottom, top, weight.y);
}

float processDirectionalLightShadow(in vec4 ShadowCoord, sampler2D shadowMap) {
  #ifdef MESH_RECEIVE_SHADOW
    if (MESH_RECEIVE_SHADOW) {
      // ShadowCoord.z /= fwidth(ShadowCoord.z); // bias 0.72 * ShadowCoord.z, 0.05 +

      bvec4 inFrustumVec = bvec4 (ShadowCoord.x >= 0.0, ShadowCoord.x <= 1.0, ShadowCoord.y >= 0.0, ShadowCoord.y <= 1.0);
      bool inFrustum = all(inFrustumVec);

      if (all(bvec2(inFrustum, ShadowCoord.z <= 1.0))) {
        float shadowColor = linearize(shadowMap, ShadowCoord.xy).r; // unpackRGBAToDepth(texture(directionalLightShadowMaps[i], ShadowCoord.xy));
        vec3 darkness = vec3(0.0);

        float delta = 1.0 - clamp(shadowColor * 10.0, 0.0, 1.0);
        float dist = abs(shadowColor - ShadowCoord.z);

        // ShadowCoord.z -= 0.05;

        // return sdf2(shadowColor, ShadowCoord.z) < 0.0 ? 0.0 : 1.0;
        return sdf(ShadowCoord.z - shadowColor, 0.05) < 0.0 ? 1.0 : 0.0; //  < ShadowCoord.z ? 0.0 : 1.0;
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
