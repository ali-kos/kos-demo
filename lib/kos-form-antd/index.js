import * as KosForm from 'kos-form';
import { Form as AntDForm } from 'antd';


const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

export const Field = KosForm.FieldHOC({
  FieldWrapper: AntDForm.Item,
  FieldProps: formItemLayout
});

export const ToolbarField = KosForm.FieldHOC({
  FieldWrapper: AntDForm.Item,
  FieldProps: tailFormItemLayout
});

export const Form = KosForm.Form;

