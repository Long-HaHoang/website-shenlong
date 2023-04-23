import Footer from "./Footer";
import Head from "next/head";
import styled from "styled-components";

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
      <HomeHeader>
        <h1>
          Long <span>Ha Hoang</span>
        </h1>
      </HomeHeader>
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

const HomeHeader = styled.header`
  h1 {
    width: 100%;
    text-align: left;

    @media (max-width: 991px) {
      text-align: center;
    }
  }
`;
