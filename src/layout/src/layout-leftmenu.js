import { Layout, Spin, Menu, Icon } from 'antd';
import Header from '../components/header';
import Footer from '../components/footer';

const { SubMenu } = Menu;

class LeftmenuLayout extends React.PureComponent {
  render() {
    const { children } = this.props;

    return (<Layout className="app-layout">
      <Layout.Header className="app-layout-header">
        <Header {...this.props} />
      </Layout.Header>

      <Layout>
        <Layout.Sider width={200} style={{ background: '#fff' }}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
          >
            <SubMenu key="sub1" title={<span><Icon type="user" />subnav 1</span>}>
              <Menu.Item key="1">option1</Menu.Item>
              <Menu.Item key="2">option2</Menu.Item>
              <Menu.Item key="3">option3</Menu.Item>
              <Menu.Item key="4">option4</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" title={<span><Icon type="laptop" />subnav 2</span>}>
              <Menu.Item key="5">option5</Menu.Item>
              <Menu.Item key="6">option6</Menu.Item>
              <Menu.Item key="7">option7</Menu.Item>
              <Menu.Item key="8">option8</Menu.Item>
            </SubMenu>
            <SubMenu key="sub3" title={<span><Icon type="notification" />subnav 3</span>}>
              <Menu.Item key="9">option9</Menu.Item>
              <Menu.Item key="10">option10</Menu.Item>
              <Menu.Item key="11">option11</Menu.Item>
              <Menu.Item key="12">option12</Menu.Item>
            </SubMenu>
          </Menu>
        </Layout.Sider>
        <Layout>
          <Layout.Content className="app-layout-content">
            <div className="wrap">
              {children}
            </div>
          </Layout.Content>
        </Layout>
      </Layout>

      <Layout.Footer className="app-layout-footer">
        <Footer {...this.props} />
      </Layout.Footer>
    </Layout>);
  }
}


export default LeftmenuLayout;
