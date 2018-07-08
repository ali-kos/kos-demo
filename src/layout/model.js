import Menus from './menus';

const Model = {
  namespace: 'layout',
  initial: {
    menus: [],
    currentMenu: '',
    loading: false,
    menuDefaultOpenKeys: []
  },
  reducers: {

  },
  asyncs: {
    async loadMenus(dispatch, getState, action) {
      // 此处亦可以从服务端获取
      dispatch({
        type: 'setState',
        payload: {
          menus: Menus
        }
      })
    }
  },
  async setup(dispatch, getState, action) {
    dispatch({
      type: 'loadMenus'
    });
  }
};


export default Model;
