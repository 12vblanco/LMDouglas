import React, { useEffect, useState } from "react";
import styled from "styled-components";
import logo2 from "../../assets/logo.png";
import logo from "../../assets/logoSolo.png";
import Logo from "./Logo";
import { Nav } from "./Nav";
import Social from "./Social";

const Navbar = ({}) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.screen.width < 600);
  }, []);
  return (
    <ContainerNav>
      {!isMobile ? (
        <DivNav>
          <Div>
            <Logo>{logo}</Logo>
          </Div>
          <Column>
            <Name>L.M. Douglas</Name>
            <Div>
              <Nav />
            </Div>
          </Column>
          <Div>
            <Social />
          </Div>
        </DivNav>
      ) : (
        <DivNav>
          <Column>
            <Logo>{logo2}</Logo>
            <Div>
              <Nav />
            </Div>
            <Div>
              <Social />
            </Div>
          </Column>
        </DivNav>
      )}
    </ContainerNav>
  );
};

const ContainerNav = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DivNav = styled.div`
  width: 100%;
  height: 200px;
  max-width: 1240px;
  width: 100vw;
  display: flex;
  margin-top: 14px;
  justify-content: space-evenly;
  align-items: center;

  @media (max-width: 600px) {
    margin-top: 2px;
  }
`;

const Name = styled.div`
  font-family: "IM Fell Double Pica";
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  width: 100%;
  height: fit-content;
  justify-content: center;
  align-items: center;
  font-size: 46px;
  margin-top: 12px;
  margin-bottom: 40px;
  text-align: center;
`;
const Div = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: fit-content;
  justify-content: center;
  align-items: center;
`;
const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

export default Navbar;
