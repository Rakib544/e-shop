import Head from 'next/head'
import Image from 'next/image';
import { useEffect } from 'react';
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux';
import NavBar from '../components/Navbar/Navbar';
import { SingleCard } from '../components/SingleCard/SingleCard';
import { getProducts } from '../redux/actions/productActions';
import styles from '../styles/Home.module.css';

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
          ? <h3>Loading...</h3>
          : (
            <section className="md:h-full flex items-center text-gray-600">
              <div className="container px-5 py-24 mx-auto" >
                <div className="flex flex-wrap -m-4" >
                  {
                    products.map(product => <SingleCard product={product} />)
                  }
                </div>
              </div>
            </section>
          )
      }
    </div>
  )

}
