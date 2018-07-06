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