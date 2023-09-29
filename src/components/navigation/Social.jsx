import React from "react";
import { FaFacebook } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import styled from "styled-components";

const Social = () => {
  return (
    <Div>
      <Icon>
        <a
          href="https://www.facebook.com/profile.php?id=100083225184556"
          target="_blank"
          rel="noreferrer"
          aria-label="Visit Victor Blanco's Facebook Page"
        >
          <FaFacebook />
        </a>
      </Icon>
      <Icon>
        <a
          href="https://www.instagram.com/l_m_douglas_author/"
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
  font-size: 2.25rem;
  margin: 1.125rem;
  padding-top: 0.5rem;
  color: inherit;
  @media (max-width: 940px) {
    font-size: 1.625rem;
    margin: 0.25rem 0.75rem;
  }
`;

export default Social;
