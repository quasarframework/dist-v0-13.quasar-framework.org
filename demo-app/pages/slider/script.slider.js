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

	module.exports = __webpack_require__(110);


/***/ },

/***/ 110:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar html = __webpack_require__(111);\nvar modalTemplate = __webpack_require__(112);\n\nmodule.exports = {\n  template: html,\n  methods: {\n    launchModal: function() {\n      new quasar.Modal({\n        template: modalTemplate\n      }).set({\n        maximized: true\n      }).show();\n    }\n  },\n  ready: function() {\n    quasar.current.layout.vm.$data.title = 'Slider';\n  }\n};\n\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvc2xpZGVyL3NjcmlwdC5zbGlkZXIuanM/ODIyNiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIxMTAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBodG1sID0gcmVxdWlyZSgncmF3IS4vdmlldy5zbGlkZXIuaHRtbCcpO1xudmFyIG1vZGFsVGVtcGxhdGUgPSByZXF1aXJlKCdyYXchLi9odG1sL3BhZ2Utc2xpZGVyLW1vZGFsLmh0bWwnKTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHRlbXBsYXRlOiBodG1sLFxuICBtZXRob2RzOiB7XG4gICAgbGF1bmNoTW9kYWw6IGZ1bmN0aW9uKCkge1xuICAgICAgbmV3IHF1YXNhci5Nb2RhbCh7XG4gICAgICAgIHRlbXBsYXRlOiBtb2RhbFRlbXBsYXRlXG4gICAgICB9KS5zZXQoe1xuICAgICAgICBtYXhpbWl6ZWQ6IHRydWVcbiAgICAgIH0pLnNob3coKTtcbiAgICB9XG4gIH0sXG4gIHJlYWR5OiBmdW5jdGlvbigpIHtcbiAgICBxdWFzYXIuY3VycmVudC5sYXlvdXQudm0uJGRhdGEudGl0bGUgPSAnU2xpZGVyJztcbiAgfVxufTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvcGFnZXMvc2xpZGVyL3NjcmlwdC5zbGlkZXIuanNcbiAqKiBtb2R1bGUgaWQgPSAxMTBcbiAqKiBtb2R1bGUgY2h1bmtzID0gNTRcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9");

/***/ },

/***/ 111:
/***/ function(module, exports) {

	eval("module.exports = \"<h5>\\n  Basic Slider. No controls. Just swipe between slides or\\n  use you mouse to drag slides to left or right.\\n</h5>\\n<slider class=\\\"text-white\\\">\\n  <div slot=\\\"slide\\\" class=\\\"bg-primary\\\">\\n    Slide 1\\n  </div>\\n  <div slot=\\\"slide\\\" class=\\\"bg-secondary\\\">\\n    Slide 2\\n  </div>\\n  <div slot=\\\"slide\\\" class=\\\"bg-tertiary\\\">\\n    Slide 3\\n  </div>\\n</slider>\\n\\n<h5>Slider with Arrows, Dots and Fullscreen controls.</h5>\\n<slider arrows dots fullscreen class=\\\"text-white\\\">\\n  <div slot=\\\"slide\\\" class=\\\"bg-primary\\\">\\n    <div>Slide 1</div>\\n    <div v-for=\\\"n in 12\\\">Line {{(n+2)}}</div>\\n  </div>\\n  <div slot=\\\"slide\\\" class=\\\"bg-secondary\\\">\\n    Slide 2\\n  </div>\\n  <div slot=\\\"slide\\\" class=\\\"bg-tertiary\\\">\\n    Slide 3\\n  </div>\\n</slider>\\n\\n<h5>Slider with Centered Content</h5>\\n<slider arrows dots class=\\\"text-white\\\">\\n  <div slot=\\\"slide\\\" class=\\\"bg-primary centered\\\">\\n    Slide 1\\n  </div>\\n  <div slot=\\\"slide\\\" class=\\\"bg-secondary centered\\\">\\n    Slide 2\\n  </div>\\n  <div slot=\\\"slide\\\" class=\\\"bg-tertiary centered\\\">\\n    Slide 3\\n  </div>\\n</slider>\\n\\n<h5>Slider with Custom Actions as Controls</h5>\\n<slider arrows dots actions class=\\\"text-white\\\">\\n  <div slot=\\\"slide\\\" class=\\\"bg-primary\\\">\\n    <div v-for=\\\"n in 20\\\">Slide {{n}}</div>\\n  </div>\\n  <div slot=\\\"slide\\\" class=\\\"bg-secondary\\\">\\n    Slide 2\\n  </div>\\n  <div slot=\\\"slide\\\" class=\\\"bg-tertiary\\\">\\n    Slide 3\\n  </div>\\n  <i slot=\\\"action\\\">camera_enhance</i>\\n  <i slot=\\\"action\\\">bookmark_border</i>\\n  <i slot=\\\"action\\\">add_shopping_cart</i>\\n</slider>\\n\\n<h5>Launch Slider on Fullscreen</h5>\\n<button class=\\\"primary glossy\\\" @click=\\\"launchModal()\\\">\\n  Launch\\n</button>\\n\"\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvc2xpZGVyL3ZpZXcuc2xpZGVyLmh0bWw/NzcwZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnbUJBQWdtQixPQUFPLHVxQkFBdXFCLEdBQUciLCJmaWxlIjoiMTExLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIjxoNT5cXG4gIEJhc2ljIFNsaWRlci4gTm8gY29udHJvbHMuIEp1c3Qgc3dpcGUgYmV0d2VlbiBzbGlkZXMgb3JcXG4gIHVzZSB5b3UgbW91c2UgdG8gZHJhZyBzbGlkZXMgdG8gbGVmdCBvciByaWdodC5cXG48L2g1PlxcbjxzbGlkZXIgY2xhc3M9XFxcInRleHQtd2hpdGVcXFwiPlxcbiAgPGRpdiBzbG90PVxcXCJzbGlkZVxcXCIgY2xhc3M9XFxcImJnLXByaW1hcnlcXFwiPlxcbiAgICBTbGlkZSAxXFxuICA8L2Rpdj5cXG4gIDxkaXYgc2xvdD1cXFwic2xpZGVcXFwiIGNsYXNzPVxcXCJiZy1zZWNvbmRhcnlcXFwiPlxcbiAgICBTbGlkZSAyXFxuICA8L2Rpdj5cXG4gIDxkaXYgc2xvdD1cXFwic2xpZGVcXFwiIGNsYXNzPVxcXCJiZy10ZXJ0aWFyeVxcXCI+XFxuICAgIFNsaWRlIDNcXG4gIDwvZGl2Plxcbjwvc2xpZGVyPlxcblxcbjxoNT5TbGlkZXIgd2l0aCBBcnJvd3MsIERvdHMgYW5kIEZ1bGxzY3JlZW4gY29udHJvbHMuPC9oNT5cXG48c2xpZGVyIGFycm93cyBkb3RzIGZ1bGxzY3JlZW4gY2xhc3M9XFxcInRleHQtd2hpdGVcXFwiPlxcbiAgPGRpdiBzbG90PVxcXCJzbGlkZVxcXCIgY2xhc3M9XFxcImJnLXByaW1hcnlcXFwiPlxcbiAgICA8ZGl2PlNsaWRlIDE8L2Rpdj5cXG4gICAgPGRpdiB2LWZvcj1cXFwibiBpbiAxMlxcXCI+TGluZSB7eyhuKzIpfX08L2Rpdj5cXG4gIDwvZGl2PlxcbiAgPGRpdiBzbG90PVxcXCJzbGlkZVxcXCIgY2xhc3M9XFxcImJnLXNlY29uZGFyeVxcXCI+XFxuICAgIFNsaWRlIDJcXG4gIDwvZGl2PlxcbiAgPGRpdiBzbG90PVxcXCJzbGlkZVxcXCIgY2xhc3M9XFxcImJnLXRlcnRpYXJ5XFxcIj5cXG4gICAgU2xpZGUgM1xcbiAgPC9kaXY+XFxuPC9zbGlkZXI+XFxuXFxuPGg1PlNsaWRlciB3aXRoIENlbnRlcmVkIENvbnRlbnQ8L2g1PlxcbjxzbGlkZXIgYXJyb3dzIGRvdHMgY2xhc3M9XFxcInRleHQtd2hpdGVcXFwiPlxcbiAgPGRpdiBzbG90PVxcXCJzbGlkZVxcXCIgY2xhc3M9XFxcImJnLXByaW1hcnkgY2VudGVyZWRcXFwiPlxcbiAgICBTbGlkZSAxXFxuICA8L2Rpdj5cXG4gIDxkaXYgc2xvdD1cXFwic2xpZGVcXFwiIGNsYXNzPVxcXCJiZy1zZWNvbmRhcnkgY2VudGVyZWRcXFwiPlxcbiAgICBTbGlkZSAyXFxuICA8L2Rpdj5cXG4gIDxkaXYgc2xvdD1cXFwic2xpZGVcXFwiIGNsYXNzPVxcXCJiZy10ZXJ0aWFyeSBjZW50ZXJlZFxcXCI+XFxuICAgIFNsaWRlIDNcXG4gIDwvZGl2Plxcbjwvc2xpZGVyPlxcblxcbjxoNT5TbGlkZXIgd2l0aCBDdXN0b20gQWN0aW9ucyBhcyBDb250cm9sczwvaDU+XFxuPHNsaWRlciBhcnJvd3MgZG90cyBhY3Rpb25zIGNsYXNzPVxcXCJ0ZXh0LXdoaXRlXFxcIj5cXG4gIDxkaXYgc2xvdD1cXFwic2xpZGVcXFwiIGNsYXNzPVxcXCJiZy1wcmltYXJ5XFxcIj5cXG4gICAgPGRpdiB2LWZvcj1cXFwibiBpbiAyMFxcXCI+U2xpZGUge3tufX08L2Rpdj5cXG4gIDwvZGl2PlxcbiAgPGRpdiBzbG90PVxcXCJzbGlkZVxcXCIgY2xhc3M9XFxcImJnLXNlY29uZGFyeVxcXCI+XFxuICAgIFNsaWRlIDJcXG4gIDwvZGl2PlxcbiAgPGRpdiBzbG90PVxcXCJzbGlkZVxcXCIgY2xhc3M9XFxcImJnLXRlcnRpYXJ5XFxcIj5cXG4gICAgU2xpZGUgM1xcbiAgPC9kaXY+XFxuICA8aSBzbG90PVxcXCJhY3Rpb25cXFwiPmNhbWVyYV9lbmhhbmNlPC9pPlxcbiAgPGkgc2xvdD1cXFwiYWN0aW9uXFxcIj5ib29rbWFya19ib3JkZXI8L2k+XFxuICA8aSBzbG90PVxcXCJhY3Rpb25cXFwiPmFkZF9zaG9wcGluZ19jYXJ0PC9pPlxcbjwvc2xpZGVyPlxcblxcbjxoNT5MYXVuY2ggU2xpZGVyIG9uIEZ1bGxzY3JlZW48L2g1PlxcbjxidXR0b24gY2xhc3M9XFxcInByaW1hcnkgZ2xvc3N5XFxcIiBAY2xpY2s9XFxcImxhdW5jaE1vZGFsKClcXFwiPlxcbiAgTGF1bmNoXFxuPC9idXR0b24+XFxuXCJcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yYXctbG9hZGVyIS4vc3JjL3BhZ2VzL3NsaWRlci92aWV3LnNsaWRlci5odG1sXG4gKiogbW9kdWxlIGlkID0gMTExXG4gKiogbW9kdWxlIGNodW5rcyA9IDU0XG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ },

/***/ 112:
/***/ function(module, exports) {

	eval("module.exports = \"<slider arrows dots class=\\\"text-white full-height\\\">\\n  <div slot=\\\"slide\\\" class=\\\"bg-primary centered\\\">\\n    <div>Slide 1</div>\\n    <button class=\\\"dark glossy\\\" @click=\\\"close()\\\">Close Me</button>\\n  </div>\\n  <div slot=\\\"slide\\\" class=\\\"bg-secondary centered\\\">\\n    <div>Slide 2</div>\\n    <button class=\\\"dark glossy\\\" @click=\\\"close()\\\">Close Me</button>\\n  </div>\\n  <div slot=\\\"slide\\\" class=\\\"bg-tertiary centered\\\">\\n    <div>Slide 3</div>\\n    <button class=\\\"dark glossy\\\" @click=\\\"close()\\\">Close Me</button>\\n  </div>\\n</slider>\\n\"\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvc2xpZGVyL2h0bWwvcGFnZS1zbGlkZXItbW9kYWwuaHRtbD9iMmMzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjExMi5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gXCI8c2xpZGVyIGFycm93cyBkb3RzIGNsYXNzPVxcXCJ0ZXh0LXdoaXRlIGZ1bGwtaGVpZ2h0XFxcIj5cXG4gIDxkaXYgc2xvdD1cXFwic2xpZGVcXFwiIGNsYXNzPVxcXCJiZy1wcmltYXJ5IGNlbnRlcmVkXFxcIj5cXG4gICAgPGRpdj5TbGlkZSAxPC9kaXY+XFxuICAgIDxidXR0b24gY2xhc3M9XFxcImRhcmsgZ2xvc3N5XFxcIiBAY2xpY2s9XFxcImNsb3NlKClcXFwiPkNsb3NlIE1lPC9idXR0b24+XFxuICA8L2Rpdj5cXG4gIDxkaXYgc2xvdD1cXFwic2xpZGVcXFwiIGNsYXNzPVxcXCJiZy1zZWNvbmRhcnkgY2VudGVyZWRcXFwiPlxcbiAgICA8ZGl2PlNsaWRlIDI8L2Rpdj5cXG4gICAgPGJ1dHRvbiBjbGFzcz1cXFwiZGFyayBnbG9zc3lcXFwiIEBjbGljaz1cXFwiY2xvc2UoKVxcXCI+Q2xvc2UgTWU8L2J1dHRvbj5cXG4gIDwvZGl2PlxcbiAgPGRpdiBzbG90PVxcXCJzbGlkZVxcXCIgY2xhc3M9XFxcImJnLXRlcnRpYXJ5IGNlbnRlcmVkXFxcIj5cXG4gICAgPGRpdj5TbGlkZSAzPC9kaXY+XFxuICAgIDxidXR0b24gY2xhc3M9XFxcImRhcmsgZ2xvc3N5XFxcIiBAY2xpY2s9XFxcImNsb3NlKClcXFwiPkNsb3NlIE1lPC9idXR0b24+XFxuICA8L2Rpdj5cXG48L3NsaWRlcj5cXG5cIlxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3Jhdy1sb2FkZXIhLi9zcmMvcGFnZXMvc2xpZGVyL2h0bWwvcGFnZS1zbGlkZXItbW9kYWwuaHRtbFxuICoqIG1vZHVsZSBpZCA9IDExMlxuICoqIG1vZHVsZSBjaHVua3MgPSA1NFxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ }

/******/ });