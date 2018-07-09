import React from 'react';
import Nav from './nav';
import { Row, Col } from 'antd';
import { Link } from 'react-router-dom';

export default class Header extends React.PureComponent {
  onMenuSelect(selectedKeys) {
    const { dispatch } = this.props;

    dispatch({
      type: 'setState',
      payload: {
        currentHeaderMenus: selectedKeys
      }
    });
  }
  render() {
    const { headerMenus, currentHeaderMenus } = this.props;
    return <div className="wrapper">
      <Row>
        <div className="app-logo"><div className="icon">kos</div></div>
        <h1 className="app-name"><Link to="/">demo</Link></h1>
        <div className="app-menus">
          <Nav {...this.props} selectedKeys={currentHeaderMenus} menus={headerMenus} onSelect={(selectedKeys) => this.onMenuSelect(selectedKeys)} />
        </div>
      </Row>
    </div>
  }
}
