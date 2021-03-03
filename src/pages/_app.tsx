import '../styles/globals.css'
import Head from 'next/head'

import { MetaData } from '../config'
import Header from '../components/Global/Header'
import Footer from '../components/Global/Footer'
import Main from '../styles/Global.Main.module.css'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>{MetaData.Title}</title>
      </Head>
      <Header />
      <main className={Main.Main}>
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  )
}

export default MyApp
