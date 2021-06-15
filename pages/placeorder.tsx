import React from 'react';
import { RootStateOrAny, useSelector } from 'react-redux';
import NavBar from '../components/Navbar/Navbar';

const PlaceOrder = (): JSX.Element => {
    const data = useSelector((state: RootStateOrAny) => state)

    const { shippingData } = data.userInfo;
    const { address, postalCode, country, city } = shippingData;

    const subTotal = data.cart.cartItems?.reduce((sum:number, item):number => sum + (parseInt(item.price) * parseInt(item.qty)), 0)
    return (
        <>
            <NavBar />
            <div className="w-4/5 mx-auto mt-8">
                <div className="flex flex-wrap justify-between">
                    <div className="w-9/12">
                        <div className="my-6">
                            <h1 className="text-2xl">SHIPPING</h1>
                            <p className="py-3">Address: {postalCode}, {address}, {city}, {country}</p>
                        </div>
                        <div className="my-6">
                            <h1 className="text-2xl">PAYMENT METHOD</h1>
                            <p className="py-3">Payment: Stripe</p>
                        </div>
                        <div className="my-6">
                            <h1 className="text-2xl">ORDERED ITEMS</h1>
                            {
                                data.cart.cartItems?.map(product => (
                                    <div className="flex justify-between items-center flex-wrap mt-2">
                                        <div className="w-1/6">
                                            <img src={product.imageURL} alt={product.name} height={80} width={80} />
                                        </div>
                                        <div className="w-1/3 text-xs md:text-base font-medium">
                                            {product.name}
                                        </div>
                                        <div className="w-1/6 text-xs md:text-base font-medium">
                                            {product.qty} x ${product.price} = {product.qty * product.price}
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div>
                        <h1 className="text-2xl">ORDER SUMMARY</h1>
                        <div className="flex justify-between my-4">
                            <p>Items</p>
                            <p>${subTotal}</p>
                        </div>
                        <div className="flex justify-between my-4">
                            <p>Shipping</p>
                            <p>$15</p>
                        </div>
                        <div className="flex justify-between my-4">
                            <p>Tax</p>
                            <p>$10</p>
                        </div>
                        <div className="flex justify-between my-4">
                            <p>Total</p>
                            <p>${subTotal + 15 + 10}</p>
                        </div>
                        <button className="w-full px-5 py-3 bg-gray-800 text-white my-4">
                            PLACE ORDER
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PlaceOrder;