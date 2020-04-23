## 02 文件指纹
### 运行命令：
```
npm run dev 
```
### hash：和整个项目的构建相关，只要项目文件有修改，整个项目构建的hash值就会修改
### chunkhash: 和webpack打包的chunk有关，不同的entry会生成不同的chunkhash值
### contenthash: 根据文件内容来定义hash，文件内容不变，则contenthash不变

### 一个chunkhash可能既有js又有css，使用chunkhash可能会导致无意义的chunkhash变化（js变而css不变时）。
### 静态文件资源（例如图片）使用hash
### js使用chunkhash
### css使用contenthash

### 分离css的方法：
#### style-loader是以标签的形式将css代码插入到header中，css代码与js代码打包成一个chunk
#### 使用插件：mini-css-extract-plugin





