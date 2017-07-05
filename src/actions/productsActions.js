import * as types from '../constants/actionTypes';
import {} from '../constants/actionTypes';
import axios from 'axios';
import {browserHistory} from 'react-router'

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

export function clearProductsDetails() {
  return {
    type: types.CLEAR_PRODUCTS_DETAIL
  };
}



export function loadProducts() {
  return function (dispatch) {
    return axios.get('http://localhost:8080/api/getAllProduct')
      .then(function (response) {
        if(response.data.result) {
          dispatch(loadProductsSuccess(response.data.resultData))
        }else {
          browserHistory.push('/');
        }
      }).catch(function (error) {
        browserHistory.push('/');
        console.log(error);
      });
  };
}


export function loadProductDetail(id) {
  return function (dispatch) {
    dispatch(clearProductsDetails());
    return axios.get('http://localhost:8080/api/getProductById?id=' + id)
      .then(function (response) {
        if(response.data.result) {
          dispatch(loadProductsDetailSuccess(response.data.resultData));
        }else{
          browserHistory.push('/products');
        }
      }).catch(function (error) {
        browserHistory.push('/');
        console.log(error);
      });
  };
}
