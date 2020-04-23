const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    // chunkhash 保留8位
    filename: '[name]_[chunkhash:8].js'
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ],
      },
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'less-loader'
        ],
      },
      // 图片解析 
      {
        test: /\.(jpg|svg|png|gif)$/,
        use: {
          loader: 'file-loader',
          options: {
            // 文件指纹
            name: '[name]_[hash:8][ext]'
          }
        }
      },
      // 字体解析
      {
        test: /\.(woff|woff2|ttf|TTF|oet)$/,
        use: ['file-loader']
      }
    ]
  },
  plugins: [
    // 分离css代码并作 contenthash 
    new MiniCssExtractPlugin({
      filename: '[name]_[contenthash:8].css'
    })
  ]
}