import styled from "styled-components";
import texts from "../../assets/texts";
import BookBlock2 from "./BookBlock2";

const HeroText = ({ isWideScreen }) => {
  return (
    <>
      <TextContainer>
        <Title>
          {" "}
          <Span>New Book! </Span>
          Gharantia's Fury{" "}
        </Title>
        <Subtitle>Chronicles of the Endless War Book 2</Subtitle>
        <Subtitle style={{ fontSize: "18px" }}>
          (release on the 13th of September.)
        </Subtitle>
        {!isWideScreen && <BookBlock2 />}
        <Description>{texts[1].synopsis2}</Description>
        <br />
      </TextContainer>
    </>
  );
};

const Description = styled.p`
  line-height: 1.4;
  max-width: 620px;
  margin: 0;
  @media (max-width: 900px) {
    font-size: 1.1rem;
    padding-right: 0;
  }
  @media (max-width: 850px) {
    max-width: 100vw;
    margin: 2rem 0 0rem 0;
  }
`;

const TextContainer = styled.div`
  color: white;
  width: 54%;
  max-width: 640px;
  padding-left: 3rem;
  @media (max-width: 960px) {
    width: 98%;
    margin-left: 1.5rem;
  }
  @media (max-width: 850px) {
    width: 100%;
    max-width: 100vw;
    margin: 0;
    position: relative;
    left: 50%;
    transform: translate(-50%);
    padding-left: 0;
  }
`;

const Title = styled.h1`
  padding-top: 1rem;
  margin: 0;
  letter-spacing: -0.6px;
  color: var(--gold);
  @media (max-width: 1104px) {
    padding-top: 3rem;
  }
  @media (max-width: 942px) {
    padding-top: 5rem;
  }
  @media (max-width: 900px) {
    padding-top: 2rem;
  }
  @media (max-width: 850px) {
    padding-top: 0rem;
  }
`;

const Span = styled.p`
  color: #ff355de1;
  margin-right: 0.6rem;
  font-family: "IM Fell Double Pica SC", serif;
`;

const Subtitle = styled.h2`
  margin: 0 0 0.625rem;
  color: var(--gold);
  font-size: 22px;
  letter-spacing: -0.6px;
  @media (max-width: 850px) {
    margin-top: -0.5rem;
    margin-bottom: 0rem;
  }
`;

export default HeroText;
