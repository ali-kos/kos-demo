import { Layout, Spin } from 'antd';
import Header from '../components/header';
import Footer from '../components/footer';

class DefaultLayout extends React.PureComponent {
  render() {
    const { children, menus } = this.props;

    return (<Layout className="app-layout">
      <Layout.Header className="app-layout-header">
        <Header {...this.props} />
      </Layout.Header>

      <Layout.Content className="app-layout-content">
        <div className="wrap">
          {children}
        </div>
      </Layout.Content>

      <Layout.Footer className="app-layout-footer">
        <Footer {...this.props} />
      </Layout.Footer>
    </Layout>);
  }
}


export default DefaultLayout;
