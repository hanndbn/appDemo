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
    <IndexRoute component={HomePage}/>
    <Route path="home" component={HomePage}/>
    <Route path="products" component={ProductsPage}/>
    <Route path="productDetail" component={ProductDetailPage}/>
    <Route path="tintuc" component={TinTuc}/>
    <Route path="tintucDetail" component={TinTucDetail}/>
    <Route path="about" component={AboutPage}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);
