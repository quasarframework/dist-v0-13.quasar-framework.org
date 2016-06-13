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

	module.exports = __webpack_require__(9);


/***/ },

/***/ 9:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar html = __webpack_require__(10);\n\nmodule.exports = {\n  template: html,\n  ready: function() {\n    quasar.current.layout.vm.$data.title = 'App Fullscreen';\n  },\n  methods: {\n    toggleFullscreen: function() {\n      quasar.toggle.fullscreen();\n    }\n  }\n};\n\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvYXBwLWZ1bGxzY3JlZW4vc2NyaXB0LmFwcC1mdWxsc2NyZWVuLmpzP2NlMTkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6IjkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBodG1sID0gcmVxdWlyZSgncmF3IS4vdmlldy5hcHAtZnVsbHNjcmVlbi5odG1sJyk7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICB0ZW1wbGF0ZTogaHRtbCxcbiAgcmVhZHk6IGZ1bmN0aW9uKCkge1xuICAgIHF1YXNhci5jdXJyZW50LmxheW91dC52bS4kZGF0YS50aXRsZSA9ICdBcHAgRnVsbHNjcmVlbic7XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICB0b2dnbGVGdWxsc2NyZWVuOiBmdW5jdGlvbigpIHtcbiAgICAgIHF1YXNhci50b2dnbGUuZnVsbHNjcmVlbigpO1xuICAgIH1cbiAgfVxufTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvcGFnZXMvYXBwLWZ1bGxzY3JlZW4vc2NyaXB0LmFwcC1mdWxsc2NyZWVuLmpzXG4gKiogbW9kdWxlIGlkID0gOVxuICoqIG1vZHVsZSBjaHVua3MgPSA0XG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ },

/***/ 10:
/***/ function(module, exports) {

	eval("module.exports = \"<h5>Click/Tap to switch between fullscreen mode and default mode.</h5>\\n\\n<p>\\n  <button\\n    class=\\\"secondary\\\"\\n    @click=\\\"toggleFullscreen\\\"\\n  >\\n    <i class=\\\"on-left\\\">zoom_out_map</i>\\n    Toggle Fullscreen\\n  </button>\\n</p>\\n\"\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvYXBwLWZ1bGxzY3JlZW4vdmlldy5hcHAtZnVsbHNjcmVlbi5odG1sPzQyNTUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiMTAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IFwiPGg1PkNsaWNrL1RhcCB0byBzd2l0Y2ggYmV0d2VlbiBmdWxsc2NyZWVuIG1vZGUgYW5kIGRlZmF1bHQgbW9kZS48L2g1PlxcblxcbjxwPlxcbiAgPGJ1dHRvblxcbiAgICBjbGFzcz1cXFwic2Vjb25kYXJ5XFxcIlxcbiAgICBAY2xpY2s9XFxcInRvZ2dsZUZ1bGxzY3JlZW5cXFwiXFxuICA+XFxuICAgIDxpIGNsYXNzPVxcXCJvbi1sZWZ0XFxcIj56b29tX291dF9tYXA8L2k+XFxuICAgIFRvZ2dsZSBGdWxsc2NyZWVuXFxuICA8L2J1dHRvbj5cXG48L3A+XFxuXCJcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yYXctbG9hZGVyIS4vc3JjL3BhZ2VzL2FwcC1mdWxsc2NyZWVuL3ZpZXcuYXBwLWZ1bGxzY3JlZW4uaHRtbFxuICoqIG1vZHVsZSBpZCA9IDEwXG4gKiogbW9kdWxlIGNodW5rcyA9IDRcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9");

/***/ }

/******/ });