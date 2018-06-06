const http = require('http')
const fs = require('fs')
const util = require('util')
readFileAsync = util.promisify(fs.readFile)
http.createServer(async (req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/html"
  })
  // res.write("Hello World")
  res.end(await readFileAsync('index.html'))
}).listen(4000, () => {
  console.log("please visit http://localhost:4000")
})