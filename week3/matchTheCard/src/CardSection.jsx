import styled from "styled-components";
import Card from "./Card";
import cat from "./assets/cat";

function CardSection({ totalCard, handleCardClick, matchedCard, currentCard }) {
  return (
    <CardBox>
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
    </CardBox>
  );
}

export default CardSection;

const Cards = styled.section`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  transform-style: preserve-3d;
  transition: all 0.8s ease;
  display: grid;
  grid-template-columns: repeat(5, 200px);
  gap: 20px;
`;

const CardBox = styled.section`
  /* position: absolute; */
  /* width: 100%;
  height: 100%;
  background: none;
  top: 50%;
  left: 50%; */
  /* transform: translate(-50%, -50%); */
`;
