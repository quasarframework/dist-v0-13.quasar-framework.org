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

	module.exports = __webpack_require__(27);


/***/ },

/***/ 27:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar html = __webpack_require__(28);\n\nmodule.exports = {\n  template: html,\n  ready: function() {\n    quasar.current.layout.vm.$data.title = 'Cards with FAB';\n  }\n};\n\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvY2FyZC1mYWIvc2NyaXB0LmNhcmQtZmFiLmpzPzM1MmQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6IjI3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgaHRtbCA9IHJlcXVpcmUoJ3JhdyEuL3ZpZXcuY2FyZC1mYWIuaHRtbCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgdGVtcGxhdGU6IGh0bWwsXG4gIHJlYWR5OiBmdW5jdGlvbigpIHtcbiAgICBxdWFzYXIuY3VycmVudC5sYXlvdXQudm0uJGRhdGEudGl0bGUgPSAnQ2FyZHMgd2l0aCBGQUInO1xuICB9XG59O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9wYWdlcy9jYXJkLWZhYi9zY3JpcHQuY2FyZC1mYWIuanNcbiAqKiBtb2R1bGUgaWQgPSAyN1xuICoqIG1vZHVsZSBjaHVua3MgPSAxM1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ },

/***/ 28:
/***/ function(module, exports) {

	eval("module.exports = \"<div class=\\\"card\\\">\\n  <div class=\\\"card-title\\\">\\n    Card with FAB\\n  </div>\\n  <div class=\\\"card-media\\\">\\n    <div class=\\\"video\\\">\\n      <iframe src=\\\"https://www.youtube.com/embed/k3_tw44QsZQ?rel=0\\\" frameborder=\\\"0\\\" allowfullscreen></iframe>\\n    </div>\\n    <button class=\\\"primary circular\\\"><i>share</i></button>\\n  </div>\\n  <div class=\\\"card-content\\\">\\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor\\n    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud\\n    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\\n  </div>\\n</div>\\n\"\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvY2FyZC1mYWIvdmlldy5jYXJkLWZhYi5odG1sP2Y2ZDciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiMjguanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwiY2FyZFxcXCI+XFxuICA8ZGl2IGNsYXNzPVxcXCJjYXJkLXRpdGxlXFxcIj5cXG4gICAgQ2FyZCB3aXRoIEZBQlxcbiAgPC9kaXY+XFxuICA8ZGl2IGNsYXNzPVxcXCJjYXJkLW1lZGlhXFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXFwidmlkZW9cXFwiPlxcbiAgICAgIDxpZnJhbWUgc3JjPVxcXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC9rM190dzQ0UXNaUT9yZWw9MFxcXCIgZnJhbWVib3JkZXI9XFxcIjBcXFwiIGFsbG93ZnVsbHNjcmVlbj48L2lmcmFtZT5cXG4gICAgPC9kaXY+XFxuICAgIDxidXR0b24gY2xhc3M9XFxcInByaW1hcnkgY2lyY3VsYXJcXFwiPjxpPnNoYXJlPC9pPjwvYnV0dG9uPlxcbiAgPC9kaXY+XFxuICA8ZGl2IGNsYXNzPVxcXCJjYXJkLWNvbnRlbnRcXFwiPlxcbiAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZCB0ZW1wb3JcXG4gICAgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS4gVXQgZW5pbSBhZCBtaW5pbSB2ZW5pYW0sIHF1aXMgbm9zdHJ1ZFxcbiAgICBleGVyY2l0YXRpb24gdWxsYW1jbyBsYWJvcmlzIG5pc2kgdXQgYWxpcXVpcCBleCBlYSBjb21tb2RvIGNvbnNlcXVhdC5cXG4gIDwvZGl2PlxcbjwvZGl2PlxcblwiXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmF3LWxvYWRlciEuL3NyYy9wYWdlcy9jYXJkLWZhYi92aWV3LmNhcmQtZmFiLmh0bWxcbiAqKiBtb2R1bGUgaWQgPSAyOFxuICoqIG1vZHVsZSBjaHVua3MgPSAxM1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ }

/******/ });