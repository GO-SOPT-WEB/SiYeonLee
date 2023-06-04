import styled from "styled-components";
import { matchedCards, totalCards } from "../recoil/atom/cardArrays";
import { useRecoilValue } from "recoil";

function Score() {
  //현재 스코어는 맞춘 카드 array 길이의 절반, 총 스코어는 총 카드 array 갯수의 절반
  const matchedCard = useRecoilValue(matchedCards);
  const totalCard = useRecoilValue(totalCards);
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
  margin: 0;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: 40px;
  color: white;
`;
