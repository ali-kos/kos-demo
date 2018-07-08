import React from 'react';
import kos from 'kos-core';
import model from './model';

import DefaultLayout from './src/layout-default';
import LeftmenuLayout from './src/layout-leftmenu';

import './style.less';


const LayoutMap = {
  'leftmenu': LeftmenuLayout
};


@kos.Wrapper({ model })
class Layout extends React.PureComponent {
  render() {
    const { page, history } = this.props;
    const { layout, Component, title } = page;

    // 更新title
    document.title = title;

    // 此处根据layout获取LC
    const LC = LayoutMap[layout] || DefaultLayout

    return <LC {...this.props}>
      <Component page={page} history={history} />
    </LC>
  }
}

export default Layout;
