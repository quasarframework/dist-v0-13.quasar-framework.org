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

	module.exports = __webpack_require__(31);


/***/ },

/***/ 31:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar html = __webpack_require__(32);\n\nmodule.exports = {\n  template: html,\n  ready: function() {\n    quasar.current.layout.vm.$data.title = 'Cards with List';\n  }\n};\n\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvY2FyZC1saXN0L3NjcmlwdC5jYXJkLWxpc3QuanM/MjgzNSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiMzEuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBodG1sID0gcmVxdWlyZSgncmF3IS4vdmlldy5jYXJkLWxpc3QuaHRtbCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgdGVtcGxhdGU6IGh0bWwsXG4gIHJlYWR5OiBmdW5jdGlvbigpIHtcbiAgICBxdWFzYXIuY3VycmVudC5sYXlvdXQudm0uJGRhdGEudGl0bGUgPSAnQ2FyZHMgd2l0aCBMaXN0JztcbiAgfVxufTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvcGFnZXMvY2FyZC1saXN0L3NjcmlwdC5jYXJkLWxpc3QuanNcbiAqKiBtb2R1bGUgaWQgPSAzMVxuICoqIG1vZHVsZSBjaHVua3MgPSAxNVxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ },

/***/ 32:
/***/ function(module, exports) {

	eval("module.exports = \"<div class=\\\"card\\\">\\n  <div class=\\\"card-title\\\">\\n    Card with List\\n  </div>\\n  <div class=\\\"list bordered inner-delimiter highlight\\\">\\n    <div class=\\\"item\\\" v-for=\\\"n in 4\\\">\\n      <i>mail</i>\\n      <div class=\\\"item-content\\\">\\n        <div class=\\\"item-label\\\">Quasar Framework</div>\\n        <button class=\\\"item-value\\\"><i>keyboard_arrow_right</i></button>\\n      </div>\\n    </div>\\n  </div>\\n</div>\\n\"\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvY2FyZC1saXN0L3ZpZXcuY2FyZC1saXN0Lmh0bWw/ZDAwMSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiIzMi5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJjYXJkXFxcIj5cXG4gIDxkaXYgY2xhc3M9XFxcImNhcmQtdGl0bGVcXFwiPlxcbiAgICBDYXJkIHdpdGggTGlzdFxcbiAgPC9kaXY+XFxuICA8ZGl2IGNsYXNzPVxcXCJsaXN0IGJvcmRlcmVkIGlubmVyLWRlbGltaXRlciBoaWdobGlnaHRcXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJpdGVtXFxcIiB2LWZvcj1cXFwibiBpbiA0XFxcIj5cXG4gICAgICA8aT5tYWlsPC9pPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcIml0ZW0tY29udGVudFxcXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpdGVtLWxhYmVsXFxcIj5RdWFzYXIgRnJhbWV3b3JrPC9kaXY+XFxuICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJpdGVtLXZhbHVlXFxcIj48aT5rZXlib2FyZF9hcnJvd19yaWdodDwvaT48L2J1dHRvbj5cXG4gICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuICA8L2Rpdj5cXG48L2Rpdj5cXG5cIlxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3Jhdy1sb2FkZXIhLi9zcmMvcGFnZXMvY2FyZC1saXN0L3ZpZXcuY2FyZC1saXN0Lmh0bWxcbiAqKiBtb2R1bGUgaWQgPSAzMlxuICoqIG1vZHVsZSBjaHVua3MgPSAxNVxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ }

/******/ });