import React from "react";
import styled from "styled-components";
import map from "../../assets/imgs/map.jpg";
import mapX2 from "../../assets/imgs/mapX2.jpg";
import mapX3 from "../../assets/imgs/mapX3.jpg";
import mapLarge from "../../assets/imgs/map_large.jpg";
import Tag from "../Tag";

const Map = () => {
  return (
    <>
      {" "}
      <Tag id="map" />
      <Div>
        <H1>The Gharantia Realm</H1>
        <a href={mapLarge} target="_blank" rel="noopener noreferrer">
          {" "}
          <Img
            src={map}
            srcSet={`${map} 1x, ${mapX2} 2x, ${mapX3} 3x`}
            alt="Map of Gharantia"
          />
        </a>
      </Div>
    </>
  );
};

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 100vw;
  margin: 0 auto;
  padding-top: 5rem;
  padding-bottom: 8rem;
  color: var(--white);
  background: var(--dark);
  @media (max-width: 710px) {
    height: fit-content;
    padding: 2.625rem;
  }
`;

const Img = styled.img`
  border-radius: 0.625rem;
  max-width: auto;
  width: 500px;
  padding: 0.75rem;
  height: auto;

  @media (max-width: 600px) {
    margin-left: 0;
    max-width: 100vw;
  }
`;

const H1 = styled.h2`
  font-size: 42px;
  margin-bottom: 0.4rem;
  color: var(--gold);
`;

export default Map;
