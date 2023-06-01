import styled from "styled-components";

function Reset({ resetGame }) {
  return (
    <Section>
      <Button onClick={resetGame}>Reset</Button>
    </Section>
  );
}

export default Reset;
const Button = styled.button`
  width: 100px;
  height: 40px;
  border-radius: 10px;
  background-color: papayawhip;
  border: none;
  color: tomato;
  box-shadow: 4px 7px #999;

  &:hover {
    cursor: pointer;
    background-color: tomato;
    color: papayawhip;
  }

  &:active {
    outline-color: #ff8f33;
    box-shadow: 3px 5px #666;
    transform: translateY(4px);
  }
  &:focus {
    outline-color: transparent;
  }
`;

const Section = styled.section`
  position: sticky;
  top: 30px;
  display: flex;
  justify-content: flex-end;
`;
