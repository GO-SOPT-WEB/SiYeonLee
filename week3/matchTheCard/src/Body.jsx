import styled from "styled-components";
import Mode from "./Mode";
import { useState } from "react";

function Body({ mode, children }) {
  return (
    <BodyBox>
      {mode}
      {children}
    </BodyBox>
  );
}

export default Body;

const BodyBox = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
