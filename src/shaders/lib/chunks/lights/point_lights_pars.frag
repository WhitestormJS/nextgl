#extension GL_OES_standard_derivatives : enable

#if (NUM_POINT_LIGHTS > 0)
  uniform sampler2D pointLightShadowMaps[NUM_POINT_LIGHTS];
  in vec4 v_pointShadowCoords[NUM_POINT_LIGHTS];
#endif

struct PointLight
{
  float intensity;
  vec3 color;
  vec3 position;
  vec2 shadowSize;
};

vec2 cubeToUV(vec3 v, float texelSizeY) {

	// Number of texels to avoid at the edge of each square

	vec3 absV = abs( v );

	// Intersect unit cube

	float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
	absV *= scaleToCube;

	// Apply scale to avoid seams

	// two texels less per square (one texel will do for NEAREST)
	v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );

	// Unwrap

	// space: -1 ... 1 range for each square
	//
	// #X##		dim    := ( 4 , 2 )
	//  # #		center := ( 1 , 1 )

	vec2 planar = v.xy;

	float almostATexel = 1.5 * texelSizeY;
	float almostOne = 1.0 - almostATexel;

	if ( absV.z >= almostOne ) {

		if ( v.z > 0.0 )
			planar.x = 4.0 - v.x;

	} else if ( absV.x >= almostOne ) {

		float signX = sign( v.x );
		planar.x = v.z * signX + 2.0 * signX;

	} else if ( absV.y >= almostOne ) {

		float signY = sign( v.y );
		planar.x = v.x + 2.0 * signY + 2.0;
		planar.y = v.z * signY - 2.0;

	}

	// Transform to UV space

	// scale := 0.5 / dim
	// translate := ( center + 0.5 ) / dim
	return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
}

vec3 processPointLight(in vec3 matColor, in PointLight pointLight, in vec3 normal) {
  vec3 lightRay = -normalize(vWorldPosition.xyz - pointLight.position);
  return matColor * max(dot(lightRay, normal), 0.0); // matColor * max(dot(lightRay, normal), 0.0) * pointLight.intensity;
}

float processPointLightShadow(in vec4 ShadowCoord, sampler2D shadowMap, in PointLight pointLight) {
  #ifdef MESH_RECEIVE_SHADOW
    if (MESH_RECEIVE_SHADOW) {
      // ShadowCoord.z /= fwidth(ShadowCoord.z); // bias 0.72 * ShadowCoord.z, 0.05 +

      bvec4 inFrustumVec = bvec4 (ShadowCoord.x >= 0.0, ShadowCoord.x <= 1.0, ShadowCoord.y >= 0.0, ShadowCoord.y <= 1.0);
      bool inFrustum = all(inFrustumVec);

      if (all(bvec2(inFrustum, ShadowCoord.z <= 1.0))) {
        float bias = 0.05;
        return SHADOW_SAMPLER_FUNC(shadowMap, ShadowCoord.xy, pointLight.shadowSize, ShadowCoord.z, bias);
      }
    }
  #endif

  return 1.0;
}
