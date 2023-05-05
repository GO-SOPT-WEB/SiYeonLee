import { useEffect, useState } from "react";
import "./App.css";
import Header from "./Header";
import Body from "./Body";
import Mode from "./Mode";
import cat from "./assets/cat";
import CardSection from "./CardSection";
import Score from "./Score";
import Reset from "./Reset";

function App() {
  const [mode, setMode] = useState("easy");
  const [totalCard, setTotalCard] = useState([]);
  const [matchedCard, setMatchedCard] = useState([]);
  const [currentCard, setCurrentCard] = useState([]);
  const [totalCardCount, setTotalCardCount] = useState(5);

  //mode가 변경될 때마다 자동으로 게임 리셋해서 카드 재생성
  useEffect(() => {
    resetGame();
  }, [mode]);

  //변경된 모드에 따라 생성될 총 카드 짝의 갯수 지정
  function handleModeChange(mode) {
    setMode(mode);
    if (mode === "easy") {
      setTotalCardCount(5);
    } else if (mode === "normal") {
      setTotalCardCount(7);
    } else if (mode === "hard") {
      setTotalCardCount(9);
    }
    resetGame();
  }

  //카드 클릭 시 이미 선택된 카드인지, 선택된 카드가 이미 1개 있는지 확인 후 맞다면 카드 짝을 확인하는 함수 호출 아니라면 이미 짝이 맞춰진 카드에 있는지 확인 후 없다면 선택된 카드 array에 담는다
  function handleCardClick(index) {
    if (currentCard.length === 1 && !currentCard.includes(index)) {
      checkCardMatched(index);
    } else if (!matchedCard.includes(index)) {
      setCurrentCard([index]);
    }
  }

  //카드 짝 확인하는 함수
  //카드 짝이 맞다면 matchedcard 에 담고 아니라면 1초 후 다시 선택해제되고 선택된 카드 array를 비워준다
  function checkCardMatched(index) {
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
    const allCatsRandom = cat
      .sort(() => Math.random() - 0.5)
      .slice(0, totalCardCount)
      .map((eachCat) => eachCat.name);
    // 💓 여기요!!!
    setTotalCard(
      [...allCatsRandom, ...allCatsRandom].sort(() => Math.random() - 0.5)
    );
    setMatchedCard([]);
    setCurrentCard([]);
  }

  return (
    <>
      <Reset resetGame={resetGame}></Reset>
      <Header
        score={<Score matchedCard={matchedCard} totalCard={totalCard} />}
      />
      <Body
        mode={
          <Mode
            mode={mode}
            setMode={setMode}
            handleModeChange={handleModeChange}
          />
        }
      >
        <CardSection
          matchedCard={matchedCard}
          currentCard={currentCard}
          handleCardClick={handleCardClick}
          totalCard={totalCard}
        />
      </Body>
    </>
  );
}

export default App;
