import NavBar from "../components/Navbar/Navbar";
import { useForm } from "react-hook-form";

const addAdmin = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        fetch('http://localhost:8080/addAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ data })
        })
    };

    return (
        <>
            <NavBar />
            <div className="w-1/2 mx-auto mt-8">
                <h1 className="text-4xl">ADD ADMIN</h1>
                <form
                    className="mt-4"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <div className="my-3">
                        <label htmlFor="email">Email Address</label>
                        <input
                            className="block w-full px-4 py-3 border-0 focus:outline-none bg-gray-50 mt-2"
                            type="text"
                            placeholder="Enter Email"
                            name="email"
                            ref={register({ required: true })}
                        />
                    </div>
                    <button
                        type="submit"
                        className="px-5 py-3 bg-gray-800 text-white my-4 rounded"
                    >
                        ADD
                    </button>
                </form>
            </div>
        </>
    );
};

export default addAdmin;