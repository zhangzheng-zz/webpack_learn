## 09 webpack在打包时候默认开启了treeshaking
### 1个模块有多个方法，只导入一个，则整一个文件会被打包出来，利用uglify擦除这些无用的方法
### 利用了 es6 的import语法能确定哪些方法被用了
### 以上过程 webpack 默认开启
### mode:none则没有










