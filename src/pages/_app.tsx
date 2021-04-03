import '@styles/globals.css'
import Head from 'next/head'

import { useEffect } from 'react'
import { MetaData } from '@src/config'
import Header from '@components/Global/Header'
import Footer from '@components/Global/Footer'
import Main from '@styles/Global.Main.module.css'

function PWA() {
	if (process.env.isPWA) {
		return (
			<Head>
					<link rel="manifest" href="/manifest.json" />
    				<link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
    				<meta name="theme-color" content="#ffffff"/>
			</Head>
		)
	} else {
		return (<></>)
	}
}

export default function App({ Component, pageProps }) {
	useEffect(() => {
		const ThemeTag = document.querySelector('meta[name="theme-color"]')
		
		if (ThemeTag) {
			const style = getComputedStyle(document.body)
			const MainColor = style.getPropertyValue('--primary') || "#ffffff"
			ThemeTag.setAttribute("content", MainColor)
		}
	})
	
  return (
    <div>
    	<PWA />
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