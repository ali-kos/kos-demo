import Home from "./home/";
import Countter from "./count/";
import FormValidate from "./form/base-validate/";
import FormInfoBase from "./form/base/";
import DyForm from "./form/dy-form/";

export default [
  {
    path: "/",
    Component: Home,
    title: "Kos Demo Center",
    layout: "leftmenu"
  },
  {
    path: "/form/base-validate",
    Component: FormValidate,
    layout: "leftmenu",
    title: "表单校验"
  },
  {
    path: "/form/info-base",
    Component: FormInfoBase,
    layout: "leftmenu",
    title: "基础表单"
  },
  {
    path: "/countter",
    Component: Countter,
    layout: "leftmenu",
    title: "计算器"
  },
  {
    path: "/form/dy-form",
    Component: DyForm,
    layout: "leftmenu",
    title: "动态表单"
  }
];
