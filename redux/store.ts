import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { cartReducers } from "./reducers/cartReducers";
import { getProductDetailsReducer, getProductReducers } from "./reducers/productReducers";

const reducer = combineReducers({
    cart: cartReducers,
    getProducts: getProductReducers,
    getProductDetails: getProductDetailsReducer
})

const middleware = [thunk]

export const store = createStore(
    reducer, 
    composeWithDevTools(applyMiddleware(...middleware))
)