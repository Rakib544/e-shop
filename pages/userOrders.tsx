import { useState } from "react";
import { useEffect } from "react";
import { RootStateOrAny, useSelector } from "react-redux";
import NavBar from "../components/Navbar/Navbar";
const userOrders = () => {
    const [orders, setOrders] = useState([]);
    const email = useSelector((state: RootStateOrAny) => state.userInfo.userInfo.email);

    useEffect(() => {
        if (email) {
            fetch('http://localhost:8080/userOrders', {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify({ email })
            })
                .then(res => res.json())
                .then(data => setOrders(data))
        }
    }, [email])

    return (
        <>
            <NavBar />
            <div className="w-3/4 mx-auto my-6">
                <h2 className="text-3xl my-4">YOUR PREVIOUS ORDERS</h2>
                <div className="flex justify-between items-center flex-wrap mt-12 px-4">
                    <div className="w-1/4 text-xs md:text-base font-medium mb-4">
                        <p>ID</p>
                    </div>
                    <div className="w-1/3 text-xs md:text-base font-medium mb-4">
                        <p>Name</p>
                    </div>
                    <div className="w-1/7 text-xs md:text-base font-medium mb-4">
                        <p>Total</p>
                    </div>
                    <div className="w-1/7 text-xs md:text-base font-medium mb-4">
                        <p>Order Date</p>
                    </div>
                    <div className="w-1/7 text-xs md:text-base font-medium mb-4">
                        <p>Delivered</p>
                    </div>
                </div>
                {
                    orders?.map((order, index) => (
                        <div
                            className={index % 2 === 0
                                ? 'flex justify-between items-center flex-wrap bg-gray-100 py-8 px-4'
                                : 'flex justify-between items-center flex-wrap py-8 px-4'}
                            key={order._id}
                        >
                            <div className="w-1/4">
                                <p>{order._id}</p>
                            </div>
                            {/* <div className="w-1/3 text-xs md:text-base">
                                <p>{product.name}</p>
                            </div>
                            <div className="w-1/7 text-xs md:text-base">
                                <p>${product.price}</p>
                            </div>
                            <div className="w-1/7 text-xs md:text-base">
                                <p>{product.brand}</p>
                            </div> */}
                        </div>
                    ))
                }
            </div>
        </>
    );
};

export default userOrders;