import Countter from './count/';
import NotMatch from './404/';

// {
// path: '/',
// Component: Home,
// title: '首页'
// }

export default [{
  path: '/countter',
  Component: Countter,
  layout: 'leftmenu',
  title: '计算器'
}, {
  path: '/404',
  Component: NotMatch,
  title: '404'
}];


