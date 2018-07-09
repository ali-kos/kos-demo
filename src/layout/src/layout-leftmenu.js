import { Layout, Spin, Menu, Icon } from 'antd';
import Header from '../components/header';
import Footer from '../components/footer';
import LeftSider from '../components/left-sider';

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
          <LeftSider {...this.props} />
        </Layout.Sider>
        <Layout className="app-layout">
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
