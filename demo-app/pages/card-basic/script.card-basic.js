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

	module.exports = __webpack_require__(21);


/***/ },

/***/ 21:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar html = __webpack_require__(22);\n\nmodule.exports = {\n  template: html,\n  ready: function() {\n    quasar.current.layout.vm.$data.title = 'Basic Cards';\n  }\n};\n\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvY2FyZC1iYXNpYy9zY3JpcHQuY2FyZC1iYXNpYy5qcz81ZWQ3Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIyMS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIGh0bWwgPSByZXF1aXJlKCdyYXchLi92aWV3LmNhcmQtYmFzaWMuaHRtbCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgdGVtcGxhdGU6IGh0bWwsXG4gIHJlYWR5OiBmdW5jdGlvbigpIHtcbiAgICBxdWFzYXIuY3VycmVudC5sYXlvdXQudm0uJGRhdGEudGl0bGUgPSAnQmFzaWMgQ2FyZHMnO1xuICB9XG59O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9wYWdlcy9jYXJkLWJhc2ljL3NjcmlwdC5jYXJkLWJhc2ljLmpzXG4gKiogbW9kdWxlIGlkID0gMjFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMTBcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9");

/***/ },

/***/ 22:
/***/ function(module, exports) {

	eval("module.exports = \"<div class=\\\"card\\\">\\n  <div class=\\\"card-content\\\">\\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor\\n    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud\\n    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\\n  </div>\\n</div>\\n\\n<div class=\\\"card\\\">\\n  <div class=\\\"card-title\\\">\\n    Card with Title\\n  </div>\\n  <div class=\\\"card-content\\\">\\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor\\n    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud\\n    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\\n  </div>\\n</div>\\n\"\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvY2FyZC1iYXNpYy92aWV3LmNhcmQtYmFzaWMuaHRtbD80YTY4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjIyLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcImNhcmRcXFwiPlxcbiAgPGRpdiBjbGFzcz1cXFwiY2FyZC1jb250ZW50XFxcIj5cXG4gICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2QgdGVtcG9yXFxuICAgIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuIFV0IGVuaW0gYWQgbWluaW0gdmVuaWFtLCBxdWlzIG5vc3RydWRcXG4gICAgZXhlcmNpdGF0aW9uIHVsbGFtY28gbGFib3JpcyBuaXNpIHV0IGFsaXF1aXAgZXggZWEgY29tbW9kbyBjb25zZXF1YXQuXFxuICA8L2Rpdj5cXG48L2Rpdj5cXG5cXG48ZGl2IGNsYXNzPVxcXCJjYXJkXFxcIj5cXG4gIDxkaXYgY2xhc3M9XFxcImNhcmQtdGl0bGVcXFwiPlxcbiAgICBDYXJkIHdpdGggVGl0bGVcXG4gIDwvZGl2PlxcbiAgPGRpdiBjbGFzcz1cXFwiY2FyZC1jb250ZW50XFxcIj5cXG4gICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2QgdGVtcG9yXFxuICAgIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuIFV0IGVuaW0gYWQgbWluaW0gdmVuaWFtLCBxdWlzIG5vc3RydWRcXG4gICAgZXhlcmNpdGF0aW9uIHVsbGFtY28gbGFib3JpcyBuaXNpIHV0IGFsaXF1aXAgZXggZWEgY29tbW9kbyBjb25zZXF1YXQuXFxuICA8L2Rpdj5cXG48L2Rpdj5cXG5cIlxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3Jhdy1sb2FkZXIhLi9zcmMvcGFnZXMvY2FyZC1iYXNpYy92aWV3LmNhcmQtYmFzaWMuaHRtbFxuICoqIG1vZHVsZSBpZCA9IDIyXG4gKiogbW9kdWxlIGNodW5rcyA9IDEwXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ }

/******/ });