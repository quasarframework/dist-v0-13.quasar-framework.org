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

	module.exports = __webpack_require__(37);


/***/ },

/***/ 37:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar html = __webpack_require__(38);\n\nmodule.exports = {\n  template: html,\n  ready: function() {\n    quasar.current.layout.vm.$data.title = 'Social Cards';\n  }\n};\n\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvY2FyZC1zb2NpYWwvc2NyaXB0LmNhcmQtc29jaWFsLmpzP2YxMjYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6IjM3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgaHRtbCA9IHJlcXVpcmUoJ3JhdyEuL3ZpZXcuY2FyZC1zb2NpYWwuaHRtbCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgdGVtcGxhdGU6IGh0bWwsXG4gIHJlYWR5OiBmdW5jdGlvbigpIHtcbiAgICBxdWFzYXIuY3VycmVudC5sYXlvdXQudm0uJGRhdGEudGl0bGUgPSAnU29jaWFsIENhcmRzJztcbiAgfVxufTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvcGFnZXMvY2FyZC1zb2NpYWwvc2NyaXB0LmNhcmQtc29jaWFsLmpzXG4gKiogbW9kdWxlIGlkID0gMzdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMThcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9");

/***/ },

/***/ 38:
/***/ function(module, exports) {

	eval("module.exports = \"<div class=\\\"card\\\">\\n  <div class=\\\"item\\\">\\n    <div class=\\\"item-avatar\\\">\\n      <img src=\\\"assets/linux-avatar.png\\\">\\n    </div>\\n    <div class=\\\"item-content\\\">\\n      <div class=\\\"item-label\\\">\\n        <p class=\\\"item-title\\\">Joe</p>\\n        <p>Web Developer</p>\\n      </div>\\n    </div>\\n  </div>\\n  <img src=\\\"assets/mountains.jpg\\\">\\n  <div class=\\\"card-content\\\">\\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor\\n    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud\\n    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\\n  </div>\\n  <div class=\\\"card-actions\\\">\\n    <div class=\\\"text-primary\\\">\\n      <i>thumb_up</i> 11k likes\\n    </div>\\n    <div class=\\\"text-primary\\\">\\n      <i>mode_comment</i> 8 comments\\n    </div>\\n    <div class=\\\"auto\\\"></div>\\n    <div class=\\\"text-grey-6\\\">\\n      23 minutes ago.\\n    </div>\\n  </div>\\n</div>\\n\"\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvY2FyZC1zb2NpYWwvdmlldy5jYXJkLXNvY2lhbC5odG1sPzU2MzMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiMzguanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwiY2FyZFxcXCI+XFxuICA8ZGl2IGNsYXNzPVxcXCJpdGVtXFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiaXRlbS1hdmF0YXJcXFwiPlxcbiAgICAgIDxpbWcgc3JjPVxcXCJhc3NldHMvbGludXgtYXZhdGFyLnBuZ1xcXCI+XFxuICAgIDwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJpdGVtLWNvbnRlbnRcXFwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcIml0ZW0tbGFiZWxcXFwiPlxcbiAgICAgICAgPHAgY2xhc3M9XFxcIml0ZW0tdGl0bGVcXFwiPkpvZTwvcD5cXG4gICAgICAgIDxwPldlYiBEZXZlbG9wZXI8L3A+XFxuICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgPC9kaXY+XFxuICA8aW1nIHNyYz1cXFwiYXNzZXRzL21vdW50YWlucy5qcGdcXFwiPlxcbiAgPGRpdiBjbGFzcz1cXFwiY2FyZC1jb250ZW50XFxcIj5cXG4gICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2QgdGVtcG9yXFxuICAgIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuIFV0IGVuaW0gYWQgbWluaW0gdmVuaWFtLCBxdWlzIG5vc3RydWRcXG4gICAgZXhlcmNpdGF0aW9uIHVsbGFtY28gbGFib3JpcyBuaXNpIHV0IGFsaXF1aXAgZXggZWEgY29tbW9kbyBjb25zZXF1YXQuXFxuICA8L2Rpdj5cXG4gIDxkaXYgY2xhc3M9XFxcImNhcmQtYWN0aW9uc1xcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcInRleHQtcHJpbWFyeVxcXCI+XFxuICAgICAgPGk+dGh1bWJfdXA8L2k+IDExayBsaWtlc1xcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwidGV4dC1wcmltYXJ5XFxcIj5cXG4gICAgICA8aT5tb2RlX2NvbW1lbnQ8L2k+IDggY29tbWVudHNcXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcImF1dG9cXFwiPjwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJ0ZXh0LWdyZXktNlxcXCI+XFxuICAgICAgMjMgbWludXRlcyBhZ28uXFxuICAgIDwvZGl2PlxcbiAgPC9kaXY+XFxuPC9kaXY+XFxuXCJcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yYXctbG9hZGVyIS4vc3JjL3BhZ2VzL2NhcmQtc29jaWFsL3ZpZXcuY2FyZC1zb2NpYWwuaHRtbFxuICoqIG1vZHVsZSBpZCA9IDM4XG4gKiogbW9kdWxlIGNodW5rcyA9IDE4XG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ }

/******/ });