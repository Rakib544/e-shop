import * as actionsType from '../constants/userConstants';
export const storeUserInfo = (payload) => {
    return {
        type: actionsType.GET_USER_DATA,
        payload
    }
}

export const getShippingData = payload => {
    return {
        type: actionsType.GET_SHIPPING_DATA,
        payload
    }
}