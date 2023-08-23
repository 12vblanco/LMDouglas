import React from "react";
import styled from "styled-components";
import img1 from "../../assets/imgs/contactImg.png";
import Tag from "../Tag";
import Form from "./Form";

const Contact = () => {
  return (
    <>
      {" "}
      <Tag id="contactFrom" />
      <Div>
        <Form />

        <Img src={img1} />
      </Div>
    </>
  );
};

const Div = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  max-width: 1240px;
  width: 100vw;
  margin: 0 auto;
  height: 680px;
  color: #000;
  @media (max-width: 600px) {
    flex-direction: column-reverse;
    height: fit-content;
    padding: 42px;
  }
`;

const Img = styled.img`
  border-radius: 8px;
  margin-left: 42px;
  min-width: 340px;
  max-width: 540px;
  width: 80vw;
  height: auto;

  @media (max-width: 600px) {
    margin-left: 0;
  }
`;

export default Contact;
