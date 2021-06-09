import React, { useEffect, useState } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { loadDataFromLocalStorage } from '../redux/actions/cartActions';


const Cart:React.FC = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadDataFromLocalStorage())
    }, [])

    const products = useSelector((state: RootStateOrAny) => state.cart.cartItems)
    return (
        <div>
            {
                products?.map(product => <li>{product.name}</li>)
            }
        </div>
    );
};

export default Cart;