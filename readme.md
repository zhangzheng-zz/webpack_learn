### 22、webpack的原理分析
#### 1、启动过程
运行webpack
- 进入node_module/webpack/bin/webpack.js
- webpack.js
```
// 1、正常执行返回
process.exitCode = 0; 

// 2、运行某个命令
const runCommand = (command, args) => {
  ...

// 3、判断某个包是否安装
const isInstalled = packageName => {
  ...

// 4、webapck可用的cli、webpack-cli 和 webpack-commamd
const CLIs = [
  ...

// 5、判断两个cli是否安装了
const installedClis = CLIs.filter(cli => cli.installed);

// 根据安装数量进行处理
if (installedClis.length === 0) {
  ...
    			require(packageName); //require这个cli并执行
  ...
```
最终结果：找到webpack-cli(webpack-command)并且执行cli

#### 2、webpack-cli 做的事情
- 引入 yargs，对命令行进行定制
- 分析命令行参数，对各个参数进行转换，组成编译配置项
- 引用webpack，根据配置项进行编译和构建

1、从NON_COMPILATION_CMD分析出不要编译的命令
webpack-cli 处理不需要经过编译的命令
```
	const NON_COMPILATION_CMD = process.argv.find(arg => {
		if (arg === "serve") {
			global.process.argv = global.process.argv.filter(a => a !== "serve");
			process.argv = global.process.argv;
		}
		return NON_COMPILATION_ARGS.find(a => a === arg);
	});

	if (NON_COMPILATION_CMD) {
    // 不需要编译直接retutn掉
		return require("./utils/prompt-command")(NON_COMPILATION_CMD, ...process.argv);
	}
  ...
```
测试：运行./node_modules/.bin/webpack init

2、NON_COMPILATION_ARGS的内容
(版本不同改变了)
webpack提供不需要编译的命令
```
const NON_COMPILATION_ARGS = [
  // 创建一份webpack配置文件
  "init",
  // 进行webpack版本迁移
   "migrate",
  // 往webpack配置文件中增加属性
  "add",
  // 删除属性
  "remove"
  // 运行webpack-serve
    "serve", 
  //生成webpack loader代码
    "generate-loader", 
  //生成webpack plugin代码
    "generate-plugin",
  // 返回与本地环境相关信息 
    "info"
];
```
3、webpack-cli 使用 args 分析
参数分组（config/config-yargs.js），将命令分为9类
```
	CONFIG_GROUP,   配置相关（文件名称、运行环境等）
	BASIC_GROUP,    基础（entry设置、debug、watch、devtool）
	MODULE_GROUP,   模块，给loader设置扩展
	OUTPUT_GROUP,   输出（输出路径、输出文件名称）
	ADVANCED_GROUP, 高级（记录设置、缓存设置、监听频率、bail等）
	RESOLVE_GROUP,  解析（alias和解析的文件后缀设置）
	OPTIMIZE_GROUP, 优化
  //
  STATS 统计
  // 
	DISPLAY_GROUP

```
4、webpack-cli执行结果
- webpck-cli 对配置文件和命令行参数进行转换最终生成配置选项参数options
- 最终会根据 optins 实例化 webpack 对象， 然后执行构建流程

```
  let options;
  ...
	const webpack = require("webpack");

		...
			try {
				compiler = webpack(options);
        ...


  	compiler.watch(watchOptions, compilerCallback);
    ...
    compiler.run((err, stats) => {
    ...
```

#### 3、Tapable插件架构与hooks设计
1、webpack本质可以理解为一种基于事件流的编程范例，一系列插件的运行
2、compiler继承于tapable
tapable是一个类似Node.js的EventEmitter的库，主要是控制钩子函数
的发布订阅，控制着webpack的插件系统

暴露了很多hooks钩子类，为插件提供挂载的钩子(同步和异步两种)

#### 4、webpack流程