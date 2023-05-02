import { useEffect, useState } from "react";
import "./App.css";
import Header from "./Header";
import Body from "./Body";
import Mode from "./Mode";
import cat from "./assets/cat";
import CardSection from "./CardSection";
import Score from "./Score";

function App() {
  const [mode, setMode] = useState("");
  const [totalCard, setTotalCard] = useState([]);
  const [matchedCard, setMatchedCard] = useState([]);
  const [currentCard, setCurrentCard] = useState([]);
  const [totalCardCount, setTotalCardCount] = useState(5);

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

  console.log(mode);

  function handleCardClick(index) {
    console.log(index);

    if (currentCard.length === 1) {
      checkCardMatched(index);
    } else {
      setCurrentCard([index]);
    }

    console.log(JSON.stringify(currentCard));
  }

  function checkCardMatched(index) {
    console.log(index, currentCard[0]);
    const cardName = totalCard[index];
    console.log("current", totalCard[currentCard[0]]);
    console.log("clicked", cardName);
    if (totalCard[currentCard[0]] === cardName) {
      setMatchedCard([...matchedCard, index, currentCard[0]]);
      setCurrentCard([]);
    } else {
      setCurrentCard([...currentCard, index]);
      setTimeout(() => {
        setCurrentCard([]);
      }, 1000);
      // setCurrentCard([]);
    }
  }

  function resetGame() {
    // const totalCardCount = 5;

    const allCats = cat.slice(0, totalCardCount).map((eachCat) => eachCat.name);

    setTotalCard([...allCats, ...allCats]);
  }

  return (
    <>
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