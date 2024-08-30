import React from "react";
import styled from "styled-components";

const Form = (props) => {
  const onSubmitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <Div>
      <FromContainer>
        <FormTitle>
          Please send us any requests or queries using this form:
        </FormTitle>
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
  width: 1000%;
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
  max-width: 100%;
  @media (max-width: 600px) {
    padding: 1.375rem;
  }
`;

const FormTitle = styled.h3`
  font-size: 1.375rem;
  padding-left: 3rem;
  margin-bottom: 1rem;
  font-weight: 300;
  margin-top: 1.25rem;
  padding: 0.6rem 0.75rem 1rem 0.75rem;
  border-radius: 0.8rem;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 50vw;
  min-width: 320px;
  margin-top: 0.75rem;
  @media (max-width: 600px) {
    max-width: 90%;
  }
`;

const Input = styled.input`
  max-width: 50vw;
  min-width: 320px;
  padding: 0.4375rem;
  height: 1.875rem;
  outline: 0;
  border: 0;
  border-bottom: 2px solid var(--dark);
  font-size: 1.375rem;
`;
const TextArea = styled.textarea`
  font-family: "Poppins, sans-serif";
  max-width: 50vw;
  min-width: 320px;
  padding: 0.4375rem;
  outline: 0;
  border: 0;
  border-bottom: 0.125rem solid var(--dark);
  position: relative;
  left: 50%;
  transform: translate(-50%);
  font-size: 1.6rem;
  margin-bottom: 1.375rem;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 1.25rem;
  max-width: 460px;
  min-width: 320px;
`;

const Checkbox = styled.input`
  height: 1.375rem;
  width: 1.375rem;
  outline: 0.2rem solid var(--dark);
  accent-color: var(--dark);
  &:checked {
    background-color: #fff;
    color: var(--dark);
  }
  @media (max-width: 600px) {
    height: 0.75rem;
    width: 0.75rem;
  }
`;

const CheckText = styled.p`
  text-align: left;
  font-size: 1rem;
  line-height: 1.6;
  max-width: 460px;
  min-width: 320px;
  padding-left: 0.875rem;
  padding-bottom: 0.125rem;
  @media (max-width: 600px) {
    font-size: 0.875rem;
  }
`;

const InputButton = styled.input`
  border-radius: 0.75rem;
  outline: 0.1875rem solid var(--dark);
  border: 0;
  margin-top: 6.125rem;
  font-size: 1.125rem;
  padding: 1.25rem 1rem;
  width: 10rem;
  position: relative;
  left: 50%;
  transform: translate(-50%);
  background: #fff;
  cursor: pointer;
  @media (max-width: 600px) {
    font-size: 1.125rem;
    padding: 0.75rem 0.5rem;
    width: 150px;
  }
`;

export default Form;
