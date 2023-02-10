import '../styles/globals.scss';
import Head from 'next/head.js';
import { Header } from '../components/Header/Header.jsx';

export default function App({
  Component,
  pageProps
}) {
  return (
    <>
      <Head>
        <title>SupPort - Nowa strona wody</title>
        <meta name="description" content="nowa strona wody"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <Header/>
      <Component {...pageProps} />
    </>
  );
}
