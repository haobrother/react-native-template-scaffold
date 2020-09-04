# 项目说明

## 介绍

这是一个 React Native 项目脚手架,这里可以改为你的项目介绍.

## 特性

- React 16.13.1
- React Native 0.63.2
- 页面路由: React Navigation
- 状态管理: React Redux
- 持久化存储: Async Storage
- HTTP & HTTPS 请求: Axios
- 时间处理: Day.js
- 数据模拟: Mock.js
- 类型检查: TypeScript
- 代码检查 & 格式化: ESLint + Prettier
- 通用样式管理(尺寸,颜色,布局)
- 对主流分辨率屏幕进行自适应
- 对 iphoneX 系列的刘海及底部虚拟 HOME 条进行适配

## 构建 & 运行

### 1. 安装项目依赖

`npm install`

### 2. 构建

启动打包器

`npm run start`

然后,电脑连接真机或启动模拟器.

### 3. 运行

#### iOS 项目

`npm run podIns`

`npm run ios`

#### android 项目

`npm run android`

### 4. 检查代码

打包 App 之前,请先运行 Lint

`npm lint`

若有警告、错误请先排查,直至没有警告或错误;

### 5. 打包

#### iOS 项目

`npm run bundle-ios`

#### android 项目(MacOS 平台)

`npm run bundle-android`

#### android 项目(Windows 平台)

`npm run bundle-win-android`
