import Head from "next/head";
import styled from "styled-components";

import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <AppContainer>
      <Head>
        <title>shenlong.de</title>
        <meta name="description" content="My own website portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Long Ha Hoang" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </AppContainer>
  );
}

const AppContainer = styled.div`
  /* border: solid gold; */
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-content: center;

  main {
    flex: 1;
  }
`;
