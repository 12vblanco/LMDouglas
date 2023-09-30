import styled from "styled-components";
import book_coverX1 from "../../assets/imgs/book_coverX1.png";
import book_coverX2 from "../../assets/imgs/book_coverX2.png";
import book_coverX3 from "../../assets/imgs/book_coverX3.png";

const HeroBook = () => {
  return (
    <>
      <ImageContainer>
        <BookImg
          src={book_coverX1}
          srcset={`${book_coverX2} 2x, ${book_coverX3} 3x`}
          alt="Book's cover"
          width="255"
          height="380"
        />
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
