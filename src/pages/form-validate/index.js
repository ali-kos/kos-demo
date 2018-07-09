import React from 'react';
import { Form, Field, ToolbarField } from 'lib/kos-form-antd';
import { Input, Select, Button } from 'antd';
import kos from 'kos-core';

import model from './model';

import './style.less';


@kos.Wrapper({ model })
class FormValidate extends React.PureComponent {
  render() {
    return <div className="kos-demo-form">
      <Form name="testform">
        <Field label="姓名：" field="name">
          <Input />
        </Field>
        <Field label="学历" field="degree" getOnChangeValue={value => value}>
          <Select>
            <Select.Option value="High school">高中</Select.Option>
            <Select.Option value="Undergraduate">本科</Select.Option>
            <Select.Option value="Graduate">研究生</Select.Option>
            <Select.Option value="Doctor">博士</Select.Option>
          </Select>
        </Field>
        <ToolbarField>
          <Button htmlType="submit">提交</Button>
        </ToolbarField>
      </Form>
    </div>
  }
}


export default FormValidate;
