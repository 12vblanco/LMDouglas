import React from "react";
import styled from "styled-components";
import mapf from "../../assets/imgs/map.jpg";
import map from "../../assets/imgs/map.webp";
import mapX2f from "../../assets/imgs/mapX2.jpg";
import mapX2 from "../../assets/imgs/mapX2.webp";
import mapX3f from "../../assets/imgs/mapX3.jpg";
import mapX3 from "../../assets/imgs/mapX3.webp";
import mapLargef from "../../assets/imgs/map_large.jpg";
import Tag from "../Tag";

const Map = () => {
  return (
    <>
      {" "}
      <Tag id="map" />
      <Div>
        <H1>The Gharantia Realm</H1>
        <picture>
          <source
            srcSet={`${map} 1x, ${mapX2} 2x, ${mapX3} 3x`}
            type="image/webp"
          />
          <source
            srcSet={`${mapf} 1x, ${mapX2f} 2x, ${mapX3f} 3x`}
            type="image/jpeg"
          />
          <a href={mapLargef} target="_blank" rel="noopener noreferrer">
            <Img
              src={map}
              srcSet={`${map} 1x, ${mapX2} 2x, ${mapX3} 3x`}
              alt="Map of Gharantia"
            />
          </a>
        </picture>
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
  font-size: 30px;
  margin-bottom: 0.4rem;
  color: var(--gold);
`;

export default Map;
