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

	module.exports = __webpack_require__(45);


/***/ },

/***/ 45:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar html = __webpack_require__(46);\n\nmodule.exports = {\n  template: html,\n  data: {\n    mainColors: ['primary', 'secondary', 'tertiary', 'neutral', 'positive', 'negative', 'info', 'warning', 'light', 'dark', 'faded'],\n    colors: ['red', 'pink', 'purple', 'deep-purple', 'indigo', 'blue', 'light-blue', 'cyan', 'teal', 'green', 'light-green', 'lime', 'yellow', 'amber', 'orange', 'deep-orange', 'brown', 'grey', 'blue-grey']\n  },\n  ready: function() {\n    quasar.current.layout.vm.$data.title = 'Color Palette';\n  }\n};\n\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvY29sb3JzL3NjcmlwdC5jb2xvcnMuanM/OWIxNiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6IjQ1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgaHRtbCA9IHJlcXVpcmUoJ3JhdyEuL3ZpZXcuY29sb3JzLmh0bWwnKTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHRlbXBsYXRlOiBodG1sLFxuICBkYXRhOiB7XG4gICAgbWFpbkNvbG9yczogWydwcmltYXJ5JywgJ3NlY29uZGFyeScsICd0ZXJ0aWFyeScsICduZXV0cmFsJywgJ3Bvc2l0aXZlJywgJ25lZ2F0aXZlJywgJ2luZm8nLCAnd2FybmluZycsICdsaWdodCcsICdkYXJrJywgJ2ZhZGVkJ10sXG4gICAgY29sb3JzOiBbJ3JlZCcsICdwaW5rJywgJ3B1cnBsZScsICdkZWVwLXB1cnBsZScsICdpbmRpZ28nLCAnYmx1ZScsICdsaWdodC1ibHVlJywgJ2N5YW4nLCAndGVhbCcsICdncmVlbicsICdsaWdodC1ncmVlbicsICdsaW1lJywgJ3llbGxvdycsICdhbWJlcicsICdvcmFuZ2UnLCAnZGVlcC1vcmFuZ2UnLCAnYnJvd24nLCAnZ3JleScsICdibHVlLWdyZXknXVxuICB9LFxuICByZWFkeTogZnVuY3Rpb24oKSB7XG4gICAgcXVhc2FyLmN1cnJlbnQubGF5b3V0LnZtLiRkYXRhLnRpdGxlID0gJ0NvbG9yIFBhbGV0dGUnO1xuICB9XG59O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9wYWdlcy9jb2xvcnMvc2NyaXB0LmNvbG9ycy5qc1xuICoqIG1vZHVsZSBpZCA9IDQ1XG4gKiogbW9kdWxlIGNodW5rcyA9IDIyXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ },

/***/ 46:
/***/ function(module, exports) {

	eval("module.exports = \"<div class=\\\"text-center\\\">\\n  <h5>Main Colors</h5>\\n  <div\\n    class=\\\"main-color shadow-1 row inline items-center justify-center text-white\\\"\\n    v-for=\\\"color in mainColors\\\"\\n    :class=\\\"'bg-' + color\\\"\\n  >\\n    {{color}}\\n  </div>\\n\\n  <h5>Full Palette</h5>\\n  <div class=\\\"detail\\\" v-for=\\\"color in colors\\\">\\n    <h5 class=\\\"detailed-color shadow-1 column items-center justify-center text-white\\\" :class=\\\"'bg-' + color\\\">{{color}}</h5>\\n    <div class=\\\"detailed-color column items-center justify-center\\\" v-for=\\\"n in 14\\\" :class=\\\"'bg-' + color + '-' + (n+1)\\\">{{color}}-{{(n+1)}}</div>\\n  </div>\\n</div>\\n\"\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvY29sb3JzL3ZpZXcuY29sb3JzLmh0bWw/YzA3OSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnUEFBZ1AsT0FBTyw4TUFBOE0sT0FBTyx1SUFBdUksT0FBTyxHQUFHLE9BQU8iLCJmaWxlIjoiNDYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwidGV4dC1jZW50ZXJcXFwiPlxcbiAgPGg1Pk1haW4gQ29sb3JzPC9oNT5cXG4gIDxkaXZcXG4gICAgY2xhc3M9XFxcIm1haW4tY29sb3Igc2hhZG93LTEgcm93IGlubGluZSBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdGV4dC13aGl0ZVxcXCJcXG4gICAgdi1mb3I9XFxcImNvbG9yIGluIG1haW5Db2xvcnNcXFwiXFxuICAgIDpjbGFzcz1cXFwiJ2JnLScgKyBjb2xvclxcXCJcXG4gID5cXG4gICAge3tjb2xvcn19XFxuICA8L2Rpdj5cXG5cXG4gIDxoNT5GdWxsIFBhbGV0dGU8L2g1PlxcbiAgPGRpdiBjbGFzcz1cXFwiZGV0YWlsXFxcIiB2LWZvcj1cXFwiY29sb3IgaW4gY29sb3JzXFxcIj5cXG4gICAgPGg1IGNsYXNzPVxcXCJkZXRhaWxlZC1jb2xvciBzaGFkb3ctMSBjb2x1bW4gaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHRleHQtd2hpdGVcXFwiIDpjbGFzcz1cXFwiJ2JnLScgKyBjb2xvclxcXCI+e3tjb2xvcn19PC9oNT5cXG4gICAgPGRpdiBjbGFzcz1cXFwiZGV0YWlsZWQtY29sb3IgY29sdW1uIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclxcXCIgdi1mb3I9XFxcIm4gaW4gMTRcXFwiIDpjbGFzcz1cXFwiJ2JnLScgKyBjb2xvciArICctJyArIChuKzEpXFxcIj57e2NvbG9yfX0te3sobisxKX19PC9kaXY+XFxuICA8L2Rpdj5cXG48L2Rpdj5cXG5cIlxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3Jhdy1sb2FkZXIhLi9zcmMvcGFnZXMvY29sb3JzL3ZpZXcuY29sb3JzLmh0bWxcbiAqKiBtb2R1bGUgaWQgPSA0NlxuICoqIG1vZHVsZSBjaHVua3MgPSAyMlxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ }

/******/ });