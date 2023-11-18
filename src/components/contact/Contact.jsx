import React from "react";
import styled from "styled-components";
import contactf from "../../assets/imgs/free_novella.png";
import contact from "../../assets/imgs/free_novella.webp";
import contactX2f from "../../assets/imgs/free_novellaX2.png";
import contactX2 from "../../assets/imgs/free_novellaX2.webp";
import contactX3f from "../../assets/imgs/free_novellaX3.png";
import contactX3 from "../../assets/imgs/free_novellaX3.webp";
import Tag from "../Tag";
import Newsletter from "./Newsletter";
const Contact = () => {
  return (
    <>
      {" "}
      <Tag id="contactFrom" />
      <Div>
        <Newsletter />
        <picture>
          <source
            srcSet={`${contact} 1x, ${contactX2} 2x, ${contactX3} 3x`}
            type="image/webp"
          />
          <source
            srcSet={`${contactf} 1x, ${contactX2f} 2x, ${contactX3f} 3x`}
            type="image/jpeg"
          />
          <Img
            src={contact}
            srcSet={`${contact} 1x, ${contactX2} 2x, ${contactX3} 3x`}
            alt="Contact Image"
          />
        </picture>
      </Div>
    </>
  );
};

const Div = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100vw;
  max-width: 1240px;
  margin: 0 auto;
  height: fit-content;
  color: var(--dark);
  @media (max-width: 710px) {
    flex-direction: column;
    height: fit-content;
    padding: 2.625rem;
  }
`;

const Img = styled.img`
  border-radius: 0.625rem;
  min-width: 320px;
  max-width: 420px;
  width: 40%;
  padding: 0.75rem;
  height: auto;

  @media (max-width: 600px) {
    margin-left: 0;
  }
`;

export default Contact;
