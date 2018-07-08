# kos-demo

## 一、快速启动

### 1、安装依赖

```
npm install
```

### 2、启动项目

```
npm run start
```

## 二、目录结构说明

```
|--lib                  // 公共lib，目前放了kos
|--src                  // 源码文件目录，包括组件、布局、页面
  |--components         // 组件目录
  |--layout             // 布局目录
  |--pages              // 页面目录
    |--home
      |--index.js
      |--model.js
      |--style.less
    |--index.js         // 所有页面的出口文件配置，单页应用将根据这个页面的配置信息来进行应用的组装构建
  |--app.js
|--index.html           // 模板文件目录
```

## 三、项目说明

项目目前默认构建方式为单页应用，后续将通过提供webpack的编译插件方式，提供多页的构建方案


### 1、单页

默认为单页构建方式

**pages/index.js配置说明：** 

page/index.js文件导出一个页面的配置数组，应用后续构建为多页方式是，同样将基于该配置文件来进行构建，配置信息如下：

|属性|类型|默认值|是否必须|说明|
|:--:|:--:|:--:|:--:|:--:|
|title|String|无|否|页面的document.title属性值|
|path|String|无|单页应用必须|单页应用时命中的路由地址|
|Component|React.Component|无|是|页面渲染的React组件|
|layout|String|default|否|为页面套用的布局，可使用的布局在layout/index.js中定义|

### 2、多页

当前提供为单页，多页方式使用示例：

```js
import Layout from 'layout';
import kos from 'kos-core';
import CountComponent from './pages/count/';

const page={
  title:'test',
  Component:CountComponent,
  layout:'',
}

class App extends React.PureComponent{
  render(){
    return <Layout page={page}/>
  }
}

kos.start(App);
```

> 后续将使用构建工具来根据 `pages/index.js` 的配置来自动生成，并打包编译

## kos

参考文档：[kos](https://github.com/ali-kos/kos)
