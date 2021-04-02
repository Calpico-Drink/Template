import '@styles/globals.css'
import Head from 'next/head'

import { MetaData } from '@src/config'
import Header from '@components/Global/Header'
import Footer from '@components/Global/Footer'
import Main from '@styles/Global.Main.module.css'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>{MetaData.Title}</title>
        <link rel="manifest" href="/manifest.json" />
    	<link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
    	<meta name="theme-color" content="#ffffff"/>
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
