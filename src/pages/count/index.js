import React from 'react';
import kos from 'kos-core';
import { Form, Field, ToolbarField } from 'lib/kos-form-antd';
import model from './model';

import { Input, Button } from 'antd';

@kos.Wrapper({ model })
class Countter extends React.PureComponent {
  onAddClick() {
    const { dispatch } = this.props;

    dispatch({
      type: 'addStepCount',
      payload: {
        step: 2
      }
    });
  }
  render() {
    const { count } = this.props;
    return (<div className="kos-demo-count">

      <div>count:{count}</div>

      <Button onClick={() => this.onAddClick()}>增加</Button>
    </div>)
  }
};

export default Countter;
