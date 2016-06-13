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

	module.exports = __webpack_require__(127);


/***/ },

/***/ 127:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar html = __webpack_require__(128);\n\nmodule.exports = {\n  template: html,\n  ready: function() {\n    quasar.current.layout.vm.$data.title = 'Tree';\n  },\n  data: {\n    treeModel: [\n      {\n        title: 'Item 1',\n        expanded: true,\n        children: [\n          {\n            title: 'Item 1.1',\n            expanded: false,\n            children: [\n              {\n                title: 'Item 1.1.1',\n                expanded: false,\n                children: [\n                  {\n                    title: 'Item 1.1.1.1',\n                    expanded: false,\n                    children: []\n                  }\n                ]\n              },\n              {\n                title: 'Item 1.1.2',\n                expanded: false,\n                children: []\n              }\n            ]\n          },\n          {\n            title: 'Item 1.2',\n            expanded: false,\n            children: []\n          },\n          {\n            title: 'Item 1.3',\n            expanded: false,\n            handler: function() { quasar.notify('Tapped on item 1.3'); },\n            children: []\n          }\n        ]\n      },\n      {\n        title: 'Item 2',\n        expanded: false,\n        children: [\n          {\n            title: 'Item 2.1',\n            expanded: false,\n            children: [\n              {\n                title: 'Item 2.1.1',\n                expanded: false,\n                children: []\n              },\n              {\n                title: 'Item 2.1.2',\n                expanded: false,\n                children: [\n                  {\n                    title: 'Item 2.1.2.1',\n                    expanded: false,\n                    children: []\n                  },\n                  {\n                    title: 'Item 2.1.2.2',\n                    expanded: false,\n                    children: []\n                  }\n                ]\n              }\n            ]\n          },\n          {\n            title: 'Item 2.2',\n            expanded: false,\n            children: []\n          },\n          {\n            title: 'Item 2.3',\n            expanded: false,\n            children: []\n          }\n        ]\n      }\n    ]\n  }\n};\n\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvdHJlZS9zY3JpcHQudHJlZS5qcz84NzA1Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxxQ0FBcUMsRUFBRTtBQUN4RTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIxMjcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBodG1sID0gcmVxdWlyZSgncmF3IS4vdmlldy50cmVlLmh0bWwnKTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHRlbXBsYXRlOiBodG1sLFxuICByZWFkeTogZnVuY3Rpb24oKSB7XG4gICAgcXVhc2FyLmN1cnJlbnQubGF5b3V0LnZtLiRkYXRhLnRpdGxlID0gJ1RyZWUnO1xuICB9LFxuICBkYXRhOiB7XG4gICAgdHJlZU1vZGVsOiBbXG4gICAgICB7XG4gICAgICAgIHRpdGxlOiAnSXRlbSAxJyxcbiAgICAgICAgZXhwYW5kZWQ6IHRydWUsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6ICdJdGVtIDEuMScsXG4gICAgICAgICAgICBleHBhbmRlZDogZmFsc2UsXG4gICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICdJdGVtIDEuMS4xJyxcbiAgICAgICAgICAgICAgICBleHBhbmRlZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdJdGVtIDEuMS4xLjEnLFxuICAgICAgICAgICAgICAgICAgICBleHBhbmRlZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnSXRlbSAxLjEuMicsXG4gICAgICAgICAgICAgICAgZXhwYW5kZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogJ0l0ZW0gMS4yJyxcbiAgICAgICAgICAgIGV4cGFuZGVkOiBmYWxzZSxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6ICdJdGVtIDEuMycsXG4gICAgICAgICAgICBleHBhbmRlZDogZmFsc2UsXG4gICAgICAgICAgICBoYW5kbGVyOiBmdW5jdGlvbigpIHsgcXVhc2FyLm5vdGlmeSgnVGFwcGVkIG9uIGl0ZW0gMS4zJyk7IH0sXG4gICAgICAgICAgICBjaGlsZHJlbjogW11cbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRpdGxlOiAnSXRlbSAyJyxcbiAgICAgICAgZXhwYW5kZWQ6IGZhbHNlLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiAnSXRlbSAyLjEnLFxuICAgICAgICAgICAgZXhwYW5kZWQ6IGZhbHNlLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnSXRlbSAyLjEuMScsXG4gICAgICAgICAgICAgICAgZXhwYW5kZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICdJdGVtIDIuMS4yJyxcbiAgICAgICAgICAgICAgICBleHBhbmRlZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdJdGVtIDIuMS4yLjEnLFxuICAgICAgICAgICAgICAgICAgICBleHBhbmRlZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdJdGVtIDIuMS4yLjInLFxuICAgICAgICAgICAgICAgICAgICBleHBhbmRlZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6ICdJdGVtIDIuMicsXG4gICAgICAgICAgICBleHBhbmRlZDogZmFsc2UsXG4gICAgICAgICAgICBjaGlsZHJlbjogW11cbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiAnSXRlbSAyLjMnLFxuICAgICAgICAgICAgZXhwYW5kZWQ6IGZhbHNlLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtdXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9XG4gICAgXVxuICB9XG59O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9wYWdlcy90cmVlL3NjcmlwdC50cmVlLmpzXG4gKiogbW9kdWxlIGlkID0gMTI3XG4gKiogbW9kdWxlIGNodW5rcyA9IDYyXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ },

/***/ 128:
/***/ function(module, exports) {

	eval("module.exports = \"<p>\\n  Tap on items to expand/contract and especially on \\\"Item 1.3\\\"\\n  to trigger an event.\\n</p>\\n<p>\\n  Trees are stripped out of any design by default so you can\\n  turn them into anything you want.\\n</p>\\n\\n<tree\\n  :model=\\\"treeModel\\\"\\n  contract-html=\\\"<i>remove_circle</i>\\\"\\n  expand-html=\\\"<i>add_circle</i>\\\"\\n></tree>\\n\"\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvdHJlZS92aWV3LnRyZWUuaHRtbD83MzQwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjEyOC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gXCI8cD5cXG4gIFRhcCBvbiBpdGVtcyB0byBleHBhbmQvY29udHJhY3QgYW5kIGVzcGVjaWFsbHkgb24gXFxcIkl0ZW0gMS4zXFxcIlxcbiAgdG8gdHJpZ2dlciBhbiBldmVudC5cXG48L3A+XFxuPHA+XFxuICBUcmVlcyBhcmUgc3RyaXBwZWQgb3V0IG9mIGFueSBkZXNpZ24gYnkgZGVmYXVsdCBzbyB5b3UgY2FuXFxuICB0dXJuIHRoZW0gaW50byBhbnl0aGluZyB5b3Ugd2FudC5cXG48L3A+XFxuXFxuPHRyZWVcXG4gIDptb2RlbD1cXFwidHJlZU1vZGVsXFxcIlxcbiAgY29udHJhY3QtaHRtbD1cXFwiPGk+cmVtb3ZlX2NpcmNsZTwvaT5cXFwiXFxuICBleHBhbmQtaHRtbD1cXFwiPGk+YWRkX2NpcmNsZTwvaT5cXFwiXFxuPjwvdHJlZT5cXG5cIlxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3Jhdy1sb2FkZXIhLi9zcmMvcGFnZXMvdHJlZS92aWV3LnRyZWUuaHRtbFxuICoqIG1vZHVsZSBpZCA9IDEyOFxuICoqIG1vZHVsZSBjaHVua3MgPSA2MlxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ }

/******/ });