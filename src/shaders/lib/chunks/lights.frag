float lightness = dot(dirLight.xyz, normal);

outColor = vec4(color * lightness, 1);
