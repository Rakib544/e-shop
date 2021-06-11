import * as actionsType from '../constants/userConstants';
export const storeUserInfo = (payload) => {
    return {
        type: actionsType.GET_USER_DATA,
        payload
    }
}