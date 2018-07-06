import React from 'react';
import { Route, Router } from 'react-router-dom';
import createHistory from 'history/createHashHistory';
import { Layout, Spin } from 'antd';


import Header from './header';
import Footer from './footer';
import RouteContentComponent from './route-content';

const history = createHistory();


export default (pages) => {
  const LayoutSPA = class extends React.Component {
    render() {
      const { loading } = this.props;
      const props = {
        ...this.props,
        history
      };

      return <Router history={history} >
        <Spin spinning={loading}>
          <Layout className="app-layout">
            <Layout.Header className="app-layout-header">
              <Header {...props} />
            </Layout.Header>

            <Layout.Content className="app-layout-content">
              <div className="wrap">

                <Route path="/" render={(props) => <RouteContentComponent {...props} pages={pages} />} />
                
              </div>
            </Layout.Content>

            <Layout.Footer className="app-layout-footer">
              <Footer {...props} />
            </Layout.Footer>
          </Layout>
        </Spin>
      </Router>
    }
  }

  return LayoutSPA;
}




