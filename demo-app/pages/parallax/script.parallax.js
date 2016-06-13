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

	module.exports = __webpack_require__(94);


/***/ },

/***/ 94:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar html = __webpack_require__(95);\n\nmodule.exports = {\n  template: html,\n  data: {\n    loremipsum: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'\n  },\n  ready: function() {\n    quasar.current.layout.vm.$data.title = 'Parallax';\n  }\n};\n\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvcGFyYWxsYXgvc2NyaXB0LnBhcmFsbGF4LmpzPzU4MjUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiOTQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBodG1sID0gcmVxdWlyZSgncmF3IS4vdmlldy5wYXJhbGxheC5odG1sJyk7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICB0ZW1wbGF0ZTogaHRtbCxcbiAgZGF0YToge1xuICAgIGxvcmVtaXBzdW06ICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS4gVXQgZW5pbSBhZCBtaW5pbSB2ZW5pYW0sIHF1aXMgbm9zdHJ1ZCBleGVyY2l0YXRpb24gdWxsYW1jbyBsYWJvcmlzIG5pc2kgdXQgYWxpcXVpcCBleCBlYSBjb21tb2RvIGNvbnNlcXVhdC4gRHVpcyBhdXRlIGlydXJlIGRvbG9yIGluIHJlcHJlaGVuZGVyaXQgaW4gdm9sdXB0YXRlIHZlbGl0IGVzc2UgY2lsbHVtIGRvbG9yZSBldSBmdWdpYXQgbnVsbGEgcGFyaWF0dXIuIEV4Y2VwdGV1ciBzaW50IG9jY2FlY2F0IGN1cGlkYXRhdCBub24gcHJvaWRlbnQsIHN1bnQgaW4gY3VscGEgcXVpIG9mZmljaWEgZGVzZXJ1bnQgbW9sbGl0IGFuaW0gaWQgZXN0IGxhYm9ydW0uJ1xuICB9LFxuICByZWFkeTogZnVuY3Rpb24oKSB7XG4gICAgcXVhc2FyLmN1cnJlbnQubGF5b3V0LnZtLiRkYXRhLnRpdGxlID0gJ1BhcmFsbGF4JztcbiAgfVxufTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvcGFnZXMvcGFyYWxsYXgvc2NyaXB0LnBhcmFsbGF4LmpzXG4gKiogbW9kdWxlIGlkID0gOTRcbiAqKiBtb2R1bGUgY2h1bmtzID0gNDZcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9");

/***/ },

/***/ 95:
/***/ function(module, exports) {

	eval("module.exports = \"<h5>\\n  Scroll down (best using scrollbar instead of mouse scroll\\n  if on desktop) to see Parallax in action.\\n</h5>\\n\\n<p v-for=\\\"n in 7\\\" class=\\\"par-text\\\">{{loremipsum}}</p>\\n\\n<parallax src=\\\"assets/parallax1.jpg\\\" :height=\\\"200\\\">\\n  <div slot=\\\"loading\\\">Loading...</div>\\n  <h1>Parallax  Title</h1>\\n</parallax>\\n\\n<p v-for=\\\"n in 7\\\" class=\\\"par-text\\\">{{loremipsum}}</p>\\n\\n<parallax src=\\\"assets/parallax2.jpg\\\">\\n  <div slot=\\\"loading\\\">Loading...</div>\\n  <h1>Bridge</h1>\\n</parallax>\\n\\n<p v-for=\\\"n in 7\\\" class=\\\"par-text\\\">{{loremipsum}}</p>\\n\\n<parallax src=\\\"assets/parallax1.jpg\\\">\\n  <div slot=\\\"loading\\\">Loading...</div>\\n  <h1>Title</h1>\\n</parallax>\\n\\n<p v-for=\\\"n in 7\\\" class=\\\"par-text\\\">{{loremipsum}}</p>\\n\\n<parallax src=\\\"assets/mountains.jpg\\\" :height=\\\"200\\\">\\n  <div slot=\\\"loading\\\">Loading...</div>\\n  <h1>Mountains</h1>\\n</parallax>\\n\\n<p v-for=\\\"n in 7\\\" class=\\\"par-text\\\">{{loremipsum}}</p>\\n\"\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvcGFyYWxsYXgvdmlldy5wYXJhbGxheC5odG1sPzdlZTYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0xBQW9MLFlBQVksK0xBQStMLFlBQVksc0tBQXNLLFlBQVkscUtBQXFLLFlBQVkseUxBQXlMLFlBQVkiLCJmaWxlIjoiOTUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IFwiPGg1PlxcbiAgU2Nyb2xsIGRvd24gKGJlc3QgdXNpbmcgc2Nyb2xsYmFyIGluc3RlYWQgb2YgbW91c2Ugc2Nyb2xsXFxuICBpZiBvbiBkZXNrdG9wKSB0byBzZWUgUGFyYWxsYXggaW4gYWN0aW9uLlxcbjwvaDU+XFxuXFxuPHAgdi1mb3I9XFxcIm4gaW4gN1xcXCIgY2xhc3M9XFxcInBhci10ZXh0XFxcIj57e2xvcmVtaXBzdW19fTwvcD5cXG5cXG48cGFyYWxsYXggc3JjPVxcXCJhc3NldHMvcGFyYWxsYXgxLmpwZ1xcXCIgOmhlaWdodD1cXFwiMjAwXFxcIj5cXG4gIDxkaXYgc2xvdD1cXFwibG9hZGluZ1xcXCI+TG9hZGluZy4uLjwvZGl2PlxcbiAgPGgxPlBhcmFsbGF4ICBUaXRsZTwvaDE+XFxuPC9wYXJhbGxheD5cXG5cXG48cCB2LWZvcj1cXFwibiBpbiA3XFxcIiBjbGFzcz1cXFwicGFyLXRleHRcXFwiPnt7bG9yZW1pcHN1bX19PC9wPlxcblxcbjxwYXJhbGxheCBzcmM9XFxcImFzc2V0cy9wYXJhbGxheDIuanBnXFxcIj5cXG4gIDxkaXYgc2xvdD1cXFwibG9hZGluZ1xcXCI+TG9hZGluZy4uLjwvZGl2PlxcbiAgPGgxPkJyaWRnZTwvaDE+XFxuPC9wYXJhbGxheD5cXG5cXG48cCB2LWZvcj1cXFwibiBpbiA3XFxcIiBjbGFzcz1cXFwicGFyLXRleHRcXFwiPnt7bG9yZW1pcHN1bX19PC9wPlxcblxcbjxwYXJhbGxheCBzcmM9XFxcImFzc2V0cy9wYXJhbGxheDEuanBnXFxcIj5cXG4gIDxkaXYgc2xvdD1cXFwibG9hZGluZ1xcXCI+TG9hZGluZy4uLjwvZGl2PlxcbiAgPGgxPlRpdGxlPC9oMT5cXG48L3BhcmFsbGF4PlxcblxcbjxwIHYtZm9yPVxcXCJuIGluIDdcXFwiIGNsYXNzPVxcXCJwYXItdGV4dFxcXCI+e3tsb3JlbWlwc3VtfX08L3A+XFxuXFxuPHBhcmFsbGF4IHNyYz1cXFwiYXNzZXRzL21vdW50YWlucy5qcGdcXFwiIDpoZWlnaHQ9XFxcIjIwMFxcXCI+XFxuICA8ZGl2IHNsb3Q9XFxcImxvYWRpbmdcXFwiPkxvYWRpbmcuLi48L2Rpdj5cXG4gIDxoMT5Nb3VudGFpbnM8L2gxPlxcbjwvcGFyYWxsYXg+XFxuXFxuPHAgdi1mb3I9XFxcIm4gaW4gN1xcXCIgY2xhc3M9XFxcInBhci10ZXh0XFxcIj57e2xvcmVtaXBzdW19fTwvcD5cXG5cIlxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3Jhdy1sb2FkZXIhLi9zcmMvcGFnZXMvcGFyYWxsYXgvdmlldy5wYXJhbGxheC5odG1sXG4gKiogbW9kdWxlIGlkID0gOTVcbiAqKiBtb2R1bGUgY2h1bmtzID0gNDZcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9");

/***/ }

/******/ });