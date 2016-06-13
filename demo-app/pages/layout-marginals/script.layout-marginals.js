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

	module.exports = __webpack_require__(67);


/***/ },

/***/ 67:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar html = __webpack_require__(68);\n\nmodule.exports = {\n  template: html\n};\n\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvbGF5b3V0LW1hcmdpbmFscy9zY3JpcHQubGF5b3V0LW1hcmdpbmFscy5qcz9kMTBlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSIsImZpbGUiOiI2Ny5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIGh0bWwgPSByZXF1aXJlKCdyYXchLi92aWV3LmxheW91dC1tYXJnaW5hbHMuaHRtbCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgdGVtcGxhdGU6IGh0bWxcbn07XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3BhZ2VzL2xheW91dC1tYXJnaW5hbHMvc2NyaXB0LmxheW91dC1tYXJnaW5hbHMuanNcbiAqKiBtb2R1bGUgaWQgPSA2N1xuICoqIG1vZHVsZSBjaHVua3MgPSAzM1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ },

/***/ 68:
/***/ function(module, exports) {

	eval("module.exports = \"<p class=\\\"caption\\\">\\n  A Quasar Layout can have have a Header and/or a Footer (also called Marginals),\\n  which will always be visible to the user at all times as long as the Layout gets\\n  being used.\\n</p>\\n\\n<p class=\\\"caption\\\">\\n  Click on the upper right blinking icon (<i>description</i>) to view this Layout's source.\\n</p>\\n\"\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvbGF5b3V0LW1hcmdpbmFscy92aWV3LmxheW91dC1tYXJnaW5hbHMuaHRtbD85ODA3Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjY4LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIjxwIGNsYXNzPVxcXCJjYXB0aW9uXFxcIj5cXG4gIEEgUXVhc2FyIExheW91dCBjYW4gaGF2ZSBoYXZlIGEgSGVhZGVyIGFuZC9vciBhIEZvb3RlciAoYWxzbyBjYWxsZWQgTWFyZ2luYWxzKSxcXG4gIHdoaWNoIHdpbGwgYWx3YXlzIGJlIHZpc2libGUgdG8gdGhlIHVzZXIgYXQgYWxsIHRpbWVzIGFzIGxvbmcgYXMgdGhlIExheW91dCBnZXRzXFxuICBiZWluZyB1c2VkLlxcbjwvcD5cXG5cXG48cCBjbGFzcz1cXFwiY2FwdGlvblxcXCI+XFxuICBDbGljayBvbiB0aGUgdXBwZXIgcmlnaHQgYmxpbmtpbmcgaWNvbiAoPGk+ZGVzY3JpcHRpb248L2k+KSB0byB2aWV3IHRoaXMgTGF5b3V0J3Mgc291cmNlLlxcbjwvcD5cXG5cIlxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3Jhdy1sb2FkZXIhLi9zcmMvcGFnZXMvbGF5b3V0LW1hcmdpbmFscy92aWV3LmxheW91dC1tYXJnaW5hbHMuaHRtbFxuICoqIG1vZHVsZSBpZCA9IDY4XG4gKiogbW9kdWxlIGNodW5rcyA9IDMzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ }

/******/ });