export default {
  init(self) {
    self.LIGHTS = [];
  },
  object(object, self) {
    console.log(object);
    if (!object.isLight) return;

    self.LIGHTS.push(object);
  },
  render(gl, self) {
    self.LIGHTS.forEach(light => {
      // console.log(light);
      // gl.
    });
  }
};
