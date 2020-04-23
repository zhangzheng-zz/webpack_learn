const path = require('path')
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ],
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader'
        ],
      },
      // 图片解析 
      // {
      //   test: /\.(jpg|svg|png|gif)$/,
      //   use:['file-loader']
      // },
      // 图片解析 url-loader
      {
        test: /\.(jpg|svg|png|gif)$/,
        use: {
          loader: 'url-loader',
          options: {
            // 小于 10kb 的转为 base64
            limit: 10240
          }
        }
      },
      // 字体解析
      {
        test: /\.(woff|woff2|ttf|TTF|oet)$/,
        use: ['file-loader']
      }
    ]
  }
}