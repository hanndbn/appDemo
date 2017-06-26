import {LOAD_PRODUCTS_SUCCESS} from '../constants/actionTypes';
import initialState from './initialState';
export default function productsReducer(state = initialState.products, action) {
  switch (action.type) {
    case LOAD_PRODUCTS_SUCCESS:
      return action.products;
    default:
      return state;
  }
}
