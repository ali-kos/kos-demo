import React from 'react';
import KOS from 'kos-core';
import { formMiddleware } from 'kos-form';

import loggerMiddleware from 'redux-logger';


import Layout from './layout/'

KOS.use(loggerMiddleware);
KOS.use(formMiddleware);


import pages from './pages/';

const LayoutApp = Layout({
  pages
});

KOS.start(LayoutApp);
