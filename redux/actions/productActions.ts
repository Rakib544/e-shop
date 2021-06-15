import { Dispatch } from 'redux';
import * as actionTypes from '../constants/productsConstants';

export const getProducts = () => async(dispatch:Dispatch) => {
    try{
        dispatch({type: actionTypes.GET_PRODUCTS_REQUEST})

        const res = await fetch('http://localhost:8080/allProducts')
        const data = await res.json();
        dispatch({
            type: actionTypes.GET_PRODUCTS_SUCCESS,
            payload: data
        })
    } catch(error)  {
        dispatch({
            type: actionTypes.GET_PRODUCTS_FAIL,
            payload: error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        })
    }
}

export const getProductDetails = id => async (dispatch) => {
    try{
        dispatch({type: actionTypes.GET_PRODUCT_DETAILS_REQUEST})

        const res = await fetch(`http://localhost:8080/findSingleProduct/${id}`)
        const data = await res.json()
        
        dispatch({
        type: actionTypes.GET_PRODUCT_DETAILS_SUCCESS,
        payload: data
        })
        
    }catch(error) {
        dispatch({
            type: actionTypes.GET_PRODUCT_DETAILS_FAIL,
            payload: 
                error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })
    }
}