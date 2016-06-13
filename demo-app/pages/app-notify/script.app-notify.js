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

	module.exports = __webpack_require__(11);


/***/ },

/***/ 11:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar html = __webpack_require__(12);\n\nmodule.exports = {\n  template: html,\n  ready: function() {\n    quasar.current.layout.vm.$data.title = 'App Notify';\n  },\n  data: {\n    types: ['positive', 'negative', 'info', 'warning'],\n    notifyShowing: false\n  },\n  methods: {\n    basicNotify: function() {\n      quasar.notify('Basic notify. Can be dismissed by swiping it left or right.');\n    },\n    basicNotifyWithLongMessage: function() {\n      quasar.notify('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.');\n    },\n    notifyWithType: function(type) {\n      console.log(type);\n      quasar.notify[type]({\n        html: quasar.capitalize(type) + ' notify'\n      });\n    },\n    noTimeoutNotify: function() {\n      quasar.notify({\n        html: 'This notify won\\'t timeout. User must acknowledge it.',\n        timeout: 0\n      });\n    },\n    notifyWithIcon: function() {\n      quasar.notify({\n        html: 'Notify with an icon',\n        icon: 'camera_enhance'\n      });\n    },\n    notifyWithButton: function() {\n      quasar.notify({\n        html: 'Notify with an action button',\n        button: {\n          label: 'Undo',\n          handler: function() {\n            quasar.notify.positive('Undone!');\n          }\n        }\n      });\n    },\n    showNotify: function() {\n      if (this.notifyShowing) {\n        return;\n      }\n\n      var self = this;\n\n      this.notify = quasar.notify({\n        html: 'Dismiss this notify with nearby Dissmiss Notify button',\n        timeout: 0,\n        onDismiss: function() {\n          self.notifyShowing = false;\n        }\n      });\n      this.notifyShowing = true;\n    },\n    dismissNotify: function() {\n      if (!this.notifyShowing) {\n        return;\n      }\n\n      this.notify.dismiss();\n      this.notifyShowing = false;\n    },\n    showMultipleNotifiers: function() {\n      this.types.forEach(function(type) {\n        this.notifyWithType(type);\n      }.bind(this));\n    }\n  }\n};\n\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvYXBwLW5vdGlmeS9zY3JpcHQuYXBwLW5vdGlmeS5qcz8xYzQ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EiLCJmaWxlIjoiMTEuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBodG1sID0gcmVxdWlyZSgncmF3IS4vdmlldy5hcHAtbm90aWZ5Lmh0bWwnKTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHRlbXBsYXRlOiBodG1sLFxuICByZWFkeTogZnVuY3Rpb24oKSB7XG4gICAgcXVhc2FyLmN1cnJlbnQubGF5b3V0LnZtLiRkYXRhLnRpdGxlID0gJ0FwcCBOb3RpZnknO1xuICB9LFxuICBkYXRhOiB7XG4gICAgdHlwZXM6IFsncG9zaXRpdmUnLCAnbmVnYXRpdmUnLCAnaW5mbycsICd3YXJuaW5nJ10sXG4gICAgbm90aWZ5U2hvd2luZzogZmFsc2VcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGJhc2ljTm90aWZ5OiBmdW5jdGlvbigpIHtcbiAgICAgIHF1YXNhci5ub3RpZnkoJ0Jhc2ljIG5vdGlmeS4gQ2FuIGJlIGRpc21pc3NlZCBieSBzd2lwaW5nIGl0IGxlZnQgb3IgcmlnaHQuJyk7XG4gICAgfSxcbiAgICBiYXNpY05vdGlmeVdpdGhMb25nTWVzc2FnZTogZnVuY3Rpb24oKSB7XG4gICAgICBxdWFzYXIubm90aWZ5KCdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS4gVXQgZW5pbSBhZCBtaW5pbSB2ZW5pYW0sIHF1aXMgbm9zdHJ1ZCBleGVyY2l0YXRpb24gdWxsYW1jbyBsYWJvcmlzIG5pc2kgdXQgYWxpcXVpcCBleCBlYSBjb21tb2RvIGNvbnNlcXVhdC4nKTtcbiAgICB9LFxuICAgIG5vdGlmeVdpdGhUeXBlOiBmdW5jdGlvbih0eXBlKSB7XG4gICAgICBjb25zb2xlLmxvZyh0eXBlKTtcbiAgICAgIHF1YXNhci5ub3RpZnlbdHlwZV0oe1xuICAgICAgICBodG1sOiBxdWFzYXIuY2FwaXRhbGl6ZSh0eXBlKSArICcgbm90aWZ5J1xuICAgICAgfSk7XG4gICAgfSxcbiAgICBub1RpbWVvdXROb3RpZnk6IGZ1bmN0aW9uKCkge1xuICAgICAgcXVhc2FyLm5vdGlmeSh7XG4gICAgICAgIGh0bWw6ICdUaGlzIG5vdGlmeSB3b25cXCd0IHRpbWVvdXQuIFVzZXIgbXVzdCBhY2tub3dsZWRnZSBpdC4nLFxuICAgICAgICB0aW1lb3V0OiAwXG4gICAgICB9KTtcbiAgICB9LFxuICAgIG5vdGlmeVdpdGhJY29uOiBmdW5jdGlvbigpIHtcbiAgICAgIHF1YXNhci5ub3RpZnkoe1xuICAgICAgICBodG1sOiAnTm90aWZ5IHdpdGggYW4gaWNvbicsXG4gICAgICAgIGljb246ICdjYW1lcmFfZW5oYW5jZSdcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgbm90aWZ5V2l0aEJ1dHRvbjogZnVuY3Rpb24oKSB7XG4gICAgICBxdWFzYXIubm90aWZ5KHtcbiAgICAgICAgaHRtbDogJ05vdGlmeSB3aXRoIGFuIGFjdGlvbiBidXR0b24nLFxuICAgICAgICBidXR0b246IHtcbiAgICAgICAgICBsYWJlbDogJ1VuZG8nLFxuICAgICAgICAgIGhhbmRsZXI6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcXVhc2FyLm5vdGlmeS5wb3NpdGl2ZSgnVW5kb25lIScpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSxcbiAgICBzaG93Tm90aWZ5OiBmdW5jdGlvbigpIHtcbiAgICAgIGlmICh0aGlzLm5vdGlmeVNob3dpbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgIHRoaXMubm90aWZ5ID0gcXVhc2FyLm5vdGlmeSh7XG4gICAgICAgIGh0bWw6ICdEaXNtaXNzIHRoaXMgbm90aWZ5IHdpdGggbmVhcmJ5IERpc3NtaXNzIE5vdGlmeSBidXR0b24nLFxuICAgICAgICB0aW1lb3V0OiAwLFxuICAgICAgICBvbkRpc21pc3M6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHNlbGYubm90aWZ5U2hvd2luZyA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHRoaXMubm90aWZ5U2hvd2luZyA9IHRydWU7XG4gICAgfSxcbiAgICBkaXNtaXNzTm90aWZ5OiBmdW5jdGlvbigpIHtcbiAgICAgIGlmICghdGhpcy5ub3RpZnlTaG93aW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdGhpcy5ub3RpZnkuZGlzbWlzcygpO1xuICAgICAgdGhpcy5ub3RpZnlTaG93aW5nID0gZmFsc2U7XG4gICAgfSxcbiAgICBzaG93TXVsdGlwbGVOb3RpZmllcnM6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy50eXBlcy5mb3JFYWNoKGZ1bmN0aW9uKHR5cGUpIHtcbiAgICAgICAgdGhpcy5ub3RpZnlXaXRoVHlwZSh0eXBlKTtcbiAgICAgIH0uYmluZCh0aGlzKSk7XG4gICAgfVxuICB9XG59O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9wYWdlcy9hcHAtbm90aWZ5L3NjcmlwdC5hcHAtbm90aWZ5LmpzXG4gKiogbW9kdWxlIGlkID0gMTFcbiAqKiBtb2R1bGUgY2h1bmtzID0gNVxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ },

/***/ 12:
/***/ function(module, exports) {

	eval("module.exports = \"<h5>Basic Notifiers</h5>\\n<p>\\n  <button class=\\\"primary\\\" @click=\\\"basicNotify()\\\">\\n    Basic Notify\\n  </button>\\n\\n  <button class=\\\"primary\\\" @click=\\\"basicNotifyWithLongMessage()\\\">\\n    Basic Notify with Long Message\\n  </button>\\n</p>\\n\\n<h5>Types of Notifiers</h5>\\n<p>\\n  <button\\n    v-for=\\\"type in types\\\"\\n    :class=\\\"type\\\"\\n    @click=\\\"notifyWithType(type)\\\"\\n  >\\n    {{type | capitalize}} Notify\\n  </button>\\n</p>\\n\\n<h5>Notifiers with Options</h5>\\n<p>\\n  <button class=\\\"primary\\\" @click=\\\"noTimeoutNotify()\\\">\\n    Basic Notify with No Timeout\\n  </button>\\n\\n  <button class=\\\"primary\\\" @click=\\\"notifyWithIcon()\\\">\\n    Notify With an Icon\\n  </button>\\n\\n  <button class=\\\"primary\\\" @click=\\\"notifyWithButton()\\\">\\n    Notify With a Button\\n  </button>\\n</p>\\n\\n<h5>Controlling Notifiers</h5>\\n<p>\\n  <button\\n    class=\\\"secondary\\\"\\n    @click=\\\"showNotify()\\\"\\n    :class=\\\"{disabled: notifyShowing}\\\"\\n  >\\n    Show Notify\\n  </button>\\n  <button\\n    class=\\\"secondary\\\"\\n    @click=\\\"dismissNotify()\\\"\\n    :class=\\\"{disabled: !notifyShowing}\\\"\\n  >\\n    Dismiss Notify\\n  </button>\\n</p>\\n\\n<h5>Simultaneous Multiple Notifiers</h5>\\n<p>\\n  <button class=\\\"primary\\\" @click=\\\"showMultipleNotifiers()\\\">\\n    Show Multiple Notifiers\\n  </button>\\n</p>\\n\"\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvYXBwLW5vdGlmeS92aWV3LmFwcC1ub3RpZnkuaHRtbD85MWU3Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHVaQUF1WixtQkFBbUIsaWZBQWlmLHdCQUF3Qix5SEFBeUgseUJBQXlCIiwiZmlsZSI6IjEyLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIjxoNT5CYXNpYyBOb3RpZmllcnM8L2g1PlxcbjxwPlxcbiAgPGJ1dHRvbiBjbGFzcz1cXFwicHJpbWFyeVxcXCIgQGNsaWNrPVxcXCJiYXNpY05vdGlmeSgpXFxcIj5cXG4gICAgQmFzaWMgTm90aWZ5XFxuICA8L2J1dHRvbj5cXG5cXG4gIDxidXR0b24gY2xhc3M9XFxcInByaW1hcnlcXFwiIEBjbGljaz1cXFwiYmFzaWNOb3RpZnlXaXRoTG9uZ01lc3NhZ2UoKVxcXCI+XFxuICAgIEJhc2ljIE5vdGlmeSB3aXRoIExvbmcgTWVzc2FnZVxcbiAgPC9idXR0b24+XFxuPC9wPlxcblxcbjxoNT5UeXBlcyBvZiBOb3RpZmllcnM8L2g1PlxcbjxwPlxcbiAgPGJ1dHRvblxcbiAgICB2LWZvcj1cXFwidHlwZSBpbiB0eXBlc1xcXCJcXG4gICAgOmNsYXNzPVxcXCJ0eXBlXFxcIlxcbiAgICBAY2xpY2s9XFxcIm5vdGlmeVdpdGhUeXBlKHR5cGUpXFxcIlxcbiAgPlxcbiAgICB7e3R5cGUgfCBjYXBpdGFsaXplfX0gTm90aWZ5XFxuICA8L2J1dHRvbj5cXG48L3A+XFxuXFxuPGg1Pk5vdGlmaWVycyB3aXRoIE9wdGlvbnM8L2g1PlxcbjxwPlxcbiAgPGJ1dHRvbiBjbGFzcz1cXFwicHJpbWFyeVxcXCIgQGNsaWNrPVxcXCJub1RpbWVvdXROb3RpZnkoKVxcXCI+XFxuICAgIEJhc2ljIE5vdGlmeSB3aXRoIE5vIFRpbWVvdXRcXG4gIDwvYnV0dG9uPlxcblxcbiAgPGJ1dHRvbiBjbGFzcz1cXFwicHJpbWFyeVxcXCIgQGNsaWNrPVxcXCJub3RpZnlXaXRoSWNvbigpXFxcIj5cXG4gICAgTm90aWZ5IFdpdGggYW4gSWNvblxcbiAgPC9idXR0b24+XFxuXFxuICA8YnV0dG9uIGNsYXNzPVxcXCJwcmltYXJ5XFxcIiBAY2xpY2s9XFxcIm5vdGlmeVdpdGhCdXR0b24oKVxcXCI+XFxuICAgIE5vdGlmeSBXaXRoIGEgQnV0dG9uXFxuICA8L2J1dHRvbj5cXG48L3A+XFxuXFxuPGg1PkNvbnRyb2xsaW5nIE5vdGlmaWVyczwvaDU+XFxuPHA+XFxuICA8YnV0dG9uXFxuICAgIGNsYXNzPVxcXCJzZWNvbmRhcnlcXFwiXFxuICAgIEBjbGljaz1cXFwic2hvd05vdGlmeSgpXFxcIlxcbiAgICA6Y2xhc3M9XFxcIntkaXNhYmxlZDogbm90aWZ5U2hvd2luZ31cXFwiXFxuICA+XFxuICAgIFNob3cgTm90aWZ5XFxuICA8L2J1dHRvbj5cXG4gIDxidXR0b25cXG4gICAgY2xhc3M9XFxcInNlY29uZGFyeVxcXCJcXG4gICAgQGNsaWNrPVxcXCJkaXNtaXNzTm90aWZ5KClcXFwiXFxuICAgIDpjbGFzcz1cXFwie2Rpc2FibGVkOiAhbm90aWZ5U2hvd2luZ31cXFwiXFxuICA+XFxuICAgIERpc21pc3MgTm90aWZ5XFxuICA8L2J1dHRvbj5cXG48L3A+XFxuXFxuPGg1PlNpbXVsdGFuZW91cyBNdWx0aXBsZSBOb3RpZmllcnM8L2g1PlxcbjxwPlxcbiAgPGJ1dHRvbiBjbGFzcz1cXFwicHJpbWFyeVxcXCIgQGNsaWNrPVxcXCJzaG93TXVsdGlwbGVOb3RpZmllcnMoKVxcXCI+XFxuICAgIFNob3cgTXVsdGlwbGUgTm90aWZpZXJzXFxuICA8L2J1dHRvbj5cXG48L3A+XFxuXCJcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yYXctbG9hZGVyIS4vc3JjL3BhZ2VzL2FwcC1ub3RpZnkvdmlldy5hcHAtbm90aWZ5Lmh0bWxcbiAqKiBtb2R1bGUgaWQgPSAxMlxuICoqIG1vZHVsZSBjaHVua3MgPSA1XG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ }

/******/ });