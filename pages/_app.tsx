import '../src/global.css';
import Head from 'next/head'
import Layout from '../components/layout'


export default function MyApp({Component, pageProps}) {
    return (
        <>
            <Layout>
                <Component {...pageProps} />
            </Layout>
            <Head>
                <title>raiatec.com</title>
            </Head>
        </>
    )

}

