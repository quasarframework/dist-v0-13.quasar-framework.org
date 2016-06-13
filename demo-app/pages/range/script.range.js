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

	module.exports = __webpack_require__(100);


/***/ },

/***/ 100:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar html = __webpack_require__(101);\n\nmodule.exports = {\n  template: html,\n  data: {\n    number: 3\n  },\n  ready: function() {\n    quasar.current.layout.vm.$data.title = 'Range';\n  }\n};\n\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvcmFuZ2Uvc2NyaXB0LnJhbmdlLmpzPzIyZTQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiMTAwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgaHRtbCA9IHJlcXVpcmUoJ3JhdyEuL3ZpZXcucmFuZ2UuaHRtbCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgdGVtcGxhdGU6IGh0bWwsXG4gIGRhdGE6IHtcbiAgICBudW1iZXI6IDNcbiAgfSxcbiAgcmVhZHk6IGZ1bmN0aW9uKCkge1xuICAgIHF1YXNhci5jdXJyZW50LmxheW91dC52bS4kZGF0YS50aXRsZSA9ICdSYW5nZSc7XG4gIH1cbn07XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3BhZ2VzL3JhbmdlL3NjcmlwdC5yYW5nZS5qc1xuICoqIG1vZHVsZSBpZCA9IDEwMFxuICoqIG1vZHVsZSBjaHVua3MgPSA0OVxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ },

/***/ 101:
/***/ function(module, exports) {

	eval("module.exports = \"<div class=\\\"badge bg-secondary text-white\\\">\\n  Model <span class=\\\"right-detail\\\"><em>{{number}}</em> &nbsp;&nbsp;(1-7)</span>\\n</div>\\n\\n<br><br>\\n\\n<h5>Standalone</h5>\\n<range :model.sync=\\\"number\\\" :min=\\\"1\\\" :max=\\\"7\\\"></range>\\n\\n<h5>Inside of a List</h5>\\n<div class=\\\"list bordered inner-delimiter\\\">\\n  <div class=\\\"item\\\">\\n    <i class=\\\"item-right-margin\\\">volume_down</i>\\n    <range :model.sync=\\\"number\\\" :min=\\\"1\\\" :max=\\\"7\\\"></range>\\n    <i class=\\\"item-left-margin\\\">volume_up</i>\\n  </div>\\n  <div class=\\\"item\\\">\\n    <i class=\\\"item-right-margin\\\">volume_down</i>\\n    <range :model.sync=\\\"number\\\" :min=\\\"1\\\" :max=\\\"7\\\"></range>\\n    <i class=\\\"item-left-margin\\\">volume_up</i>\\n  </div>\\n</div>\\n\"\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvcmFuZ2Uvdmlldy5yYW5nZS5odG1sP2RlNzAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNEdBQTRHLFFBQVEsWUFBWSxNQUFNIiwiZmlsZSI6IjEwMS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJiYWRnZSBiZy1zZWNvbmRhcnkgdGV4dC13aGl0ZVxcXCI+XFxuICBNb2RlbCA8c3BhbiBjbGFzcz1cXFwicmlnaHQtZGV0YWlsXFxcIj48ZW0+e3tudW1iZXJ9fTwvZW0+ICZuYnNwOyZuYnNwOygxLTcpPC9zcGFuPlxcbjwvZGl2Plxcblxcbjxicj48YnI+XFxuXFxuPGg1PlN0YW5kYWxvbmU8L2g1PlxcbjxyYW5nZSA6bW9kZWwuc3luYz1cXFwibnVtYmVyXFxcIiA6bWluPVxcXCIxXFxcIiA6bWF4PVxcXCI3XFxcIj48L3JhbmdlPlxcblxcbjxoNT5JbnNpZGUgb2YgYSBMaXN0PC9oNT5cXG48ZGl2IGNsYXNzPVxcXCJsaXN0IGJvcmRlcmVkIGlubmVyLWRlbGltaXRlclxcXCI+XFxuICA8ZGl2IGNsYXNzPVxcXCJpdGVtXFxcIj5cXG4gICAgPGkgY2xhc3M9XFxcIml0ZW0tcmlnaHQtbWFyZ2luXFxcIj52b2x1bWVfZG93bjwvaT5cXG4gICAgPHJhbmdlIDptb2RlbC5zeW5jPVxcXCJudW1iZXJcXFwiIDptaW49XFxcIjFcXFwiIDptYXg9XFxcIjdcXFwiPjwvcmFuZ2U+XFxuICAgIDxpIGNsYXNzPVxcXCJpdGVtLWxlZnQtbWFyZ2luXFxcIj52b2x1bWVfdXA8L2k+XFxuICA8L2Rpdj5cXG4gIDxkaXYgY2xhc3M9XFxcIml0ZW1cXFwiPlxcbiAgICA8aSBjbGFzcz1cXFwiaXRlbS1yaWdodC1tYXJnaW5cXFwiPnZvbHVtZV9kb3duPC9pPlxcbiAgICA8cmFuZ2UgOm1vZGVsLnN5bmM9XFxcIm51bWJlclxcXCIgOm1pbj1cXFwiMVxcXCIgOm1heD1cXFwiN1xcXCI+PC9yYW5nZT5cXG4gICAgPGkgY2xhc3M9XFxcIml0ZW0tbGVmdC1tYXJnaW5cXFwiPnZvbHVtZV91cDwvaT5cXG4gIDwvZGl2PlxcbjwvZGl2PlxcblwiXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmF3LWxvYWRlciEuL3NyYy9wYWdlcy9yYW5nZS92aWV3LnJhbmdlLmh0bWxcbiAqKiBtb2R1bGUgaWQgPSAxMDFcbiAqKiBtb2R1bGUgY2h1bmtzID0gNDlcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9");

/***/ }

/******/ });