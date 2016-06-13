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

	module.exports = __webpack_require__(92);


/***/ },

/***/ 92:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar html = __webpack_require__(93);\n\nmodule.exports = {\n  template: html,\n  data: {\n    page: 1\n  },\n  ready: function() {\n    quasar.current.layout.vm.$data.title = 'Pagination';\n  }\n};\n\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvcGFnaW5hdGlvbi9zY3JpcHQucGFnaW5hdGlvbi5qcz9lMTdhIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6IjkyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgaHRtbCA9IHJlcXVpcmUoJ3JhdyEuL3ZpZXcucGFnaW5hdGlvbi5odG1sJyk7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICB0ZW1wbGF0ZTogaHRtbCxcbiAgZGF0YToge1xuICAgIHBhZ2U6IDFcbiAgfSxcbiAgcmVhZHk6IGZ1bmN0aW9uKCkge1xuICAgIHF1YXNhci5jdXJyZW50LmxheW91dC52bS4kZGF0YS50aXRsZSA9ICdQYWdpbmF0aW9uJztcbiAgfVxufTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvcGFnZXMvcGFnaW5hdGlvbi9zY3JpcHQucGFnaW5hdGlvbi5qc1xuICoqIG1vZHVsZSBpZCA9IDkyXG4gKiogbW9kdWxlIGNodW5rcyA9IDQ1XG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ },

/***/ 93:
/***/ function(module, exports) {

	eval("module.exports = \"<div class=\\\"badge bg-secondary text-white\\\">\\n  Model <span class=\\\"right-detail\\\"><em>{{page}}</em></span>\\n</div>\\n\\n<br><br><br>\\n\\n<pagination :model.sync=\\\"page\\\" :max=\\\"17\\\"></pagination>\\n\\n<br><br>\\n<h5>\\n  Click/Tap on the Input box and type out another page number\\n  then hit &lt;ENTER&gt;\\n</h5>\\n\"\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvcGFnaW5hdGlvbi92aWV3LnBhZ2luYXRpb24uaHRtbD9lMzgxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDRHQUE0RyxNQUFNLG9NQUFvTSxTQUFTIiwiZmlsZSI6IjkzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcImJhZGdlIGJnLXNlY29uZGFyeSB0ZXh0LXdoaXRlXFxcIj5cXG4gIE1vZGVsIDxzcGFuIGNsYXNzPVxcXCJyaWdodC1kZXRhaWxcXFwiPjxlbT57e3BhZ2V9fTwvZW0+PC9zcGFuPlxcbjwvZGl2Plxcblxcbjxicj48YnI+PGJyPlxcblxcbjxwYWdpbmF0aW9uIDptb2RlbC5zeW5jPVxcXCJwYWdlXFxcIiA6bWF4PVxcXCIxN1xcXCI+PC9wYWdpbmF0aW9uPlxcblxcbjxicj48YnI+XFxuPGg1PlxcbiAgQ2xpY2svVGFwIG9uIHRoZSBJbnB1dCBib3ggYW5kIHR5cGUgb3V0IGFub3RoZXIgcGFnZSBudW1iZXJcXG4gIHRoZW4gaGl0ICZsdDtFTlRFUiZndDtcXG48L2g1PlxcblwiXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmF3LWxvYWRlciEuL3NyYy9wYWdlcy9wYWdpbmF0aW9uL3ZpZXcucGFnaW5hdGlvbi5odG1sXG4gKiogbW9kdWxlIGlkID0gOTNcbiAqKiBtb2R1bGUgY2h1bmtzID0gNDVcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9");

/***/ }

/******/ });