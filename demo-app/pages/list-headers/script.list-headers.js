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

	module.exports = __webpack_require__(79);


/***/ },

/***/ 79:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar html = __webpack_require__(80);\n\nmodule.exports = {\n  template: html,\n  ready: function() {\n    quasar.current.layout.vm.$data.title = 'List Headers';\n  }\n};\n\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvbGlzdC1oZWFkZXJzL3NjcmlwdC5saXN0LWhlYWRlcnMuanM/YjZjYiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiNzkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBodG1sID0gcmVxdWlyZSgncmF3IS4vdmlldy5saXN0LWhlYWRlcnMuaHRtbCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgdGVtcGxhdGU6IGh0bWwsXG4gIHJlYWR5OiBmdW5jdGlvbigpIHtcbiAgICBxdWFzYXIuY3VycmVudC5sYXlvdXQudm0uJGRhdGEudGl0bGUgPSAnTGlzdCBIZWFkZXJzJztcbiAgfVxufTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvcGFnZXMvbGlzdC1oZWFkZXJzL3NjcmlwdC5saXN0LWhlYWRlcnMuanNcbiAqKiBtb2R1bGUgaWQgPSA3OVxuICoqIG1vZHVsZSBjaHVua3MgPSAzOVxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ },

/***/ 80:
/***/ function(module, exports) {

	eval("module.exports = \"<h5>Default Header</h5>\\n<div class=\\\"list item-delimiter\\\">\\n  <div class=\\\"list-header\\\">\\n    <h3>H3 Header</h3>\\n  </div>\\n  <div class=\\\"item\\\">Quasar Framework</div>\\n  <div class=\\\"item\\\">Quasar Framework</div>\\n  <div class=\\\"list-header\\\">\\n    Normal Text Header\\n  </div>\\n  <div class=\\\"item\\\">Quasar Framework</div>\\n  <div class=\\\"item\\\">Quasar Framework</div>\\n</div>\\n\\n<h5>Inverted Header</h5>\\n<div class=\\\"list item-delimiter\\\">\\n  <div class=\\\"list-header inverted\\\">\\n    <h3>H3 Header</h3>\\n  </div>\\n  <div class=\\\"item\\\">Quasar Framework</div>\\n  <div class=\\\"item\\\">Quasar Framework</div>\\n  <div class=\\\"list-header inverted\\\">\\n    Normal Text Header\\n  </div>\\n  <div class=\\\"item\\\">Quasar Framework</div>\\n  <div class=\\\"item\\\">Quasar Framework</div>\\n</div>\\n\"\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvbGlzdC1oZWFkZXJzL3ZpZXcubGlzdC1oZWFkZXJzLmh0bWw/YjBmOCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiI4MC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gXCI8aDU+RGVmYXVsdCBIZWFkZXI8L2g1PlxcbjxkaXYgY2xhc3M9XFxcImxpc3QgaXRlbS1kZWxpbWl0ZXJcXFwiPlxcbiAgPGRpdiBjbGFzcz1cXFwibGlzdC1oZWFkZXJcXFwiPlxcbiAgICA8aDM+SDMgSGVhZGVyPC9oMz5cXG4gIDwvZGl2PlxcbiAgPGRpdiBjbGFzcz1cXFwiaXRlbVxcXCI+UXVhc2FyIEZyYW1ld29yazwvZGl2PlxcbiAgPGRpdiBjbGFzcz1cXFwiaXRlbVxcXCI+UXVhc2FyIEZyYW1ld29yazwvZGl2PlxcbiAgPGRpdiBjbGFzcz1cXFwibGlzdC1oZWFkZXJcXFwiPlxcbiAgICBOb3JtYWwgVGV4dCBIZWFkZXJcXG4gIDwvZGl2PlxcbiAgPGRpdiBjbGFzcz1cXFwiaXRlbVxcXCI+UXVhc2FyIEZyYW1ld29yazwvZGl2PlxcbiAgPGRpdiBjbGFzcz1cXFwiaXRlbVxcXCI+UXVhc2FyIEZyYW1ld29yazwvZGl2PlxcbjwvZGl2PlxcblxcbjxoNT5JbnZlcnRlZCBIZWFkZXI8L2g1PlxcbjxkaXYgY2xhc3M9XFxcImxpc3QgaXRlbS1kZWxpbWl0ZXJcXFwiPlxcbiAgPGRpdiBjbGFzcz1cXFwibGlzdC1oZWFkZXIgaW52ZXJ0ZWRcXFwiPlxcbiAgICA8aDM+SDMgSGVhZGVyPC9oMz5cXG4gIDwvZGl2PlxcbiAgPGRpdiBjbGFzcz1cXFwiaXRlbVxcXCI+UXVhc2FyIEZyYW1ld29yazwvZGl2PlxcbiAgPGRpdiBjbGFzcz1cXFwiaXRlbVxcXCI+UXVhc2FyIEZyYW1ld29yazwvZGl2PlxcbiAgPGRpdiBjbGFzcz1cXFwibGlzdC1oZWFkZXIgaW52ZXJ0ZWRcXFwiPlxcbiAgICBOb3JtYWwgVGV4dCBIZWFkZXJcXG4gIDwvZGl2PlxcbiAgPGRpdiBjbGFzcz1cXFwiaXRlbVxcXCI+UXVhc2FyIEZyYW1ld29yazwvZGl2PlxcbiAgPGRpdiBjbGFzcz1cXFwiaXRlbVxcXCI+UXVhc2FyIEZyYW1ld29yazwvZGl2PlxcbjwvZGl2PlxcblwiXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmF3LWxvYWRlciEuL3NyYy9wYWdlcy9saXN0LWhlYWRlcnMvdmlldy5saXN0LWhlYWRlcnMuaHRtbFxuICoqIG1vZHVsZSBpZCA9IDgwXG4gKiogbW9kdWxlIGNodW5rcyA9IDM5XG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ }

/******/ });