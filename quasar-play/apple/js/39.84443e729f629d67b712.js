webpackJsonp([39],{170:function(n,s,t){"use strict";function e(n){o.Loading.show(n),setTimeout(function(){o.Loading.hide()},3e3)}Object.defineProperty(s,"__esModule",{value:!0});var o=t(3);s.default={methods:{noMessage:function(){e()},customSpinner:function(){e({spinner:"facebook"})},customColorSpinner:function(){e({spinner:"pie",spinnerColor:"#027be3",spinnerSize:220,message:"Some important process is in progress. Hang on...",messageColor:"#ef0"})},withMessage:function(){e({message:"Some important process is in progress. Hang on..."})}}}},285:function(n,s){n.exports={render:function(){var n=this,s=n.$createElement,t=n._self._c||s;return t("div",[t("div",{staticClass:"layout-padding"},[n._m(0),n._v(" "),t("div",{staticClass:"group"},[t("button",{staticClass:"light push",on:{click:function(s){n.noMessage()}}},[n._v("\n        Show\n      ")]),n._v(" "),t("button",{staticClass:"primary push",on:{click:function(s){n.withMessage()}}},[n._v("\n        Show With Message\n      ")])]),n._v(" "),t("p",{staticClass:"caption"},[n._v("\n      You can use a custom spinner.\n    ")]),n._v(" "),t("button",{staticClass:"light push",on:{click:function(s){n.customSpinner()}}},[n._v("\n      Custom Spinner\n    ")]),n._v(" "),t("p",{staticClass:"caption"},[n._v("\n      ...with a custom color and spinner size.\n    ")]),n._v(" "),t("button",{staticClass:"light push",on:{click:function(s){n.customColorSpinner()}}},[n._v("\n      Custom Color and Size Spinner\n    ")])])])},staticRenderFns:[function(){var n=this,s=n.$createElement,t=n._self._c||s;return t("p",{staticClass:"caption"},[n._v("\n      Notify the user something is going on under the covers.\n      There is also the "),t("em",[n._v("progress")]),n._v(" Dialog type you can use.\n    ")])}]}},92:function(n,s,t){var e=t(13)(t(170),t(285),null,null);n.exports=e.exports}});