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

	module.exports = __webpack_require__(83);


/***/ },

/***/ 83:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar html = __webpack_require__(84);\n\nmodule.exports = {\n  template: html,\n  ready: function() {\n    quasar.current.layout.vm.$data.title = 'Multiline Lists';\n  }\n};\n\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvbGlzdC1tdWx0aWxpbmUvc2NyaXB0Lmxpc3QtbXVsdGlsaW5lLmpzPzM4ZjgiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6IjgzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgaHRtbCA9IHJlcXVpcmUoJ3JhdyEuL3ZpZXcubGlzdC1tdWx0aWxpbmUuaHRtbCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgdGVtcGxhdGU6IGh0bWwsXG4gIHJlYWR5OiBmdW5jdGlvbigpIHtcbiAgICBxdWFzYXIuY3VycmVudC5sYXlvdXQudm0uJGRhdGEudGl0bGUgPSAnTXVsdGlsaW5lIExpc3RzJztcbiAgfVxufTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvcGFnZXMvbGlzdC1tdWx0aWxpbmUvc2NyaXB0Lmxpc3QtbXVsdGlsaW5lLmpzXG4gKiogbW9kdWxlIGlkID0gODNcbiAqKiBtb2R1bGUgY2h1bmtzID0gNDFcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9");

/***/ },

/***/ 84:
/***/ function(module, exports) {

	eval("module.exports = \"<div class=\\\"list inner-delimiter\\\">\\n  <div class=\\\"item\\\">\\n    <i>perm_identity</i>\\n    <div class=\\\"item-content\\\">\\n      <div class=\\\"item-label\\\">\\n        <p class=\\\"item-title\\\">Jack</p>\\n        <p>Linux Lover</p>\\n      </div>\\n    </div>\\n  </div>\\n  <div class=\\\"item\\\">\\n    <i>perm_identity</i>\\n    <div class=\\\"item-content\\\">\\n      <div class=\\\"item-label\\\">\\n        <p class=\\\"item-title\\\">John</p>\\n        <p>Web Developer</p>\\n        <p>Quasar Framework</p>\\n      </div>\\n      <i>mail</i>\\n    </div>\\n  </div>\\n  <div class=\\\"item\\\">\\n    <i>perm_identity</i>\\n    <div class=\\\"item-content\\\">\\n      <div class=\\\"item-label\\\">\\n        <p class=\\\"item-title\\\">Joe</p>\\n        <p>Newbie</p>\\n      </div>\\n    </div>\\n  </div>\\n  <div class=\\\"item\\\">\\n    <i>perm_identity</i>\\n    <div class=\\\"item-content\\\">\\n      <div class=\\\"item-label\\\">\\n        <p class=\\\"item-title\\\">Linux Lover</p>\\n        <p>Linux rulz!</p>\\n        <p>Quasar rulz!</p>\\n      </div>\\n      <i>mail</i>\\n    </div>\\n  </div>\\n</div>\\n\"\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvbGlzdC1tdWx0aWxpbmUvdmlldy5saXN0LW11bHRpbGluZS5odG1sPzgxYTYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiODQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwibGlzdCBpbm5lci1kZWxpbWl0ZXJcXFwiPlxcbiAgPGRpdiBjbGFzcz1cXFwiaXRlbVxcXCI+XFxuICAgIDxpPnBlcm1faWRlbnRpdHk8L2k+XFxuICAgIDxkaXYgY2xhc3M9XFxcIml0ZW0tY29udGVudFxcXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiaXRlbS1sYWJlbFxcXCI+XFxuICAgICAgICA8cCBjbGFzcz1cXFwiaXRlbS10aXRsZVxcXCI+SmFjazwvcD5cXG4gICAgICAgIDxwPkxpbnV4IExvdmVyPC9wPlxcbiAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gIDwvZGl2PlxcbiAgPGRpdiBjbGFzcz1cXFwiaXRlbVxcXCI+XFxuICAgIDxpPnBlcm1faWRlbnRpdHk8L2k+XFxuICAgIDxkaXYgY2xhc3M9XFxcIml0ZW0tY29udGVudFxcXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiaXRlbS1sYWJlbFxcXCI+XFxuICAgICAgICA8cCBjbGFzcz1cXFwiaXRlbS10aXRsZVxcXCI+Sm9objwvcD5cXG4gICAgICAgIDxwPldlYiBEZXZlbG9wZXI8L3A+XFxuICAgICAgICA8cD5RdWFzYXIgRnJhbWV3b3JrPC9wPlxcbiAgICAgIDwvZGl2PlxcbiAgICAgIDxpPm1haWw8L2k+XFxuICAgIDwvZGl2PlxcbiAgPC9kaXY+XFxuICA8ZGl2IGNsYXNzPVxcXCJpdGVtXFxcIj5cXG4gICAgPGk+cGVybV9pZGVudGl0eTwvaT5cXG4gICAgPGRpdiBjbGFzcz1cXFwiaXRlbS1jb250ZW50XFxcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJpdGVtLWxhYmVsXFxcIj5cXG4gICAgICAgIDxwIGNsYXNzPVxcXCJpdGVtLXRpdGxlXFxcIj5Kb2U8L3A+XFxuICAgICAgICA8cD5OZXdiaWU8L3A+XFxuICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgPC9kaXY+XFxuICA8ZGl2IGNsYXNzPVxcXCJpdGVtXFxcIj5cXG4gICAgPGk+cGVybV9pZGVudGl0eTwvaT5cXG4gICAgPGRpdiBjbGFzcz1cXFwiaXRlbS1jb250ZW50XFxcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJpdGVtLWxhYmVsXFxcIj5cXG4gICAgICAgIDxwIGNsYXNzPVxcXCJpdGVtLXRpdGxlXFxcIj5MaW51eCBMb3ZlcjwvcD5cXG4gICAgICAgIDxwPkxpbnV4IHJ1bHohPC9wPlxcbiAgICAgICAgPHA+UXVhc2FyIHJ1bHohPC9wPlxcbiAgICAgIDwvZGl2PlxcbiAgICAgIDxpPm1haWw8L2k+XFxuICAgIDwvZGl2PlxcbiAgPC9kaXY+XFxuPC9kaXY+XFxuXCJcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yYXctbG9hZGVyIS4vc3JjL3BhZ2VzL2xpc3QtbXVsdGlsaW5lL3ZpZXcubGlzdC1tdWx0aWxpbmUuaHRtbFxuICoqIG1vZHVsZSBpZCA9IDg0XG4gKiogbW9kdWxlIGNodW5rcyA9IDQxXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ }

/******/ });