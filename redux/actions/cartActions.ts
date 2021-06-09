import * as actionTypes from '../constants/cartConstants';

export const addToCart = (data) => async (dispatch, getState) => {
    dispatch({
        type: actionTypes.ADD_TO_CART,
        payload: data
    })
    localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems))
}

export const removeFromCart = id => async (dispatch, getState) => {
    dispatch({
        type: actionTypes.REMOVE_FROM_CART,
        payload: id
    })

    localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems))
}

export const loadDataFromLocalStorage = () => async (dispatch) => {
    dispatch({
        type: actionTypes.LOAD_DATA_FROM_LOCAL_STORAGE
    })
}

export const incrementorDecrementQty = data => async(dispatch, getState) => {
    dispatch({
        type: actionTypes.INCREMENT_OR_DECREMENT_QTY,
        payload: data
    })

    localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems))
}