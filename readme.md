## 00 解析图片和字体
### file-loader
#### npm i file-loader -D
### url-loader
#### 可以转base64
#### npm i url-loader -D
```
 use: {
          loader: 'url-loader',
          options: {
            // 小于 10kb 的转为 base64
            limit: 10240
          }
        }
```






