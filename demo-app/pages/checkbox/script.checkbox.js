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

	module.exports = __webpack_require__(41);


/***/ },

/***/ 41:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar html = __webpack_require__(42);\n\nmodule.exports = {\n  template: html,\n  data: {\n    checked: false\n  },\n  ready: function() {\n    quasar.current.layout.vm.$data.title = 'Checkbox';\n  }\n};\n\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvY2hlY2tib3gvc2NyaXB0LmNoZWNrYm94LmpzPzg2NWIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiNDEuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBodG1sID0gcmVxdWlyZSgncmF3IS4vdmlldy5jaGVja2JveC5odG1sJyk7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICB0ZW1wbGF0ZTogaHRtbCxcbiAgZGF0YToge1xuICAgIGNoZWNrZWQ6IGZhbHNlXG4gIH0sXG4gIHJlYWR5OiBmdW5jdGlvbigpIHtcbiAgICBxdWFzYXIuY3VycmVudC5sYXlvdXQudm0uJGRhdGEudGl0bGUgPSAnQ2hlY2tib3gnO1xuICB9XG59O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9wYWdlcy9jaGVja2JveC9zY3JpcHQuY2hlY2tib3guanNcbiAqKiBtb2R1bGUgaWQgPSA0MVxuICoqIG1vZHVsZSBjaHVua3MgPSAyMFxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ },

/***/ 42:
/***/ function(module, exports) {

	eval("module.exports = \"<div class=\\\"badge bg-secondary text-white\\\">\\n  Model <span class=\\\"right-detail\\\"><em>{{checked}}</em></span>\\n</div>\\n\\n<br><br>\\n\\n<h5>Standalone</h5>\\n<label>\\n  <checkbox :model.sync=\\\"checked\\\"></checkbox>\\n  Checkbox Label\\n</label>\\n\\n<br><br>\\n<h5>Inside of a List</h5>\\n<div class=\\\"list bordered inner-delimiter\\\">\\n  <label class=\\\"item\\\">\\n    <checkbox :model.sync=\\\"checked\\\"></checkbox>\\n    <div class=\\\"item-content\\\">\\n      Checkbox Label\\n    </div>\\n  </label>\\n  <label class=\\\"item\\\">\\n    <checkbox :model.sync=\\\"checked\\\"></checkbox>\\n    <div class=\\\"item-content\\\">\\n      Checkbox Label\\n    </div>\\n  </label>\\n</div>\\n<div class=\\\"list bordered inner-delimiter\\\">\\n  <label class=\\\"item\\\">\\n    <div class=\\\"item-content\\\">\\n      <div class=\\\"item-label\\\">\\n        Checkbox Label\\n      </div>\\n      <checkbox :model.sync=\\\"checked\\\"></checkbox>\\n    </div>\\n  </label>\\n  <label class=\\\"item\\\">\\n    <div class=\\\"item-content\\\">\\n      <div class=\\\"item-label\\\">\\n        Checkbox Label\\n      </div>\\n      <checkbox :model.sync=\\\"checked\\\"></checkbox>\\n    </div>\\n  </label>\\n</div>\\n\"\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvY2hlY2tib3gvdmlldy5jaGVja2JveC5odG1sP2ZlMTAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNEdBQTRHLFNBQVMiLCJmaWxlIjoiNDIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwiYmFkZ2UgYmctc2Vjb25kYXJ5IHRleHQtd2hpdGVcXFwiPlxcbiAgTW9kZWwgPHNwYW4gY2xhc3M9XFxcInJpZ2h0LWRldGFpbFxcXCI+PGVtPnt7Y2hlY2tlZH19PC9lbT48L3NwYW4+XFxuPC9kaXY+XFxuXFxuPGJyPjxicj5cXG5cXG48aDU+U3RhbmRhbG9uZTwvaDU+XFxuPGxhYmVsPlxcbiAgPGNoZWNrYm94IDptb2RlbC5zeW5jPVxcXCJjaGVja2VkXFxcIj48L2NoZWNrYm94PlxcbiAgQ2hlY2tib3ggTGFiZWxcXG48L2xhYmVsPlxcblxcbjxicj48YnI+XFxuPGg1Pkluc2lkZSBvZiBhIExpc3Q8L2g1PlxcbjxkaXYgY2xhc3M9XFxcImxpc3QgYm9yZGVyZWQgaW5uZXItZGVsaW1pdGVyXFxcIj5cXG4gIDxsYWJlbCBjbGFzcz1cXFwiaXRlbVxcXCI+XFxuICAgIDxjaGVja2JveCA6bW9kZWwuc3luYz1cXFwiY2hlY2tlZFxcXCI+PC9jaGVja2JveD5cXG4gICAgPGRpdiBjbGFzcz1cXFwiaXRlbS1jb250ZW50XFxcIj5cXG4gICAgICBDaGVja2JveCBMYWJlbFxcbiAgICA8L2Rpdj5cXG4gIDwvbGFiZWw+XFxuICA8bGFiZWwgY2xhc3M9XFxcIml0ZW1cXFwiPlxcbiAgICA8Y2hlY2tib3ggOm1vZGVsLnN5bmM9XFxcImNoZWNrZWRcXFwiPjwvY2hlY2tib3g+XFxuICAgIDxkaXYgY2xhc3M9XFxcIml0ZW0tY29udGVudFxcXCI+XFxuICAgICAgQ2hlY2tib3ggTGFiZWxcXG4gICAgPC9kaXY+XFxuICA8L2xhYmVsPlxcbjwvZGl2PlxcbjxkaXYgY2xhc3M9XFxcImxpc3QgYm9yZGVyZWQgaW5uZXItZGVsaW1pdGVyXFxcIj5cXG4gIDxsYWJlbCBjbGFzcz1cXFwiaXRlbVxcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcIml0ZW0tY29udGVudFxcXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiaXRlbS1sYWJlbFxcXCI+XFxuICAgICAgICBDaGVja2JveCBMYWJlbFxcbiAgICAgIDwvZGl2PlxcbiAgICAgIDxjaGVja2JveCA6bW9kZWwuc3luYz1cXFwiY2hlY2tlZFxcXCI+PC9jaGVja2JveD5cXG4gICAgPC9kaXY+XFxuICA8L2xhYmVsPlxcbiAgPGxhYmVsIGNsYXNzPVxcXCJpdGVtXFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiaXRlbS1jb250ZW50XFxcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJpdGVtLWxhYmVsXFxcIj5cXG4gICAgICAgIENoZWNrYm94IExhYmVsXFxuICAgICAgPC9kaXY+XFxuICAgICAgPGNoZWNrYm94IDptb2RlbC5zeW5jPVxcXCJjaGVja2VkXFxcIj48L2NoZWNrYm94PlxcbiAgICA8L2Rpdj5cXG4gIDwvbGFiZWw+XFxuPC9kaXY+XFxuXCJcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yYXctbG9hZGVyIS4vc3JjL3BhZ2VzL2NoZWNrYm94L3ZpZXcuY2hlY2tib3guaHRtbFxuICoqIG1vZHVsZSBpZCA9IDQyXG4gKiogbW9kdWxlIGNodW5rcyA9IDIwXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ }

/******/ });