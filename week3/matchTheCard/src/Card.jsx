import styled, { css } from "styled-components";

function Card({ imageSrc, onClick, isOpen, imageName }) {
  return (
    <CardWrapper
      isOpen={isOpen}
      onClick={onClick}
      className={isOpen ? "open" : ""}
    >
      {isOpen ? (
        <Article className="front">
          <Image
            className="front"
            src={imageSrc}
            alt={imageName}
            isOpen={isOpen}
            width="150"
            height="180"
          />
        </Article>
      ) : (
        <Article className="back">
          <Image
            src="https://www.svgrepo.com/show/454281/cat-halloween-kitty.svg"
            className="back"
            width="150"
            alt="default cat"
          />
        </Article>
      )}
    </CardWrapper>
  );
}

export default Card;

const CardWrapper = styled.section`
  width: 200px;
  height: 243px;
  border-radius: 10px;
  box-shadow: 7px 7px #f4ab4c;

  &:hover {
    cursor: pointer;
  }
  &.open {
    box-shadow: 7px 7px papayawhip;
  }
  ${(props) =>
    props.isOpen
      ? css`
          background-color: #ffbd52;
        `
      : css`
          background-color: papayawhip;
        `}
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

const Article = styled.article`
  display: flex;
  justify-content: center;
  padding: 30px 10px;
`;
