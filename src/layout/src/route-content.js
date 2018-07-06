import React from 'react';
import { Switch, Route } from 'react-router-dom';

import NotMatch from '../components/not-match';
import Auth from '../components/auth';


export default class extends React.PureComponent {
  render() {
    const { pages } = this.props;

    return <Switch>
      {pages.map(page => {
        const { path, Component } = page;
        const pageConfig = { ...page };
        delete pageConfig.Component;

        return <Route exact key={path} {...pageConfig}
          render={(props) => <Auth routeProps={props} page={page} Component={Component} />} />
      })}
      <Route component={NotMatch} />
    </Switch>
  }
}
