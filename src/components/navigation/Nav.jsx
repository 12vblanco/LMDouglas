import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import styled from "styled-components";

export function Nav() {
  const handleContactClick = () => {
    window.location.href = "/home#contact";
  };

  return (
    <Ul>
      <Li>
        <Link to={"/home"}>Home</Link>{" "}
      </Li>
      <Li>
        <Link to={"/bio"}>Bio</Link>{" "}
      </Li>
      <Li>
        <Link to={"/blog"}>Blog</Link>{" "}
      </Li>
    </Ul>
  );
}

const Li = styled.li`
  font-size: 1.375rem;
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  margin: 0.75rem 1.125rem;
  cursor: pointer;
  width: 50px;
  @media (max-width: 940px) {
    font-size: 1.125rem;
  }
  @media (max-width: 370px) {
    font-size: 1rem;
  }
`;

const Ul = styled.ul`
  display: flex;
  padding-right: 1.6rem;
  @media (max-width: 640px) {
    width: 100%;
    padding-right: 0;
    justify-content: center;
  }
`;
