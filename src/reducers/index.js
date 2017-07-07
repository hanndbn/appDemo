import { combineReducers } from 'redux';
import fuelSavings from './fuelSavingsReducer';
import products from './productsReducer';
import productDetail from './productDetailReducer';
import newsDetail from './newsDetailReducer';
import news from './newsReducer';
import categories from './categoriesReducer';
import {routerReducer} from 'react-router-redux';

const rootReducer = combineReducers({
  fuelSavings,
  products,
  productDetail,
  newsDetail,
  news,
  categories,
  routing: routerReducer
});

export default rootReducer;
