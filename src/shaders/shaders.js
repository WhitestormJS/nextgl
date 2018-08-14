module.exports = {
  default: {
    vert: require('./lib/default.vert'),
    frag: require('./lib/default.frag')
  },
  test: {
    vert: require('./lib/test.vert'),
    frag: require('./lib/test.frag')
  },
  chunks: {
    f_lights: require('./lib/chunks/lights.frag')
  }
};
