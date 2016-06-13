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

	module.exports = __webpack_require__(61);


/***/ },

/***/ 61:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar html = __webpack_require__(62);\n\nfunction getPages() {\n  var pages = $.extend(true, {}, quasar.data.manifest.pages);\n\n  delete pages.index;\n  return pages;\n}\n\nmodule.exports = {\n  template: html,\n  data: {\n    pages: getPages()\n  },\n  methods: {\n    navigateTo: function(pageName) {\n      quasar.navigate.to.route('#/' + pageName);\n    },\n    toggleTheme: function() {\n      quasar.swap.theme();\n    }\n  },\n  ready: function() {\n    quasar.current.layout.vm.$data.title = 'Framework';\n  }\n};\n\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvaW5kZXgvc2NyaXB0LmluZGV4LmpzP2QzZWIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7O0FBRUE7QUFDQSwrQkFBK0I7O0FBRS9CO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6IjYxLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgaHRtbCA9IHJlcXVpcmUoJ3JhdyEuL3ZpZXcuaW5kZXguaHRtbCcpO1xuXG5mdW5jdGlvbiBnZXRQYWdlcygpIHtcbiAgdmFyIHBhZ2VzID0gJC5leHRlbmQodHJ1ZSwge30sIHF1YXNhci5kYXRhLm1hbmlmZXN0LnBhZ2VzKTtcblxuICBkZWxldGUgcGFnZXMuaW5kZXg7XG4gIHJldHVybiBwYWdlcztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHRlbXBsYXRlOiBodG1sLFxuICBkYXRhOiB7XG4gICAgcGFnZXM6IGdldFBhZ2VzKClcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIG5hdmlnYXRlVG86IGZ1bmN0aW9uKHBhZ2VOYW1lKSB7XG4gICAgICBxdWFzYXIubmF2aWdhdGUudG8ucm91dGUoJyMvJyArIHBhZ2VOYW1lKTtcbiAgICB9LFxuICAgIHRvZ2dsZVRoZW1lOiBmdW5jdGlvbigpIHtcbiAgICAgIHF1YXNhci5zd2FwLnRoZW1lKCk7XG4gICAgfVxuICB9LFxuICByZWFkeTogZnVuY3Rpb24oKSB7XG4gICAgcXVhc2FyLmN1cnJlbnQubGF5b3V0LnZtLiRkYXRhLnRpdGxlID0gJ0ZyYW1ld29yayc7XG4gIH1cbn07XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3BhZ2VzL2luZGV4L3NjcmlwdC5pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDYxXG4gKiogbW9kdWxlIGNodW5rcyA9IDMwXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ },

/***/ 62:
/***/ function(module, exports) {

	eval("module.exports = \"<p>\\n  <button class=\\\"primary\\\" @click=\\\"toggleTheme()\\\">Toggle Theme</button>\\n</p>\\n<div class=\\\"list bordered inner-delimiter highlight\\\">\\n  <div class=\\\"item\\\" v-for=\\\"page in pages\\\">\\n    <i>{{page.icon}}</i>\\n    <div class=\\\"item-content cursor-pointer\\\" @click=\\\"navigateTo(page.name)\\\">\\n      <div class=\\\"item-label\\\">{{page.label}}</div>\\n      <i>chevron_right</i>\\n    </div>\\n  </div>\\n</div>\\n\"\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvaW5kZXgvdmlldy5pbmRleC5odG1sPzA4YTYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMk5BQTJOLFdBQVcsMEhBQTBILFlBQVkiLCJmaWxlIjoiNjIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IFwiPHA+XFxuICA8YnV0dG9uIGNsYXNzPVxcXCJwcmltYXJ5XFxcIiBAY2xpY2s9XFxcInRvZ2dsZVRoZW1lKClcXFwiPlRvZ2dsZSBUaGVtZTwvYnV0dG9uPlxcbjwvcD5cXG48ZGl2IGNsYXNzPVxcXCJsaXN0IGJvcmRlcmVkIGlubmVyLWRlbGltaXRlciBoaWdobGlnaHRcXFwiPlxcbiAgPGRpdiBjbGFzcz1cXFwiaXRlbVxcXCIgdi1mb3I9XFxcInBhZ2UgaW4gcGFnZXNcXFwiPlxcbiAgICA8aT57e3BhZ2UuaWNvbn19PC9pPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJpdGVtLWNvbnRlbnQgY3Vyc29yLXBvaW50ZXJcXFwiIEBjbGljaz1cXFwibmF2aWdhdGVUbyhwYWdlLm5hbWUpXFxcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJpdGVtLWxhYmVsXFxcIj57e3BhZ2UubGFiZWx9fTwvZGl2PlxcbiAgICAgIDxpPmNoZXZyb25fcmlnaHQ8L2k+XFxuICAgIDwvZGl2PlxcbiAgPC9kaXY+XFxuPC9kaXY+XFxuXCJcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yYXctbG9hZGVyIS4vc3JjL3BhZ2VzL2luZGV4L3ZpZXcuaW5kZXguaHRtbFxuICoqIG1vZHVsZSBpZCA9IDYyXG4gKiogbW9kdWxlIGNodW5rcyA9IDMwXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ }

/******/ });