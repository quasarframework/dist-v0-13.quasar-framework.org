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

	module.exports = __webpack_require__(13);


/***/ },

/***/ 13:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar html = __webpack_require__(14);\n\nfunction pad(number) {\n  return (number < 10 ? '0' : '') + number;\n}\n\nmodule.exports = {\n  template: html,\n  methods: {\n    writeVisibilityState: function(state) {\n      var date = new Date();\n\n      $(this.$els.visibility).prepend(\n        pad(date.getHours()) + ':' + pad(date.getMinutes()) + ':' + pad(date.getSeconds()) + '.' + date.getMilliseconds() +\n        ' App became ' + state + '.<br>'\n      );\n    }\n  },\n  ready: function() {\n    quasar.current.layout.vm.$data.title = 'App Visibility';\n    quasar.events.on('app:visibility', this.writeVisibilityState);\n  },\n  destroyed: function() {\n    quasar.events.off('app:visibility', this.writeVisibilityState);\n  }\n};\n\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvYXBwLXZpc2liaWxpdHkvc2NyaXB0LmFwcC12aXNpYmlsaXR5LmpzP2NiZGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiMTMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBodG1sID0gcmVxdWlyZSgncmF3IS4vdmlldy5hcHAtdmlzaWJpbGl0eS5odG1sJyk7XG5cbmZ1bmN0aW9uIHBhZChudW1iZXIpIHtcbiAgcmV0dXJuIChudW1iZXIgPCAxMCA/ICcwJyA6ICcnKSArIG51bWJlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHRlbXBsYXRlOiBodG1sLFxuICBtZXRob2RzOiB7XG4gICAgd3JpdGVWaXNpYmlsaXR5U3RhdGU6IGZ1bmN0aW9uKHN0YXRlKSB7XG4gICAgICB2YXIgZGF0ZSA9IG5ldyBEYXRlKCk7XG5cbiAgICAgICQodGhpcy4kZWxzLnZpc2liaWxpdHkpLnByZXBlbmQoXG4gICAgICAgIHBhZChkYXRlLmdldEhvdXJzKCkpICsgJzonICsgcGFkKGRhdGUuZ2V0TWludXRlcygpKSArICc6JyArIHBhZChkYXRlLmdldFNlY29uZHMoKSkgKyAnLicgKyBkYXRlLmdldE1pbGxpc2Vjb25kcygpICtcbiAgICAgICAgJyBBcHAgYmVjYW1lICcgKyBzdGF0ZSArICcuPGJyPidcbiAgICAgICk7XG4gICAgfVxuICB9LFxuICByZWFkeTogZnVuY3Rpb24oKSB7XG4gICAgcXVhc2FyLmN1cnJlbnQubGF5b3V0LnZtLiRkYXRhLnRpdGxlID0gJ0FwcCBWaXNpYmlsaXR5JztcbiAgICBxdWFzYXIuZXZlbnRzLm9uKCdhcHA6dmlzaWJpbGl0eScsIHRoaXMud3JpdGVWaXNpYmlsaXR5U3RhdGUpO1xuICB9LFxuICBkZXN0cm95ZWQ6IGZ1bmN0aW9uKCkge1xuICAgIHF1YXNhci5ldmVudHMub2ZmKCdhcHA6dmlzaWJpbGl0eScsIHRoaXMud3JpdGVWaXNpYmlsaXR5U3RhdGUpO1xuICB9XG59O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9wYWdlcy9hcHAtdmlzaWJpbGl0eS9zY3JpcHQuYXBwLXZpc2liaWxpdHkuanNcbiAqKiBtb2R1bGUgaWQgPSAxM1xuICoqIG1vZHVsZSBjaHVua3MgPSA2XG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ },

/***/ 14:
/***/ function(module, exports) {

	eval("module.exports = \"<p class=\\\"caption\\\">\\n  Switch to other tab in your browser then back to see Visibility in action.\\n</p>\\n\\n<p v-el:visibility></p>\\n\"\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvYXBwLXZpc2liaWxpdHkvdmlldy5hcHAtdmlzaWJpbGl0eS5odG1sPzhlYjIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiMTQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IFwiPHAgY2xhc3M9XFxcImNhcHRpb25cXFwiPlxcbiAgU3dpdGNoIHRvIG90aGVyIHRhYiBpbiB5b3VyIGJyb3dzZXIgdGhlbiBiYWNrIHRvIHNlZSBWaXNpYmlsaXR5IGluIGFjdGlvbi5cXG48L3A+XFxuXFxuPHAgdi1lbDp2aXNpYmlsaXR5PjwvcD5cXG5cIlxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3Jhdy1sb2FkZXIhLi9zcmMvcGFnZXMvYXBwLXZpc2liaWxpdHkvdmlldy5hcHAtdmlzaWJpbGl0eS5odG1sXG4gKiogbW9kdWxlIGlkID0gMTRcbiAqKiBtb2R1bGUgY2h1bmtzID0gNlxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ }

/******/ });