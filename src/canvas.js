import yoga, {
  Node
} from 'yoga-layout';
import { runInNewContext } from 'vm';

var canvas = document.querySelector('.canvas');
const elemLeft = canvas.offsetLeft
const elemTop = canvas.offsetTop

var ctx = canvas.getContext('2d');
const getNode = () => {
  const node = Node.create()
  node.setWidth(30)
  node.setHeight(50)
  node.setMargin(yoga.EDGE_ALL, 5)
  return node
}

let seats = new Array(100 * 100).fill("")
seats = seats.map(s => {
  return {
    node: null,
    style: null,
    choosed: false
  }
})

const wrap = Node.create()
wrap.setWidth(375)
wrap.setHeight(12000)
wrap.setDisplay(yoga.DISPLAY_FLEX)
wrap.setFlexDirection(yoga.FLEX_DIRECTION_ROW)
// wrap.setJustifyContent(yoga.JUSTIFY_CENTER)
wrap.setFlexWrap(yoga.WRAP_WRAP)

seats.forEach((s,index) => {
  s.node = getNode();
  wrap.insertChild(s.node, index)
})
const draw = () => {
  seats.forEach((s, index) => {
    let style = null
    if (s.style) {
      style = s.style
    } else {
      s.style = style = s.node.getComputedLayout()
    }
    ctx.fillStyle = s.choosed ? "#ff803a" : "#ccc"
    ctx.fillText(index + 1, style.left, style.top)
    ctx.fillRect(style.left, style.top, style.width, style.height)
    ctx.strokeRect(style.left, style.top, style.width, style.height)
  })
}
wrap.calculateLayout(375, 120000, yoga.DIRECTION_LTR)

draw()


document.querySelector(".scroll-mask").addEventListener('click', (event) => {
  var x = event.pageX - elemLeft,
    y = document.querySelector(".container").scrollTop + event.pageY - elemTop;
  const seat = seats.find((element) => {
    const style = element.style
    if (y > style.top && y < style.top + style.height &&
      x > style.left && x < style.left + style.width) {
      return true
    }
  })
  if (!seat) return 
  const style = seat.style
  if (seat.choosed) {
    ctx.fillStyle = "#ccc"
    seat.choosed = false
  } else {
    ctx.fillStyle = "#ff803a"
    seat.choosed = true
  }
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.save();
  draw()
  ctx.restore()
})

document.querySelector(".container").addEventListener('scroll', (e) => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.save();
  ctx.translate(0, -e.target.scrollTop)
  draw()
  ctx.restore();
}, false)
