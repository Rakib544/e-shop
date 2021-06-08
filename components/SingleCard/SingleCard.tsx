import { Products } from "../../pages"

type Props = {
    product: Products,

}
export const SingleCard: React.FC<Props> = ({ product }) => {
    
    return (
        <div className="p-2 sm:w-1/2 lg:w-1/4 cursor-pointer rounded-sm" >
            <div className="h-full shadow-sm bg-white p-4 overflow-hidden" >
                <img className="lg:h-72 md:h-48 w-full object-cover object-center"
                    src={product.img} alt={product.name} />
                <div className="py-3" >
                    <p className="text-2 mb-3 font-medium" > {product.name.slice(0,80)} </p>
                    <h2 className="text-lg font-medium">$ {product.price}</h2>
                </div>
            </div>
        </div>
    )
}
