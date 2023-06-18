import styled from "styled-components";
import React from "react";

function Header({ children }) {
  return (
    <HeaderBox>
      <Title> Cats Rule! </Title>
      {children}
    </HeaderBox>
  );
}

const HeaderBox = styled.section`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: 60px;
  color: white;
  margin: 0;
`;

export default Header;
