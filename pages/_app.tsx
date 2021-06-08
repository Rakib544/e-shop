import { Provider } from 'react-redux'
import { store } from '../redux/store'
import '../styles/globals.css'
import type { AppProps /*, AppContext */ } from 'next/app'


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
