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

	module.exports = __webpack_require__(85);


/***/ },

/***/ 85:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar html = __webpack_require__(86);\n\nmodule.exports = {\n  template: html,\n  ready: function() {\n    quasar.current.layout.vm.$data.title = 'Lists with Sliding Actions';\n  }\n};\n\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvbGlzdC1zbGlkaW5nLWFjdGlvbnMvc2NyaXB0Lmxpc3Qtc2xpZGluZy1hY3Rpb25zLmpzPzk3ZGMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ijg1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgaHRtbCA9IHJlcXVpcmUoJ3JhdyEuL3ZpZXcubGlzdC1zbGlkaW5nLWFjdGlvbnMuaHRtbCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgdGVtcGxhdGU6IGh0bWwsXG4gIHJlYWR5OiBmdW5jdGlvbigpIHtcbiAgICBxdWFzYXIuY3VycmVudC5sYXlvdXQudm0uJGRhdGEudGl0bGUgPSAnTGlzdHMgd2l0aCBTbGlkaW5nIEFjdGlvbnMnO1xuICB9XG59O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9wYWdlcy9saXN0LXNsaWRpbmctYWN0aW9ucy9zY3JpcHQubGlzdC1zbGlkaW5nLWFjdGlvbnMuanNcbiAqKiBtb2R1bGUgaWQgPSA4NVxuICoqIG1vZHVsZSBjaHVua3MgPSA0MlxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ },

/***/ 86:
/***/ function(module, exports) {

	eval("module.exports = \"<h5>On desktop: drag label to the left with your mouse.</h5>\\n<h5>On touch capable screens, pan the label to the left.</h5>\\n<br>\\n<div class=\\\"list bordered\\\">\\n  <div class=\\\"item\\\">\\n    <i>explore</i>\\n    <div class=\\\"item-swipe\\\">\\n      <button class=\\\"primary\\\">More</button>\\n      <button class=\\\"secondary\\\">Text</button>\\n      <button class=\\\"tertiary\\\">Call</button>\\n    </div>\\n    <div class=\\\"item-content\\\" v-swipe-item>\\n      <div class=\\\"item-label\\\">Item Label</div>\\n      <div class=\\\"item-value\\\">Value</div>\\n    </div>\\n  </div>\\n  <div class=\\\"list-divider\\\"></div>\\n  <div class=\\\"item\\\">\\n    <i>perm_identity</i>\\n    <div class=\\\"item-swipe\\\">\\n      <button class=\\\"primary\\\">More</button>\\n      <button class=\\\"secondary\\\">Text</button>\\n    </div>\\n    <div class=\\\"item-content\\\" v-swipe-item>\\n      <div class=\\\"item-label\\\">Item Label</div>\\n      <div class=\\\"item-value\\\">Value</div>\\n    </div>\\n  </div>\\n  <div class=\\\"list-divider\\\"></div>\\n  <div class=\\\"item\\\">\\n    <i>query_builder</i>\\n    <div class=\\\"item-swipe\\\">\\n      <button class=\\\"tertiary\\\">Call</button>\\n    </div>\\n    <div class=\\\"item-content\\\" v-swipe-item>\\n      <div class=\\\"item-label\\\">Item Label</div>\\n      <div class=\\\"item-value\\\">Value</div>\\n    </div>\\n  </div>\\n</div>\\n\"\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvbGlzdC1zbGlkaW5nLWFjdGlvbnMvdmlldy5saXN0LXNsaWRpbmctYWN0aW9ucy5odG1sPzUxNTciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiODYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IFwiPGg1Pk9uIGRlc2t0b3A6IGRyYWcgbGFiZWwgdG8gdGhlIGxlZnQgd2l0aCB5b3VyIG1vdXNlLjwvaDU+XFxuPGg1Pk9uIHRvdWNoIGNhcGFibGUgc2NyZWVucywgcGFuIHRoZSBsYWJlbCB0byB0aGUgbGVmdC48L2g1Plxcbjxicj5cXG48ZGl2IGNsYXNzPVxcXCJsaXN0IGJvcmRlcmVkXFxcIj5cXG4gIDxkaXYgY2xhc3M9XFxcIml0ZW1cXFwiPlxcbiAgICA8aT5leHBsb3JlPC9pPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJpdGVtLXN3aXBlXFxcIj5cXG4gICAgICA8YnV0dG9uIGNsYXNzPVxcXCJwcmltYXJ5XFxcIj5Nb3JlPC9idXR0b24+XFxuICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwic2Vjb25kYXJ5XFxcIj5UZXh0PC9idXR0b24+XFxuICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwidGVydGlhcnlcXFwiPkNhbGw8L2J1dHRvbj5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcIml0ZW0tY29udGVudFxcXCIgdi1zd2lwZS1pdGVtPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcIml0ZW0tbGFiZWxcXFwiPkl0ZW0gTGFiZWw8L2Rpdj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJpdGVtLXZhbHVlXFxcIj5WYWx1ZTwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gIDwvZGl2PlxcbiAgPGRpdiBjbGFzcz1cXFwibGlzdC1kaXZpZGVyXFxcIj48L2Rpdj5cXG4gIDxkaXYgY2xhc3M9XFxcIml0ZW1cXFwiPlxcbiAgICA8aT5wZXJtX2lkZW50aXR5PC9pPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJpdGVtLXN3aXBlXFxcIj5cXG4gICAgICA8YnV0dG9uIGNsYXNzPVxcXCJwcmltYXJ5XFxcIj5Nb3JlPC9idXR0b24+XFxuICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwic2Vjb25kYXJ5XFxcIj5UZXh0PC9idXR0b24+XFxuICAgIDwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJpdGVtLWNvbnRlbnRcXFwiIHYtc3dpcGUtaXRlbT5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJpdGVtLWxhYmVsXFxcIj5JdGVtIExhYmVsPC9kaXY+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiaXRlbS12YWx1ZVxcXCI+VmFsdWU8L2Rpdj5cXG4gICAgPC9kaXY+XFxuICA8L2Rpdj5cXG4gIDxkaXYgY2xhc3M9XFxcImxpc3QtZGl2aWRlclxcXCI+PC9kaXY+XFxuICA8ZGl2IGNsYXNzPVxcXCJpdGVtXFxcIj5cXG4gICAgPGk+cXVlcnlfYnVpbGRlcjwvaT5cXG4gICAgPGRpdiBjbGFzcz1cXFwiaXRlbS1zd2lwZVxcXCI+XFxuICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwidGVydGlhcnlcXFwiPkNhbGw8L2J1dHRvbj5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcIml0ZW0tY29udGVudFxcXCIgdi1zd2lwZS1pdGVtPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcIml0ZW0tbGFiZWxcXFwiPkl0ZW0gTGFiZWw8L2Rpdj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJpdGVtLXZhbHVlXFxcIj5WYWx1ZTwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gIDwvZGl2PlxcbjwvZGl2PlxcblwiXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmF3LWxvYWRlciEuL3NyYy9wYWdlcy9saXN0LXNsaWRpbmctYWN0aW9ucy92aWV3Lmxpc3Qtc2xpZGluZy1hY3Rpb25zLmh0bWxcbiAqKiBtb2R1bGUgaWQgPSA4NlxuICoqIG1vZHVsZSBjaHVua3MgPSA0MlxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ }

/******/ });