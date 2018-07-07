import kos from 'kos-core';

import LayoutSPA from './src/layout-spa';
import LayoutMPA from './src/layout';

import model from './model';

import './style.less';


const createLayout = ({ pages, PageComponent }) => {
  if (pages) {
    return LayoutSPA(pages);
  }

  return LayoutMPA(PageComponent);
}


export default ({ pages, PageComponent }) => {
  const Layout = createLayout({
    pages,
    PageComponent
  });

  return KOS.Wrapper({ model })(Layout);
}
