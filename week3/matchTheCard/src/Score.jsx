import styled from "styled-components";
import { useState } from "react";

function Score({ matchedCard, totalCard }) {
  const score = matchedCard.length / 2;
  const totalScore = totalCard.length / 2;

  return (
    <ScoreBoard>
      {score}/{totalScore}
    </ScoreBoard>
  );
}

export default Score;

const ScoreBoard = styled.h1`
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: 30px;
`;
