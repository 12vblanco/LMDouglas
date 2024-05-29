import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logof from "../../assets/logoSolo.png";
import logo from "../../assets/logoSolo.webp";
import Logo from "./Logo";
import { Nav } from "./Nav";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();

    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <Main>
      <ContainerNav>
        {isMobile ? (
          <>
            <Link to="/">
              <LogoDiv>
                <Logo>{logo}</Logo>
                <picture>
                  <source srcSet={logo} type="image/webp" />
                  <source srcSet={logof} type="image/png" />
                  <Logo src={logo} alt="L.M. Douglas Logo" />
                </picture>
                <Column>
                  <Name>L.M. Douglas</Name>
                  <Nav />
                </Column>
              </LogoDiv>
            </Link>
          </>
        ) : (
          <>
            <Link to="/">
              <LogoDiv>
                <Logo>{logo}</Logo>
                <picture>
                  <source srcSet={logo} type="image/webp" />
                  <source srcSet={logof} type="image/png" />
                  <Logo src={logo} alt="L.M. Douglas Logo" />
                </picture>
                <Name>L.M. Douglas</Name>
              </LogoDiv>
            </Link>
            <DivNav>
              <Column>
                <Div>
                  <Nav />
                </Div>
              </Column>
            </DivNav>
          </>
        )}
      </ContainerNav>
    </Main>
  );
};

const Main = styled.div`
  display: flex;
  justify-content: center;
`;

const ContainerNav = styled.div`
  position: absolute;
  z-index: 9998;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1240px;
`;

const LogoDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  min-width: 400px;
  height: auto;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  @media (max-width: 640px) {
    align-items: center;
    min-width: auto;
  }
`;

const Name = styled.div`
  font-family: "IM Fell Double Pica";
  display: flex;
  flex-wrap: nowrap;
  width: fit-content;
  font-size: 2.375rem;
  width: auto;
  height: auto;
  justify-content: flex-start;
  align-items: center;
  padding-left: 1rem;
  @media (max-width: 940px) {
    font-size: 2rem;
  }
  @media (max-width: 370px) {
    font-size: 1.7rem;
  }
`;

const DivNav = styled.div`
  width: 100%;
  height: auto;
  width: 100%;
  overflow-x: hidden;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const Div = styled.div`
  display: flex;
  height: fit-content;
  justify-content: center;
  align-items: center;
`;
const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

export default Navbar;
