#define NUM_DIRECTIONAL_LIGHTS 0
#define NUM_POINT_LIGHTS 0

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

[f directional_lights_pars]
[f point_lights_pars]

#if (NUM_DIRECTIONAL_LIGHTS > 0 || NUM_POINT_LIGHTS > 0)
  // uniform DirectionalLight directionalLights[NUM_DIRECTIONAL_LIGHTS];

  uniform Lights {
    #if (NUM_DIRECTIONAL_LIGHTS > 0)
      DirectionalLight directionalLights[NUM_DIRECTIONAL_LIGHTS];
    #endif
    #if (NUM_POINT_LIGHTS > 0)
      PointLight pointLights[NUM_POINT_LIGHTS];
    #endif
    // #if (NUM_DIRECTIONAL_LIGHTS > 0)
    // #endif
  };
#endif
