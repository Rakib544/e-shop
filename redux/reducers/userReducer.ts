import * as actionTypes from '../constants/userConstants';

const initialState = {
    userInfo: [],
    shippingData: {},
}
export const getUserInfoReducer = (state = initialState, action) => { 
    switch(action.type){
        case actionTypes.GET_USER_DATA: 
            return {
                ...state,
                userInfo: action.payload
            }
        case actionTypes.GET_SHIPPING_DATA: 
            return {
                ...state,
                shippingData: action.payload
            }
        default:
            return state
    }
}