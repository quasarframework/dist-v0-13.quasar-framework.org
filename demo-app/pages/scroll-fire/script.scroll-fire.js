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

	module.exports = __webpack_require__(104);


/***/ },

/***/ 104:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar html = __webpack_require__(105);\n\nmodule.exports = {\n  template: html,\n  data: {\n    loremipsum: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'\n  },\n  methods: {\n    bounceImage: function(element) {\n      element.velocity('callout.tada', {\n        display: null,\n        stagger: 200\n      });\n    }\n  },\n  ready: function() {\n    quasar.current.layout.vm.$data.title = 'Scroll Fire';\n  }\n};\n\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvc2Nyb2xsLWZpcmUvc2NyaXB0LnNjcm9sbC1maXJlLmpzPzFhMTkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIxMDQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBodG1sID0gcmVxdWlyZSgncmF3IS4vdmlldy5zY3JvbGwtZmlyZS5odG1sJyk7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICB0ZW1wbGF0ZTogaHRtbCxcbiAgZGF0YToge1xuICAgIGxvcmVtaXBzdW06ICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS4gVXQgZW5pbSBhZCBtaW5pbSB2ZW5pYW0sIHF1aXMgbm9zdHJ1ZCBleGVyY2l0YXRpb24gdWxsYW1jbyBsYWJvcmlzIG5pc2kgdXQgYWxpcXVpcCBleCBlYSBjb21tb2RvIGNvbnNlcXVhdC4gRHVpcyBhdXRlIGlydXJlIGRvbG9yIGluIHJlcHJlaGVuZGVyaXQgaW4gdm9sdXB0YXRlIHZlbGl0IGVzc2UgY2lsbHVtIGRvbG9yZSBldSBmdWdpYXQgbnVsbGEgcGFyaWF0dXIuIEV4Y2VwdGV1ciBzaW50IG9jY2FlY2F0IGN1cGlkYXRhdCBub24gcHJvaWRlbnQsIHN1bnQgaW4gY3VscGEgcXVpIG9mZmljaWEgZGVzZXJ1bnQgbW9sbGl0IGFuaW0gaWQgZXN0IGxhYm9ydW0uJ1xuICB9LFxuICBtZXRob2RzOiB7XG4gICAgYm91bmNlSW1hZ2U6IGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgIGVsZW1lbnQudmVsb2NpdHkoJ2NhbGxvdXQudGFkYScsIHtcbiAgICAgICAgZGlzcGxheTogbnVsbCxcbiAgICAgICAgc3RhZ2dlcjogMjAwXG4gICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIHJlYWR5OiBmdW5jdGlvbigpIHtcbiAgICBxdWFzYXIuY3VycmVudC5sYXlvdXQudm0uJGRhdGEudGl0bGUgPSAnU2Nyb2xsIEZpcmUnO1xuICB9XG59O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9wYWdlcy9zY3JvbGwtZmlyZS9zY3JpcHQuc2Nyb2xsLWZpcmUuanNcbiAqKiBtb2R1bGUgaWQgPSAxMDRcbiAqKiBtb2R1bGUgY2h1bmtzID0gNTFcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9");

/***/ },

/***/ 105:
/***/ function(module, exports) {

	eval("module.exports = \"<p class=\\\"caption\\\">Please scroll down to see the image and Scroll Fire being called with a nice Velocity effect.</p>\\n  <p v-for=\\\"n in 6\\\" class=\\\"par-text\\\">{{loremipsum}}</p>\\n\\n  <p class=\\\"caption\\\">Scroll Fire below. Reload page to see the effect again.</p>\\n  <p class=\\\"text-center\\\">\\n    <img v-scroll-fire=\\\"bounceImage\\\" src=\\\"assets/quasar.jpg\\\" style=\\\"width: 200px\\\">\\n  </p>\\n\\n  <p v-for=\\\"n in 3\\\" class=\\\"par-text\\\">{{loremipsum}}</p>\\n</div>\\n\"\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvc2Nyb2xsLWZpcmUvdmlldy5zY3JvbGwtZmlyZS5odG1sPzc4MjciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUxBQXFMLFlBQVksd1FBQXdRLFlBQVkiLCJmaWxlIjoiMTA1LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIjxwIGNsYXNzPVxcXCJjYXB0aW9uXFxcIj5QbGVhc2Ugc2Nyb2xsIGRvd24gdG8gc2VlIHRoZSBpbWFnZSBhbmQgU2Nyb2xsIEZpcmUgYmVpbmcgY2FsbGVkIHdpdGggYSBuaWNlIFZlbG9jaXR5IGVmZmVjdC48L3A+XFxuICA8cCB2LWZvcj1cXFwibiBpbiA2XFxcIiBjbGFzcz1cXFwicGFyLXRleHRcXFwiPnt7bG9yZW1pcHN1bX19PC9wPlxcblxcbiAgPHAgY2xhc3M9XFxcImNhcHRpb25cXFwiPlNjcm9sbCBGaXJlIGJlbG93LiBSZWxvYWQgcGFnZSB0byBzZWUgdGhlIGVmZmVjdCBhZ2Fpbi48L3A+XFxuICA8cCBjbGFzcz1cXFwidGV4dC1jZW50ZXJcXFwiPlxcbiAgICA8aW1nIHYtc2Nyb2xsLWZpcmU9XFxcImJvdW5jZUltYWdlXFxcIiBzcmM9XFxcImFzc2V0cy9xdWFzYXIuanBnXFxcIiBzdHlsZT1cXFwid2lkdGg6IDIwMHB4XFxcIj5cXG4gIDwvcD5cXG5cXG4gIDxwIHYtZm9yPVxcXCJuIGluIDNcXFwiIGNsYXNzPVxcXCJwYXItdGV4dFxcXCI+e3tsb3JlbWlwc3VtfX08L3A+XFxuPC9kaXY+XFxuXCJcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yYXctbG9hZGVyIS4vc3JjL3BhZ2VzL3Njcm9sbC1maXJlL3ZpZXcuc2Nyb2xsLWZpcmUuaHRtbFxuICoqIG1vZHVsZSBpZCA9IDEwNVxuICoqIG1vZHVsZSBjaHVua3MgPSA1MVxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ }

/******/ });