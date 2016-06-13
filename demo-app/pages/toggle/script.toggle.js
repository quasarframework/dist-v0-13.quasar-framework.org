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

	module.exports = __webpack_require__(121);


/***/ },

/***/ 121:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar html = __webpack_require__(122);\n\nmodule.exports = {\n  template: html,\n  data: {\n    checked: false\n  },\n  ready: function() {\n    quasar.current.layout.vm.$data.title = 'Toggle';\n  }\n};\n\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvdG9nZ2xlL3NjcmlwdC50b2dnbGUuanM/N2Q2ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIxMjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBodG1sID0gcmVxdWlyZSgncmF3IS4vdmlldy50b2dnbGUuaHRtbCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgdGVtcGxhdGU6IGh0bWwsXG4gIGRhdGE6IHtcbiAgICBjaGVja2VkOiBmYWxzZVxuICB9LFxuICByZWFkeTogZnVuY3Rpb24oKSB7XG4gICAgcXVhc2FyLmN1cnJlbnQubGF5b3V0LnZtLiRkYXRhLnRpdGxlID0gJ1RvZ2dsZSc7XG4gIH1cbn07XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3BhZ2VzL3RvZ2dsZS9zY3JpcHQudG9nZ2xlLmpzXG4gKiogbW9kdWxlIGlkID0gMTIxXG4gKiogbW9kdWxlIGNodW5rcyA9IDU5XG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ },

/***/ 122:
/***/ function(module, exports) {

	eval("module.exports = \"<div class=\\\"badge bg-secondary text-white\\\">\\n  Model <span class=\\\"right-detail\\\"><em>{{checked}}</em></span>\\n</div>\\n\\n<br><br>\\n\\n<h5>Standalone</h5>\\n<label>\\n  <toggle :model.sync=\\\"checked\\\"></toggle>\\n  Toggle Label\\n</label>\\n\\n<br><br>\\n\\n<h5>Inside of a List</h5>\\n<div class=\\\"list inner-delimiter bordered\\\">\\n  <label class=\\\"item\\\">\\n    <i>mail</i>\\n    <div class=\\\"item-content\\\">\\n      <div class=\\\"item-label\\\">Toggle Label</div>\\n      <toggle :model.sync=\\\"checked\\\"></toggle>\\n    </div>\\n  </label>\\n  <label class=\\\"item\\\">\\n    <i>mail</i>\\n    <div class=\\\"item-content\\\">\\n      <div class=\\\"item-label\\\">Toggle Label</div>\\n      <toggle :model.sync=\\\"checked\\\"></toggle>\\n    </div>\\n  </label>\\n</div>\\n\\n<div class=\\\"list inner-delimiter bordered\\\">\\n  <label class=\\\"item\\\">\\n    <toggle :model.sync=\\\"checked\\\"></toggle>\\n    <div class=\\\"item-content\\\">\\n      Toggle Label\\n    </div>\\n  </label>\\n  <label class=\\\"item\\\">\\n    <toggle :model.sync=\\\"checked\\\"></toggle>\\n    <div class=\\\"item-content\\\">\\n      Toggle Label\\n    </div>\\n  </label>\\n</div>\\n\"\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvdG9nZ2xlL3ZpZXcudG9nZ2xlLmh0bWw/ZDhiZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw0R0FBNEcsU0FBUyIsImZpbGUiOiIxMjIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwiYmFkZ2UgYmctc2Vjb25kYXJ5IHRleHQtd2hpdGVcXFwiPlxcbiAgTW9kZWwgPHNwYW4gY2xhc3M9XFxcInJpZ2h0LWRldGFpbFxcXCI+PGVtPnt7Y2hlY2tlZH19PC9lbT48L3NwYW4+XFxuPC9kaXY+XFxuXFxuPGJyPjxicj5cXG5cXG48aDU+U3RhbmRhbG9uZTwvaDU+XFxuPGxhYmVsPlxcbiAgPHRvZ2dsZSA6bW9kZWwuc3luYz1cXFwiY2hlY2tlZFxcXCI+PC90b2dnbGU+XFxuICBUb2dnbGUgTGFiZWxcXG48L2xhYmVsPlxcblxcbjxicj48YnI+XFxuXFxuPGg1Pkluc2lkZSBvZiBhIExpc3Q8L2g1PlxcbjxkaXYgY2xhc3M9XFxcImxpc3QgaW5uZXItZGVsaW1pdGVyIGJvcmRlcmVkXFxcIj5cXG4gIDxsYWJlbCBjbGFzcz1cXFwiaXRlbVxcXCI+XFxuICAgIDxpPm1haWw8L2k+XFxuICAgIDxkaXYgY2xhc3M9XFxcIml0ZW0tY29udGVudFxcXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiaXRlbS1sYWJlbFxcXCI+VG9nZ2xlIExhYmVsPC9kaXY+XFxuICAgICAgPHRvZ2dsZSA6bW9kZWwuc3luYz1cXFwiY2hlY2tlZFxcXCI+PC90b2dnbGU+XFxuICAgIDwvZGl2PlxcbiAgPC9sYWJlbD5cXG4gIDxsYWJlbCBjbGFzcz1cXFwiaXRlbVxcXCI+XFxuICAgIDxpPm1haWw8L2k+XFxuICAgIDxkaXYgY2xhc3M9XFxcIml0ZW0tY29udGVudFxcXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiaXRlbS1sYWJlbFxcXCI+VG9nZ2xlIExhYmVsPC9kaXY+XFxuICAgICAgPHRvZ2dsZSA6bW9kZWwuc3luYz1cXFwiY2hlY2tlZFxcXCI+PC90b2dnbGU+XFxuICAgIDwvZGl2PlxcbiAgPC9sYWJlbD5cXG48L2Rpdj5cXG5cXG48ZGl2IGNsYXNzPVxcXCJsaXN0IGlubmVyLWRlbGltaXRlciBib3JkZXJlZFxcXCI+XFxuICA8bGFiZWwgY2xhc3M9XFxcIml0ZW1cXFwiPlxcbiAgICA8dG9nZ2xlIDptb2RlbC5zeW5jPVxcXCJjaGVja2VkXFxcIj48L3RvZ2dsZT5cXG4gICAgPGRpdiBjbGFzcz1cXFwiaXRlbS1jb250ZW50XFxcIj5cXG4gICAgICBUb2dnbGUgTGFiZWxcXG4gICAgPC9kaXY+XFxuICA8L2xhYmVsPlxcbiAgPGxhYmVsIGNsYXNzPVxcXCJpdGVtXFxcIj5cXG4gICAgPHRvZ2dsZSA6bW9kZWwuc3luYz1cXFwiY2hlY2tlZFxcXCI+PC90b2dnbGU+XFxuICAgIDxkaXYgY2xhc3M9XFxcIml0ZW0tY29udGVudFxcXCI+XFxuICAgICAgVG9nZ2xlIExhYmVsXFxuICAgIDwvZGl2PlxcbiAgPC9sYWJlbD5cXG48L2Rpdj5cXG5cIlxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3Jhdy1sb2FkZXIhLi9zcmMvcGFnZXMvdG9nZ2xlL3ZpZXcudG9nZ2xlLmh0bWxcbiAqKiBtb2R1bGUgaWQgPSAxMjJcbiAqKiBtb2R1bGUgY2h1bmtzID0gNTlcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9");

/***/ }

/******/ });