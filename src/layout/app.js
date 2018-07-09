import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import createHistory from 'history/createHashHistory';
import kos from 'kos-core';

import NotMatch from './components/not-match';
import LayoutWrapper from './src/wrapper';

const history = createHistory();

const NotMatchPage = {
  title: '404',
  Component: NotMatch,
  history
};
import model from './model';


import './style.less';

@kos.Wrapper({ model })
class SPApp extends React.PureComponent {
  render() {
    const { pages } = this.props;

    return (<Router history={history}>
      <Switch>
        {pages.map(page => {
          const { path } = page;
          const pageConfig = { ...page };
          delete pageConfig.Component;

          return <Route exact key={path} {...pageConfig}
            render={(props) => <LayoutWrapper {...this.props} page={page} history={history} />} />
        })}
        <Route render={props => <LayoutWrapper {...this.props} page={NotMatchPage} history={history} />} />
      </Switch>
    </Router>);
  }
}


export default (pages) => {
  return class App extends React.PureComponent {
    render() {
      return <SPApp pages={pages} />
    }
  }
}
