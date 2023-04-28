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
    // setCurrentCard([...name]);
    console.log(index);
  }

  function resetGame() {
    const totalCardCount = 5;

    const allCats = cat.slice(0, totalCardCount).map((eachCat) => eachCat.name);

    setTotalCard([...allCats, ...allCats]);
  }

  return (
    <>
      {JSON.stringify(totalCard)}
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
        <CardSection handleCardClick={handleCardClick} totalCard={totalCard} />
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
