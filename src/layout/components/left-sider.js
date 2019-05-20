import React from "react";
import { Menu, Icon } from "antd";

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class LeftSider extends React.PureComponent {
  onMenuSelect(menuItem) {
    const { key } = menuItem;
    const [m, index, cIndex] = key.split("-");

    const { leftMenus, history } = this.props;

    let item = leftMenus[index];
    if (cIndex !== undefined && item.children) {
      item = item.children[cIndex];
    }
    history.replace(item.path);
  }
  render() {
    const { leftMenus, currentLeftSiderMenus } = this.props;
    return (
      <div className="kos-demo-left-sider">
        <Menu
          onClick={this.onMenuSelect.bind(this)}
          defaultSelectedKeys={currentLeftSiderMenus}
          defaultOpenKeys={["m-0", "m-1"]}
          mode="inline"
          theme="dark"
        >
          {leftMenus.map((menu, index) => {
            const { icon, title, children } = menu;

            return children ? (
              <SubMenu
                key={`m-${index}`}
                title={
                  <span>
                    <Icon type={icon} />
                    <span>{title}</span>
                  </span>
                }
              >
                {children.map((child, cIndex) => (
                  <Menu.Item key={`m-${index}-${cIndex}`}>
                    {child.title}
                  </Menu.Item>
                ))}
              </SubMenu>
            ) : (
              <Menu.Item key={`m-${index}`}>{title}</Menu.Item>
            );
          })}
        </Menu>
      </div>
    );
  }
}

export default LeftSider;
