import Head from 'next/head'
import Image from 'next/image';
import { useEffect } from 'react';
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux';
import { getProducts } from '../redux/actions/productActions';
import styles from '../styles/Home.module.css';

interface Products {
  features: {}[];
  img: string;
  key: string;
  name: string;
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
    loading
      ? <h3>Loading...</h3>
      : <div>
        {
          products.map(product => <h2>{product.name}</h2>)
        }
      </div>
  )

}
