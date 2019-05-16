# imooc-jianshu

> React16.4 开发简书项目 从零基础入门到实战

## 运行

```console
npm i nvm
nvm ls
nvm install 10.0.0
nvm use 10.0.0
npm i create-react-app -g
create-react-app projectName
npm run eject
npm run start
```

## 安装插件

```console
cnpm install axios -S
cnpm i create-react-app -g
cnpm install react-transition-group -S
cnpm install styled-components -S
cnpm install antd -S
cnpm install redux -S
cnpm install redux-thunk -S
cnpm install redux-saga -S
cnpm install react-redux -S
cnpm install babel-plugin-transform-decorators-legacy -D
```

## basic 分支

> 第 3 章 React 基础精讲 & 第 4 章 React 高级内容

- import { createGlobalStyle } from 'styled-components'
- The injectGlobal API was removed and replaced by createGlobalStyle in styled-components v4.
- [官网](https://www.styled-components.com/docs/api)

## 2-3 工程目录文件简介

- **yarn.lock**: project require package, version num
- PWA: **registerServiceWorker.js**, in https server, if phone broken internet, cache before interface
- **mainifest.json**: website use as App, store in computer as shortcut, define the shortcut content

## 3-7 围绕 React 衍生出的思考

- 声明式开发
- 可以和其它框架并存
- 组件化
- 单向数据流
- 视图层框架
- 函数式编程

## 4-1 React developer tools 安装及使用

- chrome -> react

## 4-2 PropTypes 与 DefaultProps 的应用

## 4-3 props，state 与 render 函数的关系

## 4-4 React 中的虚拟 DOM

- principle:

1. state data
2. JSX template
3. data + template create virtual-DOM (virtual-DOM is JS object，use it desc DOM) `['div',{id:'abc'},['span',{},'hello world']]`
4. virtual-DOM create real DOM `<div id='abc'><span>hello </span></div>`
5. state change
6. new data + template create new virtual-DOM `['div', {id: 'abc'}, ['span', {}, 'bye']]` (performance optimize)
7. compare origin virtual-DOM and new virtual-DOM, find difference, diff algorithm
8. operate DOM, change content

- advantage:

1. performance optimize (JS object)
2. cross-platform React Native

## redux 分支

## 无状态组件

## axios

## redux-thunk

## redux-saga

## react-redux
