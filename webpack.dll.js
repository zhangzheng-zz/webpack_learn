const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: {
    library: [
      'react',
      'react-dom'
    ]
  },
  output: {
    filename: '[name]_[chunkhash:8].js',
    path: path.join(__dirname, 'build/library'),
    library: '[name]'
  },
  plugins: [
    // 生成json文件
    new webpack.DllPlugin({
      name: '[name]_[hash]',
      path: path.join(__dirname, 'build/library/[name].json'),
    })
  ]
}