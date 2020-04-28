## 13、优化构建时候的日志显示信息
添加 stats 字段 stats: "errors-only"
友好的错误信息提示
friendly-errors-webpack-plugin 插件
## 构建时候的错误捕获和异常处理
```
 // 异常捕获和错误处理
    function () {
      this.hooks.done.tap('done', stats => {
        if (stats.compilation.errors &&
          stats.compilation.errors.length &&
          process.argv.indexOf('--watch') === -1) {
          console.log('build error')
          process.exit(1)
        }
      })
    }
```
