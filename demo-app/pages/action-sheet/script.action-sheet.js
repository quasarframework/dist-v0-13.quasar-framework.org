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

	module.exports = __webpack_require__(7);


/***/ },

/***/ 7:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar html = __webpack_require__(8);\n\nmodule.exports = {\n  template: html,\n  ready: function() {\n    quasar.current.layout.vm.$data.title = 'Action Sheet';\n  },\n  methods: {\n    showActionSheet: function() {\n      quasar.action.sheet({\n        title: 'Article Actions',\n        buttons: [\n          {\n            label: 'Delete',\n            icon: 'delete',\n            handler: function() {\n              quasar.notify.positive('Deleted Article');\n            }\n          },\n          {\n            label: 'Share',\n            icon: 'share',\n            handler: function() {\n              quasar.notify.positive('Shared!');\n            }\n          },\n          {\n            label: 'Play',\n            icon: 'gamepad',\n            handler: function() {\n              quasar.notify.positive('Launched Game');\n            }\n          },\n          {\n            label: 'Favorite',\n            icon: 'favorite',\n            handler: function() {\n              quasar.notify.positive('Added to favorites');\n            }\n          },\n          {\n            label: 'Cancel',\n            icon: 'cancel',\n            classes: 'text-primary',\n            handler: function() {\n              // quasar.notify('Cancelled...');\n            }\n          }\n        ]\n      });\n    }\n  }\n};\n\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvYWN0aW9uLXNoZWV0L3NjcmlwdC5hY3Rpb24tc2hlZXQuanM/NTcxYiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EiLCJmaWxlIjoiNy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIGh0bWwgPSByZXF1aXJlKCdyYXchLi92aWV3LmFjdGlvbi1zaGVldC5odG1sJyk7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICB0ZW1wbGF0ZTogaHRtbCxcbiAgcmVhZHk6IGZ1bmN0aW9uKCkge1xuICAgIHF1YXNhci5jdXJyZW50LmxheW91dC52bS4kZGF0YS50aXRsZSA9ICdBY3Rpb24gU2hlZXQnO1xuICB9LFxuICBtZXRob2RzOiB7XG4gICAgc2hvd0FjdGlvblNoZWV0OiBmdW5jdGlvbigpIHtcbiAgICAgIHF1YXNhci5hY3Rpb24uc2hlZXQoe1xuICAgICAgICB0aXRsZTogJ0FydGljbGUgQWN0aW9ucycsXG4gICAgICAgIGJ1dHRvbnM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBsYWJlbDogJ0RlbGV0ZScsXG4gICAgICAgICAgICBpY29uOiAnZGVsZXRlJyxcbiAgICAgICAgICAgIGhhbmRsZXI6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICBxdWFzYXIubm90aWZ5LnBvc2l0aXZlKCdEZWxldGVkIEFydGljbGUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGxhYmVsOiAnU2hhcmUnLFxuICAgICAgICAgICAgaWNvbjogJ3NoYXJlJyxcbiAgICAgICAgICAgIGhhbmRsZXI6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICBxdWFzYXIubm90aWZ5LnBvc2l0aXZlKCdTaGFyZWQhJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBsYWJlbDogJ1BsYXknLFxuICAgICAgICAgICAgaWNvbjogJ2dhbWVwYWQnLFxuICAgICAgICAgICAgaGFuZGxlcjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIHF1YXNhci5ub3RpZnkucG9zaXRpdmUoJ0xhdW5jaGVkIEdhbWUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGxhYmVsOiAnRmF2b3JpdGUnLFxuICAgICAgICAgICAgaWNvbjogJ2Zhdm9yaXRlJyxcbiAgICAgICAgICAgIGhhbmRsZXI6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICBxdWFzYXIubm90aWZ5LnBvc2l0aXZlKCdBZGRlZCB0byBmYXZvcml0ZXMnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGxhYmVsOiAnQ2FuY2VsJyxcbiAgICAgICAgICAgIGljb246ICdjYW5jZWwnLFxuICAgICAgICAgICAgY2xhc3NlczogJ3RleHQtcHJpbWFyeScsXG4gICAgICAgICAgICBoYW5kbGVyOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgLy8gcXVhc2FyLm5vdGlmeSgnQ2FuY2VsbGVkLi4uJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn07XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3BhZ2VzL2FjdGlvbi1zaGVldC9zY3JpcHQuYWN0aW9uLXNoZWV0LmpzXG4gKiogbW9kdWxlIGlkID0gN1xuICoqIG1vZHVsZSBjaHVua3MgPSAzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ },

/***/ 8:
/***/ function(module, exports) {

	eval("module.exports = \"<h5>Lorel Ipsum</h5>\\n<p>\\n  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\\n  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut\\n  enim ad minim veniam, quis nostrud exercitation ullamco laboris\\n  nisi ut aliquip ex ea commodo consequat.\\n</p>\\n\\n<button class=\\\"teal glossy\\\" @click=\\\"showActionSheet()\\\">\\n  <i class=\\\"on-left\\\">settings</i>\\n  Show Action Sheet\\n</button>\\n\"\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvYWN0aW9uLXNoZWV0L3ZpZXcuYWN0aW9uLXNoZWV0Lmh0bWw/YmY4NCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiI4LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIjxoNT5Mb3JlbCBJcHN1bTwvaDU+XFxuPHA+XFxuICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG9cXG4gIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuIFV0XFxuICBlbmltIGFkIG1pbmltIHZlbmlhbSwgcXVpcyBub3N0cnVkIGV4ZXJjaXRhdGlvbiB1bGxhbWNvIGxhYm9yaXNcXG4gIG5pc2kgdXQgYWxpcXVpcCBleCBlYSBjb21tb2RvIGNvbnNlcXVhdC5cXG48L3A+XFxuXFxuPGJ1dHRvbiBjbGFzcz1cXFwidGVhbCBnbG9zc3lcXFwiIEBjbGljaz1cXFwic2hvd0FjdGlvblNoZWV0KClcXFwiPlxcbiAgPGkgY2xhc3M9XFxcIm9uLWxlZnRcXFwiPnNldHRpbmdzPC9pPlxcbiAgU2hvdyBBY3Rpb24gU2hlZXRcXG48L2J1dHRvbj5cXG5cIlxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3Jhdy1sb2FkZXIhLi9zcmMvcGFnZXMvYWN0aW9uLXNoZWV0L3ZpZXcuYWN0aW9uLXNoZWV0Lmh0bWxcbiAqKiBtb2R1bGUgaWQgPSA4XG4gKiogbW9kdWxlIGNodW5rcyA9IDNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9");

/***/ }

/******/ });