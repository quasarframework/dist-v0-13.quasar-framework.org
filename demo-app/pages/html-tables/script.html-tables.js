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

	module.exports = __webpack_require__(57);


/***/ },

/***/ 57:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar html = __webpack_require__(58);\n\nmodule.exports = {\n  template: html,\n  data: {\n    styles: [\n      '',\n      'inner-delimiter',\n      'bordered',\n      'striped',\n      'highlight',\n      'centered',\n      'compact'\n    ]\n  },\n  ready: function() {\n    quasar.current.layout.vm.$data.title = 'HTML Tables';\n  }\n};\n\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvaHRtbC10YWJsZXMvc2NyaXB0Lmh0bWwtdGFibGVzLmpzPzc5MmQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6IjU3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgaHRtbCA9IHJlcXVpcmUoJ3JhdyEuL3ZpZXcuaHRtbC10YWJsZXMuaHRtbCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgdGVtcGxhdGU6IGh0bWwsXG4gIGRhdGE6IHtcbiAgICBzdHlsZXM6IFtcbiAgICAgICcnLFxuICAgICAgJ2lubmVyLWRlbGltaXRlcicsXG4gICAgICAnYm9yZGVyZWQnLFxuICAgICAgJ3N0cmlwZWQnLFxuICAgICAgJ2hpZ2hsaWdodCcsXG4gICAgICAnY2VudGVyZWQnLFxuICAgICAgJ2NvbXBhY3QnXG4gICAgXVxuICB9LFxuICByZWFkeTogZnVuY3Rpb24oKSB7XG4gICAgcXVhc2FyLmN1cnJlbnQubGF5b3V0LnZtLiRkYXRhLnRpdGxlID0gJ0hUTUwgVGFibGVzJztcbiAgfVxufTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvcGFnZXMvaHRtbC10YWJsZXMvc2NyaXB0Lmh0bWwtdGFibGVzLmpzXG4gKiogbW9kdWxlIGlkID0gNTdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMjhcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9");

/***/ },

/***/ 58:
/***/ function(module, exports) {

	eval("module.exports = \"<div v-for=\\\"style in styles\\\" style=\\\"margin-bottom: 30px; max-width: 400px;\\\">\\n  <div class=\\\"badge bg-secondary text-white\\\">\\n    Class <span class=\\\"right-detail\\\"><em>{{style ? style : '*none*'}}</em></span>\\n  </div>\\n\\n  <br><br>\\n\\n  <table :class=\\\"style\\\">\\n    <thead>\\n      <tr>\\n          <th>Name</th>\\n          <th>Price</th>\\n          <th>In Stock</th>\\n      </tr>\\n    </thead>\\n\\n    <tbody>\\n      <tr>\\n        <td>Item #1</td>\\n        <td>$10.11</td>\\n        <td>101</td>\\n      </tr>\\n      <tr>\\n        <td>Item #2</td>\\n        <td>$8.88</td>\\n        <td>34</td>\\n      </tr>\\n      <tr>\\n        <td>Item #3</td>\\n        <td>$0.15</td>\\n        <td>1670</td>\\n      </tr>\\n    </tbody>\\n  </table>\\n</div>\\n\"\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvaHRtbC10YWJsZXMvdmlldy5odG1sLXRhYmxlcy5odG1sP2JjMTgiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNkVBQTZFLGtCQUFrQixtR0FBbUcsMEJBQTBCIiwiZmlsZSI6IjU4LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgdi1mb3I9XFxcInN0eWxlIGluIHN0eWxlc1xcXCIgc3R5bGU9XFxcIm1hcmdpbi1ib3R0b206IDMwcHg7IG1heC13aWR0aDogNDAwcHg7XFxcIj5cXG4gIDxkaXYgY2xhc3M9XFxcImJhZGdlIGJnLXNlY29uZGFyeSB0ZXh0LXdoaXRlXFxcIj5cXG4gICAgQ2xhc3MgPHNwYW4gY2xhc3M9XFxcInJpZ2h0LWRldGFpbFxcXCI+PGVtPnt7c3R5bGUgPyBzdHlsZSA6ICcqbm9uZSonfX08L2VtPjwvc3Bhbj5cXG4gIDwvZGl2PlxcblxcbiAgPGJyPjxicj5cXG5cXG4gIDx0YWJsZSA6Y2xhc3M9XFxcInN0eWxlXFxcIj5cXG4gICAgPHRoZWFkPlxcbiAgICAgIDx0cj5cXG4gICAgICAgICAgPHRoPk5hbWU8L3RoPlxcbiAgICAgICAgICA8dGg+UHJpY2U8L3RoPlxcbiAgICAgICAgICA8dGg+SW4gU3RvY2s8L3RoPlxcbiAgICAgIDwvdHI+XFxuICAgIDwvdGhlYWQ+XFxuXFxuICAgIDx0Ym9keT5cXG4gICAgICA8dHI+XFxuICAgICAgICA8dGQ+SXRlbSAjMTwvdGQ+XFxuICAgICAgICA8dGQ+JDEwLjExPC90ZD5cXG4gICAgICAgIDx0ZD4xMDE8L3RkPlxcbiAgICAgIDwvdHI+XFxuICAgICAgPHRyPlxcbiAgICAgICAgPHRkPkl0ZW0gIzI8L3RkPlxcbiAgICAgICAgPHRkPiQ4Ljg4PC90ZD5cXG4gICAgICAgIDx0ZD4zNDwvdGQ+XFxuICAgICAgPC90cj5cXG4gICAgICA8dHI+XFxuICAgICAgICA8dGQ+SXRlbSAjMzwvdGQ+XFxuICAgICAgICA8dGQ+JDAuMTU8L3RkPlxcbiAgICAgICAgPHRkPjE2NzA8L3RkPlxcbiAgICAgIDwvdHI+XFxuICAgIDwvdGJvZHk+XFxuICA8L3RhYmxlPlxcbjwvZGl2PlxcblwiXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmF3LWxvYWRlciEuL3NyYy9wYWdlcy9odG1sLXRhYmxlcy92aWV3Lmh0bWwtdGFibGVzLmh0bWxcbiAqKiBtb2R1bGUgaWQgPSA1OFxuICoqIG1vZHVsZSBjaHVua3MgPSAyOFxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ }

/******/ });