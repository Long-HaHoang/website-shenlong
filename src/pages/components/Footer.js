import Link from "next/link";
import styled from "styled-components";

export default function Footer() {
  return (
    <StyledFooter>
      <PageLinks>
        <Link href={"/"}>Home</Link>
        <Link href={"/imprint"}>Impressum</Link>
        <Link href={"/data-privacy"}>Datenschutz</Link>
      </PageLinks>
      <ContactLinks>
        <li>github</li>
        <li>linkedin</li>
        <li>email</li>
      </ContactLinks>
      <Copyright>
        &copy; 2023{" "}
        <Link href={"https://github.com/Long-HaHoang"}>long ha hoang</Link>
      </Copyright>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  display: grid;
  padding: 1rem;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-auto-flow: row;
  grid-template-areas:
    ". . . . page page"
    ". . . . . ."
    ". . copyright copyright contact contact";

  @media (max-width: 991px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }
`;

const PageLinks = styled.div`
  grid-area: page;
  display: flex;
  flex-direction: row;
  align-self: start;
  align-items: flex-start;
  justify-content: center;
  gap: 0.5rem;
  @media (max-width: 991px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }
`;

const ContactLinks = styled.ul`
  grid-area: contact;
  height: 100%;

  list-style: none;
  display: flex;
  justify-content: center;
  gap: 0.5rem;

  @media (max-width: 991px) {
    width: 100%;
  }
`;

const Copyright = styled.p`
  grid-area: copyright;
  text-align: center;
  align-self: stretch;
  justify-self: stretch;
`;
