import {LOAD_PRODUCTS_SUCCESS, LOAD_TOP_PRODUCTS_SUCCESS, CLEAR_PRODUCTS, SET_CURRENT_PAGE} from '../constants/actionTypes';
import initialState from './initialState';
import objectAssign from 'object-assign';
export default function productsReducer(state = initialState.products, action) {
  switch (action.type) {
    case LOAD_PRODUCTS_SUCCESS:
      return objectAssign({}, state, {data : action.data, numberPage : action.numberPage});
    case LOAD_TOP_PRODUCTS_SUCCESS:
      return objectAssign({}, state, {topProducts : action.topProducts});
    case CLEAR_PRODUCTS:
      return objectAssign({}, state, {data : [],  numberPage : 1, currentPage : 1});
    case SET_CURRENT_PAGE:
      return objectAssign({}, state, {currentPage : action.currentPage});
    default:
      return state;
  }
}
