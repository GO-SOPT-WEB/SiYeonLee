import styled from "styled-components";
import Card from "./Card";
import cat from "./assets/cat";

function CardSection({ totalCard, handleCardClick, matchedCard, currentCard }) {
  return (
    <div>
      <div>
        <div>total: {JSON.stringify(totalCard)}</div>
        <div>matched: {JSON.stringify(matchedCard)}</div>
        <div>current: {JSON.stringify(currentCard)}</div>
      </div>
      <Cards>
        {totalCard.map((name, index) => (
          <Card
            key={index}
            imageSrc={cat.find((v) => v.name === name).src}
            imageName={name}
            onClick={() => {
              console.log(index);
              handleCardClick(index);
            }}
            isOpen={matchedCard.includes(index) || currentCard.includes(index)}
          ></Card>
        ))}
      </Cards>
    </div>
  );
}

export default CardSection;

const Cards = styled.section`
  display: grid;
  grid-template-columns: repeat(5, 200px);
  gap: 20px;
`;
