import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import createHistory from 'history/createHashHistory';

import NotMatch from './components/not-match';
import Layout from './index';

const history = createHistory();

const NotMatchPage = {
  title: '404',
  Component: NotMatch,
  history
};

export const SPApp = class extends React.PureComponent {
  render() {
    const { pages } = this.props;

    return (<Router history={history} >
      <Switch>
        {pages.map(page => {
          const { path } = page;
          const pageConfig = { ...page };
          delete pageConfig.Component;

          return <Route exact key={path} {...pageConfig}
            render={(props) => <Layout page={page} history={history} />} />
        })}
        <Route render={props => <Layout page={NotMatchPage} history={history} />} />
      </Switch>
    </Router>);
  }
}

export const MPApp = class extends React.PureComponent {
  render() {
    const { page } = this.props;
    return <Layout page={page} />;
  }
}

export const AppCreator = (pages) => {
  return class App extends React.PureComponent {
    render() {
      return <SPApp pages={pages} />
    }
  }
}
