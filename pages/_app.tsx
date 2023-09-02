import type { AppProps } from 'next/app'
import "../src/global.css";
import Layout from "../components/layout";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

