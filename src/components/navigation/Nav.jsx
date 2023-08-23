import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import styled from "styled-components";

export function Nav({}) {
  const handleContactClick = () => {
    window.location.href = "/home#contact";
  };

  return (
    <Ul>
      <Li>
        <Link to={"/home"}>Home</Link>{" "}
      </Li>
      <Li>
        <Link to={"/home#bio"}>Bio</Link>{" "}
      </Li>
      <Li>
        <Link to="/home#contactFrom" onClick={handleContactClick}>
          Contact
        </Link>
      </Li>
    </Ul>
  );
}

const Li = styled.li`
  font-size: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  margin: 12px 18px;
  cursor: pointer;
  width: 50px;
  @media (max-width: 600px) {
    font-size: 20px;
  }
`;

const Ul = styled.div`
  display: flex;
  flex-direction: row;
`;
