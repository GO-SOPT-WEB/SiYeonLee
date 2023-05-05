import styled, { css } from "styled-components";

function Card({ imageSrc, onClick, isOpen, imageName }) {
  return (
    <CardWrapper isOpen={isOpen} onClick={onClick}>
      <CardInner isOpen={isOpen}>
        <FrontArticle>
          <Image
            src={imageSrc}
            alt={imageName}
            isOpen={isOpen}
            width="150"
            height="180"
          />
        </FrontArticle>
        <BackArticle>
          <Image
            src="https://www.svgrepo.com/show/454281/cat-halloween-kitty.svg"
            width="150"
            alt="default cat"
          />
        </BackArticle>
      </CardInner>
    </CardWrapper>
  );
}

export default Card;

const CardWrapper = styled.section`
  perspective: 1000px;
  &:hover {
    cursor: pointer;
  }
  &.open {
    box-shadow: 7px 7px papayawhip;
  }
  /* ${(props) =>
    props.isOpen
      ? css`
          background-color: #ffbd52;
        `
      : css`
          background-color: papayawhip;
        `} */
`;

const Image = styled.img`
  &.back {
    position: relative;
    margin: 20px 5px;
    border-radius: 5px;
  }
  &.front {
    position: relative;
    margin: 20px 5px;
    border-radius: 5px;
  }
`;

const BackArticle = styled.article`
  position: absolute;
  display: flex;
  justify-content: center;
  padding: 30px 10px;
  transform: rotateY(180deg);
  backface-visibility: hidden;
`;
const FrontArticle = styled.article`
  position: absolute;
  display: flex;
  justify-content: center;
  padding: 30px 10px;
  backface-visibility: hidden;
`;

const CardInner = styled.article`
  position: relative;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  width: 200px;
  height: 243px;
  border-radius: 10px;
  box-shadow: 7px 7px #f4ab4c;
  ${(props) =>
    props.isOpen
      ? css`
          transform: rotateY(0);
          background-color: #ffbd52;
        `
      : css`
          transform: rotateY(180deg);
          background-color: papayawhip;
        `}
`;
