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

	module.exports = __webpack_require__(15);


/***/ },

/***/ 15:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar html = __webpack_require__(16);\n\nmodule.exports = {\n  template: html,\n  ready: function() {\n    quasar.current.layout.vm.$data.title = 'Badges';\n  }\n};\n\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvYmFkZ2Uvc2NyaXB0LmJhZGdlLmpzP2FlMjIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6IjE1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgaHRtbCA9IHJlcXVpcmUoJ3JhdyEuL3ZpZXcuYmFkZ2UuaHRtbCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgdGVtcGxhdGU6IGh0bWwsXG4gIHJlYWR5OiBmdW5jdGlvbigpIHtcbiAgICBxdWFzYXIuY3VycmVudC5sYXlvdXQudm0uJGRhdGEudGl0bGUgPSAnQmFkZ2VzJztcbiAgfVxufTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvcGFnZXMvYmFkZ2Uvc2NyaXB0LmJhZGdlLmpzXG4gKiogbW9kdWxlIGlkID0gMTVcbiAqKiBtb2R1bGUgY2h1bmtzID0gN1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ },

/***/ 16:
/***/ function(module, exports) {

	eval("module.exports = \"<h5>Basic</h5>\\n<p>\\n  <div class=\\\"badge bg-primary text-white\\\">badge</div>\\n  <div class=\\\"badge bg-secondary text-white shadow-1\\\">10k</div>\\n</p>\\n\\n<h5>With Icon as Detail</h5>\\n<p>\\n  <div class=\\\"badge bg-purple text-white\\\">\\n    <i left-detail>mail</i> 10\\n  </div>\\n</p>\\n\\n<h5>With Text as Detail</h5>\\n<p>\\n  <div class=\\\"badge bg-amber\\\">\\n    <span class=\\\"left-detail\\\">Quasar</span> Framework\\n  </div>\\n  <br><br>\\n  <div class=\\\"badge bg-secondary text-white\\\">\\n    Quasar <span class=\\\"right-detail\\\">Framework</span>\\n  </div>\\n</p>\\n\"\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvYmFkZ2Uvdmlldy5iYWRnZS5odG1sP2ExZmEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiMTYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IFwiPGg1PkJhc2ljPC9oNT5cXG48cD5cXG4gIDxkaXYgY2xhc3M9XFxcImJhZGdlIGJnLXByaW1hcnkgdGV4dC13aGl0ZVxcXCI+YmFkZ2U8L2Rpdj5cXG4gIDxkaXYgY2xhc3M9XFxcImJhZGdlIGJnLXNlY29uZGFyeSB0ZXh0LXdoaXRlIHNoYWRvdy0xXFxcIj4xMGs8L2Rpdj5cXG48L3A+XFxuXFxuPGg1PldpdGggSWNvbiBhcyBEZXRhaWw8L2g1PlxcbjxwPlxcbiAgPGRpdiBjbGFzcz1cXFwiYmFkZ2UgYmctcHVycGxlIHRleHQtd2hpdGVcXFwiPlxcbiAgICA8aSBsZWZ0LWRldGFpbD5tYWlsPC9pPiAxMFxcbiAgPC9kaXY+XFxuPC9wPlxcblxcbjxoNT5XaXRoIFRleHQgYXMgRGV0YWlsPC9oNT5cXG48cD5cXG4gIDxkaXYgY2xhc3M9XFxcImJhZGdlIGJnLWFtYmVyXFxcIj5cXG4gICAgPHNwYW4gY2xhc3M9XFxcImxlZnQtZGV0YWlsXFxcIj5RdWFzYXI8L3NwYW4+IEZyYW1ld29ya1xcbiAgPC9kaXY+XFxuICA8YnI+PGJyPlxcbiAgPGRpdiBjbGFzcz1cXFwiYmFkZ2UgYmctc2Vjb25kYXJ5IHRleHQtd2hpdGVcXFwiPlxcbiAgICBRdWFzYXIgPHNwYW4gY2xhc3M9XFxcInJpZ2h0LWRldGFpbFxcXCI+RnJhbWV3b3JrPC9zcGFuPlxcbiAgPC9kaXY+XFxuPC9wPlxcblwiXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmF3LWxvYWRlciEuL3NyYy9wYWdlcy9iYWRnZS92aWV3LmJhZGdlLmh0bWxcbiAqKiBtb2R1bGUgaWQgPSAxNlxuICoqIG1vZHVsZSBjaHVua3MgPSA3XG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ }

/******/ });