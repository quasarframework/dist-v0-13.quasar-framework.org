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

	module.exports = __webpack_require__(115);


/***/ },

/***/ 115:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar html = __webpack_require__(116);\n\nmodule.exports = {\n  template: html,\n  data: {\n    state: false\n  },\n  methods: {\n    changeState: function() {\n      this.state = true;\n      setTimeout(function() {\n        this.state = false;\n      }.bind(this), 2000);\n    }\n  },\n  ready: function() {\n    quasar.current.layout.vm.$data.title = 'State Component';\n  }\n};\n\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvc3RhdGUtY29tcG9uZW50L3NjcmlwdC5zdGF0ZS1jb21wb25lbnQuanM/NTJkZCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6IjExNS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIGh0bWwgPSByZXF1aXJlKCdyYXchLi92aWV3LnN0YXRlLWNvbXBvbmVudC5odG1sJyk7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICB0ZW1wbGF0ZTogaHRtbCxcbiAgZGF0YToge1xuICAgIHN0YXRlOiBmYWxzZVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgY2hhbmdlU3RhdGU6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5zdGF0ZSA9IHRydWU7XG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLnN0YXRlID0gZmFsc2U7XG4gICAgICB9LmJpbmQodGhpcyksIDIwMDApO1xuICAgIH1cbiAgfSxcbiAgcmVhZHk6IGZ1bmN0aW9uKCkge1xuICAgIHF1YXNhci5jdXJyZW50LmxheW91dC52bS4kZGF0YS50aXRsZSA9ICdTdGF0ZSBDb21wb25lbnQnO1xuICB9XG59O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9wYWdlcy9zdGF0ZS1jb21wb25lbnQvc2NyaXB0LnN0YXRlLWNvbXBvbmVudC5qc1xuICoqIG1vZHVsZSBpZCA9IDExNVxuICoqIG1vZHVsZSBjaHVua3MgPSA1NlxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ },

/***/ 116:
/***/ function(module, exports) {

	eval("module.exports = \"<div class=\\\"row justify-center\\\" style=\\\"margin-top: 20px;\\\">\\n  <state :model.sync=\\\"state\\\">\\n    <div slot=\\\"active\\\">\\n      <spinner name=\\\"bars\\\" :size=\\\"51\\\" color=\\\"#90caf9\\\"></spinner>\\n      &nbsp;&nbsp;&nbsp;Active State\\n    </div>\\n\\n    <button class=\\\"primary\\\" @click=\\\"changeState()\\\">\\n      Default State - Hit me!\\n    </button>\\n  </state>\\n</div>\\n\"\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvc3RhdGUtY29tcG9uZW50L3ZpZXcuc3RhdGUtY29tcG9uZW50Lmh0bWw/MmZkMiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw2RUFBNkUscUpBQXFKLE1BQU0sTUFBTSIsImZpbGUiOiIxMTYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwicm93IGp1c3RpZnktY2VudGVyXFxcIiBzdHlsZT1cXFwibWFyZ2luLXRvcDogMjBweDtcXFwiPlxcbiAgPHN0YXRlIDptb2RlbC5zeW5jPVxcXCJzdGF0ZVxcXCI+XFxuICAgIDxkaXYgc2xvdD1cXFwiYWN0aXZlXFxcIj5cXG4gICAgICA8c3Bpbm5lciBuYW1lPVxcXCJiYXJzXFxcIiA6c2l6ZT1cXFwiNTFcXFwiIGNvbG9yPVxcXCIjOTBjYWY5XFxcIj48L3NwaW5uZXI+XFxuICAgICAgJm5ic3A7Jm5ic3A7Jm5ic3A7QWN0aXZlIFN0YXRlXFxuICAgIDwvZGl2PlxcblxcbiAgICA8YnV0dG9uIGNsYXNzPVxcXCJwcmltYXJ5XFxcIiBAY2xpY2s9XFxcImNoYW5nZVN0YXRlKClcXFwiPlxcbiAgICAgIERlZmF1bHQgU3RhdGUgLSBIaXQgbWUhXFxuICAgIDwvYnV0dG9uPlxcbiAgPC9zdGF0ZT5cXG48L2Rpdj5cXG5cIlxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3Jhdy1sb2FkZXIhLi9zcmMvcGFnZXMvc3RhdGUtY29tcG9uZW50L3ZpZXcuc3RhdGUtY29tcG9uZW50Lmh0bWxcbiAqKiBtb2R1bGUgaWQgPSAxMTZcbiAqKiBtb2R1bGUgY2h1bmtzID0gNTZcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9");

/***/ }

/******/ });