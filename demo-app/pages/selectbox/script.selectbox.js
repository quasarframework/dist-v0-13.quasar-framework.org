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

	module.exports = __webpack_require__(106);


/***/ },

/***/ 106:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar html = __webpack_require__(107);\n\nmodule.exports = {\n  template: html,\n  data: {\n    select: 'fb',\n    multipleSelect: ['goog', 'twtr'],\n    selectOptions: [\n      {\n        label: 'Google',\n        value: 'goog'\n      },\n      {\n        label: 'Facebook',\n        value: 'fb'\n      },\n      {\n        label: 'Twitter',\n        value: 'twtr'\n      },\n      {\n        label: 'Apple Inc.',\n        value: 'appl'\n      },\n      {\n        label: 'Oracle',\n        value: 'ora'\n      }\n    ]\n  },\n  ready: function() {\n    quasar.current.layout.vm.$data.title = 'Selectbox';\n  }\n};\n\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvc2VsZWN0Ym94L3NjcmlwdC5zZWxlY3Rib3guanM/ZjdlNyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIxMDYuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBodG1sID0gcmVxdWlyZSgncmF3IS4vdmlldy5zZWxlY3Rib3guaHRtbCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgdGVtcGxhdGU6IGh0bWwsXG4gIGRhdGE6IHtcbiAgICBzZWxlY3Q6ICdmYicsXG4gICAgbXVsdGlwbGVTZWxlY3Q6IFsnZ29vZycsICd0d3RyJ10sXG4gICAgc2VsZWN0T3B0aW9uczogW1xuICAgICAge1xuICAgICAgICBsYWJlbDogJ0dvb2dsZScsXG4gICAgICAgIHZhbHVlOiAnZ29vZydcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiAnRmFjZWJvb2snLFxuICAgICAgICB2YWx1ZTogJ2ZiJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6ICdUd2l0dGVyJyxcbiAgICAgICAgdmFsdWU6ICd0d3RyJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6ICdBcHBsZSBJbmMuJyxcbiAgICAgICAgdmFsdWU6ICdhcHBsJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6ICdPcmFjbGUnLFxuICAgICAgICB2YWx1ZTogJ29yYSdcbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIHJlYWR5OiBmdW5jdGlvbigpIHtcbiAgICBxdWFzYXIuY3VycmVudC5sYXlvdXQudm0uJGRhdGEudGl0bGUgPSAnU2VsZWN0Ym94JztcbiAgfVxufTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvcGFnZXMvc2VsZWN0Ym94L3NjcmlwdC5zZWxlY3Rib3guanNcbiAqKiBtb2R1bGUgaWQgPSAxMDZcbiAqKiBtb2R1bGUgY2h1bmtzID0gNTJcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9");

/***/ },

/***/ 107:
/***/ function(module, exports) {

	eval("module.exports = \"<h5>Standalone</h5>\\n<choice :model.sync=\\\"select\\\" :options=\\\"selectOptions\\\" ok-label=\\\"Pick\\\" cancel-label=\\\"Neah\\\" title=\\\"Company\\\"></choice>\\n\\n<h5>Inside of a List</h5>\\n<div class=\\\"list item-delimiter bordered\\\">\\n  <div class=\\\"list-header\\\">Single Selection: <em>{{select}}</em></div>\\n  <div class=\\\"item\\\">\\n    <div class=\\\"item-content\\\">\\n      <div class=\\\"item-label\\\">Company</div>\\n      <choice :model.sync=\\\"select\\\" :options=\\\"selectOptions\\\" ok-label=\\\"Pick\\\" cancel-label=\\\"Neah\\\" title=\\\"Company\\\"></choice>\\n    </div>\\n  </div>\\n  <div class=\\\"item\\\">\\n    <div class=\\\"item-content\\\">\\n      <div class=\\\"item-label\\\">Company</div>\\n      <choice :model.sync=\\\"select\\\" :options=\\\"selectOptions\\\" ok-label=\\\"Pick\\\"></choice>\\n    </div>\\n  </div>\\n  <div class=\\\"list-header\\\">Multiple Selection: <em>{{multipleSelect}}</em></div>\\n  <div class=\\\"item\\\">\\n    <div class=\\\"item-content\\\">\\n      <div class=\\\"item-label\\\">Companies</div>\\n      <choice multiple :model.sync=\\\"multipleSelect\\\" :options=\\\"selectOptions\\\" ok-label=\\\"Pick\\\" title=\\\"Companies\\\"></choice>\\n    </div>\\n  </div>\\n  <div class=\\\"item\\\">\\n    <div class=\\\"item-content\\\">\\n      <div class=\\\"item-label\\\">Companies</div>\\n      <choice multiple :model.sync=\\\"multipleSelect\\\" :options=\\\"selectOptions\\\" ok-label=\\\"Pick\\\" title=\\\"Companies\\\"></choice>\\n    </div>\\n  </div>\\n</div>\\n\"\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvc2VsZWN0Ym94L3ZpZXcuc2VsZWN0Ym94Lmh0bWw/N2RmNSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxzU0FBc1MsUUFBUSxvaUJBQW9pQixnQkFBZ0IiLCJmaWxlIjoiMTA3LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIjxoNT5TdGFuZGFsb25lPC9oNT5cXG48Y2hvaWNlIDptb2RlbC5zeW5jPVxcXCJzZWxlY3RcXFwiIDpvcHRpb25zPVxcXCJzZWxlY3RPcHRpb25zXFxcIiBvay1sYWJlbD1cXFwiUGlja1xcXCIgY2FuY2VsLWxhYmVsPVxcXCJOZWFoXFxcIiB0aXRsZT1cXFwiQ29tcGFueVxcXCI+PC9jaG9pY2U+XFxuXFxuPGg1Pkluc2lkZSBvZiBhIExpc3Q8L2g1PlxcbjxkaXYgY2xhc3M9XFxcImxpc3QgaXRlbS1kZWxpbWl0ZXIgYm9yZGVyZWRcXFwiPlxcbiAgPGRpdiBjbGFzcz1cXFwibGlzdC1oZWFkZXJcXFwiPlNpbmdsZSBTZWxlY3Rpb246IDxlbT57e3NlbGVjdH19PC9lbT48L2Rpdj5cXG4gIDxkaXYgY2xhc3M9XFxcIml0ZW1cXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJpdGVtLWNvbnRlbnRcXFwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcIml0ZW0tbGFiZWxcXFwiPkNvbXBhbnk8L2Rpdj5cXG4gICAgICA8Y2hvaWNlIDptb2RlbC5zeW5jPVxcXCJzZWxlY3RcXFwiIDpvcHRpb25zPVxcXCJzZWxlY3RPcHRpb25zXFxcIiBvay1sYWJlbD1cXFwiUGlja1xcXCIgY2FuY2VsLWxhYmVsPVxcXCJOZWFoXFxcIiB0aXRsZT1cXFwiQ29tcGFueVxcXCI+PC9jaG9pY2U+XFxuICAgIDwvZGl2PlxcbiAgPC9kaXY+XFxuICA8ZGl2IGNsYXNzPVxcXCJpdGVtXFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiaXRlbS1jb250ZW50XFxcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJpdGVtLWxhYmVsXFxcIj5Db21wYW55PC9kaXY+XFxuICAgICAgPGNob2ljZSA6bW9kZWwuc3luYz1cXFwic2VsZWN0XFxcIiA6b3B0aW9ucz1cXFwic2VsZWN0T3B0aW9uc1xcXCIgb2stbGFiZWw9XFxcIlBpY2tcXFwiPjwvY2hvaWNlPlxcbiAgICA8L2Rpdj5cXG4gIDwvZGl2PlxcbiAgPGRpdiBjbGFzcz1cXFwibGlzdC1oZWFkZXJcXFwiPk11bHRpcGxlIFNlbGVjdGlvbjogPGVtPnt7bXVsdGlwbGVTZWxlY3R9fTwvZW0+PC9kaXY+XFxuICA8ZGl2IGNsYXNzPVxcXCJpdGVtXFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiaXRlbS1jb250ZW50XFxcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJpdGVtLWxhYmVsXFxcIj5Db21wYW5pZXM8L2Rpdj5cXG4gICAgICA8Y2hvaWNlIG11bHRpcGxlIDptb2RlbC5zeW5jPVxcXCJtdWx0aXBsZVNlbGVjdFxcXCIgOm9wdGlvbnM9XFxcInNlbGVjdE9wdGlvbnNcXFwiIG9rLWxhYmVsPVxcXCJQaWNrXFxcIiB0aXRsZT1cXFwiQ29tcGFuaWVzXFxcIj48L2Nob2ljZT5cXG4gICAgPC9kaXY+XFxuICA8L2Rpdj5cXG4gIDxkaXYgY2xhc3M9XFxcIml0ZW1cXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJpdGVtLWNvbnRlbnRcXFwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcIml0ZW0tbGFiZWxcXFwiPkNvbXBhbmllczwvZGl2PlxcbiAgICAgIDxjaG9pY2UgbXVsdGlwbGUgOm1vZGVsLnN5bmM9XFxcIm11bHRpcGxlU2VsZWN0XFxcIiA6b3B0aW9ucz1cXFwic2VsZWN0T3B0aW9uc1xcXCIgb2stbGFiZWw9XFxcIlBpY2tcXFwiIHRpdGxlPVxcXCJDb21wYW5pZXNcXFwiPjwvY2hvaWNlPlxcbiAgICA8L2Rpdj5cXG4gIDwvZGl2PlxcbjwvZGl2PlxcblwiXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmF3LWxvYWRlciEuL3NyYy9wYWdlcy9zZWxlY3Rib3gvdmlldy5zZWxlY3Rib3guaHRtbFxuICoqIG1vZHVsZSBpZCA9IDEwN1xuICoqIG1vZHVsZSBjaHVua3MgPSA1MlxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ }

/******/ });