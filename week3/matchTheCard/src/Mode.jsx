import styled from "styled-components";
import { useState } from "react";

function Mode({ handleModeChange }) {
  //   const [mode, setMode] = useState("");
  //   function handleModeChange(e) {
  //     setMode(e.target.value);
  // console.log(mode);
  //   }

  return (
    <Section>
      <Button onClick={() => handleModeChange("easy")}>EASY</Button>
      <Button onClick={() => handleModeChange("normal")} value={"normal"}>
        NORMAL
      </Button>
      <Button onClick={() => handleModeChange("hard")} value={"hard"}>
        HARD
      </Button>
    </Section>
  );
}

export default Mode;

const Section = styled.section`
  display: flex;
  justify-content: center;
`;
const Button = styled.button`
  margin-right: 10px;
  width: 100px;
  height: 40px;
  background-color: papayawhip;
  color: tomato;
  border-radius: 7px;
  border: none;

  &:hover {
    background-color: tomato;
    color: papayawhip;
  }
`;
