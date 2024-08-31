import styled from "styled-components";
import HeroBook2 from "./HeroBook2";

const BookBlock2 = () => {
  return (
    <Column>
      <HeroBook2 />
      <ButtonDiv>
        <Button
          href="https://search.app/8P4MX1cekPSdYyS86"
          target="_blank"
          rel="noopener noreferrer"
        >
          Pre-ORDER
          <br />
          AMAZON.COM
        </Button>
        <Button
          href="https://amzn.eu/d/e1vbvs4"
          target="_blank"
          rel="noopener noreferrer"
        >
          Pre-ORDER
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

export default BookBlock2;
