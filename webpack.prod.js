const path = require('path')
const webpack = require('webpack')
const glob = require('glob')

const MiniCSSExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// 分离基础库
// const HtmlWebpackExternalsPlugin = require('html-webpack-externals-plugin')

const MPA = () => {
  const
    entry = {},
    htmlWebpackPlugins = []

  const entryFiles = glob.sync(path.join(__dirname, './src/view/*/index.js'))
  entryFiles.map(file => {
    const entryFile = file
    const match = entryFile.match(/src\/view\/(.*)\/index.js/)
    const pageName = match[1]
    entry[pageName] = entryFile

    //html压缩
    htmlWebpackPlugins.push(
      new HtmlWebpackPlugin({
        template: path.join(__dirname, `src/view/${pageName}/index.html`),
        filename: `${pageName}.html`,
        chunks: [pageName],
        inject: true,
        minify: {
          html5: true,
          collapseWhitespace: true,
          preserveLineBreaks: true,
          minifyCSS: true,
          minifyJS: true,
          removeComments: true
        }
      }))
  })


  return {
    entry,
    htmlWebpackPlugins
  }
}
const { entry, htmlWebpackPlugins } = MPA()

module.exports = {
  entry: entry,
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'
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
          MiniCSSExtractPlugin.loader,
          'css-loader'
        ],
      },
      {
        test: /\.less$/,
        use: [
          MiniCSSExtractPlugin.loader,
          'css-loader',
          'less-loader'
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

    // 清除dist
    new CleanWebpackPlugin(),



    // 分离基础库1
    //  new HtmlWebpackExternalsPlugin({
    //   externals: [
    //     {
    //       module: 'react',
    //       entry: 'https://unpkg.com/react@16/umd/react.production.min.js',
    //       global: 'React',
    //     },
    //     {
    //       module: 'react-dom',
    //       entry: 'https://unpkg.com/react-dom@16/umd/react-dom.production.min.js',
    //       global: 'ReactDOM',
    //     },
    //   ],
    // })

  ].concat(htmlWebpackPlugins),

  // 分离基础库2
  optimization: {
    splitChunks: {
      minSize: 1000,//1kb
      minChunks: 2,//两次
      cacheGroups: {
        commons: {
          // test: /(react|react-dom)/,
          name: 'common',
          chunks: 'all'//全部打包
        }
      }
    }
  }

}