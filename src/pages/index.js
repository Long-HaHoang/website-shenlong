import Layout from "@/components/Layout";
import Link from "next/link";

export default function Home() {
  return (
    <Layout>
      <p>This site is under contruction</p>
      <p>In the meanwhile you can look into my socials.</p>
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
    </Layout>
  );
}
