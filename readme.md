## 04 postcss/autoprefixer 添加兼容前缀
### 运行命令：
```
npm run dev 
```
#### 安装 postcss 和 autoprefixer
```
 {
    loader: 'postcss-loader',
    options: {
      plugins: [
        require('autoprefixer')
      ]
    }
  }
```
### 添加.browserslistrc配置










