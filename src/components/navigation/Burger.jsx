import React, { useEffect } from "react";
import { FaFacebook } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Burger = ({ handleToggle, isOpen }) => {
  const handleHomeClick = () => {
    handleToggle();
    window.location.href = "/home";
  };
  const handleBioClick = () => {
    handleToggle();
    window.location.href = "/bio";
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      {/* <BurgerIcon className={isOpen ? "open" : "closed"} onClick={handleToggle}>
        <BurgerIconLines className={isOpen ? "open line-1" : "closed line1"} />
        <BurgerIconLines className={isOpen ? "open line-2" : "closed line2"} />
        <BurgerIconLines className={isOpen ? "open line-3" : "closed line3"} />
      </BurgerIcon> */}
      <OverlayMenu>
        {/* <MenuList>
          <MenuItem onClick={handleHomeClick}>Home</MenuItem>
          <MenuItem onClick={handleBioClick}>Bio</MenuItem>
          <Div>
            <Icon>
              <a
                href="https://www.facebook.com/profile.php?id=100083225184556"
                target="_blank"
                rel="noreferrer"
                aria-label="Visit Victor Blanco's Facebook Page"
              >
                <FaFacebook
                  style={{ color: "var(--gold)", fontSize: "2.6rem" }}
                />
              </a>
            </Icon>
            <Icon>
              <a
                href="https://www.instagram.com/l_m_douglas_author/"
                target="_blank"
                rel="noreferrer"
                aria-label="Visit Victor Blanco's Instagram Page"
              >
                <GrInstagram
                  style={{ color: "var(--gold)", fontSize: "2.6rem" }}
                />
              </a>
            </Icon>
          </Div>
        </MenuList> */}
      </OverlayMenu>
    </>
  );
};

const BurgerIcon = styled.div`
  position: relative;
  height: 3.125rem;
  width: 3.125rem;
  cursor: pointer;
  margin-top: 0.1875rem;

  &.open .line-1 {
    position: absolute;
    top: 1rem;
    left: 0.625rem;
    transform: rotate(45deg) translate(0.125rem, 0.25rem);
  }

  &.open .line-2 {
    position: absolute;
    left: 0.6rem;
    top: 1.6875rem;
    transform: rotate(-45deg) translate(0.3125rem, -0.3125rem);
  }

  &.open .line-3 {
    background: transparent;
    transform: translateX(-4.375rem);
  }

  &.closed .line1 {
    position: absolute;
    top: 13px;
    border-radius: 30% 30% 0 0;
    height: 0.375rem;
  }
  &.closed .line2 {
    position: absolute;
    top: 1.8125rem;
    border-radius: 0 0 22% 22%;
    height: 0.375rem;
  }
  &.closed .line3 {
    background: var(--dark);
  }

  @media (min-width: 900px) {
    display: none;
  }
`;

const BurgerIconLines = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 0.3125rem;
  width: 1.875rem;
  background-color: var(--dark);
  transition: all 0.3s ease-in-out;

  &::before,
  &::after,
  &::nth-child(3) {
    content: "";
    position: absolute;
    height: 0.25rem;
    width: 1.875rem;
    background-color: var(--dark);
    transition: all 0.3s ease-in-out;
  }

  &::before {
    top: -0.5625rem;
    left: 0;
    border-radius: 50% 50% 0 0;
    transform: ${(props) =>
      props.isOpen
        ? "rotate(-45deg) translate(4px, -4px)"
        : "rotate(45deg) translate(-4px, 4px)"};
  }

  &::after {
    top: 0.475rem;
    left: 0;
    border-radius: 0 0 50% 50%;
    transform: rotate(45deg) translate(0.25rem, 0.25rem);
  }

  &:nth-child(3) {
    top: 1.325rem;
    left: 18;
    height: 0.225rem;
    transform-origin: center;
  }
`;

const OverlayMenu = styled.div`
  position: fixed;
  margin-top: 8.74rem;
  top: 0;
  left: 0;
  width: 100vw;
  max-width: 100vw;
  height: 100vh;
  background: var(--dark);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  transition: transform 0.3s ease-in-out;
  transform: ${(props) =>
    props.isOpen ? "translateX(0px)" : "translateX(100%)"};
`;

const MenuList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: var(--gold);
  margin-top: -182px;
  @media (max-width: 440px) {
    margin-top: -50%;
  }
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 0.875rem;
`;

const MenuItem = styled(Link)`
  font-size: 1.875rem;
  letter-spacing: -0.175rem;
  margin: 0.9375rem;
  color: var(--gold);
  transition: all 0.5 linear;
`;

const Icon = styled.div`
  margin: 1.125rem;
  padding-top: 2rem;
  @media (max-width: 940px) {
    font-size: 1.625rem;
    margin: 0.25rem 0.75rem;
  }
`;

export default Burger;
