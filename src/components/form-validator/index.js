import * as KOSValidator from '../kos-form-validator';
import { Form } from 'antd';
const FormItem = Form.Item;

export default {
  ...KOSValidator,
  Field: KOSValidator.FieldHOC(FormItem)
};
