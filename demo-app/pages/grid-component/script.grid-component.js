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

	module.exports = __webpack_require__(53);


/***/ },

/***/ 53:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar html = __webpack_require__(54);\n\nmodule.exports = function(done) {\n  quasar.make.a.get.request({\n    url: 'pages/grid-component/assets/grid-data.json',\n    local: true\n  }).done(function(data) {\n    done({\n      template: html,\n      data: {\n        data: data,\n        grid: quasar.current.layout.vm.$data.grid,\n        columns: [\n          {\n            label: 'Date',\n            field: 'isodate',\n            style: 'width: 100px',\n            formatter: function(value) {\n              return new Date(value).toLocaleString();\n            }\n          },\n          {\n            label: 'Source',\n            field: 'source',\n            style: 'width: 100px'\n          },\n          {\n            label: 'Service',\n            field: 'serviceable',\n            formatter: function(value) {\n              if (value === 'Informational') {\n                return '<i>info</i>';\n              }\n              return value;\n            },\n            style: 'color: green; width: 100px',\n            classes: 'text-center'\n          },\n          {\n            label: 'Log Number',\n            field: 'log_number',\n            style: 'width: 100px'\n          },\n          {\n            label: 'Message',\n            field: 'message',\n            style: 'width: 700px'\n          }\n        ],\n        selectionActions: [\n          {\n            label: 'View 1',\n            handler: function(selectedRows) {\n              console.dir(selectedRows);\n            }\n          },\n          {\n            label: 'View 2',\n            handler: function(selectedRows) {\n              console.dir(selectedRows);\n            }\n          }\n        ]\n      }\n    });\n  });\n};\n\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvZ3JpZC1jb21wb25lbnQvc2NyaXB0LmdyaWQtY29tcG9uZW50LmpzP2QwOTAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixpQ0FBaUM7QUFDakM7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIIiwiZmlsZSI6IjUzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgaHRtbCA9IHJlcXVpcmUoJ3JhdyEuL3ZpZXcuZ3JpZC1jb21wb25lbnQuaHRtbCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGRvbmUpIHtcbiAgcXVhc2FyLm1ha2UuYS5nZXQucmVxdWVzdCh7XG4gICAgdXJsOiAncGFnZXMvZ3JpZC1jb21wb25lbnQvYXNzZXRzL2dyaWQtZGF0YS5qc29uJyxcbiAgICBsb2NhbDogdHJ1ZVxuICB9KS5kb25lKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICBkb25lKHtcbiAgICAgIHRlbXBsYXRlOiBodG1sLFxuICAgICAgZGF0YToge1xuICAgICAgICBkYXRhOiBkYXRhLFxuICAgICAgICBncmlkOiBxdWFzYXIuY3VycmVudC5sYXlvdXQudm0uJGRhdGEuZ3JpZCxcbiAgICAgICAgY29sdW1uczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGxhYmVsOiAnRGF0ZScsXG4gICAgICAgICAgICBmaWVsZDogJ2lzb2RhdGUnLFxuICAgICAgICAgICAgc3R5bGU6ICd3aWR0aDogMTAwcHgnLFxuICAgICAgICAgICAgZm9ybWF0dGVyOiBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgICByZXR1cm4gbmV3IERhdGUodmFsdWUpLnRvTG9jYWxlU3RyaW5nKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBsYWJlbDogJ1NvdXJjZScsXG4gICAgICAgICAgICBmaWVsZDogJ3NvdXJjZScsXG4gICAgICAgICAgICBzdHlsZTogJ3dpZHRoOiAxMDBweCdcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGxhYmVsOiAnU2VydmljZScsXG4gICAgICAgICAgICBmaWVsZDogJ3NlcnZpY2VhYmxlJyxcbiAgICAgICAgICAgIGZvcm1hdHRlcjogZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgICAgaWYgKHZhbHVlID09PSAnSW5mb3JtYXRpb25hbCcpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJzxpPmluZm88L2k+JztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3R5bGU6ICdjb2xvcjogZ3JlZW47IHdpZHRoOiAxMDBweCcsXG4gICAgICAgICAgICBjbGFzc2VzOiAndGV4dC1jZW50ZXInXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBsYWJlbDogJ0xvZyBOdW1iZXInLFxuICAgICAgICAgICAgZmllbGQ6ICdsb2dfbnVtYmVyJyxcbiAgICAgICAgICAgIHN0eWxlOiAnd2lkdGg6IDEwMHB4J1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgbGFiZWw6ICdNZXNzYWdlJyxcbiAgICAgICAgICAgIGZpZWxkOiAnbWVzc2FnZScsXG4gICAgICAgICAgICBzdHlsZTogJ3dpZHRoOiA3MDBweCdcbiAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIHNlbGVjdGlvbkFjdGlvbnM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBsYWJlbDogJ1ZpZXcgMScsXG4gICAgICAgICAgICBoYW5kbGVyOiBmdW5jdGlvbihzZWxlY3RlZFJvd3MpIHtcbiAgICAgICAgICAgICAgY29uc29sZS5kaXIoc2VsZWN0ZWRSb3dzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGxhYmVsOiAnVmlldyAyJyxcbiAgICAgICAgICAgIGhhbmRsZXI6IGZ1bmN0aW9uKHNlbGVjdGVkUm93cykge1xuICAgICAgICAgICAgICBjb25zb2xlLmRpcihzZWxlY3RlZFJvd3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn07XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3BhZ2VzL2dyaWQtY29tcG9uZW50L3NjcmlwdC5ncmlkLWNvbXBvbmVudC5qc1xuICoqIG1vZHVsZSBpZCA9IDUzXG4gKiogbW9kdWxlIGNodW5rcyA9IDI2XG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ },

/***/ 54:
/***/ function(module, exports) {

	eval("module.exports = \"<h5>\\n  Use drawer to configure Grid below.\\n  Best displayed with desktop view.\\n</h5>\\n\\n<grid\\n  :columns=\\\"columns\\\"\\n  :data=\\\"data\\\"\\n  :rows-per-page=\\\"5\\\"\\n  :selection-mode=\\\"grid.selection\\\"\\n  :selection-actions=\\\"selectionActions\\\"\\n  :sortable=\\\"grid.sortable\\\"\\n  id-property=\\\"unique_id\\\"\\n></grid>\\n\"\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvZ3JpZC1jb21wb25lbnQvdmlldy5ncmlkLWNvbXBvbmVudC5odG1sPzgzYWYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiNTQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IFwiPGg1PlxcbiAgVXNlIGRyYXdlciB0byBjb25maWd1cmUgR3JpZCBiZWxvdy5cXG4gIEJlc3QgZGlzcGxheWVkIHdpdGggZGVza3RvcCB2aWV3LlxcbjwvaDU+XFxuXFxuPGdyaWRcXG4gIDpjb2x1bW5zPVxcXCJjb2x1bW5zXFxcIlxcbiAgOmRhdGE9XFxcImRhdGFcXFwiXFxuICA6cm93cy1wZXItcGFnZT1cXFwiNVxcXCJcXG4gIDpzZWxlY3Rpb24tbW9kZT1cXFwiZ3JpZC5zZWxlY3Rpb25cXFwiXFxuICA6c2VsZWN0aW9uLWFjdGlvbnM9XFxcInNlbGVjdGlvbkFjdGlvbnNcXFwiXFxuICA6c29ydGFibGU9XFxcImdyaWQuc29ydGFibGVcXFwiXFxuICBpZC1wcm9wZXJ0eT1cXFwidW5pcXVlX2lkXFxcIlxcbj48L2dyaWQ+XFxuXCJcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yYXctbG9hZGVyIS4vc3JjL3BhZ2VzL2dyaWQtY29tcG9uZW50L3ZpZXcuZ3JpZC1jb21wb25lbnQuaHRtbFxuICoqIG1vZHVsZSBpZCA9IDU0XG4gKiogbW9kdWxlIGNodW5rcyA9IDI2XG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ }

/******/ });