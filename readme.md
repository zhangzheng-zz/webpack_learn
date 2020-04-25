## 08 提取公共资源库
## 1、基础库的分离
### 例如 React、React-DOM 使用 CDN 引入外部脚本而不直接打包到bundle
### 使用 html-webpack-externals-plugin 插件引入基础库
### 插件的作用是告诉webpack不打包基础库
### 手动在打包好的文件会自动引入cdn

## 2、利用splitchunks插件
### chunks参数：all所有 async只有异步引入的库提取 initial只有同步的库
### test：匹配库名称
### name：提取后的名称
### minChunks: 最小的引用次数
### minuSize: 最小库体积

## 3、利用splitchunks插件打包公共库










