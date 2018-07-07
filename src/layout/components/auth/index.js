import React from 'react';
import kos from 'kos-core';
import model from './model';

@kos.Wrapper({ model, authLoad: false })
class Auth extends React.PureComponent {
  componentWillMount() {
    const { page = {}, dispatch } = this.props;
    const { authCode } = page;

    authCode && this.props.dispatch({
      type: 'checkAuth',
      payload: {
        authCode
      }
    });
  }
  render() {
    const { Component, page = {}, routeProps, authData = {} } = this.props;
    const { authCode } = page;
    const hasAuth = authData[authCode];

    // 不需要做校验
    if (!authCode || hasAuth === true) {
      return <Component {...routeProps} />
    }

    // 加载中
    if (hasAuth === undefined) {
      return <div className=""><div>权限校验中...</div></div>
    }

    // 没有权限
    return <div className=""><div>没有权限...</div></div>
  }
}

export default Auth;
