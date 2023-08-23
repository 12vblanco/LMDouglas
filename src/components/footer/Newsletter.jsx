import React from "react";
import styled from "styled-components";

const Newsletter = () => {
  return (
    <Div>
      <FormDiv
        name="contact"
        netlify
        data-netlify-honeypot="bot-field"
        action="/Success"
      >
        <input type="hidden" name="bot-field" />
        <label htmlFor="email">Join our newsletter</label>
        <input type="email" name="email" />{" "}
      </FormDiv>{" "}
    </Div>
  );
};

const Div = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FormDiv = styled.form`
  display: flex;
  flex-direction: column;
  color: white;
  margin-bottom: 22px;
  width: 240px;
  input {
    height: 34px;
  }
`;

export default Newsletter;
