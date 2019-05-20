import React from "react";
import kos from "kos-core";
import { Form, Field } from "kos-form-antd";
import { Button, Input } from "antd";
import FormInfo from "../../../components/form-info";

import model from "./model";

@kos.Wrapper({ model })
export default class FormInfoBase extends React.Component {
  render() {
    return (
      <FormInfo>
        <Form name="baseForm" scope="form-base">
          <Field field="name" label="姓名">
            <Input/>
          </Field>
          <Field field="age" label="年龄">
            <Input/>
          </Field>
        </Form>
      </FormInfo>
    );
  }
}
