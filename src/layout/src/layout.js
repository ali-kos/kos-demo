import React from 'react';
import { Route, Router } from 'react-router-dom';
import createHistory from 'history/createHashHistory';
import { Layout } from 'antd';
import Header from './header';
import Footer from './footer';

export default (PageComponent) => {
  const Layout = class extends React.PureComponent {
    render() {
      const { loading } = this.props;
      
      return <Router history={history} >
        <Spin spinning={loading}>
          <Layout className="app-layout">
            <Layout.Header className="app-layout-header">
              <Header {...this.props} />
            </Layout.Header>

            <Layout.Content className="app-layout-content">
              <div className="wrap">
                <PageComponent {...props} />
              </div>
            </Layout.Content>

            <Layout.Footer className="app-layout-footer">
              <Footer {...this.props} />
            </Layout.Footer>
          </Layout>
        </Spin>
      </Router>
    }
  }

  return Layout;
}




