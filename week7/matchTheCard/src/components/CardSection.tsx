import styled from "styled-components";
import Card from "./Card";
import cat from "../assets/cat";
import { useRecoilValue } from "recoil";
import {
  totalCards,
  currentCards,
  matchedCards,
} from "../recoil/atom/cardArrays";
import React from "react";

function CardSection({ handleCardClick }) {
  const matchedCard = useRecoilValue(matchedCards);
  const currentCard = useRecoilValue(currentCards);
  const totalCard = useRecoilValue(totalCards);

  if (cat) {
    return (
      <section>
        <Cards>
          {totalCard.map((name: string, index: number) => (
            <Card
              key={index}
              imageSrc={cat.find((v) => v.name === name)?.src}
              imageName={name}
              onClick={() => {
                handleCardClick(index);
              }}
              isOpen={
                matchedCard.includes(index) || currentCard.includes(index)
              }
            ></Card>
          ))}
        </Cards>
      </section>
    );
  } else {
    return (
      <section>
        <Cards />
      </section>
    );
  }
}

export default CardSection;

const Cards = styled.section`
  border-radius: 10px;
  display: grid;
  grid-template-columns: repeat(5, 200px);
  gap: 20px;
`;
