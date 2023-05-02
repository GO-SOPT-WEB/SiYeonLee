import styled from "styled-components";
import { useState } from "react";

function Mode({ handleModeChange }) {
  return (
    <Section>
      <Button onClick={() => handleModeChange("easy")}>EASY</Button>
      <Button onClick={() => handleModeChange("normal")}>NORMAL</Button>
      <Button onClick={() => handleModeChange("hard")}>HARD</Button>
    </Section>
  );
}

export default Mode;

const Section = styled.section`
  display: flex;
  justify-content: center;
  margin: 30px 0px;
`;
const Button = styled.button`
  margin-right: 10px;
  width: 100px;
  height: 40px;
  background-color: papayawhip;
  color: tomato;
  border-radius: 7px;
  border: none;
  box-shadow: 4px 7px #999;

  &:hover {
    background-color: tomato;
    color: papayawhip;
  }
  &:active {
    background-color: tomato;
    color: papayawhip;
    box-shadow: 2px 5px #666;
    transform: translateY(4px);
  }
`;
