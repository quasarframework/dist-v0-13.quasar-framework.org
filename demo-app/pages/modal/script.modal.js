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

	module.exports = __webpack_require__(87);


/***/ },

/***/ 87:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar\n  html = __webpack_require__(88),\n  modalTemplate = __webpack_require__(89)\n  ;\n\nvar number = 0;\n\nfunction openBasicModal() {\n  new quasar.Modal({\n    template: '<p v-for=\"n in 10\">This is a basic modal. Scroll down to close.</p><button class=\"secondary\" @click=\"close()\">Close Me</button>'\n  })\n  .css({\n    padding: '50px',\n    minWidth: '50vw'\n  })\n  .show();\n}\n\nfunction openBasicModalWithEvents() {\n  new quasar.Modal({\n    template: '<p v-for=\"n in 10\">This is a basic modal. Scroll down to close.</p><button class=\"secondary\" @click=\"close()\">Close Me</button>'\n  })\n  .onShow(function() {\n    quasar.notify('onShow triggered');\n  })\n  .onClose(function() {\n    quasar.notify('onClose triggered');\n  })\n  .css({\n    padding: '50px',\n    minWidth: '50vw'\n  })\n  .show();\n}\n\nfunction openScreenModal() {\n  new quasar.Modal({\n    template: modalTemplate,\n    data: {\n      number: ++number\n    },\n    methods: {\n      openModal: openScreenModal\n    }\n  }).css({\n    minWidth: '80vw',\n    minHeight: '80vh'\n  }).show();\n}\n\nfunction openMinimizedModal() {\n  new quasar.Modal({\n    template: '<h1>Minimized Modal</h1><p>This one has backdrop on small screens too.</p>' +\n              '<button class=\"tertiary\" @click=\"close()\">Close Me</button>'\n  }).set({\n    minimized: true\n  }).css({\n    padding: '50px'\n  }).show();\n}\n\nfunction openMaximizedModal() {\n  new quasar.Modal({\n    template: '<h1>Maximized Modal</h1><p>This one is maximized on bigger screens too.</p>' +\n              '<button class=\"tertiary\" @click=\"close()\">Close Me</button>'\n  }).set({\n    maximized: true\n  }).css({\n    padding: '50px'\n  }).show();\n}\n\nmodule.exports = {\n  template: html,\n  ready: function() {\n    quasar.current.layout.vm.$data.title = 'Modals';\n  },\n  data: {\n    types: [\n      {\n        label: 'Basic Modal',\n        handler: openBasicModal\n      },\n      {\n        label: 'Basic Modal with Events',\n        handler: openBasicModalWithEvents\n      },\n      {\n        label: 'Screen Modal',\n        handler: openScreenModal\n      },\n      {\n        label: 'Always Minimized Modal',\n        handler: openMinimizedModal\n      },\n      {\n        label: 'Always Maximized Modal',\n        handler: openMaximizedModal\n      }\n    ]\n  }\n};\n\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvbW9kYWwvc2NyaXB0Lm1vZGFsLmpzP2MxNzYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ijg3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXJcbiAgaHRtbCA9IHJlcXVpcmUoJ3JhdyEuL3ZpZXcubW9kYWwuaHRtbCcpLFxuICBtb2RhbFRlbXBsYXRlID0gcmVxdWlyZSgncmF3IS4vaHRtbC9tb2RhbF90ZW1wbGF0ZS5odG1sJylcbiAgO1xuXG52YXIgbnVtYmVyID0gMDtcblxuZnVuY3Rpb24gb3BlbkJhc2ljTW9kYWwoKSB7XG4gIG5ldyBxdWFzYXIuTW9kYWwoe1xuICAgIHRlbXBsYXRlOiAnPHAgdi1mb3I9XCJuIGluIDEwXCI+VGhpcyBpcyBhIGJhc2ljIG1vZGFsLiBTY3JvbGwgZG93biB0byBjbG9zZS48L3A+PGJ1dHRvbiBjbGFzcz1cInNlY29uZGFyeVwiIEBjbGljaz1cImNsb3NlKClcIj5DbG9zZSBNZTwvYnV0dG9uPidcbiAgfSlcbiAgLmNzcyh7XG4gICAgcGFkZGluZzogJzUwcHgnLFxuICAgIG1pbldpZHRoOiAnNTB2dydcbiAgfSlcbiAgLnNob3coKTtcbn1cblxuZnVuY3Rpb24gb3BlbkJhc2ljTW9kYWxXaXRoRXZlbnRzKCkge1xuICBuZXcgcXVhc2FyLk1vZGFsKHtcbiAgICB0ZW1wbGF0ZTogJzxwIHYtZm9yPVwibiBpbiAxMFwiPlRoaXMgaXMgYSBiYXNpYyBtb2RhbC4gU2Nyb2xsIGRvd24gdG8gY2xvc2UuPC9wPjxidXR0b24gY2xhc3M9XCJzZWNvbmRhcnlcIiBAY2xpY2s9XCJjbG9zZSgpXCI+Q2xvc2UgTWU8L2J1dHRvbj4nXG4gIH0pXG4gIC5vblNob3coZnVuY3Rpb24oKSB7XG4gICAgcXVhc2FyLm5vdGlmeSgnb25TaG93IHRyaWdnZXJlZCcpO1xuICB9KVxuICAub25DbG9zZShmdW5jdGlvbigpIHtcbiAgICBxdWFzYXIubm90aWZ5KCdvbkNsb3NlIHRyaWdnZXJlZCcpO1xuICB9KVxuICAuY3NzKHtcbiAgICBwYWRkaW5nOiAnNTBweCcsXG4gICAgbWluV2lkdGg6ICc1MHZ3J1xuICB9KVxuICAuc2hvdygpO1xufVxuXG5mdW5jdGlvbiBvcGVuU2NyZWVuTW9kYWwoKSB7XG4gIG5ldyBxdWFzYXIuTW9kYWwoe1xuICAgIHRlbXBsYXRlOiBtb2RhbFRlbXBsYXRlLFxuICAgIGRhdGE6IHtcbiAgICAgIG51bWJlcjogKytudW1iZXJcbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgIG9wZW5Nb2RhbDogb3BlblNjcmVlbk1vZGFsXG4gICAgfVxuICB9KS5jc3Moe1xuICAgIG1pbldpZHRoOiAnODB2dycsXG4gICAgbWluSGVpZ2h0OiAnODB2aCdcbiAgfSkuc2hvdygpO1xufVxuXG5mdW5jdGlvbiBvcGVuTWluaW1pemVkTW9kYWwoKSB7XG4gIG5ldyBxdWFzYXIuTW9kYWwoe1xuICAgIHRlbXBsYXRlOiAnPGgxPk1pbmltaXplZCBNb2RhbDwvaDE+PHA+VGhpcyBvbmUgaGFzIGJhY2tkcm9wIG9uIHNtYWxsIHNjcmVlbnMgdG9vLjwvcD4nICtcbiAgICAgICAgICAgICAgJzxidXR0b24gY2xhc3M9XCJ0ZXJ0aWFyeVwiIEBjbGljaz1cImNsb3NlKClcIj5DbG9zZSBNZTwvYnV0dG9uPidcbiAgfSkuc2V0KHtcbiAgICBtaW5pbWl6ZWQ6IHRydWVcbiAgfSkuY3NzKHtcbiAgICBwYWRkaW5nOiAnNTBweCdcbiAgfSkuc2hvdygpO1xufVxuXG5mdW5jdGlvbiBvcGVuTWF4aW1pemVkTW9kYWwoKSB7XG4gIG5ldyBxdWFzYXIuTW9kYWwoe1xuICAgIHRlbXBsYXRlOiAnPGgxPk1heGltaXplZCBNb2RhbDwvaDE+PHA+VGhpcyBvbmUgaXMgbWF4aW1pemVkIG9uIGJpZ2dlciBzY3JlZW5zIHRvby48L3A+JyArXG4gICAgICAgICAgICAgICc8YnV0dG9uIGNsYXNzPVwidGVydGlhcnlcIiBAY2xpY2s9XCJjbG9zZSgpXCI+Q2xvc2UgTWU8L2J1dHRvbj4nXG4gIH0pLnNldCh7XG4gICAgbWF4aW1pemVkOiB0cnVlXG4gIH0pLmNzcyh7XG4gICAgcGFkZGluZzogJzUwcHgnXG4gIH0pLnNob3coKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHRlbXBsYXRlOiBodG1sLFxuICByZWFkeTogZnVuY3Rpb24oKSB7XG4gICAgcXVhc2FyLmN1cnJlbnQubGF5b3V0LnZtLiRkYXRhLnRpdGxlID0gJ01vZGFscyc7XG4gIH0sXG4gIGRhdGE6IHtcbiAgICB0eXBlczogW1xuICAgICAge1xuICAgICAgICBsYWJlbDogJ0Jhc2ljIE1vZGFsJyxcbiAgICAgICAgaGFuZGxlcjogb3BlbkJhc2ljTW9kYWxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiAnQmFzaWMgTW9kYWwgd2l0aCBFdmVudHMnLFxuICAgICAgICBoYW5kbGVyOiBvcGVuQmFzaWNNb2RhbFdpdGhFdmVudHNcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiAnU2NyZWVuIE1vZGFsJyxcbiAgICAgICAgaGFuZGxlcjogb3BlblNjcmVlbk1vZGFsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBsYWJlbDogJ0Fsd2F5cyBNaW5pbWl6ZWQgTW9kYWwnLFxuICAgICAgICBoYW5kbGVyOiBvcGVuTWluaW1pemVkTW9kYWxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiAnQWx3YXlzIE1heGltaXplZCBNb2RhbCcsXG4gICAgICAgIGhhbmRsZXI6IG9wZW5NYXhpbWl6ZWRNb2RhbFxuICAgICAgfVxuICAgIF1cbiAgfVxufTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvcGFnZXMvbW9kYWwvc2NyaXB0Lm1vZGFsLmpzXG4gKiogbW9kdWxlIGlkID0gODdcbiAqKiBtb2R1bGUgY2h1bmtzID0gNDNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9");

/***/ },

/***/ 88:
/***/ function(module, exports) {

	eval("module.exports = \"<p class=\\\"caption\\\">\\n  Click/Tap on each type to see it in action.\\n</p>\\n\\n<div class=\\\"list item-delimiter highlight\\\">\\n  <div\\n    class=\\\"item cursor-pointer\\\"\\n    v-for=\\\"modal in types\\\"\\n    @click=\\\"modal.handler()\\\"\\n  >\\n    <i class=\\\"text-primary\\\">open_in_new</i>\\n    <div class=\\\"item-content\\\">\\n      <div class=\\\"item-label\\\">{{modal.label}}</div>\\n      <i>keyboard_arrow_right</i>\\n    </div>\\n  </div>\\n</div>\\n\"\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvbW9kYWwvdmlldy5tb2RhbC5odG1sPzkxMzciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ1hBQWdYLGFBQWEiLCJmaWxlIjoiODguanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IFwiPHAgY2xhc3M9XFxcImNhcHRpb25cXFwiPlxcbiAgQ2xpY2svVGFwIG9uIGVhY2ggdHlwZSB0byBzZWUgaXQgaW4gYWN0aW9uLlxcbjwvcD5cXG5cXG48ZGl2IGNsYXNzPVxcXCJsaXN0IGl0ZW0tZGVsaW1pdGVyIGhpZ2hsaWdodFxcXCI+XFxuICA8ZGl2XFxuICAgIGNsYXNzPVxcXCJpdGVtIGN1cnNvci1wb2ludGVyXFxcIlxcbiAgICB2LWZvcj1cXFwibW9kYWwgaW4gdHlwZXNcXFwiXFxuICAgIEBjbGljaz1cXFwibW9kYWwuaGFuZGxlcigpXFxcIlxcbiAgPlxcbiAgICA8aSBjbGFzcz1cXFwidGV4dC1wcmltYXJ5XFxcIj5vcGVuX2luX25ldzwvaT5cXG4gICAgPGRpdiBjbGFzcz1cXFwiaXRlbS1jb250ZW50XFxcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJpdGVtLWxhYmVsXFxcIj57e21vZGFsLmxhYmVsfX08L2Rpdj5cXG4gICAgICA8aT5rZXlib2FyZF9hcnJvd19yaWdodDwvaT5cXG4gICAgPC9kaXY+XFxuICA8L2Rpdj5cXG48L2Rpdj5cXG5cIlxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3Jhdy1sb2FkZXIhLi9zcmMvcGFnZXMvbW9kYWwvdmlldy5tb2RhbC5odG1sXG4gKiogbW9kdWxlIGlkID0gODhcbiAqKiBtb2R1bGUgY2h1bmtzID0gNDNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9");

/***/ },

/***/ 89:
/***/ function(module, exports) {

	eval("module.exports = \"<screen>\\n\\n  <div slot=\\\"header\\\" class=\\\"row items-center\\\">\\n    <button @click=\\\"close()\\\"><i>keyboard_arrow_left</i></button>\\n    <p>Header</p>\\n    <button @click=\\\"openModal()\\\"><i>open_in_new</i></button>\\n  </div>\\n  <div slot=\\\"footer\\\" class=\\\"row items-center\\\">\\n    <p>Footer</p>\\n  </div>\\n\\n  <div style=\\\"padding: 20px\\\">\\n    <h1>Modal {{number}}</h1>\\n    <button class=\\\"primary\\\" @click=\\\"openModal()\\\">Open Another Modal</button>\\n    <h5 v-for=\\\"n in 15\\\">This is a Modal presenting a Screen.</h5>\\n  </div>\\n\\n</screen>\\n\"\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvbW9kYWwvaHRtbC9tb2RhbF90ZW1wbGF0ZS5odG1sPzA2MjciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsdVhBQXVYLFFBQVEiLCJmaWxlIjoiODkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IFwiPHNjcmVlbj5cXG5cXG4gIDxkaXYgc2xvdD1cXFwiaGVhZGVyXFxcIiBjbGFzcz1cXFwicm93IGl0ZW1zLWNlbnRlclxcXCI+XFxuICAgIDxidXR0b24gQGNsaWNrPVxcXCJjbG9zZSgpXFxcIj48aT5rZXlib2FyZF9hcnJvd19sZWZ0PC9pPjwvYnV0dG9uPlxcbiAgICA8cD5IZWFkZXI8L3A+XFxuICAgIDxidXR0b24gQGNsaWNrPVxcXCJvcGVuTW9kYWwoKVxcXCI+PGk+b3Blbl9pbl9uZXc8L2k+PC9idXR0b24+XFxuICA8L2Rpdj5cXG4gIDxkaXYgc2xvdD1cXFwiZm9vdGVyXFxcIiBjbGFzcz1cXFwicm93IGl0ZW1zLWNlbnRlclxcXCI+XFxuICAgIDxwPkZvb3RlcjwvcD5cXG4gIDwvZGl2PlxcblxcbiAgPGRpdiBzdHlsZT1cXFwicGFkZGluZzogMjBweFxcXCI+XFxuICAgIDxoMT5Nb2RhbCB7e251bWJlcn19PC9oMT5cXG4gICAgPGJ1dHRvbiBjbGFzcz1cXFwicHJpbWFyeVxcXCIgQGNsaWNrPVxcXCJvcGVuTW9kYWwoKVxcXCI+T3BlbiBBbm90aGVyIE1vZGFsPC9idXR0b24+XFxuICAgIDxoNSB2LWZvcj1cXFwibiBpbiAxNVxcXCI+VGhpcyBpcyBhIE1vZGFsIHByZXNlbnRpbmcgYSBTY3JlZW4uPC9oNT5cXG4gIDwvZGl2Plxcblxcbjwvc2NyZWVuPlxcblwiXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmF3LWxvYWRlciEuL3NyYy9wYWdlcy9tb2RhbC9odG1sL21vZGFsX3RlbXBsYXRlLmh0bWxcbiAqKiBtb2R1bGUgaWQgPSA4OVxuICoqIG1vZHVsZSBjaHVua3MgPSA0M1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ }

/******/ });