import React from "react";
import styled from "styled-components";
import rocks from "../assets/bgs/rocks.png";
import lor1 from "../assets/imgs/lorCir.png";
import texts from "../assets/texts";

const Bio = () => {
  return (
    <>
      <Tag id="bio" />
      <BioDiv>
        <Div>
          <Img src={lor1} />
          <Biography>{texts[0].biography}</Biography>
        </Div>
      </BioDiv>
      <OverlayDiv>
        <Overlay2 />
        <DivHero>
          <DivHeroText>"somethign something somthing"</DivHeroText>
        </DivHero>{" "}
      </OverlayDiv>
    </>
  );
};

const OverlayDiv = styled.div`
  position: relative;
`;

const BioDiv = styled.div`
  width: 100%;
  height: fit-content;
  padding: 60px 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 600px) {
    max-width: 100vw;
    padding: 22px 12px;
  }
`;
const Div = styled.div`
  width: 100%;
  max-width: 1240px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  @media (max-width: 980px) {
    max-width: 100%;
    height: fit-content;
    flex-wrap: wrap;
  }
  @media (max-width: 600px) {
    flex-direction: column;
    max-width: 100vw;
  }
`;

const Img = styled.img`
  width: 260px;
  height: 260px;
  border-radius: 50%;
  margin-right: 12px;
  @media (max-width: 980px) {
    margin: 0 12px 22px 0;
  }
  @media (max-width: 600px) {
    margin: 12px 0;
  }
`;
const Biography = styled.p`
  font-size: 22px;
  width: 580px;
  @media (max-width: 600px) {
    width: 90%;
  }
`;

const Overlay2 = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  background: rgba(66, 9, 1, 0.94);
  z-index: 1;
  max-width: 100vw;
`;

const DivHero = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${rocks});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 180px;
  color: white;
  max-width: 100vw;
`;

const DivHeroText = styled.p`
  font-size: 22px;
  z-index: 123;
  font-style: italic;
`;

const Tag = styled.div``;

export default Bio;
