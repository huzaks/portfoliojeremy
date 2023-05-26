import 'normalize.css/normalize.css'
import Layout from '../components/Layout'
import '../styles/globals.css'
import { LocaleProvider } from '../components/LocaleProvider';

export default function App({ Component, pageProps }) {


  return <>
    <LocaleProvider>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </LocaleProvider>
  </>

}
