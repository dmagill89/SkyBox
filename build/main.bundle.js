/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _SkyBox = __webpack_require__(1);
	
	var _SkyBox2 = _interopRequireDefault(_SkyBox);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var container = document.getElementById('container');
	
	var skyBox = new _SkyBox2.default(container);
	skyBox.animate();

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var SkyBox = function () {
	  function SkyBox() /*container*/{
	    _classCallCheck(this, SkyBox);
	
	    this.element = document.body;
	    this.camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 10000);
	    this.camera.position.set(0, 10, 30);
	    this.scene = new THREE.Scene();
	    this.light = new THREE.DirectionalLight(0xaaaae5, 2);
	    this.light.position.set(15, 16, -50);
	    this.scene.add(this.light);
	
	    this.loadSkyBox();
	
	    this.renderer = new THREE.WebGLRenderer({
	      antialias: true
	    });
	
	    this.renderer.setSize(window.innerWidth, window.innerHeight);
	    this.element.appendChild(this.renderer.domElement);
	
	    this.controls = new THREE.OrbitControls(this.camera, this.renderer.domElement);
	    this.controls.target = new THREE.Vector3(0, 0, 0);
	  }
	
	  _createClass(SkyBox, [{
	    key: 'createSide',
	    value: function createSide(path) {
	      var texture = THREE.ImageUtils.loadTexture(path),
	          material = new THREE.MeshBasicMaterial({
	        map: texture,
	        overdraw: 0.5
	      });
	
	      return material;
	    }
	  }, {
	    key: 'loadSkyBox',
	    value: function loadSkyBox() {
	      var materials = [this.createSide('../media/right.png'), this.createSide('../media/left.png'), this.createSide('../media/top.png'), this.createSide('../media/bottom.png'), this.createSide('../media/back.png'), this.createSide('../media/front.png')];
	
	      var mesh = new THREE.Mesh(new THREE.BoxGeometry(100, 100, 100, 1, 1, 1), new THREE.MeshFaceMaterial(materials));
	      mesh.scale.set(-1, 1, 1);
	      this.scene.add(mesh);
	    }
	  }, {
	    key: 'animate',
	    value: function animate() {
	      if (this.controls != null) {
	        this.controls.update;
	      }
	
	      this.renderer.render(this.scene, this.camera);
	      requestAnimationFrame(this.animate.bind(this));
	    }
	  }]);
	
	  return SkyBox;
	}();
	
	exports.default = SkyBox;

/***/ }
/******/ ]);
//# sourceMappingURL=main.bundle.js.map