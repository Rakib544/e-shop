import { Products } from "../../pages"

type Props = {
    product: Products,

}
export const SingleCard: React.FC<Props> = ({ product }) => {
    console.log(product)
    return (
        <div className="p-4 sm:w-1/2 lg:w-1/4" >
            <div className="h-full shadow-md p-4 overflow-hidden" >
                <img className="lg:h-72 md:h-48 w-full object-cover object-center"
                    src={product.img} alt={product.name} />
                <div className="py-3" >
                    <p className="text-2 mb-3 font-medium" > {product.name} </p>
                    <h2 className="text-2xl font-medium">$ {product.price}</h2>
                </div>
            </div>
        </div>
    )
}
