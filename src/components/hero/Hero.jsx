import React from "react";
import styled from "styled-components";
import forestf from "../../assets/imgs/forest.png";
import forest from "../../assets/imgs/forest.webp";
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
  background-image: image-set(
    url(${forest}) type("image/webp"),
    url(${forestf}) type("image/png")
  );
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

export default Hero;
