import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import ProductsPage from './containers/ProductsPage';
import ProductDetailPage from './containers/ProductDetailPage';
import HomePage from './containers/HomePage';
import TinTuc from './containers/TinTuc'; // eslint-disable-line import/no-named-as-default
import TinTucDetail from './containers/TinTucDetail'; // eslint-disable-line import/no-named-as-default
import AboutPage from './components/AboutPage';
import NotFoundPage from './components/NotFoundPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={ProductsPage}/>
    <Route path="home" component={HomePage}/>
    <Route path="products" component={ProductsPage}/>
    <Route path="products/:id" component={ProductDetailPage}/>
    <Route path="tintuc" component={TinTuc}/>
    <Route path="tintuc/:id" component={TinTucDetail}/>
    <Route path="about" component={AboutPage}/>
    <Route path="404" component={NotFoundPage}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);
