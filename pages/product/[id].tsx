import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import Preloader from '../../components/Preloader/Preloader';
import { addToCart } from '../../redux/actions/cartActions';
import { getProductDetails } from '../../redux/actions/productActions';
const ProductDetails: React.FC = () => {
    const router = useRouter()
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(getProductDetails(router.query.id))
    }, [])

    const state = useSelector((state: RootStateOrAny) => {
        console.log(state)
        return state.getProductDetails
    });
    
    const { product, loading, error } = state;
    return (
        <div>
            {
                loading
                    ? <Preloader />
                    : (
                        <div className="container-lg px-8 py-14 mx-auto">
                            <div className="flex flex-wrap -m-4">
                                <div className="p-2 sm:w-1/2 lg:w-1/3" >
                                    <img className="w-full h-full" src={product.img} alt={product.name} />
                                </div>
                                <div className="p-2 sm:w-1/2 lg:w-1/3" >
                                    <h2 className="text-lg font-medium tracking-wide py-4">{product.name}</h2>
                                    <h4 className="py-4 text-md tracking-wide">Price: ${product.price}</h4>
                                    <p>{product.features?.map((feature, index) => <li key={index}>{feature.description} - {feature.value}</li>)}</p>
                                </div>
                                <div className="p-2 sm:w-1/2 md:w-full lg:w-1/4 shadow-sm" >
                                    <div className="p-4">
                                        <div className="flex justify-between">
                                            <p>Price</p>
                                            <p>${product.price}</p>
                                        </div>
                                        <div className="flex justify-between">
                                            <p>Status</p>
                                            <p>{product.stock ? 'In Stock': 'Out Of Stock'}</p>
                                        </div>
                                        <button onClick={() => dispatch(addToCart(product))} className="bg-gray-900 text-white w-full py-3 mt-10 hover:bg-opacity-80 rounded">ADD TO CART</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
            }
        </div>
    );
};

export default ProductDetails;