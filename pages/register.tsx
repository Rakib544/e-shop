import Link from "next/link";
import NavBar from "../components/Navbar/Navbar";

const Register = () => {
    return (
        <>
            <NavBar />
            <div className="w-1/2 mx-auto mt-8">
                <h1 className="text-4xl">SIGN UP</h1>
                <form className="mt-4">
                    <div className="my-3">
                        <label htmlFor="name">Name</label>
                        <input
                            className="block w-full px-4 py-3 border-0 focus:outline-none bg-gray-50 mt-2"
                            type="text"
                            placeholder="Enter Name"
                        />
                    </div>
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
                        REGISTER
                    </button>
                </form>
                <p>Already have an account ?
                    <Link href="/signin">
                        <a className="hover:underline"> Login</a>
                    </Link>
                </p>
            </div>
        </>
    );
};

export default Register;