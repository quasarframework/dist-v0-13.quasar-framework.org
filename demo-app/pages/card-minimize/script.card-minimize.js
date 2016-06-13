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

	module.exports = __webpack_require__(35);


/***/ },

/***/ 35:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar html = __webpack_require__(36);\n\nmodule.exports = {\n  template: html,\n  methods: {\n    dismissMe: function() {\n      quasar.notify('Card dismissed.');\n    }\n  },\n  ready: function() {\n    quasar.current.layout.vm.$data.title = 'Cards Minimization';\n  }\n};\n\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvY2FyZC1taW5pbWl6ZS9zY3JpcHQuY2FyZC1taW5pbWl6ZS5qcz80YzY2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIzNS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIGh0bWwgPSByZXF1aXJlKCdyYXchLi92aWV3LmNhcmQtbWluaW1pemUuaHRtbCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgdGVtcGxhdGU6IGh0bWwsXG4gIG1ldGhvZHM6IHtcbiAgICBkaXNtaXNzTWU6IGZ1bmN0aW9uKCkge1xuICAgICAgcXVhc2FyLm5vdGlmeSgnQ2FyZCBkaXNtaXNzZWQuJyk7XG4gICAgfVxuICB9LFxuICByZWFkeTogZnVuY3Rpb24oKSB7XG4gICAgcXVhc2FyLmN1cnJlbnQubGF5b3V0LnZtLiRkYXRhLnRpdGxlID0gJ0NhcmRzIE1pbmltaXphdGlvbic7XG4gIH1cbn07XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3BhZ2VzL2NhcmQtbWluaW1pemUvc2NyaXB0LmNhcmQtbWluaW1pemUuanNcbiAqKiBtb2R1bGUgaWQgPSAzNVxuICoqIG1vZHVsZSBjaHVua3MgPSAxN1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ },

/***/ 36:
/***/ function(module, exports) {

	eval("module.exports = \"<div class=\\\"card\\\">\\n  <div class=\\\"card-title row items-center\\\">\\n    <span class=\\\"auto\\\">Card Title</span>\\n    <div class=\\\"group\\\">\\n      <button class=\\\"primary clear small\\\" v-card-minimize><i>remove</i></button>\\n      <button class=\\\"primary clear small\\\" v-card-close><i>close</i></button>\\n    </div>\\n  </div>\\n  <div class=\\\"card-content\\\">\\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor\\n    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud\\n    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\\n  </div>\\n</div>\\n\"\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvY2FyZC1taW5pbWl6ZS92aWV3LmNhcmQtbWluaW1pemUuaHRtbD84YjBlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjM2LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcImNhcmRcXFwiPlxcbiAgPGRpdiBjbGFzcz1cXFwiY2FyZC10aXRsZSByb3cgaXRlbXMtY2VudGVyXFxcIj5cXG4gICAgPHNwYW4gY2xhc3M9XFxcImF1dG9cXFwiPkNhcmQgVGl0bGU8L3NwYW4+XFxuICAgIDxkaXYgY2xhc3M9XFxcImdyb3VwXFxcIj5cXG4gICAgICA8YnV0dG9uIGNsYXNzPVxcXCJwcmltYXJ5IGNsZWFyIHNtYWxsXFxcIiB2LWNhcmQtbWluaW1pemU+PGk+cmVtb3ZlPC9pPjwvYnV0dG9uPlxcbiAgICAgIDxidXR0b24gY2xhc3M9XFxcInByaW1hcnkgY2xlYXIgc21hbGxcXFwiIHYtY2FyZC1jbG9zZT48aT5jbG9zZTwvaT48L2J1dHRvbj5cXG4gICAgPC9kaXY+XFxuICA8L2Rpdj5cXG4gIDxkaXYgY2xhc3M9XFxcImNhcmQtY29udGVudFxcXCI+XFxuICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvclxcbiAgICBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLiBVdCBlbmltIGFkIG1pbmltIHZlbmlhbSwgcXVpcyBub3N0cnVkXFxuICAgIGV4ZXJjaXRhdGlvbiB1bGxhbWNvIGxhYm9yaXMgbmlzaSB1dCBhbGlxdWlwIGV4IGVhIGNvbW1vZG8gY29uc2VxdWF0LlxcbiAgPC9kaXY+XFxuPC9kaXY+XFxuXCJcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yYXctbG9hZGVyIS4vc3JjL3BhZ2VzL2NhcmQtbWluaW1pemUvdmlldy5jYXJkLW1pbmltaXplLmh0bWxcbiAqKiBtb2R1bGUgaWQgPSAzNlxuICoqIG1vZHVsZSBjaHVua3MgPSAxN1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ }

/******/ });