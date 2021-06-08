import { useEffect } from 'react';
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux';
import Footer from '../components/Footer/Footer';
import NavBar from '../components/Navbar/Navbar';
import Preloader from '../components/Preloader/Preloader';
import { SingleCard } from '../components/SingleCard/SingleCard';
import { getProducts } from '../redux/actions/productActions';

export type Products = {
  features: {}[];
  img: string;
  key: string;
  name: string;
  price: number;
  priceFraction: string;
  seller: string;
  shipping: number;
  star: number;
  starCount: number;
  stock: number;
  url: string;
  wholePrice: string;
  _id: string;
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
                <p className="font-bold text-3xl pb-8">Latest Products</p>
                <div className="flex flex-wrap -m-4" >
                  {
                    products?.map(product => <SingleCard product={product} />)
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
