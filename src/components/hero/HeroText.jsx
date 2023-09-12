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
  margin: 0;
  @media (max-width: 800px) {
    max-width: 100%;
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
    max-width: 100%;
    margin: 0;
    position: relative;
    left: 50%;
    transform: translate(-50%);
  }
`;

const Title = styled.h1`
  /* font-size: 2rem; */
  margin: 0;
`;

const Subtitle = styled.h2`
  /* font-size: 1.4rem; */
  margin: 0 0 0.625rem;
`;

export default HeroText;
