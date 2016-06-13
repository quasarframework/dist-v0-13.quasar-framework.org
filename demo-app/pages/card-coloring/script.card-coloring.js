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

	module.exports = __webpack_require__(25);


/***/ },

/***/ 25:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar html = __webpack_require__(26);\n\nmodule.exports = {\n  template: html,\n  ready: function() {\n    quasar.current.layout.vm.$data.title = 'Coloring Cards';\n  }\n};\n\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvY2FyZC1jb2xvcmluZy9zY3JpcHQuY2FyZC1jb2xvcmluZy5qcz83NGJiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIyNS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIGh0bWwgPSByZXF1aXJlKCdyYXchLi92aWV3LmNhcmQtY29sb3JpbmcuaHRtbCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgdGVtcGxhdGU6IGh0bWwsXG4gIHJlYWR5OiBmdW5jdGlvbigpIHtcbiAgICBxdWFzYXIuY3VycmVudC5sYXlvdXQudm0uJGRhdGEudGl0bGUgPSAnQ29sb3JpbmcgQ2FyZHMnO1xuICB9XG59O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9wYWdlcy9jYXJkLWNvbG9yaW5nL3NjcmlwdC5jYXJkLWNvbG9yaW5nLmpzXG4gKiogbW9kdWxlIGlkID0gMjVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMTJcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9");

/***/ },

/***/ 26:
/***/ function(module, exports) {

	eval("module.exports = \"<div class=\\\"card\\\">\\n  <div class=\\\"card-title bg-primary text-white\\\">\\n    Colored Card Title\\n  </div>\\n  <div class=\\\"card-content card-force-top-padding\\\">\\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor\\n    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud\\n    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\\n  </div>\\n</div>\\n\\n<div class=\\\"card bg-teal text-white\\\">\\n  <div class=\\\"card-title\\\">\\n    Background Colored Card\\n  </div>\\n  <div class=\\\"card-content\\\">\\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor\\n    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud\\n    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\\n  </div>\\n</div>\\n\"\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvY2FyZC1jb2xvcmluZy92aWV3LmNhcmQtY29sb3JpbmcuaHRtbD9lZGRkIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjI2LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcImNhcmRcXFwiPlxcbiAgPGRpdiBjbGFzcz1cXFwiY2FyZC10aXRsZSBiZy1wcmltYXJ5IHRleHQtd2hpdGVcXFwiPlxcbiAgICBDb2xvcmVkIENhcmQgVGl0bGVcXG4gIDwvZGl2PlxcbiAgPGRpdiBjbGFzcz1cXFwiY2FyZC1jb250ZW50IGNhcmQtZm9yY2UtdG9wLXBhZGRpbmdcXFwiPlxcbiAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZCB0ZW1wb3JcXG4gICAgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS4gVXQgZW5pbSBhZCBtaW5pbSB2ZW5pYW0sIHF1aXMgbm9zdHJ1ZFxcbiAgICBleGVyY2l0YXRpb24gdWxsYW1jbyBsYWJvcmlzIG5pc2kgdXQgYWxpcXVpcCBleCBlYSBjb21tb2RvIGNvbnNlcXVhdC5cXG4gIDwvZGl2PlxcbjwvZGl2PlxcblxcbjxkaXYgY2xhc3M9XFxcImNhcmQgYmctdGVhbCB0ZXh0LXdoaXRlXFxcIj5cXG4gIDxkaXYgY2xhc3M9XFxcImNhcmQtdGl0bGVcXFwiPlxcbiAgICBCYWNrZ3JvdW5kIENvbG9yZWQgQ2FyZFxcbiAgPC9kaXY+XFxuICA8ZGl2IGNsYXNzPVxcXCJjYXJkLWNvbnRlbnRcXFwiPlxcbiAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZCB0ZW1wb3JcXG4gICAgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS4gVXQgZW5pbSBhZCBtaW5pbSB2ZW5pYW0sIHF1aXMgbm9zdHJ1ZFxcbiAgICBleGVyY2l0YXRpb24gdWxsYW1jbyBsYWJvcmlzIG5pc2kgdXQgYWxpcXVpcCBleCBlYSBjb21tb2RvIGNvbnNlcXVhdC5cXG4gIDwvZGl2PlxcbjwvZGl2PlxcblwiXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmF3LWxvYWRlciEuL3NyYy9wYWdlcy9jYXJkLWNvbG9yaW5nL3ZpZXcuY2FyZC1jb2xvcmluZy5odG1sXG4gKiogbW9kdWxlIGlkID0gMjZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMTJcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9");

/***/ }

/******/ });