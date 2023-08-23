import React from "react";
import styled from "styled-components";

const Form = (props) => {
  const onSubmitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <Div>
      <FromContainer>
        <H1>Please send us any requests or queries using this form:</H1>
        <StyledForm
          name="BasketForm"
          method="POST"
          data-netlify="true"
          onSubmit={onSubmitHandler}
        >
          <input type="hidden" name="BasketForm" value="BasketForm" />

          <Label htmlFor="name">
            Your name
            <Input id="name" type="text" name="name" />
          </Label>
          <Label htmlFor="email">
            Your email *
            <Input id="email" type="email" name="email" required="required" />
          </Label>

          <Label htmlFor="textarea">
            Message *
            <TextArea
              id="textarea"
              type="textarea"
              name="textarea"
              style={{
                height: "140px",
                fontSize: "2.4rem",
              }}
            />
          </Label>

          <Label htmlFor="checkbox">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Checkbox type="checkbox" required="required" />
              <CheckText>
                I am happy to receive emails regarding this message *
                {/* </a> */}
              </CheckText>
            </div>
          </Label>

          <InputButton type="submit" value="Send message" />
        </StyledForm>
      </FromContainer>
    </Div>
  );
};

const Div = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  width: 100%;
  min-width: 340px;
  height: fit-content;
`;

const FromContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0.6rem 0.75rem 2rem 0.75rem;
  border-radius: 0.8rem;
  @media (max-width: 600px) {
    padding: 22px;
  }
`;

const H1 = styled.h1`
  font-size: 22px;
  padding-left: 3rem;
  margin-bottom: 1rem;
  font-weight: 300;
  margin-top: 20px;
  padding: 0.6rem 0.75rem 1rem 0.75rem;
  border-radius: 0.8rem;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 460px;
  min-width: 320px;
  margin-top: 12px;
  @media (max-width: 600px) {
    max-width: 90%;
  }
`;

const Input = styled.input`
  max-width: 460px;
  min-width: 320px;
  padding: 7px;
  height: 30px;
  outline: 0;
  border: 0;
  border-bottom: 2px solid black;
  font-size: 22px;
`;
const TextArea = styled.textarea`
  font-family: "Poppins, sans-serif";
  max-width: 460px;
  min-width: 320px;
  padding: 7px;
  outline: 0;
  border: 0;
  border-bottom: 2px solid black;
  position: relative;
  left: 50%;
  transform: translate(-50%);
  font-size: 1.6rem;
  margin-bottom: 22px;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 20px;
  max-width: 460px;
  min-width: 320px;
`;

const Checkbox = styled.input`
  height: 22px;
  width: 22px;
  outline: 0.2rem solid black;
  accent-color: #333;
  &:checked {
    background-color: #fff;
    color: #333;
  }
  @media (max-width: 600px) {
    height: 12px;
    width: 12px;
  }
`;

const CheckText = styled.p`
  text-align: left;
  font-size: 16px;
  line-height: 1.6;
  max-width: 460px;
  min-width: 320px;
  padding-left: 14px;
  padding-bottom: 2px;
  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

const InputButton = styled.input`
  border-radius: 0.75rem;
  outline: 3px solid black;
  border: 0;
  margin-top: 18px;
  font-size: 20px;
  padding: 20px 16px;
  width: 180px;
  position: relative;
  left: 50%;
  transform: translate(-50%);
  background: #fff;
  cursor: pointer;
  @media (max-width: 600px) {
    font-size: 18px;
    padding: 12px 8px;
    width: 150px;
  }
`;

export default Form;
