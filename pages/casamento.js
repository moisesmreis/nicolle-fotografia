import Head from 'next/head'
import Header from '@/components/Header'
import Images from '@/components/Images'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Nicolle • Casamento</title>
        <meta name="description" content="Fotógrafa em Porto Seguro" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Nicolle • Casamento" />
        <meta property="og:description" content="Fotógrafa em Porto Seguro" />
     </Head>
     <Header title="Casamento" />
     <Images />
     <Footer />
    </>
  )
}
