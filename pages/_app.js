import "../styles/globals.css";
import "../styles/Navbar.css";
import Head from "next/head";
import Script from "next/script";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>WatchThisNext</title>
        <meta
          name="description"
          content="dont know what to watch next? simple. watch this next."
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
          crossOrigin="anonymous"
        />
      </Head>
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
        crossorigin="anonymous"
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
