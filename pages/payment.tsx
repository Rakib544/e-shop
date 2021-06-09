import React from 'react';
import NavBar from '../components/Navbar/Navbar';

const Payment = () => {
    return (
        <>
            <NavBar />
            <div className="w-1/2 mx-auto mt-8">
                <h1 className="text-4xl">PAYMENT METHOD</h1>
                <h1 className="text-2xl my-4">Select Method</h1>
                <input type="radio" checked /> Stripe
                <button
                    className="block px-5 py-3 bg-gray-800 text-white my-4"
                >
                    CONTINUE
                </button>
            </div>
        </>
    );
};

export default Payment;