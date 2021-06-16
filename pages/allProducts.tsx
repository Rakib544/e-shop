import { useEffect } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { getProducts } from "../redux/actions/productActions";
import NavBar from "../components/Navbar/Navbar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react";

const allProducts = () => {
    const dispatch = useDispatch();
    const [clicked, setClicked] = useState<number>(1)

    const handleDeleteProduct = (id: string) => {
        setClicked(clicked + 1);
        fetch('http://localhost:8080/delete', {
            method: 'DELETE',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ id })
        });
    }

    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch, clicked])

    const data = useSelector((state: RootStateOrAny) => state.getProducts)
    const { loading, products } = data;

    return (
        <>
            <NavBar />
            <div className="w-3/4 mx-auto my-6">
                <h2 className="text-3xl my-4">PRODUCTS</h2>
                <div className="flex justify-between items-center flex-wrap mt-12 px-4">
                    <div className="w-1/4 text-xs md:text-base font-medium mb-4">
                        <p>ID</p>
                    </div>
                    <div className="w-1/3 text-xs md:text-base font-medium mb-4">
                        <p>Name</p>
                    </div>
                    <div className="w-1/7 text-xs md:text-base font-medium mb-4">
                        <p>Price</p>
                    </div>
                    <div className="w-1/7 text-xs md:text-base font-medium mb-4">
                        <p>Category</p>
                    </div>
                    <div className="w-1/7 text-xs md:text-base font-medium mb-4">
                        <p>Action</p>
                    </div>
                </div>
                {
                    loading
                        ? <p>Loading...</p>
                        : products?.map((product, index) => (
                            <div
                                className={index % 2 === 0
                                    ? 'flex justify-between items-center flex-wrap bg-gray-100 py-8 px-4'
                                    : 'flex justify-between items-center flex-wrap py-8 px-4'}
                                key={product._id}
                            >
                                <div className="w-1/4">
                                    <p>{product._id}</p>
                                </div>
                                <div className="w-1/3 text-xs md:text-base">
                                    <p>{product.name}</p>
                                </div>
                                <div className="w-1/7 text-xs md:text-base">
                                    <p>${product.price}</p>
                                </div>
                                <div className="w-1/7 text-xs md:text-base">
                                    <p>{product.brand}</p>
                                </div>
                                <div className="w-1/7 text-xs md:text-base">
                                    <FontAwesomeIcon icon={faEdit} className="mr-2 cursor-pointer" />
                                    <FontAwesomeIcon
                                        icon={faTrash}
                                        className="cursor-pointer"
                                        onClick={() => handleDeleteProduct(product._id)}
                                    />
                                </div>
                            </div>
                        ))
                }
            </div>
        </>
    );
};

export default allProducts;