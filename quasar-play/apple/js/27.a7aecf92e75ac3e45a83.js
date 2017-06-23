webpackJsonp([27],{107:function(t,r,o){function a(t){o(372)}var n=o(2)(o(243),o(452),a,null,null);t.exports=n.exports},243:function(t,r,o){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var a=o(0);r.default={components:{QBtn:a.QBtn,QIcon:a.QIcon,QSpinnerRadio:a.QSpinnerRadio,QSpinnerHourglass:a.QSpinnerHourglass,QSpinnerFacebook:a.QSpinnerFacebook,QSpinnerGears:a.QSpinnerGears},data:function(){return{progress:!1,percentage1:0,percentage2:0}},methods:{simulateProgress:function(t,r){setTimeout(r,3e3)},stopProgress:function(){this.progress=!1},startComputing1:function(t,r){var o=this;this.percentage1=0,this.interval1=setInterval(function(){o.percentage1+=Math.floor(8*Math.random()+10),o.percentage1>=100&&(clearInterval(o.interval1),r())},700)},startComputing2:function(t,r){var o=this;this.percentage2=0,this.interval2=setInterval(function(){o.percentage2+=Math.floor(8*Math.random()+10),o.percentage2>=100&&(clearInterval(o.interval2),r())},700)}},beforeDestroy:function(){clearInterval(this.interval1),clearInterval(this.interval2)}}},354:function(t,r,o){r=t.exports=o(93)(void 0),r.push([t.i,".docs-btn .q-btn{margin:5px}",""])},372:function(t,r,o){var a=o(354);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);o(94)("33fdbdae",a,!0)},452:function(t,r){t.exports={render:function(){var t=this,r=t.$createElement,o=t._self._c||r;return o("div",{staticClass:"layout-padding docs-btn row justify-center"},[o("div",{staticStyle:{width:"500px","max-width":"90vw"}},[o("p",{staticClass:"caption"},[t._v("Standard Button")]),t._v(" "),o("q-btn",{staticClass:"text-black",attrs:{color:"white"}},[t._v("Standard")]),t._v(" "),o("q-btn",{attrs:{color:"primary"}},[t._v("Primary")]),t._v(" "),o("q-btn",{attrs:{color:"secondary"}},[t._v("Secondary")]),t._v(" "),o("q-btn",{attrs:{color:"amber"}},[t._v("Amber")]),t._v(" "),o("q-btn",{attrs:{color:"brown-5"}},[t._v("Brown 5")]),t._v(" "),o("q-btn",{attrs:{color:"deep-orange"}},[t._v("Deep Orange")]),t._v(" "),o("q-btn",{attrs:{color:"purple"}},[t._v("Purple")]),t._v(" "),o("q-btn",{attrs:{color:"black"}},[t._v("Black")]),t._v(" "),o("p",{staticClass:"caption"},[t._v("Custom Color Examples")]),t._v(" "),o("q-btn",{staticStyle:{background:"#FF0080",color:"white"}},[t._v("Fuchsia")]),t._v(" "),o("q-btn",{staticStyle:{color:"#FF0080"},attrs:{flat:""}},[t._v("Fuchsia Flat")]),t._v(" "),o("q-btn",{staticStyle:{background:"goldenrod",color:"white"}},[t._v("Goldenrod")]),t._v(" "),o("q-btn",{staticStyle:{color:"goldenrod"},attrs:{outline:""}},[t._v("Goldenrod")]),t._v(" "),o("p",{staticClass:"caption"},[t._v("Button with icons")]),t._v(" "),o("q-btn",{attrs:{color:"primary",icon:"mail"}},[t._v("\n      On Left\n    ")]),t._v(" "),o("q-btn",{attrs:{color:"secondary","icon-right":"mail"}},[t._v("\n      On Right\n    ")]),t._v(" "),o("p",{staticClass:"caption"},[t._v("Round Button")]),t._v(" "),o("q-btn",{attrs:{round:"",color:"primary",icon:"shopping_cart"}}),t._v(" "),o("q-btn",{attrs:{round:"",color:"secondary",icon:"navigation"}}),t._v(" "),o("q-btn",{attrs:{round:"",color:"amber",icon:"layers_clear"}}),t._v(" "),o("q-btn",{attrs:{round:"",color:"brown-5",icon:"directions"}}),t._v(" "),o("q-btn",{attrs:{round:"",color:"deep-orange",icon:"edit_location"}}),t._v(" "),o("q-btn",{attrs:{round:"",color:"purple",icon:"local_grocery_store"}}),t._v(" "),o("q-btn",{attrs:{round:"",color:"black",icon:"my_location"}}),t._v(" "),o("p",{staticClass:"caption"},[t._v("Button sizes (small, standard, big)")]),t._v(" "),o("q-btn",{attrs:{color:"primary",small:""}},[t._v("Small")]),t._v(" "),o("q-btn",{attrs:{color:"primary"}},[t._v("Standard")]),t._v(" "),o("q-btn",{attrs:{color:"primary",big:""}},[t._v("Big")]),t._v(" "),o("br"),t._v(" "),o("q-btn",{attrs:{round:"",icon:"add_a_photo",color:"primary",small:""}}),t._v(" "),o("q-btn",{attrs:{round:"",icon:"camera",color:"primary"}}),t._v(" "),o("q-btn",{attrs:{round:"",icon:"camera_front",color:"primary",big:""}}),t._v(" "),o("p",{staticClass:"caption"},[t._v("Flat button")]),t._v(" "),o("q-btn",{attrs:{flat:"",color:"primary"}},[t._v("Flat")]),t._v(" "),o("q-btn",{attrs:{flat:"",round:"",color:"primary"}},[o("q-icon",{attrs:{name:"card_giftcard"}})],1),t._v(" "),o("p",{staticClass:"caption"},[t._v("Outline buttons")]),t._v(" "),o("q-btn",{attrs:{outline:"",color:"primary"}},[t._v("Outline")]),t._v(" "),o("q-btn",{attrs:{round:"",outline:"",color:"primary"}},[o("q-icon",{attrs:{name:"card_giftcard"}})],1),t._v(" "),o("p",{staticClass:"caption"},[t._v("Push button")]),t._v(" "),o("q-btn",{attrs:{push:"",color:"primary"}},[t._v("Push")]),t._v(" "),o("q-btn",{attrs:{push:"",color:"primary",round:""}},[o("q-icon",{attrs:{name:"card_giftcard"}})],1),t._v(" "),o("p",{staticClass:"caption"},[t._v("Disabled button")]),t._v(" "),o("q-btn",{attrs:{color:"primary",disable:""}},[t._v("Disabled")]),t._v(" "),o("q-btn",{attrs:{color:"primary",round:"",disable:""}},[o("q-icon",{attrs:{name:"card_giftcard"}})],1),t._v(" "),o("p",{staticClass:"caption"},[t._v("Glossy button")]),t._v(" "),o("q-btn",{attrs:{color:"primary",glossy:""}},[t._v("Glossy")]),t._v(" "),o("q-btn",{attrs:{color:"secondary",glossy:""}},[t._v("Glossy")]),t._v(" "),o("q-btn",{attrs:{color:"deep-orange",glossy:""}},[t._v("Glossy")]),t._v(" "),o("q-btn",{attrs:{round:"",color:"primary",glossy:""}},[o("q-icon",{attrs:{name:"card_giftcard"}})],1),t._v(" "),o("q-btn",{attrs:{round:"",color:"secondary",glossy:""}},[o("q-icon",{attrs:{name:"local_florist"}})],1),t._v(" "),o("q-btn",{attrs:{round:"",color:"deep-orange",glossy:""}},[o("q-icon",{attrs:{name:"local_activity"}})],1),t._v(" "),o("p",{staticClass:"caption"},[t._v("Block button")]),t._v(" "),o("q-btn",{staticClass:"block",attrs:{color:"primary",icon:"alarm"}},[t._v("Block")]),t._v(" "),o("q-btn",{staticClass:"block",attrs:{color:"secondary"}},[t._v("Block")]),t._v(" "),o("p",{staticClass:"caption"},[t._v("Full width button")]),t._v(" "),o("q-btn",{staticClass:"full-width",attrs:{color:"primary"}},[t._v("Full-width")]),t._v(" "),o("q-btn",{staticClass:"full-width",attrs:{color:"secondary"}},[t._v("Full-width")]),t._v(" "),o("p",{staticClass:"caption"},[t._v("Button with progress")]),t._v(" "),o("q-btn",{attrs:{loader:"",color:"secondary"},on:{click:t.simulateProgress}},[t._v("Button")]),t._v(" "),o("q-btn",{attrs:{loader:"",color:"red"},on:{click:t.simulateProgress}},[t._v("\n      Button\n      "),o("span",{slot:"loading"},[t._v("Loading...")])]),t._v(" "),o("q-btn",{attrs:{loader:"",color:"purple"},on:{click:t.simulateProgress}},[t._v("\n      Button\n      "),o("q-spinner-radio",{slot:"loading"})],1),t._v(" "),o("q-btn",{attrs:{loader:"",color:"primary"},on:{click:t.simulateProgress}},[t._v("\n      Button\n      "),o("span",{slot:"loading"},[o("q-spinner-hourglass",{staticClass:"on-left"}),t._v("\n        Loading...\n      ")],1)]),t._v(" "),o("br"),t._v(" "),o("q-btn",{attrs:{round:"",loader:"",color:"brown",icon:"camera_front"},on:{click:t.simulateProgress}},[o("q-spinner-facebook",{slot:"loading"})],1),t._v(" "),o("q-btn",{attrs:{round:"",loader:"",color:"black",icon:"camera_rear"},on:{click:t.simulateProgress}},[o("q-spinner-gears",{slot:"loading"})],1),t._v(" "),o("br"),t._v(" "),o("q-btn",{attrs:{loader:"",color:"primary"},model:{value:t.progress,callback:function(r){t.progress=r},expression:"progress"}},[t._v("\n      Controlled with v-model\n      "),o("span",{slot:"loading"},[o("q-spinner-radio",{staticClass:"on-left"}),t._v('\n        Click "Stop" Button\n      ')],1)]),t._v(" "),o("q-btn",{attrs:{disable:!t.progress,color:"negative"},on:{click:t.stopProgress}},[t._v("Stop")]),t._v(" "),o("p",{staticClass:"caption"},[t._v("Button with deterministic progress")]),t._v(" "),o("q-btn",{attrs:{loader:"",percentage:t.percentage1,color:"primary"},on:{click:t.startComputing1}},[t._v("\n      Compute PI\n      "),o("span",{slot:"loading"},[o("q-spinner-gears",{staticClass:"on-left"}),t._v("\n        Computing...\n      ")],1)]),t._v(" "),o("q-btn",{attrs:{loader:"",percentage:t.percentage2,round:"",color:"secondary",icon:"cloud_upload"},on:{click:t.startComputing2}})],1)])},staticRenderFns:[]}}});