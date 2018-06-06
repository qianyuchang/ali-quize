import {
  addClass,
  removeClass,
  onScroll
} from "./helper";
// 30 * 30

var itemIndex=0
class SeatNode {
  constructor(el, key) {
    this.key = key
    if (typeof el === 'string') {
      this.el = document.querySelector(el)
    } else if (typeof el === 'object' && this.el) {
      this.el = el
    } else {
      this.el = this.__createNode(++itemIndex)
    }
  }

  __createNode (index) {
    let node = document.createElement('div')
    node.textContent = index
    node.id = this.key
    node.className = "seat"
    node.dataset.choosed = '0'
    return node 
  }
}

const seats = new Array(30 * 30).fill(Object.assign({}, {
  choose: false,
  node: null
}))

const docfrag = document.createDocumentFragment()
seats.forEach((s, i) => {
  s.node = new SeatNode(null, "seat-" + i)
  docfrag.appendChild(s.node.el)
})


window.addEventListener('load', () => {
  const container = document.querySelector(".main")
  container.appendChild(docfrag)
  container.addEventListener('click', (event) => {
    if(event.target.className.indexOf('seat') <= -1) {
      return
    }
    const ele = event.target
    if ('0' === ele.dataset.choosed) {
      ele.dataset.choosed = '1'
      addClass(ele, 'choosed')
      ele.className += '  '
      return
    }
    ele.dataset.choosed = '0'
    removeClass(ele, 'choosed')
  })
})
onScroll(() => {
  const docfrag = document.createDocumentFragment()
  seats.forEach((s, i) => {
    s.node = new SeatNode(null, "seat-" + i)
    docfrag.appendChild(s.node.el)
  })
  requestAnimationFrame(() => {
    document.querySelector(".main").appendChild(docfrag)
  })
})