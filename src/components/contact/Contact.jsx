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
  width: 100vw;
  max-width: 1240;
  margin: 0 auto;
  height: 680px;
  color: var(--dark);
  @media (max-width: 710px) {
    flex-direction: column-reverse;
    height: fit-content;
    padding: 2.625rem;
  }
`;

const Img = styled.img`
  border-radius: 0.625rem;
  min-width: 340px;
  max-width: 440px;
  width: 40%;
  padding: 0.75rem;
  height: auto;

  @media (max-width: 600px) {
    margin-left: 0;
  }
`;

export default Contact;
