import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import monaco from 'monaco-editor';

export default class Monaco extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
  }
  constructor(props) {
    super(props);
    this.key = _.uniqueId('monaco');
    this.container = document.querySelector(`#${this.key}`);
    if (this.container) {
      throw new Error('monaco duplicated.');
    }
  }

  componentDidMount() {
    monaco.editor.create(this.container, {
      value: 'console.log("Hello, world")',
      language: 'javascript'
    });
  }

  componentWillUnmount() {

  }

  getRef = (dom) => {
    this.container = dom;
  }

  render() {
    const props = _.pick(this.props, ['style', 'className']);
    return <div {...props} ref={this.getRef} />;
  }
}
