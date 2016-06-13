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

	module.exports = __webpack_require__(71);


/***/ },

/***/ 71:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar html = __webpack_require__(72);\n\nmodule.exports = {\n  template: html\n};\n\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvbGF5b3V0LW92ZXJ2aWV3L3NjcmlwdC5sYXlvdXQtb3ZlcnZpZXcuanM/OWUwNCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EiLCJmaWxlIjoiNzEuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBodG1sID0gcmVxdWlyZSgncmF3IS4vdmlldy5sYXlvdXQtb3ZlcnZpZXcuaHRtbCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgdGVtcGxhdGU6IGh0bWxcbn07XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3BhZ2VzL2xheW91dC1vdmVydmlldy9zY3JpcHQubGF5b3V0LW92ZXJ2aWV3LmpzXG4gKiogbW9kdWxlIGlkID0gNzFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMzVcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9");

/***/ },

/***/ 72:
/***/ function(module, exports) {

	eval("module.exports = \"<p class=\\\"caption\\\">\\n  Layouts are the elements that wrap page content, like navigational bar or drawer.\\n  Multiple pages can share the same Layout, which is one of the main reason for their\\n  existence.\\n</p>\\n\\n<p class=\\\"caption\\\">\\n  This example contains a drawer, header, footer and automatic navigational bar.\\n  Four pages in two groups.\\n</p>\\n\\n<p class=\\\"caption\\\">\\n  Click on the upper right blinking icon (<i>description</i>) to view this Layout's source.\\n</p>\\n\"\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvbGF5b3V0LW92ZXJ2aWV3L3ZpZXcubGF5b3V0LW92ZXJ2aWV3Lmh0bWw/ZGZkMSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiI3Mi5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gXCI8cCBjbGFzcz1cXFwiY2FwdGlvblxcXCI+XFxuICBMYXlvdXRzIGFyZSB0aGUgZWxlbWVudHMgdGhhdCB3cmFwIHBhZ2UgY29udGVudCwgbGlrZSBuYXZpZ2F0aW9uYWwgYmFyIG9yIGRyYXdlci5cXG4gIE11bHRpcGxlIHBhZ2VzIGNhbiBzaGFyZSB0aGUgc2FtZSBMYXlvdXQsIHdoaWNoIGlzIG9uZSBvZiB0aGUgbWFpbiByZWFzb24gZm9yIHRoZWlyXFxuICBleGlzdGVuY2UuXFxuPC9wPlxcblxcbjxwIGNsYXNzPVxcXCJjYXB0aW9uXFxcIj5cXG4gIFRoaXMgZXhhbXBsZSBjb250YWlucyBhIGRyYXdlciwgaGVhZGVyLCBmb290ZXIgYW5kIGF1dG9tYXRpYyBuYXZpZ2F0aW9uYWwgYmFyLlxcbiAgRm91ciBwYWdlcyBpbiB0d28gZ3JvdXBzLlxcbjwvcD5cXG5cXG48cCBjbGFzcz1cXFwiY2FwdGlvblxcXCI+XFxuICBDbGljayBvbiB0aGUgdXBwZXIgcmlnaHQgYmxpbmtpbmcgaWNvbiAoPGk+ZGVzY3JpcHRpb248L2k+KSB0byB2aWV3IHRoaXMgTGF5b3V0J3Mgc291cmNlLlxcbjwvcD5cXG5cIlxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3Jhdy1sb2FkZXIhLi9zcmMvcGFnZXMvbGF5b3V0LW92ZXJ2aWV3L3ZpZXcubGF5b3V0LW92ZXJ2aWV3Lmh0bWxcbiAqKiBtb2R1bGUgaWQgPSA3MlxuICoqIG1vZHVsZSBjaHVua3MgPSAzNVxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ }

/******/ });