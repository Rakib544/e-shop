import Link from "next/link";
import NavBar from "../components/Navbar/Navbar";

const Shipping = () => {
    return (
        <>
            <NavBar />
            <div className="w-1/2 mx-auto mt-8">
                <h1 className="text-4xl">SHIPPING</h1>
                <form className="mt-4">
                    <div className="my-3">
                        <label htmlFor="address">Address</label>
                        <input
                            className="block w-full px-4 py-3 border-0 focus:outline-none bg-gray-50 mt-2"
                            type="text"
                            placeholder="Enter Address"
                        />
                    </div>
                    <div className="my-3">
                        <label htmlFor="city">City</label>
                        <input
                            className="block w-full px-4 py-3 border-0 focus:outline-none bg-gray-50 mt-2"
                            type="text"
                            placeholder="Enter City"
                        />
                    </div>
                    <div className="my-3">
                        <label htmlFor="postal code">Postal Code</label>
                        <input
                            className="block w-full px-4 py-3 border-0 focus:outline-none bg-gray-50 mt-2"
                            type="text"
                            placeholder="Enter Postal Code"
                        />
                    </div>
                    <div className="my-3">
                        <label htmlFor="country">Country</label>
                        <input
                            className="block w-full px-4 py-3 border-0 focus:outline-none bg-gray-50 mt-2"
                            type="text"
                            placeholder="Enter Country"
                        />
                    </div>
                    <button
                        type="submit"
                        className="px-5 py-3 bg-gray-800 text-white my-4"
                    >
                        CONTINUE
                    </button>
                </form>
            </div>
        </>
    );
};

export default Shipping;