import styled from "styled-components";
import Score from "./Score";

function Header() {
  return (
    <>
      <Title> Cats Rule! </Title>
      {/* <Score></Score> */}
    </>
  );
}

const Title = styled.h1`
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: 50px;
`;

export default Header;
