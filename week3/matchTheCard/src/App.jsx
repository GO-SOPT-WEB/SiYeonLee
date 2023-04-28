import { useState } from "react";
import "./App.css";
import Header from "./Header";
import Body from "./Body";
import Mode from "./Mode";
import cat from "./assets/cat";
import CardSection from "./CardSection";

function App() {
  const [mode, setMode] = useState("");
  const [totalCard, setTotalCard] = useState([]);
  const [matchedCard, setMatchedCard] = useState([]);
  const [currentCard, setCurrentCard] = useState([]);

  function handleModeChange(mode) {
    setMode(mode);
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
    const totalCardCount = 5;

    const allCats = cat.slice(0, totalCardCount).map((eachCat) => eachCat.name);

    setTotalCard([...allCats, ...allCats]);
  }

  return (
    <>
      <Header />
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
      {/* {totalCard.map((name) => (
        <div>
          <img src={cat.find((v) => v.name === name).src} />
        </div>
      ))} */}
    </>
  );
}

export default App;
