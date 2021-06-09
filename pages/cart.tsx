import React, { useEffect } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import NavBar from '../components/Navbar/Navbar';
import SingleCart from '../components/SingleCart/SingleCart';
import { loadDataFromLocalStorage } from '../redux/actions/cartActions';


const Cart: React.FC = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadDataFromLocalStorage())
    }, [])

    const products = useSelector((state: RootStateOrAny) => state.cart.cartItems)
    const subTotal = products?.reduce((sum, product) => sum + product.price, 0)

    return (
        <>
            <NavBar />
            <div className="px-2 sm:px-2 md:px-8 lg:px-10 py-10">
                <div className="flex flex-wrap justify-between">
                    <div className="px-0 sm:px-0 md:px-12 w-full sm:w-full md:w-3/4 lg:w-3/4">
                        {
                            products?.map(product => <SingleCart product={product} key={product._id} />)
                        }
                    </div>
                    <div className="p-2 w-full sm:w-full lg:w-1/4">
                        <h2 className="text-lg font-bold">Sub-Total ({products?.length}) Items</h2>
                        <p className="text-lg mt-4 font-medium">${subTotal}</p>
                        <button className="bg-gray-800 text-white w-full py-3 mt-4 text-xs tracking-wide">PROCEED TO CHECKOUT</button>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Cart;