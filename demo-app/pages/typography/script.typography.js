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

	module.exports = __webpack_require__(129);


/***/ },

/***/ 129:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar html = __webpack_require__(130);\n\nmodule.exports = {\n  template: html,\n  ready: function() {\n    quasar.current.layout.vm.$data.title = 'Typography';\n  }\n};\n\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvdHlwb2dyYXBoeS9zY3JpcHQudHlwb2dyYXBoeS5qcz9jODQxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIxMjkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBodG1sID0gcmVxdWlyZSgncmF3IS4vdmlldy50eXBvZ3JhcGh5Lmh0bWwnKTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHRlbXBsYXRlOiBodG1sLFxuICByZWFkeTogZnVuY3Rpb24oKSB7XG4gICAgcXVhc2FyLmN1cnJlbnQubGF5b3V0LnZtLiRkYXRhLnRpdGxlID0gJ1R5cG9ncmFwaHknO1xuICB9XG59O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9wYWdlcy90eXBvZ3JhcGh5L3NjcmlwdC50eXBvZ3JhcGh5LmpzXG4gKiogbW9kdWxlIGlkID0gMTI5XG4gKiogbW9kdWxlIGNodW5rcyA9IDYzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ },

/***/ 130:
/***/ function(module, exports) {

	eval("module.exports = \"<h1>Header 1</h1>\\n<p>Text</p>\\n\\n<h2>Header 2</h2>\\n<p>Text</p>\\n\\n<h3>Header 3</h3>\\n<p>Text</p>\\n\\n<h4>Header 4</h4>\\n<p>Text</p>\\n\\n<h5>Header 5</h5>\\n<p>Text</p>\\n\\n<h6>Header 6</h6>\\n<p>Text</p>\\n\\n<br>\\n<h1>Text Types</h1>\\n\\n<p>\\n  <small>Small Text</small>\\n  Normal Text\\n  <big>Big Text</big>\\n</p>\\n<p>\\n  <sub>Subtext</sub>\\n  Text\\n  <sup>Supertext</sup>\\n</p>\\n<p><strong>Default Paragraph</strong>: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>\\n<p class=\\\"caption\\\"><strong>Caption Paragraph</strong>: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>\\n<p class=\\\"light-paragraph\\\"><strong>Light Paragraph</strong>: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>\\n<p class=\\\"thin-paragraph\\\"><strong>Thin Paragraph</strong>: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>\\n\\n<br>\\n<h1>Blockquotes</h1>\\n<blockquote>\\n  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>\\n  <small>Someone famous for <cite title=\\\"Quasar Framework\\\">Quasar Framework</cite></small>\\n</blockquote>\\n\\n<blockquote class=\\\"text-right\\\">\\n  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>\\n  <small>Someone famous for <cite title=\\\"Quasar Framework\\\">Quasar Framework</cite></small>\\n</blockquote>\\n\\n<h1>Definition Lists</h1>\\n<h4>Vertical</h4>\\n\\n<dl>\\n  <dt>Description lists</dt>\\n  <dd>A description list is perfect for defining terms.</dd>\\n  <dt>Euismod</dt>\\n  <dd>Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</dd>\\n  <dd>Donec id elit non mi porta gravida at eget metus.</dd>\\n  <dt>Malesuada porta</dt>\\n  <dd>Etiam porta sem malesuada magna mollis euismod.</dd>\\n</dl>\\n\\n<h4>Horizontal</h4>\\n<dl class=\\\"horizontal\\\">\\n  <dt>Description lists</dt>\\n  <dd>A description list is perfect for defining terms.</dd>\\n  <dt>Euismod</dt>\\n  <dd>Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</dd>\\n  <dd>Donec id elit non mi porta gravida at eget metus.</dd>\\n  <dt>Malesuada porta</dt>\\n  <dd>Etiam porta sem malesuada magna mollis euismod.</dd>\\n</dl>\\n\\n<h1>Links</h1>\\n<p>\\n   Links: <a href=\\\"#/typography\\\">Some link</a> and <a href=\\\"#/typography\\\">Some other link</a>.\\n</p>\\n\"\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvdHlwb2dyYXBoeS92aWV3LnR5cG9ncmFwaHkuaHRtbD9lODk2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjEzMC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gXCI8aDE+SGVhZGVyIDE8L2gxPlxcbjxwPlRleHQ8L3A+XFxuXFxuPGgyPkhlYWRlciAyPC9oMj5cXG48cD5UZXh0PC9wPlxcblxcbjxoMz5IZWFkZXIgMzwvaDM+XFxuPHA+VGV4dDwvcD5cXG5cXG48aDQ+SGVhZGVyIDQ8L2g0PlxcbjxwPlRleHQ8L3A+XFxuXFxuPGg1PkhlYWRlciA1PC9oNT5cXG48cD5UZXh0PC9wPlxcblxcbjxoNj5IZWFkZXIgNjwvaDY+XFxuPHA+VGV4dDwvcD5cXG5cXG48YnI+XFxuPGgxPlRleHQgVHlwZXM8L2gxPlxcblxcbjxwPlxcbiAgPHNtYWxsPlNtYWxsIFRleHQ8L3NtYWxsPlxcbiAgTm9ybWFsIFRleHRcXG4gIDxiaWc+QmlnIFRleHQ8L2JpZz5cXG48L3A+XFxuPHA+XFxuICA8c3ViPlN1YnRleHQ8L3N1Yj5cXG4gIFRleHRcXG4gIDxzdXA+U3VwZXJ0ZXh0PC9zdXA+XFxuPC9wPlxcbjxwPjxzdHJvbmc+RGVmYXVsdCBQYXJhZ3JhcGg8L3N0cm9uZz46IExvcmVtIElwc3VtIGlzIHNpbXBseSBkdW1teSB0ZXh0IG9mIHRoZSBwcmludGluZyBhbmQgdHlwZXNldHRpbmcgaW5kdXN0cnkuIExvcmVtIElwc3VtIGhhcyBiZWVuIHRoZSBpbmR1c3RyeXMgc3RhbmRhcmQgZHVtbXkgdGV4dCBldmVyIHNpbmNlIHRoZSAxNTAwcywgd2hlbiBhbiB1bmtub3duIHByaW50ZXIgdG9vayBhIGdhbGxleSBvZiB0eXBlIGFuZCBzY3JhbWJsZWQgaXQgdG8gbWFrZSBhIHR5cGUgc3BlY2ltZW4gYm9vay4gSXQgaGFzIHN1cnZpdmVkIG5vdCBvbmx5IGZpdmUgY2VudHVyaWVzLCBidXQgYWxzbyB0aGUgbGVhcCBpbnRvIGVsZWN0cm9uaWMgdHlwZXNldHRpbmcsIHJlbWFpbmluZyBlc3NlbnRpYWxseSB1bmNoYW5nZWQuPC9wPlxcbjxwIGNsYXNzPVxcXCJjYXB0aW9uXFxcIj48c3Ryb25nPkNhcHRpb24gUGFyYWdyYXBoPC9zdHJvbmc+OiBMb3JlbSBJcHN1bSBpcyBzaW1wbHkgZHVtbXkgdGV4dCBvZiB0aGUgcHJpbnRpbmcgYW5kIHR5cGVzZXR0aW5nIGluZHVzdHJ5LiBMb3JlbSBJcHN1bSBoYXMgYmVlbiB0aGUgaW5kdXN0cnlzIHN0YW5kYXJkIGR1bW15IHRleHQgZXZlciBzaW5jZSB0aGUgMTUwMHMsIHdoZW4gYW4gdW5rbm93biBwcmludGVyIHRvb2sgYSBnYWxsZXkgb2YgdHlwZSBhbmQgc2NyYW1ibGVkIGl0IHRvIG1ha2UgYSB0eXBlIHNwZWNpbWVuIGJvb2suIEl0IGhhcyBzdXJ2aXZlZCBub3Qgb25seSBmaXZlIGNlbnR1cmllcywgYnV0IGFsc28gdGhlIGxlYXAgaW50byBlbGVjdHJvbmljIHR5cGVzZXR0aW5nLCByZW1haW5pbmcgZXNzZW50aWFsbHkgdW5jaGFuZ2VkLjwvcD5cXG48cCBjbGFzcz1cXFwibGlnaHQtcGFyYWdyYXBoXFxcIj48c3Ryb25nPkxpZ2h0IFBhcmFncmFwaDwvc3Ryb25nPjogTG9yZW0gSXBzdW0gaXMgc2ltcGx5IGR1bW15IHRleHQgb2YgdGhlIHByaW50aW5nIGFuZCB0eXBlc2V0dGluZyBpbmR1c3RyeS4gTG9yZW0gSXBzdW0gaGFzIGJlZW4gdGhlIGluZHVzdHJ5cyBzdGFuZGFyZCBkdW1teSB0ZXh0IGV2ZXIgc2luY2UgdGhlIDE1MDBzLCB3aGVuIGFuIHVua25vd24gcHJpbnRlciB0b29rIGEgZ2FsbGV5IG9mIHR5cGUgYW5kIHNjcmFtYmxlZCBpdCB0byBtYWtlIGEgdHlwZSBzcGVjaW1lbiBib29rLiBJdCBoYXMgc3Vydml2ZWQgbm90IG9ubHkgZml2ZSBjZW50dXJpZXMsIGJ1dCBhbHNvIHRoZSBsZWFwIGludG8gZWxlY3Ryb25pYyB0eXBlc2V0dGluZywgcmVtYWluaW5nIGVzc2VudGlhbGx5IHVuY2hhbmdlZC48L3A+XFxuPHAgY2xhc3M9XFxcInRoaW4tcGFyYWdyYXBoXFxcIj48c3Ryb25nPlRoaW4gUGFyYWdyYXBoPC9zdHJvbmc+OiBMb3JlbSBJcHN1bSBpcyBzaW1wbHkgZHVtbXkgdGV4dCBvZiB0aGUgcHJpbnRpbmcgYW5kIHR5cGVzZXR0aW5nIGluZHVzdHJ5LiBMb3JlbSBJcHN1bSBoYXMgYmVlbiB0aGUgaW5kdXN0cnlzIHN0YW5kYXJkIGR1bW15IHRleHQgZXZlciBzaW5jZSB0aGUgMTUwMHMsIHdoZW4gYW4gdW5rbm93biBwcmludGVyIHRvb2sgYSBnYWxsZXkgb2YgdHlwZSBhbmQgc2NyYW1ibGVkIGl0IHRvIG1ha2UgYSB0eXBlIHNwZWNpbWVuIGJvb2suIEl0IGhhcyBzdXJ2aXZlZCBub3Qgb25seSBmaXZlIGNlbnR1cmllcywgYnV0IGFsc28gdGhlIGxlYXAgaW50byBlbGVjdHJvbmljIHR5cGVzZXR0aW5nLCByZW1haW5pbmcgZXNzZW50aWFsbHkgdW5jaGFuZ2VkLjwvcD5cXG5cXG48YnI+XFxuPGgxPkJsb2NrcXVvdGVzPC9oMT5cXG48YmxvY2txdW90ZT5cXG4gIDxwPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIEludGVnZXIgcG9zdWVyZSBlcmF0IGEgYW50ZS48L3A+XFxuICA8c21hbGw+U29tZW9uZSBmYW1vdXMgZm9yIDxjaXRlIHRpdGxlPVxcXCJRdWFzYXIgRnJhbWV3b3JrXFxcIj5RdWFzYXIgRnJhbWV3b3JrPC9jaXRlPjwvc21hbGw+XFxuPC9ibG9ja3F1b3RlPlxcblxcbjxibG9ja3F1b3RlIGNsYXNzPVxcXCJ0ZXh0LXJpZ2h0XFxcIj5cXG4gIDxwPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIEludGVnZXIgcG9zdWVyZSBlcmF0IGEgYW50ZS48L3A+XFxuICA8c21hbGw+U29tZW9uZSBmYW1vdXMgZm9yIDxjaXRlIHRpdGxlPVxcXCJRdWFzYXIgRnJhbWV3b3JrXFxcIj5RdWFzYXIgRnJhbWV3b3JrPC9jaXRlPjwvc21hbGw+XFxuPC9ibG9ja3F1b3RlPlxcblxcbjxoMT5EZWZpbml0aW9uIExpc3RzPC9oMT5cXG48aDQ+VmVydGljYWw8L2g0PlxcblxcbjxkbD5cXG4gIDxkdD5EZXNjcmlwdGlvbiBsaXN0czwvZHQ+XFxuICA8ZGQ+QSBkZXNjcmlwdGlvbiBsaXN0IGlzIHBlcmZlY3QgZm9yIGRlZmluaW5nIHRlcm1zLjwvZGQ+XFxuICA8ZHQ+RXVpc21vZDwvZHQ+XFxuICA8ZGQ+VmVzdGlidWx1bSBpZCBsaWd1bGEgcG9ydGEgZmVsaXMgZXVpc21vZCBzZW1wZXIgZWdldCBsYWNpbmlhIG9kaW8gc2VtIG5lYyBlbGl0LjwvZGQ+XFxuICA8ZGQ+RG9uZWMgaWQgZWxpdCBub24gbWkgcG9ydGEgZ3JhdmlkYSBhdCBlZ2V0IG1ldHVzLjwvZGQ+XFxuICA8ZHQ+TWFsZXN1YWRhIHBvcnRhPC9kdD5cXG4gIDxkZD5FdGlhbSBwb3J0YSBzZW0gbWFsZXN1YWRhIG1hZ25hIG1vbGxpcyBldWlzbW9kLjwvZGQ+XFxuPC9kbD5cXG5cXG48aDQ+SG9yaXpvbnRhbDwvaDQ+XFxuPGRsIGNsYXNzPVxcXCJob3Jpem9udGFsXFxcIj5cXG4gIDxkdD5EZXNjcmlwdGlvbiBsaXN0czwvZHQ+XFxuICA8ZGQ+QSBkZXNjcmlwdGlvbiBsaXN0IGlzIHBlcmZlY3QgZm9yIGRlZmluaW5nIHRlcm1zLjwvZGQ+XFxuICA8ZHQ+RXVpc21vZDwvZHQ+XFxuICA8ZGQ+VmVzdGlidWx1bSBpZCBsaWd1bGEgcG9ydGEgZmVsaXMgZXVpc21vZCBzZW1wZXIgZWdldCBsYWNpbmlhIG9kaW8gc2VtIG5lYyBlbGl0LjwvZGQ+XFxuICA8ZGQ+RG9uZWMgaWQgZWxpdCBub24gbWkgcG9ydGEgZ3JhdmlkYSBhdCBlZ2V0IG1ldHVzLjwvZGQ+XFxuICA8ZHQ+TWFsZXN1YWRhIHBvcnRhPC9kdD5cXG4gIDxkZD5FdGlhbSBwb3J0YSBzZW0gbWFsZXN1YWRhIG1hZ25hIG1vbGxpcyBldWlzbW9kLjwvZGQ+XFxuPC9kbD5cXG5cXG48aDE+TGlua3M8L2gxPlxcbjxwPlxcbiAgIExpbmtzOiA8YSBocmVmPVxcXCIjL3R5cG9ncmFwaHlcXFwiPlNvbWUgbGluazwvYT4gYW5kIDxhIGhyZWY9XFxcIiMvdHlwb2dyYXBoeVxcXCI+U29tZSBvdGhlciBsaW5rPC9hPi5cXG48L3A+XFxuXCJcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yYXctbG9hZGVyIS4vc3JjL3BhZ2VzL3R5cG9ncmFwaHkvdmlldy50eXBvZ3JhcGh5Lmh0bWxcbiAqKiBtb2R1bGUgaWQgPSAxMzBcbiAqKiBtb2R1bGUgY2h1bmtzID0gNjNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9");

/***/ }

/******/ });