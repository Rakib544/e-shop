import React from 'react';
import NavBar from '../components/Navbar/Navbar';

const PlaceOrder = () => {
    return (
        <>
            <NavBar />
            <div className="w-4/5 mx-auto mt-8">
                <div className="flex flex-wrap justify-between">
                    <div className="w-9/12">
                        <div className="my-6">
                            <h1 className="text-2xl">SHIPPING</h1>
                            <p className="py-3">Address: Gazipur, Dhaka, Bangladesh</p>
                        </div>
                        <div className="my-6">
                            <h1 className="text-2xl">PAYMENT METHOD</h1>
                            <p className="py-3">Payment: Stripe</p>
                        </div>
                        <div className="my-6">
                            <h1 className="text-2xl">ORDERED ITEMS</h1>
                        </div>
                    </div>
                    <div>
                        <h1 className="text-2xl">ORDER SUMMARY</h1>
                        <div className="flex justify-between my-4">
                            <p>Items</p>
                            <p>$157</p>
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
                            <p>$200</p>
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