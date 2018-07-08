import React from 'react';
import kos from 'kos-core';

import { formMiddleware } from 'kos-form';
import loggerMiddleware from 'redux-logger';

import { AppCreator } from './layout-n/app';
import pages from './pages/';

kos.use(loggerMiddleware);
kos.use(formMiddleware);

const App = AppCreator(pages);

kos.start(App);
