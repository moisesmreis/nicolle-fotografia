import Head from 'next/head'
import Header from '@/components/Header'

export default function Home() {
  return (
    <>
      <Head>
        <title>Nicolle Della Cruz</title>
        <meta name="description" content="Fotógrafa em Porto Seguro" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Nicolle Della Cruz" />
        <meta property="og:description" content="Fotógrafa em Porto Seguro" />
     </Head>
     <Header />
    </>
  )
}
