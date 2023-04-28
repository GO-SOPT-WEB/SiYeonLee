import styled from "styled-components";
import { useState } from "react";

function Score({ rightCard, totalCard }) {
  //   const [score, setScore] = useState(0);
  //   const [totalScore, setTotalScore] = useState(5);

  const score = rightCard.length / 2;
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
