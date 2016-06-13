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

	module.exports = __webpack_require__(108);


/***/ },

/***/ 108:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar html = __webpack_require__(109);\n\nmodule.exports = {\n  template: html,\n  ready: function() {\n    quasar.current.layout.vm.$data.title = 'CSS Shadows';\n  }\n};\n\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvc2hhZG93cy9zY3JpcHQuc2hhZG93cy5qcz8zNzQyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIxMDguanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBodG1sID0gcmVxdWlyZSgncmF3IS4vdmlldy5zaGFkb3dzLmh0bWwnKTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHRlbXBsYXRlOiBodG1sLFxuICByZWFkeTogZnVuY3Rpb24oKSB7XG4gICAgcXVhc2FyLmN1cnJlbnQubGF5b3V0LnZtLiRkYXRhLnRpdGxlID0gJ0NTUyBTaGFkb3dzJztcbiAgfVxufTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvcGFnZXMvc2hhZG93cy9zY3JpcHQuc2hhZG93cy5qc1xuICoqIG1vZHVsZSBpZCA9IDEwOFxuICoqIG1vZHVsZSBjaHVua3MgPSA1M1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ },

/***/ 109:
/***/ function(module, exports) {

	eval("module.exports = \"<div style=\\\"margin: 10px; text-align: center\\\">\\n  <div class=\\\"flex inline shadow-box items-center justify-center inset-shadow\\\">.inset-shadow</div>\\n  <div class=\\\"flex inline shadow-box items-center justify-center\\\" v-for=\\\"n in 5\\\" :class=\\\"['shadow-' + (n + 1)]\\\">.shadow-{{n+1}}</div>\\n</div>\\n\"\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvc2hhZG93cy92aWV3LnNoYWRvd3MuaHRtbD9lZjE5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDRDQUE0Qyw4UEFBOFAsS0FBSyIsImZpbGUiOiIxMDkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBzdHlsZT1cXFwibWFyZ2luOiAxMHB4OyB0ZXh0LWFsaWduOiBjZW50ZXJcXFwiPlxcbiAgPGRpdiBjbGFzcz1cXFwiZmxleCBpbmxpbmUgc2hhZG93LWJveCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgaW5zZXQtc2hhZG93XFxcIj4uaW5zZXQtc2hhZG93PC9kaXY+XFxuICA8ZGl2IGNsYXNzPVxcXCJmbGV4IGlubGluZSBzaGFkb3ctYm94IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclxcXCIgdi1mb3I9XFxcIm4gaW4gNVxcXCIgOmNsYXNzPVxcXCJbJ3NoYWRvdy0nICsgKG4gKyAxKV1cXFwiPi5zaGFkb3cte3tuKzF9fTwvZGl2PlxcbjwvZGl2PlxcblwiXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmF3LWxvYWRlciEuL3NyYy9wYWdlcy9zaGFkb3dzL3ZpZXcuc2hhZG93cy5odG1sXG4gKiogbW9kdWxlIGlkID0gMTA5XG4gKiogbW9kdWxlIGNodW5rcyA9IDUzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ }

/******/ });