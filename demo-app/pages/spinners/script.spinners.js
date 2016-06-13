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

	module.exports = __webpack_require__(113);


/***/ },

/***/ 113:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar html = __webpack_require__(114);\n\nmodule.exports = {\n  template: html,\n  data: {\n    size: 36,\n    color: '#000000',\n    spinners: [\n      'audio', 'ball', 'bars', 'circles', 'dots',\n      'grid', 'hearts', 'ios', 'oval', 'puff',\n      'rings', 'tail'\n    ],\n    colorOptions: [\n      {\n        label: 'Black',\n        value: '#000000'\n      },\n      {\n        label: 'Red',\n        value: '#ff0000'\n      },\n      {\n        label: 'Green',\n        value: '#00ff00'\n      },\n      {\n        label: 'Blue',\n        value: '#0000ff'\n      }\n    ]\n  },\n  ready: function() {\n    quasar.current.layout.vm.$data.title = 'Spinners';\n  }\n};\n\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvc3Bpbm5lcnMvc2NyaXB0LnNwaW5uZXJzLmpzPzM0OTIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiMTEzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgaHRtbCA9IHJlcXVpcmUoJ3JhdyEuL3ZpZXcuc3Bpbm5lcnMuaHRtbCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgdGVtcGxhdGU6IGh0bWwsXG4gIGRhdGE6IHtcbiAgICBzaXplOiAzNixcbiAgICBjb2xvcjogJyMwMDAwMDAnLFxuICAgIHNwaW5uZXJzOiBbXG4gICAgICAnYXVkaW8nLCAnYmFsbCcsICdiYXJzJywgJ2NpcmNsZXMnLCAnZG90cycsXG4gICAgICAnZ3JpZCcsICdoZWFydHMnLCAnaW9zJywgJ292YWwnLCAncHVmZicsXG4gICAgICAncmluZ3MnLCAndGFpbCdcbiAgICBdLFxuICAgIGNvbG9yT3B0aW9uczogW1xuICAgICAge1xuICAgICAgICBsYWJlbDogJ0JsYWNrJyxcbiAgICAgICAgdmFsdWU6ICcjMDAwMDAwJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6ICdSZWQnLFxuICAgICAgICB2YWx1ZTogJyNmZjAwMDAnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBsYWJlbDogJ0dyZWVuJyxcbiAgICAgICAgdmFsdWU6ICcjMDBmZjAwJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6ICdCbHVlJyxcbiAgICAgICAgdmFsdWU6ICcjMDAwMGZmJ1xuICAgICAgfVxuICAgIF1cbiAgfSxcbiAgcmVhZHk6IGZ1bmN0aW9uKCkge1xuICAgIHF1YXNhci5jdXJyZW50LmxheW91dC52bS4kZGF0YS50aXRsZSA9ICdTcGlubmVycyc7XG4gIH1cbn07XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3BhZ2VzL3NwaW5uZXJzL3NjcmlwdC5zcGlubmVycy5qc1xuICoqIG1vZHVsZSBpZCA9IDExM1xuICoqIG1vZHVsZSBjaHVua3MgPSA1NVxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ },

/***/ 114:
/***/ function(module, exports) {

	eval("module.exports = \"<h5>Configure them</h5>\\n\\n<div class=\\\"list item-delimiter bordered\\\">\\n  <div class=\\\"item\\\">\\n    <i>format_size</i>\\n    <div class=\\\"item-content\\\">\\n      <range :model.sync=\\\"size\\\" min=\\\"20\\\" max=\\\"256\\\"></range>\\n      <div class=\\\"item-left-margin item-value\\\" style=\\\"font-weight: bold\\\">{{size}}px</div>\\n    </div>\\n  </div>\\n  <div class=\\\"item fixed-label\\\">\\n    <i>palette</i>\\n    <div class=\\\"item-content\\\">\\n      <label for=\\\"color-spinner\\\" class=\\\"item-label\\\">Color</label>\\n      <input id=\\\"color-spinner\\\" v-model=\\\"color\\\">\\n      <choice :model.sync=\\\"color\\\" :options=\\\"colorOptions\\\" ok-label=\\\"Pick\\\" title=\\\"Spinner Color\\\"></choice>\\n    </div>\\n  </div>\\n</div>\\n\\n<h5>Hover over them to see their names</h5>\\n\\n<div style=\\\"margin-top: 20px\\\">\\n  <div v-for=\\\"spinner in spinners\\\" v-tooltip.inline=\\\"spinner\\\">\\n    <spinner :name=\\\"spinner\\\" :color=\\\"color\\\" :size=\\\"size\\\"></spinner>\\n  </div>\\n</div>\\n\"\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvc3Bpbm5lcnMvdmlldy5zcGlubmVycy5odG1sPzBhZWQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsK1RBQStULE1BQU0iLCJmaWxlIjoiMTE0LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIjxoNT5Db25maWd1cmUgdGhlbTwvaDU+XFxuXFxuPGRpdiBjbGFzcz1cXFwibGlzdCBpdGVtLWRlbGltaXRlciBib3JkZXJlZFxcXCI+XFxuICA8ZGl2IGNsYXNzPVxcXCJpdGVtXFxcIj5cXG4gICAgPGk+Zm9ybWF0X3NpemU8L2k+XFxuICAgIDxkaXYgY2xhc3M9XFxcIml0ZW0tY29udGVudFxcXCI+XFxuICAgICAgPHJhbmdlIDptb2RlbC5zeW5jPVxcXCJzaXplXFxcIiBtaW49XFxcIjIwXFxcIiBtYXg9XFxcIjI1NlxcXCI+PC9yYW5nZT5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJpdGVtLWxlZnQtbWFyZ2luIGl0ZW0tdmFsdWVcXFwiIHN0eWxlPVxcXCJmb250LXdlaWdodDogYm9sZFxcXCI+e3tzaXplfX1weDwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gIDwvZGl2PlxcbiAgPGRpdiBjbGFzcz1cXFwiaXRlbSBmaXhlZC1sYWJlbFxcXCI+XFxuICAgIDxpPnBhbGV0dGU8L2k+XFxuICAgIDxkaXYgY2xhc3M9XFxcIml0ZW0tY29udGVudFxcXCI+XFxuICAgICAgPGxhYmVsIGZvcj1cXFwiY29sb3Itc3Bpbm5lclxcXCIgY2xhc3M9XFxcIml0ZW0tbGFiZWxcXFwiPkNvbG9yPC9sYWJlbD5cXG4gICAgICA8aW5wdXQgaWQ9XFxcImNvbG9yLXNwaW5uZXJcXFwiIHYtbW9kZWw9XFxcImNvbG9yXFxcIj5cXG4gICAgICA8Y2hvaWNlIDptb2RlbC5zeW5jPVxcXCJjb2xvclxcXCIgOm9wdGlvbnM9XFxcImNvbG9yT3B0aW9uc1xcXCIgb2stbGFiZWw9XFxcIlBpY2tcXFwiIHRpdGxlPVxcXCJTcGlubmVyIENvbG9yXFxcIj48L2Nob2ljZT5cXG4gICAgPC9kaXY+XFxuICA8L2Rpdj5cXG48L2Rpdj5cXG5cXG48aDU+SG92ZXIgb3ZlciB0aGVtIHRvIHNlZSB0aGVpciBuYW1lczwvaDU+XFxuXFxuPGRpdiBzdHlsZT1cXFwibWFyZ2luLXRvcDogMjBweFxcXCI+XFxuICA8ZGl2IHYtZm9yPVxcXCJzcGlubmVyIGluIHNwaW5uZXJzXFxcIiB2LXRvb2x0aXAuaW5saW5lPVxcXCJzcGlubmVyXFxcIj5cXG4gICAgPHNwaW5uZXIgOm5hbWU9XFxcInNwaW5uZXJcXFwiIDpjb2xvcj1cXFwiY29sb3JcXFwiIDpzaXplPVxcXCJzaXplXFxcIj48L3NwaW5uZXI+XFxuICA8L2Rpdj5cXG48L2Rpdj5cXG5cIlxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3Jhdy1sb2FkZXIhLi9zcmMvcGFnZXMvc3Bpbm5lcnMvdmlldy5zcGlubmVycy5odG1sXG4gKiogbW9kdWxlIGlkID0gMTE0XG4gKiogbW9kdWxlIGNodW5rcyA9IDU1XG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ }

/******/ });