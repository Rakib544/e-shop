import * as actionTypes from '../constants/cartConstants';

export const addToCart = (data) => async (dispatch, getState) => {
    console.log(data)
    dispatch({
        type: actionTypes.ADD_TO_CART,
        payload: data
    })

    localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems))
}

export const removeFromCart = id => (getState, dispatch) => {
    dispatch({
        type: actionTypes.REMOVE_FROM_CART,
        payload: id
    })

    localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems))
}