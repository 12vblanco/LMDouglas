import React, { useEffect, useState } from "react";
import styled from "styled-components";
import volcano from "../../assets/volcano.jpg";
import BookBlock2 from "./BookBlock2";
import HeroText2 from "./HeroText2";

const Hero2 = () => {
  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth > 850);
  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth > 850);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Tag id="home" />
      <HeroSection>
        <BackgroundImage />
        <Overlay />
        <Content>
          <HeroText2 isWideScreen={isWideScreen} />
          {isWideScreen && <BookBlock2 />}
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
  margin-top: 6.125rem;
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
  background-image: url(${volcano});
  background-image: image-set(url(${volcano}) type("image/jpg"));
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
  opacity: 0.75;
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

export default Hero2;
