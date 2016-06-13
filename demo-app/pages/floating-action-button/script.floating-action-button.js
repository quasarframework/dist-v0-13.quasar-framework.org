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

	module.exports = __webpack_require__(51);


/***/ },

/***/ 51:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar html = __webpack_require__(52);\n\nmodule.exports = {\n  template: html,\n  methods: {\n    alert: function() {\n      quasar.dialog({\n        title: 'FAB',\n        message: 'Good job! Keep it going.'\n      });\n    }\n  },\n  ready: function() {\n    quasar.current.layout.vm.$data.title = 'Floating Action Buttons';\n  }\n};\n\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvZmxvYXRpbmctYWN0aW9uLWJ1dHRvbi9zY3JpcHQuZmxvYXRpbmctYWN0aW9uLWJ1dHRvbi5qcz84NTBiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6IjUxLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgaHRtbCA9IHJlcXVpcmUoJ3JhdyEuL3ZpZXcuZmxvYXRpbmctYWN0aW9uLWJ1dHRvbi5odG1sJyk7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICB0ZW1wbGF0ZTogaHRtbCxcbiAgbWV0aG9kczoge1xuICAgIGFsZXJ0OiBmdW5jdGlvbigpIHtcbiAgICAgIHF1YXNhci5kaWFsb2coe1xuICAgICAgICB0aXRsZTogJ0ZBQicsXG4gICAgICAgIG1lc3NhZ2U6ICdHb29kIGpvYiEgS2VlcCBpdCBnb2luZy4nXG4gICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIHJlYWR5OiBmdW5jdGlvbigpIHtcbiAgICBxdWFzYXIuY3VycmVudC5sYXlvdXQudm0uJGRhdGEudGl0bGUgPSAnRmxvYXRpbmcgQWN0aW9uIEJ1dHRvbnMnO1xuICB9XG59O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9wYWdlcy9mbG9hdGluZy1hY3Rpb24tYnV0dG9uL3NjcmlwdC5mbG9hdGluZy1hY3Rpb24tYnV0dG9uLmpzXG4gKiogbW9kdWxlIGlkID0gNTFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMjVcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9");

/***/ },

/***/ 52:
/***/ function(module, exports) {

	eval("module.exports = \"<h5>\\n  Tap on each inline FABs below.\\n  The one that opens on the right also has a backdrop.\\n</h5>\\n\\n<div class=\\\"column items-center\\\" style=\\\"margin-top: 100px; margin-bottom: 100px;\\\">\\n  <fab type=\\\"purple\\\" icon=\\\"keyboard_arrow_up\\\" direction=\\\"up\\\">\\n    <small-fab>mail</small-fab>\\n    <small-fab>alarm</small-fab>\\n  </fab>\\n\\n  <fab icon=\\\"keyboard_arrow_left\\\" direction=\\\"left\\\">\\n    <small-fab>mail</small-fab>\\n    <small-fab>alarm</small-fab>\\n  </fab>\\n\\n  <fab backdrop type=\\\"secondary\\\" icon=\\\"keyboard_arrow_right\\\" direction=\\\"right\\\">\\n    <small-fab class=\\\"primary\\\">mail</small-fab>\\n    <small-fab>alarm</small-fab>\\n  </fab>\\n\\n  <fab :type=\\\"['tertiary', 'glossy']\\\" icon=\\\"keyboard_arrow_down\\\" direction=\\\"down\\\">\\n    <small-fab>mail</small-fab>\\n    <small-fab>alarm</small-fab>\\n  </fab>\\n</div>\\n\\n<h5 style=\\\"margin-bottom: 100px;\\\">\\n  There's also the fixed positioned one on bottom\\n  right of screen which maintains position on Page scroll.\\n  It has a click/tap event injected on itself when expanded.\\n  You can close it by clicking/tapping on the whitey backdrop.\\n</h5>\\n\\n<fab\\n  v-layout-page-sticky\\n  class=\\\"absolute-bottom-right\\\"\\n  :click=\\\"alert\\\"\\n  type=\\\"primary\\\"\\n  active-icon=\\\"alarm\\\"\\n  direction=\\\"up\\\"\\n  style=\\\"right: 20px;\\\"\\n>\\n  <small-fab class=\\\"purple\\\">mail</small-fab>\\n  <small-fab class=\\\"secondary\\\">alarm</small-fab>\\n</fab>\\n\"\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvZmxvYXRpbmctYWN0aW9uLWJ1dHRvbi92aWV3LmZsb2F0aW5nLWFjdGlvbi1idXR0b24uaHRtbD9mNTljIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHdMQUF3TCxzQkFBc0IsMnFCQUEycUIsdWFBQXVhIiwiZmlsZSI6IjUyLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIjxoNT5cXG4gIFRhcCBvbiBlYWNoIGlubGluZSBGQUJzIGJlbG93LlxcbiAgVGhlIG9uZSB0aGF0IG9wZW5zIG9uIHRoZSByaWdodCBhbHNvIGhhcyBhIGJhY2tkcm9wLlxcbjwvaDU+XFxuXFxuPGRpdiBjbGFzcz1cXFwiY29sdW1uIGl0ZW1zLWNlbnRlclxcXCIgc3R5bGU9XFxcIm1hcmdpbi10b3A6IDEwMHB4OyBtYXJnaW4tYm90dG9tOiAxMDBweDtcXFwiPlxcbiAgPGZhYiB0eXBlPVxcXCJwdXJwbGVcXFwiIGljb249XFxcImtleWJvYXJkX2Fycm93X3VwXFxcIiBkaXJlY3Rpb249XFxcInVwXFxcIj5cXG4gICAgPHNtYWxsLWZhYj5tYWlsPC9zbWFsbC1mYWI+XFxuICAgIDxzbWFsbC1mYWI+YWxhcm08L3NtYWxsLWZhYj5cXG4gIDwvZmFiPlxcblxcbiAgPGZhYiBpY29uPVxcXCJrZXlib2FyZF9hcnJvd19sZWZ0XFxcIiBkaXJlY3Rpb249XFxcImxlZnRcXFwiPlxcbiAgICA8c21hbGwtZmFiPm1haWw8L3NtYWxsLWZhYj5cXG4gICAgPHNtYWxsLWZhYj5hbGFybTwvc21hbGwtZmFiPlxcbiAgPC9mYWI+XFxuXFxuICA8ZmFiIGJhY2tkcm9wIHR5cGU9XFxcInNlY29uZGFyeVxcXCIgaWNvbj1cXFwia2V5Ym9hcmRfYXJyb3dfcmlnaHRcXFwiIGRpcmVjdGlvbj1cXFwicmlnaHRcXFwiPlxcbiAgICA8c21hbGwtZmFiIGNsYXNzPVxcXCJwcmltYXJ5XFxcIj5tYWlsPC9zbWFsbC1mYWI+XFxuICAgIDxzbWFsbC1mYWI+YWxhcm08L3NtYWxsLWZhYj5cXG4gIDwvZmFiPlxcblxcbiAgPGZhYiA6dHlwZT1cXFwiWyd0ZXJ0aWFyeScsICdnbG9zc3knXVxcXCIgaWNvbj1cXFwia2V5Ym9hcmRfYXJyb3dfZG93blxcXCIgZGlyZWN0aW9uPVxcXCJkb3duXFxcIj5cXG4gICAgPHNtYWxsLWZhYj5tYWlsPC9zbWFsbC1mYWI+XFxuICAgIDxzbWFsbC1mYWI+YWxhcm08L3NtYWxsLWZhYj5cXG4gIDwvZmFiPlxcbjwvZGl2PlxcblxcbjxoNSBzdHlsZT1cXFwibWFyZ2luLWJvdHRvbTogMTAwcHg7XFxcIj5cXG4gIFRoZXJlJ3MgYWxzbyB0aGUgZml4ZWQgcG9zaXRpb25lZCBvbmUgb24gYm90dG9tXFxuICByaWdodCBvZiBzY3JlZW4gd2hpY2ggbWFpbnRhaW5zIHBvc2l0aW9uIG9uIFBhZ2Ugc2Nyb2xsLlxcbiAgSXQgaGFzIGEgY2xpY2svdGFwIGV2ZW50IGluamVjdGVkIG9uIGl0c2VsZiB3aGVuIGV4cGFuZGVkLlxcbiAgWW91IGNhbiBjbG9zZSBpdCBieSBjbGlja2luZy90YXBwaW5nIG9uIHRoZSB3aGl0ZXkgYmFja2Ryb3AuXFxuPC9oNT5cXG5cXG48ZmFiXFxuICB2LWxheW91dC1wYWdlLXN0aWNreVxcbiAgY2xhc3M9XFxcImFic29sdXRlLWJvdHRvbS1yaWdodFxcXCJcXG4gIDpjbGljaz1cXFwiYWxlcnRcXFwiXFxuICB0eXBlPVxcXCJwcmltYXJ5XFxcIlxcbiAgYWN0aXZlLWljb249XFxcImFsYXJtXFxcIlxcbiAgZGlyZWN0aW9uPVxcXCJ1cFxcXCJcXG4gIHN0eWxlPVxcXCJyaWdodDogMjBweDtcXFwiXFxuPlxcbiAgPHNtYWxsLWZhYiBjbGFzcz1cXFwicHVycGxlXFxcIj5tYWlsPC9zbWFsbC1mYWI+XFxuICA8c21hbGwtZmFiIGNsYXNzPVxcXCJzZWNvbmRhcnlcXFwiPmFsYXJtPC9zbWFsbC1mYWI+XFxuPC9mYWI+XFxuXCJcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yYXctbG9hZGVyIS4vc3JjL3BhZ2VzL2Zsb2F0aW5nLWFjdGlvbi1idXR0b24vdmlldy5mbG9hdGluZy1hY3Rpb24tYnV0dG9uLmh0bWxcbiAqKiBtb2R1bGUgaWQgPSA1MlxuICoqIG1vZHVsZSBjaHVua3MgPSAyNVxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ }

/******/ });