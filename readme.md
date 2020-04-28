### 12 webpack配置SSR
新建 webpack.ssr.js 和build:ssr脚本

### webpack ssr 打包中存在的问题
浏览器的全局变量问题(window、document等只存在于浏览器端)
  组件适配和请求适配（axios）
```
if (typeof window === 'undefined') {
  global.window = {}
}
```

样式问题（node.js无法解析css):引入打包好的html作为模板，使用占位符替换组件的renderString,
最后浏览器端会自动加载css（link）

js的问题没解决？
  