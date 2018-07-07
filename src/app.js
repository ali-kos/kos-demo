import React from 'react';
import kos from 'kos-core';
import { formMiddleware } from 'kos-form';

import loggerMiddleware from 'redux-logger';


import Layout from './layout/'

kos.use(loggerMiddleware);
kos.use(formMiddleware);


import pages from './pages/';

const LayoutApp = Layout({
  pages
});

kos.start(LayoutApp);
