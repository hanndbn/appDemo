import * as types from '../constants/actionTypes';
import axios from 'axios';

export function loadProductsSuccess(products) {
  return {
    type: types.LOAD_PRODUCTS_SUCCESS,
    products
  };
}


export function loadProducts() {
  return function (dispatch) {
    return axios.post('http://localhost:8080/api/getAllProduct')
      .then(function (response) {
        dispatch(loadProductsSuccess(response.data.resultData))
        console.log(response);
      }).catch(function (error) {
        console.log(error);
      });
  };
}
