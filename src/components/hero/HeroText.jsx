import styled from "styled-components";
import texts from "../../assets/texts";

const HeroText = () => {
  return (
    <>
      <TextContainer>
        <Title>‘Gharantia's Guardian’</Title>
        {/* <Subtitle>By L.M. Douglas</Subtitle> */}
        <Description>{texts[1].synopsis}</Description>
      </TextContainer>
    </>
  );
};

const Description = styled.p`
  /* font-size: 1.2rem; */
  line-height: 1.4;
  max-width: 620px;
  /* padding-right: 1.75rem; */
  margin: 0;
  @media (max-width: 900px) {
    font-size: 1.1rem;
    padding-right: 0;
  }
  @media (max-width: 800px) {
    max-width: 100vw;
    margin: 0 0 1rem 0;
  }
`;

const TextContainer = styled.div`
  color: white;
  width: 54%;
  max-width: 640px;
  @media (max-width: 960px) {
    width: 98%;
    margin-left: 1.5rem;
  }
  @media (max-width: 800px) {
    width: 100%;
    max-width: 100vw;
    margin: 0;
    position: relative;
    left: 50%;
    transform: translate(-50%);
  }
`;

const Title = styled.h1`
  padding-top: 1rem;
  margin: 0;
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
    padding-top: 5rem;
  }
`;

const Subtitle = styled.h2`
  margin: 0 0 0.625rem;
`;

export default HeroText;
