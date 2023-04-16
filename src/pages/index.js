import Head from "next/head";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>shenlong.de</title>
        <meta name="description" content="My own website portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Long Ha Hoang" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <h1>work in progress</h1>
      </header>
      <main>
        <p>hello world</p>
      </main>
      <Footer />
    </>
  );
}
