# react native脚手架项目

本项目用于快速构建一个react native项目,而且搭建了基本的代码框架,可以快速进入业务开发.

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

## 使用方法

1. 拉取项目代码到本地,并进入该代码所在的目录

2. 配置CocoaPods的[清华镜像源](https://mirror.tuna.tsinghua.edu.cn/help/CocoaPods/)

3. 初始化项目

   > **请在初始化项目之前卸载原来全局安装的react-native-cli: npm uninstall -g react-native-cli**

   npx react-native init [项目名称] --template [本地目录/react-native-template-scaffold]

   例如:

   npx react-native init newchannel --template **file://**/Users/yimiao/Documents/haobrother/tests/react/react-native-template-scaffold

   **PS:** 注意上面例子中的本地目录需要换成你的目录路径

   **PS2:** 注意使用本地模版需要在路径前方加file://