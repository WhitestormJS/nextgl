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

/***/ "./examples/src/scene.js":
/*!*******************************!*\
  !*** ./examples/src/scene.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const renderer = new NEXT.Renderer();\nrenderer.setSize(window.innerWidth, window.innerHeight);\ndocument.body.appendChild(renderer.canvas);\n\nNEXT.Shader.collection = NEXT.shaders;\n\nconst scene = new NEXT.Scene();\n\nconst camera = new NEXT.Camera({\n  type: 'perspective',\n  aspect: window.innerWidth / window.innerHeight\n});\n\nconst img = new Image();\nimg.src = './assets/texture.png';\n\n// img.onload = () => {\n//   const material = new NEXT.LambertMaterial({\n//     map: new NEXT.Texture(img)\n//   });\n//\n//   const sphere1 = new NEXT.Sphere({\n//     radius: 1,\n//     shader: material\n//   });\n//\n//   vec3.set(sphere1.position, -4, 0, -10);\n//   scene.add(sphere1);\n// };\n\n// setTimeout(() => {\n  const material = new NEXT.LambertMaterial({\n    // map: new NEXT.Texture(img)\n  });\n\n  const sphere1 = new NEXT.Sphere({\n    radius: 1,\n    shader: material\n  });\n\n  vec3.set(sphere1.position, -4, 0, -10);\n  scene.add(sphere1);\n// }, 0);\n\n\n\n// const sphere2 = new NEXT.Sphere({\n//   radius: 1,\n//   shader: material\n// });\n//\n// vec3.set(sphere2.position, 0, 10, -10);\n// sphere1.add(sphere2);\n\n// const plane = new NEXT.Plane({\n//   width: 10,\n//   height: 10,\n//   shader: material\n// });\n// scene.add(plane);\n//\n// vec3.set(plane.position, -4, -4, -10);\n// quat.rotateX(plane.quaternion, plane.quaternion, -Math.PI / 2);\n\nrenderer.setScene(scene);\nrenderer.render(camera);\n\nwindow.renderer = renderer;\n\n// const sphereGeo = NEXT.Sphere.Geometry({\n//   radius: 1\n// });\n//\n// const mesh = new NEXT.Mesh(sphereGeo, {\n//   shader: NEXT.shaders.default\n// });\n\n// scene.add(mesh);\n\n\n//# sourceURL=webpack:///./examples/src/scene.js?");

/***/ })

/******/ });