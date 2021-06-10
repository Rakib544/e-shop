import NavBar from "../components/Navbar/Navbar";

const AddProducts = () => {
    return (
        <>
            <NavBar />
            <div className="w-1/2 mx-auto mt-8">
                <h1 className="text-4xl">ADD PRODUCT</h1>
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
                        <label htmlFor="price">Price</label>
                        <input
                            className="block w-full px-4 py-3 border-0 focus:outline-none bg-gray-50 mt-2"
                            type="text"
                            placeholder="Price"
                        />
                    </div>
                    <div className="my-3">
                        <label htmlFor="image">Image</label>
                        <input
                            className="block w-full px-4 py-3 border-0 focus:outline-none bg-gray-50 mt-2"
                            type="file"
                        />
                    </div>
                    <div className="my-3">
                        <label htmlFor="brand">Brand</label>
                        <input
                            className="block w-full px-4 py-3 border-0 focus:outline-none bg-gray-50 mt-2"
                            type="text"
                            placeholder="Brand"
                        />
                    </div>
                    <div className="my-3">
                        <label htmlFor="stock">Count In Stock</label>
                        <input
                            className="block w-full px-4 py-3 border-0 focus:outline-none bg-gray-50 mt-2"
                            type="text"
                            placeholder="Count In Stock"
                        />
                    </div>
                    <div className="my-3">
                        <label htmlFor="description">Description</label>
                        <input
                            className="block w-full px-4 py-3 border-0 focus:outline-none bg-gray-50 mt-2"
                            type="text"
                            placeholder="Description"
                        />
                    </div>
                    <button
                        type="submit"
                        className="px-5 py-3 bg-gray-800 text-white my-4"
                    >
                        SAVE
                    </button>
                </form>
            </div>
        </>
    );
};

export default AddProducts;