import styled from "styled-components";
import book_coverX1f from "../../assets/book2.jpg";

const HeroBook2 = () => {
  return (
    <>
      <ImageContainer>
        <picture>
          <source srcSet={`${book_coverX1f}`} type="image/jpg" />
          <BookImg
            src={book_coverX1f}
            srcSet={`${book_coverX1f}`}
            alt="Book's cover"
            width="250"
            height="300"
          />
        </picture>
      </ImageContainer>
    </>
  );
};

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* width: 46%; */
  @media (max-width: 800px) {
    width: 100%;
  }
`;

const BookImg = styled.img`
  max-width: 100%;
  position: relative;
  z-index: 1;
  height: auto;
  min-width: 280px;
  margin: 0.5rem;
`;

export default HeroBook2;
