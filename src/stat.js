function numDomNodes(node) {
  if (!node.children || node.children.length == 0) return 0;
  var childrenCount = Array.from(node.children).map(numDomNodes);
  return node.children.length + childrenCount.reduce(function (p, c) {
    return p + c;
  }, 0);
}
document.addEventListener('DOMContentLoaded', function () {
  var fpsStats = new Stats();
  fpsStats.showPanel(0); // 0: fps, 1: ms, 2: mb, 3+: custom stats.domElement.style.cssText = 'position:fixed;top:0px;left:0px;';
  fpsStats.domElement.style.cssText = 'position:fixed;top:0px;left:0px;'
  document.body.appendChild(fpsStats.dom);

  function updateFps() {
    fpsStats.update()
    requestAnimationFrame(updateFps)
  }
  requestAnimationFrame(updateFps)
  var stats = new Stats();
  var domPanel = new Stats.Panel('DOM Nodes', '#0ff', '#002');
  stats.domElement.style.cssText = 'position:fixed;top:0px;left:80px;z-index:20';
  stats.addPanel(domPanel);
  stats.showPanel(3);
  document.body.appendChild(stats.dom);
  var TIMEOUT = 100;
  setTimeout(function timeoutFunc() {
    // Only update DOM node graph when we have time to spare to call
    // numDomNodes(), which is a fairly expensive function.
    requestIdleCallback(function () {

      domPanel.update(numDomNodes(document.body), 1500);
      setTimeout(timeoutFunc, TIMEOUT);
    });
  }, 1000 / 60);


});