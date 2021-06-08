import * as actionTypes from '../constants/cartConstants';
interface CartItems {
    products: {}[]
}

export const cartReducers = (state = {cartItems: []}, action) => {
    switch(action.type) {
        case actionTypes.ADD_TO_CART: 
            return {
                ...state,
                cartItems: [action.payload, ...state.cartItems]
            }
        case actionTypes.REMOVE_FROM_CART: 
            return {
                ...state,
                cartItems: state.cartItems.filter(x => x.product !== action.payload)
            }
        default: 
            return state
    }
}