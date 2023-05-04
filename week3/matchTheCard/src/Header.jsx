import styled from "styled-components";

function Header({ score, children }) {
  return (
    <HeaderBox>
      <Title> Cats Rule! </Title>
      {score}
      {children}
    </HeaderBox>
  );
}

const HeaderBox = styled.section`
  display: flex;
  flex-direction: column;
  background-color: #000000b0;
  border-radius: 10px;
`;

const Title = styled.h1`
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: 60px;
  color: white;
  margin: 0;
`;

export default Header;
