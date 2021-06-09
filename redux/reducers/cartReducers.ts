import * as actionTypes from '../constants/cartConstants';
interface CartItems {
    products: {}[]
}

export const loadLocalStorageData = () => {
    //basically next.js runs both server and client. And in server side local-storage is not available. That's why I check this.
    const IsServer = typeof window === "undefined";
    if (!IsServer) {
        const localStorageData = JSON.parse(localStorage.getItem('cart'))
        return localStorageData;
    }
}

export const cartReducers = (state = { cartItems: [] }, action) => {
    switch (action.type) {
        case actionTypes.ADD_TO_CART:  
            return {
                ...state,
                cartItems: [action.payload, ...state.cartItems]
            }

        case actionTypes.REMOVE_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter(x => x._id !== action.payload)
            }

        case actionTypes.LOAD_DATA_FROM_LOCAL_STORAGE: 
    
            return{
                ...state,
                cartItems: loadLocalStorageData()
            }
        case actionTypes.INCREMENT_OR_DECREMENT_QTY: 
            const filterProduct = state.cartItems.filter(product => product._id !== action.payload._id)
            return {
                ...state,
                cartItems: [action.payload, ...filterProduct]
            }
        default:
            return state
    }
}