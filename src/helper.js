export const addClass = (ele, newClass) => {
  if (newClass === undefined || newClass.trim() === '') {
    return
  }
  newClass = newClass.trim()
  let classes = ele.className.split(' ')
  if (classes.indexOf(newClass) > -1) {
    return
  }
  classes.push(newClass)
  ele.className = classes.join(' ')
}
export const removeClass = (ele, className) => {
  if (className === undefined || className.trim() === '') {
    return
  }
  className = className.trim()
  let classes = ele.className.split(' ')
  let classIndex = classes.indexOf(className)
  if (classIndex > -1) {
    classes.splice(classIndex, 1)
    ele.className = classes.join(' ')
  }
}
export const onScroll = (cb) => {
  window.addEventListener('scroll', () => {
    if (lowEnough()) {
      cb && cb()
    }
    
  }, false)
}
 function lowEnough() {
   const ele = document.querySelector('.main')
   var pageHeight = Math.max(ele.scrollHeight, ele.offsetHeight);
   var viewportHeight = window.innerHeight ||
     document.documentElement.clientHeight ||
     document.body.clientHeight || 0;
   var scrollHeight = window.pageYOffset ||
     document.documentElement.scrollTop ||
     document.body.scrollTop || 0;
     console.log(pageHeight, viewportHeight, scrollHeight)
   return pageHeight - viewportHeight - scrollHeight < 100; // 通过 真实内容高度 - 视窗高度 - 上面隐藏的高度 < 20，作为加载的触发条件
 }
