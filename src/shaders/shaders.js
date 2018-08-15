const chunks = require('./chunks');

module.exports = {
  default: {
    vert: require('./lib/default.vert'),
    frag: require('./lib/default.frag')
  },
  test: {
    vert: require('./lib/test.vert'),
    frag: require('./lib/test.frag')
  },
  flat: {
    vert: require('./lib/flat.vert'),
    frag: require('./lib/flat.frag'),
    uniforms: {
      u_diffuse: [1, 0, 0]
    },
    defines: {
      USE_COLOR: true
    }
  },
  lambert: {
    vert: require('./lib/lambert.vert'),
    frag: require('./lib/lambert.frag'),
    uniforms: {
      u_diffuse: [1, 0, 0],
      u_lightDir: [0, 0, 1]
    },
    defines: {
      USE_COLOR: true
    }
  },
  chunks
};
