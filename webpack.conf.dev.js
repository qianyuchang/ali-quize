const path = require('path')
const CURRENT_PATH = process.cwd()
module.exports = {
  mode: 'production',
  entry: {
    main: './src/index.js',
    canvas: './src/canvas.js',
    scroller: './src/scroller.js',
    stat: './src/stat.js'
  },  
  output: {
    path: path.join(CURRENT_PATH, 'dist'),
    filename: '[name].js'
  },
  devServer: {
    contentBase: './',
    compress: true,
    port: 9000
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: ["./src"]
      }
    ]
  },
  devtool: '#cheap-module-eval-source-map'
}

