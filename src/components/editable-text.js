import React, { Component } from 'react';
import { Input } from 'antd';

class EditableText extends Component {
  constructor(props) {
    super(props);
    const { value } = props;
    this.defaultValue = value;
    this.state = {
      value: props.value,
      editing: false,
    };
  }

  componentWillReceiveProps(props) {
    const { value } = this.state;
    if (value !== props.value) {
      this.setState({
        value: props.value,
      });
    }
  }

  componentDidUpdate() {
    if (this.state.editing) {
      this.input.focus();
    }
  }

  onChange(e) {
    this.setState({
      value: e.target.value,
    });
  }

  onBlur() {
    const { onChange } = this.props;
    const { value } = this.state;
    this.setState({
      editing: false,
    });
    if (onChange) {
      onChange(value);
    }
  }

  edit() {
    this.setState({
      editing: true,
    });
  }

  render() {
    const { value, editing } = this.state;
    return !editing ? (
      <div onClick={this.edit.bind(this)}>
        {value}
      </div>
    ) : (
      <Input
        ref={(node) => { this.input = node; }}
        type="textarea"
        autosize
        value={value}
        onBlur={this.onBlur.bind(this)}
        onChange={this.onChange.bind(this)}
      />
    );
  }
}

export default EditableText;
