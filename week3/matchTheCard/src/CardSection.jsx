import styled from "styled-components";
import Card from "./Card";
import cat from "./assets/cat";

function CardSection({ totalCard, handleCardClick }) {
  console.log(totalCard);
  return (
    <div>
      {totalCard.map((name, index) => (
        <Card
          key={index}
          imageSrc={cat.find((v) => v.name === name).src}
          onClick={() => handleCardClick({ index })}
        ></Card>
      ))}
    </div>
  );
}

export default CardSection;

const Square = styled.section`
  width: 200px;
  height: 350px;
`;

const Gif = styled.article`
  width: 180px;
  height: 300px;
`;
