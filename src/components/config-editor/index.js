import React, { Component } from 'react';
import { Spin, Icon, Modal } from 'antd';
import store from 'store';
import CM from 'codemirror';
import classnames from 'classnames';
import CodeMirror from 'react-codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/theme/eclipse.css';
import 'codemirror/addon/dialog/dialog.css';
import 'codemirror/addon/dialog/dialog';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/sql/sql';
import 'codemirror/addon/edit/matchtags';
import 'codemirror/addon/edit/matchbrackets';
import 'codemirror/addon/edit/closebrackets';
import 'codemirror/addon/edit/closetag';
import 'codemirror/addon/fold/foldgutter';
import 'codemirror/addon/fold/brace-fold';
import 'codemirror/addon/fold/foldcode';
import 'codemirror/addon/fold/xml-fold';
import 'codemirror/addon/fold/indent-fold';
import 'codemirror/addon/display/placeholder';
import 'codemirror/addon/fold/foldgutter.css';
import 'codemirror/keymap/vim';
import 'codemirror/addon/display/fullscreen';
import 'codemirror/addon/display/fullscreen.css';
import './index.less';

const editorFormat = (str, type = 'sql') => {
  let rtn = str;
  if (type === 'javascript') {
    try {
      rtn = JSON.stringify(JSON.parse(str), null, 2);
    } catch (e) {
      console.warn(e);
    }
  }
  return rtn;
};

const noop = () => {};

const EDITOR_CONFIG = {
  lineNumbers: true,
  lineWrapping: true,
  tabSize: '2',
  smartIndent: true,
  foldGutter: true,
  viewportMargin: 20,
  autoCloseBrackets: true,
  autoCloseTags: true,
  matchTags: { bothTags: true },
  showCursorWhenSelecting: true,
  gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter'],
  extraKeys: {
    F11(cm) {
      if (cm.getOption('fullScreen')) {
        cm.setOption('fullScreen', false);
      } else {
        cm.setOption('fullScreen', !cm.getOption('fullScreen'));
      }
    },
    F10(cm) {
      const theme = cm.getOption('theme');
      const newTheme = theme === 'eclipse' ? 'material' : 'eclipse';
      cm.setOption('theme', newTheme);
      store.set('MYREPORTS_EDITOR_THEME', newTheme);
    },
    F9(cm) {
      const keyMap = cm.getOption('keyMap');
      const newKeyMap = keyMap === 'default' ? 'vim' : 'default';
      cm.setOption('keyMap', newKeyMap);
      store.set('MYREPORTS_EDITOR_KEY_MAP', newKeyMap);
    },
  },
};

CM.commands.save = (cm) => {
  cm.save();
};

const TYPE_MAP = {
  javascript: 'javascript',
  sql: 'text/x-mysql',
  xml: 'xml',
  json: { name: 'javascript', json: true },
};

class ConfigEditor extends Component {
  static defaultProps = {
    lineNumbers: true,
    wrap: true,
    loading: false,
    onChange: noop,
    onSave: noop,
    height: 200,
    autosize: false,
  };

  componentDidMount() {
    const { onSave, height, autosize } = this.props;
    const cm = this.editor.getCodeMirror();
    if (!autosize) {
      cm.setSize(null, height);
    }
    cm.save = onSave;
  }

  onChange(value) {
    const { onChange } = this.props;
    onChange(value);
  }

  render() {
    const { type, disabled, value, lineNumbers,
      name, wrap, loading, onChange, autosize, placeholder } = this.props;
    const showHelp = () => {
      Modal.info({
        title: '编辑器快捷键',
        content: (
          <div>
            <p>F11 切换全屏</p>
            <p>F10 切换主题色</p>
            <p>F9 &nbsp; 切换vim</p>
            <p>F8 &nbsp; 格式化(sql参数不允许使用sql关键字)</p>
          </div>
        ),
      });
    };
    const options = {
      ...EDITOR_CONFIG,
      keyMap: store.get('MYREPORTS_EDITOR_KEY_MAP') || 'default',
      theme: store.get('MYREPORTS_EDITOR_THEME') || 'eclipse',
      mode: TYPE_MAP[type],
      readOnly: disabled,
      lineWrapping: wrap,
      lineNumbers,
    };

    options.extraKeys.F8 = (cm) => {
      const doc = cm.getDoc();
      const text = doc.getValue();
      const newText = editorFormat(text, type);
      doc.setValue(newText);
      onChange(newText);
    };
    const cls = {
      'auto-height': autosize,
    };
    return (
      <div className="myreports-editor">
        <div className="help">
          帮助 <Icon type="exclamation-circle-o" onClick={showHelp} style={{ cursor: 'pointer' }} />
        </div>
        <Spin spinning={loading}>
          <CodeMirror
            className={classnames(cls)}
            ref={(editor) => { this.editor = editor; }}
            path={name}
            value={value}
            placeholder={placeholder}
            onChange={this.onChange.bind(this)}
            options={options}
          />
        </Spin>
      </div>
    );
  }
}

export default ConfigEditor;
