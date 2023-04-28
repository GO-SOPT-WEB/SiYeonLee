import styled from "styled-components";

function Header() {
  return <Title> Cats Rule! </Title>;
}

const Title = styled.h1`
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: 50px;
`;

export default Header;
