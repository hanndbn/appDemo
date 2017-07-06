import {LOAD_PRODUCTS_SUCCESS} from '../constants/actionTypes';
import initialState from './initialState';
import objectAssign from 'object-assign';
export default function productsReducer(state = initialState.products, action) {
  switch (action.type) {
    case LOAD_PRODUCTS_SUCCESS:
      return objectAssign({}, state, {data : action.data, numberPage : action.numberPage});
    default:
      return state;
  }
}
