const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


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
          'less-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: [
                require('autoprefixer')
              ]
            }
          },
          {
            loader: 'px2rem-loader',
            options: {
              // 75px 转 1rem
              remUnit: 75,
              // 小数点后
              remPrecision: 8
            }
          }
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
    }),

    // css压缩
    new OptimizeCSSAssetsPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: require('cssnano')
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

    // 清除dist目录
    new CleanWebpackPlugin()
  ]
}