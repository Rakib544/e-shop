import { useDispatch } from 'react-redux';
import { Products } from '../../pages';
import { incrementorDecrementQty, removeFromCart } from '../../redux/actions/cartActions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons'

type Props = {
    product: Products
}
const SingleCart = ({ product }: Props) => {
    const dispatch = useDispatch();

    const handleDecrement = (): void => {
        if (product.qty > 1) {
            const data = {
                ...product,
                qty: product.qty - 1
            }
            dispatch(incrementorDecrementQty(data))
        }
    }

    const handleIncrement = (): void => {
        const data = {
            ...product,
            qty: product.qty + 1
        }
        dispatch(incrementorDecrementQty(data))
    }

    return (
        <div className="flex justify-between items-center flex-wrap mt-2">
            <div className="w-1/6">
                <img src={product.img} alt={product.name} />
            </div>
            <div className="w-1/3 text-xs md:text-base font-medium">
                {product.name.slice(0, 50)}
            </div>
            <div className="w-1/6 text-xs md:text-base font-medium">
                ${product.price}
            </div>
            <div className="w-1/5 flex justify-center items-center">
                <button className="mr-3 text-xs md:text-lg" onClick={handleDecrement}>
                    <FontAwesomeIcon icon={faMinus} />
                </button>
                <span className="p-2">{product.qty}</span>
                <button className="ml-3 text-xs md:text-lg" onClick={handleIncrement}>
                    <FontAwesomeIcon icon={faPlus} />
                </button>
            </div>
            <div className="w-1/7 bg-gray-100 ml-2">
                <button onClick={() => dispatch(removeFromCart(product._id))}>
                    <FontAwesomeIcon icon={faTrash} className="text-red-600" />
                </button>
            </div>
        </div>
    );
};

export default SingleCart;