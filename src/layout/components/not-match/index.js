import React from 'react';

export default class NotMatch extends React.PureComponent {
  render() {
    const { history } = this.props;

    return <div className=""><div>404, The url "{history.location.pathname}" is not found</div></div>
  }
}
