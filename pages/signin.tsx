import Link from "next/link";
import NavBar from "../components/Navbar/Navbar";

const SignIn = () => {
    return (
        <>
            <NavBar />
            <div className="w-1/2 mx-auto mt-8">
                <h1 className="text-4xl">SIGN IN</h1>
                <form className="mt-4">
                    <div className="my-3">
                        <label htmlFor="email">Email Address</label>
                        <input
                            className="block w-full px-4 py-3 border-0 focus:outline-none bg-gray-50 mt-2"
                            type="text"
                            placeholder="Enter Email"
                        />
                    </div>
                    <div className="my-3">
                        <label htmlFor="password">Password</label>
                        <input
                            className="block w-full px-4 py-3 border-0 focus:outline-none bg-gray-50 mt-2"
                            type="password"
                            placeholder="Enter Password"
                        />
                    </div>
                    <button 
                        type="submit"
                        className="px-5 py-3 bg-gray-800 text-white my-4"
                    >
                        SIGN IN
                    </button>
                </form>
                <p>New Customer ? 
                    <Link href="/register">
                        <a className="hover:underline">Register Now</a>
                    </Link>
                </p>
            </div>
        </>
    );
};

export default SignIn;

