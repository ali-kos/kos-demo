import { HeaderMenus, LeftMenus } from './menus';

const Model = {
  namespace: 'layout',
  initial: {
    headerMenus: HeaderMenus,
    leftMenus: LeftMenus,
    loading: false,
  },
  reducers: {

  },
  asyncs: {
    // async loadMenus(dispatch, getState, action) {
    //   // 此处亦可以从服务端获取
    //   dispatch({
    //     type: 'setState',
    //     payload: {
    //       menus: Menus
    //     }
    //   })
    // }
  },
  async setup(dispatch, getState, action) {
    // dispatch({
    //   type: 'loadMenus'
    // });
  }
};


export default Model;
