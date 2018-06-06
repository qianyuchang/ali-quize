import {} from "./infinite-scroll"
var INIT_TIME = new Date().getTime()
function getItem(id) {
  function pickRandom(a) {
    return a[Math.floor(Math.random() * a.length)];
  }

  return new Promise(function (resolve) {
    
    var item = new Array(5).fill('').map((e,index) => {
      return {
        id: id * 5 + index + 1,
        choosed: false,
      }
    })
    resolve(item)
  });
}

class ContentSource {
  constructor () {
    this.tombstone_ = document.querySelector("#templates > .seat-row.tombstone");
    this.seatTemplate_ = document.querySelector("#templates > .seat-row:not(.tombstone)");
    this.nextItem_ = 0
  }
  fetch (count) {
    count =100 * 5;
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        var items = []
        for (var i = 0; i < Math.abs(count); i++) {
          items[i] = getItem(this.nextItem_++);
        }
        resolve(Promise.all(items));
      }.bind(this), 300 /* 1s请求延迟 */ );
    }.bind(this))
  }
  createTombstone () {
    return this.tombstone_.cloneNode(true)
  }

  render (row, div) {
    console.log(row)
    div = div || this.seatTemplate_.cloneNode(true)
    const lis = div.querySelectorAll('li')
    row.forEach((item, index) => {
      lis[index].textContent = item.id
      lis[index].dataset.id = item.id
      lis[index].dataset.choosed = item.choosed ? '1' : '0'
      if (item.choosed) {
        lis[index].classList.add('choosed')
      } else {
        lis[index].classList.remove('choosed')
      }
    })
    
    return div
  }
}

document.addEventListener('DOMContentLoaded', function () {
  window.scroller =
    new InfiniteScroller(
      document.querySelector('.main'),
      new ContentSource()
    );


   document.querySelector('.main').addEventListener('click', (event) => {
     if (event.target.className.indexOf('seat') <= -1) {
       return
     }
     const ele = event.target
     if ('0' === ele.dataset.choosed) {
       ele.dataset.choosed = '1'
       ele.classList.add('choosed')
       return
     }
     ele.dataset.choosed = '0'
     ele.classList.remove('choosed')
   })

});