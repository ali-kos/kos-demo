import React, { Component } from 'react';
import { Input } from 'antd';

const Attr = ({ value, onDoubleClick }) => {
  const index = value.indexOf('=');
  return (
    <span onDoubleClick={onDoubleClick}>
      <span className="attr-name">{value.slice(0, index)}</span>
      <span className="attr-value">{value.slice(index + 1)}</span>
    </span>
  );
};

class EditableText extends Component {
  constructor(props) {
    super(props);
    this.dbClicked = false;
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
    const { editing, value } = this.state;
    if (editing) {
      this.input.focus();
      const index = value.indexOf('=');
      if (this.dbClicked) {
        this.input.refs.input.textAreaRef.setSelectionRange(index + 2, value.length - 1);
        this.dbClicked = false;
      }
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
    this.dbClicked = true;
    this.setState({
      editing: true,
    });
  }

  render() {
    const { value, editing } = this.state;
    return (
      <span className="node-attr">
        {
          !editing && (<Attr value={value} onDoubleClick={this.edit.bind(this)} />)
        }
        {
          editing && (
            <Input
              style={{ width: 200, verticalAlign: 'top' }}
              size="small"
              type="textarea"
              autosize
              ref={(node) => { this.input = node; }}
              value={value}
              onBlur={this.onBlur.bind(this)}
              onPressEnter={this.onBlur.bind(this)}
              onChange={this.onChange.bind(this)}
            />
          )
        }
      </span>
    );
  }
}

export default EditableText;

