import React from "react";
import kos from "kos-core";
import { Form, Field } from "kos-form-antd";
import { Select, Button, Input } from "antd";

import model from "./model";

@kos.Wrapper({ model })
export default class DyFrom extends React.Component {
  onChange() {
    const { modelKey, dispatch } = this.props;
    dispatch({
      type: "setState",
      payload: {
        modelKey: modelKey === "key1" ? "key2" : "key1"
      }
    });
  }
  onSubmit() {
    const form = this.props.getForm("dy-form");
    form &&
      form.validate(ret => {
        console.log(ret);
      });
  }
  render() {
    const { modelKey, formModel } = this.props;
    const fieldList = formModel[modelKey];
    return (
      <Form name="dy-form">
        <Button onClick={this.onChange.bind(this)}>切换-{modelKey}</Button>
        {fieldList.map((item, index) => {
          return (
            <Field
              field={item.field}
              label={item.field}
              required={item.required}
              key={index}
            >
              {item.type == "input" ? (
                <Input />
              ) : (
                <Select>
                  <Select.Option value="1">选项1</Select.Option>
                  <Select.Option value="2">选项2</Select.Option>
                  <Select.Option value="3">选项3</Select.Option>
                </Select>
              )}
            </Field>
          );
        })}
        <Button onClick={this.onSubmit.bind(this)}>提交</Button>
      </Form>
    );
  }
}
