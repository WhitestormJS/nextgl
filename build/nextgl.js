(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (factory((global.NEXT = {})));
}(this, (function (exports) { 'use strict';

  var init_pars = "precision mediump float;\n#define GLSLIFY 1\nin vec4 position;\n\nuniform mat4 projectionMatrix;\nuniform mat4 modelMatrix;\nuniform mat4 viewMatrix;\n"; // eslint-disable-line

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

  var normal = "#define GLSLIFY 1\nv_normal = normal;\n"; // eslint-disable-line

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

  var init_pars$2 = "precision mediump float;\n#define GLSLIFY 1\n\n#ifdef USE_COLOR\n  uniform vec3 u_diffuse;\n#endif\n"; // eslint-disable-line

  var init_pars$3 = /*#__PURE__*/Object.freeze({
    default: init_pars$2
  });

  var init = "#define GLSLIFY 1\nvec3 color;\n\n#ifdef USE_COLOR\n  color = u_diffuse;\n#endif\n"; // eslint-disable-line

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

  var lights_pars = "#define GLSLIFY 1\n"; // eslint-disable-line

  var lights_pars$1 = /*#__PURE__*/Object.freeze({
    default: lights_pars
  });

  var lights = "#define GLSLIFY 1\nfloat lightness = dot(dirLight.xyz, normal);\n\noutColor = vec4(color * lightness, 1);\n"; // eslint-disable-line

  var lights$1 = /*#__PURE__*/Object.freeze({
    default: lights
  });

  var directional_lights_pars = "#define GLSLIFY 1\n// uniform \n\nstruct DirectionalLight\n{\n  float direction;\n};\n"; // eslint-disable-line

  var directional_lights_pars$1 = /*#__PURE__*/Object.freeze({
    default: directional_lights_pars
  });

  var directional_lights = "#define GLSLIFY 1\n"; // eslint-disable-line

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

  var flat = "#define GLSLIFY 1\n[v init_pars]\n[v normal_pars]\n[v uv_pars]\n\n[v pars]\n\nvoid main() {\n  [v normal]\n  [v uv]\n\n  [v main]\n\n  gl_Position = projectionMatrix * viewMatrix * modelMatrix * position;\n}\n"; // eslint-disable-line

  var flat$1 = /*#__PURE__*/Object.freeze({
    default: flat
  });

  var flat$2 = "precision mediump float;\n#define GLSLIFY 1\nout vec4 outColor;\n\n[f init_pars]\n[f normal_pars]\n[f uv_pars]\n[f map_pars]\n\n[f pars]\n\nvoid main() {\n  [f init]\n  [f normal]\n  [f map]\n\n  [f main]\n\n  outColor = vec4(color, 1.0);\n}\n"; // eslint-disable-line

  var flat$3 = /*#__PURE__*/Object.freeze({
    default: flat$2
  });

  var lambert = "#define GLSLIFY 1\n[v init_pars]\n[v normal_pars]\n[v uv_pars]\n\nvoid main() {\n  [v normal]\n  [v uv]\n\n  gl_Position = projectionMatrix * viewMatrix * modelMatrix * position;\n}\n"; // eslint-disable-line

  var lambert$1 = /*#__PURE__*/Object.freeze({
    default: lambert
  });

  var lambert$2 = "precision mediump float;\n#define GLSLIFY 1\nout vec4 outColor;\n\n[f init_pars]\n[f normal_pars]\n[f uv_pars]\n[f map_pars]\n[f lambert_light_pars]\n\nvoid main() {\n  [f init]\n  [f normal]\n  [f map]\n  [f lambert_light]\n\n  outColor = vec4(color, 1.0);\n}\n"; // eslint-disable-line

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

  function _superPropBase(object, property) {
    while (!Object.prototype.hasOwnProperty.call(object, property)) {
      object = _getPrototypeOf(object);
      if (object === null) break;
    }

    return object;
  }

  function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
      _get = Reflect.get;
    } else {
      _get = function _get(target, property, receiver) {
        var base = _superPropBase(target, property);

        if (!base) return;
        var desc = Object.getOwnPropertyDescriptor(base, property);

        if (desc.get) {
          return desc.get.call(receiver);
        }

        return desc.value;
      };
    }

    return _get(target, property, receiver || target);
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
      this._fragmentShader = new Shader(shader.frag, options.modifiers).define(options.defines); // TODO: Make uniforms clone tool

      this.uniforms = Object.assign({}, shader.uniforms);
      Object.defineProperties(this.uniforms, _objectSpread({}, options.alias.reduce(function (o, v) {
        return Object.assign(o, _defineProperty({}, v, {
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

  var f$4 = function (C) {
    return new PromiseCapability(C);
  };

  var _newPromiseCapability = {
  	f: f$4
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
  var USE_NATIVE = !!function () {
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


  if (!USE_NATIVE) {
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

  _export(_export.G + _export.W + _export.F * !USE_NATIVE, {
    Promise: $Promise
  });

  _setToStringTag($Promise, PROMISE);

  _setSpecies(PROMISE);

  Wrapper = _core[PROMISE]; // statics

  _export(_export.S + _export.F * !USE_NATIVE, PROMISE, {
    // 25.4.4.5 Promise.reject(r)
    reject: function reject(r) {
      var capability = newPromiseCapability(this);
      var $$reject = capability.reject;
      $$reject(r);
      return capability.promise;
    }
  });
  _export(_export.S + _export.F * (_library || !USE_NATIVE), PROMISE, {
    // 25.4.4.6 Promise.resolve(x)
    resolve: function resolve(x) {
      return _promiseResolve(_library && this === Wrapper ? $Promise : this, x);
    }
  });
  _export(_export.S + _export.F * !(USE_NATIVE && _iterDetect(function (iter) {
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

  // 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)


  var hiddenKeys = _enumBugKeys.concat('length', 'prototype');

  var f$5 = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
    return _objectKeysInternal(O, hiddenKeys);
  };

  var _objectGopn = {
  	f: f$5
  };

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

  var dP$1 = _objectDp.f;



















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
      if (_descriptors) dP$1(C.prototype, 'size', {
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

  var LightsExtension = {
    init: function init(self) {
      self.LIGHTS = [];
    },
    object: function object(_object, self) {
      console.log(_object);
      if (!_object.isLight) return;
      self.LIGHTS.push(_object);
    },
    render: function render(gl, self) {
      self.LIGHTS.forEach(function (light) {// console.log(light);
        // gl.
      });
    }
  };

  var _locals = new WeakMap();

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
        var _this3 = this;

        var camera = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        var frameBuffer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        // eslint-disable-line
        var gl = this.context;

        var self = _locals.get(this);

        var DRAW_CONSTANTS = self.DRAW_CONSTANTS,
            STATE_ASYNC = self.STATE_ASYNC;

        if (STATE_ASYNC) {
          self.RENDER_REQUESTED_CAMERA = camera;
          return;
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

        var _loop2 = function _loop2(i, l) {
          var program = _this3._programs[i];
          if (!program.enabled) return "continue";
          var uniforms = Object.entries(Object.getOwnPropertyDescriptors(program.uniforms)); // Tell it to use our program (pair of shaders)

          gl.useProgram(program._compiledProgram);

          program._bind(gl);

          var hasPromises = false;

          var _loop3 = function _loop3(k, kl) {
            var _uniforms$k2 = _slicedToArray(uniforms[k], 2),
                uniformName = _uniforms$k2[0],
                descriptor = _uniforms$k2[1];

            var value = descriptor.value || descriptor.get();
            if (!value) return "continue";

            if (value instanceof Promise) {
              hasPromises = true;
              self.STATE_ASYNC = true;
              self.PROMISES.push(value);
              value.then(function (data) {
                if (uniformName in program.uniforms) program.uniforms[uniformName] = data;else descriptor.set(data);
              });
              return "continue";
            }

            if (value.isTexture) {
              if (!value._compiledTexture) value._compile(gl);

              var textureUnit = value._bind(gl);

              gl.uniform1i(gl.getUniformLocation(program._compiledProgram, uniformName), textureUnit);
              return "continue";
            }

            var isMatrix = uniformName.indexOf('$') === 0;

            if (isMatrix) {
              gl["uniformMatrix".concat(value.length === 4 ? 2 : value.length === 9 ? 3 : 4, "fv")](gl.getUniformLocation(program._compiledProgram, uniformName.slice(1)), false, value);
            } else {
              gl[Array.isArray(value) ? "uniform".concat(value.length, "fv") : 'uniform1f'](gl.getUniformLocation(program._compiledProgram, uniformName), value);
            }
          };

          for (var k = 0, kl = uniforms.length; k < kl; k++) {
            var _ret2 = _loop3(k, kl);

            if (_ret2 === "continue") continue;
          }

          if (hasPromises) _this3._renderWhenSync();

          if (camera) {
            gl.uniformMatrix4fv(gl.getUniformLocation(program._compiledProgram, 'viewMatrix'), false, glMat4_6([], camera.matrixWorld));
            gl.uniformMatrix4fv(gl.getUniformLocation(program._compiledProgram, 'projectionMatrix'), false, camera.projectionMatrix);
          }

          for (var _i = 0, _l = _this3.extensions.length; _i < _l; _i++) {
            _this3.extensions[_i].render.call(_this3, gl, self);
          }

          if (program.index) gl.drawElements(DRAW_CONSTANTS[program.draw], program.count, gl.UNSIGNED_SHORT, 0);else gl.drawArrays(DRAW_CONSTANTS[program.draw], 0, program.count);
        };

        for (var i = 0, l = this._programs.length; i < l; i++) {
          var _ret = _loop2(i, l);

          if (_ret === "continue") continue;
        }
      }
    }]);

    return Renderer;
  }();

  _defineProperty(Renderer, "Lights", LightsExtension);

  _defineProperty(Renderer, "defaultExtensions", [LightsExtension]);

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
        var vertexShader = _this.vertexShader || Program.createShader(gl, 'vertex', _this.vert);
        var fragmentShader = _this.fragmentShader || Program.createShader(gl, 'fragment', _this.frag);
        var program = gl.createProgram();
        gl.attachShader(program, vertexShader);
        gl.attachShader(program, fragmentShader);
        gl.linkProgram(program);
        var success = gl.getProgramParameter(program, gl.LINK_STATUS);

        var vao = _geometryRefs.get(_this);

        if (!vao._compiledVAO) vao._compile(gl);

        vao._bind(gl); // // index attribute


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

        if (success) return program; // TODO: Cleanup error logging + add troubleshooting

        console.log(gl.getProgramInfoLog(program));
        gl.deleteProgram(program);
      });

      _defineProperty(this, "_bind", function (gl) {
        _geometryRefs.get(_this)._bind(gl);
      });

      var _Object$assign = Object.assign({
        vert: vertDefault,
        frag: fragDefault,
        vertexShader: null,
        fragmentShader: null
      }, options),
          vert = _Object$assign.vert,
          frag = _Object$assign.frag,
          draw = _Object$assign.draw,
          count = _Object$assign.count,
          _vertexShader = _Object$assign.vertexShader,
          _fragmentShader = _Object$assign.fragmentShader;

      var _geometry = geometry || new Geometry();

      _geometryRefs.set(this, _geometry);

      this.vertexShader = _vertexShader;
      this.fragmentShader = _fragmentShader;
      this.vert = _vertexShader ? 'linked shader is used' : vert;
      this.frag = _fragmentShader ? 'linked shader is used' : frag;
      this.draw = draw || 'triangles';
      this.uniforms = {};
      this.count = count || _geometry.getCount() || 3;
      this.enabled = true;
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
    var success = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
    if (success) return shader; // TODO: Cleanup error logging + add troubleshooting

    console.warn(gl.getShaderInfoLog(shader));
    console.warn(source.split('\n').map(function (line, i) {
      return "".concat(i < 9 ? '0' : '').concat(i + 1, ":  ").concat(line);
    }).join('\n'));
    gl.deleteShader(shader);
  });

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

      _this.matrix = glMat4_4([]);
      _this.matrixWorld = glMat4_4([]);
      _this.position = [0, 0, 0];
      _this.scale = [1, 1, 1];
      _this.quaternion = [0, 0, 0, 1];
      _this.children = [];
      _this.matrixAutoUpdate = true;
      _this.matrixWorldAutoUpdate = true;
      return _this;
    }

    _createClass(Object3D, [{
      key: "updateMatrix",
      value: function updateMatrix() {
        glMat4_17(glMat4_18(this.matrix, this.scale), this.quaternion, this.position);
      }
    }, {
      key: "updateMatrixWorld",
      value: function updateMatrixWorld() {
        // Consider to be called after updateMatrix()
        if (!this.parent) {
          glMat4_3(this.matrixWorld, this.matrix);
          return;
        }

        glMat4_9(this.matrixWorld, this.matrix, this.parent.matrix);
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
        frag: options.shader.frag
      }, geometry); // console.log(options.shader.uniforms);

      _this.program.uniforms = Object.assign(options.shader.uniforms || {}, {
        $modelMatrix: _this.matrixWorld
      });
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

    function Camera() {
      var _this;

      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, Camera);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(Camera).call(this));
      options = Object.assign({
        fovy: Math.PI / 2,
        aspect: window.innerWidth / window.innerHeight,
        near: 1,
        far: 100
      }, options);
      _this.projectionMatrix = glMat4_25([], options.fovy, options.aspect, options.near, options.far);
      return _this;
    }

    return Camera;
  }(Object3D);

  var textureUnitInt = 0;
  var textureUnit = new WeakMap();
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
      _classCallCheck(this, Texture);

      _defineProperty(this, "isTexture", true);

      this.image = image;
      this.width = width || 256;
      this.height = height || 256;
    }

    _createClass(Texture, [{
      key: "_compile",
      value: function _compile(gl) {
        textureUnit.set(this, textureUnitInt++); // TODO: Cleanup comments, make the use of parameters

        var texture = gl.createTexture(); // make unit 0 the active texture uint
        // (ie, the unit all other texture commands will affect

        if (this.image) gl.activeTexture(gl['TEXTURE' + textureUnit.get(this)]); // Bind it to texture unit 0' 2D bind point

        gl.bindTexture(gl.TEXTURE_2D, texture); // Set the parameters so we don't need mips and so we're not filtering
        // and we don't repeat

        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR); // Upload the image into the texture.

        var mipLevel = 0; // the largest mip

        var internalFormat = gl.RGBA; // format we want in the texture

        var srcFormat = gl.RGBA; // format of data we are supplying

        var srcType = gl.UNSIGNED_BYTE; // type of data we are supplying

        gl.texImage2D(gl.TEXTURE_2D, mipLevel, internalFormat, this.width, this.height, 0, // border
        srcFormat, srcType, this.image);
        this._compiledTexture = texture;
      }
    }, {
      key: "_bind",
      value: function _bind(gl) {
        gl.activeTexture(gl['TEXTURE' + textureUnit.get(this)]);
        gl.bindTexture(gl.TEXTURE_2D, this._compiledTexture);
        return textureUnit.get(this);
      }
    }]);

    return Texture;
  }();

  var FrameBuffer =
  /*#__PURE__*/
  function (_Texture) {
    _inherits(FrameBuffer, _Texture);

    function FrameBuffer(width, height) {
      var _this;

      _classCallCheck(this, FrameBuffer);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(FrameBuffer).call(this, null, width, height));

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_compile", function (gl) {
        _get(_getPrototypeOf(FrameBuffer.prototype), "_compile", _assertThisInitialized(_this)).call(_assertThisInitialized(_this), gl); // Create and bind the framebuffer


        var fb = gl.createFramebuffer();
        gl.bindFramebuffer(gl.FRAMEBUFFER, fb); // attach the texture as the first color attachment

        var attachmentPoint = gl.COLOR_ATTACHMENT0;
        gl.framebufferTexture2D(gl.FRAMEBUFFER, attachmentPoint, gl.TEXTURE_2D, _this._compiledTexture, 0); // TODO: change level

        _this._compiledFrameBuffer = fb;
      });

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_bindFramebuffer", function (gl) {
        gl.bindFramebuffer(gl.FRAMEBUFFER, _this._compiledFrameBuffer);
      });

      return _this;
    }

    return FrameBuffer;
  }(Texture);

  var TYPED = _uid('typed_array');
  var VIEW = _uid('view');
  var ABV = !!(_global.ArrayBuffer && _global.DataView);
  var CONSTR = ABV;
  var i$1 = 0;
  var l = 9;
  var Typed;
  var TypedArrayConstructors = 'Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array'.split(',');

  while (i$1 < l) {
    if (Typed = _global[TypedArrayConstructors[i$1++]]) {
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

  _typedArray('Uint16', 2, function (init) {
    return function Uint16Array(data, byteOffset, length) {
      return init(this, data, byteOffset, length);
    };
  });

  var scale_1$1 = scale$1;
  /**
   * Scales a vec3 by a scalar number
   *
   * @param {vec3} out the receiving vector
   * @param {vec3} a the vector to scale
   * @param {Number} b amount to scale the vector by
   * @returns {vec3} out
   */

  function scale$1(out, a, b) {
    out[0] = a[0] * b;
    out[1] = a[1] * b;
    out[2] = a[2] * b;
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

  var normalize_1 = normalize;
  /**
   * Normalize a vec3
   *
   * @param {vec3} out the receiving vector
   * @param {vec3} a vector to normalize
   * @returns {vec3} out
   */

  function normalize(out, a) {
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
        scale_1$1(tmpVec3, tmpVec3, -radius);
        positions.push(tmpVec3.slice());
        normalize_1(tmpVec3, tmpVec3);
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
        alias: ['map'],
        modifiers: options.modifiers || {}
      }));
      _this.map = options.map;
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
        defines: {
          USE_COLOR: true,
          USE_MAP: Boolean(options.map)
        },
        alias: ['map']
      }));
      _this.map = options.map;
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

      _this.color = [];
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
  exports.Sphere = Sphere;
  exports.Plane = Plane;
  exports.FlatMaterial = FlatMaterial;
  exports.LambertMaterial = LambertMaterial;
  exports.DirectionalLight = DirectionalLight;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
