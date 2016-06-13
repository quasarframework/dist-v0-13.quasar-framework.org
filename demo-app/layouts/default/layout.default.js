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
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	eval("\nvar html = __webpack_require__(2);\n\nmodule.exports = {\n  template: html,\n  data: {\n    title: 'Quasar Framework'\n  }\n};\n\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGF5b3V0cy9kZWZhdWx0L2xheW91dC5kZWZhdWx0LmpzPzc2Y2QiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIxLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG52YXIgaHRtbCA9IHJlcXVpcmUoJ3JhdyEuL2xheW91dC5kZWZhdWx0Lmh0bWwnKTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHRlbXBsYXRlOiBodG1sLFxuICBkYXRhOiB7XG4gICAgdGl0bGU6ICdRdWFzYXIgRnJhbWV3b3JrJ1xuICB9XG59O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9sYXlvdXRzL2RlZmF1bHQvbGF5b3V0LmRlZmF1bHQuanNcbiAqKiBtb2R1bGUgaWQgPSAxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9");

/***/ },
/* 2 */
/***/ function(module, exports) {

	eval("module.exports = \"<screen>\\n\\n  <div slot=\\\"header\\\" class=\\\"row items-center shadow-1\\\">\\n    <p>Quasar {{title}}</p>\\n  </div>\\n\\n  <page class=\\\"smart-container\\\"></page>\\n\\n</screen>\\n\"\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGF5b3V0cy9kZWZhdWx0L2xheW91dC5kZWZhdWx0Lmh0bWw/MGNkZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwyR0FBMkcsT0FBTyIsImZpbGUiOiIyLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIjxzY3JlZW4+XFxuXFxuICA8ZGl2IHNsb3Q9XFxcImhlYWRlclxcXCIgY2xhc3M9XFxcInJvdyBpdGVtcy1jZW50ZXIgc2hhZG93LTFcXFwiPlxcbiAgICA8cD5RdWFzYXIge3t0aXRsZX19PC9wPlxcbiAgPC9kaXY+XFxuXFxuICA8cGFnZSBjbGFzcz1cXFwic21hcnQtY29udGFpbmVyXFxcIj48L3BhZ2U+XFxuXFxuPC9zY3JlZW4+XFxuXCJcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yYXctbG9hZGVyIS4vc3JjL2xheW91dHMvZGVmYXVsdC9sYXlvdXQuZGVmYXVsdC5odG1sXG4gKiogbW9kdWxlIGlkID0gMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ }
/******/ ]);