import React from 'react';
import { Menu, Icon } from 'antd';
const { SubMenu } = Menu;
import PropTypes from 'prop-types';

export default class Nav extends React.PureComponent {
  static propTypes = {
    mode: PropTypes.string,
    theme: PropTypes.string,
    menus: PropTypes.array,
    history: PropTypes.object,
    className: PropTypes.string,
    selectedKeys: PropTypes.array
  };
  static defaultProps = {
    mode: 'horizontal',
    theme: 'dark',
    menus: [],
    className: 'app-layout-menu',
    selectedKeys: []
  };
  constructor(props) {
    super(props);

    this.menuKeys = {};
  }
  handleMenuSelect(e) {
    const { key, selectedKeys } = e;
    const { history, onSelect } = this.props;

    onSelect && onSelect(selectedKeys);

    if (!key) {
      return;
    }
    const menu = this.menuKeys[key];
    if (!menu || menu.href) {
      return;
    }


    if (history) {
      if (history.location.pathname == key) {
        return;
      }
      history && history.push(key);
    }

  }
  renderMenuItem(menu) {
    const { history } = this.props;
    const { title, icon, target = "" } = menu;
    const href = history ? menu.href : menu.path;

    return href ? (<a href={href} target={target}>
      {icon ? <Icon type={icon} /> : null}
      {title}
    </a>) : (<span>
      {icon ? <Icon type={icon} /> : null}
      {title}
    </span>);
  }
  renderMenus(menus = []) {
    return menus.map((menu) => {
      const { path, href, children = [], disabled } = menu;
      const menuKey = path || href;

      this.menuKeys[menuKey] = menu;

      if (children.length) {
        return <SubMenu key={menuKey} disabled={disabled} title={this.renderMenuItem(menu)}>
          {this.renderMenus(children)}
        </SubMenu>
      }
      return <Menu.Item key={menuKey} disabled={disabled}>{this.renderMenuItem(menu)}</Menu.Item>
    });
  }
  render() {
    const { menus, mode, theme, className, selectedKeys } = this.props;

    this.menuKeys = {};
    return <Menu
      mode={mode}
      className={className} theme={theme}
      selectedKeys={selectedKeys}
      onSelect={(e) => this.handleMenuSelect(e)}>
      {this.renderMenus(menus)}
    </Menu>
  }
}
