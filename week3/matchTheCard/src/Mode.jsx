import styled from "styled-components";

function Mode({ mode, handleModeChange }) {
  return (
    <Section>
      <Button
        onClick={() => handleModeChange("easy")}
        className={mode === "easy" ? "selectedButton" : ""}
      >
        EASY
      </Button>
      <Button
        onClick={() => handleModeChange("normal")}
        className={mode === "normal" ? "selectedButton" : ""}
      >
        NORMAL
      </Button>
      <Button
        onClick={() => handleModeChange("hard")}
        className={mode === "hard" ? "selectedButton" : ""}
      >
        HARD
      </Button>
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
    cursor: pointer;
  }
  &.selectedButton {
    background-color: tomato;
    color: papayawhip;
    box-shadow: 3px 5px #666;
    transform: translateY(4px);
    outline-color: #ff8f33;
  }
`;
