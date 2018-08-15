// requires [f normal]
float lightness = dot(u_lightDir, normal);

color = color * lightness;
