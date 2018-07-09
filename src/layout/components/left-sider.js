import React from 'react';
import Nav from './nav';

class LeftSider extends React.PureComponent {
  onMenuSelect(selectedKeys) {
    const { dispatch } = this.props;

    dispatch({
      type: 'setState',
      payload: {
        currentLeftSiderMenus: selectedKeys
      }
    });
  }
  render() {
    const { leftMenus, currentLeftSiderMenus } = this.props;
    return <div className="kos-demo-left-sider">
      <Nav {...this.props} selectedKeys={currentLeftSiderMenus} menus={leftMenus} mode="inline" theme="light" onSelect={(selectedKeys) => this.onMenuSelect(selectedKeys)} />
    </div>
  }
}

export default LeftSider;
