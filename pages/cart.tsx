import React, { useEffect } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import NavBar from '../components/Navbar/Navbar';
import SingleCart from '../components/SingleCart/SingleCart';
import { loadDataFromLocalStorage } from '../redux/actions/cartActions';
import Link from 'next/link';
import { useRouter } from 'next/router';


const Cart: React.FC = () => {

    const router = useRouter();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadDataFromLocalStorage())
    }, [])

    const products = useSelector((state: RootStateOrAny) => state.cart.cartItems)
    const subTotal = products?.reduce((sum, product) => sum + (product.price * product.qty), 0)

    const userData = useSelector((state: RootStateOrAny) => state.userInfo.userInfo);

    return (
        <>
            <NavBar />
            <div className="px-2 sm:px-2 md:px-8 lg:px-10 py-10">
                <div className="flex flex-wrap justify-between">
                    <div className="px-0 sm:px-0 md:px-12 w-full sm:w-full md:w-3/4 lg:w-3/4">
                        {
                            products.length === 0
                            ? <h3>You don't have any products on the cart. <Link href="/"><a className="hover:underline">Back to Home</a></Link></h3>
                            : products?.map(product => <SingleCart product={product} key={product._id} />)
                        }
                    </div>
                    <div className="p-2 w-full sm:w-full lg:w-1/4">
                        <h2 className="text-lg font-bold">Sub-Total ({products?.length}) Items</h2>
                        <p className="text-lg mt-4 font-medium">${subTotal.toFixed(2)}</p>
                        <button 
                            className="bg-gray-800 text-white w-full py-3 mt-4 text-xs tracking-wide"
                            onClick={() => router.push(userData.name ? '/shipping' : '/signin')}
                        >
                            PROCEED TO CHECKOUT
                        </button>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Cart;