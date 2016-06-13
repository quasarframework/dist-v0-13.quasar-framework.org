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

	module.exports = __webpack_require__(75);


/***/ },

/***/ 75:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar html = __webpack_require__(76);\n\nmodule.exports = {\n  template: html,\n  ready: function() {\n    quasar.current.layout.vm.$data.title = 'Complex Lists';\n  }\n};\n\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvbGlzdC1jb21wbGV4LXVzYWdlL3NjcmlwdC5saXN0LWNvbXBsZXgtdXNhZ2UuanM/ZTMxNiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiNzUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBodG1sID0gcmVxdWlyZSgncmF3IS4vdmlldy5saXN0LWNvbXBsZXgtdXNhZ2UuaHRtbCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgdGVtcGxhdGU6IGh0bWwsXG4gIHJlYWR5OiBmdW5jdGlvbigpIHtcbiAgICBxdWFzYXIuY3VycmVudC5sYXlvdXQudm0uJGRhdGEudGl0bGUgPSAnQ29tcGxleCBMaXN0cyc7XG4gIH1cbn07XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3BhZ2VzL2xpc3QtY29tcGxleC11c2FnZS9zY3JpcHQubGlzdC1jb21wbGV4LXVzYWdlLmpzXG4gKiogbW9kdWxlIGlkID0gNzVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMzdcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9");

/***/ },

/***/ 76:
/***/ function(module, exports) {

	eval("module.exports = \"<h5>List with Item Label and Item Value</h5>\\n<p>\\n  Item Values can be anything from text to icons,\\n  buttons, web components.\\n</p>\\n<div class=\\\"list\\\">\\n  <div class=\\\"item\\\">\\n    <div class=\\\"item-content\\\">\\n      <div class=\\\"item-label\\\">Label</div>\\n      <div class=\\\"item-value\\\">Value</div>\\n    </div>\\n  </div>\\n  <div class=\\\"item\\\">\\n    <div class=\\\"item-content\\\">\\n      <div class=\\\"item-label\\\">Label</div>\\n      <div class=\\\"item-value\\\">\\n        <i>pages</i>\\n      </div>\\n    </div>\\n  </div>\\n  <div class=\\\"item\\\">\\n    <div class=\\\"item-content\\\">\\n      <div class=\\\"item-label\\\">Label</div>\\n      <div class=\\\"item-value\\\">\\n        <i>perm_identity</i>\\n      </div>\\n    </div>\\n  </div>\\n</div>\\n\\n<h5>List with Inner Delimiters</h5>\\n<div class=\\\"list inner-delimiter\\\">\\n  <div class=\\\"item\\\">\\n    <div class=\\\"item-content\\\">\\n      <div class=\\\"item-label\\\">Label</div>\\n      <div class=\\\"item-value\\\">Value</div>\\n    </div>\\n  </div>\\n  <div class=\\\"item\\\">\\n    <div class=\\\"item-content\\\">\\n      <div class=\\\"item-label\\\">Label</div>\\n      <div class=\\\"item-value\\\">Value</div>\\n    </div>\\n  </div>\\n  <div class=\\\"item\\\">\\n    <div class=\\\"item-content\\\">\\n      <div class=\\\"item-label\\\">Label</div>\\n      <div class=\\\"item-value\\\">\\n        <button class=\\\"primary clear\\\">View</button>\\n      </div>\\n    </div>\\n  </div>\\n</div>\\n\\n<h5>List with Icons</h5>\\n\\n<div class=\\\"list bordered inner-delimiter\\\">\\n  <div class=\\\"item\\\">\\n    <i>mail</i>\\n    <div class=\\\"item-content\\\">\\n      Quasar Framework\\n    </div>\\n  </div>\\n  <div class=\\\"item\\\">\\n    <i>perm_identity</i>\\n    <div class=\\\"item-content\\\">\\n      Quasar Framework\\n    </div>\\n  </div>\\n  <div class=\\\"item\\\">\\n    <i>query_builder</i>\\n    <div class=\\\"item-content\\\">\\n      <div class=\\\"item-label\\\">Quasar Framework</div>\\n      <div class=\\\"item-value\\\">\\n        <button class=\\\"primary clear\\\">View</button>\\n      </div>\\n    </div>\\n    </div>\\n  </div>\\n</div>\\n\\n<div class=\\\"list bordered inner-delimiter\\\">\\n  <div class=\\\"item\\\">\\n    <div class=\\\"item-content\\\">\\n      <div class=\\\"item-label\\\">Label</div>\\n      <i>explore</i>\\n    </div>\\n  </div>\\n  <div class=\\\"item\\\">\\n    <div class=\\\"item-content\\\">\\n      <div class=\\\"item-label\\\">Label</div>\\n      <i>alarm</i>\\n    </div>\\n  </div>\\n  <div class=\\\"item\\\">\\n    <div class=\\\"item-content\\\">\\n      <div class=\\\"item-label\\\">Label</div>\\n      <i>shopping_cart</i>\\n    </div>\\n  </div>\\n</div>\\n\"\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvbGlzdC1jb21wbGV4LXVzYWdlL3ZpZXcubGlzdC1jb21wbGV4LXVzYWdlLmh0bWw/OTIyNSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiI3Ni5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gXCI8aDU+TGlzdCB3aXRoIEl0ZW0gTGFiZWwgYW5kIEl0ZW0gVmFsdWU8L2g1PlxcbjxwPlxcbiAgSXRlbSBWYWx1ZXMgY2FuIGJlIGFueXRoaW5nIGZyb20gdGV4dCB0byBpY29ucyxcXG4gIGJ1dHRvbnMsIHdlYiBjb21wb25lbnRzLlxcbjwvcD5cXG48ZGl2IGNsYXNzPVxcXCJsaXN0XFxcIj5cXG4gIDxkaXYgY2xhc3M9XFxcIml0ZW1cXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJpdGVtLWNvbnRlbnRcXFwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcIml0ZW0tbGFiZWxcXFwiPkxhYmVsPC9kaXY+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiaXRlbS12YWx1ZVxcXCI+VmFsdWU8L2Rpdj5cXG4gICAgPC9kaXY+XFxuICA8L2Rpdj5cXG4gIDxkaXYgY2xhc3M9XFxcIml0ZW1cXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJpdGVtLWNvbnRlbnRcXFwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcIml0ZW0tbGFiZWxcXFwiPkxhYmVsPC9kaXY+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiaXRlbS12YWx1ZVxcXCI+XFxuICAgICAgICA8aT5wYWdlczwvaT5cXG4gICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuICA8L2Rpdj5cXG4gIDxkaXYgY2xhc3M9XFxcIml0ZW1cXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJpdGVtLWNvbnRlbnRcXFwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcIml0ZW0tbGFiZWxcXFwiPkxhYmVsPC9kaXY+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiaXRlbS12YWx1ZVxcXCI+XFxuICAgICAgICA8aT5wZXJtX2lkZW50aXR5PC9pPlxcbiAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gIDwvZGl2PlxcbjwvZGl2PlxcblxcbjxoNT5MaXN0IHdpdGggSW5uZXIgRGVsaW1pdGVyczwvaDU+XFxuPGRpdiBjbGFzcz1cXFwibGlzdCBpbm5lci1kZWxpbWl0ZXJcXFwiPlxcbiAgPGRpdiBjbGFzcz1cXFwiaXRlbVxcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcIml0ZW0tY29udGVudFxcXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiaXRlbS1sYWJlbFxcXCI+TGFiZWw8L2Rpdj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJpdGVtLXZhbHVlXFxcIj5WYWx1ZTwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gIDwvZGl2PlxcbiAgPGRpdiBjbGFzcz1cXFwiaXRlbVxcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcIml0ZW0tY29udGVudFxcXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiaXRlbS1sYWJlbFxcXCI+TGFiZWw8L2Rpdj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJpdGVtLXZhbHVlXFxcIj5WYWx1ZTwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gIDwvZGl2PlxcbiAgPGRpdiBjbGFzcz1cXFwiaXRlbVxcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcIml0ZW0tY29udGVudFxcXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiaXRlbS1sYWJlbFxcXCI+TGFiZWw8L2Rpdj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJpdGVtLXZhbHVlXFxcIj5cXG4gICAgICAgIDxidXR0b24gY2xhc3M9XFxcInByaW1hcnkgY2xlYXJcXFwiPlZpZXc8L2J1dHRvbj5cXG4gICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuICA8L2Rpdj5cXG48L2Rpdj5cXG5cXG48aDU+TGlzdCB3aXRoIEljb25zPC9oNT5cXG5cXG48ZGl2IGNsYXNzPVxcXCJsaXN0IGJvcmRlcmVkIGlubmVyLWRlbGltaXRlclxcXCI+XFxuICA8ZGl2IGNsYXNzPVxcXCJpdGVtXFxcIj5cXG4gICAgPGk+bWFpbDwvaT5cXG4gICAgPGRpdiBjbGFzcz1cXFwiaXRlbS1jb250ZW50XFxcIj5cXG4gICAgICBRdWFzYXIgRnJhbWV3b3JrXFxuICAgIDwvZGl2PlxcbiAgPC9kaXY+XFxuICA8ZGl2IGNsYXNzPVxcXCJpdGVtXFxcIj5cXG4gICAgPGk+cGVybV9pZGVudGl0eTwvaT5cXG4gICAgPGRpdiBjbGFzcz1cXFwiaXRlbS1jb250ZW50XFxcIj5cXG4gICAgICBRdWFzYXIgRnJhbWV3b3JrXFxuICAgIDwvZGl2PlxcbiAgPC9kaXY+XFxuICA8ZGl2IGNsYXNzPVxcXCJpdGVtXFxcIj5cXG4gICAgPGk+cXVlcnlfYnVpbGRlcjwvaT5cXG4gICAgPGRpdiBjbGFzcz1cXFwiaXRlbS1jb250ZW50XFxcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJpdGVtLWxhYmVsXFxcIj5RdWFzYXIgRnJhbWV3b3JrPC9kaXY+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiaXRlbS12YWx1ZVxcXCI+XFxuICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJwcmltYXJ5IGNsZWFyXFxcIj5WaWV3PC9idXR0b24+XFxuICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gIDwvZGl2PlxcbjwvZGl2PlxcblxcbjxkaXYgY2xhc3M9XFxcImxpc3QgYm9yZGVyZWQgaW5uZXItZGVsaW1pdGVyXFxcIj5cXG4gIDxkaXYgY2xhc3M9XFxcIml0ZW1cXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJpdGVtLWNvbnRlbnRcXFwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcIml0ZW0tbGFiZWxcXFwiPkxhYmVsPC9kaXY+XFxuICAgICAgPGk+ZXhwbG9yZTwvaT5cXG4gICAgPC9kaXY+XFxuICA8L2Rpdj5cXG4gIDxkaXYgY2xhc3M9XFxcIml0ZW1cXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJpdGVtLWNvbnRlbnRcXFwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcIml0ZW0tbGFiZWxcXFwiPkxhYmVsPC9kaXY+XFxuICAgICAgPGk+YWxhcm08L2k+XFxuICAgIDwvZGl2PlxcbiAgPC9kaXY+XFxuICA8ZGl2IGNsYXNzPVxcXCJpdGVtXFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiaXRlbS1jb250ZW50XFxcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJpdGVtLWxhYmVsXFxcIj5MYWJlbDwvZGl2PlxcbiAgICAgIDxpPnNob3BwaW5nX2NhcnQ8L2k+XFxuICAgIDwvZGl2PlxcbiAgPC9kaXY+XFxuPC9kaXY+XFxuXCJcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yYXctbG9hZGVyIS4vc3JjL3BhZ2VzL2xpc3QtY29tcGxleC11c2FnZS92aWV3Lmxpc3QtY29tcGxleC11c2FnZS5odG1sXG4gKiogbW9kdWxlIGlkID0gNzZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMzdcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9");

/***/ }

/******/ });