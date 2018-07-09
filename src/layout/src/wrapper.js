import React from 'react';

import DefaultLayout from './layout-default';
import LeftmenuLayout from './layout-leftmenu';


const LayoutMap = {
  'leftmenu': LeftmenuLayout,
  'default': DefaultLayout
};


// @kos.Wrapper({ model })
class LayoutWrapper extends React.PureComponent {
  componentDidMount() {
    const { dispatch, history } = this.props;

    // 设置默认选中菜单
    const selectedKeys = [history.location.pathname];
    dispatch({
      type: 'setState',
      payload: {
        currentLeftSiderMenus: selectedKeys,
        currentHeaderMenus: selectedKeys
      }
    });
  }
  render() {
    const { page, history } = this.props;
    const { layout = 'default', Component, title } = page;

    // 更新title
    document.title = title;

    // 此处根据layout获取LC
    const Layout = LayoutMap[layout];

    return Layout ? <Layout {...this.props}>
      <Component page={page} history={history} />
    </Layout> : <Component page={page} history={history} />
  }
}

export default LayoutWrapper;
