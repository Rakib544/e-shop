import { useRouter } from "next/router";
import NavBar from "../components/Navbar/Navbar";
import { useForm } from "react-hook-form";

const Shipping = (): JSX.Element => {
    const router = useRouter();
    console.log(router)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
        router.push('/payment')
    };
    return (
        <>
            <NavBar />
            <div className="w-1/2 mx-auto mt-8">
                <h1 className="text-4xl">SHIPPING</h1>
                <form
                    className="mt-4"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <div className="my-3">
                        <label htmlFor="address">Address</label>
                        <input
                            className="block w-full px-4 py-3 border-0 focus:outline-none bg-gray-50 mt-2"
                            type="text"
                            placeholder="Enter Address"
                            name="address"
                            ref={register({ required: true })}
                        />
                    </div>
                    <div className="my-3">
                        <label htmlFor="city">City</label>
                        <input
                            className="block w-full px-4 py-3 border-0 focus:outline-none bg-gray-50 mt-2"
                            type="text"
                            placeholder="Enter City"
                            name="city"
                            ref={register({ required: true })}
                        />
                    </div>
                    <div className="my-3">
                        <label htmlFor="postal code">Postal Code</label>
                        <input
                            className="block w-full px-4 py-3 border-0 focus:outline-none bg-gray-50 mt-2"
                            type="text"
                            placeholder="Enter Postal Code"
                            name="postalCode"
                            ref={register({ required: true })}
                        />
                    </div>
                    <div className="my-3">
                        <label htmlFor="country">Country</label>
                        <input
                            className="block w-full px-4 py-3 border-0 focus:outline-none bg-gray-50 mt-2"
                            type="text"
                            placeholder="Enter Country"
                            name="country"
                            ref={register({ required: true })}
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