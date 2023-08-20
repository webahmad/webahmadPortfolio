import '@/styles/globals.css'
import Footer from '@/Component/Footer'
import NavBar from '@/Component/NavBar.js'

import Head from 'next/head'



import { Montserrat } from 'next/font/google'
 
const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-mons',
})

export default function App({ Component, pageProps }) {

  return(
  <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
    </Head>
  
  
    <main className={`${montserrat.variable} font-mons bg-light dark:bg-dark w-full min-h-screen `} >
    <NavBar/>
    <Component {...pageProps} />
    <Footer />

  </main>
  </>
    );
}
