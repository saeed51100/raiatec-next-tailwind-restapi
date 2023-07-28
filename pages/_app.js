import '../src/global.css';
import Head from 'next/head'

export default function MyApp({Component, pageProps}) {
    return (
        <>
            <Component {...pageProps} />
            <Head>
                <title>raiatec.com</title>
            </Head>
        </>
    )

}




