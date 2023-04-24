import styled from "styled-components";
import Link from "next/link";

export default function Header() {
  return (
    <HomeHeader>
      <h1>
        Long <span>Ha Hoang</span>
      </h1>
      <div>
        <p></p>
      </div>
      <div>
        <Link href={"https://www.linkedin.com/in/long-ha-hoang-213018260/"}>
          LinkedIn
        </Link>
        <Link href={"https://github.com/Long-HaHoang"}>Github</Link>
        <Link href={"mailto://long@shenlong.de"}>Email</Link>
      </div>
    </HomeHeader>
  );
}

const HomeHeader = styled.header`
  padding: 1rem 4rem;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  gap: 0px 0px;
  grid-template-areas: "headertext pages contact";

  h1 {
    grid-area: headertext;

    text-align: left;
    font-weight: 400;

    @media (max-width: 991px) {
      text-align: center;
    }
  }

  h1 span {
    font-weight: bold;
  }

  div {
    grid-area: contact;

    font-size: 1.2rem;
    font-weight: bold;

    display: flex;
    justify-content: space-around;
    align-items: center;
  }
`;
