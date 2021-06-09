import React from 'react';
import { useDispatch } from 'react-redux';
import { Products } from '../../pages';
import { removeFromCart } from '../../redux/actions/cartActions';
type Props = {
    product: Products
}
const SingleCart: React.FC<Props> = ({ product }) => {
    const dispatch = useDispatch();
    return (
        <div className="flex justify-between items-center flex-wrap m-4">
            <div className="w-1/6">
                <img src={product.img} alt={product.name} />
            </div>
            <div className="w-1/3">
                {product.name.slice(0, 50)}
            </div>
            <div className="w-1/6">
                {product.price}
            </div>
            <div className="w-1/5 flex justify-between items-center">
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                    </svg>
                </button>
                <span>0</span>
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                </button>
            </div>
            <div className="w-1/7">
                <button onClick={() => dispatch(removeFromCart(product._id))}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="black" viewBox="0 0 24 24" stroke="white">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default SingleCart;