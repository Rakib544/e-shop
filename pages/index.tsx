import { useEffect } from 'react';
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux';
import Footer from '../components/Footer/Footer';
import NavBar from '../components/Navbar/Navbar';
import Preloader from '../components/Preloader/Preloader';
import { SingleCard } from '../components/SingleCard/SingleCard';
import { getProducts } from '../redux/actions/productActions';

export type Products = {
  imageURL: string;
  name: string;
  price: number;
  stock: number;
  _id: string;
  qty?: number
}

export default function Home(): JSX.Element {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts())
  }, [])
  const data = useSelector((state: RootStateOrAny) => state.getProducts)
  const { loading, error, products } = data;

  return (
    <div>
      <NavBar />
      {
        loading
          ? <Preloader />
          : (
            <section className="md:h-full flex items-center bg-gray-100 text-gray-600">
              <div className="container px-10 py-14 mx-auto" >
                <p className="font-bold text-3xl pb-8">
                  Latest Products
                </p>
                <div className="flex flex-wrap -m-4" >
                  {
                    products?.map(product => <SingleCard key={product._id} product={product} />)
                  }
                </div>
              </div>
            </section>
          )
      }
      <Footer />
    </div>
  )

}
