import "../styles/globals.css";
import Head from "next/head";

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Les Aliacées</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
            <link
              href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;600&family=Roboto+Mono:wght@100;400;600&display=swap"
              rel="stylesheet"
            />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
