import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo2f from "../../assets/logo.png";
import logo2 from "../../assets/logo.webp";
import logof from "../../assets/logoSolo.png";
import logo from "../../assets/logoSolo.webp";
import Burger from "./Burger";
import Logo from "./Logo";
import { Nav } from "./Nav";
import Social from "./Social";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 700);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 700);
    checkMobile();

    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);
  console.log("Is mobile?", isMobile);
  console.log("Window width:", window.innerWidth);

  return (
    <ContainerNav>
      {!isMobile ? (
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
            <Div>
              <Social />
            </Div>
          </DivNav>
        </>
      ) : (
        <DivBurger>
          <picture>
            <source srcSet={logo2} type="image/webp" />
            <source srcSet={logo2f} type="image/png" />
            <Logo src={logo2} alt="L.M. Douglas Logo" />
          </picture>{" "}
          <Burger handleToggle={handleToggle} isOpen={isOpen} />
        </DivBurger>
      )}
    </ContainerNav>
  );
};

const ContainerNav = styled.div`
  position: absolute;
  z-index: 9998; /* Add a high z-index value */
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.625rem;
  max-width: 1240px;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0%);
  @media (max-width: 400px) {
    padding: 0.125rem 0 1.125rem 0;
  }
`;

const LogoDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  min-width: 400px;
  height: fit-content;
  justify-content: center;
  align-items: center;
  padding: 0.75rem;
  cursor: pointer;
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
`;

const DivNav = styled.div`
  width: 100%;
  height: auto;
  width: 100%;
  overflow-x: hidden;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  @media (max-width: 700px) {
    display: none;
  }
`;

const DivBurger = styled.div`
  position: relative;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 1.25rem;
  width: 100%;
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
`;

export default Navbar;
