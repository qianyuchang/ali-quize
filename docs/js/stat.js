!function(n){var t={};function e(o){if(t[o])return t[o].exports;var d=t[o]={i:o,l:!1,exports:{}};return n[o].call(d.exports,d,d.exports,e),d.l=!0,d.exports}e.m=n,e.c=t,e.d=function(n,t,o){e.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:o})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,t){if(1&t&&(n=e(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var o=Object.create(null);if(e.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var d in n)e.d(o,d,function(t){return n[t]}.bind(null,d));return o},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},e.p="",e(e.s=2)}({2:function(module,exports){eval("function numDomNodes(node) {\n  if (!node.children || node.children.length == 0) return 0;\n  var childrenCount = Array.from(node.children).map(numDomNodes);\n  return node.children.length + childrenCount.reduce(function (p, c) {\n    return p + c;\n  }, 0);\n}\ndocument.addEventListener('DOMContentLoaded', function () {\n  var fpsStats = new Stats();\n  fpsStats.showPanel(0); // 0: fps, 1: ms, 2: mb, 3+: custom stats.domElement.style.cssText = 'position:fixed;top:0px;left:0px;';\n  fpsStats.domElement.style.cssText = 'position:fixed;top:0px;left:0px;'\n  document.body.appendChild(fpsStats.dom);\n\n  function updateFps() {\n    fpsStats.update()\n    requestAnimationFrame(updateFps)\n  }\n  requestAnimationFrame(updateFps)\n  var stats = new Stats();\n  var domPanel = new Stats.Panel('DOM Nodes', '#0ff', '#002');\n  stats.domElement.style.cssText = 'position:fixed;top:0px;left:80px;z-index:20';\n  stats.addPanel(domPanel);\n  stats.showPanel(3);\n  document.body.appendChild(stats.dom);\n  var TIMEOUT = 100;\n  setTimeout(function timeoutFunc() {\n    // Only update DOM node graph when we have time to spare to call\n    // numDomNodes(), which is a fairly expensive function.\n    requestIdleCallback(function () {\n\n      domPanel.update(numDomNodes(document.body), 1500);\n      setTimeout(timeoutFunc, TIMEOUT);\n    });\n  }, 1000 / 60);\n\n\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zdGF0LmpzPzEzNmEiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gbnVtRG9tTm9kZXMobm9kZSkge1xuICBpZiAoIW5vZGUuY2hpbGRyZW4gfHwgbm9kZS5jaGlsZHJlbi5sZW5ndGggPT0gMCkgcmV0dXJuIDA7XG4gIHZhciBjaGlsZHJlbkNvdW50ID0gQXJyYXkuZnJvbShub2RlLmNoaWxkcmVuKS5tYXAobnVtRG9tTm9kZXMpO1xuICByZXR1cm4gbm9kZS5jaGlsZHJlbi5sZW5ndGggKyBjaGlsZHJlbkNvdW50LnJlZHVjZShmdW5jdGlvbiAocCwgYykge1xuICAgIHJldHVybiBwICsgYztcbiAgfSwgMCk7XG59XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xuICB2YXIgZnBzU3RhdHMgPSBuZXcgU3RhdHMoKTtcbiAgZnBzU3RhdHMuc2hvd1BhbmVsKDApOyAvLyAwOiBmcHMsIDE6IG1zLCAyOiBtYiwgMys6IGN1c3RvbSBzdGF0cy5kb21FbGVtZW50LnN0eWxlLmNzc1RleHQgPSAncG9zaXRpb246Zml4ZWQ7dG9wOjBweDtsZWZ0OjBweDsnO1xuICBmcHNTdGF0cy5kb21FbGVtZW50LnN0eWxlLmNzc1RleHQgPSAncG9zaXRpb246Zml4ZWQ7dG9wOjBweDtsZWZ0OjBweDsnXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZnBzU3RhdHMuZG9tKTtcblxuICBmdW5jdGlvbiB1cGRhdGVGcHMoKSB7XG4gICAgZnBzU3RhdHMudXBkYXRlKClcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodXBkYXRlRnBzKVxuICB9XG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZSh1cGRhdGVGcHMpXG4gIHZhciBzdGF0cyA9IG5ldyBTdGF0cygpO1xuICB2YXIgZG9tUGFuZWwgPSBuZXcgU3RhdHMuUGFuZWwoJ0RPTSBOb2RlcycsICcjMGZmJywgJyMwMDInKTtcbiAgc3RhdHMuZG9tRWxlbWVudC5zdHlsZS5jc3NUZXh0ID0gJ3Bvc2l0aW9uOmZpeGVkO3RvcDowcHg7bGVmdDo4MHB4O3otaW5kZXg6MjAnO1xuICBzdGF0cy5hZGRQYW5lbChkb21QYW5lbCk7XG4gIHN0YXRzLnNob3dQYW5lbCgzKTtcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzdGF0cy5kb20pO1xuICB2YXIgVElNRU9VVCA9IDEwMDtcbiAgc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0RnVuYygpIHtcbiAgICAvLyBPbmx5IHVwZGF0ZSBET00gbm9kZSBncmFwaCB3aGVuIHdlIGhhdmUgdGltZSB0byBzcGFyZSB0byBjYWxsXG4gICAgLy8gbnVtRG9tTm9kZXMoKSwgd2hpY2ggaXMgYSBmYWlybHkgZXhwZW5zaXZlIGZ1bmN0aW9uLlxuICAgIHJlcXVlc3RJZGxlQ2FsbGJhY2soZnVuY3Rpb24gKCkge1xuXG4gICAgICBkb21QYW5lbC51cGRhdGUobnVtRG9tTm9kZXMoZG9jdW1lbnQuYm9keSksIDE1MDApO1xuICAgICAgc2V0VGltZW91dCh0aW1lb3V0RnVuYywgVElNRU9VVCk7XG4gICAgfSk7XG4gIH0sIDEwMDAgLyA2MCk7XG5cblxufSk7Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///2\n")}});