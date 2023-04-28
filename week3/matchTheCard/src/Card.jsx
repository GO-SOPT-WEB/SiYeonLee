import styled from "styled-components";

function Card({ imageSrc, onClick, isOpen }) {
  return (
    <CardWrapper>
      <p> {isOpen ? "open" : "close"} </p>
      <img src={imageSrc} onClick={onClick} width="100" />
    </CardWrapper>
  );
}

export default Card;

const CardWrapper = styled.section`
  width: 200px;
  background-color: papayawhip;
  border-radius: 10px;
`;
