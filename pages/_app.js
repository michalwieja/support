import '../styles/globals.scss';
import Head from 'next/head.js';
import { Header } from '../components/Header/Header.jsx';

const App = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>Support - Lepsza strona wody</title>
      <meta name="description" content="Lepsza strona wody" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta property="og:title" content="Support" />
      <meta
        property="og:description"
        content="Lepsza strona wody"
      />
      <meta
        property="og:image"
        content="/oboz-2.jpg"
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header />
    <Component {...pageProps} />
  </>
)

export default App