import styled, { css } from "styled-components";

function Card({ imageSrc, onClick, isOpen, imageName }) {
  return (
    <CardWrapper isOpen={isOpen} onClick={onClick}>
      {/* <p> {isOpen ? "open" : "close"} </p> */}
      <Article>
        {isOpen ? (
          <Image
            className="front"
            src={imageSrc}
            alt={imageName}
            isOpen={isOpen}
            width="150"
            height="180"
          />
        ) : (
          <Image
            src="https://www.svgrepo.com/show/454281/cat-halloween-kitty.svg"
            className="back"
            width="150"
            alt="default cat"
          />
        )}
      </Article>
    </CardWrapper>
  );
}

export default Card;

const CardWrapper = styled.section`
  width: 200px;
  height: 243px;
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

const Image = styled.img`
  /* margin-top: 60px; */
  position: relative;
  margin: 20px 5px;
  border-radius: 5px;
`;

const Article = styled.article`
  display: flex;
  justify-content: center;
  padding: 10px;
`;
