import React from 'react';
import kos from 'kos-core';

import { formMiddleware } from 'kos-form';
import loggerMiddleware from 'redux-logger';

import LayoutApp from './layout/app';
import pages from './pages/';

kos.use(loggerMiddleware);
kos.use(formMiddleware);

const App = LayoutApp(pages);

kos.start(App);
