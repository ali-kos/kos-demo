import Home from './home/';
import Countter from './count/';
import FormValidate from './form-validate/';

export default [{
  path: '/',
  Component: Home,
  title: 'Kos Demo Center'
},{
  path: '/form-validate',
  Component: FormValidate,
  layout: 'leftmenu',
  title: '表单校验'
}, {
  path: '/countter',
  Component: Countter,
  layout: 'leftmenu',
  title: '计算器'
}];


