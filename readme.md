## 11、eslint与webpack集成
### 1、与CI/CD集成
#### 开发阶段加上 precommit 脚本（预提交检查）
#### 安装 husky 通过lint-staged 增量检查修改文件
### 2、与webpack集成
eslint-config-airbnb 
https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb
根据git安装需要的 eslint 和 react 的东西 还有安装eslint-config-airbnb
再安装 eslint-loader 并配置在webpack 的 js 字段中
根目录创建eslint配置文件 例如 eslintrc.js 根据官网配置：
https://eslint.org/docs/user-guide/configuring
安装并使用babel-eslint解析器
使用extends字段继承airbnb的配置，想修改可以使用rule覆盖掉airbnb相关配置
```
module.exports = {
  // 解析器
  "parser": "babel-eslint",
  // 继承airbnb
  "extends": "airbnb",
  // "rules": {
  //   "semi": "error"
  // }
  // 指定环境 node和浏览器的
  "env": {
    "browser": true,
    "node": true
  }
}
```









