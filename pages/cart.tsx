import React, { useEffect } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import NavBar from '../components/Navbar/Navbar';
import { loadDataFromLocalStorage } from '../redux/actions/cartActions';


const Cart: React.FC = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadDataFromLocalStorage())
    }, [])

    const products = useSelector((state: RootStateOrAny) => state.cart.cartItems)
    return (
        <>
            <NavBar />
            <div className="px-10 sm:px-2 md:px-8 lg:px-10 py-10">
                <div className="flex flex-wrap -m-4 justify-between">
                    <div className="p-2 sm:w-1/2 md:w-1/2 order-2 sm:order-2 lg:order-1">
                        {
                            products?.map(product => <li>{product.name}</li>)
                        }
                    </div>
                    <div className="p-2 w-full sm:w-full lg:w-1/4 bg-gray-100 order-1 sm:order-1 lg:order-2">
                        <h2 className="text-2xl">Sub-Total (0) Items</h2>
                        <p className="text-lg mt-4 font-medium">$656</p>
                        <button className="bg-gray-800 text-white w-full py-3 mt-4">Proceed To Checkout</button>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Cart;