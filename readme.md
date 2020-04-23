## webpack 学习总结

### 运行
```
npm run dev
```
## 笔记总结：
### 基础配置：
### 1、配置解析es6语法
---
#### 安装 babel-loader 并配置规则
---
```
  npm i @babel/core @babel/preset-env babel-loader -D
```
### 2、配置解析JSX语法
---
#### 安装 @babel/preset-react 并配置.babelrc
```
  npm i @babel/preset-react -D
```
### 3、配置解析CSS、LESS
#### 安装 css-loader less-loader style-loader 并配置规则
#### 注意：loader 调用顺序从下自上





