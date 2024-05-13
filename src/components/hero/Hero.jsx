import React from "react";
import styled from "styled-components";
import forest from "../../assets/imgs/forest.jpg";
import forestf from "../../assets/imgs/forest.webp";
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
          {/* </a> */}
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
    url(${forestf}) type("image/webp"),
    url(${forest}) type("image/png")
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

export default Hero;
