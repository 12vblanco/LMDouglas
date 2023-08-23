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
  width: 100%;
  max-width: 800px;
  justify-content: center;
  align-items: center;
`;
const LogoImg = styled.img`
  max-width: 90px;
  margin: 0 12px;

  @media (max-width: 600px) {
    min-width: 120px;
  }
`;

export default Logo;
