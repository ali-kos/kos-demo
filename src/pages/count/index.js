import React from 'react';
import Countter from '../../components/countter';

export default class CountPage extends React.PureComponent{
  render(){
    return <div>
      <Countter/>
      <Countter/>
      <Countter/>
    </div>
  }
};
