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

	module.exports = __webpack_require__(5);


/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	eval("\nvar html = __webpack_require__(6);\n\nmodule.exports = {\n  template: html,\n  data: {\n    pages: [\n      'layout-overview',\n      'layout-navigation',\n      'layout-drawer',\n      'layout-marginals'\n    ]\n  },\n  methods: {\n    openSource: function() {\n      quasar.open.url('https://github.com/rstoenescu/quasar-site/tree/master/demo-app/src/layouts/layout-example');\n    }\n  }\n};\n\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGF5b3V0cy9sYXlvdXQtZXhhbXBsZS9sYXlvdXQubGF5b3V0LWV4YW1wbGUuanM/MjlmYiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiI1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG52YXIgaHRtbCA9IHJlcXVpcmUoJ3JhdyEuL2xheW91dC5sYXlvdXQtZXhhbXBsZS5odG1sJyk7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICB0ZW1wbGF0ZTogaHRtbCxcbiAgZGF0YToge1xuICAgIHBhZ2VzOiBbXG4gICAgICAnbGF5b3V0LW92ZXJ2aWV3JyxcbiAgICAgICdsYXlvdXQtbmF2aWdhdGlvbicsXG4gICAgICAnbGF5b3V0LWRyYXdlcicsXG4gICAgICAnbGF5b3V0LW1hcmdpbmFscydcbiAgICBdXG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBvcGVuU291cmNlOiBmdW5jdGlvbigpIHtcbiAgICAgIHF1YXNhci5vcGVuLnVybCgnaHR0cHM6Ly9naXRodWIuY29tL3JzdG9lbmVzY3UvcXVhc2FyLXNpdGUvdHJlZS9tYXN0ZXIvZGVtby1hcHAvc3JjL2xheW91dHMvbGF5b3V0LWV4YW1wbGUnKTtcbiAgICB9XG4gIH1cbn07XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2xheW91dHMvbGF5b3V0LWV4YW1wbGUvbGF5b3V0LmxheW91dC1leGFtcGxlLmpzXG4gKiogbW9kdWxlIGlkID0gNVxuICoqIG1vZHVsZSBjaHVua3MgPSAyXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ },
/* 6 */
/***/ function(module, exports) {

	eval("module.exports = \"<screen>\\n\\n  <screen-tabs slot=\\\"navigation\\\"></screen-tabs>\\n\\n  <div slot=\\\"header\\\" class=\\\"row items-center\\\">\\n    <button class=\\\"left-drawer-toggle\\\"><i>menu</i></button>\\n    <p>Quasar Layout Example</p>\\n    <div class=\\\"group\\\">\\n      <button class=\\\"small\\\" v-exit-app><i>power_settings_new</i></button>\\n      <button class=\\\"small blink\\\" @click=\\\"openSource()\\\"><i>description</i></button>\\n    </div>\\n  </div>\\n\\n  <div slot=\\\"footer\\\" class=\\\"row items-center\\\">\\n    <p><em>Quasar Framework</em></p>\\n  </div>\\n\\n  <drawer>\\n    <div class=\\\"list platform-delimiter\\\">\\n      <div class=\\\"list-header\\\">\\n        Menu\\n      </div>\\n      <drawer-link v-for=\\\"page in pages\\\" :page=\\\"page\\\"></drawer-link>\\n    </div>\\n  </drawer>\\n\\n  <page class=\\\"smart-container\\\"></page>\\n\\n</screen>\\n\"\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGF5b3V0cy9sYXlvdXQtZXhhbXBsZS9sYXlvdXQubGF5b3V0LWV4YW1wbGUuaHRtbD83M2M1Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IFwiPHNjcmVlbj5cXG5cXG4gIDxzY3JlZW4tdGFicyBzbG90PVxcXCJuYXZpZ2F0aW9uXFxcIj48L3NjcmVlbi10YWJzPlxcblxcbiAgPGRpdiBzbG90PVxcXCJoZWFkZXJcXFwiIGNsYXNzPVxcXCJyb3cgaXRlbXMtY2VudGVyXFxcIj5cXG4gICAgPGJ1dHRvbiBjbGFzcz1cXFwibGVmdC1kcmF3ZXItdG9nZ2xlXFxcIj48aT5tZW51PC9pPjwvYnV0dG9uPlxcbiAgICA8cD5RdWFzYXIgTGF5b3V0IEV4YW1wbGU8L3A+XFxuICAgIDxkaXYgY2xhc3M9XFxcImdyb3VwXFxcIj5cXG4gICAgICA8YnV0dG9uIGNsYXNzPVxcXCJzbWFsbFxcXCIgdi1leGl0LWFwcD48aT5wb3dlcl9zZXR0aW5nc19uZXc8L2k+PC9idXR0b24+XFxuICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwic21hbGwgYmxpbmtcXFwiIEBjbGljaz1cXFwib3BlblNvdXJjZSgpXFxcIj48aT5kZXNjcmlwdGlvbjwvaT48L2J1dHRvbj5cXG4gICAgPC9kaXY+XFxuICA8L2Rpdj5cXG5cXG4gIDxkaXYgc2xvdD1cXFwiZm9vdGVyXFxcIiBjbGFzcz1cXFwicm93IGl0ZW1zLWNlbnRlclxcXCI+XFxuICAgIDxwPjxlbT5RdWFzYXIgRnJhbWV3b3JrPC9lbT48L3A+XFxuICA8L2Rpdj5cXG5cXG4gIDxkcmF3ZXI+XFxuICAgIDxkaXYgY2xhc3M9XFxcImxpc3QgcGxhdGZvcm0tZGVsaW1pdGVyXFxcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJsaXN0LWhlYWRlclxcXCI+XFxuICAgICAgICBNZW51XFxuICAgICAgPC9kaXY+XFxuICAgICAgPGRyYXdlci1saW5rIHYtZm9yPVxcXCJwYWdlIGluIHBhZ2VzXFxcIiA6cGFnZT1cXFwicGFnZVxcXCI+PC9kcmF3ZXItbGluaz5cXG4gICAgPC9kaXY+XFxuICA8L2RyYXdlcj5cXG5cXG4gIDxwYWdlIGNsYXNzPVxcXCJzbWFydC1jb250YWluZXJcXFwiPjwvcGFnZT5cXG5cXG48L3NjcmVlbj5cXG5cIlxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3Jhdy1sb2FkZXIhLi9zcmMvbGF5b3V0cy9sYXlvdXQtZXhhbXBsZS9sYXlvdXQubGF5b3V0LWV4YW1wbGUuaHRtbFxuICoqIG1vZHVsZSBpZCA9IDZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMlxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ }
/******/ ]);