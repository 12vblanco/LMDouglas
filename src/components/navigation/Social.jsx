import React from "react";
import { FaFacebook } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import styled from "styled-components";

const Social = () => {
  return (
    <Div>
      <Icon>
        <a
          href="https://www.facebook.com/VictorBlancoWebDesign/"
          target="_blank"
          rel="noreferrer"
          aria-label="Visit Victor Blanco's Facebook Page"
        >
          <FaFacebook />
        </a>
      </Icon>
      <Icon>
        <a
          href="https://www.instagram.com/victorblancoweb/"
          target="_blank"
          rel="noreferrer"
          aria-label="Visit Victor Blanco's Instagram Page"
        >
          <GrInstagram />
        </a>
      </Icon>
    </Div>
  );
};

const Div = styled.div`
  display: flex;
`;

const Icon = styled.div`
  font-size: 38px;
  margin: 16px;
  @media (max-width: 600px) {
    font-size: 22px;
    margin: 4px 12px;
  }
`;

export default Social;
