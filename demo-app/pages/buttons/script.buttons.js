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

	module.exports = __webpack_require__(19);


/***/ },

/***/ 19:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar html = __webpack_require__(20);\n\nmodule.exports = {\n  template: html,\n  ready: function() {\n    quasar.current.layout.vm.$data.title = 'Buttons';\n  }\n};\n\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvYnV0dG9ucy9zY3JpcHQuYnV0dG9ucy5qcz8xNjRhIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIxOS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIGh0bWwgPSByZXF1aXJlKCdyYXchLi92aWV3LmJ1dHRvbnMuaHRtbCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgdGVtcGxhdGU6IGh0bWwsXG4gIHJlYWR5OiBmdW5jdGlvbigpIHtcbiAgICBxdWFzYXIuY3VycmVudC5sYXlvdXQudm0uJGRhdGEudGl0bGUgPSAnQnV0dG9ucyc7XG4gIH1cbn07XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3BhZ2VzL2J1dHRvbnMvc2NyaXB0LmJ1dHRvbnMuanNcbiAqKiBtb2R1bGUgaWQgPSAxOVxuICoqIG1vZHVsZSBjaHVua3MgPSA5XG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ },

/***/ 20:
/***/ function(module, exports) {

	eval("module.exports = \"<h5>Regular (rectangle) and Circular</h5>\\n<p>\\n  <button class=\\\"primary\\\">Button</button>\\n  <button class=\\\"secondary circular\\\"><i>card_giftcard</i></button>\\n</p>\\n\\n<h5>Small, Medium (default) and Big</h5>\\n<p>\\n  <button class=\\\"primary small\\\">Button</button>\\n  <button class=\\\"primary\\\">Button</button>\\n  <button class=\\\"primary big\\\">Button</button>\\n</p>\\n<p>\\n  <button class=\\\"circular primary small\\\"><i>mail</i></button>\\n  <button class=\\\"circular primary\\\"><i>mail</i></button>\\n  <button class=\\\"circular primary big\\\"><i>mail</i></button>\\n</p>\\n\\n<h5>Regular with Icons</h5>\\n<p>\\n  <button class=\\\"primary\\\">\\n    <i class=\\\"on-left\\\">mail</i> On Left\\n  </button>\\n  <button class=\\\"secondary\\\">\\n    On Right <i class=\\\"on-right\\\">mail</i>\\n  </button>\\n</p>\\n\\n<h5>Color Examples</h5>\\n<p>\\n  <button class=\\\"secondary\\\">Secondary</button>\\n  <button class=\\\"dark\\\">Dark</button>\\n  <button class=\\\"orange\\\">Orange</button>\\n  <button class=\\\"light\\\">Light</button>\\n  <button class=\\\"indigo\\\">Indigo</button>\\n  <button class=\\\"red\\\">Red</button>\\n  <button class=\\\"teal circular\\\"><i>alarm</i></button>\\n</p>\\n\\n<h5>Disabled Buttons</h5>\\n<p>\\n  <button class=\\\"primary disabled\\\">Disabled</button>\\n  <button class=\\\"circular primary disabled\\\"><i>card_giftcard</i></button>\\n<p>\\n\\n<h5>Raised Buttons</h5>\\n<p>\\n  <button class=\\\"primary raised\\\">Raised</button>\\n  <button class=\\\"circular primary raised\\\"><i>card_giftcard</i></button>\\n<p>\\n\\n<h5>Clear Buttons</h5>\\n<p>\\n  <button class=\\\"primary clear\\\">Clear</button>\\n  <button class=\\\"circular primary clear\\\"><i>card_giftcard</i></button>\\n<p>\\n\\n<h5>Outline Buttons</h5>\\n<p>\\n  <button class=\\\"primary outline\\\">Outline</button>\\n  <button class=\\\"circular primary outline\\\"><i>card_giftcard</i></button>\\n<p>\\n\\n<h5>Round Buttons (applies only to regular shaped)</h5>\\n<p>\\n  <button class=\\\"primary round\\\">Round</button>\\n<p>\\n\\n<h5>Glossy Buttons</h5>\\n<p>\\n  <button class=\\\"primary glossy\\\">Glossy</button>\\n  <button class=\\\"secondary glossy\\\">Glossy</button>\\n  <button class=\\\"deep-orange glossy\\\">Glossy</button>\\n  <button class=\\\"circular primary glossy\\\"><i>card_giftcard</i></button>\\n  <button class=\\\"circular secondary glossy\\\"><i>card_giftcard</i></button>\\n  <button class=\\\"circular deep-orange glossy\\\"><i>card_giftcard</i></button>\\n<p>\\n\"\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvYnV0dG9ucy92aWV3LmJ1dHRvbnMuaHRtbD85ZjJhIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIjxoNT5SZWd1bGFyIChyZWN0YW5nbGUpIGFuZCBDaXJjdWxhcjwvaDU+XFxuPHA+XFxuICA8YnV0dG9uIGNsYXNzPVxcXCJwcmltYXJ5XFxcIj5CdXR0b248L2J1dHRvbj5cXG4gIDxidXR0b24gY2xhc3M9XFxcInNlY29uZGFyeSBjaXJjdWxhclxcXCI+PGk+Y2FyZF9naWZ0Y2FyZDwvaT48L2J1dHRvbj5cXG48L3A+XFxuXFxuPGg1PlNtYWxsLCBNZWRpdW0gKGRlZmF1bHQpIGFuZCBCaWc8L2g1PlxcbjxwPlxcbiAgPGJ1dHRvbiBjbGFzcz1cXFwicHJpbWFyeSBzbWFsbFxcXCI+QnV0dG9uPC9idXR0b24+XFxuICA8YnV0dG9uIGNsYXNzPVxcXCJwcmltYXJ5XFxcIj5CdXR0b248L2J1dHRvbj5cXG4gIDxidXR0b24gY2xhc3M9XFxcInByaW1hcnkgYmlnXFxcIj5CdXR0b248L2J1dHRvbj5cXG48L3A+XFxuPHA+XFxuICA8YnV0dG9uIGNsYXNzPVxcXCJjaXJjdWxhciBwcmltYXJ5IHNtYWxsXFxcIj48aT5tYWlsPC9pPjwvYnV0dG9uPlxcbiAgPGJ1dHRvbiBjbGFzcz1cXFwiY2lyY3VsYXIgcHJpbWFyeVxcXCI+PGk+bWFpbDwvaT48L2J1dHRvbj5cXG4gIDxidXR0b24gY2xhc3M9XFxcImNpcmN1bGFyIHByaW1hcnkgYmlnXFxcIj48aT5tYWlsPC9pPjwvYnV0dG9uPlxcbjwvcD5cXG5cXG48aDU+UmVndWxhciB3aXRoIEljb25zPC9oNT5cXG48cD5cXG4gIDxidXR0b24gY2xhc3M9XFxcInByaW1hcnlcXFwiPlxcbiAgICA8aSBjbGFzcz1cXFwib24tbGVmdFxcXCI+bWFpbDwvaT4gT24gTGVmdFxcbiAgPC9idXR0b24+XFxuICA8YnV0dG9uIGNsYXNzPVxcXCJzZWNvbmRhcnlcXFwiPlxcbiAgICBPbiBSaWdodCA8aSBjbGFzcz1cXFwib24tcmlnaHRcXFwiPm1haWw8L2k+XFxuICA8L2J1dHRvbj5cXG48L3A+XFxuXFxuPGg1PkNvbG9yIEV4YW1wbGVzPC9oNT5cXG48cD5cXG4gIDxidXR0b24gY2xhc3M9XFxcInNlY29uZGFyeVxcXCI+U2Vjb25kYXJ5PC9idXR0b24+XFxuICA8YnV0dG9uIGNsYXNzPVxcXCJkYXJrXFxcIj5EYXJrPC9idXR0b24+XFxuICA8YnV0dG9uIGNsYXNzPVxcXCJvcmFuZ2VcXFwiPk9yYW5nZTwvYnV0dG9uPlxcbiAgPGJ1dHRvbiBjbGFzcz1cXFwibGlnaHRcXFwiPkxpZ2h0PC9idXR0b24+XFxuICA8YnV0dG9uIGNsYXNzPVxcXCJpbmRpZ29cXFwiPkluZGlnbzwvYnV0dG9uPlxcbiAgPGJ1dHRvbiBjbGFzcz1cXFwicmVkXFxcIj5SZWQ8L2J1dHRvbj5cXG4gIDxidXR0b24gY2xhc3M9XFxcInRlYWwgY2lyY3VsYXJcXFwiPjxpPmFsYXJtPC9pPjwvYnV0dG9uPlxcbjwvcD5cXG5cXG48aDU+RGlzYWJsZWQgQnV0dG9uczwvaDU+XFxuPHA+XFxuICA8YnV0dG9uIGNsYXNzPVxcXCJwcmltYXJ5IGRpc2FibGVkXFxcIj5EaXNhYmxlZDwvYnV0dG9uPlxcbiAgPGJ1dHRvbiBjbGFzcz1cXFwiY2lyY3VsYXIgcHJpbWFyeSBkaXNhYmxlZFxcXCI+PGk+Y2FyZF9naWZ0Y2FyZDwvaT48L2J1dHRvbj5cXG48cD5cXG5cXG48aDU+UmFpc2VkIEJ1dHRvbnM8L2g1PlxcbjxwPlxcbiAgPGJ1dHRvbiBjbGFzcz1cXFwicHJpbWFyeSByYWlzZWRcXFwiPlJhaXNlZDwvYnV0dG9uPlxcbiAgPGJ1dHRvbiBjbGFzcz1cXFwiY2lyY3VsYXIgcHJpbWFyeSByYWlzZWRcXFwiPjxpPmNhcmRfZ2lmdGNhcmQ8L2k+PC9idXR0b24+XFxuPHA+XFxuXFxuPGg1PkNsZWFyIEJ1dHRvbnM8L2g1PlxcbjxwPlxcbiAgPGJ1dHRvbiBjbGFzcz1cXFwicHJpbWFyeSBjbGVhclxcXCI+Q2xlYXI8L2J1dHRvbj5cXG4gIDxidXR0b24gY2xhc3M9XFxcImNpcmN1bGFyIHByaW1hcnkgY2xlYXJcXFwiPjxpPmNhcmRfZ2lmdGNhcmQ8L2k+PC9idXR0b24+XFxuPHA+XFxuXFxuPGg1Pk91dGxpbmUgQnV0dG9uczwvaDU+XFxuPHA+XFxuICA8YnV0dG9uIGNsYXNzPVxcXCJwcmltYXJ5IG91dGxpbmVcXFwiPk91dGxpbmU8L2J1dHRvbj5cXG4gIDxidXR0b24gY2xhc3M9XFxcImNpcmN1bGFyIHByaW1hcnkgb3V0bGluZVxcXCI+PGk+Y2FyZF9naWZ0Y2FyZDwvaT48L2J1dHRvbj5cXG48cD5cXG5cXG48aDU+Um91bmQgQnV0dG9ucyAoYXBwbGllcyBvbmx5IHRvIHJlZ3VsYXIgc2hhcGVkKTwvaDU+XFxuPHA+XFxuICA8YnV0dG9uIGNsYXNzPVxcXCJwcmltYXJ5IHJvdW5kXFxcIj5Sb3VuZDwvYnV0dG9uPlxcbjxwPlxcblxcbjxoNT5HbG9zc3kgQnV0dG9uczwvaDU+XFxuPHA+XFxuICA8YnV0dG9uIGNsYXNzPVxcXCJwcmltYXJ5IGdsb3NzeVxcXCI+R2xvc3N5PC9idXR0b24+XFxuICA8YnV0dG9uIGNsYXNzPVxcXCJzZWNvbmRhcnkgZ2xvc3N5XFxcIj5HbG9zc3k8L2J1dHRvbj5cXG4gIDxidXR0b24gY2xhc3M9XFxcImRlZXAtb3JhbmdlIGdsb3NzeVxcXCI+R2xvc3N5PC9idXR0b24+XFxuICA8YnV0dG9uIGNsYXNzPVxcXCJjaXJjdWxhciBwcmltYXJ5IGdsb3NzeVxcXCI+PGk+Y2FyZF9naWZ0Y2FyZDwvaT48L2J1dHRvbj5cXG4gIDxidXR0b24gY2xhc3M9XFxcImNpcmN1bGFyIHNlY29uZGFyeSBnbG9zc3lcXFwiPjxpPmNhcmRfZ2lmdGNhcmQ8L2k+PC9idXR0b24+XFxuICA8YnV0dG9uIGNsYXNzPVxcXCJjaXJjdWxhciBkZWVwLW9yYW5nZSBnbG9zc3lcXFwiPjxpPmNhcmRfZ2lmdGNhcmQ8L2k+PC9idXR0b24+XFxuPHA+XFxuXCJcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yYXctbG9hZGVyIS4vc3JjL3BhZ2VzL2J1dHRvbnMvdmlldy5idXR0b25zLmh0bWxcbiAqKiBtb2R1bGUgaWQgPSAyMFxuICoqIG1vZHVsZSBjaHVua3MgPSA5XG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ }

/******/ });