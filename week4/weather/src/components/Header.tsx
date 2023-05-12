import styled from "styled-components";

function Header() {
  return (
    <HeaderArea>
      <Title>🌈Weather Forecast☀️</Title>
    </HeaderArea>
  );
}

export default Header;

const HeaderArea = styled.section`
  display: flex;
  justify-content: center;
  background-color: #92e0ff;
  width: 100%;
`;

const Title = styled.h1`
  font-size: 3em;
  font-family: Arial, Helvetica, sans-serif;
  color: white;
`;
