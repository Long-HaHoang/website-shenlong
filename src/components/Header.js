import styled from "styled-components";
import Link from "next/link";

export default function Header() {
  return (
    <HomeHeader>
      <h1>
        Long <span>Ha Hoang</span>
      </h1>
    </HomeHeader>
  );
}

const HomeHeader = styled.header`
  h1 {
    width: 100%;
    text-align: left;

    @media (max-width: 991px) {
      text-align: center;
    }
  }
`;
