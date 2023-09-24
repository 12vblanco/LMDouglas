import React from "react";
import styled from "styled-components";
import rocks from "../assets/bgs/rocks.png";
import lor1 from "../assets/imgs/second_port 1.png";
import texts from "../assets/texts";

const BioBody = () => {
  return (
    <>
      <BioDiv>
        <Img src={lor1} />
        <Biography>{texts[0].biography}</Biography>
      </BioDiv>
      {/* <OverlayDiv> */}
      {/* <Overlay2 /> */}
      {/* <DivHero> */}
      {/* <DivHeroText>"somethign something somthing"</DivHeroText> */}
      {/* </DivHero>{" "}
      </OverlayDiv> */}
    </>
  );
};

const OverlayDiv = styled.div`
  position: relative;
`;

const BioDiv = styled.div`
  width: 100%;
  margin-top: 8.125rem;
  height: auto;
  padding: 5rem 0;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background: var(--dark);
  color: var(--white);
  @media (max-width: 748px) {
    max-width: 100vw;
    padding: 1rem 0.2rem;
  }
  @media (max-width: 650px) {
    flex-direction: column-reverse;
    padding: 1rem;
  }
`;

const Img = styled.img`
  width: 16.25rem;
  height: auto;
  border-radius: 60%;
  margin-right: 2.375rem;
  @media (max-width: 980px) {
    margin: 0 0.75rem 1.375rem 0;
  }
  @media (max-width: 650px) {
    margin: 1rem 0;
    width: 12.25rem;
  }
`;
const Biography = styled.p`
  font-size: 1.2rem;
  width: 40%;
  @media (max-width: 650px) {
    width: 100%;
    padding: 1.2rem;
  }
`;

// const Overlay2 = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100vw;
//   height: 100%;
//   background: var(--dark);
//   opacity: 0.92;
//   z-index: 1;
//   max-width: 100vw;
// `;

const DivHero = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${rocks});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 11.25rem;
  color: white;
  max-width: 100vw;
`;

const DivHeroText = styled.p`
  font-size: 1.375rem;
  z-index: 12;
  font-style: italic;
`;

const Tag = styled.div``;

export default BioBody;
