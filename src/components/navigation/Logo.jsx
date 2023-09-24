import React from "react";
import styled from "styled-components";

const Logo = (props) => {
  return (
    <>
      <Div>
        <LogoImg src={props.children} />
      </Div>
    </>
  );
};

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const LogoImg = styled.img`
  max-width: 90px;
  margin: 0 0.75rem;

  /* @media (max-width: 799px) {
    max-width: 120px;
  } */
`;

export default Logo;
