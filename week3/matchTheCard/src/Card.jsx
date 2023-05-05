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
            width="180"
            height="220"
          />
        </FrontArticle>
        <BackArticle>
          <Image
            src="https://www.svgrepo.com/show/454281/cat-halloween-kitty.svg"
            width="180"
            height="220"
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
`;

const Image = styled.img`
  border-radius: 10px;
`;

const BackArticle = styled.article`
  position: absolute;
  display: flex;
  justify-content: center;
  width: 200px;
  height: 240px;
  padding: 5px;
  transform: rotateY(180deg);
  backface-visibility: hidden;
`;
const FrontArticle = styled.article`
  position: absolute;
  display: flex;
  justify-content: center;
  padding: 10px;
  backface-visibility: hidden;
`;

const CardInner = styled.article`
  position: relative;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  width: 200px;
  height: 243px;
  border-radius: 10px;
  ${(props) =>
    props.isOpen
      ? css`
          transform: rotateY(0);
          background-color: #ffbd52;
          box-shadow: 7px 7px #9d7434;
        `
      : css`
          transform: rotateY(180deg);
          background-color: papayawhip;
          box-shadow: -7px 7px #f4ab4c;
        `}
`;
