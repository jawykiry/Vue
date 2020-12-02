# Vue项目的初始化
 
在创建新的Vue项目的时候需要用到（拿来自用）。
 
## 创建项目
 
需要全局安装最新vue
```
npm install -g @vue/cli
#OR
yarn global add -g @vue/cli
```

### 安装vue-router
```
yarn add vue-router@4.0.0-beta.3
```

### 使用项目
```
yarn dev
```

## 项目部署
项目部署需要在终端中输入以下代码
```
yarn build

npm i -g http-server

hs dist -c -1
```

## 使用npm上传项目
使用rollup打包时，在文件rollup.config.js中需要将vue插件放在esbuild之前，否则会无法完成打包，同时将index.ts改名为index.js。
原因可能是因为当ts没变成js时vue组件无法翻译vue，而esbuild已经进入，所以会报错。
rollup文件形如：
```
const replace = require('rollup-plugin-replace')

rollup({
  // ...
  plugins: [
    replace({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ]
}).then(...)
```
