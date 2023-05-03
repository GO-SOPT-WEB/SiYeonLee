import styled, { css } from "styled-components";

function Card({ imageSrc, onClick, isOpen }) {
  return (
    <CardWrapper isOpen={isOpen}>
      <p> {isOpen ? "open" : "close"} </p>
      <Image src={imageSrc} onClick={onClick} width="150" height="180" />
    </CardWrapper>
  );
}

export default Card;

const CardWrapper = styled.section`
  width: 200px;
  background-color: papayawhip;
  border-radius: 10px;
  ${(props) =>
    props.isOpen
      ? css`
          background-color: #ffbd52;
        `
      : css`
          background-color: pink;
        `}
`;

const Image = styled.img``;
