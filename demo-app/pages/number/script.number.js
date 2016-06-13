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

	module.exports = __webpack_require__(90);


/***/ },

/***/ 90:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar html = __webpack_require__(91);\n\nmodule.exports = {\n  template: html,\n  data: {\n    number: 3\n  },\n  ready: function() {\n    quasar.current.layout.vm.$data.title = 'Number';\n  }\n};\n\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvbnVtYmVyL3NjcmlwdC5udW1iZXIuanM/NjliOSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiI5MC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIGh0bWwgPSByZXF1aXJlKCdyYXchLi92aWV3Lm51bWJlci5odG1sJyk7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICB0ZW1wbGF0ZTogaHRtbCxcbiAgZGF0YToge1xuICAgIG51bWJlcjogM1xuICB9LFxuICByZWFkeTogZnVuY3Rpb24oKSB7XG4gICAgcXVhc2FyLmN1cnJlbnQubGF5b3V0LnZtLiRkYXRhLnRpdGxlID0gJ051bWJlcic7XG4gIH1cbn07XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3BhZ2VzL251bWJlci9zY3JpcHQubnVtYmVyLmpzXG4gKiogbW9kdWxlIGlkID0gOTBcbiAqKiBtb2R1bGUgY2h1bmtzID0gNDRcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9");

/***/ },

/***/ 91:
/***/ function(module, exports) {

	eval("module.exports = \"<div class=\\\"badge bg-secondary text-white\\\">\\n  Model <span class=\\\"right-detail\\\"><em>{{number}}</em> &nbsp;&nbsp;(1-7)</span>\\n</div>\\n\\n<br><br>\\n\\n<h5>Standalone</h5>\\n<number :model.sync=\\\"number\\\" :min=\\\"1\\\" :max=\\\"17\\\"></number>\\n\\n<br><br>\\n<h5>Inside of a List</h5>\\n<div class=\\\"list inner-delimiter bordered\\\">\\n  <label class=\\\"item\\\">\\n    <div class=\\\"item-content\\\">\\n      <div class=\\\"item-label fixed-label\\\">\\n        Some number\\n      </div>\\n      <div class=\\\"item-value\\\">\\n        <number :model.sync=\\\"number\\\" :min=\\\"1\\\" :max=\\\"17\\\"></number>\\n      </div>\\n    </div>\\n  </label>\\n  <label class=\\\"item\\\">\\n    <div class=\\\"item-content\\\">\\n      <div class=\\\"item-label fixed-label\\\">\\n        Some number\\n      </div>\\n      <div class=\\\"item-value\\\">\\n        <number :model.sync=\\\"number\\\" :min=\\\"1\\\" :max=\\\"17\\\"></number>\\n      </div>\\n    </div>\\n  </label>\\n</div>\\n\"\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvbnVtYmVyL3ZpZXcubnVtYmVyLmh0bWw/MjczOSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw0R0FBNEcsUUFBUSxZQUFZLE1BQU0iLCJmaWxlIjoiOTEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwiYmFkZ2UgYmctc2Vjb25kYXJ5IHRleHQtd2hpdGVcXFwiPlxcbiAgTW9kZWwgPHNwYW4gY2xhc3M9XFxcInJpZ2h0LWRldGFpbFxcXCI+PGVtPnt7bnVtYmVyfX08L2VtPiAmbmJzcDsmbmJzcDsoMS03KTwvc3Bhbj5cXG48L2Rpdj5cXG5cXG48YnI+PGJyPlxcblxcbjxoNT5TdGFuZGFsb25lPC9oNT5cXG48bnVtYmVyIDptb2RlbC5zeW5jPVxcXCJudW1iZXJcXFwiIDptaW49XFxcIjFcXFwiIDptYXg9XFxcIjE3XFxcIj48L251bWJlcj5cXG5cXG48YnI+PGJyPlxcbjxoNT5JbnNpZGUgb2YgYSBMaXN0PC9oNT5cXG48ZGl2IGNsYXNzPVxcXCJsaXN0IGlubmVyLWRlbGltaXRlciBib3JkZXJlZFxcXCI+XFxuICA8bGFiZWwgY2xhc3M9XFxcIml0ZW1cXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJpdGVtLWNvbnRlbnRcXFwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcIml0ZW0tbGFiZWwgZml4ZWQtbGFiZWxcXFwiPlxcbiAgICAgICAgU29tZSBudW1iZXJcXG4gICAgICA8L2Rpdj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJpdGVtLXZhbHVlXFxcIj5cXG4gICAgICAgIDxudW1iZXIgOm1vZGVsLnN5bmM9XFxcIm51bWJlclxcXCIgOm1pbj1cXFwiMVxcXCIgOm1heD1cXFwiMTdcXFwiPjwvbnVtYmVyPlxcbiAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gIDwvbGFiZWw+XFxuICA8bGFiZWwgY2xhc3M9XFxcIml0ZW1cXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJpdGVtLWNvbnRlbnRcXFwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcIml0ZW0tbGFiZWwgZml4ZWQtbGFiZWxcXFwiPlxcbiAgICAgICAgU29tZSBudW1iZXJcXG4gICAgICA8L2Rpdj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJpdGVtLXZhbHVlXFxcIj5cXG4gICAgICAgIDxudW1iZXIgOm1vZGVsLnN5bmM9XFxcIm51bWJlclxcXCIgOm1pbj1cXFwiMVxcXCIgOm1heD1cXFwiMTdcXFwiPjwvbnVtYmVyPlxcbiAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gIDwvbGFiZWw+XFxuPC9kaXY+XFxuXCJcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yYXctbG9hZGVyIS4vc3JjL3BhZ2VzL251bWJlci92aWV3Lm51bWJlci5odG1sXG4gKiogbW9kdWxlIGlkID0gOTFcbiAqKiBtb2R1bGUgY2h1bmtzID0gNDRcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9");

/***/ }

/******/ });