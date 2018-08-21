(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (factory((global.NEXT = {})));
}(this, (function (exports) { 'use strict';

  var init_pars = "precision mediump float;\n#define GLSLIFY 1\nin vec3 position;\n\nuniform mat4 projectionMatrix;\nuniform mat4 modelMatrix;\nuniform mat4 viewMatrix;\n"; // eslint-disable-line

  var init_pars$1 = /*#__PURE__*/Object.freeze({
    default: init_pars
  });

  var main = "#define GLSLIFY 1\n// placeholder\n"; // eslint-disable-line

  var main$1 = /*#__PURE__*/Object.freeze({
    default: main
  });

  var normal_pars = "#define GLSLIFY 1\nin vec3 normal;\nout vec3 v_normal;\n"; // eslint-disable-line

  var normal_pars$1 = /*#__PURE__*/Object.freeze({
    default: normal_pars
  });

  var normal = "#define GLSLIFY 1\nv_normal = normalize((modelMatrix * vec4(normal, 0.0)).xyz); // FIXME: normalize needed?\n"; // eslint-disable-line

  var normal$1 = /*#__PURE__*/Object.freeze({
    default: normal
  });

  var pars = "#define GLSLIFY 1\n// placeholder\n"; // eslint-disable-line

  var pars$1 = /*#__PURE__*/Object.freeze({
    default: pars
  });

  var uv_pars = "#define GLSLIFY 1\n#if defined(USE_MAP) || defined(USE_UV)\n  in vec2 uv;\n  out vec2 v_uv;\n#endif\n"; // eslint-disable-line

  var uv_pars$1 = /*#__PURE__*/Object.freeze({
    default: uv_pars
  });

  var uv = "#define GLSLIFY 1\n#if defined(USE_MAP) || defined(USE_UV)\n  v_uv = uv;\n  v_uv.y = 1.0 - v_uv.y;\n#endif\n"; // eslint-disable-line

  var uv$1 = /*#__PURE__*/Object.freeze({
    default: uv
  });

  var color = "#define GLSLIFY 1\n"; // eslint-disable-line

  var color$1 = /*#__PURE__*/Object.freeze({
    default: color
  });

  var init_pars$2 = "precision mediump float;\n#define GLSLIFY 1\n\n#ifdef USE_COLOR\n  uniform vec3 diffuse;\n#endif\n"; // eslint-disable-line

  var init_pars$3 = /*#__PURE__*/Object.freeze({
    default: init_pars$2
  });

  var init = "#define GLSLIFY 1\nvec3 color;\n\n#ifdef USE_COLOR\n  color = diffuse;\n#endif\n"; // eslint-disable-line

  var init$1 = /*#__PURE__*/Object.freeze({
    default: init
  });

  var lambert_light_pars = "#define GLSLIFY 1\nuniform vec3 u_lightDir;\n"; // eslint-disable-line

  var lambert_light_pars$1 = /*#__PURE__*/Object.freeze({
    default: lambert_light_pars
  });

  var lambert_light = "#define GLSLIFY 1\n// requires [f normal]\nfloat lightness = dot(u_lightDir, normal);\n\ncolor = color * lightness;\n"; // eslint-disable-line

  var lambert_light$1 = /*#__PURE__*/Object.freeze({
    default: lambert_light
  });

  var lights_pars = "#define GLSLIFY 1\n#define NUM_DIRECTIONAL_LIGHTS 0\n\n[f directional_lights_pars]\n\n#if (NUM_DIRECTIONAL_LIGHTS > 0)\n  // uniform DirectionalLight directionalLights[NUM_DIRECTIONAL_LIGHTS];\n\n  uniform Lights {\n    DirectionalLight directionalLights[NUM_DIRECTIONAL_LIGHTS];\n    // #if (NUM_DIRECTIONAL_LIGHTS > 0)\n    // #endif\n  };\n#endif\n"; // eslint-disable-line

  var lights_pars$1 = /*#__PURE__*/Object.freeze({
    default: lights_pars
  });

  var lights = "#define GLSLIFY 1\n#if (NUM_DIRECTIONAL_LIGHTS > 0)\n  vec3 matColor = color;\n  color = vec3(0, 0, 0);\n#endif\n\n[f directional_lights]\n\n// test\n"; // eslint-disable-line

  var lights$1 = /*#__PURE__*/Object.freeze({
    default: lights
  });

  var directional_lights_pars = "#define GLSLIFY 1\n#if (NUM_DIRECTIONAL_LIGHTS > 0)\n  uniform sampler2D directionalLightShadowMaps[NUM_DIRECTIONAL_LIGHTS];\n#endif\n\nstruct DirectionalLight\n{\n  float intensity;\n  vec3 color;\n  vec3 direction;\n};\n"; // eslint-disable-line

  var directional_lights_pars$1 = /*#__PURE__*/Object.freeze({
    default: directional_lights_pars
  });

  var directional_lights = "#define GLSLIFY 1\n#if (NUM_DIRECTIONAL_LIGHTS > 0)\n  DirectionalLight directionalLight = directionalLights[0];\n\n  for (int i = 0; i < NUM_DIRECTIONAL_LIGHTS; i++) {\n    directionalLight = directionalLights[i];\n    color += matColor * dot(directionalLight.direction, normal) * directionalLight.intensity;\n\n    if (MESH_RECEIVE_SHADOW) {\n      color = texture(directionalLightShadowMaps[i], v_uv).xyz;\n      // color = vec3(0.0, 1.0, 0.0);\n    }\n  }\n#endif\n"; // eslint-disable-line

  var directional_lights$1 = /*#__PURE__*/Object.freeze({
    default: directional_lights
  });

  var main$2 = "#define GLSLIFY 1\n// placeholder\n"; // eslint-disable-line

  var main$3 = /*#__PURE__*/Object.freeze({
    default: main$2
  });

  var map_pars = "#define GLSLIFY 1\n#ifdef USE_MAP\n  uniform sampler2D map;\n#endif\n"; // eslint-disable-line

  var map_pars$1 = /*#__PURE__*/Object.freeze({
    default: map_pars
  });

  var map = "#define GLSLIFY 1\n#ifdef USE_MAP\n  color = texture(map, v_uv).xyz;\n#endif\n"; // eslint-disable-line

  var map$1 = /*#__PURE__*/Object.freeze({
    default: map
  });

  var normal_pars$2 = "#define GLSLIFY 1\nin vec3 v_normal;\n"; // eslint-disable-line

  var normal_pars$3 = /*#__PURE__*/Object.freeze({
    default: normal_pars$2
  });

  var normal$2 = "#define GLSLIFY 1\nvec3 normal = normalize(v_normal);\n"; // eslint-disable-line

  var normal$3 = /*#__PURE__*/Object.freeze({
    default: normal$2
  });

  var pars$2 = "#define GLSLIFY 1\n// placeholder\n"; // eslint-disable-line

  var pars$3 = /*#__PURE__*/Object.freeze({
    default: pars$2
  });

  var uv_pars$2 = "#define GLSLIFY 1\n#if defined(USE_MAP) || defined(USE_UV)\n  in vec2 v_uv;\n#endif\n"; // eslint-disable-line

  var uv_pars$3 = /*#__PURE__*/Object.freeze({
    default: uv_pars$2
  });

  var require$$0 = ( init_pars$1 && init_pars ) || init_pars$1;

  var require$$1 = ( main$1 && main ) || main$1;

  var require$$2 = ( normal_pars$1 && normal_pars ) || normal_pars$1;

  var require$$3 = ( normal$1 && normal ) || normal$1;

  var require$$4 = ( pars$1 && pars ) || pars$1;

  var require$$5 = ( uv_pars$1 && uv_pars ) || uv_pars$1;

  var require$$6 = ( uv$1 && uv ) || uv$1;

  var require$$7 = ( color$1 && color ) || color$1;

  var require$$8 = ( init_pars$3 && init_pars$2 ) || init_pars$3;

  var require$$9 = ( init$1 && init ) || init$1;

  var require$$10 = ( lambert_light_pars$1 && lambert_light_pars ) || lambert_light_pars$1;

  var require$$11 = ( lambert_light$1 && lambert_light ) || lambert_light$1;

  var require$$12 = ( lights_pars$1 && lights_pars ) || lights_pars$1;

  var require$$13 = ( lights$1 && lights ) || lights$1;

  var require$$14 = ( directional_lights_pars$1 && directional_lights_pars ) || directional_lights_pars$1;

  var require$$15 = ( directional_lights$1 && directional_lights ) || directional_lights$1;

  var require$$16 = ( main$3 && main$2 ) || main$3;

  var require$$17 = ( map_pars$1 && map_pars ) || map_pars$1;

  var require$$18 = ( map$1 && map ) || map$1;

  var require$$19 = ( normal_pars$3 && normal_pars$2 ) || normal_pars$3;

  var require$$20 = ( normal$3 && normal$2 ) || normal$3;

  var require$$21 = ( pars$3 && pars$2 ) || pars$3;

  var require$$22 = ( uv_pars$3 && uv_pars$2 ) || uv_pars$3;

  // This file is autogenerated.
  var chunks = {
    v_init_pars: require$$0,
    v_main: require$$1,
    v_normal_pars: require$$2,
    v_normal: require$$3,
    v_pars: require$$4,
    v_uv_pars: require$$5,
    v_uv: require$$6,
    f_color: require$$7,
    f_init_pars: require$$8,
    f_init: require$$9,
    f_lambert_light_pars: require$$10,
    f_lambert_light: require$$11,
    f_lights_pars: require$$12,
    f_lights: require$$13,
    f_directional_lights_pars: require$$14,
    f_directional_lights: require$$15,
    f_main: require$$16,
    f_map_pars: require$$17,
    f_map: require$$18,
    f_normal_pars: require$$19,
    f_normal: require$$20,
    f_pars: require$$21,
    f_uv_pars: require$$22
  };

  var vertDefault = "#version 300 es\n\nprecision mediump float;\n#define GLSLIFY 1\nin vec4 position;\n\nuniform mat4 projectionMatrix;\nuniform mat4 modelMatrix;\n\nvoid main() {\n  gl_Position = projectionMatrix * modelMatrix * position; // projectionMatrix *\n  // gl_Position = vec4(position, 1.0);\n}\n"; // eslint-disable-line

  var _default = /*#__PURE__*/Object.freeze({
    default: vertDefault
  });

  var fragDefault = "#version 300 es\n\nprecision mediump float;\n#define GLSLIFY 1\nout vec4 outColor;\n\nvoid main() {\n  outColor = vec4(1.0, 0.0, 0.0, 1.0);\n}\n"; // eslint-disable-line

  var _default$1 = /*#__PURE__*/Object.freeze({
    default: fragDefault
  });

  var test = "#version 300 es\n\nprecision mediump float;\n#define GLSLIFY 1\n\n// an attribute is an input (in) to a vertex shader.\n// It will receive data from a buffer\nin vec4 position;\nin vec3 normal;\n// in vec3 color;\n\nout vec3 v_normal;\nout mat4 v_modelMatrix;\n\nuniform mat4 projectionMatrix;\nuniform mat4 modelMatrix;\n\n// all shaders have a main function\nvoid main() {\n  v_normal = normal;\n  v_modelMatrix = modelMatrix;\n\n  // gl_Position is a special variable a vertex shader\n  // is responsible for setting\n  gl_Position = projectionMatrix * modelMatrix * position;\n}\n"; // eslint-disable-line

  var test$1 = /*#__PURE__*/Object.freeze({
    default: test
  });

  var test$2 = "#version 300 es\n\n// fragment shaders don't have a default precision so we need\n// to pick one. mediump is a good default. It means \"medium precision\"\nprecision mediump float;\n#define GLSLIFY 1\n\n// in vec3 v_color;\nuniform vec2 bright;\nin vec3 v_normal;\nin mat4 v_modelMatrix;\n\n// we need to declare an output for the fragment shader\nout vec4 outColor;\n\nvoid main() {\n  vec3 normal = normalize(v_normal);\n  vec3 color = vec3(1.0, 0.0, 0.0);\n  vec4 dirLight = transpose(v_modelMatrix) * vec4(0.0, 0.0, 1.0, 0.0);\n  float lightness = dot(dirLight.xyz, normal);\n\n  outColor = vec4(color * lightness, 1);\n}\n"; // eslint-disable-line

  var test$3 = /*#__PURE__*/Object.freeze({
    default: test$2
  });

  var flat = "#define GLSLIFY 1\n[v init_pars]\n[v normal_pars]\n[v uv_pars]\n\n[v pars]\n\nvoid main() {\n  [v normal]\n  [v uv]\n\n  [v main]\n\n  gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position, 1.0);\n}\n"; // eslint-disable-line

  var flat$1 = /*#__PURE__*/Object.freeze({
    default: flat
  });

  var flat$2 = "precision mediump float;\n#define GLSLIFY 1\nout vec4 outColor;\n\n[f init_pars]\n[f normal_pars]\n[f uv_pars]\n[f map_pars]\n\n[f pars]\n\nvoid main() {\n  [f init]\n  [f normal]\n  [f map]\n\n  [f main]\n\n  outColor = vec4(color, 1.0);\n}\n"; // eslint-disable-line

  var flat$3 = /*#__PURE__*/Object.freeze({
    default: flat$2
  });

  var lambert = "#define GLSLIFY 1\n[v init_pars]\n[v normal_pars]\n[v uv_pars]\n\nvoid main() {\n  [v normal]\n  [v uv]\n\n  gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position, 1.0);\n}\n"; // eslint-disable-line

  var lambert$1 = /*#__PURE__*/Object.freeze({
    default: lambert
  });

  var lambert$2 = "precision mediump float;\n#define GLSLIFY 1\nout vec4 outColor;\n\n[f init_pars]\n[f normal_pars]\n[f uv_pars]\n[f map_pars]\n[f lights_pars]\n\nvoid main() {\n  [f init]\n  [f normal]\n  [f map]\n  [f lights]\n\n  outColor = vec4(color, 1.0);\n}\n"; // eslint-disable-line

  var lambert$3 = /*#__PURE__*/Object.freeze({
    default: lambert$2
  });

  var require$$0$1 = ( _default && vertDefault ) || _default;

  var require$$1$1 = ( _default$1 && fragDefault ) || _default$1;

  var require$$2$1 = ( test$1 && test ) || test$1;

  var require$$3$1 = ( test$3 && test$2 ) || test$3;

  var require$$4$1 = ( flat$1 && flat ) || flat$1;

  var require$$5$1 = ( flat$3 && flat$2 ) || flat$3;

  var require$$6$1 = ( lambert$1 && lambert ) || lambert$1;

  var require$$7$1 = ( lambert$3 && lambert$2 ) || lambert$3;

  var shaders = {
    default: {
      vert: require$$0$1,
      frag: require$$1$1
    },
    test: {
      vert: require$$2$1,
      frag: require$$3$1
    },
    flat: {
      vert: require$$4$1,
      frag: require$$5$1,
      uniforms: {
        u_diffuse: [1, 0, 0]
      }
    },
    lambert: {
      vert: require$$6$1,
      frag: require$$7$1,
      uniforms: {
        u_diffuse: [1, 0, 0],
        u_lightDir: [0, 0, 1]
      }
    },
    chunks: chunks
  };

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      var ownKeys = Object.keys(source);

      if (typeof Object.getOwnPropertySymbols === 'function') {
        ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
          return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
      }

      ownKeys.forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    }

    return target;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

      return arr2;
    }
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArray(iter) {
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
  }

  function _iterableToArrayLimit(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
  }

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  var _global = createCommonjsModule(function (module) {
  // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
  var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self // eslint-disable-next-line no-new-func
  : Function('return this')();
  if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef
  });

  var _core = createCommonjsModule(function (module) {
  var core = module.exports = {
    version: '2.5.7'
  };
  if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef
  });
  var _core_1 = _core.version;

  var _isObject = function (it) {
    return typeof it === 'object' ? it !== null : typeof it === 'function';
  };

  var _anObject = function (it) {
    if (!_isObject(it)) throw TypeError(it + ' is not an object!');
    return it;
  };

  var _fails = function (exec) {
    try {
      return !!exec();
    } catch (e) {
      return true;
    }
  };

  // Thank's IE8 for his funny defineProperty
  var _descriptors = !_fails(function () {
    return Object.defineProperty({}, 'a', {
      get: function () {
        return 7;
      }
    }).a != 7;
  });

  var document$1 = _global.document; // typeof document.createElement is 'object' in old IE


  var is = _isObject(document$1) && _isObject(document$1.createElement);

  var _domCreate = function (it) {
    return is ? document$1.createElement(it) : {};
  };

  var _ie8DomDefine = !_descriptors && !_fails(function () {
    return Object.defineProperty(_domCreate('div'), 'a', {
      get: function () {
        return 7;
      }
    }).a != 7;
  });

  // 7.1.1 ToPrimitive(input [, PreferredType])
   // instead of the ES6 spec version, we didn't implement @@toPrimitive case
  // and the second argument - flag - preferred type is a string


  var _toPrimitive = function (it, S) {
    if (!_isObject(it)) return it;
    var fn, val;
    if (S && typeof (fn = it.toString) == 'function' && !_isObject(val = fn.call(it))) return val;
    if (typeof (fn = it.valueOf) == 'function' && !_isObject(val = fn.call(it))) return val;
    if (!S && typeof (fn = it.toString) == 'function' && !_isObject(val = fn.call(it))) return val;
    throw TypeError("Can't convert object to primitive value");
  };

  var dP = Object.defineProperty;
  var f = _descriptors ? Object.defineProperty : function defineProperty(O, P, Attributes) {
    _anObject(O);
    P = _toPrimitive(P, true);
    _anObject(Attributes);
    if (_ie8DomDefine) try {
      return dP(O, P, Attributes);
    } catch (e) {
      /* empty */
    }
    if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
    if ('value' in Attributes) O[P] = Attributes.value;
    return O;
  };

  var _objectDp = {
  	f: f
  };

  var _propertyDesc = function (bitmap, value) {
    return {
      enumerable: !(bitmap & 1),
      configurable: !(bitmap & 2),
      writable: !(bitmap & 4),
      value: value
    };
  };

  var _hide = _descriptors ? function (object, key, value) {
    return _objectDp.f(object, key, _propertyDesc(1, value));
  } : function (object, key, value) {
    object[key] = value;
    return object;
  };

  var hasOwnProperty = {}.hasOwnProperty;

  var _has = function (it, key) {
    return hasOwnProperty.call(it, key);
  };

  var id$1 = 0;
  var px = Math.random();

  var _uid = function (key) {
    return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id$1 + px).toString(36));
  };

  var _redefine = createCommonjsModule(function (module) {
  var SRC = _uid('src');

  var TO_STRING = 'toString';
  var $toString = Function[TO_STRING];
  var TPL = ('' + $toString).split(TO_STRING);

  _core.inspectSource = function (it) {
    return $toString.call(it);
  };

  (module.exports = function (O, key, val, safe) {
    var isFunction = typeof val == 'function';
    if (isFunction) _has(val, 'name') || _hide(val, 'name', key);
    if (O[key] === val) return;
    if (isFunction) _has(val, SRC) || _hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));

    if (O === _global) {
      O[key] = val;
    } else if (!safe) {
      delete O[key];
      _hide(O, key, val);
    } else if (O[key]) {
      O[key] = val;
    } else {
      _hide(O, key, val);
    } // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative

  })(Function.prototype, TO_STRING, function toString() {
    return typeof this == 'function' && this[SRC] || $toString.call(this);
  });
  });

  var _aFunction = function (it) {
    if (typeof it != 'function') throw TypeError(it + ' is not a function!');
    return it;
  };

  // optional / simple context binding


  var _ctx = function (fn, that, length) {
    _aFunction(fn);
    if (that === undefined) return fn;

    switch (length) {
      case 1:
        return function (a) {
          return fn.call(that, a);
        };

      case 2:
        return function (a, b) {
          return fn.call(that, a, b);
        };

      case 3:
        return function (a, b, c) {
          return fn.call(that, a, b, c);
        };
    }

    return function ()
    /* ...args */
    {
      return fn.apply(that, arguments);
    };
  };

  var PROTOTYPE = 'prototype';

  var $export = function (type, name, source) {
    var IS_FORCED = type & $export.F;
    var IS_GLOBAL = type & $export.G;
    var IS_STATIC = type & $export.S;
    var IS_PROTO = type & $export.P;
    var IS_BIND = type & $export.B;
    var target = IS_GLOBAL ? _global : IS_STATIC ? _global[name] || (_global[name] = {}) : (_global[name] || {})[PROTOTYPE];
    var exports = IS_GLOBAL ? _core : _core[name] || (_core[name] = {});
    var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
    var key, own, out, exp;
    if (IS_GLOBAL) source = name;

    for (key in source) {
      // contains in native
      own = !IS_FORCED && target && target[key] !== undefined; // export native or passed

      out = (own ? target : source)[key]; // bind timers to global for call from export context

      exp = IS_BIND && own ? _ctx(out, _global) : IS_PROTO && typeof out == 'function' ? _ctx(Function.call, out) : out; // extend global

      if (target) _redefine(target, key, out, type & $export.U); // export

      if (exports[key] != out) _hide(exports, key, exp);
      if (IS_PROTO && expProto[key] != out) expProto[key] = out;
    }
  };

  _global.core = _core; // type bitmap

  $export.F = 1; // forced

  $export.G = 2; // global

  $export.S = 4; // static

  $export.P = 8; // proto

  $export.B = 16; // bind

  $export.W = 32; // wrap

  $export.U = 64; // safe

  $export.R = 128; // real proto method for `library`

  var _export = $export;

  var toString = {}.toString;

  var _cof = function (it) {
    return toString.call(it).slice(8, -1);
  };

  // fallback for non-array-like ES3 and non-enumerable old V8 strings
   // eslint-disable-next-line no-prototype-builtins


  var _iobject = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
    return _cof(it) == 'String' ? it.split('') : Object(it);
  };

  // 7.2.1 RequireObjectCoercible(argument)
  var _defined = function (it) {
    if (it == undefined) throw TypeError("Can't call method on  " + it);
    return it;
  };

  // to indexed object, toObject with fallback for non-array-like ES3 strings




  var _toIobject = function (it) {
    return _iobject(_defined(it));
  };

  // 7.1.4 ToInteger
  var ceil = Math.ceil;
  var floor = Math.floor;

  var _toInteger = function (it) {
    return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
  };

  // 7.1.15 ToLength


  var min = Math.min;

  var _toLength = function (it) {
    return it > 0 ? min(_toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
  };

  var max = Math.max;
  var min$1 = Math.min;

  var _toAbsoluteIndex = function (index, length) {
    index = _toInteger(index);
    return index < 0 ? max(index + length, 0) : min$1(index, length);
  };

  // false -> Array#indexOf
  // true  -> Array#includes






  var _arrayIncludes = function (IS_INCLUDES) {
    return function ($this, el, fromIndex) {
      var O = _toIobject($this);
      var length = _toLength(O.length);
      var index = _toAbsoluteIndex(fromIndex, length);
      var value; // Array#includes uses SameValueZero equality algorithm
      // eslint-disable-next-line no-self-compare

      if (IS_INCLUDES && el != el) while (length > index) {
        value = O[index++]; // eslint-disable-next-line no-self-compare

        if (value != value) return true; // Array#indexOf ignores holes, Array#includes - not
      } else for (; length > index; index++) if (IS_INCLUDES || index in O) {
        if (O[index] === el) return IS_INCLUDES || index || 0;
      }
      return !IS_INCLUDES && -1;
    };
  };

  var _library = false;

  var _shared = createCommonjsModule(function (module) {
  var SHARED = '__core-js_shared__';
  var store = _global[SHARED] || (_global[SHARED] = {});
  (module.exports = function (key, value) {
    return store[key] || (store[key] = value !== undefined ? value : {});
  })('versions', []).push({
    version: _core.version,
    mode: _library ? 'pure' : 'global',
    copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
  });
  });

  var shared = _shared('keys');



  var _sharedKey = function (key) {
    return shared[key] || (shared[key] = _uid(key));
  };

  var arrayIndexOf = _arrayIncludes(false);

  var IE_PROTO = _sharedKey('IE_PROTO');

  var _objectKeysInternal = function (object, names) {
    var O = _toIobject(object);
    var i = 0;
    var result = [];
    var key;

    for (key in O) if (key != IE_PROTO) _has(O, key) && result.push(key); // Don't enum bug & hidden keys


    while (names.length > i) if (_has(O, key = names[i++])) {
      ~arrayIndexOf(result, key) || result.push(key);
    }

    return result;
  };

  // IE 8- don't enum bug keys
  var _enumBugKeys = 'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(',');

  // 19.1.2.14 / 15.2.3.14 Object.keys(O)




  var _objectKeys = Object.keys || function keys(O) {
    return _objectKeysInternal(O, _enumBugKeys);
  };

  var f$1 = {}.propertyIsEnumerable;

  var _objectPie = {
  	f: f$1
  };

  var isEnum = _objectPie.f;

  var _objectToArray = function (isEntries) {
    return function (it) {
      var O = _toIobject(it);
      var keys = _objectKeys(O);
      var length = keys.length;
      var i = 0;
      var result = [];
      var key;

      while (length > i) if (isEnum.call(O, key = keys[i++])) {
        result.push(isEntries ? [key, O[key]] : O[key]);
      }

      return result;
    };
  };

  // https://github.com/tc39/proposal-object-values-entries


  var $entries = _objectToArray(true);

  _export(_export.S, 'Object', {
    entries: function entries(it) {
      return $entries(it);
    }
  });

  var f$2 = Object.getOwnPropertySymbols;

  var _objectGops = {
  	f: f$2
  };

  // 7.1.13 ToObject(argument)


  var _toObject = function (it) {
    return Object(_defined(it));
  };

  var $assign = Object.assign; // should work with symbols and should have deterministic property order (V8 bug)

  var _objectAssign = !$assign || _fails(function () {
    var A = {};
    var B = {}; // eslint-disable-next-line no-undef

    var S = Symbol();
    var K = 'abcdefghijklmnopqrst';
    A[S] = 7;
    K.split('').forEach(function (k) {
      B[k] = k;
    });
    return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
  }) ? function assign(target, source) {
    // eslint-disable-line no-unused-vars
    var T = _toObject(target);
    var aLen = arguments.length;
    var index = 1;
    var getSymbols = _objectGops.f;
    var isEnum = _objectPie.f;

    while (aLen > index) {
      var S = _iobject(arguments[index++]);
      var keys = getSymbols ? _objectKeys(S).concat(getSymbols(S)) : _objectKeys(S);
      var length = keys.length;
      var j = 0;
      var key;

      while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
    }

    return T;
  } : $assign;

  // 19.1.3.1 Object.assign(target, source)


  _export(_export.S + _export.F, 'Object', {
    assign: _objectAssign
  });

  var _wks = createCommonjsModule(function (module) {
  var store = _shared('wks');



  var Symbol = _global.Symbol;

  var USE_SYMBOL = typeof Symbol == 'function';

  var $exports = module.exports = function (name) {
    return store[name] || (store[name] = USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : _uid)('Symbol.' + name));
  };

  $exports.store = store;
  });

  var _fixReWks = function (KEY, length, exec) {
    var SYMBOL = _wks(KEY);
    var fns = exec(_defined, SYMBOL, ''[KEY]);
    var strfn = fns[0];
    var rxfn = fns[1];

    if (_fails(function () {
      var O = {};

      O[SYMBOL] = function () {
        return 7;
      };

      return ''[KEY](O) != 7;
    })) {
      _redefine(String.prototype, KEY, strfn);
      _hide(RegExp.prototype, SYMBOL, length == 2 // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) {
        return rxfn.call(string, this, arg);
      } // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) {
        return rxfn.call(string, this);
      });
    }
  };

  // 7.2.8 IsRegExp(argument)




  var MATCH = _wks('match');

  var _isRegexp = function (it) {
    var isRegExp;
    return _isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : _cof(it) == 'RegExp');
  };

  // @@split logic
  _fixReWks('split', 2, function (defined, SPLIT, $split) {

    var isRegExp = _isRegexp;

    var _split = $split;
    var $push = [].push;
    var $SPLIT = 'split';
    var LENGTH = 'length';
    var LAST_INDEX = 'lastIndex';

    if ('abbc'[$SPLIT](/(b)*/)[1] == 'c' || 'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 || 'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 || '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 || '.'[$SPLIT](/()()/)[LENGTH] > 1 || ''[$SPLIT](/.?/)[LENGTH]) {
      var NPCG = /()??/.exec('')[1] === undefined; // nonparticipating capturing group
      // based on es5-shim implementation, need to rework it

      $split = function (separator, limit) {
        var string = String(this);
        if (separator === undefined && limit === 0) return []; // If `separator` is not a regex, use native split

        if (!isRegExp(separator)) return _split.call(string, separator, limit);
        var output = [];
        var flags = (separator.ignoreCase ? 'i' : '') + (separator.multiline ? 'm' : '') + (separator.unicode ? 'u' : '') + (separator.sticky ? 'y' : '');
        var lastLastIndex = 0;
        var splitLimit = limit === undefined ? 4294967295 : limit >>> 0; // Make `global` and avoid `lastIndex` issues by working with a copy

        var separatorCopy = new RegExp(separator.source, flags + 'g');
        var separator2, match, lastIndex, lastLength, i; // Doesn't need flags gy, but they don't hurt

        if (!NPCG) separator2 = new RegExp('^' + separatorCopy.source + '$(?!\\s)', flags);

        while (match = separatorCopy.exec(string)) {
          // `separatorCopy.lastIndex` is not reliable cross-browser
          lastIndex = match.index + match[0][LENGTH];

          if (lastIndex > lastLastIndex) {
            output.push(string.slice(lastLastIndex, match.index)); // Fix browsers whose `exec` methods don't consistently return `undefined` for NPCG
            // eslint-disable-next-line no-loop-func

            if (!NPCG && match[LENGTH] > 1) match[0].replace(separator2, function () {
              for (i = 1; i < arguments[LENGTH] - 2; i++) if (arguments[i] === undefined) match[i] = undefined;
            });
            if (match[LENGTH] > 1 && match.index < string[LENGTH]) $push.apply(output, match.slice(1));
            lastLength = match[0][LENGTH];
            lastLastIndex = lastIndex;
            if (output[LENGTH] >= splitLimit) break;
          }

          if (separatorCopy[LAST_INDEX] === match.index) separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
        }

        if (lastLastIndex === string[LENGTH]) {
          if (lastLength || !separatorCopy.test('')) output.push('');
        } else output.push(string.slice(lastLastIndex));

        return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
      }; // Chakra, V8

    } else if ('0'[$SPLIT](undefined, 0)[LENGTH]) {
      $split = function (separator, limit) {
        return separator === undefined && limit === 0 ? [] : _split.call(this, separator, limit);
      };
    } // 21.1.3.17 String.prototype.split(separator, limit)


    return [function split(separator, limit) {
      var O = defined(this);
      var fn = separator == undefined ? undefined : separator[SPLIT];
      return fn !== undefined ? fn.call(separator, O, limit) : $split.call(String(O), separator, limit);
    }, $split];
  });

  // @@replace logic
  _fixReWks('replace', 2, function (defined, REPLACE, $replace) {
    // 21.1.3.14 String.prototype.replace(searchValue, replaceValue)
    return [function replace(searchValue, replaceValue) {

      var O = defined(this);
      var fn = searchValue == undefined ? undefined : searchValue[REPLACE];
      return fn !== undefined ? fn.call(searchValue, O, replaceValue) : $replace.call(String(O), searchValue, replaceValue);
    }, $replace];
  });

  // 22.1.3.31 Array.prototype[@@unscopables]
  var UNSCOPABLES = _wks('unscopables');

  var ArrayProto = Array.prototype;
  if (ArrayProto[UNSCOPABLES] == undefined) _hide(ArrayProto, UNSCOPABLES, {});

  var _addToUnscopables = function (key) {
    ArrayProto[UNSCOPABLES][key] = true;
  };

  var _iterStep = function (done, value) {
    return {
      value: value,
      done: !!done
    };
  };

  var _iterators = {};

  var _objectDps = _descriptors ? Object.defineProperties : function defineProperties(O, Properties) {
    _anObject(O);
    var keys = _objectKeys(Properties);
    var length = keys.length;
    var i = 0;
    var P;

    while (length > i) _objectDp.f(O, P = keys[i++], Properties[P]);

    return O;
  };

  var document$2 = _global.document;

  var _html = document$2 && document$2.documentElement;

  // 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])






  var IE_PROTO$1 = _sharedKey('IE_PROTO');

  var Empty = function () {
    /* empty */
  };

  var PROTOTYPE$1 = 'prototype'; // Create object with fake `null` prototype: use iframe Object with cleared prototype

  var createDict = function () {
    // Thrash, waste and sodomy: IE GC bug
    var iframe = _domCreate('iframe');

    var i = _enumBugKeys.length;
    var lt = '<';
    var gt = '>';
    var iframeDocument;
    iframe.style.display = 'none';

    _html.appendChild(iframe);

    iframe.src = 'javascript:'; // eslint-disable-line no-script-url
    // createDict = iframe.contentWindow.Object;
    // html.removeChild(iframe);

    iframeDocument = iframe.contentWindow.document;
    iframeDocument.open();
    iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
    iframeDocument.close();
    createDict = iframeDocument.F;

    while (i--) delete createDict[PROTOTYPE$1][_enumBugKeys[i]];

    return createDict();
  };

  var _objectCreate = Object.create || function create(O, Properties) {
    var result;

    if (O !== null) {
      Empty[PROTOTYPE$1] = _anObject(O);
      result = new Empty();
      Empty[PROTOTYPE$1] = null; // add "__proto__" for Object.getPrototypeOf polyfill

      result[IE_PROTO$1] = O;
    } else result = createDict();

    return Properties === undefined ? result : _objectDps(result, Properties);
  };

  var def = _objectDp.f;



  var TAG = _wks('toStringTag');

  var _setToStringTag = function (it, tag, stat) {
    if (it && !_has(it = stat ? it : it.prototype, TAG)) def(it, TAG, {
      configurable: true,
      value: tag
    });
  };

  var IteratorPrototype = {}; // 25.1.2.1.1 %IteratorPrototype%[@@iterator]()

  _hide(IteratorPrototype, _wks('iterator'), function () {
    return this;
  });

  var _iterCreate = function (Constructor, NAME, next) {
    Constructor.prototype = _objectCreate(IteratorPrototype, {
      next: _propertyDesc(1, next)
    });
    _setToStringTag(Constructor, NAME + ' Iterator');
  };

  // 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)




  var IE_PROTO$2 = _sharedKey('IE_PROTO');

  var ObjectProto = Object.prototype;

  var _objectGpo = Object.getPrototypeOf || function (O) {
    O = _toObject(O);
    if (_has(O, IE_PROTO$2)) return O[IE_PROTO$2];

    if (typeof O.constructor == 'function' && O instanceof O.constructor) {
      return O.constructor.prototype;
    }

    return O instanceof Object ? ObjectProto : null;
  };

  var ITERATOR = _wks('iterator');

  var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`

  var FF_ITERATOR = '@@iterator';
  var KEYS = 'keys';
  var VALUES = 'values';

  var returnThis = function () {
    return this;
  };

  var _iterDefine = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
    _iterCreate(Constructor, NAME, next);

    var getMethod = function (kind) {
      if (!BUGGY && kind in proto) return proto[kind];

      switch (kind) {
        case KEYS:
          return function keys() {
            return new Constructor(this, kind);
          };

        case VALUES:
          return function values() {
            return new Constructor(this, kind);
          };
      }

      return function entries() {
        return new Constructor(this, kind);
      };
    };

    var TAG = NAME + ' Iterator';
    var DEF_VALUES = DEFAULT == VALUES;
    var VALUES_BUG = false;
    var proto = Base.prototype;
    var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
    var $default = $native || getMethod(DEFAULT);
    var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
    var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
    var methods, key, IteratorPrototype; // Fix native

    if ($anyNative) {
      IteratorPrototype = _objectGpo($anyNative.call(new Base()));

      if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
        // Set @@toStringTag to native iterators
        _setToStringTag(IteratorPrototype, TAG, true); // fix for some old engines

        if (!_library && typeof IteratorPrototype[ITERATOR] != 'function') _hide(IteratorPrototype, ITERATOR, returnThis);
      }
    } // fix Array#{values, @@iterator}.name in V8 / FF


    if (DEF_VALUES && $native && $native.name !== VALUES) {
      VALUES_BUG = true;

      $default = function values() {
        return $native.call(this);
      };
    } // Define iterator


    if ((!_library || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
      _hide(proto, ITERATOR, $default);
    } // Plug for library


    _iterators[NAME] = $default;
    _iterators[TAG] = returnThis;

    if (DEFAULT) {
      methods = {
        values: DEF_VALUES ? $default : getMethod(VALUES),
        keys: IS_SET ? $default : getMethod(KEYS),
        entries: $entries
      };
      if (FORCED) for (key in methods) {
        if (!(key in proto)) _redefine(proto, key, methods[key]);
      } else _export(_export.P + _export.F * (BUGGY || VALUES_BUG), NAME, methods);
    }

    return methods;
  };

  // 22.1.3.4 Array.prototype.entries()
  // 22.1.3.13 Array.prototype.keys()
  // 22.1.3.29 Array.prototype.values()
  // 22.1.3.30 Array.prototype[@@iterator]()


  var es6_array_iterator = _iterDefine(Array, 'Array', function (iterated, kind) {
    this._t = _toIobject(iterated); // target

    this._i = 0; // next index

    this._k = kind; // kind
    // 22.1.5.2.1 %ArrayIteratorPrototype%.next()
  }, function () {
    var O = this._t;
    var kind = this._k;
    var index = this._i++;

    if (!O || index >= O.length) {
      this._t = undefined;
      return _iterStep(1);
    }

    if (kind == 'keys') return _iterStep(0, index);
    if (kind == 'values') return _iterStep(0, O[index]);
    return _iterStep(0, [index, O[index]]);
  }, 'values'); // argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)

  _iterators.Arguments = _iterators.Array;
  _addToUnscopables('keys');
  _addToUnscopables('values');
  _addToUnscopables('entries');

  var ITERATOR$1 = _wks('iterator');
  var TO_STRING_TAG = _wks('toStringTag');
  var ArrayValues = _iterators.Array;
  var DOMIterables = {
    CSSRuleList: true,
    // TODO: Not spec compliant, should be false.
    CSSStyleDeclaration: false,
    CSSValueList: false,
    ClientRectList: false,
    DOMRectList: false,
    DOMStringList: false,
    DOMTokenList: true,
    DataTransferItemList: false,
    FileList: false,
    HTMLAllCollection: false,
    HTMLCollection: false,
    HTMLFormElement: false,
    HTMLSelectElement: false,
    MediaList: true,
    // TODO: Not spec compliant, should be false.
    MimeTypeArray: false,
    NamedNodeMap: false,
    NodeList: true,
    PaintRequestList: false,
    Plugin: false,
    PluginArray: false,
    SVGLengthList: false,
    SVGNumberList: false,
    SVGPathSegList: false,
    SVGPointList: false,
    SVGStringList: false,
    SVGTransformList: false,
    SourceBufferList: false,
    StyleSheetList: true,
    // TODO: Not spec compliant, should be false.
    TextTrackCueList: false,
    TextTrackList: false,
    TouchList: false
  };

  for (var collections = _objectKeys(DOMIterables), i = 0; i < collections.length; i++) {
    var NAME = collections[i];
    var explicit = DOMIterables[NAME];
    var Collection = _global[NAME];
    var proto = Collection && Collection.prototype;
    var key;

    if (proto) {
      if (!proto[ITERATOR$1]) _hide(proto, ITERATOR$1, ArrayValues);
      if (!proto[TO_STRING_TAG]) _hide(proto, TO_STRING_TAG, NAME);
      _iterators[NAME] = ArrayValues;
      if (explicit) for (key in es6_array_iterator) if (!proto[key]) _redefine(proto, key, es6_array_iterator[key], true);
    }
  }

  // 7.2.2 IsArray(argument)


  var _isArray = Array.isArray || function isArray(arg) {
    return _cof(arg) == 'Array';
  };

  var SPECIES = _wks('species');

  var _arraySpeciesConstructor = function (original) {
    var C;

    if (_isArray(original)) {
      C = original.constructor; // cross-realm fallback

      if (typeof C == 'function' && (C === Array || _isArray(C.prototype))) C = undefined;

      if (_isObject(C)) {
        C = C[SPECIES];
        if (C === null) C = undefined;
      }
    }

    return C === undefined ? Array : C;
  };

  // 9.4.2.3 ArraySpeciesCreate(originalArray, length)


  var _arraySpeciesCreate = function (original, length) {
    return new (_arraySpeciesConstructor(original))(length);
  };

  // 0 -> Array#forEach
  // 1 -> Array#map
  // 2 -> Array#filter
  // 3 -> Array#some
  // 4 -> Array#every
  // 5 -> Array#find
  // 6 -> Array#findIndex










  var _arrayMethods = function (TYPE, $create) {
    var IS_MAP = TYPE == 1;
    var IS_FILTER = TYPE == 2;
    var IS_SOME = TYPE == 3;
    var IS_EVERY = TYPE == 4;
    var IS_FIND_INDEX = TYPE == 6;
    var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
    var create = $create || _arraySpeciesCreate;
    return function ($this, callbackfn, that) {
      var O = _toObject($this);
      var self = _iobject(O);
      var f = _ctx(callbackfn, that, 3);
      var length = _toLength(self.length);
      var index = 0;
      var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
      var val, res;

      for (; length > index; index++) if (NO_HOLES || index in self) {
        val = self[index];
        res = f(val, index, O);

        if (TYPE) {
          if (IS_MAP) result[index] = res; // map
          else if (res) switch (TYPE) {
              case 3:
                return true;
              // some

              case 5:
                return val;
              // find

              case 6:
                return index;
              // findIndex

              case 2:
                result.push(val);
              // filter
            } else if (IS_EVERY) return false; // every
        }
      }

      return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
    };
  };

  var _meta = createCommonjsModule(function (module) {
  var META = _uid('meta');





  var setDesc = _objectDp.f;

  var id = 0;

  var isExtensible = Object.isExtensible || function () {
    return true;
  };

  var FREEZE = !_fails(function () {
    return isExtensible(Object.preventExtensions({}));
  });

  var setMeta = function (it) {
    setDesc(it, META, {
      value: {
        i: 'O' + ++id,
        // object ID
        w: {} // weak collections IDs

      }
    });
  };

  var fastKey = function (it, create) {
    // return primitive with prefix
    if (!_isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;

    if (!_has(it, META)) {
      // can't set metadata to uncaught frozen object
      if (!isExtensible(it)) return 'F'; // not necessary to add metadata

      if (!create) return 'E'; // add missing metadata

      setMeta(it); // return object ID
    }

    return it[META].i;
  };

  var getWeak = function (it, create) {
    if (!_has(it, META)) {
      // can't set metadata to uncaught frozen object
      if (!isExtensible(it)) return true; // not necessary to add metadata

      if (!create) return false; // add missing metadata

      setMeta(it); // return hash weak collections IDs
    }

    return it[META].w;
  }; // add metadata on freeze-family methods calling


  var onFreeze = function (it) {
    if (FREEZE && meta.NEED && isExtensible(it) && !_has(it, META)) setMeta(it);
    return it;
  };

  var meta = module.exports = {
    KEY: META,
    NEED: false,
    fastKey: fastKey,
    getWeak: getWeak,
    onFreeze: onFreeze
  };
  });
  var _meta_1 = _meta.KEY;
  var _meta_2 = _meta.NEED;
  var _meta_3 = _meta.fastKey;
  var _meta_4 = _meta.getWeak;
  var _meta_5 = _meta.onFreeze;

  var _redefineAll = function (target, src, safe) {
    for (var key in src) _redefine(target, key, src[key], safe);

    return target;
  };

  var _anInstance = function (it, Constructor, name, forbiddenField) {
    if (!(it instanceof Constructor) || forbiddenField !== undefined && forbiddenField in it) {
      throw TypeError(name + ': incorrect invocation!');
    }

    return it;
  };

  // call something on iterator step with safe closing on error


  var _iterCall = function (iterator, fn, value, entries) {
    try {
      return entries ? fn(_anObject(value)[0], value[1]) : fn(value); // 7.4.6 IteratorClose(iterator, completion)
    } catch (e) {
      var ret = iterator['return'];
      if (ret !== undefined) _anObject(ret.call(iterator));
      throw e;
    }
  };

  // check on default Array iterator


  var ITERATOR$2 = _wks('iterator');

  var ArrayProto$1 = Array.prototype;

  var _isArrayIter = function (it) {
    return it !== undefined && (_iterators.Array === it || ArrayProto$1[ITERATOR$2] === it);
  };

  // getting tag from 19.1.3.6 Object.prototype.toString()


  var TAG$1 = _wks('toStringTag'); // ES3 wrong here


  var ARG = _cof(function () {
    return arguments;
  }()) == 'Arguments'; // fallback for IE11 Script Access Denied error

  var tryGet = function (it, key) {
    try {
      return it[key];
    } catch (e) {
      /* empty */
    }
  };

  var _classof = function (it) {
    var O, T, B;
    return it === undefined ? 'Undefined' : it === null ? 'Null' // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG$1)) == 'string' ? T // builtinTag case
    : ARG ? _cof(O) // ES3 arguments fallback
    : (B = _cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
  };

  var ITERATOR$3 = _wks('iterator');



  var core_getIteratorMethod = _core.getIteratorMethod = function (it) {
    if (it != undefined) return it[ITERATOR$3] || it['@@iterator'] || _iterators[_classof(it)];
  };

  var _forOf = createCommonjsModule(function (module) {
  var BREAK = {};
  var RETURN = {};

  var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
    var iterFn = ITERATOR ? function () {
      return iterable;
    } : core_getIteratorMethod(iterable);
    var f = _ctx(fn, that, entries ? 2 : 1);
    var index = 0;
    var length, step, iterator, result;
    if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!'); // fast case for arrays with default iterator

    if (_isArrayIter(iterFn)) for (length = _toLength(iterable.length); length > index; index++) {
      result = entries ? f(_anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
      if (result === BREAK || result === RETURN) return result;
    } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
      result = _iterCall(iterator, f, step.value, entries);
      if (result === BREAK || result === RETURN) return result;
    }
  };

  exports.BREAK = BREAK;
  exports.RETURN = RETURN;
  });

  var _validateCollection = function (it, TYPE) {
    if (!_isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
    return it;
  };

  var getWeak = _meta.getWeak;















  var arrayFind = _arrayMethods(5);
  var arrayFindIndex = _arrayMethods(6);
  var id$2 = 0; // fallback for uncaught frozen keys

  var uncaughtFrozenStore = function (that) {
    return that._l || (that._l = new UncaughtFrozenStore());
  };

  var UncaughtFrozenStore = function () {
    this.a = [];
  };

  var findUncaughtFrozen = function (store, key) {
    return arrayFind(store.a, function (it) {
      return it[0] === key;
    });
  };

  UncaughtFrozenStore.prototype = {
    get: function (key) {
      var entry = findUncaughtFrozen(this, key);
      if (entry) return entry[1];
    },
    has: function (key) {
      return !!findUncaughtFrozen(this, key);
    },
    set: function (key, value) {
      var entry = findUncaughtFrozen(this, key);
      if (entry) entry[1] = value;else this.a.push([key, value]);
    },
    'delete': function (key) {
      var index = arrayFindIndex(this.a, function (it) {
        return it[0] === key;
      });
      if (~index) this.a.splice(index, 1);
      return !!~index;
    }
  };
  var _collectionWeak = {
    getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
      var C = wrapper(function (that, iterable) {
        _anInstance(that, C, NAME, '_i');
        that._t = NAME; // collection type

        that._i = id$2++; // collection id

        that._l = undefined; // leak store for uncaught frozen objects

        if (iterable != undefined) _forOf(iterable, IS_MAP, that[ADDER], that);
      });
      _redefineAll(C.prototype, {
        // 23.3.3.2 WeakMap.prototype.delete(key)
        // 23.4.3.3 WeakSet.prototype.delete(value)
        'delete': function (key) {
          if (!_isObject(key)) return false;
          var data = getWeak(key);
          if (data === true) return uncaughtFrozenStore(_validateCollection(this, NAME))['delete'](key);
          return data && _has(data, this._i) && delete data[this._i];
        },
        // 23.3.3.4 WeakMap.prototype.has(key)
        // 23.4.3.4 WeakSet.prototype.has(value)
        has: function has(key) {
          if (!_isObject(key)) return false;
          var data = getWeak(key);
          if (data === true) return uncaughtFrozenStore(_validateCollection(this, NAME)).has(key);
          return data && _has(data, this._i);
        }
      });
      return C;
    },
    def: function (that, key, value) {
      var data = getWeak(_anObject(key), true);
      if (data === true) uncaughtFrozenStore(that).set(key, value);else data[that._i] = value;
      return that;
    },
    ufstore: uncaughtFrozenStore
  };

  var ITERATOR$4 = _wks('iterator');

  var SAFE_CLOSING = false;

  try {
    var riter = [7][ITERATOR$4]();

    riter['return'] = function () {
      SAFE_CLOSING = true;
    }; // eslint-disable-next-line no-throw-literal
  } catch (e) {
    /* empty */
  }

  var _iterDetect = function (exec, skipClosing) {
    if (!skipClosing && !SAFE_CLOSING) return false;
    var safe = false;

    try {
      var arr = [7];
      var iter = arr[ITERATOR$4]();

      iter.next = function () {
        return {
          done: safe = true
        };
      };

      arr[ITERATOR$4] = function () {
        return iter;
      };

      exec(arr);
    } catch (e) {
      /* empty */
    }

    return safe;
  };

  var gOPD = Object.getOwnPropertyDescriptor;
  var f$3 = _descriptors ? gOPD : function getOwnPropertyDescriptor(O, P) {
    O = _toIobject(O);
    P = _toPrimitive(P, true);
    if (_ie8DomDefine) try {
      return gOPD(O, P);
    } catch (e) {
      /* empty */
    }
    if (_has(O, P)) return _propertyDesc(!_objectPie.f.call(O, P), O[P]);
  };

  var _objectGopd = {
  	f: f$3
  };

  // Works with __proto__ only. Old v8 can't work with null proto objects.

  /* eslint-disable no-proto */




  var check = function (O, proto) {
    _anObject(O);
    if (!_isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
  };

  var _setProto = {
    set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = _ctx(Function.call, _objectGopd.f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) {
        buggy = true;
      }

      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
    check: check
  };

  var setPrototypeOf = _setProto.set;

  var _inheritIfRequired = function (that, target, C) {
    var S = target.constructor;
    var P;

    if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && _isObject(P) && setPrototypeOf) {
      setPrototypeOf(that, P);
    }

    return that;
  };

  var _collection = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
    var Base = _global[NAME];
    var C = Base;
    var ADDER = IS_MAP ? 'set' : 'add';
    var proto = C && C.prototype;
    var O = {};

    var fixMethod = function (KEY) {
      var fn = proto[KEY];
      _redefine(proto, KEY, KEY == 'delete' ? function (a) {
        return IS_WEAK && !_isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'has' ? function has(a) {
        return IS_WEAK && !_isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'get' ? function get(a) {
        return IS_WEAK && !_isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'add' ? function add(a) {
        fn.call(this, a === 0 ? 0 : a);
        return this;
      } : function set(a, b) {
        fn.call(this, a === 0 ? 0 : a, b);
        return this;
      });
    };

    if (typeof C != 'function' || !(IS_WEAK || proto.forEach && !_fails(function () {
      new C().entries().next();
    }))) {
      // create collection constructor
      C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
      _redefineAll(C.prototype, methods);
      _meta.NEED = true;
    } else {
      var instance = new C(); // early implementations not supports chaining

      var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance; // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false

      var THROWS_ON_PRIMITIVES = _fails(function () {
        instance.has(1);
      }); // most early implementations doesn't supports iterables, most modern - not close it correctly

      var ACCEPT_ITERABLES = _iterDetect(function (iter) {
        new C(iter);
      }); // eslint-disable-line no-new
      // for early implementations -0 and +0 not the same

      var BUGGY_ZERO = !IS_WEAK && _fails(function () {
        // V8 ~ Chromium 42- fails only with 5+ elements
        var $instance = new C();
        var index = 5;

        while (index--) $instance[ADDER](index, index);

        return !$instance.has(-0);
      });

      if (!ACCEPT_ITERABLES) {
        C = wrapper(function (target, iterable) {
          _anInstance(target, C, NAME);
          var that = _inheritIfRequired(new Base(), target, C);
          if (iterable != undefined) _forOf(iterable, IS_MAP, that[ADDER], that);
          return that;
        });
        C.prototype = proto;
        proto.constructor = C;
      }

      if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
        fixMethod('delete');
        fixMethod('has');
        IS_MAP && fixMethod('get');
      }

      if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER); // weak collections should not contains .clear method

      if (IS_WEAK && proto.clear) delete proto.clear;
    }

    _setToStringTag(C, NAME);
    O[NAME] = C;
    _export(_export.G + _export.W + _export.F * (C != Base), O);
    if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);
    return C;
  };

  var es6_weakMap = createCommonjsModule(function (module) {

  var each = _arrayMethods(0);















  var WEAK_MAP = 'WeakMap';
  var getWeak = _meta.getWeak;
  var isExtensible = Object.isExtensible;
  var uncaughtFrozenStore = _collectionWeak.ufstore;
  var tmp = {};
  var InternalMap;

  var wrapper = function (get) {
    return function WeakMap() {
      return get(this, arguments.length > 0 ? arguments[0] : undefined);
    };
  };

  var methods = {
    // 23.3.3.3 WeakMap.prototype.get(key)
    get: function get(key) {
      if (_isObject(key)) {
        var data = getWeak(key);
        if (data === true) return uncaughtFrozenStore(_validateCollection(this, WEAK_MAP)).get(key);
        return data ? data[this._i] : undefined;
      }
    },
    // 23.3.3.5 WeakMap.prototype.set(key, value)
    set: function set(key, value) {
      return _collectionWeak.def(_validateCollection(this, WEAK_MAP), key, value);
    }
  }; // 23.3 WeakMap Objects

  var $WeakMap = module.exports = _collection(WEAK_MAP, wrapper, methods, _collectionWeak, true, true); // IE11 WeakMap frozen keys fix


  if (_fails(function () {
    return new $WeakMap().set((Object.freeze || Object)(tmp), 7).get(tmp) != 7;
  })) {
    InternalMap = _collectionWeak.getConstructor(wrapper, WEAK_MAP);
    _objectAssign(InternalMap.prototype, methods);
    _meta.NEED = true;
    each(['delete', 'has', 'get', 'set'], function (key) {
      var proto = $WeakMap.prototype;
      var method = proto[key];
      _redefine(proto, key, function (a, b) {
        // store frozen objects on internal weakmap shim
        if (_isObject(a) && !isExtensible(a)) {
          if (!this._f) this._f = new InternalMap();

          var result = this._f[key](a, b);

          return key == 'set' ? this : result; // store all the rest on native weakmap
        }

        return method.call(this, a, b);
      });
    });
  }
  });

  // import shaders from './shaders';
  var _cache = new WeakMap(); // TODO: Assemble shader correct way.


  var Shader =
  /*#__PURE__*/
  function () {
    _createClass(Shader, null, [{
      key: "parse",
      value: function parse(raw, modifiers) {
        return raw.replace(/\n(\s*)\[([fv])\s([aA-zZ]*)\]/g, function (match, spaces, shaderType, chunkName) {
          chunkName = shaderType + '_' + chunkName;
          if (!(chunkName in Shader.collection.chunks)) throw new Error("No such chunk \"".concat(chunkName, "\""));
          var chunk = Shader.collection.chunks[chunkName].split('\n').slice(1).join('\n');
          chunk = chunkName in modifiers ? modifiers[chunkName](chunk, function (start, end) {
            return chunk.split('\n').slice(start, end).join('\n');
          }) : chunk;
          chunk = Shader.parse(chunk, modifiers);
          return "\n".concat(spaces, "// [").concat(chunkName, "] \n") + chunk.split('\n').map(function (str) {
            return spaces.slice(1) + str;
          }).join('\n');
        });
      }
    }]);

    function Shader(raw) {
      var modifiers = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, Shader);

      if (Shader.collection === null) throw new Error('Shader.collection should be specified.');
      this.raw = raw;
      this.modifiers = modifiers;
      this.defines = {};
    }

    _createClass(Shader, [{
      key: "define",
      value: function define(defines) {
        Object.assign(this.defines, defines);
        return this;
      }
    }, {
      key: "assemble",
      value: function assemble() {
        var useCached = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var HEAD = '#version 300 es\n\n';
        var defines = Object.entries(this.defines).map(function (_ref) {
          var _ref2 = _slicedToArray(_ref, 2),
              name = _ref2[0],
              value = _ref2[1];

          return value ? "#define ".concat(name, " ").concat(value) : '';
        }).join('\n');

        if (!useCached || !cache.get(this)) {
          var staticPart = Shader.parse(this.raw, this.modifiers);

          _cache.set(this, staticPart);

          return HEAD + defines + '\n\n' + staticPart;
        }

        return HEAD + defines + '\n\n' + cache.get(this);
      }
    }]);

    return Shader;
  }();

  _defineProperty(Shader, "collection", null);

  Shader.collection = shaders; // For browser

  // https://github.com/tc39/proposal-object-values-entries


  var $values = _objectToArray(false);

  _export(_export.S, 'Object', {
    values: function values(it) {
      return $values(it);
    }
  });

  var runtime = createCommonjsModule(function (module) {
  /**
   * Copyright (c) 2014-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  !function (global) {

    var Op = Object.prototype;
    var hasOwn = Op.hasOwnProperty;
    var undefined; // More compressible than void 0.

    var $Symbol = typeof Symbol === "function" ? Symbol : {};
    var iteratorSymbol = $Symbol.iterator || "@@iterator";
    var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
    var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
    var runtime = global.regeneratorRuntime;

    if (runtime) {
      {
        // If regeneratorRuntime is defined globally and we're in a module,
        // make the exports object identical to regeneratorRuntime.
        module.exports = runtime;
      } // Don't bother evaluating the rest of this file if the runtime was
      // already defined globally.


      return;
    } // Define the runtime globally (as expected by generated code) as either
    // module.exports (if we're in a module) or a new, empty object.


    runtime = global.regeneratorRuntime = module.exports;

    function wrap(innerFn, outerFn, self, tryLocsList) {
      // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
      var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
      var generator = Object.create(protoGenerator.prototype);
      var context = new Context(tryLocsList || []); // The ._invoke method unifies the implementations of the .next,
      // .throw, and .return methods.

      generator._invoke = makeInvokeMethod(innerFn, self, context);
      return generator;
    }

    runtime.wrap = wrap; // Try/catch helper to minimize deoptimizations. Returns a completion
    // record like context.tryEntries[i].completion. This interface could
    // have been (and was previously) designed to take a closure to be
    // invoked without arguments, but in all the cases we care about we
    // already have an existing method we want to call, so there's no need
    // to create a new function object. We can even get away with assuming
    // the method takes exactly one argument, since that happens to be true
    // in every case, so we don't have to touch the arguments object. The
    // only additional allocation required is the completion record, which
    // has a stable shape and so hopefully should be cheap to allocate.

    function tryCatch(fn, obj, arg) {
      try {
        return {
          type: "normal",
          arg: fn.call(obj, arg)
        };
      } catch (err) {
        return {
          type: "throw",
          arg: err
        };
      }
    }

    var GenStateSuspendedStart = "suspendedStart";
    var GenStateSuspendedYield = "suspendedYield";
    var GenStateExecuting = "executing";
    var GenStateCompleted = "completed"; // Returning this object from the innerFn has the same effect as
    // breaking out of the dispatch switch statement.

    var ContinueSentinel = {}; // Dummy constructor functions that we use as the .constructor and
    // .constructor.prototype properties for functions that return Generator
    // objects. For full spec compliance, you may wish to configure your
    // minifier not to mangle the names of these two functions.

    function Generator() {}

    function GeneratorFunction() {}

    function GeneratorFunctionPrototype() {} // This is a polyfill for %IteratorPrototype% for environments that
    // don't natively support it.


    var IteratorPrototype = {};

    IteratorPrototype[iteratorSymbol] = function () {
      return this;
    };

    var getProto = Object.getPrototypeOf;
    var NativeIteratorPrototype = getProto && getProto(getProto(values([])));

    if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
      // This environment has a native %IteratorPrototype%; use it instead
      // of the polyfill.
      IteratorPrototype = NativeIteratorPrototype;
    }

    var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
    GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
    GeneratorFunctionPrototype.constructor = GeneratorFunction;
    GeneratorFunctionPrototype[toStringTagSymbol] = GeneratorFunction.displayName = "GeneratorFunction"; // Helper for defining the .next, .throw, and .return methods of the
    // Iterator interface in terms of a single ._invoke method.

    function defineIteratorMethods(prototype) {
      ["next", "throw", "return"].forEach(function (method) {
        prototype[method] = function (arg) {
          return this._invoke(method, arg);
        };
      });
    }

    runtime.isGeneratorFunction = function (genFun) {
      var ctor = typeof genFun === "function" && genFun.constructor;
      return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
      // do is to check its .name property.
      (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
    };

    runtime.mark = function (genFun) {
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
      } else {
        genFun.__proto__ = GeneratorFunctionPrototype;

        if (!(toStringTagSymbol in genFun)) {
          genFun[toStringTagSymbol] = "GeneratorFunction";
        }
      }

      genFun.prototype = Object.create(Gp);
      return genFun;
    }; // Within the body of any async function, `await x` is transformed to
    // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
    // `hasOwn.call(value, "__await")` to determine if the yielded value is
    // meant to be awaited.


    runtime.awrap = function (arg) {
      return {
        __await: arg
      };
    };

    function AsyncIterator(generator) {
      function invoke(method, arg, resolve, reject) {
        var record = tryCatch(generator[method], generator, arg);

        if (record.type === "throw") {
          reject(record.arg);
        } else {
          var result = record.arg;
          var value = result.value;

          if (value && typeof value === "object" && hasOwn.call(value, "__await")) {
            return Promise.resolve(value.__await).then(function (value) {
              invoke("next", value, resolve, reject);
            }, function (err) {
              invoke("throw", err, resolve, reject);
            });
          }

          return Promise.resolve(value).then(function (unwrapped) {
            // When a yielded Promise is resolved, its final value becomes
            // the .value of the Promise<{value,done}> result for the
            // current iteration. If the Promise is rejected, however, the
            // result for this iteration will be rejected with the same
            // reason. Note that rejections of yielded Promises are not
            // thrown back into the generator function, as is the case
            // when an awaited Promise is rejected. This difference in
            // behavior between yield and await is important, because it
            // allows the consumer to decide what to do with the yielded
            // rejection (swallow it and continue, manually .throw it back
            // into the generator, abandon iteration, whatever). With
            // await, by contrast, there is no opportunity to examine the
            // rejection reason outside the generator function, so the
            // only option is to throw it from the await expression, and
            // let the generator function handle the exception.
            result.value = unwrapped;
            resolve(result);
          }, reject);
        }
      }

      var previousPromise;

      function enqueue(method, arg) {
        function callInvokeWithMethodAndArg() {
          return new Promise(function (resolve, reject) {
            invoke(method, arg, resolve, reject);
          });
        }

        return previousPromise = // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, // Avoid propagating failures to Promises returned by later
        // invocations of the iterator.
        callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      } // Define the unified helper method that is used to implement .next,
      // .throw, and .return (see defineIteratorMethods).


      this._invoke = enqueue;
    }

    defineIteratorMethods(AsyncIterator.prototype);

    AsyncIterator.prototype[asyncIteratorSymbol] = function () {
      return this;
    };

    runtime.AsyncIterator = AsyncIterator; // Note that simple async functions are implemented on top of
    // AsyncIterator objects; they just return a Promise for the value of
    // the final result produced by the iterator.

    runtime.async = function (innerFn, outerFn, self, tryLocsList) {
      var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList));
      return runtime.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function (result) {
        return result.done ? result.value : iter.next();
      });
    };

    function makeInvokeMethod(innerFn, self, context) {
      var state = GenStateSuspendedStart;
      return function invoke(method, arg) {
        if (state === GenStateExecuting) {
          throw new Error("Generator is already running");
        }

        if (state === GenStateCompleted) {
          if (method === "throw") {
            throw arg;
          } // Be forgiving, per 25.3.3.3.3 of the spec:
          // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume


          return doneResult();
        }

        context.method = method;
        context.arg = arg;

        while (true) {
          var delegate = context.delegate;

          if (delegate) {
            var delegateResult = maybeInvokeDelegate(delegate, context);

            if (delegateResult) {
              if (delegateResult === ContinueSentinel) continue;
              return delegateResult;
            }
          }

          if (context.method === "next") {
            // Setting context._sent for legacy support of Babel's
            // function.sent implementation.
            context.sent = context._sent = context.arg;
          } else if (context.method === "throw") {
            if (state === GenStateSuspendedStart) {
              state = GenStateCompleted;
              throw context.arg;
            }

            context.dispatchException(context.arg);
          } else if (context.method === "return") {
            context.abrupt("return", context.arg);
          }

          state = GenStateExecuting;
          var record = tryCatch(innerFn, self, context);

          if (record.type === "normal") {
            // If an exception is thrown from innerFn, we leave state ===
            // GenStateExecuting and loop back for another invocation.
            state = context.done ? GenStateCompleted : GenStateSuspendedYield;

            if (record.arg === ContinueSentinel) {
              continue;
            }

            return {
              value: record.arg,
              done: context.done
            };
          } else if (record.type === "throw") {
            state = GenStateCompleted; // Dispatch the exception by looping back around to the
            // context.dispatchException(context.arg) call above.

            context.method = "throw";
            context.arg = record.arg;
          }
        }
      };
    } // Call delegate.iterator[context.method](context.arg) and handle the
    // result, either by returning a { value, done } result from the
    // delegate iterator, or by modifying context.method and context.arg,
    // setting context.delegate to null, and returning the ContinueSentinel.


    function maybeInvokeDelegate(delegate, context) {
      var method = delegate.iterator[context.method];

      if (method === undefined) {
        // A .throw or .return when the delegate iterator has no .throw
        // method always terminates the yield* loop.
        context.delegate = null;

        if (context.method === "throw") {
          if (delegate.iterator.return) {
            // If the delegate iterator has a return method, give it a
            // chance to clean up.
            context.method = "return";
            context.arg = undefined;
            maybeInvokeDelegate(delegate, context);

            if (context.method === "throw") {
              // If maybeInvokeDelegate(context) changed context.method from
              // "return" to "throw", let that override the TypeError below.
              return ContinueSentinel;
            }
          }

          context.method = "throw";
          context.arg = new TypeError("The iterator does not provide a 'throw' method");
        }

        return ContinueSentinel;
      }

      var record = tryCatch(method, delegate.iterator, context.arg);

      if (record.type === "throw") {
        context.method = "throw";
        context.arg = record.arg;
        context.delegate = null;
        return ContinueSentinel;
      }

      var info = record.arg;

      if (!info) {
        context.method = "throw";
        context.arg = new TypeError("iterator result is not an object");
        context.delegate = null;
        return ContinueSentinel;
      }

      if (info.done) {
        // Assign the result of the finished delegate to the temporary
        // variable specified by delegate.resultName (see delegateYield).
        context[delegate.resultName] = info.value; // Resume execution at the desired location (see delegateYield).

        context.next = delegate.nextLoc; // If context.method was "throw" but the delegate handled the
        // exception, let the outer generator proceed normally. If
        // context.method was "next", forget context.arg since it has been
        // "consumed" by the delegate iterator. If context.method was
        // "return", allow the original .return call to continue in the
        // outer generator.

        if (context.method !== "return") {
          context.method = "next";
          context.arg = undefined;
        }
      } else {
        // Re-yield the result returned by the delegate method.
        return info;
      } // The delegate iterator is finished, so forget it and continue with
      // the outer generator.


      context.delegate = null;
      return ContinueSentinel;
    } // Define Generator.prototype.{next,throw,return} in terms of the
    // unified ._invoke helper method.


    defineIteratorMethods(Gp);
    Gp[toStringTagSymbol] = "Generator"; // A Generator should always return itself as the iterator object when the
    // @@iterator function is called on it. Some browsers' implementations of the
    // iterator prototype chain incorrectly implement this, causing the Generator
    // object to not be returned from this call. This ensures that doesn't happen.
    // See https://github.com/facebook/regenerator/issues/274 for more details.

    Gp[iteratorSymbol] = function () {
      return this;
    };

    Gp.toString = function () {
      return "[object Generator]";
    };

    function pushTryEntry(locs) {
      var entry = {
        tryLoc: locs[0]
      };

      if (1 in locs) {
        entry.catchLoc = locs[1];
      }

      if (2 in locs) {
        entry.finallyLoc = locs[2];
        entry.afterLoc = locs[3];
      }

      this.tryEntries.push(entry);
    }

    function resetTryEntry(entry) {
      var record = entry.completion || {};
      record.type = "normal";
      delete record.arg;
      entry.completion = record;
    }

    function Context(tryLocsList) {
      // The root entry object (effectively a try statement without a catch
      // or a finally block) gives us a place to store values thrown from
      // locations where there is no enclosing try statement.
      this.tryEntries = [{
        tryLoc: "root"
      }];
      tryLocsList.forEach(pushTryEntry, this);
      this.reset(true);
    }

    runtime.keys = function (object) {
      var keys = [];

      for (var key in object) {
        keys.push(key);
      }

      keys.reverse(); // Rather than returning an object with a next method, we keep
      // things simple and return the next function itself.

      return function next() {
        while (keys.length) {
          var key = keys.pop();

          if (key in object) {
            next.value = key;
            next.done = false;
            return next;
          }
        } // To avoid creating an additional object, we just hang the .value
        // and .done properties off the next function object itself. This
        // also ensures that the minifier will not anonymize the function.


        next.done = true;
        return next;
      };
    };

    function values(iterable) {
      if (iterable) {
        var iteratorMethod = iterable[iteratorSymbol];

        if (iteratorMethod) {
          return iteratorMethod.call(iterable);
        }

        if (typeof iterable.next === "function") {
          return iterable;
        }

        if (!isNaN(iterable.length)) {
          var i = -1,
              next = function next() {
            while (++i < iterable.length) {
              if (hasOwn.call(iterable, i)) {
                next.value = iterable[i];
                next.done = false;
                return next;
              }
            }

            next.value = undefined;
            next.done = true;
            return next;
          };

          return next.next = next;
        }
      } // Return an iterator with no values.


      return {
        next: doneResult
      };
    }

    runtime.values = values;

    function doneResult() {
      return {
        value: undefined,
        done: true
      };
    }

    Context.prototype = {
      constructor: Context,
      reset: function (skipTempReset) {
        this.prev = 0;
        this.next = 0; // Resetting context._sent for legacy support of Babel's
        // function.sent implementation.

        this.sent = this._sent = undefined;
        this.done = false;
        this.delegate = null;
        this.method = "next";
        this.arg = undefined;
        this.tryEntries.forEach(resetTryEntry);

        if (!skipTempReset) {
          for (var name in this) {
            // Not sure about the optimal order of these conditions:
            if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
              this[name] = undefined;
            }
          }
        }
      },
      stop: function () {
        this.done = true;
        var rootEntry = this.tryEntries[0];
        var rootRecord = rootEntry.completion;

        if (rootRecord.type === "throw") {
          throw rootRecord.arg;
        }

        return this.rval;
      },
      dispatchException: function (exception) {
        if (this.done) {
          throw exception;
        }

        var context = this;

        function handle(loc, caught) {
          record.type = "throw";
          record.arg = exception;
          context.next = loc;

          if (caught) {
            // If the dispatched exception was caught by a catch block,
            // then let that catch block handle the exception normally.
            context.method = "next";
            context.arg = undefined;
          }

          return !!caught;
        }

        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          var record = entry.completion;

          if (entry.tryLoc === "root") {
            // Exception thrown outside of any try block that could handle
            // it, so set the completion value of the entire function to
            // throw the exception.
            return handle("end");
          }

          if (entry.tryLoc <= this.prev) {
            var hasCatch = hasOwn.call(entry, "catchLoc");
            var hasFinally = hasOwn.call(entry, "finallyLoc");

            if (hasCatch && hasFinally) {
              if (this.prev < entry.catchLoc) {
                return handle(entry.catchLoc, true);
              } else if (this.prev < entry.finallyLoc) {
                return handle(entry.finallyLoc);
              }
            } else if (hasCatch) {
              if (this.prev < entry.catchLoc) {
                return handle(entry.catchLoc, true);
              }
            } else if (hasFinally) {
              if (this.prev < entry.finallyLoc) {
                return handle(entry.finallyLoc);
              }
            } else {
              throw new Error("try statement without catch or finally");
            }
          }
        }
      },
      abrupt: function (type, arg) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];

          if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
            var finallyEntry = entry;
            break;
          }
        }

        if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
          // Ignore the finally entry if control is not jumping to a
          // location outside the try/catch block.
          finallyEntry = null;
        }

        var record = finallyEntry ? finallyEntry.completion : {};
        record.type = type;
        record.arg = arg;

        if (finallyEntry) {
          this.method = "next";
          this.next = finallyEntry.finallyLoc;
          return ContinueSentinel;
        }

        return this.complete(record);
      },
      complete: function (record, afterLoc) {
        if (record.type === "throw") {
          throw record.arg;
        }

        if (record.type === "break" || record.type === "continue") {
          this.next = record.arg;
        } else if (record.type === "return") {
          this.rval = this.arg = record.arg;
          this.method = "return";
          this.next = "end";
        } else if (record.type === "normal" && afterLoc) {
          this.next = afterLoc;
        }

        return ContinueSentinel;
      },
      finish: function (finallyLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];

          if (entry.finallyLoc === finallyLoc) {
            this.complete(entry.completion, entry.afterLoc);
            resetTryEntry(entry);
            return ContinueSentinel;
          }
        }
      },
      "catch": function (tryLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];

          if (entry.tryLoc === tryLoc) {
            var record = entry.completion;

            if (record.type === "throw") {
              var thrown = record.arg;
              resetTryEntry(entry);
            }

            return thrown;
          }
        } // The context.catch method must only be called with a location
        // argument that corresponds to a known catch block.


        throw new Error("illegal catch attempt");
      },
      delegateYield: function (iterable, resultName, nextLoc) {
        this.delegate = {
          iterator: values(iterable),
          resultName: resultName,
          nextLoc: nextLoc
        };

        if (this.method === "next") {
          // Deliberately forget the last sent value so that we don't
          // accidentally pass it on to the delegate.
          this.arg = undefined;
        }

        return ContinueSentinel;
      }
    };
  }( // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  function () {
    return this;
  }() || Function("return this")());
  });

  var f$4 = _wks;

  var _wksExt = {
  	f: f$4
  };

  var defineProperty = _objectDp.f;

  var _wksDefine = function (name) {
    var $Symbol = _core.Symbol || (_core.Symbol = _library ? {} : _global.Symbol || {});
    if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, {
      value: _wksExt.f(name)
    });
  };

  _wksDefine('asyncIterator');

  // all enumerable object keys, includes symbols






  var _enumKeys = function (it) {
    var result = _objectKeys(it);
    var getSymbols = _objectGops.f;

    if (getSymbols) {
      var symbols = getSymbols(it);
      var isEnum = _objectPie.f;
      var i = 0;
      var key;

      while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
    }

    return result;
  };

  // 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)


  var hiddenKeys = _enumBugKeys.concat('length', 'prototype');

  var f$5 = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
    return _objectKeysInternal(O, hiddenKeys);
  };

  var _objectGopn = {
  	f: f$5
  };

  // fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window


  var gOPN = _objectGopn.f;

  var toString$1 = {}.toString;
  var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];

  var getWindowNames = function (it) {
    try {
      return gOPN(it);
    } catch (e) {
      return windowNames.slice();
    }
  };

  var f$6 = function getOwnPropertyNames(it) {
    return windowNames && toString$1.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(_toIobject(it));
  };

  var _objectGopnExt = {
  	f: f$6
  };

  var META = _meta.KEY;







































  var gOPD$1 = _objectGopd.f;
  var dP$1 = _objectDp.f;
  var gOPN$1 = _objectGopnExt.f;
  var $Symbol = _global.Symbol;
  var $JSON = _global.JSON;

  var _stringify = $JSON && $JSON.stringify;

  var PROTOTYPE$2 = 'prototype';
  var HIDDEN = _wks('_hidden');
  var TO_PRIMITIVE = _wks('toPrimitive');
  var isEnum$1 = {}.propertyIsEnumerable;
  var SymbolRegistry = _shared('symbol-registry');
  var AllSymbols = _shared('symbols');
  var OPSymbols = _shared('op-symbols');
  var ObjectProto$1 = Object[PROTOTYPE$2];
  var USE_NATIVE = typeof $Symbol == 'function';
  var QObject = _global.QObject; // Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173

  var setter = !QObject || !QObject[PROTOTYPE$2] || !QObject[PROTOTYPE$2].findChild; // fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687

  var setSymbolDesc = _descriptors && _fails(function () {
    return _objectCreate(dP$1({}, 'a', {
      get: function () {
        return dP$1(this, 'a', {
          value: 7
        }).a;
      }
    })).a != 7;
  }) ? function (it, key, D) {
    var protoDesc = gOPD$1(ObjectProto$1, key);
    if (protoDesc) delete ObjectProto$1[key];
    dP$1(it, key, D);
    if (protoDesc && it !== ObjectProto$1) dP$1(ObjectProto$1, key, protoDesc);
  } : dP$1;

  var wrap = function (tag) {
    var sym = AllSymbols[tag] = _objectCreate($Symbol[PROTOTYPE$2]);

    sym._k = tag;
    return sym;
  };

  var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
    return typeof it == 'symbol';
  } : function (it) {
    return it instanceof $Symbol;
  };

  var $defineProperty = function defineProperty(it, key, D) {
    if (it === ObjectProto$1) $defineProperty(OPSymbols, key, D);
    _anObject(it);
    key = _toPrimitive(key, true);
    _anObject(D);

    if (_has(AllSymbols, key)) {
      if (!D.enumerable) {
        if (!_has(it, HIDDEN)) dP$1(it, HIDDEN, _propertyDesc(1, {}));
        it[HIDDEN][key] = true;
      } else {
        if (_has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
        D = _objectCreate(D, {
          enumerable: _propertyDesc(0, false)
        });
      }

      return setSymbolDesc(it, key, D);
    }

    return dP$1(it, key, D);
  };

  var $defineProperties = function defineProperties(it, P) {
    _anObject(it);
    var keys = _enumKeys(P = _toIobject(P));
    var i = 0;
    var l = keys.length;
    var key;

    while (l > i) $defineProperty(it, key = keys[i++], P[key]);

    return it;
  };

  var $create = function create(it, P) {
    return P === undefined ? _objectCreate(it) : $defineProperties(_objectCreate(it), P);
  };

  var $propertyIsEnumerable = function propertyIsEnumerable(key) {
    var E = isEnum$1.call(this, key = _toPrimitive(key, true));
    if (this === ObjectProto$1 && _has(AllSymbols, key) && !_has(OPSymbols, key)) return false;
    return E || !_has(this, key) || !_has(AllSymbols, key) || _has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
  };

  var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
    it = _toIobject(it);
    key = _toPrimitive(key, true);
    if (it === ObjectProto$1 && _has(AllSymbols, key) && !_has(OPSymbols, key)) return;
    var D = gOPD$1(it, key);
    if (D && _has(AllSymbols, key) && !(_has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
    return D;
  };

  var $getOwnPropertyNames = function getOwnPropertyNames(it) {
    var names = gOPN$1(_toIobject(it));
    var result = [];
    var i = 0;
    var key;

    while (names.length > i) {
      if (!_has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
    }

    return result;
  };

  var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
    var IS_OP = it === ObjectProto$1;
    var names = gOPN$1(IS_OP ? OPSymbols : _toIobject(it));
    var result = [];
    var i = 0;
    var key;

    while (names.length > i) {
      if (_has(AllSymbols, key = names[i++]) && (IS_OP ? _has(ObjectProto$1, key) : true)) result.push(AllSymbols[key]);
    }

    return result;
  }; // 19.4.1.1 Symbol([description])


  if (!USE_NATIVE) {
    $Symbol = function Symbol() {
      if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
      var tag = _uid(arguments.length > 0 ? arguments[0] : undefined);

      var $set = function (value) {
        if (this === ObjectProto$1) $set.call(OPSymbols, value);
        if (_has(this, HIDDEN) && _has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
        setSymbolDesc(this, tag, _propertyDesc(1, value));
      };

      if (_descriptors && setter) setSymbolDesc(ObjectProto$1, tag, {
        configurable: true,
        set: $set
      });
      return wrap(tag);
    };

    _redefine($Symbol[PROTOTYPE$2], 'toString', function toString() {
      return this._k;
    });
    _objectGopd.f = $getOwnPropertyDescriptor;
    _objectDp.f = $defineProperty;
    _objectGopn.f = _objectGopnExt.f = $getOwnPropertyNames;
    _objectPie.f = $propertyIsEnumerable;
    _objectGops.f = $getOwnPropertySymbols;

    if (_descriptors && !_library) {
      _redefine(ObjectProto$1, 'propertyIsEnumerable', $propertyIsEnumerable, true);
    }

    _wksExt.f = function (name) {
      return wrap(_wks(name));
    };
  }

  _export(_export.G + _export.W + _export.F * !USE_NATIVE, {
    Symbol: $Symbol
  });

  for (var es6Symbols = // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'.split(','), j = 0; es6Symbols.length > j;) _wks(es6Symbols[j++]);

  for (var wellKnownSymbols = _objectKeys(_wks.store), k = 0; wellKnownSymbols.length > k;) _wksDefine(wellKnownSymbols[k++]);

  _export(_export.S + _export.F * !USE_NATIVE, 'Symbol', {
    // 19.4.2.1 Symbol.for(key)
    'for': function (key) {
      return _has(SymbolRegistry, key += '') ? SymbolRegistry[key] : SymbolRegistry[key] = $Symbol(key);
    },
    // 19.4.2.5 Symbol.keyFor(sym)
    keyFor: function keyFor(sym) {
      if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');

      for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
    },
    useSetter: function () {
      setter = true;
    },
    useSimple: function () {
      setter = false;
    }
  });
  _export(_export.S + _export.F * !USE_NATIVE, 'Object', {
    // 19.1.2.2 Object.create(O [, Properties])
    create: $create,
    // 19.1.2.4 Object.defineProperty(O, P, Attributes)
    defineProperty: $defineProperty,
    // 19.1.2.3 Object.defineProperties(O, Properties)
    defineProperties: $defineProperties,
    // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
    getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
    // 19.1.2.7 Object.getOwnPropertyNames(O)
    getOwnPropertyNames: $getOwnPropertyNames,
    // 19.1.2.8 Object.getOwnPropertySymbols(O)
    getOwnPropertySymbols: $getOwnPropertySymbols
  }); // 24.3.2 JSON.stringify(value [, replacer [, space]])

  $JSON && _export(_export.S + _export.F * (!USE_NATIVE || _fails(function () {
    var S = $Symbol(); // MS Edge converts symbol values to JSON as {}
    // WebKit converts symbol values to JSON as null
    // V8 throws on boxed symbols

    return _stringify([S]) != '[null]' || _stringify({
      a: S
    }) != '{}' || _stringify(Object(S)) != '{}';
  })), 'JSON', {
    stringify: function stringify(it) {
      var args = [it];
      var i = 1;
      var replacer, $replacer;

      while (arguments.length > i) args.push(arguments[i++]);

      $replacer = replacer = args[1];
      if (!_isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined

      if (!_isArray(replacer)) replacer = function (key, value) {
        if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
        if (!isSymbol(value)) return value;
      };
      args[1] = replacer;
      return _stringify.apply($JSON, args);
    }
  }); // 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)

  $Symbol[PROTOTYPE$2][TO_PRIMITIVE] || _hide($Symbol[PROTOTYPE$2], TO_PRIMITIVE, $Symbol[PROTOTYPE$2].valueOf); // 19.4.3.5 Symbol.prototype[@@toStringTag]

  _setToStringTag($Symbol, 'Symbol'); // 20.2.1.9 Math[@@toStringTag]

  _setToStringTag(Math, 'Math', true); // 24.3.3 JSON[@@toStringTag]

  _setToStringTag(_global.JSON, 'JSON', true);

  // 7.3.20 SpeciesConstructor(O, defaultConstructor)




  var SPECIES$1 = _wks('species');

  var _speciesConstructor = function (O, D) {
    var C = _anObject(O).constructor;
    var S;
    return C === undefined || (S = _anObject(C)[SPECIES$1]) == undefined ? D : _aFunction(S);
  };

  // fast apply, http://jsperf.lnkit.com/fast-apply/5
  var _invoke = function (fn, args, that) {
    var un = that === undefined;

    switch (args.length) {
      case 0:
        return un ? fn() : fn.call(that);

      case 1:
        return un ? fn(args[0]) : fn.call(that, args[0]);

      case 2:
        return un ? fn(args[0], args[1]) : fn.call(that, args[0], args[1]);

      case 3:
        return un ? fn(args[0], args[1], args[2]) : fn.call(that, args[0], args[1], args[2]);

      case 4:
        return un ? fn(args[0], args[1], args[2], args[3]) : fn.call(that, args[0], args[1], args[2], args[3]);
    }

    return fn.apply(that, args);
  };

  var process = _global.process;
  var setTask = _global.setImmediate;
  var clearTask = _global.clearImmediate;
  var MessageChannel = _global.MessageChannel;
  var Dispatch = _global.Dispatch;
  var counter = 0;
  var queue = {};
  var ONREADYSTATECHANGE = 'onreadystatechange';
  var defer, channel, port;

  var run = function () {
    var id = +this; // eslint-disable-next-line no-prototype-builtins

    if (queue.hasOwnProperty(id)) {
      var fn = queue[id];
      delete queue[id];
      fn();
    }
  };

  var listener = function (event) {
    run.call(event.data);
  }; // Node.js 0.9+ & IE10+ has setImmediate, otherwise:


  if (!setTask || !clearTask) {
    setTask = function setImmediate(fn) {
      var args = [];
      var i = 1;

      while (arguments.length > i) args.push(arguments[i++]);

      queue[++counter] = function () {
        // eslint-disable-next-line no-new-func
        _invoke(typeof fn == 'function' ? fn : Function(fn), args);
      };

      defer(counter);
      return counter;
    };

    clearTask = function clearImmediate(id) {
      delete queue[id];
    }; // Node.js 0.8-


    if (_cof(process) == 'process') {
      defer = function (id) {
        process.nextTick(_ctx(run, id, 1));
      }; // Sphere (JS game engine) Dispatch API

    } else if (Dispatch && Dispatch.now) {
      defer = function (id) {
        Dispatch.now(_ctx(run, id, 1));
      }; // Browsers with MessageChannel, includes WebWorkers

    } else if (MessageChannel) {
      channel = new MessageChannel();
      port = channel.port2;
      channel.port1.onmessage = listener;
      defer = _ctx(port.postMessage, port, 1); // Browsers with postMessage, skip WebWorkers
      // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
    } else if (_global.addEventListener && typeof postMessage == 'function' && !_global.importScripts) {
      defer = function (id) {
        _global.postMessage(id + '', '*');
      };

      _global.addEventListener('message', listener, false); // IE8-
    } else if (ONREADYSTATECHANGE in _domCreate('script')) {
      defer = function (id) {
        _html.appendChild(_domCreate('script'))[ONREADYSTATECHANGE] = function () {
          _html.removeChild(this);
          run.call(id);
        };
      }; // Rest old browsers

    } else {
      defer = function (id) {
        setTimeout(_ctx(run, id, 1), 0);
      };
    }
  }

  var _task = {
    set: setTask,
    clear: clearTask
  };

  var macrotask = _task.set;

  var Observer = _global.MutationObserver || _global.WebKitMutationObserver;
  var process$1 = _global.process;
  var Promise$1 = _global.Promise;
  var isNode = _cof(process$1) == 'process';

  var _microtask = function () {
    var head, last, notify;

    var flush = function () {
      var parent, fn;
      if (isNode && (parent = process$1.domain)) parent.exit();

      while (head) {
        fn = head.fn;
        head = head.next;

        try {
          fn();
        } catch (e) {
          if (head) notify();else last = undefined;
          throw e;
        }
      }

      last = undefined;
      if (parent) parent.enter();
    }; // Node.js


    if (isNode) {
      notify = function () {
        process$1.nextTick(flush);
      }; // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339

    } else if (Observer && !(_global.navigator && _global.navigator.standalone)) {
      var toggle = true;
      var node = document.createTextNode('');
      new Observer(flush).observe(node, {
        characterData: true
      }); // eslint-disable-line no-new

      notify = function () {
        node.data = toggle = !toggle;
      }; // environments with maybe non-completely correct, but existent Promise

    } else if (Promise$1 && Promise$1.resolve) {
      // Promise.resolve without an argument throws an error in LG WebOS 2
      var promise = Promise$1.resolve(undefined);

      notify = function () {
        promise.then(flush);
      }; // for other environments - macrotask based on:
      // - setImmediate
      // - MessageChannel
      // - window.postMessag
      // - onreadystatechange
      // - setTimeout

    } else {
      notify = function () {
        // strange IE + webpack dev server bug - use .call(global)
        macrotask.call(_global, flush);
      };
    }

    return function (fn) {
      var task = {
        fn: fn,
        next: undefined
      };
      if (last) last.next = task;

      if (!head) {
        head = task;
        notify();
      }

      last = task;
    };
  };

  function PromiseCapability(C) {
    var resolve, reject;
    this.promise = new C(function ($$resolve, $$reject) {
      if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
      resolve = $$resolve;
      reject = $$reject;
    });
    this.resolve = _aFunction(resolve);
    this.reject = _aFunction(reject);
  }

  var f$7 = function (C) {
    return new PromiseCapability(C);
  };

  var _newPromiseCapability = {
  	f: f$7
  };

  var _perform = function (exec) {
    try {
      return {
        e: false,
        v: exec()
      };
    } catch (e) {
      return {
        e: true,
        v: e
      };
    }
  };

  var navigator = _global.navigator;
  var _userAgent = navigator && navigator.userAgent || '';

  var _promiseResolve = function (C, x) {
    _anObject(C);
    if (_isObject(x) && x.constructor === C) return x;
    var promiseCapability = _newPromiseCapability.f(C);
    var resolve = promiseCapability.resolve;
    resolve(x);
    return promiseCapability.promise;
  };

  var SPECIES$2 = _wks('species');

  var _setSpecies = function (KEY) {
    var C = _global[KEY];
    if (_descriptors && C && !C[SPECIES$2]) _objectDp.f(C, SPECIES$2, {
      configurable: true,
      get: function () {
        return this;
      }
    });
  };

  var task = _task.set;

  var microtask = _microtask();









  var PROMISE = 'Promise';
  var TypeError$1 = _global.TypeError;
  var process$2 = _global.process;
  var versions = process$2 && process$2.versions;
  var v8 = versions && versions.v8 || '';
  var $Promise = _global[PROMISE];
  var isNode$1 = _classof(process$2) == 'process';

  var empty = function () {
    /* empty */
  };

  var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
  var newPromiseCapability = newGenericPromiseCapability = _newPromiseCapability.f;
  var USE_NATIVE$1 = !!function () {
    try {
      // correct subclassing with @@species support
      var promise = $Promise.resolve(1);

      var FakePromise = (promise.constructor = {})[_wks('species')] = function (exec) {
        exec(empty, empty);
      }; // unhandled rejections tracking support, NodeJS Promise without it fails @@species test


      return (isNode$1 || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
      // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
      // we can't detect it synchronously, so just check versions
      && v8.indexOf('6.6') !== 0 && _userAgent.indexOf('Chrome/66') === -1;
    } catch (e) {
      /* empty */
    }
  }(); // helpers

  var isThenable = function (it) {
    var then;
    return _isObject(it) && typeof (then = it.then) == 'function' ? then : false;
  };

  var notify = function (promise, isReject) {
    if (promise._n) return;
    promise._n = true;
    var chain = promise._c;
    microtask(function () {
      var value = promise._v;
      var ok = promise._s == 1;
      var i = 0;

      var run = function (reaction) {
        var handler = ok ? reaction.ok : reaction.fail;
        var resolve = reaction.resolve;
        var reject = reaction.reject;
        var domain = reaction.domain;
        var result, then, exited;

        try {
          if (handler) {
            if (!ok) {
              if (promise._h == 2) onHandleUnhandled(promise);
              promise._h = 1;
            }

            if (handler === true) result = value;else {
              if (domain) domain.enter();
              result = handler(value); // may throw

              if (domain) {
                domain.exit();
                exited = true;
              }
            }

            if (result === reaction.promise) {
              reject(TypeError$1('Promise-chain cycle'));
            } else if (then = isThenable(result)) {
              then.call(result, resolve, reject);
            } else resolve(result);
          } else reject(value);
        } catch (e) {
          if (domain && !exited) domain.exit();
          reject(e);
        }
      };

      while (chain.length > i) run(chain[i++]); // variable length - can't use forEach


      promise._c = [];
      promise._n = false;
      if (isReject && !promise._h) onUnhandled(promise);
    });
  };

  var onUnhandled = function (promise) {
    task.call(_global, function () {
      var value = promise._v;
      var unhandled = isUnhandled(promise);
      var result, handler, console;

      if (unhandled) {
        result = _perform(function () {
          if (isNode$1) {
            process$2.emit('unhandledRejection', value, promise);
          } else if (handler = _global.onunhandledrejection) {
            handler({
              promise: promise,
              reason: value
            });
          } else if ((console = _global.console) && console.error) {
            console.error('Unhandled promise rejection', value);
          }
        }); // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should

        promise._h = isNode$1 || isUnhandled(promise) ? 2 : 1;
      }

      promise._a = undefined;
      if (unhandled && result.e) throw result.v;
    });
  };

  var isUnhandled = function (promise) {
    return promise._h !== 1 && (promise._a || promise._c).length === 0;
  };

  var onHandleUnhandled = function (promise) {
    task.call(_global, function () {
      var handler;

      if (isNode$1) {
        process$2.emit('rejectionHandled', promise);
      } else if (handler = _global.onrejectionhandled) {
        handler({
          promise: promise,
          reason: promise._v
        });
      }
    });
  };

  var $reject = function (value) {
    var promise = this;
    if (promise._d) return;
    promise._d = true;
    promise = promise._w || promise; // unwrap

    promise._v = value;
    promise._s = 2;
    if (!promise._a) promise._a = promise._c.slice();
    notify(promise, true);
  };

  var $resolve = function (value) {
    var promise = this;
    var then;
    if (promise._d) return;
    promise._d = true;
    promise = promise._w || promise; // unwrap

    try {
      if (promise === value) throw TypeError$1("Promise can't be resolved itself");

      if (then = isThenable(value)) {
        microtask(function () {
          var wrapper = {
            _w: promise,
            _d: false
          }; // wrap

          try {
            then.call(value, _ctx($resolve, wrapper, 1), _ctx($reject, wrapper, 1));
          } catch (e) {
            $reject.call(wrapper, e);
          }
        });
      } else {
        promise._v = value;
        promise._s = 1;
        notify(promise, false);
      }
    } catch (e) {
      $reject.call({
        _w: promise,
        _d: false
      }, e); // wrap
    }
  }; // constructor polyfill


  if (!USE_NATIVE$1) {
    // 25.4.3.1 Promise(executor)
    $Promise = function Promise(executor) {
      _anInstance(this, $Promise, PROMISE, '_h');
      _aFunction(executor);
      Internal.call(this);

      try {
        executor(_ctx($resolve, this, 1), _ctx($reject, this, 1));
      } catch (err) {
        $reject.call(this, err);
      }
    }; // eslint-disable-next-line no-unused-vars


    Internal = function Promise(executor) {
      this._c = []; // <- awaiting reactions

      this._a = undefined; // <- checked in isUnhandled reactions

      this._s = 0; // <- state

      this._d = false; // <- done

      this._v = undefined; // <- value

      this._h = 0; // <- rejection state, 0 - default, 1 - handled, 2 - unhandled

      this._n = false; // <- notify
    };

    Internal.prototype = _redefineAll($Promise.prototype, {
      // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
      then: function then(onFulfilled, onRejected) {
        var reaction = newPromiseCapability(_speciesConstructor(this, $Promise));
        reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
        reaction.fail = typeof onRejected == 'function' && onRejected;
        reaction.domain = isNode$1 ? process$2.domain : undefined;

        this._c.push(reaction);

        if (this._a) this._a.push(reaction);
        if (this._s) notify(this, false);
        return reaction.promise;
      },
      // 25.4.5.1 Promise.prototype.catch(onRejected)
      'catch': function (onRejected) {
        return this.then(undefined, onRejected);
      }
    });

    OwnPromiseCapability = function () {
      var promise = new Internal();
      this.promise = promise;
      this.resolve = _ctx($resolve, promise, 1);
      this.reject = _ctx($reject, promise, 1);
    };

    _newPromiseCapability.f = newPromiseCapability = function (C) {
      return C === $Promise || C === Wrapper ? new OwnPromiseCapability(C) : newGenericPromiseCapability(C);
    };
  }

  _export(_export.G + _export.W + _export.F * !USE_NATIVE$1, {
    Promise: $Promise
  });

  _setToStringTag($Promise, PROMISE);

  _setSpecies(PROMISE);

  Wrapper = _core[PROMISE]; // statics

  _export(_export.S + _export.F * !USE_NATIVE$1, PROMISE, {
    // 25.4.4.5 Promise.reject(r)
    reject: function reject(r) {
      var capability = newPromiseCapability(this);
      var $$reject = capability.reject;
      $$reject(r);
      return capability.promise;
    }
  });
  _export(_export.S + _export.F * (_library || !USE_NATIVE$1), PROMISE, {
    // 25.4.4.6 Promise.resolve(x)
    resolve: function resolve(x) {
      return _promiseResolve(_library && this === Wrapper ? $Promise : this, x);
    }
  });
  _export(_export.S + _export.F * !(USE_NATIVE$1 && _iterDetect(function (iter) {
    $Promise.all(iter)['catch'](empty);
  })), PROMISE, {
    // 25.4.4.1 Promise.all(iterable)
    all: function all(iterable) {
      var C = this;
      var capability = newPromiseCapability(C);
      var resolve = capability.resolve;
      var reject = capability.reject;
      var result = _perform(function () {
        var values = [];
        var index = 0;
        var remaining = 1;
        _forOf(iterable, false, function (promise) {
          var $index = index++;
          var alreadyCalled = false;
          values.push(undefined);
          remaining++;
          C.resolve(promise).then(function (value) {
            if (alreadyCalled) return;
            alreadyCalled = true;
            values[$index] = value;
            --remaining || resolve(values);
          }, reject);
        });
        --remaining || resolve(values);
      });
      if (result.e) reject(result.v);
      return capability.promise;
    },
    // 25.4.4.4 Promise.race(iterable)
    race: function race(iterable) {
      var C = this;
      var capability = newPromiseCapability(C);
      var reject = capability.reject;
      var result = _perform(function () {
        _forOf(iterable, false, function (promise) {
          C.resolve(promise).then(capability.resolve, reject);
        });
      });
      if (result.e) reject(result.v);
      return capability.promise;
    }
  });

  var dP$2 = _objectDp.f;

  var FProto = Function.prototype;
  var nameRE = /^\s*function ([^ (]*)/;
  var NAME$1 = 'name'; // 19.2.4.2 name

  NAME$1 in FProto || _descriptors && dP$2(FProto, NAME$1, {
    configurable: true,
    get: function () {
      try {
        return ('' + this).match(nameRE)[1];
      } catch (e) {
        return '';
      }
    }
  });

  // all object keys, includes non-enumerable and symbols






  var Reflect$1 = _global.Reflect;

  var _ownKeys = Reflect$1 && Reflect$1.ownKeys || function ownKeys(it) {
    var keys = _objectGopn.f(_anObject(it));
    var getSymbols = _objectGops.f;
    return getSymbols ? keys.concat(getSymbols(it)) : keys;
  };

  var _createProperty = function (object, index, value) {
    if (index in object) _objectDp.f(object, index, _propertyDesc(0, value));else object[index] = value;
  };

  // https://github.com/tc39/proposal-object-getownpropertydescriptors










  _export(_export.S, 'Object', {
    getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
      var O = _toIobject(object);
      var getDesc = _objectGopd.f;
      var keys = _ownKeys(O);
      var result = {};
      var i = 0;
      var key, desc;

      while (keys.length > i) {
        desc = getDesc(O, key = keys[i++]);
        if (desc !== undefined) _createProperty(result, key, desc);
      }

      return result;
    }
  });

  var uniformsDataMap = new WeakMap();

  function getType(value) {
    if (value.isMat4) return 'mat4';
    if (value.isVec3) return 'vec3';
    var type = 'float';
    if (value.isTexture) type = 'texture';else if (Array.isArray(value)) {
      if (value.length <= 4) type = "vec".concat(value.length);else type = 'mat' + (value.length === 9 ? 3 : 4);
    }
    return type;
  }

  var UniformStack =
  /*#__PURE__*/
  function () {
    function UniformStack(uniforms) {
      var _this = this;

      _classCallCheck(this, UniformStack);

      var uniformsData = {};
      uniformsDataMap.set(this, uniformsData);

      var _arr = Object.entries(Object.getOwnPropertyDescriptors(uniforms));

      for (var _i = 0; _i < _arr.length; _i++) {
        var _arr$_i = _slicedToArray(_arr[_i], 2),
            name = _arr$_i[0],
            uniformDescriptor = _arr$_i[1];

        if (this[name]) throw new Error("Uniform can't be a UniformStack#".concat(name, " as it is a part of UniformStack API"));
        this.addUniform(name, uniformDescriptor, uniformsData);
      }

      console.log(uniformsData);
      return new Proxy(this, {
        set: function set(object, key, value) {
          if (object[key]) throw new Error("Uniform can't be a UniformStack#".concat(key, " as it is a part of UniformStack API"));

          if (key in uniformsData) {
            // TODO: handle promises
            uniformsData[key].descriptor = {
              value: value
            };
            uniformsData[key].needsUpdate = true;
          } else _this.addUniform(key, {
            value: value
          }, uniformsData);

          return true;
        },
        get: function get(object, key) {
          return (object[key].bind ? object[key].bind(object) : object[key]) || uniformsData[key].descriptor;
        }
      });
    }

    _createClass(UniformStack, [{
      key: "addUniform",
      value: function addUniform(name, uniformDescriptor) {
        var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : uniformsDataMap.get(this);
        var currentValue = uniformDescriptor.value || uniformDescriptor.get();
        if (!currentValue) return;
        var type = null;

        if (currentValue instanceof Promise) {
          currentValue.then(function (v) {
            data[name].type = getType(v);
            data[name].descriptor.set(v);
            data[name].isValueUniform = Boolean(v.isValueUniform);
          });
          type = 'promise';
        } else type = getType(currentValue);

        data[name] = {
          name: name,
          type: type,
          descriptor: uniformDescriptor,
          needsUpdate: true,
          isValueUniform: Boolean(currentValue.isValueUniform)
        };
      }
    }, {
      key: "getType",
      value: function getType(name) {
        var uniforms = uniformsDataMap.get(this);
        return uniforms[name] && uniforms[name].type;
      }
    }, {
      key: Symbol.iterator,
      value:
      /*#__PURE__*/
      regeneratorRuntime.mark(function value() {
        var _arr2, _i2, uniform;

        return regeneratorRuntime.wrap(function value$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _arr2 = Object.values(uniformsDataMap.get(this));
                _i2 = 0;

              case 2:
                if (!(_i2 < _arr2.length)) {
                  _context.next = 9;
                  break;
                }

                uniform = _arr2[_i2];
                _context.next = 6;
                return uniform;

              case 6:
                _i2++;
                _context.next = 2;
                break;

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, value, this);
      })
    }]);

    return UniformStack;
  }();

  var Material =
  /*#__PURE__*/
  function () {
    function Material() {
      var _this = this;

      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, Material);

      options = Object.assign({
        type: 'flat',
        defines: {},
        alias: [],
        modifiers: {}
      }, options);
      var shader = Shader.collection[options.type];
      this.type = options.type;
      this._vertexShader = new Shader(shader.vert, options.modifiers).define(options.defines);
      this._fragmentShader = new Shader(shader.frag, options.modifiers).define(options.defines);
      this.uniforms = Object.assign({}, shader.uniforms);
      Object.defineProperties(this.uniforms, _objectSpread({}, Object.entries(options.alias).reduce(function (o, _ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            n = _ref2[0],
            v = _ref2[1];

        return Object.assign(o, _defineProperty({}, n, {
          get: function get() {
            return _this[v];
          },
          set: function set(input) {
            _this[v] = input;
          }
        }));
      }, {})));
    }

    _createClass(Material, [{
      key: "initializeUniforms",
      value: function initializeUniforms() {
        // TODO: Make uniforms clone tool
        this.uniforms = new UniformStack(this.uniforms);
      }
    }, {
      key: "frag",
      get: function get() {
        return this._fragmentShader.assemble();
      }
    }, {
      key: "vert",
      get: function get() {
        return this._vertexShader.assemble();
      }
    }]);

    return Material;
  }();

  var _flags = function () {
    var that = _anObject(this);
    var result = '';
    if (that.global) result += 'g';
    if (that.ignoreCase) result += 'i';
    if (that.multiline) result += 'm';
    if (that.unicode) result += 'u';
    if (that.sticky) result += 'y';
    return result;
  };

  // 21.2.5.3 get RegExp.prototype.flags()
  if (_descriptors && /./g.flags != 'g') _objectDp.f(RegExp.prototype, 'flags', {
    configurable: true,
    get: _flags
  });

  var TO_STRING = 'toString';
  var $toString = /./[TO_STRING];

  var define = function (fn) {
    _redefine(RegExp.prototype, TO_STRING, fn, true);
  }; // 21.2.5.14 RegExp.prototype.toString()


  if (_fails(function () {
    return $toString.call({
      source: 'a',
      flags: 'b'
    }) != '/a/b';
  })) {
    define(function toString() {
      var R = _anObject(this);
      return '/'.concat(R.source, '/', 'flags' in R ? R.flags : !_descriptors && R instanceof RegExp ? _flags.call(R) : undefined);
    }); // FF44- RegExp#toString has a wrong name
  } else if ($toString.name != TO_STRING) {
    define(function toString() {
      return $toString.call(this);
    });
  }

  var dP$3 = _objectDp.f;



















  var fastKey = _meta.fastKey;



  var SIZE = _descriptors ? '_s' : 'size';

  var getEntry = function (that, key) {
    // fast case
    var index = fastKey(key);
    var entry;
    if (index !== 'F') return that._i[index]; // frozen object case

    for (entry = that._f; entry; entry = entry.n) {
      if (entry.k == key) return entry;
    }
  };

  var _collectionStrong = {
    getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
      var C = wrapper(function (that, iterable) {
        _anInstance(that, C, NAME, '_i');
        that._t = NAME; // collection type

        that._i = _objectCreate(null); // index

        that._f = undefined; // first entry

        that._l = undefined; // last entry

        that[SIZE] = 0; // size

        if (iterable != undefined) _forOf(iterable, IS_MAP, that[ADDER], that);
      });
      _redefineAll(C.prototype, {
        // 23.1.3.1 Map.prototype.clear()
        // 23.2.3.2 Set.prototype.clear()
        clear: function clear() {
          for (var that = _validateCollection(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {
            entry.r = true;
            if (entry.p) entry.p = entry.p.n = undefined;
            delete data[entry.i];
          }

          that._f = that._l = undefined;
          that[SIZE] = 0;
        },
        // 23.1.3.3 Map.prototype.delete(key)
        // 23.2.3.4 Set.prototype.delete(value)
        'delete': function (key) {
          var that = _validateCollection(this, NAME);
          var entry = getEntry(that, key);

          if (entry) {
            var next = entry.n;
            var prev = entry.p;
            delete that._i[entry.i];
            entry.r = true;
            if (prev) prev.n = next;
            if (next) next.p = prev;
            if (that._f == entry) that._f = next;
            if (that._l == entry) that._l = prev;
            that[SIZE]--;
          }

          return !!entry;
        },
        // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
        // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
        forEach: function forEach(callbackfn
        /* , that = undefined */
        ) {
          _validateCollection(this, NAME);
          var f = _ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
          var entry;

          while (entry = entry ? entry.n : this._f) {
            f(entry.v, entry.k, this); // revert to the last existing entry

            while (entry && entry.r) entry = entry.p;
          }
        },
        // 23.1.3.7 Map.prototype.has(key)
        // 23.2.3.7 Set.prototype.has(value)
        has: function has(key) {
          return !!getEntry(_validateCollection(this, NAME), key);
        }
      });
      if (_descriptors) dP$3(C.prototype, 'size', {
        get: function () {
          return _validateCollection(this, NAME)[SIZE];
        }
      });
      return C;
    },
    def: function (that, key, value) {
      var entry = getEntry(that, key);
      var prev, index; // change existing entry

      if (entry) {
        entry.v = value; // create new entry
      } else {
        that._l = entry = {
          i: index = fastKey(key, true),
          // <- index
          k: key,
          // <- key
          v: value,
          // <- value
          p: prev = that._l,
          // <- previous entry
          n: undefined,
          // <- next entry
          r: false // <- removed

        };
        if (!that._f) that._f = entry;
        if (prev) prev.n = entry;
        that[SIZE]++; // add to index

        if (index !== 'F') that._i[index] = entry;
      }

      return that;
    },
    getEntry: getEntry,
    setStrong: function (C, NAME, IS_MAP) {
      // add .keys, .values, .entries, [@@iterator]
      // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
      _iterDefine(C, NAME, function (iterated, kind) {
        this._t = _validateCollection(iterated, NAME); // target

        this._k = kind; // kind

        this._l = undefined; // previous
      }, function () {
        var that = this;
        var kind = that._k;
        var entry = that._l; // revert to the last existing entry

        while (entry && entry.r) entry = entry.p; // get next entry


        if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
          // or finish the iteration
          that._t = undefined;
          return _iterStep(1);
        } // return step by kind


        if (kind == 'keys') return _iterStep(0, entry.k);
        if (kind == 'values') return _iterStep(0, entry.v);
        return _iterStep(0, [entry.k, entry.v]);
      }, IS_MAP ? 'entries' : 'values', !IS_MAP, true); // add [@@species], 23.1.2.2, 23.2.2.2

      _setSpecies(NAME);
    }
  };

  var SET = 'Set'; // 23.2 Set Objects

  var es6_set = _collection(SET, function (get) {
    return function Set() {
      return get(this, arguments.length > 0 ? arguments[0] : undefined);
    };
  }, {
    // 23.2.3.1 Set.prototype.add(value)
    add: function add(value) {
      return _collectionStrong.def(_validateCollection(this, SET), value = value === 0 ? 0 : value, value);
    }
  }, _collectionStrong);

  var create_1 = create;
  /**
   * Creates a new identity mat4
   *
   * @returns {mat4} a new 4x4 matrix
   */

  function create() {
    var out = new Float32Array(16);
    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = 1;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[10] = 1;
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
    out[15] = 1;
    return out;
  }

  var clone_1 = clone;
  /**
   * Creates a new mat4 initialized with values from an existing matrix
   *
   * @param {mat4} a matrix to clone
   * @returns {mat4} a new 4x4 matrix
   */

  function clone(a) {
    var out = new Float32Array(16);
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    out[4] = a[4];
    out[5] = a[5];
    out[6] = a[6];
    out[7] = a[7];
    out[8] = a[8];
    out[9] = a[9];
    out[10] = a[10];
    out[11] = a[11];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
    return out;
  }

  var copy_1 = copy;
  /**
   * Copy the values from one mat4 to another
   *
   * @param {mat4} out the receiving matrix
   * @param {mat4} a the source matrix
   * @returns {mat4} out
   */

  function copy(out, a) {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    out[4] = a[4];
    out[5] = a[5];
    out[6] = a[6];
    out[7] = a[7];
    out[8] = a[8];
    out[9] = a[9];
    out[10] = a[10];
    out[11] = a[11];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
    return out;
  }

  var identity_1 = identity;
  /**
   * Set a mat4 to the identity matrix
   *
   * @param {mat4} out the receiving matrix
   * @returns {mat4} out
   */

  function identity(out) {
    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = 1;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[10] = 1;
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
    out[15] = 1;
    return out;
  }

  var transpose_1 = transpose;
  /**
   * Transpose the values of a mat4
   *
   * @param {mat4} out the receiving matrix
   * @param {mat4} a the source matrix
   * @returns {mat4} out
   */

  function transpose(out, a) {
    // If we are transposing ourselves we can skip a few steps but have to cache some values
    if (out === a) {
      var a01 = a[1],
          a02 = a[2],
          a03 = a[3],
          a12 = a[6],
          a13 = a[7],
          a23 = a[11];
      out[1] = a[4];
      out[2] = a[8];
      out[3] = a[12];
      out[4] = a01;
      out[6] = a[9];
      out[7] = a[13];
      out[8] = a02;
      out[9] = a12;
      out[11] = a[14];
      out[12] = a03;
      out[13] = a13;
      out[14] = a23;
    } else {
      out[0] = a[0];
      out[1] = a[4];
      out[2] = a[8];
      out[3] = a[12];
      out[4] = a[1];
      out[5] = a[5];
      out[6] = a[9];
      out[7] = a[13];
      out[8] = a[2];
      out[9] = a[6];
      out[10] = a[10];
      out[11] = a[14];
      out[12] = a[3];
      out[13] = a[7];
      out[14] = a[11];
      out[15] = a[15];
    }

    return out;
  }

  var invert_1 = invert;
  /**
   * Inverts a mat4
   *
   * @param {mat4} out the receiving matrix
   * @param {mat4} a the source matrix
   * @returns {mat4} out
   */

  function invert(out, a) {
    var a00 = a[0],
        a01 = a[1],
        a02 = a[2],
        a03 = a[3],
        a10 = a[4],
        a11 = a[5],
        a12 = a[6],
        a13 = a[7],
        a20 = a[8],
        a21 = a[9],
        a22 = a[10],
        a23 = a[11],
        a30 = a[12],
        a31 = a[13],
        a32 = a[14],
        a33 = a[15],
        b00 = a00 * a11 - a01 * a10,
        b01 = a00 * a12 - a02 * a10,
        b02 = a00 * a13 - a03 * a10,
        b03 = a01 * a12 - a02 * a11,
        b04 = a01 * a13 - a03 * a11,
        b05 = a02 * a13 - a03 * a12,
        b06 = a20 * a31 - a21 * a30,
        b07 = a20 * a32 - a22 * a30,
        b08 = a20 * a33 - a23 * a30,
        b09 = a21 * a32 - a22 * a31,
        b10 = a21 * a33 - a23 * a31,
        b11 = a22 * a33 - a23 * a32,
        // Calculate the determinant
    det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;

    if (!det) {
      return null;
    }

    det = 1.0 / det;
    out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
    out[1] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
    out[2] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
    out[3] = (a22 * b04 - a21 * b05 - a23 * b03) * det;
    out[4] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
    out[5] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
    out[6] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
    out[7] = (a20 * b05 - a22 * b02 + a23 * b01) * det;
    out[8] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
    out[9] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
    out[10] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
    out[11] = (a21 * b02 - a20 * b04 - a23 * b00) * det;
    out[12] = (a11 * b07 - a10 * b09 - a12 * b06) * det;
    out[13] = (a00 * b09 - a01 * b07 + a02 * b06) * det;
    out[14] = (a31 * b01 - a30 * b03 - a32 * b00) * det;
    out[15] = (a20 * b03 - a21 * b01 + a22 * b00) * det;
    return out;
  }

  var adjoint_1 = adjoint;
  /**
   * Calculates the adjugate of a mat4
   *
   * @param {mat4} out the receiving matrix
   * @param {mat4} a the source matrix
   * @returns {mat4} out
   */

  function adjoint(out, a) {
    var a00 = a[0],
        a01 = a[1],
        a02 = a[2],
        a03 = a[3],
        a10 = a[4],
        a11 = a[5],
        a12 = a[6],
        a13 = a[7],
        a20 = a[8],
        a21 = a[9],
        a22 = a[10],
        a23 = a[11],
        a30 = a[12],
        a31 = a[13],
        a32 = a[14],
        a33 = a[15];
    out[0] = a11 * (a22 * a33 - a23 * a32) - a21 * (a12 * a33 - a13 * a32) + a31 * (a12 * a23 - a13 * a22);
    out[1] = -(a01 * (a22 * a33 - a23 * a32) - a21 * (a02 * a33 - a03 * a32) + a31 * (a02 * a23 - a03 * a22));
    out[2] = a01 * (a12 * a33 - a13 * a32) - a11 * (a02 * a33 - a03 * a32) + a31 * (a02 * a13 - a03 * a12);
    out[3] = -(a01 * (a12 * a23 - a13 * a22) - a11 * (a02 * a23 - a03 * a22) + a21 * (a02 * a13 - a03 * a12));
    out[4] = -(a10 * (a22 * a33 - a23 * a32) - a20 * (a12 * a33 - a13 * a32) + a30 * (a12 * a23 - a13 * a22));
    out[5] = a00 * (a22 * a33 - a23 * a32) - a20 * (a02 * a33 - a03 * a32) + a30 * (a02 * a23 - a03 * a22);
    out[6] = -(a00 * (a12 * a33 - a13 * a32) - a10 * (a02 * a33 - a03 * a32) + a30 * (a02 * a13 - a03 * a12));
    out[7] = a00 * (a12 * a23 - a13 * a22) - a10 * (a02 * a23 - a03 * a22) + a20 * (a02 * a13 - a03 * a12);
    out[8] = a10 * (a21 * a33 - a23 * a31) - a20 * (a11 * a33 - a13 * a31) + a30 * (a11 * a23 - a13 * a21);
    out[9] = -(a00 * (a21 * a33 - a23 * a31) - a20 * (a01 * a33 - a03 * a31) + a30 * (a01 * a23 - a03 * a21));
    out[10] = a00 * (a11 * a33 - a13 * a31) - a10 * (a01 * a33 - a03 * a31) + a30 * (a01 * a13 - a03 * a11);
    out[11] = -(a00 * (a11 * a23 - a13 * a21) - a10 * (a01 * a23 - a03 * a21) + a20 * (a01 * a13 - a03 * a11));
    out[12] = -(a10 * (a21 * a32 - a22 * a31) - a20 * (a11 * a32 - a12 * a31) + a30 * (a11 * a22 - a12 * a21));
    out[13] = a00 * (a21 * a32 - a22 * a31) - a20 * (a01 * a32 - a02 * a31) + a30 * (a01 * a22 - a02 * a21);
    out[14] = -(a00 * (a11 * a32 - a12 * a31) - a10 * (a01 * a32 - a02 * a31) + a30 * (a01 * a12 - a02 * a11));
    out[15] = a00 * (a11 * a22 - a12 * a21) - a10 * (a01 * a22 - a02 * a21) + a20 * (a01 * a12 - a02 * a11);
    return out;
  }

  var determinant_1 = determinant;
  /**
   * Calculates the determinant of a mat4
   *
   * @param {mat4} a the source matrix
   * @returns {Number} determinant of a
   */

  function determinant(a) {
    var a00 = a[0],
        a01 = a[1],
        a02 = a[2],
        a03 = a[3],
        a10 = a[4],
        a11 = a[5],
        a12 = a[6],
        a13 = a[7],
        a20 = a[8],
        a21 = a[9],
        a22 = a[10],
        a23 = a[11],
        a30 = a[12],
        a31 = a[13],
        a32 = a[14],
        a33 = a[15],
        b00 = a00 * a11 - a01 * a10,
        b01 = a00 * a12 - a02 * a10,
        b02 = a00 * a13 - a03 * a10,
        b03 = a01 * a12 - a02 * a11,
        b04 = a01 * a13 - a03 * a11,
        b05 = a02 * a13 - a03 * a12,
        b06 = a20 * a31 - a21 * a30,
        b07 = a20 * a32 - a22 * a30,
        b08 = a20 * a33 - a23 * a30,
        b09 = a21 * a32 - a22 * a31,
        b10 = a21 * a33 - a23 * a31,
        b11 = a22 * a33 - a23 * a32; // Calculate the determinant

    return b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
  }

  var multiply_1 = multiply;
  /**
   * Multiplies two mat4's
   *
   * @param {mat4} out the receiving matrix
   * @param {mat4} a the first operand
   * @param {mat4} b the second operand
   * @returns {mat4} out
   */

  function multiply(out, a, b) {
    var a00 = a[0],
        a01 = a[1],
        a02 = a[2],
        a03 = a[3],
        a10 = a[4],
        a11 = a[5],
        a12 = a[6],
        a13 = a[7],
        a20 = a[8],
        a21 = a[9],
        a22 = a[10],
        a23 = a[11],
        a30 = a[12],
        a31 = a[13],
        a32 = a[14],
        a33 = a[15]; // Cache only the current line of the second matrix

    var b0 = b[0],
        b1 = b[1],
        b2 = b[2],
        b3 = b[3];
    out[0] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
    out[1] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
    out[2] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
    out[3] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
    b0 = b[4];
    b1 = b[5];
    b2 = b[6];
    b3 = b[7];
    out[4] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
    out[5] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
    out[6] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
    out[7] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
    b0 = b[8];
    b1 = b[9];
    b2 = b[10];
    b3 = b[11];
    out[8] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
    out[9] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
    out[10] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
    out[11] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
    b0 = b[12];
    b1 = b[13];
    b2 = b[14];
    b3 = b[15];
    out[12] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
    out[13] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
    out[14] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
    out[15] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
    return out;
  }

  var translate_1 = translate;
  /**
   * Translate a mat4 by the given vector
   *
   * @param {mat4} out the receiving matrix
   * @param {mat4} a the matrix to translate
   * @param {vec3} v vector to translate by
   * @returns {mat4} out
   */

  function translate(out, a, v) {
    var x = v[0],
        y = v[1],
        z = v[2],
        a00,
        a01,
        a02,
        a03,
        a10,
        a11,
        a12,
        a13,
        a20,
        a21,
        a22,
        a23;

    if (a === out) {
      out[12] = a[0] * x + a[4] * y + a[8] * z + a[12];
      out[13] = a[1] * x + a[5] * y + a[9] * z + a[13];
      out[14] = a[2] * x + a[6] * y + a[10] * z + a[14];
      out[15] = a[3] * x + a[7] * y + a[11] * z + a[15];
    } else {
      a00 = a[0];
      a01 = a[1];
      a02 = a[2];
      a03 = a[3];
      a10 = a[4];
      a11 = a[5];
      a12 = a[6];
      a13 = a[7];
      a20 = a[8];
      a21 = a[9];
      a22 = a[10];
      a23 = a[11];
      out[0] = a00;
      out[1] = a01;
      out[2] = a02;
      out[3] = a03;
      out[4] = a10;
      out[5] = a11;
      out[6] = a12;
      out[7] = a13;
      out[8] = a20;
      out[9] = a21;
      out[10] = a22;
      out[11] = a23;
      out[12] = a00 * x + a10 * y + a20 * z + a[12];
      out[13] = a01 * x + a11 * y + a21 * z + a[13];
      out[14] = a02 * x + a12 * y + a22 * z + a[14];
      out[15] = a03 * x + a13 * y + a23 * z + a[15];
    }

    return out;
  }

  var scale_1 = scale;
  /**
   * Scales the mat4 by the dimensions in the given vec3
   *
   * @param {mat4} out the receiving matrix
   * @param {mat4} a the matrix to scale
   * @param {vec3} v the vec3 to scale the matrix by
   * @returns {mat4} out
   **/

  function scale(out, a, v) {
    var x = v[0],
        y = v[1],
        z = v[2];
    out[0] = a[0] * x;
    out[1] = a[1] * x;
    out[2] = a[2] * x;
    out[3] = a[3] * x;
    out[4] = a[4] * y;
    out[5] = a[5] * y;
    out[6] = a[6] * y;
    out[7] = a[7] * y;
    out[8] = a[8] * z;
    out[9] = a[9] * z;
    out[10] = a[10] * z;
    out[11] = a[11] * z;
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
    return out;
  }

  var rotate_1 = rotate;
  /**
   * Rotates a mat4 by the given angle
   *
   * @param {mat4} out the receiving matrix
   * @param {mat4} a the matrix to rotate
   * @param {Number} rad the angle to rotate the matrix by
   * @param {vec3} axis the axis to rotate around
   * @returns {mat4} out
   */

  function rotate(out, a, rad, axis) {
    var x = axis[0],
        y = axis[1],
        z = axis[2],
        len = Math.sqrt(x * x + y * y + z * z),
        s,
        c,
        t,
        a00,
        a01,
        a02,
        a03,
        a10,
        a11,
        a12,
        a13,
        a20,
        a21,
        a22,
        a23,
        b00,
        b01,
        b02,
        b10,
        b11,
        b12,
        b20,
        b21,
        b22;

    if (Math.abs(len) < 0.000001) {
      return null;
    }

    len = 1 / len;
    x *= len;
    y *= len;
    z *= len;
    s = Math.sin(rad);
    c = Math.cos(rad);
    t = 1 - c;
    a00 = a[0];
    a01 = a[1];
    a02 = a[2];
    a03 = a[3];
    a10 = a[4];
    a11 = a[5];
    a12 = a[6];
    a13 = a[7];
    a20 = a[8];
    a21 = a[9];
    a22 = a[10];
    a23 = a[11]; // Construct the elements of the rotation matrix

    b00 = x * x * t + c;
    b01 = y * x * t + z * s;
    b02 = z * x * t - y * s;
    b10 = x * y * t - z * s;
    b11 = y * y * t + c;
    b12 = z * y * t + x * s;
    b20 = x * z * t + y * s;
    b21 = y * z * t - x * s;
    b22 = z * z * t + c; // Perform rotation-specific matrix multiplication

    out[0] = a00 * b00 + a10 * b01 + a20 * b02;
    out[1] = a01 * b00 + a11 * b01 + a21 * b02;
    out[2] = a02 * b00 + a12 * b01 + a22 * b02;
    out[3] = a03 * b00 + a13 * b01 + a23 * b02;
    out[4] = a00 * b10 + a10 * b11 + a20 * b12;
    out[5] = a01 * b10 + a11 * b11 + a21 * b12;
    out[6] = a02 * b10 + a12 * b11 + a22 * b12;
    out[7] = a03 * b10 + a13 * b11 + a23 * b12;
    out[8] = a00 * b20 + a10 * b21 + a20 * b22;
    out[9] = a01 * b20 + a11 * b21 + a21 * b22;
    out[10] = a02 * b20 + a12 * b21 + a22 * b22;
    out[11] = a03 * b20 + a13 * b21 + a23 * b22;

    if (a !== out) {
      // If the source and destination differ, copy the unchanged last row
      out[12] = a[12];
      out[13] = a[13];
      out[14] = a[14];
      out[15] = a[15];
    }

    return out;
  }

  var rotateX_1 = rotateX;
  /**
   * Rotates a matrix by the given angle around the X axis
   *
   * @param {mat4} out the receiving matrix
   * @param {mat4} a the matrix to rotate
   * @param {Number} rad the angle to rotate the matrix by
   * @returns {mat4} out
   */

  function rotateX(out, a, rad) {
    var s = Math.sin(rad),
        c = Math.cos(rad),
        a10 = a[4],
        a11 = a[5],
        a12 = a[6],
        a13 = a[7],
        a20 = a[8],
        a21 = a[9],
        a22 = a[10],
        a23 = a[11];

    if (a !== out) {
      // If the source and destination differ, copy the unchanged rows
      out[0] = a[0];
      out[1] = a[1];
      out[2] = a[2];
      out[3] = a[3];
      out[12] = a[12];
      out[13] = a[13];
      out[14] = a[14];
      out[15] = a[15];
    } // Perform axis-specific matrix multiplication


    out[4] = a10 * c + a20 * s;
    out[5] = a11 * c + a21 * s;
    out[6] = a12 * c + a22 * s;
    out[7] = a13 * c + a23 * s;
    out[8] = a20 * c - a10 * s;
    out[9] = a21 * c - a11 * s;
    out[10] = a22 * c - a12 * s;
    out[11] = a23 * c - a13 * s;
    return out;
  }

  var rotateY_1 = rotateY;
  /**
   * Rotates a matrix by the given angle around the Y axis
   *
   * @param {mat4} out the receiving matrix
   * @param {mat4} a the matrix to rotate
   * @param {Number} rad the angle to rotate the matrix by
   * @returns {mat4} out
   */

  function rotateY(out, a, rad) {
    var s = Math.sin(rad),
        c = Math.cos(rad),
        a00 = a[0],
        a01 = a[1],
        a02 = a[2],
        a03 = a[3],
        a20 = a[8],
        a21 = a[9],
        a22 = a[10],
        a23 = a[11];

    if (a !== out) {
      // If the source and destination differ, copy the unchanged rows
      out[4] = a[4];
      out[5] = a[5];
      out[6] = a[6];
      out[7] = a[7];
      out[12] = a[12];
      out[13] = a[13];
      out[14] = a[14];
      out[15] = a[15];
    } // Perform axis-specific matrix multiplication


    out[0] = a00 * c - a20 * s;
    out[1] = a01 * c - a21 * s;
    out[2] = a02 * c - a22 * s;
    out[3] = a03 * c - a23 * s;
    out[8] = a00 * s + a20 * c;
    out[9] = a01 * s + a21 * c;
    out[10] = a02 * s + a22 * c;
    out[11] = a03 * s + a23 * c;
    return out;
  }

  var rotateZ_1 = rotateZ;
  /**
   * Rotates a matrix by the given angle around the Z axis
   *
   * @param {mat4} out the receiving matrix
   * @param {mat4} a the matrix to rotate
   * @param {Number} rad the angle to rotate the matrix by
   * @returns {mat4} out
   */

  function rotateZ(out, a, rad) {
    var s = Math.sin(rad),
        c = Math.cos(rad),
        a00 = a[0],
        a01 = a[1],
        a02 = a[2],
        a03 = a[3],
        a10 = a[4],
        a11 = a[5],
        a12 = a[6],
        a13 = a[7];

    if (a !== out) {
      // If the source and destination differ, copy the unchanged last row
      out[8] = a[8];
      out[9] = a[9];
      out[10] = a[10];
      out[11] = a[11];
      out[12] = a[12];
      out[13] = a[13];
      out[14] = a[14];
      out[15] = a[15];
    } // Perform axis-specific matrix multiplication


    out[0] = a00 * c + a10 * s;
    out[1] = a01 * c + a11 * s;
    out[2] = a02 * c + a12 * s;
    out[3] = a03 * c + a13 * s;
    out[4] = a10 * c - a00 * s;
    out[5] = a11 * c - a01 * s;
    out[6] = a12 * c - a02 * s;
    out[7] = a13 * c - a03 * s;
    return out;
  }

  var fromRotation_1 = fromRotation;
  /**
   * Creates a matrix from a given angle around a given axis
   * This is equivalent to (but much faster than):
   *
   *     mat4.identity(dest)
   *     mat4.rotate(dest, dest, rad, axis)
   *
   * @param {mat4} out mat4 receiving operation result
   * @param {Number} rad the angle to rotate the matrix by
   * @param {vec3} axis the axis to rotate around
   * @returns {mat4} out
   */

  function fromRotation(out, rad, axis) {
    var s, c, t;
    var x = axis[0];
    var y = axis[1];
    var z = axis[2];
    var len = Math.sqrt(x * x + y * y + z * z);

    if (Math.abs(len) < 0.000001) {
      return null;
    }

    len = 1 / len;
    x *= len;
    y *= len;
    z *= len;
    s = Math.sin(rad);
    c = Math.cos(rad);
    t = 1 - c; // Perform rotation-specific matrix multiplication

    out[0] = x * x * t + c;
    out[1] = y * x * t + z * s;
    out[2] = z * x * t - y * s;
    out[3] = 0;
    out[4] = x * y * t - z * s;
    out[5] = y * y * t + c;
    out[6] = z * y * t + x * s;
    out[7] = 0;
    out[8] = x * z * t + y * s;
    out[9] = y * z * t - x * s;
    out[10] = z * z * t + c;
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
    out[15] = 1;
    return out;
  }

  var fromRotationTranslation_1 = fromRotationTranslation;
  /**
   * Creates a matrix from a quaternion rotation and vector translation
   * This is equivalent to (but much faster than):
   *
   *     mat4.identity(dest);
   *     mat4.translate(dest, vec);
   *     var quatMat = mat4.create();
   *     quat4.toMat4(quat, quatMat);
   *     mat4.multiply(dest, quatMat);
   *
   * @param {mat4} out mat4 receiving operation result
   * @param {quat4} q Rotation quaternion
   * @param {vec3} v Translation vector
   * @returns {mat4} out
   */

  function fromRotationTranslation(out, q, v) {
    // Quaternion math
    var x = q[0],
        y = q[1],
        z = q[2],
        w = q[3],
        x2 = x + x,
        y2 = y + y,
        z2 = z + z,
        xx = x * x2,
        xy = x * y2,
        xz = x * z2,
        yy = y * y2,
        yz = y * z2,
        zz = z * z2,
        wx = w * x2,
        wy = w * y2,
        wz = w * z2;
    out[0] = 1 - (yy + zz);
    out[1] = xy + wz;
    out[2] = xz - wy;
    out[3] = 0;
    out[4] = xy - wz;
    out[5] = 1 - (xx + zz);
    out[6] = yz + wx;
    out[7] = 0;
    out[8] = xz + wy;
    out[9] = yz - wx;
    out[10] = 1 - (xx + yy);
    out[11] = 0;
    out[12] = v[0];
    out[13] = v[1];
    out[14] = v[2];
    out[15] = 1;
    return out;
  }

  var fromScaling_1 = fromScaling;
  /**
   * Creates a matrix from a vector scaling
   * This is equivalent to (but much faster than):
   *
   *     mat4.identity(dest)
   *     mat4.scale(dest, dest, vec)
   *
   * @param {mat4} out mat4 receiving operation result
   * @param {vec3} v Scaling vector
   * @returns {mat4} out
   */

  function fromScaling(out, v) {
    out[0] = v[0];
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = v[1];
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[10] = v[2];
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
    out[15] = 1;
    return out;
  }

  var fromTranslation_1 = fromTranslation;
  /**
   * Creates a matrix from a vector translation
   * This is equivalent to (but much faster than):
   *
   *     mat4.identity(dest)
   *     mat4.translate(dest, dest, vec)
   *
   * @param {mat4} out mat4 receiving operation result
   * @param {vec3} v Translation vector
   * @returns {mat4} out
   */

  function fromTranslation(out, v) {
    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = 1;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[10] = 1;
    out[11] = 0;
    out[12] = v[0];
    out[13] = v[1];
    out[14] = v[2];
    out[15] = 1;
    return out;
  }

  var fromXRotation_1 = fromXRotation;
  /**
   * Creates a matrix from the given angle around the X axis
   * This is equivalent to (but much faster than):
   *
   *     mat4.identity(dest)
   *     mat4.rotateX(dest, dest, rad)
   *
   * @param {mat4} out mat4 receiving operation result
   * @param {Number} rad the angle to rotate the matrix by
   * @returns {mat4} out
   */

  function fromXRotation(out, rad) {
    var s = Math.sin(rad),
        c = Math.cos(rad); // Perform axis-specific matrix multiplication

    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = c;
    out[6] = s;
    out[7] = 0;
    out[8] = 0;
    out[9] = -s;
    out[10] = c;
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
    out[15] = 1;
    return out;
  }

  var fromYRotation_1 = fromYRotation;
  /**
   * Creates a matrix from the given angle around the Y axis
   * This is equivalent to (but much faster than):
   *
   *     mat4.identity(dest)
   *     mat4.rotateY(dest, dest, rad)
   *
   * @param {mat4} out mat4 receiving operation result
   * @param {Number} rad the angle to rotate the matrix by
   * @returns {mat4} out
   */

  function fromYRotation(out, rad) {
    var s = Math.sin(rad),
        c = Math.cos(rad); // Perform axis-specific matrix multiplication

    out[0] = c;
    out[1] = 0;
    out[2] = -s;
    out[3] = 0;
    out[4] = 0;
    out[5] = 1;
    out[6] = 0;
    out[7] = 0;
    out[8] = s;
    out[9] = 0;
    out[10] = c;
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
    out[15] = 1;
    return out;
  }

  var fromZRotation_1 = fromZRotation;
  /**
   * Creates a matrix from the given angle around the Z axis
   * This is equivalent to (but much faster than):
   *
   *     mat4.identity(dest)
   *     mat4.rotateZ(dest, dest, rad)
   *
   * @param {mat4} out mat4 receiving operation result
   * @param {Number} rad the angle to rotate the matrix by
   * @returns {mat4} out
   */

  function fromZRotation(out, rad) {
    var s = Math.sin(rad),
        c = Math.cos(rad); // Perform axis-specific matrix multiplication

    out[0] = c;
    out[1] = s;
    out[2] = 0;
    out[3] = 0;
    out[4] = -s;
    out[5] = c;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[10] = 1;
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
    out[15] = 1;
    return out;
  }

  var fromQuat_1 = fromQuat;
  /**
   * Creates a matrix from a quaternion rotation.
   *
   * @param {mat4} out mat4 receiving operation result
   * @param {quat4} q Rotation quaternion
   * @returns {mat4} out
   */

  function fromQuat(out, q) {
    var x = q[0],
        y = q[1],
        z = q[2],
        w = q[3],
        x2 = x + x,
        y2 = y + y,
        z2 = z + z,
        xx = x * x2,
        yx = y * x2,
        yy = y * y2,
        zx = z * x2,
        zy = z * y2,
        zz = z * z2,
        wx = w * x2,
        wy = w * y2,
        wz = w * z2;
    out[0] = 1 - yy - zz;
    out[1] = yx + wz;
    out[2] = zx - wy;
    out[3] = 0;
    out[4] = yx - wz;
    out[5] = 1 - xx - zz;
    out[6] = zy + wx;
    out[7] = 0;
    out[8] = zx + wy;
    out[9] = zy - wx;
    out[10] = 1 - xx - yy;
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
    out[15] = 1;
    return out;
  }

  var frustum_1 = frustum;
  /**
   * Generates a frustum matrix with the given bounds
   *
   * @param {mat4} out mat4 frustum matrix will be written into
   * @param {Number} left Left bound of the frustum
   * @param {Number} right Right bound of the frustum
   * @param {Number} bottom Bottom bound of the frustum
   * @param {Number} top Top bound of the frustum
   * @param {Number} near Near bound of the frustum
   * @param {Number} far Far bound of the frustum
   * @returns {mat4} out
   */

  function frustum(out, left, right, bottom, top, near, far) {
    var rl = 1 / (right - left),
        tb = 1 / (top - bottom),
        nf = 1 / (near - far);
    out[0] = near * 2 * rl;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = near * 2 * tb;
    out[6] = 0;
    out[7] = 0;
    out[8] = (right + left) * rl;
    out[9] = (top + bottom) * tb;
    out[10] = (far + near) * nf;
    out[11] = -1;
    out[12] = 0;
    out[13] = 0;
    out[14] = far * near * 2 * nf;
    out[15] = 0;
    return out;
  }

  var perspective_1 = perspective;
  /**
   * Generates a perspective projection matrix with the given bounds
   *
   * @param {mat4} out mat4 frustum matrix will be written into
   * @param {number} fovy Vertical field of view in radians
   * @param {number} aspect Aspect ratio. typically viewport width/height
   * @param {number} near Near bound of the frustum
   * @param {number} far Far bound of the frustum
   * @returns {mat4} out
   */

  function perspective(out, fovy, aspect, near, far) {
    var f = 1.0 / Math.tan(fovy / 2),
        nf = 1 / (near - far);
    out[0] = f / aspect;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = f;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[10] = (far + near) * nf;
    out[11] = -1;
    out[12] = 0;
    out[13] = 0;
    out[14] = 2 * far * near * nf;
    out[15] = 0;
    return out;
  }

  var perspectiveFromFieldOfView_1 = perspectiveFromFieldOfView;
  /**
   * Generates a perspective projection matrix with the given field of view.
   * This is primarily useful for generating projection matrices to be used
   * with the still experiemental WebVR API.
   *
   * @param {mat4} out mat4 frustum matrix will be written into
   * @param {number} fov Object containing the following values: upDegrees, downDegrees, leftDegrees, rightDegrees
   * @param {number} near Near bound of the frustum
   * @param {number} far Far bound of the frustum
   * @returns {mat4} out
   */

  function perspectiveFromFieldOfView(out, fov, near, far) {
    var upTan = Math.tan(fov.upDegrees * Math.PI / 180.0),
        downTan = Math.tan(fov.downDegrees * Math.PI / 180.0),
        leftTan = Math.tan(fov.leftDegrees * Math.PI / 180.0),
        rightTan = Math.tan(fov.rightDegrees * Math.PI / 180.0),
        xScale = 2.0 / (leftTan + rightTan),
        yScale = 2.0 / (upTan + downTan);
    out[0] = xScale;
    out[1] = 0.0;
    out[2] = 0.0;
    out[3] = 0.0;
    out[4] = 0.0;
    out[5] = yScale;
    out[6] = 0.0;
    out[7] = 0.0;
    out[8] = -((leftTan - rightTan) * xScale * 0.5);
    out[9] = (upTan - downTan) * yScale * 0.5;
    out[10] = far / (near - far);
    out[11] = -1.0;
    out[12] = 0.0;
    out[13] = 0.0;
    out[14] = far * near / (near - far);
    out[15] = 0.0;
    return out;
  }

  var ortho_1 = ortho;
  /**
   * Generates a orthogonal projection matrix with the given bounds
   *
   * @param {mat4} out mat4 frustum matrix will be written into
   * @param {number} left Left bound of the frustum
   * @param {number} right Right bound of the frustum
   * @param {number} bottom Bottom bound of the frustum
   * @param {number} top Top bound of the frustum
   * @param {number} near Near bound of the frustum
   * @param {number} far Far bound of the frustum
   * @returns {mat4} out
   */

  function ortho(out, left, right, bottom, top, near, far) {
    var lr = 1 / (left - right),
        bt = 1 / (bottom - top),
        nf = 1 / (near - far);
    out[0] = -2 * lr;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = -2 * bt;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[10] = 2 * nf;
    out[11] = 0;
    out[12] = (left + right) * lr;
    out[13] = (top + bottom) * bt;
    out[14] = (far + near) * nf;
    out[15] = 1;
    return out;
  }

  var lookAt_1 = lookAt;
  /**
   * Generates a look-at matrix with the given eye position, focal point, and up axis
   *
   * @param {mat4} out mat4 frustum matrix will be written into
   * @param {vec3} eye Position of the viewer
   * @param {vec3} center Point the viewer is looking at
   * @param {vec3} up vec3 pointing up
   * @returns {mat4} out
   */

  function lookAt(out, eye, center, up) {
    var x0,
        x1,
        x2,
        y0,
        y1,
        y2,
        z0,
        z1,
        z2,
        len,
        eyex = eye[0],
        eyey = eye[1],
        eyez = eye[2],
        upx = up[0],
        upy = up[1],
        upz = up[2],
        centerx = center[0],
        centery = center[1],
        centerz = center[2];

    if (Math.abs(eyex - centerx) < 0.000001 && Math.abs(eyey - centery) < 0.000001 && Math.abs(eyez - centerz) < 0.000001) {
      return identity_1(out);
    }

    z0 = eyex - centerx;
    z1 = eyey - centery;
    z2 = eyez - centerz;
    len = 1 / Math.sqrt(z0 * z0 + z1 * z1 + z2 * z2);
    z0 *= len;
    z1 *= len;
    z2 *= len;
    x0 = upy * z2 - upz * z1;
    x1 = upz * z0 - upx * z2;
    x2 = upx * z1 - upy * z0;
    len = Math.sqrt(x0 * x0 + x1 * x1 + x2 * x2);

    if (!len) {
      x0 = 0;
      x1 = 0;
      x2 = 0;
    } else {
      len = 1 / len;
      x0 *= len;
      x1 *= len;
      x2 *= len;
    }

    y0 = z1 * x2 - z2 * x1;
    y1 = z2 * x0 - z0 * x2;
    y2 = z0 * x1 - z1 * x0;
    len = Math.sqrt(y0 * y0 + y1 * y1 + y2 * y2);

    if (!len) {
      y0 = 0;
      y1 = 0;
      y2 = 0;
    } else {
      len = 1 / len;
      y0 *= len;
      y1 *= len;
      y2 *= len;
    }

    out[0] = x0;
    out[1] = y0;
    out[2] = z0;
    out[3] = 0;
    out[4] = x1;
    out[5] = y1;
    out[6] = z1;
    out[7] = 0;
    out[8] = x2;
    out[9] = y2;
    out[10] = z2;
    out[11] = 0;
    out[12] = -(x0 * eyex + x1 * eyey + x2 * eyez);
    out[13] = -(y0 * eyex + y1 * eyey + y2 * eyez);
    out[14] = -(z0 * eyex + z1 * eyey + z2 * eyez);
    out[15] = 1;
    return out;
  }

  var str_1 = str;
  /**
   * Returns a string representation of a mat4
   *
   * @param {mat4} mat matrix to represent as a string
   * @returns {String} string representation of the matrix
   */

  function str(a) {
    return 'mat4(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ', ' + a[4] + ', ' + a[5] + ', ' + a[6] + ', ' + a[7] + ', ' + a[8] + ', ' + a[9] + ', ' + a[10] + ', ' + a[11] + ', ' + a[12] + ', ' + a[13] + ', ' + a[14] + ', ' + a[15] + ')';
  }

  var glMat4 = {
    create: create_1,
    clone: clone_1,
    copy: copy_1,
    identity: identity_1,
    transpose: transpose_1,
    invert: invert_1,
    adjoint: adjoint_1,
    determinant: determinant_1,
    multiply: multiply_1,
    translate: translate_1,
    scale: scale_1,
    rotate: rotate_1,
    rotateX: rotateX_1,
    rotateY: rotateY_1,
    rotateZ: rotateZ_1,
    fromRotation: fromRotation_1,
    fromRotationTranslation: fromRotationTranslation_1,
    fromScaling: fromScaling_1,
    fromTranslation: fromTranslation_1,
    fromXRotation: fromXRotation_1,
    fromYRotation: fromYRotation_1,
    fromZRotation: fromZRotation_1,
    fromQuat: fromQuat_1,
    frustum: frustum_1,
    perspective: perspective_1,
    perspectiveFromFieldOfView: perspectiveFromFieldOfView_1,
    ortho: ortho_1,
    lookAt: lookAt_1,
    str: str_1
  };
  var glMat4_3 = glMat4.copy;
  var glMat4_4 = glMat4.identity;
  var glMat4_6 = glMat4.invert;
  var glMat4_9 = glMat4.multiply;
  var glMat4_17 = glMat4.fromRotationTranslation;
  var glMat4_18 = glMat4.fromScaling;
  var glMat4_25 = glMat4.perspective;
  var glMat4_27 = glMat4.ortho;

  var dP$4 = _objectDp.f;

  var gOPN$2 = _objectGopn.f;





  var $RegExp = _global.RegExp;
  var Base = $RegExp;
  var proto$1 = $RegExp.prototype;
  var re1 = /a/g;
  var re2 = /a/g; // "new" creates a new object, old webkit buggy here

  var CORRECT_NEW = new $RegExp(re1) !== re1;

  if (_descriptors && (!CORRECT_NEW || _fails(function () {
    re2[_wks('match')] = false; // RegExp constructor can alter flags and IsRegExp works correct with @@match

    return $RegExp(re1) != re1 || $RegExp(re2) == re2 || $RegExp(re1, 'i') != '/a/i';
  }))) {
    $RegExp = function RegExp(p, f) {
      var tiRE = this instanceof $RegExp;
      var piRE = _isRegexp(p);
      var fiU = f === undefined;
      return !tiRE && piRE && p.constructor === $RegExp && fiU ? p : _inheritIfRequired(CORRECT_NEW ? new Base(piRE && !fiU ? p.source : p, f) : Base((piRE = p instanceof $RegExp) ? p.source : p, piRE && fiU ? _flags.call(p) : f), tiRE ? this : proto$1, $RegExp);
    };

    var proxy = function (key) {
      key in $RegExp || dP$4($RegExp, key, {
        configurable: true,
        get: function () {
          return Base[key];
        },
        set: function (it) {
          Base[key] = it;
        }
      });
    };

    for (var keys = gOPN$2(Base), i$1 = 0; keys.length > i$1;) proxy(keys[i$1++]);

    proto$1.constructor = $RegExp;
    $RegExp.prototype = proto$1;

    _redefine(_global, 'RegExp', $RegExp);
  }

  _setSpecies('RegExp');

  var Geometry =
  /*#__PURE__*/
  function () {
    function Geometry() {
      var _this = this;

      _classCallCheck(this, Geometry);

      _defineProperty(this, "_compile", function (gl) {
        _this._compiledVAO = gl.createVertexArray();
      });

      _defineProperty(this, "_bind", function (gl) {
        gl.bindVertexArray(_this._compiledVAO);
      });

      this.index = null;
      this.attributes = {};
    }

    _createClass(Geometry, [{
      key: "setAttribute",
      value: function setAttribute(name, attribute) {
        this.attributes[name] = attribute;
      }
    }, {
      key: "setIndex",
      value: function setIndex(attribute) {
        this.index = attribute;
      }
    }, {
      key: "getCount",
      value: function getCount() {
        if (this.index) return this.index.array.length;else if (this.attributes.position) return this.attributes.position.array.length / 3;
        return null;
      }
    }]);

    return Geometry;
  }();

  var _geometryRefs = new WeakMap();

  var Program =
  /*#__PURE__*/
  function () {
    function Program() {
      var _this = this;

      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var geometry = arguments.length > 1 ? arguments[1] : undefined;

      _classCallCheck(this, Program);

      _defineProperty(this, "_compile", function (gl) {
        _this.vertexShader = _this.vertexShader || Program.createShader(gl, 'vertex', _this.vert);
        _this.fragmentShader = _this.fragmentShader || Program.createShader(gl, 'fragment', _this.frag);
        var program = gl.createProgram();
        gl.attachShader(program, _this.vertexShader);
        gl.attachShader(program, _this.fragmentShader);
        gl.linkProgram(program);
        var success = gl.getProgramParameter(program, gl.LINK_STATUS);

        var vao = _geometryRefs.get(_this);

        if (!vao._compiledVAO) vao._compile(gl);

        _this._bind(gl, true, program);

        if (success) return program; // TODO: Cleanup error logging + add troubleshooting

        console.log(gl.getProgramInfoLog(program));
        gl.deleteProgram(program);
      });

      _defineProperty(this, "_bind", function (gl) {
        var vaoNeedsUpdate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var program = arguments.length > 2 ? arguments[2] : undefined;

        _geometryRefs.get(_this)._bind(gl);

        if (vaoNeedsUpdate) {
          // // index attribute
          if (_this.index) {
            if (!_this.index._compiledBuffer) _this.index._compile(gl, true);

            _this.index._bind(gl, null, true);
          } //
          // // non-index attributes


          var _arr = Object.entries(_this.attributes);

          for (var _i = 0; _i < _arr.length; _i++) {
            var _arr$_i = _slicedToArray(_arr[_i], 2),
                attrName = _arr$_i[0],
                attr = _arr$_i[1];

            if (!attr._compiledBuffer) attr._compile(gl, false);

            attr._bind(gl, gl.getAttribLocation(program, attrName), false);
          }
        }
      });

      var _Object$assign = Object.assign({
        vert: vertDefault,
        frag: fragDefault,
        vertexShader: null,
        fragmentShader: null,
        uniforms: {}
      }, options),
          vert = _Object$assign.vert,
          frag = _Object$assign.frag,
          draw = _Object$assign.draw,
          count = _Object$assign.count,
          vertexShader = _Object$assign.vertexShader,
          fragmentShader = _Object$assign.fragmentShader,
          uniforms = _Object$assign.uniforms;

      var _geometry = geometry || new Geometry();

      _geometryRefs.set(this, _geometry);

      this.vertexShader = vertexShader;
      this.fragmentShader = fragmentShader;
      this.vert = vertexShader ? 'linked shader is used' : vert;
      this.frag = fragmentShader ? 'linked shader is used' : frag;
      this.draw = draw || 'triangles';
      this.uniforms = uniforms instanceof UniformStack ? uniforms : new UniformStack(uniforms);
      this.count = count || _geometry.getCount() || 3;
      this.needsUpdate = true;
      this.enabled = true;
      this.mesh = null;
      this.state = {};
      Object.defineProperties(this, {
        attributes: {
          get: function get() {
            return _geometry.attributes;
          },
          set: function set(attribs) {
            _geometry.attributes = attribs;
          }
        },
        index: {
          get: function get() {
            return _geometry.index;
          },
          set: function set(index) {
            _geometry.index = index;
          }
        }
      });
    }

    _createClass(Program, [{
      key: "getGeometryRef",
      value: function getGeometryRef() {
        return _geometryRefs.get(this);
      }
    }, {
      key: "setAttribute",
      value: function setAttribute(name, attribute) {
        this.attributes[name] = attribute;
      }
    }, {
      key: "setIndex",
      value: function setIndex(attribute) {
        this.index = attribute;
      }
    }]);

    return Program;
  }();

  _defineProperty(Program, "createShader", function (gl, type, source) {
    type = type === 'vertex' ? gl.VERTEX_SHADER : gl.FRAGMENT_SHADER;
    var shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    return Program.debugShader(gl, shader);
  });

  _defineProperty(Program, "dynamicDefines", function (gl, shader, defines) {
    var source = gl.getShaderSource(shader);
    source = source.substr(source.indexOf('#version 300 es') + 15, source.length);

    for (var name in defines) {
      source = source.replace(new RegExp("\\#define\\s(".concat(name, ")\\s(.*)")), '#define $1 ' + defines[name]);
      if (source.indexOf("#define ".concat(name)) < 0) source = "#define ".concat(name, " ").concat(defines[name], " \n") + source;
    }

    gl.shaderSource(shader, '#version 300 es\n' + source); // gl.compileShader(shader);
  });

  _defineProperty(Program, "debugShader", function (gl, shader) {
    var success = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
    if (success) return shader; // TODO: Cleanup error logging + add troubleshooting

    console.warn(gl.getShaderInfoLog(shader));
    console.warn(gl.getShaderSource(shader).split('\n').map(function (line, i) {
      return "".concat(i < 9 ? '0' : '').concat(i + 1, ":  ").concat(line);
    }).join('\n'));
    gl.deleteShader(shader);
  });

  _defineProperty(Program, "debugProgram", function (gl, program, fragShader, vertShader) {
    var success = gl.getProgramParameter(program, gl.LINK_STATUS);
    if (success) return program; // TODO: Cleanup error logging + add troubleshooting

    console.error(gl.getProgramInfoLog(program));
    console.warn('Fragment shader: \n' + gl.getShaderSource(fragShader).split('\n').map(function (line, i) {
      return "".concat(i < 9 ? '0' : '').concat(i + 1, ":  ").concat(line);
    }).join('\n'));
    console.warn('Vertex shader: \n' + gl.getShaderSource(vertShader).split('\n').map(function (line, i) {
      return "".concat(i < 9 ? '0' : '').concat(i + 1, ":  ").concat(line);
    }).join('\n'));
    gl.deleteProgram(program);
  });

  var TYPED = _uid('typed_array');
  var VIEW = _uid('view');
  var ABV = !!(_global.ArrayBuffer && _global.DataView);
  var CONSTR = ABV;
  var i$2 = 0;
  var l = 9;
  var Typed;
  var TypedArrayConstructors = 'Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array'.split(',');

  while (i$2 < l) {
    if (Typed = _global[TypedArrayConstructors[i$2++]]) {
      _hide(Typed.prototype, TYPED, true);
      _hide(Typed.prototype, VIEW, true);
    } else CONSTR = false;
  }

  var _typed = {
    ABV: ABV,
    CONSTR: CONSTR,
    TYPED: TYPED,
    VIEW: VIEW
  };

  // https://tc39.github.io/ecma262/#sec-toindex




  var _toIndex = function (it) {
    if (it === undefined) return 0;
    var number = _toInteger(it);
    var length = _toLength(number);
    if (number !== length) throw RangeError('Wrong length!');
    return length;
  };

  var _arrayFill = function fill(value
  /* , start = 0, end = @length */
  ) {
    var O = _toObject(this);
    var length = _toLength(O.length);
    var aLen = arguments.length;
    var index = _toAbsoluteIndex(aLen > 1 ? arguments[1] : undefined, length);
    var end = aLen > 2 ? arguments[2] : undefined;
    var endPos = end === undefined ? length : _toAbsoluteIndex(end, length);

    while (endPos > index) O[index++] = value;

    return O;
  };

  var _typedBuffer = createCommonjsModule(function (module, exports) {























  var gOPN = _objectGopn.f;

  var dP = _objectDp.f;





  var ARRAY_BUFFER = 'ArrayBuffer';
  var DATA_VIEW = 'DataView';
  var PROTOTYPE = 'prototype';
  var WRONG_LENGTH = 'Wrong length!';
  var WRONG_INDEX = 'Wrong index!';
  var $ArrayBuffer = _global[ARRAY_BUFFER];
  var $DataView = _global[DATA_VIEW];
  var Math = _global.Math;
  var RangeError = _global.RangeError; // eslint-disable-next-line no-shadow-restricted-names

  var Infinity = _global.Infinity;
  var BaseBuffer = $ArrayBuffer;
  var abs = Math.abs;
  var pow = Math.pow;
  var floor = Math.floor;
  var log = Math.log;
  var LN2 = Math.LN2;
  var BUFFER = 'buffer';
  var BYTE_LENGTH = 'byteLength';
  var BYTE_OFFSET = 'byteOffset';
  var $BUFFER = _descriptors ? '_b' : BUFFER;
  var $LENGTH = _descriptors ? '_l' : BYTE_LENGTH;
  var $OFFSET = _descriptors ? '_o' : BYTE_OFFSET; // IEEE754 conversions based on https://github.com/feross/ieee754

  function packIEEE754(value, mLen, nBytes) {
    var buffer = new Array(nBytes);
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var rt = mLen === 23 ? pow(2, -24) - pow(2, -77) : 0;
    var i = 0;
    var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
    var e, m, c;
    value = abs(value); // eslint-disable-next-line no-self-compare

    if (value != value || value === Infinity) {
      // eslint-disable-next-line no-self-compare
      m = value != value ? 1 : 0;
      e = eMax;
    } else {
      e = floor(log(value) / LN2);

      if (value * (c = pow(2, -e)) < 1) {
        e--;
        c *= 2;
      }

      if (e + eBias >= 1) {
        value += rt / c;
      } else {
        value += rt * pow(2, 1 - eBias);
      }

      if (value * c >= 2) {
        e++;
        c /= 2;
      }

      if (e + eBias >= eMax) {
        m = 0;
        e = eMax;
      } else if (e + eBias >= 1) {
        m = (value * c - 1) * pow(2, mLen);
        e = e + eBias;
      } else {
        m = value * pow(2, eBias - 1) * pow(2, mLen);
        e = 0;
      }
    }

    for (; mLen >= 8; buffer[i++] = m & 255, m /= 256, mLen -= 8);

    e = e << mLen | m;
    eLen += mLen;

    for (; eLen > 0; buffer[i++] = e & 255, e /= 256, eLen -= 8);

    buffer[--i] |= s * 128;
    return buffer;
  }

  function unpackIEEE754(buffer, mLen, nBytes) {
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var nBits = eLen - 7;
    var i = nBytes - 1;
    var s = buffer[i--];
    var e = s & 127;
    var m;
    s >>= 7;

    for (; nBits > 0; e = e * 256 + buffer[i], i--, nBits -= 8);

    m = e & (1 << -nBits) - 1;
    e >>= -nBits;
    nBits += mLen;

    for (; nBits > 0; m = m * 256 + buffer[i], i--, nBits -= 8);

    if (e === 0) {
      e = 1 - eBias;
    } else if (e === eMax) {
      return m ? NaN : s ? -Infinity : Infinity;
    } else {
      m = m + pow(2, mLen);
      e = e - eBias;
    }

    return (s ? -1 : 1) * m * pow(2, e - mLen);
  }

  function unpackI32(bytes) {
    return bytes[3] << 24 | bytes[2] << 16 | bytes[1] << 8 | bytes[0];
  }

  function packI8(it) {
    return [it & 0xff];
  }

  function packI16(it) {
    return [it & 0xff, it >> 8 & 0xff];
  }

  function packI32(it) {
    return [it & 0xff, it >> 8 & 0xff, it >> 16 & 0xff, it >> 24 & 0xff];
  }

  function packF64(it) {
    return packIEEE754(it, 52, 8);
  }

  function packF32(it) {
    return packIEEE754(it, 23, 4);
  }

  function addGetter(C, key, internal) {
    dP(C[PROTOTYPE], key, {
      get: function () {
        return this[internal];
      }
    });
  }

  function get(view, bytes, index, isLittleEndian) {
    var numIndex = +index;
    var intIndex = _toIndex(numIndex);
    if (intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);
    var store = view[$BUFFER]._b;
    var start = intIndex + view[$OFFSET];
    var pack = store.slice(start, start + bytes);
    return isLittleEndian ? pack : pack.reverse();
  }

  function set(view, bytes, index, conversion, value, isLittleEndian) {
    var numIndex = +index;
    var intIndex = _toIndex(numIndex);
    if (intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);
    var store = view[$BUFFER]._b;
    var start = intIndex + view[$OFFSET];
    var pack = conversion(+value);

    for (var i = 0; i < bytes; i++) store[start + i] = pack[isLittleEndian ? i : bytes - i - 1];
  }

  if (!_typed.ABV) {
    $ArrayBuffer = function ArrayBuffer(length) {
      _anInstance(this, $ArrayBuffer, ARRAY_BUFFER);
      var byteLength = _toIndex(length);
      this._b = _arrayFill.call(new Array(byteLength), 0);
      this[$LENGTH] = byteLength;
    };

    $DataView = function DataView(buffer, byteOffset, byteLength) {
      _anInstance(this, $DataView, DATA_VIEW);
      _anInstance(buffer, $ArrayBuffer, DATA_VIEW);
      var bufferLength = buffer[$LENGTH];
      var offset = _toInteger(byteOffset);
      if (offset < 0 || offset > bufferLength) throw RangeError('Wrong offset!');
      byteLength = byteLength === undefined ? bufferLength - offset : _toLength(byteLength);
      if (offset + byteLength > bufferLength) throw RangeError(WRONG_LENGTH);
      this[$BUFFER] = buffer;
      this[$OFFSET] = offset;
      this[$LENGTH] = byteLength;
    };

    if (_descriptors) {
      addGetter($ArrayBuffer, BYTE_LENGTH, '_l');
      addGetter($DataView, BUFFER, '_b');
      addGetter($DataView, BYTE_LENGTH, '_l');
      addGetter($DataView, BYTE_OFFSET, '_o');
    }

    _redefineAll($DataView[PROTOTYPE], {
      getInt8: function getInt8(byteOffset) {
        return get(this, 1, byteOffset)[0] << 24 >> 24;
      },
      getUint8: function getUint8(byteOffset) {
        return get(this, 1, byteOffset)[0];
      },
      getInt16: function getInt16(byteOffset
      /* , littleEndian */
      ) {
        var bytes = get(this, 2, byteOffset, arguments[1]);
        return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
      },
      getUint16: function getUint16(byteOffset
      /* , littleEndian */
      ) {
        var bytes = get(this, 2, byteOffset, arguments[1]);
        return bytes[1] << 8 | bytes[0];
      },
      getInt32: function getInt32(byteOffset
      /* , littleEndian */
      ) {
        return unpackI32(get(this, 4, byteOffset, arguments[1]));
      },
      getUint32: function getUint32(byteOffset
      /* , littleEndian */
      ) {
        return unpackI32(get(this, 4, byteOffset, arguments[1])) >>> 0;
      },
      getFloat32: function getFloat32(byteOffset
      /* , littleEndian */
      ) {
        return unpackIEEE754(get(this, 4, byteOffset, arguments[1]), 23, 4);
      },
      getFloat64: function getFloat64(byteOffset
      /* , littleEndian */
      ) {
        return unpackIEEE754(get(this, 8, byteOffset, arguments[1]), 52, 8);
      },
      setInt8: function setInt8(byteOffset, value) {
        set(this, 1, byteOffset, packI8, value);
      },
      setUint8: function setUint8(byteOffset, value) {
        set(this, 1, byteOffset, packI8, value);
      },
      setInt16: function setInt16(byteOffset, value
      /* , littleEndian */
      ) {
        set(this, 2, byteOffset, packI16, value, arguments[2]);
      },
      setUint16: function setUint16(byteOffset, value
      /* , littleEndian */
      ) {
        set(this, 2, byteOffset, packI16, value, arguments[2]);
      },
      setInt32: function setInt32(byteOffset, value
      /* , littleEndian */
      ) {
        set(this, 4, byteOffset, packI32, value, arguments[2]);
      },
      setUint32: function setUint32(byteOffset, value
      /* , littleEndian */
      ) {
        set(this, 4, byteOffset, packI32, value, arguments[2]);
      },
      setFloat32: function setFloat32(byteOffset, value
      /* , littleEndian */
      ) {
        set(this, 4, byteOffset, packF32, value, arguments[2]);
      },
      setFloat64: function setFloat64(byteOffset, value
      /* , littleEndian */
      ) {
        set(this, 8, byteOffset, packF64, value, arguments[2]);
      }
    });
  } else {
    if (!_fails(function () {
      $ArrayBuffer(1);
    }) || !_fails(function () {
      new $ArrayBuffer(-1); // eslint-disable-line no-new
    }) || _fails(function () {
      new $ArrayBuffer(); // eslint-disable-line no-new

      new $ArrayBuffer(1.5); // eslint-disable-line no-new

      new $ArrayBuffer(NaN); // eslint-disable-line no-new

      return $ArrayBuffer.name != ARRAY_BUFFER;
    })) {
      $ArrayBuffer = function ArrayBuffer(length) {
        _anInstance(this, $ArrayBuffer);
        return new BaseBuffer(_toIndex(length));
      };

      var ArrayBufferProto = $ArrayBuffer[PROTOTYPE] = BaseBuffer[PROTOTYPE];

      for (var keys = gOPN(BaseBuffer), j = 0, key; keys.length > j;) {
        if (!((key = keys[j++]) in $ArrayBuffer)) _hide($ArrayBuffer, key, BaseBuffer[key]);
      }

      ArrayBufferProto.constructor = $ArrayBuffer;
    } // iOS Safari 7.x bug


    var view = new $DataView(new $ArrayBuffer(2));
    var $setInt8 = $DataView[PROTOTYPE].setInt8;
    view.setInt8(0, 2147483648);
    view.setInt8(1, 2147483649);
    if (view.getInt8(0) || !view.getInt8(1)) _redefineAll($DataView[PROTOTYPE], {
      setInt8: function setInt8(byteOffset, value) {
        $setInt8.call(this, byteOffset, value << 24 >> 24);
      },
      setUint8: function setUint8(byteOffset, value) {
        $setInt8.call(this, byteOffset, value << 24 >> 24);
      }
    }, true);
  }

  _setToStringTag($ArrayBuffer, ARRAY_BUFFER);
  _setToStringTag($DataView, DATA_VIEW);
  _hide($DataView[PROTOTYPE], _typed.VIEW, true);
  exports[ARRAY_BUFFER] = $ArrayBuffer;
  exports[DATA_VIEW] = $DataView;
  });

  var _arrayCopyWithin = [].copyWithin || function copyWithin(target
  /* = 0 */
  , start
  /* = 0, end = @length */
  ) {
    var O = _toObject(this);
    var len = _toLength(O.length);
    var to = _toAbsoluteIndex(target, len);
    var from = _toAbsoluteIndex(start, len);
    var end = arguments.length > 2 ? arguments[2] : undefined;
    var count = Math.min((end === undefined ? len : _toAbsoluteIndex(end, len)) - from, len - to);
    var inc = 1;

    if (from < to && to < from + count) {
      inc = -1;
      from += count - 1;
      to += count - 1;
    }

    while (count-- > 0) {
      if (from in O) O[to] = O[from];else delete O[to];
      to += inc;
      from += inc;
    }

    return O;
  };

  var _typedArray = createCommonjsModule(function (module) {

  if (_descriptors) {
    var LIBRARY = _library;

    var global = _global;

    var fails = _fails;

    var $export = _export;

    var $typed = _typed;

    var $buffer = _typedBuffer;

    var ctx = _ctx;

    var anInstance = _anInstance;

    var propertyDesc = _propertyDesc;

    var hide = _hide;

    var redefineAll = _redefineAll;

    var toInteger = _toInteger;

    var toLength = _toLength;

    var toIndex = _toIndex;

    var toAbsoluteIndex = _toAbsoluteIndex;

    var toPrimitive = _toPrimitive;

    var has = _has;

    var classof = _classof;

    var isObject = _isObject;

    var toObject = _toObject;

    var isArrayIter = _isArrayIter;

    var create = _objectCreate;

    var getPrototypeOf = _objectGpo;

    var gOPN = _objectGopn.f;

    var getIterFn = core_getIteratorMethod;

    var uid = _uid;

    var wks = _wks;

    var createArrayMethod = _arrayMethods;

    var createArrayIncludes = _arrayIncludes;

    var speciesConstructor = _speciesConstructor;

    var ArrayIterators = es6_array_iterator;

    var Iterators = _iterators;

    var $iterDetect = _iterDetect;

    var setSpecies = _setSpecies;

    var arrayFill = _arrayFill;

    var arrayCopyWithin = _arrayCopyWithin;

    var $DP = _objectDp;

    var $GOPD = _objectGopd;

    var dP = $DP.f;
    var gOPD = $GOPD.f;
    var RangeError = global.RangeError;
    var TypeError = global.TypeError;
    var Uint8Array = global.Uint8Array;
    var ARRAY_BUFFER = 'ArrayBuffer';
    var SHARED_BUFFER = 'Shared' + ARRAY_BUFFER;
    var BYTES_PER_ELEMENT = 'BYTES_PER_ELEMENT';
    var PROTOTYPE = 'prototype';
    var ArrayProto = Array[PROTOTYPE];
    var $ArrayBuffer = $buffer.ArrayBuffer;
    var $DataView = $buffer.DataView;
    var arrayForEach = createArrayMethod(0);
    var arrayFilter = createArrayMethod(2);
    var arraySome = createArrayMethod(3);
    var arrayEvery = createArrayMethod(4);
    var arrayFind = createArrayMethod(5);
    var arrayFindIndex = createArrayMethod(6);
    var arrayIncludes = createArrayIncludes(true);
    var arrayIndexOf = createArrayIncludes(false);
    var arrayValues = ArrayIterators.values;
    var arrayKeys = ArrayIterators.keys;
    var arrayEntries = ArrayIterators.entries;
    var arrayLastIndexOf = ArrayProto.lastIndexOf;
    var arrayReduce = ArrayProto.reduce;
    var arrayReduceRight = ArrayProto.reduceRight;
    var arrayJoin = ArrayProto.join;
    var arraySort = ArrayProto.sort;
    var arraySlice = ArrayProto.slice;
    var arrayToString = ArrayProto.toString;
    var arrayToLocaleString = ArrayProto.toLocaleString;
    var ITERATOR = wks('iterator');
    var TAG = wks('toStringTag');
    var TYPED_CONSTRUCTOR = uid('typed_constructor');
    var DEF_CONSTRUCTOR = uid('def_constructor');
    var ALL_CONSTRUCTORS = $typed.CONSTR;
    var TYPED_ARRAY = $typed.TYPED;
    var VIEW = $typed.VIEW;
    var WRONG_LENGTH = 'Wrong length!';
    var $map = createArrayMethod(1, function (O, length) {
      return allocate(speciesConstructor(O, O[DEF_CONSTRUCTOR]), length);
    });
    var LITTLE_ENDIAN = fails(function () {
      // eslint-disable-next-line no-undef
      return new Uint8Array(new Uint16Array([1]).buffer)[0] === 1;
    });
    var FORCED_SET = !!Uint8Array && !!Uint8Array[PROTOTYPE].set && fails(function () {
      new Uint8Array(1).set({});
    });

    var toOffset = function (it, BYTES) {
      var offset = toInteger(it);
      if (offset < 0 || offset % BYTES) throw RangeError('Wrong offset!');
      return offset;
    };

    var validate = function (it) {
      if (isObject(it) && TYPED_ARRAY in it) return it;
      throw TypeError(it + ' is not a typed array!');
    };

    var allocate = function (C, length) {
      if (!(isObject(C) && TYPED_CONSTRUCTOR in C)) {
        throw TypeError('It is not a typed array constructor!');
      }

      return new C(length);
    };

    var speciesFromList = function (O, list) {
      return fromList(speciesConstructor(O, O[DEF_CONSTRUCTOR]), list);
    };

    var fromList = function (C, list) {
      var index = 0;
      var length = list.length;
      var result = allocate(C, length);

      while (length > index) result[index] = list[index++];

      return result;
    };

    var addGetter = function (it, key, internal) {
      dP(it, key, {
        get: function () {
          return this._d[internal];
        }
      });
    };

    var $from = function from(source
    /* , mapfn, thisArg */
    ) {
      var O = toObject(source);
      var aLen = arguments.length;
      var mapfn = aLen > 1 ? arguments[1] : undefined;
      var mapping = mapfn !== undefined;
      var iterFn = getIterFn(O);
      var i, length, values, result, step, iterator;

      if (iterFn != undefined && !isArrayIter(iterFn)) {
        for (iterator = iterFn.call(O), values = [], i = 0; !(step = iterator.next()).done; i++) {
          values.push(step.value);
        }

        O = values;
      }

      if (mapping && aLen > 2) mapfn = ctx(mapfn, arguments[2], 2);

      for (i = 0, length = toLength(O.length), result = allocate(this, length); length > i; i++) {
        result[i] = mapping ? mapfn(O[i], i) : O[i];
      }

      return result;
    };

    var $of = function of()
    /* ...items */
    {
      var index = 0;
      var length = arguments.length;
      var result = allocate(this, length);

      while (length > index) result[index] = arguments[index++];

      return result;
    }; // iOS Safari 6.x fails here


    var TO_LOCALE_BUG = !!Uint8Array && fails(function () {
      arrayToLocaleString.call(new Uint8Array(1));
    });

    var $toLocaleString = function toLocaleString() {
      return arrayToLocaleString.apply(TO_LOCALE_BUG ? arraySlice.call(validate(this)) : validate(this), arguments);
    };

    var proto = {
      copyWithin: function copyWithin(target, start
      /* , end */
      ) {
        return arrayCopyWithin.call(validate(this), target, start, arguments.length > 2 ? arguments[2] : undefined);
      },
      every: function every(callbackfn
      /* , thisArg */
      ) {
        return arrayEvery(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
      },
      fill: function fill(value
      /* , start, end */
      ) {
        // eslint-disable-line no-unused-vars
        return arrayFill.apply(validate(this), arguments);
      },
      filter: function filter(callbackfn
      /* , thisArg */
      ) {
        return speciesFromList(this, arrayFilter(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined));
      },
      find: function find(predicate
      /* , thisArg */
      ) {
        return arrayFind(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
      },
      findIndex: function findIndex(predicate
      /* , thisArg */
      ) {
        return arrayFindIndex(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
      },
      forEach: function forEach(callbackfn
      /* , thisArg */
      ) {
        arrayForEach(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
      },
      indexOf: function indexOf(searchElement
      /* , fromIndex */
      ) {
        return arrayIndexOf(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
      },
      includes: function includes(searchElement
      /* , fromIndex */
      ) {
        return arrayIncludes(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
      },
      join: function join(separator) {
        // eslint-disable-line no-unused-vars
        return arrayJoin.apply(validate(this), arguments);
      },
      lastIndexOf: function lastIndexOf(searchElement
      /* , fromIndex */
      ) {
        // eslint-disable-line no-unused-vars
        return arrayLastIndexOf.apply(validate(this), arguments);
      },
      map: function map(mapfn
      /* , thisArg */
      ) {
        return $map(validate(this), mapfn, arguments.length > 1 ? arguments[1] : undefined);
      },
      reduce: function reduce(callbackfn
      /* , initialValue */
      ) {
        // eslint-disable-line no-unused-vars
        return arrayReduce.apply(validate(this), arguments);
      },
      reduceRight: function reduceRight(callbackfn
      /* , initialValue */
      ) {
        // eslint-disable-line no-unused-vars
        return arrayReduceRight.apply(validate(this), arguments);
      },
      reverse: function reverse() {
        var that = this;
        var length = validate(that).length;
        var middle = Math.floor(length / 2);
        var index = 0;
        var value;

        while (index < middle) {
          value = that[index];
          that[index++] = that[--length];
          that[length] = value;
        }

        return that;
      },
      some: function some(callbackfn
      /* , thisArg */
      ) {
        return arraySome(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
      },
      sort: function sort(comparefn) {
        return arraySort.call(validate(this), comparefn);
      },
      subarray: function subarray(begin, end) {
        var O = validate(this);
        var length = O.length;
        var $begin = toAbsoluteIndex(begin, length);
        return new (speciesConstructor(O, O[DEF_CONSTRUCTOR]))(O.buffer, O.byteOffset + $begin * O.BYTES_PER_ELEMENT, toLength((end === undefined ? length : toAbsoluteIndex(end, length)) - $begin));
      }
    };

    var $slice = function slice(start, end) {
      return speciesFromList(this, arraySlice.call(validate(this), start, end));
    };

    var $set = function set(arrayLike
    /* , offset */
    ) {
      validate(this);
      var offset = toOffset(arguments[1], 1);
      var length = this.length;
      var src = toObject(arrayLike);
      var len = toLength(src.length);
      var index = 0;
      if (len + offset > length) throw RangeError(WRONG_LENGTH);

      while (index < len) this[offset + index] = src[index++];
    };

    var $iterators = {
      entries: function entries() {
        return arrayEntries.call(validate(this));
      },
      keys: function keys() {
        return arrayKeys.call(validate(this));
      },
      values: function values() {
        return arrayValues.call(validate(this));
      }
    };

    var isTAIndex = function (target, key) {
      return isObject(target) && target[TYPED_ARRAY] && typeof key != 'symbol' && key in target && String(+key) == String(key);
    };

    var $getDesc = function getOwnPropertyDescriptor(target, key) {
      return isTAIndex(target, key = toPrimitive(key, true)) ? propertyDesc(2, target[key]) : gOPD(target, key);
    };

    var $setDesc = function defineProperty(target, key, desc) {
      if (isTAIndex(target, key = toPrimitive(key, true)) && isObject(desc) && has(desc, 'value') && !has(desc, 'get') && !has(desc, 'set') // TODO: add validation descriptor w/o calling accessors
      && !desc.configurable && (!has(desc, 'writable') || desc.writable) && (!has(desc, 'enumerable') || desc.enumerable)) {
        target[key] = desc.value;
        return target;
      }

      return dP(target, key, desc);
    };

    if (!ALL_CONSTRUCTORS) {
      $GOPD.f = $getDesc;
      $DP.f = $setDesc;
    }

    $export($export.S + $export.F * !ALL_CONSTRUCTORS, 'Object', {
      getOwnPropertyDescriptor: $getDesc,
      defineProperty: $setDesc
    });

    if (fails(function () {
      arrayToString.call({});
    })) {
      arrayToString = arrayToLocaleString = function toString() {
        return arrayJoin.call(this);
      };
    }

    var $TypedArrayPrototype$ = redefineAll({}, proto);
    redefineAll($TypedArrayPrototype$, $iterators);
    hide($TypedArrayPrototype$, ITERATOR, $iterators.values);
    redefineAll($TypedArrayPrototype$, {
      slice: $slice,
      set: $set,
      constructor: function () {
        /* noop */
      },
      toString: arrayToString,
      toLocaleString: $toLocaleString
    });
    addGetter($TypedArrayPrototype$, 'buffer', 'b');
    addGetter($TypedArrayPrototype$, 'byteOffset', 'o');
    addGetter($TypedArrayPrototype$, 'byteLength', 'l');
    addGetter($TypedArrayPrototype$, 'length', 'e');
    dP($TypedArrayPrototype$, TAG, {
      get: function () {
        return this[TYPED_ARRAY];
      }
    }); // eslint-disable-next-line max-statements

    module.exports = function (KEY, BYTES, wrapper, CLAMPED) {
      CLAMPED = !!CLAMPED;
      var NAME = KEY + (CLAMPED ? 'Clamped' : '') + 'Array';
      var GETTER = 'get' + KEY;
      var SETTER = 'set' + KEY;
      var TypedArray = global[NAME];
      var Base = TypedArray || {};
      var TAC = TypedArray && getPrototypeOf(TypedArray);
      var FORCED = !TypedArray || !$typed.ABV;
      var O = {};
      var TypedArrayPrototype = TypedArray && TypedArray[PROTOTYPE];

      var getter = function (that, index) {
        var data = that._d;
        return data.v[GETTER](index * BYTES + data.o, LITTLE_ENDIAN);
      };

      var setter = function (that, index, value) {
        var data = that._d;
        if (CLAMPED) value = (value = Math.round(value)) < 0 ? 0 : value > 0xff ? 0xff : value & 0xff;
        data.v[SETTER](index * BYTES + data.o, value, LITTLE_ENDIAN);
      };

      var addElement = function (that, index) {
        dP(that, index, {
          get: function () {
            return getter(this, index);
          },
          set: function (value) {
            return setter(this, index, value);
          },
          enumerable: true
        });
      };

      if (FORCED) {
        TypedArray = wrapper(function (that, data, $offset, $length) {
          anInstance(that, TypedArray, NAME, '_d');
          var index = 0;
          var offset = 0;
          var buffer, byteLength, length, klass;

          if (!isObject(data)) {
            length = toIndex(data);
            byteLength = length * BYTES;
            buffer = new $ArrayBuffer(byteLength);
          } else if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {
            buffer = data;
            offset = toOffset($offset, BYTES);
            var $len = data.byteLength;

            if ($length === undefined) {
              if ($len % BYTES) throw RangeError(WRONG_LENGTH);
              byteLength = $len - offset;
              if (byteLength < 0) throw RangeError(WRONG_LENGTH);
            } else {
              byteLength = toLength($length) * BYTES;
              if (byteLength + offset > $len) throw RangeError(WRONG_LENGTH);
            }

            length = byteLength / BYTES;
          } else if (TYPED_ARRAY in data) {
            return fromList(TypedArray, data);
          } else {
            return $from.call(TypedArray, data);
          }

          hide(that, '_d', {
            b: buffer,
            o: offset,
            l: byteLength,
            e: length,
            v: new $DataView(buffer)
          });

          while (index < length) addElement(that, index++);
        });
        TypedArrayPrototype = TypedArray[PROTOTYPE] = create($TypedArrayPrototype$);
        hide(TypedArrayPrototype, 'constructor', TypedArray);
      } else if (!fails(function () {
        TypedArray(1);
      }) || !fails(function () {
        new TypedArray(-1); // eslint-disable-line no-new
      }) || !$iterDetect(function (iter) {
        new TypedArray(); // eslint-disable-line no-new

        new TypedArray(null); // eslint-disable-line no-new

        new TypedArray(1.5); // eslint-disable-line no-new

        new TypedArray(iter); // eslint-disable-line no-new
      }, true)) {
        TypedArray = wrapper(function (that, data, $offset, $length) {
          anInstance(that, TypedArray, NAME);
          var klass; // `ws` module bug, temporarily remove validation length for Uint8Array
          // https://github.com/websockets/ws/pull/645

          if (!isObject(data)) return new Base(toIndex(data));

          if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {
            return $length !== undefined ? new Base(data, toOffset($offset, BYTES), $length) : $offset !== undefined ? new Base(data, toOffset($offset, BYTES)) : new Base(data);
          }

          if (TYPED_ARRAY in data) return fromList(TypedArray, data);
          return $from.call(TypedArray, data);
        });
        arrayForEach(TAC !== Function.prototype ? gOPN(Base).concat(gOPN(TAC)) : gOPN(Base), function (key) {
          if (!(key in TypedArray)) hide(TypedArray, key, Base[key]);
        });
        TypedArray[PROTOTYPE] = TypedArrayPrototype;
        if (!LIBRARY) TypedArrayPrototype.constructor = TypedArray;
      }

      var $nativeIterator = TypedArrayPrototype[ITERATOR];
      var CORRECT_ITER_NAME = !!$nativeIterator && ($nativeIterator.name == 'values' || $nativeIterator.name == undefined);
      var $iterator = $iterators.values;
      hide(TypedArray, TYPED_CONSTRUCTOR, true);
      hide(TypedArrayPrototype, TYPED_ARRAY, NAME);
      hide(TypedArrayPrototype, VIEW, true);
      hide(TypedArrayPrototype, DEF_CONSTRUCTOR, TypedArray);

      if (CLAMPED ? new TypedArray(1)[TAG] != NAME : !(TAG in TypedArrayPrototype)) {
        dP(TypedArrayPrototype, TAG, {
          get: function () {
            return NAME;
          }
        });
      }

      O[NAME] = TypedArray;
      $export($export.G + $export.W + $export.F * (TypedArray != Base), O);
      $export($export.S, NAME, {
        BYTES_PER_ELEMENT: BYTES
      });
      $export($export.S + $export.F * fails(function () {
        Base.of.call(TypedArray, 1);
      }), NAME, {
        from: $from,
        of: $of
      });
      if (!(BYTES_PER_ELEMENT in TypedArrayPrototype)) hide(TypedArrayPrototype, BYTES_PER_ELEMENT, BYTES);
      $export($export.P, NAME, proto);
      setSpecies(NAME);
      $export($export.P + $export.F * FORCED_SET, NAME, {
        set: $set
      });
      $export($export.P + $export.F * !CORRECT_ITER_NAME, NAME, $iterators);
      if (!LIBRARY && TypedArrayPrototype.toString != arrayToString) TypedArrayPrototype.toString = arrayToString;
      $export($export.P + $export.F * fails(function () {
        new TypedArray(1).slice();
      }), NAME, {
        slice: $slice
      });
      $export($export.P + $export.F * (fails(function () {
        return [1, 2].toLocaleString() != new TypedArray([1, 2]).toLocaleString();
      }) || !fails(function () {
        TypedArrayPrototype.toLocaleString.call([1, 2]);
      })), NAME, {
        toLocaleString: $toLocaleString
      });
      Iterators[NAME] = CORRECT_ITER_NAME ? $nativeIterator : $iterator;
      if (!LIBRARY && !CORRECT_ITER_NAME) hide(TypedArrayPrototype, ITERATOR, $iterator);
    };
  } else module.exports = function () {
    /* empty */
  };
  });

  _typedArray('Float32', 4, function (init) {
    return function Float32Array(data, byteOffset, length) {
      return init(this, data, byteOffset, length);
    };
  });

  var LightsExtension = {
    init: function init(self) {
      if (self.STATE_SHADOWMAP) return;
      self.LIGHTS = [];
    },
    object: function object(_object, self) {
      if (!_object.isLight || self.STATE_SHADOWMAP) return;
      self.NUM_LIGHTS_CHANGED = true;
      self.LIGHTS.push(_object);
    },
    program: function program(gl, _program, self) {
      if (!self.NUM_LIGHTS_CHANGED || self.STATE_SHADOWMAP) return;
      console.log(_program.mesh, _program.mesh.receiveShadow);
      var defines = {
        NUM_DIRECTIONAL_LIGHTS: self.LIGHTS.length,
        MESH_RECEIVE_SHADOW: _program.mesh.receiveShadow
      };
      if (_program.mesh.receiveShadow) defines.USE_UV = true;
      Program.dynamicDefines(gl, _program.fragmentShader, defines);
      Program.dynamicDefines(gl, _program.vertexShader, defines);
      _program.needsUpdate = true;
    },
    before: function before(gl, self) {
      var _this = this;

      if (self.STATE_SHADOWMAP) return;
      var lights = self.LIGHTS_BUFFER = new Float32Array(self.LIGHTS.length * 12);
      var offs = 0;
      self.LIGHTS.forEach(function (light) {
        if (light.shadowMap) light.shadowMap.setSize(_this.canvas.width, _this.canvas.height);
        self.STATE_SHADOWMAP = true;

        _this.render(light.shadowCamera, light.shadowMap);

        self.STATE_SHADOWMAP = false; // const fb = new NEXT.FrameBuffer(window.innerWidth, window.innerHeight, {depth: true});

        var dir = light.quaternion.getDirection().value; // float intensity

        lights[offs++] = light.intensity; // x
        // lights[offs++] = light.intensity; // x
        // lights[offs++] = light.intensity; // x

        lights[offs++] = 0.0; // y

        lights[offs++] = 0.0; // z

        lights[offs++] = 0.0; // w
        // vec3 color

        lights[offs++] = light.color[0]; // r

        lights[offs++] = light.color[1]; // g

        lights[offs++] = light.color[2]; // b

        lights[offs++] = 0.0; // b
        // vec3 direction

        lights[offs++] = dir[0]; // x

        lights[offs++] = dir[1]; // y

        lights[offs++] = dir[2]; // z

        lights[offs++] = 0.0; // w
      });
    },
    render: function render(gl, program, self) {
      // TODO: Move lights part to "before"
      if (self.STATE_SHADOWMAP) return;
      self.LIGHTS.forEach(function (light, i) {
        var texture = light.shadowMap.texture;
        if (!texture._compiledTexture) texture._compile(gl); // gl.uniform1i(gl.getUniformLocation(program._compiledProgram, `directionalLightShadowMaps[${i}]`), texture._bind(gl));
        // if (!texture._compiledTexture) texture._compile(gl);
        // texture._bind(gl);
        // console.log(texUnit);
        // gl.activeTexture(gl['TEXTURE' + ++self.TEXTURE_UNIT]);
        // gl.uniform1i(gl.getUniformLocation(program._compiledProgram, `directionalShadowMaps[${i}]`), self.TEXTURE_UNIT);
      });

      if (self.LIGHTS.length > 0 && program.state.lights) {
        var location = gl.getUniformBlockIndex(program._compiledProgram, 'Lights');
        gl.uniformBlockBinding(program._compiledProgram, location, 0);
        var lightsBuffer = gl.createBuffer();
        gl.bindBuffer(gl.UNIFORM_BUFFER, lightsBuffer);
        gl.bufferData(gl.UNIFORM_BUFFER, self.LIGHTS_BUFFER, gl.DYNAMIC_DRAW);
        gl.bindBuffer(gl.UNIFORM_BUFFER, null); // //...
        // // Render

        gl.bindBufferBase(gl.UNIFORM_BUFFER, 0, lightsBuffer);
      }
    },
    after: function after(gl, self) {
      if (self.STATE_SHADOWMAP) return;
      self.NUM_LIGHTS_CHANGED = false;
    }
  };

  var _locals = new WeakMap();

  var typeIsArray = {
    vec2: true,
    vec3: true,
    vec4: true,
    mat2: true,
    mat3: true,
    mat4: true
  };
  var Renderer =
  /*#__PURE__*/
  function () {
    function Renderer() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, Renderer);

      options = Object.assign({
        extensions: Renderer.defaultExtensions
      }, options);
      this.canvas = options instanceof HTMLCanvasElement ? options : options.canvas || document.createElement('canvas');
      var gl = this.context = this.canvas.getContext('webgl2'); // eslint-disable-line
      // TODO: Add webgl2 support check

      this.clearColor = options.clearColor || [0, 0, 0, 0];
      this.extensions = options.extensions;
      this._programs = [];
      this._root_objects = new Set();
      gl.clearColor.apply(gl, this.clearColor); // eslint-disable-line

      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.enable(gl.DEPTH_TEST);
      gl.enable(gl.CULL_FACE);

      _locals.set(this, {
        STATE_ASYNC: false,
        RENDER_REQUESTED_CAMERA: null,
        PROMISES: [],
        DRAW_CONSTANTS: {
          lines: gl.LINES,
          points: gl.POINTS,
          triangles: gl.TRIANGLES
        },
        UNIFORM_FUNCS: {
          float: function float(loc, v, u) {
            return gl.uniform1f(loc, v);
          },
          vec2: function vec2(loc, v, u) {
            return gl.uniform2fv(loc, v);
          },
          vec3: function vec3(loc, v, u) {
            return gl.uniform3fv(loc, u.isValueUniform ? v.value : v);
          },
          vec4: function vec4(loc, v, u) {
            return gl.uniform4fv(loc, v);
          },
          mat2: function mat2(loc, v, u) {
            return gl.uniformMatrix2fv(loc, false, v);
          },
          mat3: function mat3(loc, v, u) {
            return gl.uniformMatrix3fv(loc, false, v);
          },
          mat4: function mat4(loc, v, u) {
            return gl.uniformMatrix4fv(loc, false, u.isValueUniform ? v.value : v);
          }
        }
      });

      var self = _locals.get(this);

      for (var i = 0, l = this.extensions.length; i < l; i++) {
        this.extensions[i].init.call(this, self);
      }
    }

    _createClass(Renderer, [{
      key: "attach",
      value: function attach(program) {
        if (!program._compiledProgram) program._compiledProgram = program._compile(this.context, this);
        var uniforms = Object.entries(Object.getOwnPropertyDescriptors(program.uniforms));

        var self = _locals.get(this);

        var hasPromises = false;

        var _loop = function _loop(k, kl) {
          var _uniforms$k = _slicedToArray(uniforms[k], 2),
              uniformName = _uniforms$k[0],
              descriptor = _uniforms$k[1];

          var value = descriptor.value || descriptor.get();

          if (value instanceof Promise) {
            hasPromises = true;
            self.STATE_ASYNC = true;
            self.PROMISES.push(value);
            value.then(function (data) {
              if (uniformName in program.uniforms) program.uniforms[uniformName] = data;else descriptor.set(data);
            });
          }
        };

        for (var k = 0, kl = uniforms.length; k < kl; k++) {
          _loop(k, kl);
        }

        if (hasPromises) this._renderWhenSync();

        this._programs.push(program);
      }
    }, {
      key: "_renderWhenSync",
      value: function _renderWhenSync() {
        var _this = this;

        var self = _locals.get(this);

        var oldPromises = [].concat(self.PROMISES);
        Promise.all(self.PROMISES).then(function () {
          if (self.PROMISES.length !== oldPromises.length || self.PROMISES.reduce(function (v, n, i) {
            return v || n !== oldPromises[i];
          }, false) // promises are not the same
          ) return;
          self.STATE_ASYNC = false;

          _this.render(self.RENDER_REQUESTED_CAMERA);
        });
      }
    }, {
      key: "setSize",
      value: function setSize(width, height) {
        this.canvas.width = width;
        this.canvas.height = height;
      }
    }, {
      key: "setScene",
      value: function setScene(scene) {
        var _this2 = this;

        var self = _locals.get(this);

        this._root_objects.add(scene);

        scene.traverse(function (child) {
          if (child.isMesh) {
            _this2.attach(child.program);

            child.program.__scene = scene;
          }

          for (var i = 0, l = _this2.extensions.length; i < l; i++) {
            _this2.extensions[i].object.call(_this2, child, self);
          }
        });
        scene.on('hierarchy-update', function (_ref) {
          var object = _ref.object;

          if (object.isMesh) {
            _this2.attach(object.program);

            object.program.__scene = scene;
          }

          for (var i = 0, l = _this2.extensions.length; i < l; i++) {
            _this2.extensions[i].object.call(_this2, object, self);
          }
        });
      }
    }, {
      key: "render",
      value: function render() {
        var camera = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        var frameBuffer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        // eslint-disable-line
        var gl = this.context;

        var self = _locals.get(this);

        var DRAW_CONSTANTS = self.DRAW_CONSTANTS,
            UNIFORM_FUNCS = self.UNIFORM_FUNCS,
            STATE_ASYNC = self.STATE_ASYNC;

        if (STATE_ASYNC) {
          self.RENDER_REQUESTED_CAMERA = camera;
          return;
        }

        for (var i = 0, l = this.extensions.length; i < l; i++) {
          if (this.extensions[i].before) this.extensions[i].before.call(this, gl, self);
        }

        if (frameBuffer) {
          if (!frameBuffer._compiledFrameBuffer) frameBuffer._compile(gl);

          frameBuffer._bindFramebuffer(gl);
        } else gl.bindFramebuffer(gl.FRAMEBUFFER, null);

        if (camera.matrixAutoUpdate) camera.updateMatrix();
        if (camera.matrixWorldAutoUpdate) camera.updateMatrixWorld(); // TODO: add optimization feature to avoid iterating

        this._root_objects.forEach(function (root) {
          root.traverse(function (object) {
            if (object.matrixAutoUpdate) object.updateMatrix();
            if (object.matrixWorldAutoUpdate) object.updateMatrixWorld();
          });
        }); // Clear the canvas


        gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
        self.TEXTURE_UNIT = 0;

        for (var _i = 0, _l = this._programs.length; _i < _l; _i++) {
          var program = this._programs[_i];
          if (!program.enabled) continue; // const uniforms = Object.entries(Object.getOwnPropertyDescriptors(program.uniforms));

          for (var _i2 = 0, _l2 = this.extensions.length; _i2 < _l2; _i2++) {
            if (this.extensions[_i2].program) this.extensions[_i2].program.call(this, gl, program, self);
          }

          if (program.needsUpdate) {
            gl.compileShader(program.fragmentShader);
            gl.compileShader(program.vertexShader);
            gl.linkProgram(program._compiledProgram);
            Program.debugProgram(gl, program._compiledProgram, program.fragmentShader, program.vertexShader);
            Program.debugShader(gl, program.fragmentShader);
            Program.debugShader(gl, program.vertexShader);
            program.needsUpdate = false;
            gl.useProgram(program._compiledProgram);

            program._bind(gl, true, program._compiledProgram);
          } else {
            gl.useProgram(program._compiledProgram);

            program._bind(gl);
          }

          var hasPromises = false;
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = program.uniforms[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var uniform = _step.value;
              var uniformName = uniform.name;
              var value = uniform.descriptor.value || uniform.descriptor.get();

              if (typeIsArray[uniform.type]) {
                // TODO: test in action.
                if (!uniform.cache || uniform.cache === value.toString()) {
                  uniform.cache = value.toString();
                  uniform.needsUpdate = true;
                }
              }

              if (!value || !uniform.needsUpdate) continue;

              if (uniform.type === 'promise') {
                hasPromises = true;
                self.STATE_ASYNC = true;
                self.PROMISES.push(value);
                continue;
              } // console.log(uniform);


              if (value.isTexture) {
                if (!value._compiledTexture) value._compile(gl);
                gl.uniform1i(gl.getUniformLocation(program._compiledProgram, uniformName), value._bind(gl));
                continue;
              }

              var location = gl.getUniformLocation(program._compiledProgram, uniformName);
              UNIFORM_FUNCS[uniform.type](location, value, uniform);
              uniform.needsUpdate = false;
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }

          if (hasPromises) this._renderWhenSync();

          if (camera) {
            gl.uniformMatrix4fv(gl.getUniformLocation(program._compiledProgram, 'viewMatrix'), false, glMat4_6([], camera.matrixWorld.value));
            gl.uniformMatrix4fv(gl.getUniformLocation(program._compiledProgram, 'projectionMatrix'), false, camera.projectionMatrix.value);
          }

          for (var _i3 = 0, _l3 = this.extensions.length; _i3 < _l3; _i3++) {
            if (this.extensions[_i3].render) this.extensions[_i3].render.call(this, gl, program, self);
          }

          if (program.index) gl.drawElements(DRAW_CONSTANTS[program.draw], program.count, gl.UNSIGNED_SHORT, 0);else gl.drawArrays(DRAW_CONSTANTS[program.draw], 0, program.count);
        }

        for (var _i4 = 0, _l4 = this.extensions.length; _i4 < _l4; _i4++) {
          if (this.extensions[_i4].after) this.extensions[_i4].after.call(this, gl, self);
        } // gl.bindTexture(gl.TEXTURE_2D, null);

      }
    }]);

    return Renderer;
  }();

  _defineProperty(Renderer, "Lights", LightsExtension);

  _defineProperty(Renderer, "defaultExtensions", [LightsExtension]);

  var Attribute =
  /*#__PURE__*/
  function () {
    _createClass(Attribute, null, [{
      key: "inlineArray",
      value: function inlineArray(inArray) {
        return inArray.reduce(function (o, a) {
          o.push.apply(o, _toConsumableArray(a));
          return o;
        }, []);
      }
    }]);

    function Attribute(array, size) {
      var _this = this;

      _classCallCheck(this, Attribute);

      _defineProperty(this, "_compile", function (gl) {
        var isIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var BUFFER_TYPE = isIndex ? gl.ELEMENT_ARRAY_BUFFER : gl.ARRAY_BUFFER;
        var buffer = gl.createBuffer();
        gl.bindBuffer(BUFFER_TYPE, buffer);
        gl.bufferData(BUFFER_TYPE, _this.array, gl.STATIC_DRAW);
        _this._compiledBuffer = buffer;
      });

      _defineProperty(this, "_bind", function (gl, location, isIndex) {
        var BUFFER_TYPE = isIndex ? gl.ELEMENT_ARRAY_BUFFER : gl.ARRAY_BUFFER;
        gl.bindBuffer(BUFFER_TYPE, _this._compiledBuffer);
        if (isIndex === 'index') return;
        gl.enableVertexAttribArray(location); // TODO: Check for additional capabilities of vertexAttribPointer

        gl.vertexAttribPointer(location, _this.size, // 2 components per iteration
        gl.FLOAT, // the data is 32bit floats
        false, // don't normalize the data
        0, // 0 = move forward size * sizeof(type) each iteration to get the next position
        0 // start at the beginning of the buffer
        );
      });

      this.array = array;
      this.size = size;
      this._compiledBuffer = null;
    }

    return Attribute;
  }();

  var Vec3 =
  /*#__PURE__*/
  function () {
    function Vec3(x, y, z) {
      _classCallCheck(this, Vec3);

      _defineProperty(this, "isValueUniform", true);

      _defineProperty(this, "isVec3", true);

      this.value = [x, y, z];
    }

    _createClass(Vec3, [{
      key: "set",
      value: function set(x, y, z) {
        this.value[0] = x;
        this.value[1] = y;
        this.value[2] = z;
      }
    }, {
      key: "fromArray",
      value: function fromArray(array) {
        this.value[0] = array[0];
        this.value[1] = array[1];
        this.value[2] = array[2];
      }
    }, {
      key: "copy",
      value: function copy(vector) {
        this.fromArray(vector.value);
      }
    }, {
      key: "clone",
      value: function clone() {
        return new Vec3().copy(this);
      }
    }, {
      key: "x",
      get: function get() {
        this.value[0];
      },
      set: function set(v) {
        this.value[0] = v;
      }
    }, {
      key: "y",
      get: function get() {
        this.value[1];
      },
      set: function set(v) {
        this.value[1] = v;
      }
    }, {
      key: "z",
      get: function get() {
        this.value[2];
      },
      set: function set(v) {
        this.value[2] = v;
      }
    }]);

    return Vec3;
  }();

  var Mat4 =
  /*#__PURE__*/
  function () {
    function Mat4(matArray) {
      _classCallCheck(this, Mat4);

      _defineProperty(this, "isValueUniform", true);

      _defineProperty(this, "isMat4", true);

      this.value = new Float32Array(matArray || glMat4_4([]));
    }

    _createClass(Mat4, [{
      key: "fromArray",
      value: function fromArray(array) {
        for (var i = 0; i < 16; i++) {
          this.value[i] = array[i];
        }
      }
    }, {
      key: "compose",
      value: function compose(position, quaternion, scale) {
        glMat4_17(glMat4_18(this.value, scale.value), quaternion.value, position.value);
      }
    }, {
      key: "perspective",
      value: function perspective$$1(fovy, aspect, near, far) {
        glMat4_25(this.value, fovy, aspect, near, far);
      }
    }, {
      key: "ortho",
      value: function ortho$$1(left, right, top, bottom, near, far) {
        glMat4_27(this.value, left, right, top, bottom, near, far);
      }
    }, {
      key: "copy",
      value: function copy(matrix) {
        this.fromArray(matrix.value);
      }
    }, {
      key: "clone",
      value: function clone() {
        return new Mat4().copy(this);
      }
    }]);

    return Mat4;
  }();

  var add_1 = add;
  /**
   * Adds two vec4's
   *
   * @param {vec4} out the receiving vector
   * @param {vec4} a the first operand
   * @param {vec4} b the second operand
   * @returns {vec4} out
   */

  function add(out, a, b) {
    out[0] = a[0] + b[0];
    out[1] = a[1] + b[1];
    out[2] = a[2] + b[2];
    out[3] = a[3] + b[3];
    return out;
  }

  /**
   * Adds two quat's
   *
   * @param {quat} out the receiving quaternion
   * @param {quat} a the first operand
   * @param {quat} b the second operand
   * @returns {quat} out
   * @function
   */
  var add$1 = add_1;

  var calculateW_1 = calculateW;
  /**
   * Calculates the W component of a quat from the X, Y, and Z components.
   * Assumes that quaternion is 1 unit in length.
   * Any existing W component will be ignored.
   *
   * @param {quat} out the receiving quaternion
   * @param {quat} a quat to calculate W component of
   * @returns {quat} out
   */

  function calculateW(out, a) {
    var x = a[0],
        y = a[1],
        z = a[2];
    out[0] = x;
    out[1] = y;
    out[2] = z;
    out[3] = Math.sqrt(Math.abs(1.0 - x * x - y * y - z * z));
    return out;
  }

  var clone_1$1 = clone$1;
  /**
   * Creates a new vec4 initialized with values from an existing vector
   *
   * @param {vec4} a vector to clone
   * @returns {vec4} a new 4D vector
   */

  function clone$1(a) {
    var out = new Float32Array(4);
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    return out;
  }

  /**
   * Creates a new quat initialized with values from an existing quaternion
   *
   * @param {quat} a quaternion to clone
   * @returns {quat} a new quaternion
   * @function
   */
  var clone$2 = clone_1$1;

  var conjugate_1 = conjugate;
  /**
   * Calculates the conjugate of a quat
   * If the quaternion is normalized, this function is faster than quat.inverse and produces the same result.
   *
   * @param {quat} out the receiving quaternion
   * @param {quat} a quat to calculate conjugate of
   * @returns {quat} out
   */

  function conjugate(out, a) {
    out[0] = -a[0];
    out[1] = -a[1];
    out[2] = -a[2];
    out[3] = a[3];
    return out;
  }

  var copy_1$1 = copy$1;
  /**
   * Copy the values from one vec4 to another
   *
   * @param {vec4} out the receiving vector
   * @param {vec4} a the source vector
   * @returns {vec4} out
   */

  function copy$1(out, a) {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    return out;
  }

  /**
   * Copy the values from one quat to another
   *
   * @param {quat} out the receiving quaternion
   * @param {quat} a the source quaternion
   * @returns {quat} out
   * @function
   */
  var copy$2 = copy_1$1;

  var create_1$1 = create$1;
  /**
   * Creates a new identity quat
   *
   * @returns {quat} a new quaternion
   */

  function create$1() {
    var out = new Float32Array(4);
    out[0] = 0;
    out[1] = 0;
    out[2] = 0;
    out[3] = 1;
    return out;
  }

  var dot_1 = dot;
  /**
   * Calculates the dot product of two vec4's
   *
   * @param {vec4} a the first operand
   * @param {vec4} b the second operand
   * @returns {Number} dot product of a and b
   */

  function dot(a, b) {
    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3];
  }

  /**
   * Calculates the dot product of two quat's
   *
   * @param {quat} a the first operand
   * @param {quat} b the second operand
   * @returns {Number} dot product of a and b
   * @function
   */
  var dot$1 = dot_1;

  var fromMat3_1 = fromMat3;
  /**
   * Creates a quaternion from the given 3x3 rotation matrix.
   *
   * NOTE: The resultant quaternion is not normalized, so you should be sure
   * to renormalize the quaternion yourself where necessary.
   *
   * @param {quat} out the receiving quaternion
   * @param {mat3} m rotation matrix
   * @returns {quat} out
   * @function
   */

  function fromMat3(out, m) {
    // Algorithm in Ken Shoemake's article in 1987 SIGGRAPH course notes
    // article "Quaternion Calculus and Fast Animation".
    var fTrace = m[0] + m[4] + m[8];
    var fRoot;

    if (fTrace > 0.0) {
      // |w| > 1/2, may as well choose w > 1/2
      fRoot = Math.sqrt(fTrace + 1.0); // 2w

      out[3] = 0.5 * fRoot;
      fRoot = 0.5 / fRoot; // 1/(4w)

      out[0] = (m[5] - m[7]) * fRoot;
      out[1] = (m[6] - m[2]) * fRoot;
      out[2] = (m[1] - m[3]) * fRoot;
    } else {
      // |w| <= 1/2
      var i = 0;

      if (m[4] > m[0]) {
        i = 1;
      }

      if (m[8] > m[i * 3 + i]) {
        i = 2;
      }

      var j = (i + 1) % 3;
      var k = (i + 2) % 3;
      fRoot = Math.sqrt(m[i * 3 + i] - m[j * 3 + j] - m[k * 3 + k] + 1.0);
      out[i] = 0.5 * fRoot;
      fRoot = 0.5 / fRoot;
      out[3] = (m[j * 3 + k] - m[k * 3 + j]) * fRoot;
      out[j] = (m[j * 3 + i] + m[i * 3 + j]) * fRoot;
      out[k] = (m[k * 3 + i] + m[i * 3 + k]) * fRoot;
    }

    return out;
  }

  var fromValues_1 = fromValues;
  /**
   * Creates a new vec4 initialized with the given values
   *
   * @param {Number} x X component
   * @param {Number} y Y component
   * @param {Number} z Z component
   * @param {Number} w W component
   * @returns {vec4} a new 4D vector
   */

  function fromValues(x, y, z, w) {
    var out = new Float32Array(4);
    out[0] = x;
    out[1] = y;
    out[2] = z;
    out[3] = w;
    return out;
  }

  /**
   * Creates a new quat initialized with the given values
   *
   * @param {Number} x X component
   * @param {Number} y Y component
   * @param {Number} z Z component
   * @param {Number} w W component
   * @returns {quat} a new quaternion
   * @function
   */
  var fromValues$1 = fromValues_1;

  var identity_1$1 = identity$1;
  /**
   * Set a quat to the identity quaternion
   *
   * @param {quat} out the receiving quaternion
   * @returns {quat} out
   */

  function identity$1(out) {
    out[0] = 0;
    out[1] = 0;
    out[2] = 0;
    out[3] = 1;
    return out;
  }

  var invert_1$1 = invert$1;
  /**
   * Calculates the inverse of a quat
   *
   * @param {quat} out the receiving quaternion
   * @param {quat} a quat to calculate inverse of
   * @returns {quat} out
   */

  function invert$1(out, a) {
    var a0 = a[0],
        a1 = a[1],
        a2 = a[2],
        a3 = a[3],
        dot = a0 * a0 + a1 * a1 + a2 * a2 + a3 * a3,
        invDot = dot ? 1.0 / dot : 0; // TODO: Would be faster to return [0,0,0,0] immediately if dot == 0

    out[0] = -a0 * invDot;
    out[1] = -a1 * invDot;
    out[2] = -a2 * invDot;
    out[3] = a3 * invDot;
    return out;
  }

  var length_1 = length;
  /**
   * Calculates the length of a vec4
   *
   * @param {vec4} a vector to calculate length of
   * @returns {Number} length of a
   */

  function length(a) {
    var x = a[0],
        y = a[1],
        z = a[2],
        w = a[3];
    return Math.sqrt(x * x + y * y + z * z + w * w);
  }

  /**
   * Calculates the length of a quat
   *
   * @param {quat} a vector to calculate length of
   * @returns {Number} length of a
   * @function
   */
  var length$1 = length_1;

  var lerp_1 = lerp;
  /**
   * Performs a linear interpolation between two vec4's
   *
   * @param {vec4} out the receiving vector
   * @param {vec4} a the first operand
   * @param {vec4} b the second operand
   * @param {Number} t interpolation amount between the two inputs
   * @returns {vec4} out
   */

  function lerp(out, a, b, t) {
    var ax = a[0],
        ay = a[1],
        az = a[2],
        aw = a[3];
    out[0] = ax + t * (b[0] - ax);
    out[1] = ay + t * (b[1] - ay);
    out[2] = az + t * (b[2] - az);
    out[3] = aw + t * (b[3] - aw);
    return out;
  }

  /**
   * Performs a linear interpolation between two quat's
   *
   * @param {quat} out the receiving quaternion
   * @param {quat} a the first operand
   * @param {quat} b the second operand
   * @param {Number} t interpolation amount between the two inputs
   * @returns {quat} out
   * @function
   */
  var lerp$1 = lerp_1;

  var multiply_1$1 = multiply$1;
  /**
   * Multiplies two quat's
   *
   * @param {quat} out the receiving quaternion
   * @param {quat} a the first operand
   * @param {quat} b the second operand
   * @returns {quat} out
   */

  function multiply$1(out, a, b) {
    var ax = a[0],
        ay = a[1],
        az = a[2],
        aw = a[3],
        bx = b[0],
        by = b[1],
        bz = b[2],
        bw = b[3];
    out[0] = ax * bw + aw * bx + ay * bz - az * by;
    out[1] = ay * bw + aw * by + az * bx - ax * bz;
    out[2] = az * bw + aw * bz + ax * by - ay * bx;
    out[3] = aw * bw - ax * bx - ay * by - az * bz;
    return out;
  }

  var normalize_1 = normalize;
  /**
   * Normalize a vec4
   *
   * @param {vec4} out the receiving vector
   * @param {vec4} a vector to normalize
   * @returns {vec4} out
   */

  function normalize(out, a) {
    var x = a[0],
        y = a[1],
        z = a[2],
        w = a[3];
    var len = x * x + y * y + z * z + w * w;

    if (len > 0) {
      len = 1 / Math.sqrt(len);
      out[0] = x * len;
      out[1] = y * len;
      out[2] = z * len;
      out[3] = w * len;
    }

    return out;
  }

  /**
   * Normalize a quat
   *
   * @param {quat} out the receiving quaternion
   * @param {quat} a quaternion to normalize
   * @returns {quat} out
   * @function
   */
  var normalize$1 = normalize_1;

  var rotateX_1$1 = rotateX$1;
  /**
   * Rotates a quaternion by the given angle about the X axis
   *
   * @param {quat} out quat receiving operation result
   * @param {quat} a quat to rotate
   * @param {number} rad angle (in radians) to rotate
   * @returns {quat} out
   */

  function rotateX$1(out, a, rad) {
    rad *= 0.5;
    var ax = a[0],
        ay = a[1],
        az = a[2],
        aw = a[3],
        bx = Math.sin(rad),
        bw = Math.cos(rad);
    out[0] = ax * bw + aw * bx;
    out[1] = ay * bw + az * bx;
    out[2] = az * bw - ay * bx;
    out[3] = aw * bw - ax * bx;
    return out;
  }

  var rotateY_1$1 = rotateY$1;
  /**
   * Rotates a quaternion by the given angle about the Y axis
   *
   * @param {quat} out quat receiving operation result
   * @param {quat} a quat to rotate
   * @param {number} rad angle (in radians) to rotate
   * @returns {quat} out
   */

  function rotateY$1(out, a, rad) {
    rad *= 0.5;
    var ax = a[0],
        ay = a[1],
        az = a[2],
        aw = a[3],
        by = Math.sin(rad),
        bw = Math.cos(rad);
    out[0] = ax * bw - az * by;
    out[1] = ay * bw + aw * by;
    out[2] = az * bw + ax * by;
    out[3] = aw * bw - ay * by;
    return out;
  }

  var rotateZ_1$1 = rotateZ$1;
  /**
   * Rotates a quaternion by the given angle about the Z axis
   *
   * @param {quat} out quat receiving operation result
   * @param {quat} a quat to rotate
   * @param {number} rad angle (in radians) to rotate
   * @returns {quat} out
   */

  function rotateZ$1(out, a, rad) {
    rad *= 0.5;
    var ax = a[0],
        ay = a[1],
        az = a[2],
        aw = a[3],
        bz = Math.sin(rad),
        bw = Math.cos(rad);
    out[0] = ax * bw + ay * bz;
    out[1] = ay * bw - ax * bz;
    out[2] = az * bw + aw * bz;
    out[3] = aw * bw - az * bz;
    return out;
  }

  var dot_1$1 = dot$2;
  /**
   * Calculates the dot product of two vec3's
   *
   * @param {vec3} a the first operand
   * @param {vec3} b the second operand
   * @returns {Number} dot product of a and b
   */

  function dot$2(a, b) {
    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
  }

  var cross_1 = cross;
  /**
   * Computes the cross product of two vec3's
   *
   * @param {vec3} out the receiving vector
   * @param {vec3} a the first operand
   * @param {vec3} b the second operand
   * @returns {vec3} out
   */

  function cross(out, a, b) {
    var ax = a[0],
        ay = a[1],
        az = a[2],
        bx = b[0],
        by = b[1],
        bz = b[2];
    out[0] = ay * bz - az * by;
    out[1] = az * bx - ax * bz;
    out[2] = ax * by - ay * bx;
    return out;
  }

  var length_1$1 = length$2;
  /**
   * Calculates the length of a vec3
   *
   * @param {vec3} a vector to calculate length of
   * @returns {Number} length of a
   */

  function length$2(a) {
    var x = a[0],
        y = a[1],
        z = a[2];
    return Math.sqrt(x * x + y * y + z * z);
  }

  var normalize_1$1 = normalize$2;
  /**
   * Normalize a vec3
   *
   * @param {vec3} out the receiving vector
   * @param {vec3} a vector to normalize
   * @returns {vec3} out
   */

  function normalize$2(out, a) {
    var x = a[0],
        y = a[1],
        z = a[2];
    var len = x * x + y * y + z * z;

    if (len > 0) {
      //TODO: evaluate use of glm_invsqrt here?
      len = 1 / Math.sqrt(len);
      out[0] = a[0] * len;
      out[1] = a[1] * len;
      out[2] = a[2] * len;
    }

    return out;
  }

  var setAxisAngle_1 = setAxisAngle;
  /**
   * Sets a quat from the given angle and rotation axis,
   * then returns it.
   *
   * @param {quat} out the receiving quaternion
   * @param {vec3} axis the axis around which to rotate
   * @param {Number} rad the angle in radians
   * @returns {quat} out
   **/

  function setAxisAngle(out, axis, rad) {
    rad = rad * 0.5;
    var s = Math.sin(rad);
    out[0] = s * axis[0];
    out[1] = s * axis[1];
    out[2] = s * axis[2];
    out[3] = Math.cos(rad);
    return out;
  }

  var rotationTo_1 = rotationTo;
  var tmpvec3 = [0, 0, 0];
  var xUnitVec3 = [1, 0, 0];
  var yUnitVec3 = [0, 1, 0];
  /**
   * Sets a quaternion to represent the shortest rotation from one
   * vector to another.
   *
   * Both vectors are assumed to be unit length.
   *
   * @param {quat} out the receiving quaternion.
   * @param {vec3} a the initial vector
   * @param {vec3} b the destination vector
   * @returns {quat} out
   */

  function rotationTo(out, a, b) {
    var dot = dot_1$1(a, b);

    if (dot < -0.999999) {
      cross_1(tmpvec3, xUnitVec3, a);

      if (length_1$1(tmpvec3) < 0.000001) {
        cross_1(tmpvec3, yUnitVec3, a);
      }

      normalize_1$1(tmpvec3, tmpvec3);
      setAxisAngle_1(out, tmpvec3, Math.PI);
      return out;
    } else if (dot > 0.999999) {
      out[0] = 0;
      out[1] = 0;
      out[2] = 0;
      out[3] = 1;
      return out;
    } else {
      cross_1(tmpvec3, a, b);
      out[0] = tmpvec3[0];
      out[1] = tmpvec3[1];
      out[2] = tmpvec3[2];
      out[3] = 1 + dot;
      return normalize$1(out, out);
    }
  }

  var scale_1$1 = scale$1;
  /**
   * Scales a vec4 by a scalar number
   *
   * @param {vec4} out the receiving vector
   * @param {vec4} a the vector to scale
   * @param {Number} b amount to scale the vector by
   * @returns {vec4} out
   */

  function scale$1(out, a, b) {
    out[0] = a[0] * b;
    out[1] = a[1] * b;
    out[2] = a[2] * b;
    out[3] = a[3] * b;
    return out;
  }

  /**
   * Scales a quat by a scalar number
   *
   * @param {quat} out the receiving vector
   * @param {quat} a the vector to scale
   * @param {Number} b amount to scale the vector by
   * @returns {quat} out
   * @function
   */
  var scale$2 = scale_1$1;

  var set_1 = set$1;
  /**
   * Set the components of a vec4 to the given values
   *
   * @param {vec4} out the receiving vector
   * @param {Number} x X component
   * @param {Number} y Y component
   * @param {Number} z Z component
   * @param {Number} w W component
   * @returns {vec4} out
   */

  function set$1(out, x, y, z, w) {
    out[0] = x;
    out[1] = y;
    out[2] = z;
    out[3] = w;
    return out;
  }

  /**
   * Set the components of a quat to the given values
   *
   * @param {quat} out the receiving quaternion
   * @param {Number} x X component
   * @param {Number} y Y component
   * @param {Number} z Z component
   * @param {Number} w W component
   * @returns {quat} out
   * @function
   */
  var set$2 = set_1;

  var create_1$2 = create$2;
  /**
   * Creates a new identity mat3
   *
   * @alias mat3.create
   * @returns {mat3} a new 3x3 matrix
   */

  function create$2() {
    var out = new Float32Array(9);
    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 1;
    out[5] = 0;
    out[6] = 0;
    out[7] = 0;
    out[8] = 1;
    return out;
  }

  var setAxes_1 = setAxes;
  var matr = create_1$2();
  /**
   * Sets the specified quaternion with values corresponding to the given
   * axes. Each axis is a vec3 and is expected to be unit length and
   * perpendicular to all other specified axes.
   *
   * @param {vec3} view  the vector representing the viewing direction
   * @param {vec3} right the vector representing the local "right" direction
   * @param {vec3} up    the vector representing the local "up" direction
   * @returns {quat} out
   */

  function setAxes(out, view, right, up) {
    matr[0] = right[0];
    matr[3] = right[1];
    matr[6] = right[2];
    matr[1] = up[0];
    matr[4] = up[1];
    matr[7] = up[2];
    matr[2] = -view[0];
    matr[5] = -view[1];
    matr[8] = -view[2];
    return normalize$1(out, fromMat3_1(out, matr));
  }

  var slerp_1 = slerp;
  /**
   * Performs a spherical linear interpolation between two quat
   *
   * @param {quat} out the receiving quaternion
   * @param {quat} a the first operand
   * @param {quat} b the second operand
   * @param {Number} t interpolation amount between the two inputs
   * @returns {quat} out
   */

  function slerp(out, a, b, t) {
    // benchmarks:
    //    http://jsperf.com/quaternion-slerp-implementations
    var ax = a[0],
        ay = a[1],
        az = a[2],
        aw = a[3],
        bx = b[0],
        by = b[1],
        bz = b[2],
        bw = b[3];
    var omega, cosom, sinom, scale0, scale1; // calc cosine

    cosom = ax * bx + ay * by + az * bz + aw * bw; // adjust signs (if necessary)

    if (cosom < 0.0) {
      cosom = -cosom;
      bx = -bx;
      by = -by;
      bz = -bz;
      bw = -bw;
    } // calculate coefficients


    if (1.0 - cosom > 0.000001) {
      // standard case (slerp)
      omega = Math.acos(cosom);
      sinom = Math.sin(omega);
      scale0 = Math.sin((1.0 - t) * omega) / sinom;
      scale1 = Math.sin(t * omega) / sinom;
    } else {
      // "from" and "to" quaternions are very close
      //  ... so we can do a linear interpolation
      scale0 = 1.0 - t;
      scale1 = t;
    } // calculate final values


    out[0] = scale0 * ax + scale1 * bx;
    out[1] = scale0 * ay + scale1 * by;
    out[2] = scale0 * az + scale1 * bz;
    out[3] = scale0 * aw + scale1 * bw;
    return out;
  }

  var sqlerp_1 = sqlerp;
  var temp1 = [0, 0, 0, 1];
  var temp2 = [0, 0, 0, 1];
  /**
   * Performs a spherical linear interpolation with two control points
   *
   * @param {quat} out the receiving quaternion
   * @param {quat} a the first operand
   * @param {quat} b the second operand
   * @param {quat} c the third operand
   * @param {quat} d the fourth operand
   * @param {Number} t interpolation amount
   * @returns {quat} out
   */

  function sqlerp(out, a, b, c, d, t) {
    slerp_1(temp1, a, d, t);
    slerp_1(temp2, b, c, t);
    slerp_1(out, temp1, temp2, 2 * t * (1 - t));
    return out;
  }

  var squaredLength_1 = squaredLength;
  /**
   * Calculates the squared length of a vec4
   *
   * @param {vec4} a vector to calculate squared length of
   * @returns {Number} squared length of a
   */

  function squaredLength(a) {
    var x = a[0],
        y = a[1],
        z = a[2],
        w = a[3];
    return x * x + y * y + z * z + w * w;
  }

  /**
   * Calculates the squared length of a quat
   *
   * @param {quat} a vector to calculate squared length of
   * @returns {Number} squared length of a
   * @function
   */
  var squaredLength$1 = squaredLength_1;

  var glQuat = {
    add: add$1,
    calculateW: calculateW_1,
    clone: clone$2,
    conjugate: conjugate_1,
    copy: copy$2,
    create: create_1$1,
    dot: dot$1,
    fromMat3: fromMat3_1,
    fromValues: fromValues$1,
    identity: identity_1$1,
    invert: invert_1$1,
    length: length$1,
    lerp: lerp$1,
    multiply: multiply_1$1,
    normalize: normalize$1,
    rotateX: rotateX_1$1,
    rotateY: rotateY_1$1,
    rotateZ: rotateZ_1$1,
    rotationTo: rotationTo_1,
    scale: scale$2,
    set: set$2,
    setAxes: setAxes_1,
    setAxisAngle: setAxisAngle_1,
    slerp: slerp_1,
    sqlerp: sqlerp_1,
    squaredLength: squaredLength$1
  };
  var glQuat_10 = glQuat.identity;
  var glQuat_16 = glQuat.rotateX;

  var epsilon = 0.000001;

  var create_1$3 = create$3;
  /**
   * Creates a new, empty vec3
   *
   * @returns {vec3} a new 3D vector
   */

  function create$3() {
    var out = new Float32Array(3);
    out[0] = 0;
    out[1] = 0;
    out[2] = 0;
    return out;
  }

  var clone_1$2 = clone$3;
  /**
   * Creates a new vec3 initialized with values from an existing vector
   *
   * @param {vec3} a vector to clone
   * @returns {vec3} a new 3D vector
   */

  function clone$3(a) {
    var out = new Float32Array(3);
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    return out;
  }

  var fromValues_1$1 = fromValues$2;
  /**
   * Creates a new vec3 initialized with the given values
   *
   * @param {Number} x X component
   * @param {Number} y Y component
   * @param {Number} z Z component
   * @returns {vec3} a new 3D vector
   */

  function fromValues$2(x, y, z) {
    var out = new Float32Array(3);
    out[0] = x;
    out[1] = y;
    out[2] = z;
    return out;
  }

  var normalize_1$2 = normalize$3;
  /**
   * Normalize a vec3
   *
   * @param {vec3} out the receiving vector
   * @param {vec3} a vector to normalize
   * @returns {vec3} out
   */

  function normalize$3(out, a) {
    var x = a[0],
        y = a[1],
        z = a[2];
    var len = x * x + y * y + z * z;

    if (len > 0) {
      //TODO: evaluate use of glm_invsqrt here?
      len = 1 / Math.sqrt(len);
      out[0] = a[0] * len;
      out[1] = a[1] * len;
      out[2] = a[2] * len;
    }

    return out;
  }

  var dot_1$2 = dot$3;
  /**
   * Calculates the dot product of two vec3's
   *
   * @param {vec3} a the first operand
   * @param {vec3} b the second operand
   * @returns {Number} dot product of a and b
   */

  function dot$3(a, b) {
    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
  }

  var angle_1 = angle;






  /**
   * Get the angle between two 3D vectors
   * @param {vec3} a The first operand
   * @param {vec3} b The second operand
   * @returns {Number} The angle in radians
   */


  function angle(a, b) {
    var tempA = fromValues_1$1(a[0], a[1], a[2]);
    var tempB = fromValues_1$1(b[0], b[1], b[2]);
    normalize_1$2(tempA, tempA);
    normalize_1$2(tempB, tempB);
    var cosine = dot_1$2(tempA, tempB);

    if (cosine > 1.0) {
      return 0;
    } else {
      return Math.acos(cosine);
    }
  }

  var copy_1$2 = copy$3;
  /**
   * Copy the values from one vec3 to another
   *
   * @param {vec3} out the receiving vector
   * @param {vec3} a the source vector
   * @returns {vec3} out
   */

  function copy$3(out, a) {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    return out;
  }

  var set_1$1 = set$3;
  /**
   * Set the components of a vec3 to the given values
   *
   * @param {vec3} out the receiving vector
   * @param {Number} x X component
   * @param {Number} y Y component
   * @param {Number} z Z component
   * @returns {vec3} out
   */

  function set$3(out, x, y, z) {
    out[0] = x;
    out[1] = y;
    out[2] = z;
    return out;
  }

  var equals_1 = equals;


  /**
   * Returns whether or not the vectors have approximately the same elements in the same position.
   *
   * @param {vec3} a The first vector.
   * @param {vec3} b The second vector.
   * @returns {Boolean} True if the vectors are equal, false otherwise.
   */


  function equals(a, b) {
    var a0 = a[0];
    var a1 = a[1];
    var a2 = a[2];
    var b0 = b[0];
    var b1 = b[1];
    var b2 = b[2];
    return Math.abs(a0 - b0) <= epsilon * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= epsilon * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= epsilon * Math.max(1.0, Math.abs(a2), Math.abs(b2));
  }

  var exactEquals_1 = exactEquals;
  /**
   * Returns whether or not the vectors exactly have the same elements in the same position (when compared with ===)
   *
   * @param {vec3} a The first vector.
   * @param {vec3} b The second vector.
   * @returns {Boolean} True if the vectors are equal, false otherwise.
   */

  function exactEquals(a, b) {
    return a[0] === b[0] && a[1] === b[1] && a[2] === b[2];
  }

  var add_1$1 = add$2;
  /**
   * Adds two vec3's
   *
   * @param {vec3} out the receiving vector
   * @param {vec3} a the first operand
   * @param {vec3} b the second operand
   * @returns {vec3} out
   */

  function add$2(out, a, b) {
    out[0] = a[0] + b[0];
    out[1] = a[1] + b[1];
    out[2] = a[2] + b[2];
    return out;
  }

  var subtract_1 = subtract;
  /**
   * Subtracts vector b from vector a
   *
   * @param {vec3} out the receiving vector
   * @param {vec3} a the first operand
   * @param {vec3} b the second operand
   * @returns {vec3} out
   */

  function subtract(out, a, b) {
    out[0] = a[0] - b[0];
    out[1] = a[1] - b[1];
    out[2] = a[2] - b[2];
    return out;
  }

  var sub = subtract_1;

  var multiply_1$2 = multiply$2;
  /**
   * Multiplies two vec3's
   *
   * @param {vec3} out the receiving vector
   * @param {vec3} a the first operand
   * @param {vec3} b the second operand
   * @returns {vec3} out
   */

  function multiply$2(out, a, b) {
    out[0] = a[0] * b[0];
    out[1] = a[1] * b[1];
    out[2] = a[2] * b[2];
    return out;
  }

  var mul = multiply_1$2;

  var divide_1 = divide;
  /**
   * Divides two vec3's
   *
   * @param {vec3} out the receiving vector
   * @param {vec3} a the first operand
   * @param {vec3} b the second operand
   * @returns {vec3} out
   */

  function divide(out, a, b) {
    out[0] = a[0] / b[0];
    out[1] = a[1] / b[1];
    out[2] = a[2] / b[2];
    return out;
  }

  var div = divide_1;

  var min_1 = min$2;
  /**
   * Returns the minimum of two vec3's
   *
   * @param {vec3} out the receiving vector
   * @param {vec3} a the first operand
   * @param {vec3} b the second operand
   * @returns {vec3} out
   */

  function min$2(out, a, b) {
    out[0] = Math.min(a[0], b[0]);
    out[1] = Math.min(a[1], b[1]);
    out[2] = Math.min(a[2], b[2]);
    return out;
  }

  var max_1 = max$1;
  /**
   * Returns the maximum of two vec3's
   *
   * @param {vec3} out the receiving vector
   * @param {vec3} a the first operand
   * @param {vec3} b the second operand
   * @returns {vec3} out
   */

  function max$1(out, a, b) {
    out[0] = Math.max(a[0], b[0]);
    out[1] = Math.max(a[1], b[1]);
    out[2] = Math.max(a[2], b[2]);
    return out;
  }

  var floor_1 = floor$1;
  /**
   * Math.floor the components of a vec3
   *
   * @param {vec3} out the receiving vector
   * @param {vec3} a vector to floor
   * @returns {vec3} out
   */

  function floor$1(out, a) {
    out[0] = Math.floor(a[0]);
    out[1] = Math.floor(a[1]);
    out[2] = Math.floor(a[2]);
    return out;
  }

  var ceil_1 = ceil$1;
  /**
   * Math.ceil the components of a vec3
   *
   * @param {vec3} out the receiving vector
   * @param {vec3} a vector to ceil
   * @returns {vec3} out
   */

  function ceil$1(out, a) {
    out[0] = Math.ceil(a[0]);
    out[1] = Math.ceil(a[1]);
    out[2] = Math.ceil(a[2]);
    return out;
  }

  var round_1 = round;
  /**
   * Math.round the components of a vec3
   *
   * @param {vec3} out the receiving vector
   * @param {vec3} a vector to round
   * @returns {vec3} out
   */

  function round(out, a) {
    out[0] = Math.round(a[0]);
    out[1] = Math.round(a[1]);
    out[2] = Math.round(a[2]);
    return out;
  }

  var scale_1$2 = scale$3;
  /**
   * Scales a vec3 by a scalar number
   *
   * @param {vec3} out the receiving vector
   * @param {vec3} a the vector to scale
   * @param {Number} b amount to scale the vector by
   * @returns {vec3} out
   */

  function scale$3(out, a, b) {
    out[0] = a[0] * b;
    out[1] = a[1] * b;
    out[2] = a[2] * b;
    return out;
  }

  var scaleAndAdd_1 = scaleAndAdd;
  /**
   * Adds two vec3's after scaling the second operand by a scalar value
   *
   * @param {vec3} out the receiving vector
   * @param {vec3} a the first operand
   * @param {vec3} b the second operand
   * @param {Number} scale the amount to scale b by before adding
   * @returns {vec3} out
   */

  function scaleAndAdd(out, a, b, scale) {
    out[0] = a[0] + b[0] * scale;
    out[1] = a[1] + b[1] * scale;
    out[2] = a[2] + b[2] * scale;
    return out;
  }

  var distance_1 = distance;
  /**
   * Calculates the euclidian distance between two vec3's
   *
   * @param {vec3} a the first operand
   * @param {vec3} b the second operand
   * @returns {Number} distance between a and b
   */

  function distance(a, b) {
    var x = b[0] - a[0],
        y = b[1] - a[1],
        z = b[2] - a[2];
    return Math.sqrt(x * x + y * y + z * z);
  }

  var dist = distance_1;

  var squaredDistance_1 = squaredDistance;
  /**
   * Calculates the squared euclidian distance between two vec3's
   *
   * @param {vec3} a the first operand
   * @param {vec3} b the second operand
   * @returns {Number} squared distance between a and b
   */

  function squaredDistance(a, b) {
    var x = b[0] - a[0],
        y = b[1] - a[1],
        z = b[2] - a[2];
    return x * x + y * y + z * z;
  }

  var sqrDist = squaredDistance_1;

  var length_1$2 = length$3;
  /**
   * Calculates the length of a vec3
   *
   * @param {vec3} a vector to calculate length of
   * @returns {Number} length of a
   */

  function length$3(a) {
    var x = a[0],
        y = a[1],
        z = a[2];
    return Math.sqrt(x * x + y * y + z * z);
  }

  var len = length_1$2;

  var squaredLength_1$1 = squaredLength$2;
  /**
   * Calculates the squared length of a vec3
   *
   * @param {vec3} a vector to calculate squared length of
   * @returns {Number} squared length of a
   */

  function squaredLength$2(a) {
    var x = a[0],
        y = a[1],
        z = a[2];
    return x * x + y * y + z * z;
  }

  var sqrLen = squaredLength_1$1;

  var negate_1 = negate;
  /**
   * Negates the components of a vec3
   *
   * @param {vec3} out the receiving vector
   * @param {vec3} a vector to negate
   * @returns {vec3} out
   */

  function negate(out, a) {
    out[0] = -a[0];
    out[1] = -a[1];
    out[2] = -a[2];
    return out;
  }

  var inverse_1 = inverse;
  /**
   * Returns the inverse of the components of a vec3
   *
   * @param {vec3} out the receiving vector
   * @param {vec3} a vector to invert
   * @returns {vec3} out
   */

  function inverse(out, a) {
    out[0] = 1.0 / a[0];
    out[1] = 1.0 / a[1];
    out[2] = 1.0 / a[2];
    return out;
  }

  var cross_1$1 = cross$1;
  /**
   * Computes the cross product of two vec3's
   *
   * @param {vec3} out the receiving vector
   * @param {vec3} a the first operand
   * @param {vec3} b the second operand
   * @returns {vec3} out
   */

  function cross$1(out, a, b) {
    var ax = a[0],
        ay = a[1],
        az = a[2],
        bx = b[0],
        by = b[1],
        bz = b[2];
    out[0] = ay * bz - az * by;
    out[1] = az * bx - ax * bz;
    out[2] = ax * by - ay * bx;
    return out;
  }

  var lerp_1$1 = lerp$2;
  /**
   * Performs a linear interpolation between two vec3's
   *
   * @param {vec3} out the receiving vector
   * @param {vec3} a the first operand
   * @param {vec3} b the second operand
   * @param {Number} t interpolation amount between the two inputs
   * @returns {vec3} out
   */

  function lerp$2(out, a, b, t) {
    var ax = a[0],
        ay = a[1],
        az = a[2];
    out[0] = ax + t * (b[0] - ax);
    out[1] = ay + t * (b[1] - ay);
    out[2] = az + t * (b[2] - az);
    return out;
  }

  var random_1 = random;
  /**
   * Generates a random vector with the given scale
   *
   * @param {vec3} out the receiving vector
   * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
   * @returns {vec3} out
   */

  function random(out, scale) {
    scale = scale || 1.0;
    var r = Math.random() * 2.0 * Math.PI;
    var z = Math.random() * 2.0 - 1.0;
    var zScale = Math.sqrt(1.0 - z * z) * scale;
    out[0] = Math.cos(r) * zScale;
    out[1] = Math.sin(r) * zScale;
    out[2] = z * scale;
    return out;
  }

  var transformMat4_1 = transformMat4;
  /**
   * Transforms the vec3 with a mat4.
   * 4th vector component is implicitly '1'
   *
   * @param {vec3} out the receiving vector
   * @param {vec3} a the vector to transform
   * @param {mat4} m matrix to transform with
   * @returns {vec3} out
   */

  function transformMat4(out, a, m) {
    var x = a[0],
        y = a[1],
        z = a[2],
        w = m[3] * x + m[7] * y + m[11] * z + m[15];
    w = w || 1.0;
    out[0] = (m[0] * x + m[4] * y + m[8] * z + m[12]) / w;
    out[1] = (m[1] * x + m[5] * y + m[9] * z + m[13]) / w;
    out[2] = (m[2] * x + m[6] * y + m[10] * z + m[14]) / w;
    return out;
  }

  var transformMat3_1 = transformMat3;
  /**
   * Transforms the vec3 with a mat3.
   *
   * @param {vec3} out the receiving vector
   * @param {vec3} a the vector to transform
   * @param {mat4} m the 3x3 matrix to transform with
   * @returns {vec3} out
   */

  function transformMat3(out, a, m) {
    var x = a[0],
        y = a[1],
        z = a[2];
    out[0] = x * m[0] + y * m[3] + z * m[6];
    out[1] = x * m[1] + y * m[4] + z * m[7];
    out[2] = x * m[2] + y * m[5] + z * m[8];
    return out;
  }

  var transformQuat_1 = transformQuat;
  /**
   * Transforms the vec3 with a quat
   *
   * @param {vec3} out the receiving vector
   * @param {vec3} a the vector to transform
   * @param {quat} q quaternion to transform with
   * @returns {vec3} out
   */

  function transformQuat(out, a, q) {
    // benchmarks: http://jsperf.com/quaternion-transform-vec3-implementations
    var x = a[0],
        y = a[1],
        z = a[2],
        qx = q[0],
        qy = q[1],
        qz = q[2],
        qw = q[3],
        // calculate quat * vec
    ix = qw * x + qy * z - qz * y,
        iy = qw * y + qz * x - qx * z,
        iz = qw * z + qx * y - qy * x,
        iw = -qx * x - qy * y - qz * z; // calculate result * inverse quat

    out[0] = ix * qw + iw * -qx + iy * -qz - iz * -qy;
    out[1] = iy * qw + iw * -qy + iz * -qx - ix * -qz;
    out[2] = iz * qw + iw * -qz + ix * -qy - iy * -qx;
    return out;
  }

  var rotateX_1$2 = rotateX$2;
  /**
   * Rotate a 3D vector around the x-axis
   * @param {vec3} out The receiving vec3
   * @param {vec3} a The vec3 point to rotate
   * @param {vec3} b The origin of the rotation
   * @param {Number} c The angle of rotation
   * @returns {vec3} out
   */

  function rotateX$2(out, a, b, c) {
    var by = b[1];
    var bz = b[2]; // Translate point to the origin

    var py = a[1] - by;
    var pz = a[2] - bz;
    var sc = Math.sin(c);
    var cc = Math.cos(c); // perform rotation and translate to correct position

    out[0] = a[0];
    out[1] = by + py * cc - pz * sc;
    out[2] = bz + py * sc + pz * cc;
    return out;
  }

  var rotateY_1$2 = rotateY$2;
  /**
   * Rotate a 3D vector around the y-axis
   * @param {vec3} out The receiving vec3
   * @param {vec3} a The vec3 point to rotate
   * @param {vec3} b The origin of the rotation
   * @param {Number} c The angle of rotation
   * @returns {vec3} out
   */

  function rotateY$2(out, a, b, c) {
    var bx = b[0];
    var bz = b[2]; // translate point to the origin

    var px = a[0] - bx;
    var pz = a[2] - bz;
    var sc = Math.sin(c);
    var cc = Math.cos(c); // perform rotation and translate to correct position

    out[0] = bx + pz * sc + px * cc;
    out[1] = a[1];
    out[2] = bz + pz * cc - px * sc;
    return out;
  }

  var rotateZ_1$2 = rotateZ$2;
  /**
   * Rotate a 3D vector around the z-axis
   * @param {vec3} out The receiving vec3
   * @param {vec3} a The vec3 point to rotate
   * @param {vec3} b The origin of the rotation
   * @param {Number} c The angle of rotation
   * @returns {vec3} out
   */

  function rotateZ$2(out, a, b, c) {
    var bx = b[0];
    var by = b[1]; //Translate point to the origin

    var px = a[0] - bx;
    var py = a[1] - by;
    var sc = Math.sin(c);
    var cc = Math.cos(c); // perform rotation and translate to correct position

    out[0] = bx + px * cc - py * sc;
    out[1] = by + px * sc + py * cc;
    out[2] = a[2];
    return out;
  }

  var forEach_1 = forEach;

  var vec = create_1$3();
  /**
   * Perform some operation over an array of vec3s.
   *
   * @param {Array} a the array of vectors to iterate over
   * @param {Number} stride Number of elements between the start of each vec3. If 0 assumes tightly packed
   * @param {Number} offset Number of elements to skip at the beginning of the array
   * @param {Number} count Number of vec3s to iterate over. If 0 iterates over entire array
   * @param {Function} fn Function to call for each vector in the array
   * @param {Object} [arg] additional argument to pass to fn
   * @returns {Array} a
   * @function
   */


  function forEach(a, stride, offset, count, fn, arg) {
    var i, l;

    if (!stride) {
      stride = 3;
    }

    if (!offset) {
      offset = 0;
    }

    if (count) {
      l = Math.min(count * stride + offset, a.length);
    } else {
      l = a.length;
    }

    for (i = offset; i < l; i += stride) {
      vec[0] = a[i];
      vec[1] = a[i + 1];
      vec[2] = a[i + 2];
      fn(vec, vec, arg);
      a[i] = vec[0];
      a[i + 1] = vec[1];
      a[i + 2] = vec[2];
    }

    return a;
  }

  var glVec3 = {
    EPSILON: epsilon,
    create: create_1$3,
    clone: clone_1$2,
    angle: angle_1,
    fromValues: fromValues_1$1,
    copy: copy_1$2,
    set: set_1$1,
    equals: equals_1,
    exactEquals: exactEquals_1,
    add: add_1$1,
    subtract: subtract_1,
    sub: sub,
    multiply: multiply_1$2,
    mul: mul,
    divide: divide_1,
    div: div,
    min: min_1,
    max: max_1,
    floor: floor_1,
    ceil: ceil_1,
    round: round_1,
    scale: scale_1$2,
    scaleAndAdd: scaleAndAdd_1,
    distance: distance_1,
    dist: dist,
    squaredDistance: squaredDistance_1,
    sqrDist: sqrDist,
    length: length_1$2,
    len: len,
    squaredLength: squaredLength_1$1,
    sqrLen: sqrLen,
    negate: negate_1,
    inverse: inverse_1,
    normalize: normalize_1$2,
    dot: dot_1$2,
    cross: cross_1$1,
    lerp: lerp_1$1,
    random: random_1,
    transformMat4: transformMat4_1,
    transformMat3: transformMat3_1,
    transformQuat: transformQuat_1,
    rotateX: rotateX_1$2,
    rotateY: rotateY_1$2,
    rotateZ: rotateZ_1$2,
    forEach: forEach_1
  };
  var glVec3_41 = glVec3.transformQuat;

  var Quat =
  /*#__PURE__*/
  function () {
    function Quat(matArray) {
      _classCallCheck(this, Quat);

      _defineProperty(this, "isValueUniform", true);

      _defineProperty(this, "isQuat", true);

      this.value = glQuat_10([]);
    }

    _createClass(Quat, [{
      key: "fromArray",
      value: function fromArray(array) {
        this.value[0] = array[0];
        this.value[1] = array[1];
        this.value[2] = array[2];
        this.value[3] = array[3];
      }
    }, {
      key: "setFromEuler",
      value: function setFromEuler(x, y, z) {
        glQuat_10(this.value);
        glQuat_16(this.value, this.value, x);
        glQuat_16(this.value, this.value, y);
        glQuat_16(this.value, this.value, z);
      }
    }, {
      key: "getDirection",
      value: function getDirection() {
        var vec = new Vec3(0, 0, 1);
        glVec3_41(vec.value, vec.value, this.value);
        return vec;
      }
    }, {
      key: "copy",
      value: function copy(quat) {
        this.fromArray(quat.value);
      }
    }, {
      key: "clone",
      value: function clone() {
        return new Quat().copy(this);
      }
    }]);

    return Quat;
  }();

  var minivents_commonjs = function Events(target) {
    var events = {},
        empty = [];
    target = target || this;
    /**
     *  On: listen to events
     */

    target.on = function (type, func, ctx) {
      (events[type] = events[type] || []).push([func, ctx]);
      return target;
    };
    /**
     *  Off: stop listening to event / specific callback
     */


    target.off = function (type, func) {
      type || (events = {});
      var list = events[type] || empty,
          i = list.length = func ? list.length : 0;

      while (i--) func == list[i][0] && list.splice(i, 1);

      return target;
    };
    /** 
     * Emit: send event, callbacks will be triggered
     */


    target.emit = function (type) {
      var e = events[type] || empty,
          list = e.length > 0 ? e.slice(0, e.length) : e,
          i = 0,
          j;

      while (j = list[i++]) j[0].apply(j[1], empty.slice.call(arguments, 1));

      return target;
    };
  };

  var Object3D =
  /*#__PURE__*/
  function (_Events) {
    _inherits(Object3D, _Events);

    function Object3D() {
      var _this;

      _classCallCheck(this, Object3D);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(Object3D).call(this)); // FIXME: replace identity() with create()

      _this.matrix = new Mat4();
      _this.matrixWorld = new Mat4();
      _this.position = new Vec3(0, 0, 0);
      _this.scale = new Vec3(1, 1, 1);
      _this.quaternion = new Quat();
      _this.children = [];
      _this.matrixAutoUpdate = true;
      _this.matrixWorldAutoUpdate = true;
      return _this;
    } // lookAt(vector) {
    //
    // }


    _createClass(Object3D, [{
      key: "updateMatrix",
      value: function updateMatrix() {
        this.matrix.compose(this.position, this.quaternion, this.scale);
      }
    }, {
      key: "updateMatrixWorld",
      value: function updateMatrixWorld() {
        // Consider to be called after updateMatrix()
        // TODO: Replace with Math API
        if (!this.parent) {
          glMat4_3(this.matrixWorld.value, this.matrix.value);
          return;
        }

        glMat4_9(this.matrixWorld.value, this.matrix.value, this.parent.matrix.value);
      }
    }, {
      key: "add",
      value: function add(child) {
        child.parent = this;
        this.children.push(child);
        var eventObject = {
          parent: this,
          object: child
        };
        child.emit('hierarchy-update', eventObject);
        this.emit('hierarchy-update', eventObject);
        var _parent = this.parent;

        while (_parent) {
          _parent.emit('hierarchy-update', eventObject);

          _parent = _parent.parent;
        }
      }
    }, {
      key: "traverse",
      value: function traverse(cb) {
        var children = this.children;

        for (var i = 0, l = children.length; i < l; i++) {
          cb(children[i]);
          children[i].traverse(cb);
        }
      }
    }]);

    return Object3D;
  }(minivents_commonjs);

  var Mesh =
  /*#__PURE__*/
  function (_Object3D) {
    _inherits(Mesh, _Object3D);

    function Mesh(geometry) {
      var _this;

      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, Mesh);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(Mesh).call(this));

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "isMesh", true);

      options = Object.assign({
        shader: {}
      }, options);
      _this.program = new Program({
        vert: options.shader.vert,
        frag: options.shader.frag,
        uniforms: Object.assign(options.shader.uniforms || {}, {
          modelMatrix: _this.matrixWorld
        })
      }, geometry);
      _this.castShadow = false;
      _this.receiveShadow = false;
      _this.program.mesh = _assertThisInitialized(_assertThisInitialized(_this));
      Object.assign(_this.program.state, options.shader.state || {});
      return _this;
    }

    _createClass(Mesh, [{
      key: "visible",
      get: function get() {
        return this.program.enabled;
      },
      set: function set(value) {
        this.program.enabled = value;
      }
    }]);

    return Mesh;
  }(Object3D);

  var Scene =
  /*#__PURE__*/
  function (_Object3D) {
    _inherits(Scene, _Object3D);

    function Scene() {
      _classCallCheck(this, Scene);

      return _possibleConstructorReturn(this, _getPrototypeOf(Scene).call(this));
    }

    return Scene;
  }(Object3D);

  var Camera =
  /*#__PURE__*/
  function (_Object3D) {
    _inherits(Camera, _Object3D);

    _createClass(Camera, null, [{
      key: "ortho",
      value: function ortho(width, height) {
        var near = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
        var far = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 100;
        return new Camera({
          left: -width / 2,
          right: width / 2,
          top: height / 2,
          bottom: -height / 2,
          near: near,
          far: far
        });
      }
    }]);

    function Camera() {
      var _this;

      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, Camera);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(Camera).call(this));
      options = _this.options = Object.assign({
        type: 'perspective',
        fovy: Math.PI / 2,
        aspect: window.innerWidth / window.innerHeight,
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        near: 1,
        far: 100
      }, options);
      _this.projectionMatrix = new Mat4();

      _this.update();

      return _this;
    }

    _createClass(Camera, [{
      key: "update",
      value: function update() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        options = this.options = Object.assign(this.options, options);
        this.type = options.type;
        if (this.type === 'perspective') this.projectionMatrix.perspective(options.fovy, options.aspect, options.near, options.far);else this.projectionMatrix.ortho(options.left, options.right, options.top, options.bottom, options.near, options.far);
      }
    }]);

    return Camera;
  }(Object3D);

  var textureUnitInt = 0;
  var textureUnit = new WeakMap();

  var _gl = new WeakMap();

  var Texture =
  /*#__PURE__*/
  function () {
    _createClass(Texture, null, [{
      key: "fromUrl",
      value: function fromUrl(url) {
        return new Promise(function (resolve) {
          var img = new Image();
          img.src = url;

          img.onload = function () {
            // eslint-disable-line
            resolve(new Texture(img));
          };
        });
      }
    }]);

    function Texture(image, width, height) {
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

      _classCallCheck(this, Texture);

      _defineProperty(this, "isTexture", true);

      this.image = image;
      this.width = width || 256;
      this.height = height || 256;
      this.format = options.format || 'RGBA';
      this.internal = options.internal || options.format || 'RGBA';
      this.type = options.type || 'UNSIGNED_BYTE';
      this.wrapS = options.wrapS || 'CLAMP_TO_EDGE';
      this.wrapT = options.wrapT || options.wrapS || 'CLAMP_TO_EDGE';
      this.minFilter = options.minFilter || 'LINEAR';
      this.magFilter = options.magFilter || options.minFilter || 'LINEAR';
    }

    _createClass(Texture, [{
      key: "_compile",
      value: function _compile(gl) {
        _gl.set(this, gl);

        textureUnit.set(this, textureUnitInt++); // TODO: Cleanup comments, make the use of parameters

        var texture = gl.createTexture(); // make unit 0 the active texture uint
        // (ie, the unit all other texture commands will affect
        // if (this.image) {
        // gl.activeTexture(gl['TEXTURE' + textureUnit.get(this)]);
        // }
        // Bind it to texture unit 0' 2D bind point

        gl.bindTexture(gl.TEXTURE_2D, texture); // Set the parameters so we don't need mips and so we're not filtering
        // and we don't repeat

        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl[this.wrapS]);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl[this.wrapT]);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl[this.minFilter]);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl[this.magFilter]);
        gl.texImage2D(gl.TEXTURE_2D, 0, // mipLevel, the largest mip
        gl[this.internal], // internalFormat, format we want in the texture
        this.width, this.height, 0, // border
        gl[this.format], // srcFormat, format of data we are supplying
        gl[this.type], this.image); // gl.bindTexture(gl.TEXTURE_2D, null);

        this._compiledTexture = texture;
      }
    }, {
      key: "setSize",
      value: function setSize(width, height) {
        this.width = width;
        this.height = height;

        if (this._compiledTexture) {
          var gl = _gl.get(this);

          gl.bindTexture(gl.TEXTURE_2D, this._compiledTexture);
          gl.texImage2D(gl.TEXTURE_2D, 0, // mipLevel, the largest mip
          gl[this.internal], // internalFormat, format we want in the texture
          width, height, 0, // border
          gl[this.format], // srcFormat, format of data we are supplying
          gl[this.type], this.image);
        }
      }
    }, {
      key: "_bind",
      value: function _bind(gl) {
        var unit = textureUnit.get(this);
        gl.activeTexture(gl['TEXTURE' + unit]);
        gl.bindTexture(gl.TEXTURE_2D, this._compiledTexture);
        return textureUnit.get(this);
      }
    }]);

    return Texture;
  }();

  var FrameBuffer =
  /*#__PURE__*/
  function () {
    function FrameBuffer(width, height) {
      var _this = this;

      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      _classCallCheck(this, FrameBuffer);

      _defineProperty(this, "_compile", function (gl) {
        // Create and bind the framebuffer
        var fb = gl.createFramebuffer();
        gl.bindFramebuffer(gl.FRAMEBUFFER, fb);

        if (_this.color) {
          _this.texture._compile(gl);

          gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, _this.texture._compiledTexture, 0); // TODO: change level
        }

        if (_this.depth) {
          _this.depthTexture._compile(gl);

          gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.TEXTURE_2D, _this.depthTexture._compiledTexture, 0); // TODO: change level
        }

        if (_this.stencil) {
          _this.stencilTexture._compile(gl);

          gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.STENCIL_ATTACHMENT, gl.TEXTURE_2D, _this.stencilTexture._compiledTexture, 0); // TODO: change level
        }
        _this._compiledFrameBuffer = fb;
      });

      _defineProperty(this, "_bindFramebuffer", function (gl) {
        // gl.bindTexture(gl.TEXTURE_2D, null);
        gl.bindFramebuffer(gl.FRAMEBUFFER, _this._compiledFrameBuffer); // gl.enable(gl.DEPTH_TEST);
        // gl.clear(gl.DEPTH_BUFFER_BIT);
      });

      options = Object.assign({
        color: true,
        depth: true,
        stencil: false
      }, options);
      this.width = width;
      this.height = height;
      this.color = Boolean(options.color);
      this.depth = Boolean(options.depth);
      this.stencil = Boolean(options.stencil);
      if (this.color) this.texture = new Texture(null, width, height, options);

      if (this.depth) {
        this.depthTexture = new Texture(null, width, height, {
          internal: 'DEPTH_COMPONENT24',
          format: 'DEPTH_COMPONENT',
          type: 'UNSIGNED_INT',
          minFilter: 'NEAREST',
          magFilter: 'NEAREST'
        });
      }

      if (this.stencil) {
        // FIXME: Make stencil work
        this.stencilTexture = new Texture(null, width, height, {
          internal: 'DEPTH_STENCIL',
          format: 'DEPTH_STENCIL',
          type: 'UNSIGNED_INT',
          minFilter: 'NEAREST',
          magFilter: 'NEAREST'
        });
      }
    }

    _createClass(FrameBuffer, [{
      key: "setSize",
      value: function setSize(width, height) {
        this.width = width;
        this.height = height;
        if (this.color) this.texture.setSize(width, height);
        if (this.depth) this.depthTexture.setSize(width, height);
        if (this.stencil) this.stencilTexture.setSize(width, height);
      }
    }]);

    return FrameBuffer;
  }();

  _typedArray('Uint16', 2, function (init) {
    return function Uint16Array(data, byteOffset, length) {
      return init(this, data, byteOffset, length);
    };
  });

  var matRotY = identity_1([]);
  var matRotZ = identity_1([]);
  var up = [0, 1, 0];
  var tmpVec3 = [0, 0, 0];
  var primitiveSphere_1 = primitiveSphere;

  function primitiveSphere(radius, opt) {
    opt = opt || {};
    radius = typeof radius !== 'undefined' ? radius : 1;
    var segments = typeof opt.segments !== 'undefined' ? opt.segments : 32;
    var totalZRotationSteps = 2 + segments;
    var totalYRotationSteps = 2 * totalZRotationSteps;
    var indices = [];
    var positions = [];
    var normals = [];
    var uvs = [];

    for (var zRotationStep = 0; zRotationStep <= totalZRotationSteps; zRotationStep++) {
      var normalizedZ = zRotationStep / totalZRotationSteps;
      var angleZ = normalizedZ * Math.PI;

      for (var yRotationStep = 0; yRotationStep <= totalYRotationSteps; yRotationStep++) {
        var normalizedY = yRotationStep / totalYRotationSteps;
        var angleY = normalizedY * Math.PI * 2;
        identity_1(matRotZ);
        rotateZ_1(matRotZ, matRotZ, -angleZ);
        identity_1(matRotY);
        rotateY_1(matRotY, matRotY, angleY);
        transformMat4_1(tmpVec3, up, matRotZ);
        transformMat4_1(tmpVec3, tmpVec3, matRotY);
        scale_1$2(tmpVec3, tmpVec3, -radius);
        positions.push(tmpVec3.slice());
        normalize_1$2(tmpVec3, tmpVec3);
        normals.push(tmpVec3.slice());
        uvs.push([normalizedY, normalizedZ]);
      }

      if (zRotationStep > 0) {
        var verticesCount = positions.length;
        var firstIndex = verticesCount - 2 * (totalYRotationSteps + 1);

        for (; firstIndex + totalYRotationSteps + 2 < verticesCount; firstIndex++) {
          indices.push([firstIndex, firstIndex + 1, firstIndex + totalYRotationSteps + 1]);
          indices.push([firstIndex + totalYRotationSteps + 1, firstIndex + 1, firstIndex + totalYRotationSteps + 2]);
        }
      }
    }

    return {
      cells: indices,
      positions: positions,
      normals: normals,
      uvs: uvs
    };
  }

  var Sphere =
  /*#__PURE__*/
  function (_Mesh) {
    _inherits(Sphere, _Mesh);

    _createClass(Sphere, null, [{
      key: "Geometry",
      value: function Geometry$$1(_ref) {
        var _ref$radius = _ref.radius,
            radius = _ref$radius === void 0 ? 1 : _ref$radius,
            _ref$segments = _ref.segments,
            segments = _ref$segments === void 0 ? 16 : _ref$segments;
        var data = primitiveSphere_1(radius, {
          segments: segments
        });
        var geometry = new Geometry();
        geometry.setIndex(new Attribute(new Uint16Array(Attribute.inlineArray(data.cells)), 1));
        geometry.setAttribute('position', new Attribute(new Float32Array(Attribute.inlineArray(data.positions)), 3));
        geometry.setAttribute('normal', new Attribute(new Float32Array(Attribute.inlineArray(data.normals)), 3));
        geometry.setAttribute('uv', new Attribute(new Float32Array(Attribute.inlineArray(data.uvs)), 2));
        return geometry;
      }
    }]);

    function Sphere() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, Sphere);

      return _possibleConstructorReturn(this, _getPrototypeOf(Sphere).call(this, Sphere.Geometry(options), {
        shader: options.shader
      }));
    }

    return Sphere;
  }(Mesh);

  // 3x3 plane:
  //
  //  0   1   2   3
  //  4   5   6   7
  //  8   9  10  11
  // 12  13  14  15
  function createPlane(sx, sy, nx, ny, options) {
    sx = sx || 1;
    sy = sy || 1;
    nx = nx || 1;
    ny = ny || 1;
    var quads = options && options.quads ? options.quads : false;
    var positions = [];
    var uvs = [];
    var normals = [];
    var cells = [];

    for (var iy = 0; iy <= ny; iy++) {
      for (var ix = 0; ix <= nx; ix++) {
        var u = ix / nx;
        var v = iy / ny;
        var x = -sx / 2 + u * sx; // starts on the left

        var y = sy / 2 - v * sy; // starts at the top

        positions.push([x, y, 0]);
        uvs.push([u, 1.0 - v]);
        normals.push([0, 0, 1]);

        if (iy < ny && ix < nx) {
          if (quads) {
            cells.push([iy * (nx + 1) + ix, (iy + 1) * (nx + 1) + ix, (iy + 1) * (nx + 1) + ix + 1, iy * (nx + 1) + ix + 1]);
          } else {
            cells.push([iy * (nx + 1) + ix, (iy + 1) * (nx + 1) + ix + 1, iy * (nx + 1) + ix + 1]);
            cells.push([(iy + 1) * (nx + 1) + ix + 1, iy * (nx + 1) + ix, (iy + 1) * (nx + 1) + ix]);
          }
        }
      }
    }

    return {
      positions: positions,
      normals: normals,
      uvs: uvs,
      cells: cells
    };
  }

  var primitivePlane = createPlane;

  var Plane =
  /*#__PURE__*/
  function (_Mesh) {
    _inherits(Plane, _Mesh);

    _createClass(Plane, null, [{
      key: "Geometry",
      value: function Geometry$$1(_ref) {
        var _ref$width = _ref.width,
            width = _ref$width === void 0 ? 1 : _ref$width,
            _ref$height = _ref.height,
            height = _ref$height === void 0 ? 1 : _ref$height,
            _ref$widthSegments = _ref.widthSegments,
            widthSegments = _ref$widthSegments === void 0 ? 1 : _ref$widthSegments,
            _ref$heightSegments = _ref.heightSegments,
            heightSegments = _ref$heightSegments === void 0 ? 1 : _ref$heightSegments;
        var data = primitivePlane(width, height, widthSegments, heightSegments);
        var geometry = new Geometry();
        geometry.setIndex(new Attribute(new Uint16Array(Attribute.inlineArray(data.cells)), 1));
        geometry.setAttribute('position', new Attribute(new Float32Array(Attribute.inlineArray(data.positions)), 3));
        geometry.setAttribute('normal', new Attribute(new Float32Array(Attribute.inlineArray(data.normals)), 3));
        geometry.setAttribute('uv', new Attribute(new Float32Array(Attribute.inlineArray(data.uvs)), 2));
        return geometry;
      }
    }]);

    function Plane() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, Plane);

      return _possibleConstructorReturn(this, _getPrototypeOf(Plane).call(this, Plane.Geometry(options), {
        shader: options.shader
      }));
    }

    return Plane;
  }(Mesh);

  var FlatMaterial =
  /*#__PURE__*/
  function (_Material) {
    _inherits(FlatMaterial, _Material);

    function FlatMaterial() {
      var _this;

      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, FlatMaterial);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(FlatMaterial).call(this, {
        type: 'flat',
        defines: Object.assign({
          USE_COLOR: true,
          USE_MAP: Boolean(options.map)
        }, options.defines || {}),
        alias: {
          map: 'map'
        },
        modifiers: options.modifiers || {}
      }));
      _this.map = options.map;

      _this.initializeUniforms();

      return _this;
    }

    return FlatMaterial;
  }(Material);

  var LambertMaterial =
  /*#__PURE__*/
  function (_Material) {
    _inherits(LambertMaterial, _Material);

    function LambertMaterial() {
      var _this;

      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, LambertMaterial);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(LambertMaterial).call(this, {
        type: 'lambert',
        defines: Object.assign({
          USE_COLOR: true,
          USE_MAP: Boolean(options.map)
        }, options.defines || {}),
        alias: {
          map: 'map',
          diffuse: 'color'
        }
      }));
      _this.color = options.color || [0, 0, 0];
      _this.map = options.map;
      _this.state = {
        lights: true
      };

      _this.initializeUniforms();

      return _this;
    }

    return LambertMaterial;
  }(Material);

  var Light =
  /*#__PURE__*/
  function (_Object3D) {
    _inherits(Light, _Object3D);

    function Light() {
      var _this;

      _classCallCheck(this, Light);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(Light).call(this));

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "isLight", true);

      _this.color = [1, 1, 1];
      _this.intensity = 1;
      return _this;
    }

    return Light;
  }(Object3D);

  var DirectionalLight =
  /*#__PURE__*/
  function (_Light) {
    _inherits(DirectionalLight, _Light);

    function DirectionalLight() {
      var _this;

      _classCallCheck(this, DirectionalLight);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(DirectionalLight).call(this));

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "type", 'DirectionalLight');

      _this.shadowCamera = new Camera.ortho(1, 1);
      _this.shadowCamera.parent = _assertThisInitialized(_assertThisInitialized(_this));
      _this.shadowMap = new FrameBuffer(null, null, {
        color: true,
        depth: true
      });
      window.shadowMap = _this.shadowMap;
      return _this;
    }

    return DirectionalLight;
  }(Light);

  exports.shaders = shaders;
  exports.Shader = Shader;
  exports.Material = Material;
  exports.Renderer = Renderer;
  exports.Program = Program;
  exports.Attribute = Attribute;
  exports.Object3D = Object3D;
  exports.Mesh = Mesh;
  exports.Scene = Scene;
  exports.Camera = Camera;
  exports.Texture = Texture;
  exports.FrameBuffer = FrameBuffer;
  exports.UniformStack = UniformStack;
  exports.Sphere = Sphere;
  exports.Plane = Plane;
  exports.FlatMaterial = FlatMaterial;
  exports.LambertMaterial = LambertMaterial;
  exports.DirectionalLight = DirectionalLight;
  exports.Vec3 = Vec3;
  exports.Mat4 = Mat4;
  exports.Quat = Quat;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
