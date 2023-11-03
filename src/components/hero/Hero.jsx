import React from "react";
import styled from "styled-components";
import forest from "../../assets/imgs/forest.png";
import HeroBook from "./HeroBook";
import HeroText from "./HeroText";

const Hero = () => {
  return (
    <>
      <Tag id="home" />
      <HeroSection>
        <BackgroundImage />
        <Overlay />
        <Content>
          <HeroBook />
          <HeroText />
        </Content>
      </HeroSection>
      <BannerDiv>
        {/* <DivHero>
          <Overlay2 /> */}
        {/* <DivHeroText>"somethign something somthing"</DivHeroText> */}
        {/* </DivHero> */}
      </BannerDiv>
    </>
  );
};

const Tag = styled.div``;

const HeroSection = styled.div`
  position: relative;
  height: calc(100vh - 122px);
  height: fit-content;
  margin-top: 7.125rem;
  padding: 1.6rem 0;
  max-width: 100vw;

  @media (max-width: 800px) {
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

// const Overlay2 = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100vw;
//   height: 100%;
//   background: var(--dark);
//   opacity: 0.96;
//   z-index: 1;
//   @media (max-width: 600px) {
//     width: 100vw;
//   }
// `;

// const DivHero = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   background-image: url(${brick});
//   background-size: cover;
//   background-position: center;
//   width: 100vw;
//   height: 2.375rem;
//   color: white;
// `;

export default Hero;
