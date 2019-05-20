import React from "react";
import { Form, Field } from "../../../../lib/kos-form-antd";
// import { Form, Field } from "kos-form-antd";
import { Input, Select, Button, InputNumber, Switch } from "antd";
import kos from "kos-core";

import model from "./model";

import "./style.less";

@kos.Wrapper({ model })
class FormValidate extends React.PureComponent {
  onValidateField(field) {
    const form = this.props.getForm("testform");
    form &&
      form.validateField("name", result => {
        console.log(result);
      });
  }
  onSubmitForm() {
    const form = this.props.getForm("testform");
    form &&
      form.validate(result => {
        console.log(result);
      });
  }
  onResetForm() {
    const form = this.props.getForm("testform");
    form && form.reset();
  }
  onDisableFieldValidator(field, disable) {
    const form = this.props.getForm("testform");
    form && form.disableFieldValidator(field, disable);
  }
  onDisableFieldValidatorRule(field, disable) {
    const form = this.props.getForm("testform");
    form && form.disableFieldValidatorRule(field, "email", disable);
  }
  onClearFormValidateStatus() {
    const form = this.props.getForm("testform");
    form && form.clearValidate();
  }
  onClearFieldValidateStatus(field) {
    const form = this.props.getForm("testform");
    form && form.clearFieldValidate(field);
  }
  render() {
    return (
      <div className="kos-demo-form" style={{ width: 600 }}>
        <Form name="testform">
          <Field label="姓名：" field="name" required>
            <Input
              onChange={e => {
                console.log("来自自定义的onChange：", e.target.value);
              }}
            />
          </Field>
          <Field label="学历" field="degree" required>
            <Select>
              <Select.Option value="High school">高中</Select.Option>
              <Select.Option value="Undergraduate">本科</Select.Option>
              <Select.Option value="Graduate">研究生</Select.Option>
              <Select.Option value="Doctor">博士</Select.Option>
            </Select>
          </Field>
          <Field
            label="年龄"
            field="age"
            required
            validator={[
              {
                name: "regexp",
                data: /^[\u4e00-\u9fa5]*$/,
                help: "必须是中文"
              }
            ]}
          >
            <InputNumber />
          </Field>
          <Field label="性别" field="sex" valuePropName="checked">
            <Switch />
          </Field>
          <Field label="简介：" field="desc">
            <Input.TextArea />
          </Field>
          <div>
            <Button onClick={this.onSubmitForm.bind(this)}>提交</Button>
            <Button onClick={this.onValidateField.bind(this)}>校验姓名</Button>
            <Button
              onClick={this.onDisableFieldValidator.bind(this, "name", true)}
            >
              禁用姓名校验
            </Button>
            <Button
              onClick={this.onDisableFieldValidator.bind(this, "name", false)}
            >
              启用姓名校验
            </Button>
            <Button
              onClick={this.onDisableFieldValidatorRule.bind(
                this,
                "name",
                true
              )}
            >
              禁用姓名校验的email校验
            </Button>
            <Button
              onClick={this.onDisableFieldValidatorRule.bind(
                this,
                "name",
                false
              )}
            >
              启用姓名校验的email校验
            </Button>
            <Button onClick={this.onClearFormValidateStatus.bind(this)}>
              清空表单校验状态
            </Button>
            <Button
              onClick={this.onClearFieldValidateStatus.bind(this, "name")}
            >
              清空姓名字段的校验状态
            </Button>
            <Button onClick={this.onResetForm.bind(this)}>重置表单</Button>
          </div>
        </Form>
      </div>
    );
  }
}

export default FormValidate;
