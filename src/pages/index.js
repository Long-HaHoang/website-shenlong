import Head from "next/head";
import Footer from "./components/Footer";
import Link from "next/link";

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
        <p>This site is under contruction</p>
        <p>In meanwhile you can look into my socials.</p>
        <ul>
          <li>
            <Link href={"https://github.com/Long-HaHoang"}>Github</Link>
          </li>
          <li>
            <Link href={"https://www.linkedin.com/in/long-ha-hoang-213018260/"}>
              LinkedIn
            </Link>
          </li>
          <li>
            <Link href={"https://long-hahoang-nf-capstone.vercel.app/"}>
              My Capstone Project
            </Link>
          </li>
          <li>
            <Link href={"https://github.com/Long-HaHoang/capstone-project"}>
              My Capstone Project Code
            </Link>
          </li>
        </ul>
      </main>
      <Footer />
    </>
  );
}
