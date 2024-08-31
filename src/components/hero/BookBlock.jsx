import styled from "styled-components";
import HeroBook from "./HeroBook";

const BookBlock = () => {
  return (
    <Column>
      <HeroBook />
      <ButtonDiv>
        <Button
          href="https://www.amazon.com/Gharantias-Guardian-Chronicles-Endless-Book-ebook/dp/B0CJS2X6Y7/ref=sr_1_fkmr0_1?crid=1LD2L32C2D9IE&dib=eyJ2IjoiMSJ9.asNBvroDkMm9-t45aYt8hFGP3ceeZo8lXsNFBYeQUso.r24D70wd3B7JFx80EtUmdUrWLwHqnTZIPAt89nXlHwE&dib_tag=se&keywords=l.m.+douglas+garathia&qid=1715626107&s=digital-text&sprefix=l.m.+douglas+garathia%2Cdigital-text%2C233&sr=1-1-fkmr0"
          target="_blank"
          rel="noopener noreferrer"
        >
          BUY HERE
          <br />
          AMAZON.COM
        </Button>
        <Button
          href="https://www.amazon.co.uk/dp/B0CJS2X6Y7/ref=kwrp_li_stb_nodl"
          target="_blank"
          rel="noopener noreferrer"
        >
          BUY HERE
          <br />
          AMAZON.UK
        </Button>
      </ButtonDiv>
    </Column>
  );
};

const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin: 0 auto;
  height: 100%;
  position: relative;
  z-index: 1;
  @media (max-width: 800px) {
    flex-direction: column;
    justify-content: center;
    max-width: 100%;
  }
`;

const ButtonDiv = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 300px;
  background: transparent;
  outline: none;
  border: none;
`;
const Button = styled.a`
  margin-top: 1rem;
  min-width: 130px;
  border: 1px solid #d2c07c;
  color: #d2c07c;
  background: #010202;
  font-size: 14px !important;
  padding: 0.6rem 0.8rem;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    color: #94854d;
    border: 1px solid #94854d;
  }
`;

export default BookBlock;
