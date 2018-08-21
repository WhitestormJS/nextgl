/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./examples/src/scene.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/clamp/index.js":
/*!**************************************!*\
  !*** ../node_modules/clamp/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = clamp\n\nfunction clamp(value, min, max) {\n  return min < max\n    ? (value < min ? min : value > max ? max : value)\n    : (value < max ? max : value > min ? min : value)\n}\n\n\n//# sourceURL=webpack:///../node_modules/clamp/index.js?");

/***/ }),

/***/ "../node_modules/defined/index.js":
/*!****************************************!*\
  !*** ../node_modules/defined/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function () {\n    for (var i = 0; i < arguments.length; i++) {\n        if (arguments[i] !== undefined) return arguments[i];\n    }\n};\n\n\n//# sourceURL=webpack:///../node_modules/defined/index.js?");

/***/ }),

/***/ "../node_modules/dprop/index.js":
/*!**************************************!*\
  !*** ../node_modules/dprop/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = defaultProperty\n\nfunction defaultProperty (get, set) {\n  return {\n    configurable: true,\n    enumerable: true,\n    get: get,\n    set: set\n  }\n}\n\n\n//# sourceURL=webpack:///../node_modules/dprop/index.js?");

/***/ }),

/***/ "../node_modules/gl-quat/invert.js":
/*!*****************************************!*\
  !*** ../node_modules/gl-quat/invert.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = invert\n\n/**\n * Calculates the inverse of a quat\n *\n * @param {quat} out the receiving quaternion\n * @param {quat} a quat to calculate inverse of\n * @returns {quat} out\n */\nfunction invert (out, a) {\n  var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3],\n    dot = a0 * a0 + a1 * a1 + a2 * a2 + a3 * a3,\n    invDot = dot ? 1.0 / dot : 0\n\n  // TODO: Would be faster to return [0,0,0,0] immediately if dot == 0\n\n  out[0] = -a0 * invDot\n  out[1] = -a1 * invDot\n  out[2] = -a2 * invDot\n  out[3] = a3 * invDot\n  return out\n}\n\n\n//# sourceURL=webpack:///../node_modules/gl-quat/invert.js?");

/***/ }),

/***/ "../node_modules/gl-quat/normalize.js":
/*!********************************************!*\
  !*** ../node_modules/gl-quat/normalize.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/**\n * Normalize a quat\n *\n * @param {quat} out the receiving quaternion\n * @param {quat} a quaternion to normalize\n * @returns {quat} out\n * @function\n */\nmodule.exports = __webpack_require__(/*! gl-vec4/normalize */ \"../node_modules/gl-vec4/normalize.js\")\n\n\n//# sourceURL=webpack:///../node_modules/gl-quat/normalize.js?");

/***/ }),

/***/ "../node_modules/gl-vec2/distance.js":
/*!*******************************************!*\
  !*** ../node_modules/gl-vec2/distance.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = distance\n\n/**\n * Calculates the euclidian distance between two vec2's\n *\n * @param {vec2} a the first operand\n * @param {vec2} b the second operand\n * @returns {Number} distance between a and b\n */\nfunction distance(a, b) {\n    var x = b[0] - a[0],\n        y = b[1] - a[1]\n    return Math.sqrt(x*x + y*y)\n}\n\n//# sourceURL=webpack:///../node_modules/gl-vec2/distance.js?");

/***/ }),

/***/ "../node_modules/gl-vec3/add.js":
/*!**************************************!*\
  !*** ../node_modules/gl-vec3/add.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = add;\n\n/**\n * Adds two vec3's\n *\n * @param {vec3} out the receiving vector\n * @param {vec3} a the first operand\n * @param {vec3} b the second operand\n * @returns {vec3} out\n */\nfunction add(out, a, b) {\n    out[0] = a[0] + b[0]\n    out[1] = a[1] + b[1]\n    out[2] = a[2] + b[2]\n    return out\n}\n\n//# sourceURL=webpack:///../node_modules/gl-vec3/add.js?");

/***/ }),

/***/ "../node_modules/gl-vec3/copy.js":
/*!***************************************!*\
  !*** ../node_modules/gl-vec3/copy.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = copy;\n\n/**\n * Copy the values from one vec3 to another\n *\n * @param {vec3} out the receiving vector\n * @param {vec3} a the source vector\n * @returns {vec3} out\n */\nfunction copy(out, a) {\n    out[0] = a[0]\n    out[1] = a[1]\n    out[2] = a[2]\n    return out\n}\n\n//# sourceURL=webpack:///../node_modules/gl-vec3/copy.js?");

/***/ }),

/***/ "../node_modules/gl-vec3/cross.js":
/*!****************************************!*\
  !*** ../node_modules/gl-vec3/cross.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = cross;\n\n/**\n * Computes the cross product of two vec3's\n *\n * @param {vec3} out the receiving vector\n * @param {vec3} a the first operand\n * @param {vec3} b the second operand\n * @returns {vec3} out\n */\nfunction cross(out, a, b) {\n    var ax = a[0], ay = a[1], az = a[2],\n        bx = b[0], by = b[1], bz = b[2]\n\n    out[0] = ay * bz - az * by\n    out[1] = az * bx - ax * bz\n    out[2] = ax * by - ay * bx\n    return out\n}\n\n//# sourceURL=webpack:///../node_modules/gl-vec3/cross.js?");

/***/ }),

/***/ "../node_modules/gl-vec3/dot.js":
/*!**************************************!*\
  !*** ../node_modules/gl-vec3/dot.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = dot;\n\n/**\n * Calculates the dot product of two vec3's\n *\n * @param {vec3} a the first operand\n * @param {vec3} b the second operand\n * @returns {Number} dot product of a and b\n */\nfunction dot(a, b) {\n    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2]\n}\n\n//# sourceURL=webpack:///../node_modules/gl-vec3/dot.js?");

/***/ }),

/***/ "../node_modules/gl-vec3/length.js":
/*!*****************************************!*\
  !*** ../node_modules/gl-vec3/length.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = length;\n\n/**\n * Calculates the length of a vec3\n *\n * @param {vec3} a vector to calculate length of\n * @returns {Number} length of a\n */\nfunction length(a) {\n    var x = a[0],\n        y = a[1],\n        z = a[2]\n    return Math.sqrt(x*x + y*y + z*z)\n}\n\n//# sourceURL=webpack:///../node_modules/gl-vec3/length.js?");

/***/ }),

/***/ "../node_modules/gl-vec3/normalize.js":
/*!********************************************!*\
  !*** ../node_modules/gl-vec3/normalize.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = normalize;\n\n/**\n * Normalize a vec3\n *\n * @param {vec3} out the receiving vector\n * @param {vec3} a vector to normalize\n * @returns {vec3} out\n */\nfunction normalize(out, a) {\n    var x = a[0],\n        y = a[1],\n        z = a[2]\n    var len = x*x + y*y + z*z\n    if (len > 0) {\n        //TODO: evaluate use of glm_invsqrt here?\n        len = 1 / Math.sqrt(len)\n        out[0] = a[0] * len\n        out[1] = a[1] * len\n        out[2] = a[2] * len\n    }\n    return out\n}\n\n//# sourceURL=webpack:///../node_modules/gl-vec3/normalize.js?");

/***/ }),

/***/ "../node_modules/gl-vec3/set.js":
/*!**************************************!*\
  !*** ../node_modules/gl-vec3/set.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = set;\n\n/**\n * Set the components of a vec3 to the given values\n *\n * @param {vec3} out the receiving vector\n * @param {Number} x X component\n * @param {Number} y Y component\n * @param {Number} z Z component\n * @returns {vec3} out\n */\nfunction set(out, x, y, z) {\n    out[0] = x\n    out[1] = y\n    out[2] = z\n    return out\n}\n\n//# sourceURL=webpack:///../node_modules/gl-vec3/set.js?");

/***/ }),

/***/ "../node_modules/gl-vec3/subtract.js":
/*!*******************************************!*\
  !*** ../node_modules/gl-vec3/subtract.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = subtract;\n\n/**\n * Subtracts vector b from vector a\n *\n * @param {vec3} out the receiving vector\n * @param {vec3} a the first operand\n * @param {vec3} b the second operand\n * @returns {vec3} out\n */\nfunction subtract(out, a, b) {\n    out[0] = a[0] - b[0]\n    out[1] = a[1] - b[1]\n    out[2] = a[2] - b[2]\n    return out\n}\n\n//# sourceURL=webpack:///../node_modules/gl-vec3/subtract.js?");

/***/ }),

/***/ "../node_modules/gl-vec3/transformQuat.js":
/*!************************************************!*\
  !*** ../node_modules/gl-vec3/transformQuat.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = transformQuat;\n\n/**\n * Transforms the vec3 with a quat\n *\n * @param {vec3} out the receiving vector\n * @param {vec3} a the vector to transform\n * @param {quat} q quaternion to transform with\n * @returns {vec3} out\n */\nfunction transformQuat(out, a, q) {\n    // benchmarks: http://jsperf.com/quaternion-transform-vec3-implementations\n\n    var x = a[0], y = a[1], z = a[2],\n        qx = q[0], qy = q[1], qz = q[2], qw = q[3],\n\n        // calculate quat * vec\n        ix = qw * x + qy * z - qz * y,\n        iy = qw * y + qz * x - qx * z,\n        iz = qw * z + qx * y - qy * x,\n        iw = -qx * x - qy * y - qz * z\n\n    // calculate result * inverse quat\n    out[0] = ix * qw + iw * -qx + iy * -qz - iz * -qy\n    out[1] = iy * qw + iw * -qy + iz * -qx - ix * -qz\n    out[2] = iz * qw + iw * -qz + ix * -qy - iy * -qx\n    return out\n}\n\n//# sourceURL=webpack:///../node_modules/gl-vec3/transformQuat.js?");

/***/ }),

/***/ "../node_modules/gl-vec4/normalize.js":
/*!********************************************!*\
  !*** ../node_modules/gl-vec4/normalize.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = normalize\n\n/**\n * Normalize a vec4\n *\n * @param {vec4} out the receiving vector\n * @param {vec4} a vector to normalize\n * @returns {vec4} out\n */\nfunction normalize (out, a) {\n  var x = a[0],\n    y = a[1],\n    z = a[2],\n    w = a[3]\n  var len = x * x + y * y + z * z + w * w\n  if (len > 0) {\n    len = 1 / Math.sqrt(len)\n    out[0] = x * len\n    out[1] = y * len\n    out[2] = z * len\n    out[3] = w * len\n  }\n  return out\n}\n\n\n//# sourceURL=webpack:///../node_modules/gl-vec4/normalize.js?");

/***/ }),

/***/ "../node_modules/mouse-event-offset/index.js":
/*!***************************************************!*\
  !*** ../node_modules/mouse-event-offset/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var rootPosition = { left: 0, top: 0 }\n\nmodule.exports = mouseEventOffset\nfunction mouseEventOffset (ev, target, out) {\n  target = target || ev.currentTarget || ev.srcElement\n  if (!Array.isArray(out)) {\n    out = [ 0, 0 ]\n  }\n  var cx = ev.clientX || 0\n  var cy = ev.clientY || 0\n  var rect = getBoundingClientOffset(target)\n  out[0] = cx - rect.left\n  out[1] = cy - rect.top\n  return out\n}\n\nfunction getBoundingClientOffset (element) {\n  if (element === window ||\n      element === document ||\n      element === document.body) {\n    return rootPosition\n  } else {\n    return element.getBoundingClientRect()\n  }\n}\n\n\n//# sourceURL=webpack:///../node_modules/mouse-event-offset/index.js?");

/***/ }),

/***/ "../node_modules/mouse-wheel/wheel.js":
/*!********************************************!*\
  !*** ../node_modules/mouse-wheel/wheel.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar toPX = __webpack_require__(/*! to-px */ \"../node_modules/to-px/topx.js\")\n\nmodule.exports = mouseWheelListen\n\nfunction mouseWheelListen(element, callback, noScroll) {\n  if(typeof element === 'function') {\n    noScroll = !!callback\n    callback = element\n    element = window\n  }\n  var lineHeight = toPX('ex', element)\n  var listener = function(ev) {\n    if(noScroll) {\n      ev.preventDefault()\n    }\n    var dx = ev.deltaX || 0\n    var dy = ev.deltaY || 0\n    var dz = ev.deltaZ || 0\n    var mode = ev.deltaMode\n    var scale = 1\n    switch(mode) {\n      case 1:\n        scale = lineHeight\n      break\n      case 2:\n        scale = window.innerHeight\n      break\n    }\n    dx *= scale\n    dy *= scale\n    dz *= scale\n    if(dx || dy || dz) {\n      return callback(dx, dy, dz, ev)\n    }\n  }\n  element.addEventListener('wheel', listener)\n  return listener\n}\n\n\n//# sourceURL=webpack:///../node_modules/mouse-wheel/wheel.js?");

/***/ }),

/***/ "../node_modules/orbit-controls/index.js":
/*!***********************************************!*\
  !*** ../node_modules/orbit-controls/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var defined = __webpack_require__(/*! defined */ \"../node_modules/defined/index.js\")\nvar clamp = __webpack_require__(/*! clamp */ \"../node_modules/clamp/index.js\")\n\nvar inputEvents = __webpack_require__(/*! ./lib/input */ \"../node_modules/orbit-controls/lib/input.js\")\nvar quatFromVec3 = __webpack_require__(/*! quat-from-unit-vec3 */ \"../node_modules/quat-from-unit-vec3/index.js\")\nvar quatInvert = __webpack_require__(/*! gl-quat/invert */ \"../node_modules/gl-quat/invert.js\")\n\nvar glVec3 = {\n  length: __webpack_require__(/*! gl-vec3/length */ \"../node_modules/gl-vec3/length.js\"),\n  add: __webpack_require__(/*! gl-vec3/add */ \"../node_modules/gl-vec3/add.js\"),\n  subtract: __webpack_require__(/*! gl-vec3/subtract */ \"../node_modules/gl-vec3/subtract.js\"),\n  transformQuat: __webpack_require__(/*! gl-vec3/transformQuat */ \"../node_modules/gl-vec3/transformQuat.js\"),\n  copy: __webpack_require__(/*! gl-vec3/copy */ \"../node_modules/gl-vec3/copy.js\"),\n  normalize: __webpack_require__(/*! gl-vec3/normalize */ \"../node_modules/gl-vec3/normalize.js\"),\n  cross: __webpack_require__(/*! gl-vec3/cross */ \"../node_modules/gl-vec3/cross.js\")\n}\n\nvar Y_UP = [0, 1, 0]\nvar EPSILON = Math.pow(2, -23)\nvar tmpVec3 = [0, 0, 0]\n\nmodule.exports = createOrbitControls\nfunction createOrbitControls (opt) {\n  opt = opt || {}\n\n  var inputDelta = [0, 0, 0] // x, y, zoom\n  var offset = [0, 0, 0]\n\n  var upQuat = [0, 0, 0, 1]\n  var upQuatInverse = upQuat.slice()\n  var _phi = defined(opt.phi, Math.PI / 2)\n  var _theta = opt.theta || 0\n\n  var controls = {\n    update: update,\n    copyInto: copyInto,\n\n    position: opt.position ? opt.position.slice() : [0, 0, 1],\n    direction: [0, 0, -1],\n    up: opt.up ? opt.up.slice() : [0, 1, 0],\n\n    target: opt.target ? opt.target.slice() : [0, 0, 0],\n    distance: defined(opt.distance, 1),\n    damping: defined(opt.damping, 0.25),\n    rotateSpeed: defined(opt.rotateSpeed, 0.28),\n    zoomSpeed: defined(opt.zoomSpeed, 0.0075),\n    pinchSpeed: defined(opt.pinchSpeed, 0.0075),\n\n    pinch: opt.pinching !== false,\n    zoom: opt.zoom !== false,\n    rotate: opt.rotate !== false,\n\n    phiBounds: opt.phiBounds || [0, Math.PI],\n    thetaBounds: opt.thetaBounds || [-Infinity, Infinity],\n    distanceBounds: opt.distanceBounds || [0, Infinity]\n  }\n\n  // Compute distance if not defined in user options\n  if (typeof opt.distance !== 'number') {\n    glVec3.subtract(tmpVec3, controls.position, controls.target)\n    controls.distance = glVec3.length(tmpVec3)\n  }\n\n  var input = inputEvents({\n    parent: opt.parent || window,\n    element: opt.element,\n    rotate: opt.rotate !== false ? inputRotate : null,\n    zoom: opt.zoom !== false ? inputZoom : null,\n    pinch: opt.pinch !== false ? inputPinch : null\n  })\n\n  controls.enable = input.enable\n  controls.disable = input.disable\n\n  Object.defineProperties(controls, {\n    phi: {\n      get: function () { return _phi },\n      set: function (v) {\n        _phi = v\n        applyPhiTheta()\n      }\n    },\n    theta: {\n      get: function () { return _theta },\n      set: function (v) {\n        _theta = v\n        applyPhiTheta()\n      }\n    },\n    dragging: {\n      get: function () { return input.isDragging() }\n    },\n    pinching: {\n      get: function () { return input.isPinching() }\n    }\n  })\n\n  // Apply an initial phi and theta\n  applyPhiTheta()\n\n  return controls\n\n  function inputRotate (dx, dy) {\n    var PI2 = Math.PI * 2\n    inputDelta[0] -= PI2 * dx * controls.rotateSpeed\n    inputDelta[1] -= PI2 * dy * controls.rotateSpeed\n  }\n\n  function inputZoom (delta) {\n    inputDelta[2] += delta * controls.zoomSpeed\n  }\n\n  function inputPinch (delta) {\n    inputDelta[2] -= delta * controls.pinchSpeed\n  }\n\n  function updateDirection () {\n    var cameraUp = controls.up || Y_UP\n    quatFromVec3(upQuat, cameraUp, Y_UP)\n    quatInvert(upQuatInverse, upQuat)\n\n    var distance = controls.distance\n\n    glVec3.subtract(offset, controls.position, controls.target)\n    glVec3.transformQuat(offset, offset, upQuat)\n\n    var theta = Math.atan2(offset[0], offset[2])\n    var phi = Math.atan2(Math.sqrt(offset[0] * offset[0] + offset[2] * offset[2]), offset[1])\n\n    theta += inputDelta[0]\n    phi += inputDelta[1]\n\n    theta = clamp(theta, controls.thetaBounds[0], controls.thetaBounds[1])\n    phi = clamp(phi, controls.phiBounds[0], controls.phiBounds[1])\n    phi = clamp(phi, EPSILON, Math.PI - EPSILON)\n\n    distance += inputDelta[2]\n    distance = clamp(distance, controls.distanceBounds[0], controls.distanceBounds[1])\n\n    var radius = Math.abs(distance) <= EPSILON ? EPSILON : distance\n    offset[0] = radius * Math.sin(phi) * Math.sin(theta)\n    offset[1] = radius * Math.cos(phi)\n    offset[2] = radius * Math.sin(phi) * Math.cos(theta)\n\n    _phi = phi\n    _theta = theta\n    controls.distance = distance\n\n    glVec3.transformQuat(offset, offset, upQuatInverse)\n    glVec3.add(controls.position, controls.target, offset)\n    camLookAt(controls.direction, cameraUp, controls.position, controls.target)\n  }\n\n  function update () {\n    updateDirection()\n    var damp = typeof controls.damping === 'number' ? controls.damping : 1\n    for (var i = 0; i < inputDelta.length; i++) {\n      inputDelta[i] *= 1 - damp\n    }\n  }\n\n  function copyInto (position, direction, up) {\n    if (position) glVec3.copy(position, controls.position)\n    if (direction) glVec3.copy(direction, controls.direction)\n    if (up) glVec3.copy(up, controls.up)\n  }\n\n  function applyPhiTheta () {\n    var phi = controls.phi\n    var theta = controls.theta\n    theta = clamp(theta, controls.thetaBounds[0], controls.thetaBounds[1])\n    phi = clamp(phi, controls.phiBounds[0], controls.phiBounds[1])\n    phi = clamp(phi, EPSILON, Math.PI - EPSILON)\n\n    var dist = Math.max(EPSILON, controls.distance)\n    controls.position[0] = dist * Math.sin(phi) * Math.sin(theta)\n    controls.position[1] = dist * Math.cos(phi)\n    controls.position[2] = dist * Math.sin(phi) * Math.cos(theta)\n    glVec3.add(controls.position, controls.position, controls.target)\n\n    updateDirection()\n  }\n}\n\nfunction camLookAt (direction, up, position, target) {\n  glVec3.copy(direction, target)\n  glVec3.subtract(direction, direction, position)\n  glVec3.normalize(direction, direction)\n}\n\n\n//# sourceURL=webpack:///../node_modules/orbit-controls/index.js?");

/***/ }),

/***/ "../node_modules/orbit-controls/lib/input.js":
/*!***************************************************!*\
  !*** ../node_modules/orbit-controls/lib/input.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var mouseWheel = __webpack_require__(/*! mouse-wheel */ \"../node_modules/mouse-wheel/wheel.js\")\nvar eventOffset = __webpack_require__(/*! mouse-event-offset */ \"../node_modules/mouse-event-offset/index.js\")\nvar createPinch = __webpack_require__(/*! touch-pinch */ \"../node_modules/touch-pinch/index.js\")\n\nmodule.exports = inputEvents\nfunction inputEvents (opt) {\n  var element = opt.element || window\n  var parent = opt.parent || element\n  var mouseStart = [0, 0]\n  var dragging = false\n  var tmp = [0, 0]\n  var tmp2 = [0, 0]\n  var pinch\n\n  var zoomFn = opt.zoom\n  var rotateFn = opt.rotate\n  var pinchFn = opt.pinch\n  var mouseWheelListener\n  var enabled = false\n  enable()\n\n  return {\n    isDragging: function () {\n      return dragging\n    },\n    isPinching: isPinching,\n    enable: enable,\n    disable: disable\n  }\n\n  function enable () {\n    if (enabled) return\n    enabled = true\n    if (zoomFn) {\n      mouseWheelListener = mouseWheel(element, function (dx, dy) {\n        zoomFn(dy)\n      }, true)\n    }\n\n    if (rotateFn) {\n      element.addEventListener('mousedown', onInputDown, false)\n\n      // for dragging to work outside canvas bounds,\n      // mouse move/up events have to be added to parent, i.e. window\n      parent.addEventListener('mousemove', onInputMove, false)\n      parent.addEventListener('mouseup', onInputUp, false)\n    }\n\n    if (rotateFn || pinchFn) {\n      pinch = createPinch(element)\n\n      // don't allow simulated mouse events\n      element.addEventListener('touchstart', preventDefault, false)\n\n      if (rotateFn) {\n        element.addEventListener('touchmove', onTouchMove, false)\n        pinch.on('place', onPinchPlace)\n        pinch.on('lift', onPinchLift)\n      }\n      if (pinchFn) {\n        pinch.on('change', onPinchChange)\n      }\n    }\n  }\n\n  function disable () {\n    if (!enabled) return\n    enabled = false\n    if (mouseWheelListener) {\n      element.removeEventListener('wheel', mouseWheelListener)\n    }\n    if (pinch) {\n      pinch.disable()\n      element.removeEventListener('touchstart', preventDefault, false)\n      if (rotateFn) {\n        element.removeEventListener('touchmove', onTouchMove, false)\n      }\n    }\n    if (rotateFn) {\n      parent.removeEventListener('mousedown', onInputDown, false)\n      parent.removeEventListener('mousemove', onInputMove, false)\n      parent.removeEventListener('mouseup', onInputUp, false)\n    }\n  }\n\n  function preventDefault (ev) {\n    ev.preventDefault()\n  }\n\n  function onTouchMove (ev) {\n    if (!dragging || isPinching()) return\n\n    // find currently active finger\n    for (var i = 0; i < ev.changedTouches.length; i++) {\n      var changed = ev.changedTouches[i]\n      var idx = pinch.indexOfTouch(changed)\n      // if pinch is disabled but rotate enabled,\n      // only allow first finger to affect rotation\n      var allow = pinchFn ? idx !== -1 : idx === 0\n      if (allow) {\n        onInputMove(changed)\n        break\n      }\n    }\n  }\n\n  function onPinchPlace (newFinger, lastFinger) {\n    dragging = !isPinching()\n    if (dragging) {\n      var firstFinger = lastFinger || newFinger\n      onInputDown(firstFinger)\n    }\n  }\n\n  function onPinchLift (lifted, remaining) {\n    // if either finger is down, consider it dragging\n    var sum = pinch.fingers.reduce(function (sum, item) {\n      return sum + (item ? 1 : 0)\n    }, 0)\n    dragging = pinchFn && sum >= 1\n\n    if (dragging && remaining) {\n      eventOffset(remaining, element, mouseStart)\n    }\n  }\n\n  function isPinching () {\n    return pinch.pinching && pinchFn\n  }\n\n  function onPinchChange (current, prev) {\n    pinchFn(current - prev)\n  }\n\n  function onInputDown (ev) {\n    eventOffset(ev, element, mouseStart)\n    if (insideBounds(mouseStart)) {\n      dragging = true\n    }\n  }\n\n  function onInputUp () {\n    dragging = false\n  }\n\n  function onInputMove (ev) {\n    var end = eventOffset(ev, element, tmp)\n    if (pinch && isPinching()) {\n      mouseStart = end\n      return\n    }\n    if (!dragging) return\n    var rect = getClientSize(tmp2)\n    var dx = (end[0] - mouseStart[0]) / rect[0]\n    var dy = (end[1] - mouseStart[1]) / rect[1]\n    rotateFn(dx, dy)\n    mouseStart[0] = end[0]\n    mouseStart[1] = end[1]\n  }\n\n  function insideBounds (pos) {\n    if (element === window ||\n        element === document ||\n        element === document.body) {\n      return true\n    } else {\n      var rect = element.getBoundingClientRect()\n      return pos[0] >= 0 && pos[1] >= 0 &&\n        pos[0] < rect.width && pos[1] < rect.height\n    }\n  }\n\n  function getClientSize (out) {\n    var source = element\n    if (source === window ||\n        source === document ||\n        source === document.body) {\n      source = document.documentElement\n    }\n    out[0] = source.clientWidth\n    out[1] = source.clientHeight\n    return out\n  }\n}\n\n\n//# sourceURL=webpack:///../node_modules/orbit-controls/lib/input.js?");

/***/ }),

/***/ "../node_modules/parse-unit/index.js":
/*!*******************************************!*\
  !*** ../node_modules/parse-unit/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function parseUnit(str, out) {\n    if (!out)\n        out = [ 0, '' ]\n\n    str = String(str)\n    var num = parseFloat(str, 10)\n    out[0] = num\n    out[1] = str.match(/[\\d.\\-\\+]*\\s*(.*)/)[1] || ''\n    return out\n}\n\n//# sourceURL=webpack:///../node_modules/parse-unit/index.js?");

/***/ }),

/***/ "../node_modules/quat-from-unit-vec3/index.js":
/*!****************************************************!*\
  !*** ../node_modules/quat-from-unit-vec3/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Original implementation:\n// http://lolengine.net/blog/2014/02/24/quaternion-from-two-vectors-final\n\nvar dot = __webpack_require__(/*! gl-vec3/dot */ \"../node_modules/gl-vec3/dot.js\")\nvar set = __webpack_require__(/*! gl-vec3/set */ \"../node_modules/gl-vec3/set.js\")\nvar normalize = __webpack_require__(/*! gl-quat/normalize */ \"../node_modules/gl-quat/normalize.js\")\nvar cross = __webpack_require__(/*! gl-vec3/cross */ \"../node_modules/gl-vec3/cross.js\")\n\nvar tmp = [0, 0, 0]\nvar EPS = 1e-6\n\nmodule.exports = quatFromUnitVec3\nfunction quatFromUnitVec3 (out, a, b) {\n  // assumes a and b are normalized\n  var r = dot(a, b) + 1\n  if (r < EPS) {\n    /* If u and v are exactly opposite, rotate 180 degrees\n     * around an arbitrary orthogonal axis. Axis normalisation\n     * can happen later, when we normalise the quaternion. */\n    r = 0\n    if (Math.abs(a[0]) > Math.abs(a[2])) {\n      set(tmp, -a[1], a[0], 0)\n    } else {\n      set(tmp, 0, -a[2], a[1])\n    }\n  } else {\n    /* Otherwise, build quaternion the standard way. */\n    cross(tmp, a, b)\n  }\n\n  out[0] = tmp[0]\n  out[1] = tmp[1]\n  out[2] = tmp[2]\n  out[3] = r\n  normalize(out, out)\n  return out\n}\n\n\n//# sourceURL=webpack:///../node_modules/quat-from-unit-vec3/index.js?");

/***/ }),

/***/ "../node_modules/to-px/topx.js":
/*!*************************************!*\
  !*** ../node_modules/to-px/topx.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar parseUnit = __webpack_require__(/*! parse-unit */ \"../node_modules/parse-unit/index.js\")\n\nmodule.exports = toPX\n\nvar PIXELS_PER_INCH = 96\n\nfunction getPropertyInPX(element, prop) {\n  var parts = parseUnit(getComputedStyle(element).getPropertyValue(prop))\n  return parts[0] * toPX(parts[1], element)\n}\n\n//This brutal hack is needed\nfunction getSizeBrutal(unit, element) {\n  var testDIV = document.createElement('div')\n  testDIV.style['font-size'] = '128' + unit\n  element.appendChild(testDIV)\n  var size = getPropertyInPX(testDIV, 'font-size') / 128\n  element.removeChild(testDIV)\n  return size\n}\n\nfunction toPX(str, element) {\n  element = element || document.body\n  str = (str || 'px').trim().toLowerCase()\n  if(element === window || element === document) {\n    element = document.body \n  }\n  switch(str) {\n    case '%':  //Ambiguous, not sure if we should use width or height\n      return element.clientHeight / 100.0\n    case 'ch':\n    case 'ex':\n      return getSizeBrutal(str, element)\n    case 'em':\n      return getPropertyInPX(element, 'font-size')\n    case 'rem':\n      return getPropertyInPX(document.body, 'font-size')\n    case 'vw':\n      return window.innerWidth/100\n    case 'vh':\n      return window.innerHeight/100\n    case 'vmin':\n      return Math.min(window.innerWidth, window.innerHeight) / 100\n    case 'vmax':\n      return Math.max(window.innerWidth, window.innerHeight) / 100\n    case 'in':\n      return PIXELS_PER_INCH\n    case 'cm':\n      return PIXELS_PER_INCH / 2.54\n    case 'mm':\n      return PIXELS_PER_INCH / 25.4\n    case 'pt':\n      return PIXELS_PER_INCH / 72\n    case 'pc':\n      return PIXELS_PER_INCH / 6\n  }\n  return 1\n}\n\n//# sourceURL=webpack:///../node_modules/to-px/topx.js?");

/***/ }),

/***/ "../node_modules/touch-pinch/index.js":
/*!********************************************!*\
  !*** ../node_modules/touch-pinch/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var getDistance = __webpack_require__(/*! gl-vec2/distance */ \"../node_modules/gl-vec2/distance.js\")\nvar EventEmitter = __webpack_require__(/*! events */ \"./node_modules/events/events.js\").EventEmitter\nvar dprop = __webpack_require__(/*! dprop */ \"../node_modules/dprop/index.js\")\nvar eventOffset = __webpack_require__(/*! mouse-event-offset */ \"../node_modules/mouse-event-offset/index.js\")\n\nmodule.exports = touchPinch\nfunction touchPinch (target) {\n  target = target || window\n\n  var emitter = new EventEmitter()\n  var fingers = [ null, null ]\n  var activeCount = 0\n\n  var lastDistance = 0\n  var ended = false\n  var enabled = false\n\n  // some read-only values\n  Object.defineProperties(emitter, {\n    pinching: dprop(function () {\n      return activeCount === 2\n    }),\n\n    fingers: dprop(function () {\n      return fingers\n    })\n  })\n\n  enable()\n  emitter.enable = enable\n  emitter.disable = disable\n  emitter.indexOfTouch = indexOfTouch\n  return emitter\n\n  function indexOfTouch (touch) {\n    var id = touch.identifier\n    for (var i = 0; i < fingers.length; i++) {\n      if (fingers[i] &&\n        fingers[i].touch &&\n        fingers[i].touch.identifier === id) {\n        return i\n      }\n    }\n    return -1\n  }\n\n  function enable () {\n    if (enabled) return\n    enabled = true\n    target.addEventListener('touchstart', onTouchStart, false)\n    target.addEventListener('touchmove', onTouchMove, false)\n    target.addEventListener('touchend', onTouchRemoved, false)\n    target.addEventListener('touchcancel', onTouchRemoved, false)\n  }\n\n  function disable () {\n    if (!enabled) return\n    enabled = false\n    activeCount = 0\n    fingers[0] = null\n    fingers[1] = null\n    lastDistance = 0\n    ended = false\n    target.removeEventListener('touchstart', onTouchStart, false)\n    target.removeEventListener('touchmove', onTouchMove, false)\n    target.removeEventListener('touchend', onTouchRemoved, false)\n    target.removeEventListener('touchcancel', onTouchRemoved, false)\n  }\n\n  function onTouchStart (ev) {\n    for (var i = 0; i < ev.changedTouches.length; i++) {\n      var newTouch = ev.changedTouches[i]\n      var id = newTouch.identifier\n      var idx = indexOfTouch(id)\n\n      if (idx === -1 && activeCount < 2) {\n        var first = activeCount === 0\n\n        // newest and previous finger (previous may be undefined)\n        var newIndex = fingers[0] ? 1 : 0\n        var oldIndex = fingers[0] ? 0 : 1\n        var newFinger = new Finger()\n\n        // add to stack\n        fingers[newIndex] = newFinger\n        activeCount++\n\n        // update touch event & position\n        newFinger.touch = newTouch\n        eventOffset(newTouch, target, newFinger.position)\n\n        var oldTouch = fingers[oldIndex] ? fingers[oldIndex].touch : undefined\n        emitter.emit('place', newTouch, oldTouch)\n\n        if (!first) {\n          var initialDistance = computeDistance()\n          ended = false\n          emitter.emit('start', initialDistance)\n          lastDistance = initialDistance\n        }\n      }\n    }\n  }\n\n  function onTouchMove (ev) {\n    var changed = false\n    for (var i = 0; i < ev.changedTouches.length; i++) {\n      var movedTouch = ev.changedTouches[i]\n      var idx = indexOfTouch(movedTouch)\n      if (idx !== -1) {\n        changed = true\n        fingers[idx].touch = movedTouch // avoid caching touches\n        eventOffset(movedTouch, target, fingers[idx].position)\n      }\n    }\n\n    if (activeCount === 2 && changed) {\n      var currentDistance = computeDistance()\n      emitter.emit('change', currentDistance, lastDistance)\n      lastDistance = currentDistance\n    }\n  }\n\n  function onTouchRemoved (ev) {\n    for (var i = 0; i < ev.changedTouches.length; i++) {\n      var removed = ev.changedTouches[i]\n      var idx = indexOfTouch(removed)\n\n      if (idx !== -1) {\n        fingers[idx] = null\n        activeCount--\n        var otherIdx = idx === 0 ? 1 : 0\n        var otherTouch = fingers[otherIdx] ? fingers[otherIdx].touch : undefined\n        emitter.emit('lift', removed, otherTouch)\n      }\n    }\n\n    if (!ended && activeCount !== 2) {\n      ended = true\n      emitter.emit('end')\n    }\n  }\n\n  function computeDistance () {\n    if (activeCount < 2) return 0\n    return getDistance(fingers[0].position, fingers[1].position)\n  }\n}\n\nfunction Finger () {\n  this.position = [0, 0]\n  this.touch = null\n}\n\n\n//# sourceURL=webpack:///../node_modules/touch-pinch/index.js?");

/***/ }),

/***/ "./examples/src/scene.js":
/*!*******************************!*\
  !*** ./examples/src/scene.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var orbit_controls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! orbit-controls */ \"../node_modules/orbit-controls/index.js\");\n/* harmony import */ var orbit_controls__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(orbit_controls__WEBPACK_IMPORTED_MODULE_0__);\n\nconst controls = orbit_controls__WEBPACK_IMPORTED_MODULE_0___default()({\n  position: [0, 0, 10]\n});\n\nconst renderer = new NEXT.Renderer();\n\nrenderer.setSize(window.innerWidth, window.innerHeight);\ndocument.body.appendChild(renderer.canvas);\n\nNEXT.Shader.collection = NEXT.shaders;\n\nconst scene = new NEXT.Scene();\n\nconst dirLight = new NEXT.DirectionalLight();\ndirLight.intensity = 3;\ndirLight.position.set(0, 10, 0);\ndirLight.quaternion.setFromEuler(-Math.PI / 2, 0, 0);\nscene.add(dirLight);\n\nconst camera = new NEXT.Camera({\n  type: 'perspective',\n  fovy: Math.PI / 3,\n  aspect: window.innerWidth / window.innerHeight\n});\n\ncamera.position.set(0, 0, 10);\n\nconst camera2 = new NEXT.Camera({\n  type: 'perspective',\n  fovy: Math.PI / 3,\n  aspect: window.innerWidth / window.innerHeight\n});\n\nconst orthoCamera = new NEXT.Camera.ortho(1, 1);\n\n// img.onload = () => {\nconst material = new NEXT.LambertMaterial({\n  map: new NEXT.Texture.fromUrl('./assets/texture.png')\n});\n\nconst material2 = new NEXT.LambertMaterial({\n  color: [1, 0, 0]\n});\n\n// setTimeout(() => {\n//   material.uniforms.map = new NEXT.Texture.fromUrl('./assets/texture2.jpg');\n//   // material.uniforms.map.then(v => {\n//   //   v.isTest = true;\n//   // });\n// }, 1000);\n\nconst sphere1 = new NEXT.Sphere({\n  radius: 2,\n  shader: material\n});\n\nsphere1.position.set(0, 0, 0);\n\n// vec3.set(sphere1.position, 0, 0, 0);\nscene.add(sphere1);\n\nconst planeReceiver = new NEXT.Plane({\n  width: 10,\n  height: 10,\n  shader: material2\n});\n\nplaneReceiver.receiveShadow = true;\n\nplaneReceiver.position.set(0, -4, 0);\nplaneReceiver.quaternion.setFromEuler(-Math.PI / 2, 0, 0);\nscene.add(planeReceiver);\n\nconst fb = new NEXT.FrameBuffer(window.innerWidth, window.innerHeight, {depth: true});\n// const fb = null;\n\nconst flat2 = new NEXT.FlatMaterial({\n  modifiers: {\n    f_pars: () => `\n      uniform sampler2D fbo;\n    `,\n    f_main: () => `\n      // float n = 1.0;\n      // float f = 100.0;\n      // float z = texture(fbo, v_uv).x;\n      // float grey = (2.0 * n) / (f + n - z*(f-n));\n      // color = vec3(grey);\n      color = texture(fbo, v_uv).xyz;\n    `,\n    v_main: () => `\n      v_uv.y = 1.0 - v_uv.y;\n    `\n  },\n  defines: {\n    USE_UV: true\n  }\n});\n\nsetTimeout(() => {\n  console.log(flat2.uniforms);\n  flat2.uniforms.fbo = window.shadowMap.texture;\n}, 1000);\n\n// flat2\n\nconst plane = new NEXT.Plane({\n  width: 4,\n  height: 2,\n  shader: flat2\n});\n\nplane.position.set(6, 0, 0);\n// plane.quaternion.setFromEuler(-Math.PI, 0, 0);\n\n// vec3.set(plane.position, 6, 0, 0);\n// quat.rotateX(plane.quaternion, plane.quaternion, -Math.PI / 2);\nscene.add(plane);\n\nlet cam = camera;\n\n(function update() {\n  requestAnimationFrame(update);\n\n  controls.update();\n\n  vec3.copy(cam.position.value, controls.position);\n  const _mat4 = mat4.lookAt([], cam.position.value, vec3.add([], cam.position.value, controls.direction), controls.up);\n  quat.copy(cam.quaternion.value, quat.fromMat3([], mat3.transpose([], mat3.fromMat4([], _mat4))));\n\n  // orthoCamera.matrixAutoUpdate = false;\n  // orthoCamera.matrix.copy(dirLight.matrix);\n  // mat4.transpose(orthoCamera.matrix, orthoCamera.matrix);\n\n  // plane.visible = false;\n  // renderer.render(orthoCamera, fb);\n  plane.visible = true;\n  renderer.render(camera);\n})();\n\nconsole.log(orthoCamera);\n\nrenderer.setScene(scene);\n// renderer.render(orthoCamera);\n\nwindow.renderer = renderer;\n\n// const sphereGeo = NEXT.Sphere.Geometry({\n//   radius: 1\n// });\n//\n// const mesh = new NEXT.Mesh(sphereGeo, {\n//   shader: NEXT.shaders.default\n// });\n\n// scene.add(mesh);\n\n\n//# sourceURL=webpack:///./examples/src/scene.js?");

/***/ }),

/***/ "./node_modules/events/events.js":
/*!***************************************!*\
  !*** ./node_modules/events/events.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Copyright Joyent, Inc. and other Node contributors.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a\n// copy of this software and associated documentation files (the\n// \"Software\"), to deal in the Software without restriction, including\n// without limitation the rights to use, copy, modify, merge, publish,\n// distribute, sublicense, and/or sell copies of the Software, and to permit\n// persons to whom the Software is furnished to do so, subject to the\n// following conditions:\n//\n// The above copyright notice and this permission notice shall be included\n// in all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS\n// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF\n// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN\n// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,\n// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR\n// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE\n// USE OR OTHER DEALINGS IN THE SOFTWARE.\n\nfunction EventEmitter() {\n  this._events = this._events || {};\n  this._maxListeners = this._maxListeners || undefined;\n}\nmodule.exports = EventEmitter;\n\n// Backwards-compat with node 0.10.x\nEventEmitter.EventEmitter = EventEmitter;\n\nEventEmitter.prototype._events = undefined;\nEventEmitter.prototype._maxListeners = undefined;\n\n// By default EventEmitters will print a warning if more than 10 listeners are\n// added to it. This is a useful default which helps finding memory leaks.\nEventEmitter.defaultMaxListeners = 10;\n\n// Obviously not all Emitters should be limited to 10. This function allows\n// that to be increased. Set to zero for unlimited.\nEventEmitter.prototype.setMaxListeners = function(n) {\n  if (!isNumber(n) || n < 0 || isNaN(n))\n    throw TypeError('n must be a positive number');\n  this._maxListeners = n;\n  return this;\n};\n\nEventEmitter.prototype.emit = function(type) {\n  var er, handler, len, args, i, listeners;\n\n  if (!this._events)\n    this._events = {};\n\n  // If there is no 'error' event listener then throw.\n  if (type === 'error') {\n    if (!this._events.error ||\n        (isObject(this._events.error) && !this._events.error.length)) {\n      er = arguments[1];\n      if (er instanceof Error) {\n        throw er; // Unhandled 'error' event\n      } else {\n        // At least give some kind of context to the user\n        var err = new Error('Uncaught, unspecified \"error\" event. (' + er + ')');\n        err.context = er;\n        throw err;\n      }\n    }\n  }\n\n  handler = this._events[type];\n\n  if (isUndefined(handler))\n    return false;\n\n  if (isFunction(handler)) {\n    switch (arguments.length) {\n      // fast cases\n      case 1:\n        handler.call(this);\n        break;\n      case 2:\n        handler.call(this, arguments[1]);\n        break;\n      case 3:\n        handler.call(this, arguments[1], arguments[2]);\n        break;\n      // slower\n      default:\n        args = Array.prototype.slice.call(arguments, 1);\n        handler.apply(this, args);\n    }\n  } else if (isObject(handler)) {\n    args = Array.prototype.slice.call(arguments, 1);\n    listeners = handler.slice();\n    len = listeners.length;\n    for (i = 0; i < len; i++)\n      listeners[i].apply(this, args);\n  }\n\n  return true;\n};\n\nEventEmitter.prototype.addListener = function(type, listener) {\n  var m;\n\n  if (!isFunction(listener))\n    throw TypeError('listener must be a function');\n\n  if (!this._events)\n    this._events = {};\n\n  // To avoid recursion in the case that type === \"newListener\"! Before\n  // adding it to the listeners, first emit \"newListener\".\n  if (this._events.newListener)\n    this.emit('newListener', type,\n              isFunction(listener.listener) ?\n              listener.listener : listener);\n\n  if (!this._events[type])\n    // Optimize the case of one listener. Don't need the extra array object.\n    this._events[type] = listener;\n  else if (isObject(this._events[type]))\n    // If we've already got an array, just append.\n    this._events[type].push(listener);\n  else\n    // Adding the second element, need to change to array.\n    this._events[type] = [this._events[type], listener];\n\n  // Check for listener leak\n  if (isObject(this._events[type]) && !this._events[type].warned) {\n    if (!isUndefined(this._maxListeners)) {\n      m = this._maxListeners;\n    } else {\n      m = EventEmitter.defaultMaxListeners;\n    }\n\n    if (m && m > 0 && this._events[type].length > m) {\n      this._events[type].warned = true;\n      console.error('(node) warning: possible EventEmitter memory ' +\n                    'leak detected. %d listeners added. ' +\n                    'Use emitter.setMaxListeners() to increase limit.',\n                    this._events[type].length);\n      if (typeof console.trace === 'function') {\n        // not supported in IE 10\n        console.trace();\n      }\n    }\n  }\n\n  return this;\n};\n\nEventEmitter.prototype.on = EventEmitter.prototype.addListener;\n\nEventEmitter.prototype.once = function(type, listener) {\n  if (!isFunction(listener))\n    throw TypeError('listener must be a function');\n\n  var fired = false;\n\n  function g() {\n    this.removeListener(type, g);\n\n    if (!fired) {\n      fired = true;\n      listener.apply(this, arguments);\n    }\n  }\n\n  g.listener = listener;\n  this.on(type, g);\n\n  return this;\n};\n\n// emits a 'removeListener' event iff the listener was removed\nEventEmitter.prototype.removeListener = function(type, listener) {\n  var list, position, length, i;\n\n  if (!isFunction(listener))\n    throw TypeError('listener must be a function');\n\n  if (!this._events || !this._events[type])\n    return this;\n\n  list = this._events[type];\n  length = list.length;\n  position = -1;\n\n  if (list === listener ||\n      (isFunction(list.listener) && list.listener === listener)) {\n    delete this._events[type];\n    if (this._events.removeListener)\n      this.emit('removeListener', type, listener);\n\n  } else if (isObject(list)) {\n    for (i = length; i-- > 0;) {\n      if (list[i] === listener ||\n          (list[i].listener && list[i].listener === listener)) {\n        position = i;\n        break;\n      }\n    }\n\n    if (position < 0)\n      return this;\n\n    if (list.length === 1) {\n      list.length = 0;\n      delete this._events[type];\n    } else {\n      list.splice(position, 1);\n    }\n\n    if (this._events.removeListener)\n      this.emit('removeListener', type, listener);\n  }\n\n  return this;\n};\n\nEventEmitter.prototype.removeAllListeners = function(type) {\n  var key, listeners;\n\n  if (!this._events)\n    return this;\n\n  // not listening for removeListener, no need to emit\n  if (!this._events.removeListener) {\n    if (arguments.length === 0)\n      this._events = {};\n    else if (this._events[type])\n      delete this._events[type];\n    return this;\n  }\n\n  // emit removeListener for all listeners on all events\n  if (arguments.length === 0) {\n    for (key in this._events) {\n      if (key === 'removeListener') continue;\n      this.removeAllListeners(key);\n    }\n    this.removeAllListeners('removeListener');\n    this._events = {};\n    return this;\n  }\n\n  listeners = this._events[type];\n\n  if (isFunction(listeners)) {\n    this.removeListener(type, listeners);\n  } else if (listeners) {\n    // LIFO order\n    while (listeners.length)\n      this.removeListener(type, listeners[listeners.length - 1]);\n  }\n  delete this._events[type];\n\n  return this;\n};\n\nEventEmitter.prototype.listeners = function(type) {\n  var ret;\n  if (!this._events || !this._events[type])\n    ret = [];\n  else if (isFunction(this._events[type]))\n    ret = [this._events[type]];\n  else\n    ret = this._events[type].slice();\n  return ret;\n};\n\nEventEmitter.prototype.listenerCount = function(type) {\n  if (this._events) {\n    var evlistener = this._events[type];\n\n    if (isFunction(evlistener))\n      return 1;\n    else if (evlistener)\n      return evlistener.length;\n  }\n  return 0;\n};\n\nEventEmitter.listenerCount = function(emitter, type) {\n  return emitter.listenerCount(type);\n};\n\nfunction isFunction(arg) {\n  return typeof arg === 'function';\n}\n\nfunction isNumber(arg) {\n  return typeof arg === 'number';\n}\n\nfunction isObject(arg) {\n  return typeof arg === 'object' && arg !== null;\n}\n\nfunction isUndefined(arg) {\n  return arg === void 0;\n}\n\n\n//# sourceURL=webpack:///./node_modules/events/events.js?");

/***/ })

/******/ });