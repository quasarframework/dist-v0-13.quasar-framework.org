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

	module.exports = __webpack_require__(117);


/***/ },

/***/ 117:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar html = __webpack_require__(118);\n\nmodule.exports = {\n  template: html,\n  data: {\n    tabs: [\n      {\n        label: 'Tab 1',\n        icon: 'message',\n        target: '#tab-1'\n      },\n      {\n        label: 'Disabled',\n        icon: 'fingerprint',\n        disabled: true\n      },\n      {\n        label: 'Tab 2',\n        icon: 'alarm',\n        target: '#tab-2'\n      },\n      {\n        label: 'Tab 3',\n        icon: 'accessibility',\n        target: '#tab-3'\n      },\n      {\n        label: 'Tab 4',\n        icon: 'accessibility',\n        target: '#tab-4',\n        hidden: true\n      }\n    ]\n  },\n  ready: function() {\n    quasar.current.layout.vm.$data.title = 'Tabs';\n  }\n};\n\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvdGFicy9zY3JpcHQudGFicy5qcz84ZGQ4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiMTE3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgaHRtbCA9IHJlcXVpcmUoJ3JhdyEuL3ZpZXcudGFicy5odG1sJyk7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICB0ZW1wbGF0ZTogaHRtbCxcbiAgZGF0YToge1xuICAgIHRhYnM6IFtcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6ICdUYWIgMScsXG4gICAgICAgIGljb246ICdtZXNzYWdlJyxcbiAgICAgICAgdGFyZ2V0OiAnI3RhYi0xJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6ICdEaXNhYmxlZCcsXG4gICAgICAgIGljb246ICdmaW5nZXJwcmludCcsXG4gICAgICAgIGRpc2FibGVkOiB0cnVlXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBsYWJlbDogJ1RhYiAyJyxcbiAgICAgICAgaWNvbjogJ2FsYXJtJyxcbiAgICAgICAgdGFyZ2V0OiAnI3RhYi0yJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6ICdUYWIgMycsXG4gICAgICAgIGljb246ICdhY2Nlc3NpYmlsaXR5JyxcbiAgICAgICAgdGFyZ2V0OiAnI3RhYi0zJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6ICdUYWIgNCcsXG4gICAgICAgIGljb246ICdhY2Nlc3NpYmlsaXR5JyxcbiAgICAgICAgdGFyZ2V0OiAnI3RhYi00JyxcbiAgICAgICAgaGlkZGVuOiB0cnVlXG4gICAgICB9XG4gICAgXVxuICB9LFxuICByZWFkeTogZnVuY3Rpb24oKSB7XG4gICAgcXVhc2FyLmN1cnJlbnQubGF5b3V0LnZtLiRkYXRhLnRpdGxlID0gJ1RhYnMnO1xuICB9XG59O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9wYWdlcy90YWJzL3NjcmlwdC50YWJzLmpzXG4gKiogbW9kdWxlIGlkID0gMTE3XG4gKiogbW9kdWxlIGNodW5rcyA9IDU3XG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ },

/***/ 118:
/***/ function(module, exports) {

	eval("module.exports = \"<h5>\\n  On a real mobile device Tabs look a little different\\n  in the sense that arrows won't be shown since user can\\n  pan (touch action) through the menu.\\n</h5>\\n\\n<h5>Select Tabs from below.</h5>\\n\\n<tabs>\\n  <tab\\n    v-for=\\\"tab in tabs\\\"\\n    :hidden=\\\"tab.hidden\\\"\\n    :disabled=\\\"tab.disabled\\\"\\n    :icon=\\\"tab.icon\\\"\\n    :target=\\\"tab.target\\\"\\n  >\\n    {{tab.label}}\\n  </tab>\\n</tabs>\\n\\n<div id=\\\"tab-1\\\">\\n  <div v-for=\\\"n in 5\\\">Tab 1</div>\\n</div>\\n<div id=\\\"tab-2\\\">\\n  <div v-for=\\\"n in 10\\\">Tab 2</div>\\n</div>\\n<div id=\\\"tab-3\\\">\\n  <div v-for=\\\"n in 7\\\">Tab 3</div>\\n</div>\\n\"\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvdGFicy92aWV3LnRhYnMuaHRtbD82NWQ0Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFZQUFxWSxXQUFXIiwiZmlsZSI6IjExOC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gXCI8aDU+XFxuICBPbiBhIHJlYWwgbW9iaWxlIGRldmljZSBUYWJzIGxvb2sgYSBsaXR0bGUgZGlmZmVyZW50XFxuICBpbiB0aGUgc2Vuc2UgdGhhdCBhcnJvd3Mgd29uJ3QgYmUgc2hvd24gc2luY2UgdXNlciBjYW5cXG4gIHBhbiAodG91Y2ggYWN0aW9uKSB0aHJvdWdoIHRoZSBtZW51LlxcbjwvaDU+XFxuXFxuPGg1PlNlbGVjdCBUYWJzIGZyb20gYmVsb3cuPC9oNT5cXG5cXG48dGFicz5cXG4gIDx0YWJcXG4gICAgdi1mb3I9XFxcInRhYiBpbiB0YWJzXFxcIlxcbiAgICA6aGlkZGVuPVxcXCJ0YWIuaGlkZGVuXFxcIlxcbiAgICA6ZGlzYWJsZWQ9XFxcInRhYi5kaXNhYmxlZFxcXCJcXG4gICAgOmljb249XFxcInRhYi5pY29uXFxcIlxcbiAgICA6dGFyZ2V0PVxcXCJ0YWIudGFyZ2V0XFxcIlxcbiAgPlxcbiAgICB7e3RhYi5sYWJlbH19XFxuICA8L3RhYj5cXG48L3RhYnM+XFxuXFxuPGRpdiBpZD1cXFwidGFiLTFcXFwiPlxcbiAgPGRpdiB2LWZvcj1cXFwibiBpbiA1XFxcIj5UYWIgMTwvZGl2PlxcbjwvZGl2PlxcbjxkaXYgaWQ9XFxcInRhYi0yXFxcIj5cXG4gIDxkaXYgdi1mb3I9XFxcIm4gaW4gMTBcXFwiPlRhYiAyPC9kaXY+XFxuPC9kaXY+XFxuPGRpdiBpZD1cXFwidGFiLTNcXFwiPlxcbiAgPGRpdiB2LWZvcj1cXFwibiBpbiA3XFxcIj5UYWIgMzwvZGl2PlxcbjwvZGl2PlxcblwiXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmF3LWxvYWRlciEuL3NyYy9wYWdlcy90YWJzL3ZpZXcudGFicy5odG1sXG4gKiogbW9kdWxlIGlkID0gMTE4XG4gKiogbW9kdWxlIGNodW5rcyA9IDU3XG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ }

/******/ });