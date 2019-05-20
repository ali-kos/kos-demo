import React from "react";
import kos from "kos-core";

import { formMiddleware } from "kos-form";
import loggerMiddleware from "redux-logger";

import LayoutApp from "./layout/app";
import pages from "./pages/";

import 'antd/dist/antd.less';


kos.use(loggerMiddleware);
kos.use(formMiddleware);
// kos.use(m1);
// kos.use(m2);

const App = LayoutApp(pages);

kos.start(App);
