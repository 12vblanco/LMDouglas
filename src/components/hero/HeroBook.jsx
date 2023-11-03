import styled from "styled-components";
import book_coverX1f from "../../assets/imgs/book_coverX1.png";
import book_coverX1 from "../../assets/imgs/book_coverX1.webp";
import book_coverX2f from "../../assets/imgs/book_coverX2.png";
import book_coverX2 from "../../assets/imgs/book_coverX2.webp";
import book_coverX3f from "../../assets/imgs/book_coverX3.png";
import book_coverX3 from "../../assets/imgs/book_coverX3.webp";

const HeroBook = () => {
  return (
    <>
      <ImageContainer>
        <picture>
          <source
            srcSet={`${book_coverX1} 1x, ${book_coverX2} 2x, ${book_coverX3} 3x`}
            type="image/webp"
          />
          <source
            srcSet={`${book_coverX1f} 1x, ${book_coverX2f} 2x, ${book_coverX3f} 3x`}
            type="image/png"
          />
          <BookImg
            src={book_coverX1}
            srcSet={`${book_coverX2} 2x, ${book_coverX3} 3x`}
            alt="Book's cover"
            width="255"
            height="380"
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
  width: 46%;
  @media (max-width: 800px) {
    width: 100%;
  }
`;

const BookImg = styled.img`
  max-width: 100%;
  position: relative;
  z-index: 1;
  height: auto;
  min-width: 320px;
  margin: 0.5rem;
`;

export default HeroBook;
