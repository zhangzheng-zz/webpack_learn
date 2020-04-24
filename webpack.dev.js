const path = require('path')
const webpack = require('webpack')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');



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
          MiniCSSExtractPlugin.loader,
          'css-loader'
        ],
      },
      {
        test: /\.less$/,
        use: [
          MiniCSSExtractPlugin.loader,
          'css-loader',
          'less-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: [
                require('autoprefixer')
              ]
            }
          }
        ],
      },
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
  },
  plugins: [

    // 热更新
    new webpack.HotModuleReplacementPlugin(),

    // 分离css代码并作 contenthash 
    new MiniCSSExtractPlugin({
      filename: '[name]_[contenthash:8].css'
    }),

    //html压缩
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src/index.html'),
      filename: 'index.html',
      chunks: ['main'],
      inject: true,
      minify: {
        html5: true,
        collapseWhitespace: true,
        preserveLineBreaks: true,
        minifyCSS: true,
        minifyJS: true,
        removeComments: true
      }
    }),

    // 清除dist
    new CleanWebpackPlugin()

  ],
  // webpack-dev-server 配置
  devServer: {
    contentBase: './dist',
    hot: true
  }
}