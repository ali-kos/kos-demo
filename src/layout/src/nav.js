import React from 'react';
import { Menu, Icon } from 'antd';
const { SubMenu } = Menu;
import createHistory from 'history/createHashHistory';


export default class Nav extends React.PureComponent {
  handleMenuSelect(e) {
    const { key } = e;

    if (!key) {
      return;
    }
    const { history } = this.props;

    if (history.location.pathname == key) {
      return;
    }
    this.props.dispatch({
      type: 'setState',
      payload: {
        currentMenu: key
      }
    });

    this.props.history.replace(key);
  }
  componentDidMount() {
    const { history, dispatch } = this.props;

    history && dispatch({
      type: 'setState',
      payload: {
        currentMenu: history.location.pathname
      }
    });
  }
  renderMenuItem(menu) {
    const { title, icon } = menu;
    return <span>
      {icon ? <Icon type={icon} /> : null}
      {title}
    </span>
  }
  renderMenus(menus = []) {
    return menus.map((menu) => {
      const { path, children = [], disabled } = menu;

      if (children.length) {
        return <SubMenu key={path} disabled={disabled} title={this.renderMenuItem(menu)}>
          {this.renderMenus(children)}
        </SubMenu>
      }
      return <Menu.Item key={path} disabled={disabled}>{this.renderMenuItem(menu)}</Menu.Item>

    });
  }
  render() {
    const { menus, currentMenu, menuDefaultOpenKeys } = this.props;

    return <Menu
      mode="horizontal"
      className="app-layout-menu" theme="dark"
      selectedKeys={[currentMenu]}
      defaultOpenKeys={menuDefaultOpenKeys}
      onClick={(e) => this.handleMenuSelect(e)}>
      {this.renderMenus(menus)}
    </Menu>
  }
}
