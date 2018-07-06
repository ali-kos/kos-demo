# sass-style

## 快速启动

### 1、安装依赖

```
npm install
```

### 2、启动项目

```
npm run start
```

## 目录结构说明

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
    |--index.js
  |--app.js
|--index.html           // 模板文件目录
```


## KOS

KOS是基于Redux封装的支持`namespace`的简单应用框架，通过异步中间件解决异步请求


### API说明

#### `use(middleware)`

* **说明：** 添加redux中间件
* **参数：** 
 + middleware：redux中间件高阶函数
* **示例：**

```js
import loggerMiddleware from 'redux-logger';

KOS.use(loggerMiddleware);
```

#### model(model)
* **说明：** model注册，KOS内部Warpper调用
* **参数：** 
 + model：单个model，model内容详见(Model)[]

#### Wrapper(config)(Component)

* **说明：** ES7的装饰器，用于装饰组件的View，内部进行model注册、redux的connect等动作
* **参数：**
 + config.model：model信息，内容详见(Model)[]
 + config.page：页面信息，详见(Page)[]，页面信息后续用于生成单页的Router
 + config.autoLoad：装饰器会返回一个高阶函数，高阶函数的`componentDidMount`阶段，会dispatch一个加载页面数据的`setup`的action，如果autoLoad的值为false，则不会自动触发`setup`

#### getPages()
* **说明：** 获取所有的page信息
* **参数：** 无

#### start(Component,container)
* **说明：** 启动应用
* **参数：** 
 + Component：React组件，单页应用应该是Layout为首的组件
 + container：容器dom，默认值为`#main`


### Model

#### 属性说明

* **namesapce：** 命名空间

* **initial：** 初始化的数据

* **reducers：** reducer的集合

* **asyncs：** 异步处理的集合

* **setup：** 一个特殊的async，用于组件首次挂载后调用，根据在装饰器中是否传入autoLoad属性来判断；

#### async的参数说明：
* dispatch(action)：dispatch方法，用户触发action，
* state：Store.getState方法获取到的当前namespace下的state值
* action：格式如：

  ```js
  {
    type: 'loadData',
    payload:{
      param: {
        id: 1,
        name: '12'
      }
    },
    loading: ''
  }
  ```
  **action字段说明：**
  + type：action.type，默认会拼接namespace，例如当前`namespace`值是`page`，则最终的`type`值是`page/loadData`，也可以自己通过手动方式传入namespace，例如:`layout/loadData`；
  + payload：强烈建议的传参方式，将所有需要传递的参数，收敛到`payload`属性中，
  + loading：如果是异步的action，loading中间件将根据该值来确定loading效果，loading效果分以下几种：
   - 1、当loading值为true时，将展示全局的loading，该全局的loading作用于layout之上
   - 2、当loading值为字符串时，将进行`/`分割，如格式为`${namespace}/${loadingField}`，否则格式为`${loadingField}`，中间件将自动匹配当前的`namespace`；匹配后设置当前`loadingField`控制的值为`true`或者`false`
 

params为所有的URL参数，包括路由匹配的，hash值后面的，url后面的query等

#### 代码示例

```js
import fetch from '../../../lib/fetch';
import { notification } from 'antd';

const Model = {
  namespace: 'home',
  initial: {
    pageSize: 20,
    pageIndex: 1,
    projectList: [],
    projectLoading: false
  },
  reducers: {
    setTitle(state, { payload }) {
      return {
        ...state,
        ...payload
      }
    }
  },
  asyncs: {
    async loadAppList(dispatch, state, action) {
      const { params } = action;
      const { pageSize, pageIndex } = state;
      const data = await fetch({
        url: '/app/list',
        data: {
          pageSize, pageIndex,
          ...params,
        }
      });

      const { data: projectList, total } = data;
      dispatch({
        type: 'setState',
        payload: {
          total,
          projectList
        }
      });
    },
    async loadTitle(dispatch, state, action) {
      setTimeout(() => {
        dispatch({
          type: 'setTitle',
          payload: { title: 'hello kos' }
        })
      }, 1000)
    }
  },
  async setup(dispatch, state, action) {
    dispatch({
      type: 'loadAppList',
      payload: {},
      loading: 'projectLoading'
    });
  }
};

export default Model;

```

