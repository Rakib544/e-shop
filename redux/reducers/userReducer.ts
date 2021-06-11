import * as actionTypes from '../constants/userConstants';
export const getUserInfoReducer = (state = { userInfo: [] }, action) => { 
    switch(action.type){
        case actionTypes.GET_USER_DATA: 
            return {
                ...state,
                userInfo: action.payload
            }
        default:
            return state
    }
}