import { useEffect } from "react";
import "./App.css";
import styled from "styled-components";
import Header from "./components/Header";
import Mode from "./components/Mode";
import cat from "./assets/cat";
import CardSection from "./components/CardSection";
import Score from "./components/Score";
import Reset from "./components/Reset";
import { useRecoilState } from "recoil";
import { selectedMode } from "./recoil/atom/selectedMode";
import { totalCardNum } from "./recoil/atom/totalCardNum";
import {
  totalCards,
  currentCards,
  matchedCards,
} from "./recoil/atom/cardArrays";
import React from "react";

function App() {
  const [mode, setMode] = useRecoilState(selectedMode);
  const [totalCard, setTotalCard] = useRecoilState(totalCards);

  const [currentCard, setCurrentCard] = useRecoilState(currentCards);
  const [matchedCard, setMatchedCard] = useRecoilState(matchedCards);
  const [totalCardCount, setTotalCardCount] = useRecoilState(totalCardNum);

  //mode가 변경될 때마다 자동으로 게임 리셋해서 카드 재생성
  useEffect(() => {
    resetGame();
  }, [mode]);

  //변경된 모드에 따라 생성될 총 카드 짝의 갯수 지정
  function handleModeChange(mode: string) {
    setMode(mode);
    if (mode === "EASY") {
      setTotalCardCount(5);
    } else if (mode === "NORMAL") {
      setTotalCardCount(7);
    } else if (mode === "HARD") {
      setTotalCardCount(9);
    }
    resetGame();
  }

  //카드 클릭 시 이미 선택된 카드인지, 선택된 카드가 이미 1개 있는지 확인 후 맞다면 카드 짝을 확인하는 함수 호출 아니라면 이미 짝이 맞춰진 카드에 있는지 확인 후 없다면 선택된 카드 array에 담는다
  function handleCardClick(index: number) {
    if (currentCard.length === 1 && !currentCard.includes(index)) {
      checkCardMatched(index);
    } else if (!matchedCard.includes(index)) {
      setCurrentCard([index]);
    }
  }

  //카드 짝 확인하는 함수
  //카드 짝이 맞다면 matchedCard 에 담고 아니라면 1초 후 다시 선택해제되고 선택된 카드 array를 비워준다
  function checkCardMatched(index: number) {
    const cardName = totalCard[index];
    if (totalCard[currentCard[0]] === cardName) {
      setMatchedCard([...matchedCard, index, currentCard[0]]);
      setCurrentCard([]);
    } else {
      setCurrentCard([...currentCard, index]);
      setTimeout(() => {
        setCurrentCard([]);
      }, 1000);
    }
  }

  function resetGame() {
    const allCatsRandom: string[] = cat
      .sort(() => Math.random() - 0.5)
      .slice(0, totalCardCount)
      .map((eachCat) => eachCat.name);

    setTotalCard(
      [...allCatsRandom, ...allCatsRandom].sort(() => Math.random() - 0.5)
    );
    setMatchedCard([]);
    setCurrentCard([]);
  }

  return (
    <>
      <Reset resetGame={resetGame}></Reset>
      <Header>
        <Score />
      </Header>
      <Body>
        <Mode handleModeChange={handleModeChange} />
        <CardSection handleCardClick={handleCardClick} />
      </Body>
    </>
  );
}

export default App;

const Body = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
