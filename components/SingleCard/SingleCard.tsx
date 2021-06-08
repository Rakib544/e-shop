import Link from 'next/link';
import { Products } from "../../pages"
type Props = {
    product: Products,

}
export const SingleCard: React.FC<Props> = ({ product }) => {

    return (
        <Link href={`product/${product.key}`}>
            <div className="p-2 sm:w-1/2 lg:w-1/4 cursor-pointer rounded-sm" >
                <div className="h-full shadow-sm bg-white p-4 overflow-hidden" >
                    <img
                        className="lg:h-72 md:h-48 w-full object-cover object-center"
                        src={product.img}
                        alt={product.name}
                        width={500}
                        height={500}
                    />
                    <div className="py-3" >
                        <p className="text-sm mb-3 font-normal hover:underline" > {product.name.slice(0, 80)} </p>
                        <h2 className="text-md font-medium">$ {product.price}</h2>
                    </div>
                </div>
            </div>
        </Link>
    )
}
