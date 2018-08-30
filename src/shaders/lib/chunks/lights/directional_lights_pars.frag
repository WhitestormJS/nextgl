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
  return matColor * dot(directionalLight.direction, normal) * directionalLight.intensity;
}

float sdf(float value, float zPlane) {
  float sigDist = value - zPlane;
  return (sigDist) / fwidth(sigDist);
}

#define SHADOW_SUPPLIER_FUNC linearSDFShadowSupplier
#define SHADOW_SAMPLER_FUNC poisonShadowSampler
// #define SHADOW_SUPPLIER_FUNC emptyShadowSupplier
// #define SHADOW_SAMPLER_FUNC emptyShadowSampler

float emptyShadowSupplier(sampler2D tex, vec2 uv, vec2 resolution, float zCoord, float bias) {
  return texture(tex, uv).r < zCoord - bias ? 0.0 : 1.0;
}

float linearSDFShadowSupplier(sampler2D tex, vec2 uv, vec2 resolution, float zCoord, float bias) {
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

  return sdf(zCoord - mix(bottom, top, weight.y).r, 0.05) < 0.0 ? 1.0 : 0.0;
}

vec2 poissonDisk[16] = vec2[](
   vec2( -0.94201624, -0.39906216 ),
   vec2( 0.94558609, -0.76890725 ),
   vec2( -0.094184101, -0.92938870 ),
   vec2( 0.34495938, 0.29387760 ),
   vec2( -0.91588581, 0.45771432 ),
   vec2( -0.81544232, -0.87912464 ),
   vec2( -0.38277543, 0.27676845 ),
   vec2( 0.97484398, 0.75648379 ),
   vec2( 0.44323325, -0.97511554 ),
   vec2( 0.53742981, -0.47373420 ),
   vec2( -0.26496911, -0.41893023 ),
   vec2( 0.79197514, 0.19090188 ),
   vec2( -0.24188840, 0.99706507 ),
   vec2( -0.81409955, 0.91437590 ),
   vec2( 0.19984126, 0.78641367 ),
   vec2( 0.14383161, -0.14100790 )
);

// Returns a random number based on a vec3 and an int.
float random(vec3 seed, int i) {
	vec4 seed4 = vec4(seed,i);
	float dot_product = dot(seed4, vec4(12.9898,78.233,45.164,94.673));
	return fract(sin(dot_product) * 43758.5453);
}

float poisonShadowSampler(sampler2D tex, vec2 uv, vec2 resolution, float zCoord, float bias) {
  float color = 0.0;

  for (int i = 0; i < 4; i++) {
    int index = int(16.0 * random(gl_FragCoord.xyy, i)) % 16;
    color += SHADOW_SUPPLIER_FUNC(tex, uv + poissonDisk[index] / 50.0, resolution, zCoord, bias) / 4.0;
  }

  return color;
}

float emptyShadowSampler(sampler2D tex, vec2 uv, vec2 resolution, float zCoord, float bias) {
  return SHADOW_SUPPLIER_FUNC(tex, uv, resolution, zCoord, bias);
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

const float UnpackDownscale = 255. / 256.; // 0..1 -> fraction (excluding 1)

const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256.,  256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );

float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
