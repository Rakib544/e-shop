const Footer: React.FC = () => {
    return (
        <section className="md:h-full flex items-center bg-gray-900">
            <div className="container px-10 py-20 sm:py-14 mx-auto" >
                <div className="flex flex-wrap -m-4" >
                    <div className="p-2 sm:w-1/2 lg:w-1/4" >
                        <div className="h-full text-white p-4 overflow-hidden" >
                            <div className="py-3 lg:text-left xs:text-center sm:text-center" >
                                <h2 className="text-lg mb-3 font-bold"> About Us </h2>
                                <p className="text-sm">
                                    Welcome to e-shop. Lorem ipsum dolor sit amet, adipiscing condimentum tristique vel, eleifend sed turpis. Amet, consectetur adipising elit Integer.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="p-2 sm:w-1/2 lg:w-1/4" >
                        <div className="h-full text-white p-4 overflow-hidden" >
                            <div className="py-3" >
                                <h4 className="text-lg mb-3 font-bold" > My Account </h4>
                                <p className="text-sm mb-1 cursor-pointer hover:text-blue-300 hover:underline">My Account</p>
                                <p className="text-sm mb-1 cursor-pointer hover:text-blue-300 hover:underline">Order History</p>
                                <p className="text-sm mb-1 cursor-pointer hover:text-blue-300 hover:underline">Wish List</p>
                            </div>
                        </div>
                    </div>
                    <div className="p-2 sm:w-1/2 lg:w-1/4" >
                        <div className="h-full text-white p-4 overflow-hidden" >
                            <div className="py-3" >
                                <h4 className="text-lg mb-3 font-bold" > Information </h4>
                                <p className="text-sm mb-1 cursor-pointer hover:text-blue-300 hover:underline">About Us</p>
                                <p className="text-sm mb-1 cursor-pointer hover:text-blue-300 hover:underline">Delivery Information</p>
                                <p className="text-sm mb-1 cursor-pointer hover:text-blue-300 hover:underline">Privacy Policy</p>
                                <p className="text-sm mb-1 cursor-pointer hover:text-blue-300 hover:underline">Terms and condition</p>
                            </div>
                        </div>
                    </div>
                    <div className="p-2 sm:w-1/2 lg:w-1/4" >
                        <div className="h-full text-white p-4 overflow-hidden" >
                            <div className="py-3" >
                                <h4 className="text-lg mb-3 font-bold" > Customer Service</h4>
                                <p className="text-sm mb-1 cursor-pointer hover:text-blue-300 hover:underline">Contact Us</p>
                                <p className="text-sm mb-1 cursor-pointer hover:text-blue-300 hover:underline">Returns</p>
                                <p className="text-sm mb-1 cursor-pointer hover:text-blue-300 hover:underline">Site Map</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;