import * as types from '../constants/actionTypes';
import axios from 'axios';

export function loadProductsSuccess(products) {
  return {
    type: types.LOAD_PRODUCTS_SUCCESS,
    products
  };
}

export function loadProductsDetailSuccess(productDetail) {
  return {
    type: types.LOAD_PRODUCT_DETAIL_SUCCESS,
    productDetail
  };
}


export function loadProducts() {
  return function (dispatch) {
    return axios.get('http://localhost:8080/api/getAllProduct')
      .then(function (response) {
        dispatch(loadProductsSuccess(response.data.resultData))
        console.log(response);
      }).catch(function (error) {
        console.log(error);
      });
  };
}

export function loadProductDetail(id) {
  return function (dispatch) {
    return axios.get('http://localhost:8080/api/getProductById?id=' + id)
      .then(function (response) {
        dispatch(loadProductsDetailSuccess(response.data.resultData));
        console.log(response);
      }).catch(function (error) {
        console.log(error);
      });
  };
}
