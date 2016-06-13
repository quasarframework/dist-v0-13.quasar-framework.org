module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(59);


/***/ },

/***/ 59:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar html = __webpack_require__(60);\n\nmodule.exports = {\n  template: html,\n  ready: function() {\n    quasar.current.layout.vm.$data.title = 'Image Gallery';\n  },\n  data: {\n    gallery: [\n      'assets/mountains.jpg',\n      'assets/parallax1.jpg',\n      'assets/parallax2.jpg',\n      'assets/parallax1.jpg',\n      'assets/parallax2.jpg',\n      'assets/mountains.jpg'\n    ],\n    slider: [\n      'assets/mountains.jpg',\n      'assets/parallax1.jpg',\n      'assets/parallax2.jpg',\n      'assets/parallax1.jpg',\n      'assets/parallax2.jpg',\n      'assets/mountains.jpg',\n      'assets/mountains.jpg',\n      'assets/parallax1.jpg',\n      'assets/parallax2.jpg',\n      'assets/parallax1.jpg',\n      'assets/parallax2.jpg',\n      'assets/mountains.jpg',\n      'assets/parallax1.jpg',\n      'assets/parallax2.jpg',\n      'assets/parallax1.jpg',\n      'assets/parallax2.jpg',\n      'assets/mountains.jpg',\n      'assets/parallax1.jpg',\n      'assets/parallax2.jpg',\n      'assets/parallax1.jpg',\n      'assets/parallax2.jpg',\n    ]\n  }\n};\n\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvaW1hZ2UtZ2FsbGVyeS9zY3JpcHQuaW1hZ2UtZ2FsbGVyeS5qcz9hMGE5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6IjU5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgaHRtbCA9IHJlcXVpcmUoJ3JhdyEuL3ZpZXcuaW1hZ2UtZ2FsbGVyeS5odG1sJyk7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICB0ZW1wbGF0ZTogaHRtbCxcbiAgcmVhZHk6IGZ1bmN0aW9uKCkge1xuICAgIHF1YXNhci5jdXJyZW50LmxheW91dC52bS4kZGF0YS50aXRsZSA9ICdJbWFnZSBHYWxsZXJ5JztcbiAgfSxcbiAgZGF0YToge1xuICAgIGdhbGxlcnk6IFtcbiAgICAgICdhc3NldHMvbW91bnRhaW5zLmpwZycsXG4gICAgICAnYXNzZXRzL3BhcmFsbGF4MS5qcGcnLFxuICAgICAgJ2Fzc2V0cy9wYXJhbGxheDIuanBnJyxcbiAgICAgICdhc3NldHMvcGFyYWxsYXgxLmpwZycsXG4gICAgICAnYXNzZXRzL3BhcmFsbGF4Mi5qcGcnLFxuICAgICAgJ2Fzc2V0cy9tb3VudGFpbnMuanBnJ1xuICAgIF0sXG4gICAgc2xpZGVyOiBbXG4gICAgICAnYXNzZXRzL21vdW50YWlucy5qcGcnLFxuICAgICAgJ2Fzc2V0cy9wYXJhbGxheDEuanBnJyxcbiAgICAgICdhc3NldHMvcGFyYWxsYXgyLmpwZycsXG4gICAgICAnYXNzZXRzL3BhcmFsbGF4MS5qcGcnLFxuICAgICAgJ2Fzc2V0cy9wYXJhbGxheDIuanBnJyxcbiAgICAgICdhc3NldHMvbW91bnRhaW5zLmpwZycsXG4gICAgICAnYXNzZXRzL21vdW50YWlucy5qcGcnLFxuICAgICAgJ2Fzc2V0cy9wYXJhbGxheDEuanBnJyxcbiAgICAgICdhc3NldHMvcGFyYWxsYXgyLmpwZycsXG4gICAgICAnYXNzZXRzL3BhcmFsbGF4MS5qcGcnLFxuICAgICAgJ2Fzc2V0cy9wYXJhbGxheDIuanBnJyxcbiAgICAgICdhc3NldHMvbW91bnRhaW5zLmpwZycsXG4gICAgICAnYXNzZXRzL3BhcmFsbGF4MS5qcGcnLFxuICAgICAgJ2Fzc2V0cy9wYXJhbGxheDIuanBnJyxcbiAgICAgICdhc3NldHMvcGFyYWxsYXgxLmpwZycsXG4gICAgICAnYXNzZXRzL3BhcmFsbGF4Mi5qcGcnLFxuICAgICAgJ2Fzc2V0cy9tb3VudGFpbnMuanBnJyxcbiAgICAgICdhc3NldHMvcGFyYWxsYXgxLmpwZycsXG4gICAgICAnYXNzZXRzL3BhcmFsbGF4Mi5qcGcnLFxuICAgICAgJ2Fzc2V0cy9wYXJhbGxheDEuanBnJyxcbiAgICAgICdhc3NldHMvcGFyYWxsYXgyLmpwZycsXG4gICAgXVxuICB9XG59O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9wYWdlcy9pbWFnZS1nYWxsZXJ5L3NjcmlwdC5pbWFnZS1nYWxsZXJ5LmpzXG4gKiogbW9kdWxlIGlkID0gNTlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMjlcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9");

/***/ },

/***/ 60:
/***/ function(module, exports) {

	eval("module.exports = \"<h5>Gallery</h5>\\n<gallery :src=\\\"gallery\\\"></gallery>\\n\\n<h5>Gallery Slider</h5>\\n<gallery-slider :src=\\\"slider\\\"></gallery>\\n\"\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvaW1hZ2UtZ2FsbGVyeS92aWV3LmltYWdlLWdhbGxlcnkuaHRtbD8yMGZjIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjYwLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIjxoNT5HYWxsZXJ5PC9oNT5cXG48Z2FsbGVyeSA6c3JjPVxcXCJnYWxsZXJ5XFxcIj48L2dhbGxlcnk+XFxuXFxuPGg1PkdhbGxlcnkgU2xpZGVyPC9oNT5cXG48Z2FsbGVyeS1zbGlkZXIgOnNyYz1cXFwic2xpZGVyXFxcIj48L2dhbGxlcnk+XFxuXCJcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yYXctbG9hZGVyIS4vc3JjL3BhZ2VzL2ltYWdlLWdhbGxlcnkvdmlldy5pbWFnZS1nYWxsZXJ5Lmh0bWxcbiAqKiBtb2R1bGUgaWQgPSA2MFxuICoqIG1vZHVsZSBjaHVua3MgPSAyOVxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ }

/******/ });