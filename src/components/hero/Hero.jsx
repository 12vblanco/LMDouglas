import React from "react";
import styled from "styled-components";
import brick from "../../assets/bgs/rocks.png";
import book_coverX1 from "../../assets/imgs/book_coverX1.png";
import book_coverX2 from "../../assets/imgs/book_coverX2.png";
import book_coverX3 from "../../assets/imgs/book_coverX3.png";
import forest from "../../assets/imgs/forest.png";

const Hero = () => {
  return (
    <>
      <Tag id="home" />
      <HeroSection>
        <BackgroundImage />
        <Overlay />
        <Content>
          <ImageContainer>
            <BookImg
              src={book_coverX1}
              srcset={`${book_coverX2} 2x, ${book_coverX3} 3x`}
              alt="Book's cover"
              width="255"
              height="380"
            />
          </ImageContainer>
          <TextContainer>
            <Title>‘Gharantia's Guardian’</Title>
            <Subtitle>By L.M. Douglas</Subtitle>
            <Description>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              commodo, ligula vel laoreet euismod, turpis elit dictum elit, eu
              facilisis libero turpis vitae augue. Praesent pellentesque massa
              eget nunc lobortis auctor.
            </Description>
          </TextContainer>
        </Content>
      </HeroSection>{" "}
      <BannerDiv>
        <DivHero>
          {" "}
          <Overlay2 />
          <DivHeroText>"somethign something somthing"</DivHeroText>
        </DivHero>
      </BannerDiv>
    </>
  );
};

const Tag = styled.div``;

const HeroSection = styled.div`
  position: relative;
  height: calc(100vh - 122px);
  margin-top: 7.125rem;
  max-width: 100vw;

  @media (max-width: 600px) {
    height: fit-content;
    padding: 1.375rem 0.75rem;
  }
`;

const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  max-width: 100vw;
  height: 100%;
  background-image: url(${forest});
  background-size: cover;
  background-position: center;
  z-index: -1;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  max-width: 100vw;
  height: 100%;
  background: var(--dark);
  opacity: 0.45;
  z-index: 0;
  @media (max-width: 600px) {
    width: 100vw;
  }
`;

const Content = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  max-width: 1280px;
  width: 90%;
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

const BannerDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  height: 100%;
  position: relative;
  z-index: 1;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;
`;

const BookImg = styled.img`
  max-width: 100%;
  height: auto;
  min-width: 320px;
  margin: 0.5rem;
`;

const TextContainer = styled.div`
  color: white;
  width: 53%;
  max-width: 560px;
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
  font-size: 2.625rem;
  margin: 0;
`;

const Subtitle = styled.h2`
  font-size: 1.875rem;
  margin: 0 0 0.625rem;
`;

const Description = styled.p`
  font-size: 1.375rem;
  line-height: 1.5;
  max-width: 500px;
  margin: 0;
  @media (max-width: 800px) {
    max-width: 100%;
    margin: 0 0 1rem 0;
  }
`;

const Overlay2 = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  background: var(--dark);
  opacity: 0.96;
  z-index: 1;
  @media (max-width: 600px) {
    width: 100vw;
  }
`;

const DivHero = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${brick});
  background-size: cover;
  background-position: center;
  width: 100vw;
  height: 4.375rem;
  color: white;
`;

const DivHeroText = styled.p`
  font-size: 1.375rem;
  z-index: 12;
  font-style: italic;
  color: var(--white);
`;

export default Hero;
