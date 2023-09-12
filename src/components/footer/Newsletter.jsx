import React from "react";
import styled from "styled-components";

function Newsletter() {
  // const handleSuccess = () => {
  //   try {
  //     window.top.location.href = "https://www.lmdouglas.com/newsSuccess";
  //   } catch (e) {
  //     window.location.href = "https://www.lmdouglas.com/newsSuccess";
  //   }
  // };

  return (
    <Div>
      <div
        id="mlb2-7464443"
        className="ml-form-embedContainer ml-subscribe-form ml-subscribe-form-7464443"
      >
        <div className="ml-form-align-center">
          <div className="ml-form-embedWrapper embedForm">
            <div className="ml-form-embedBody ml-form-embedBodyHorizontal row-form">
              <div className="ml-form-embedContent" style={{}}>
                <h4></h4>
                <p>Join our newsletter</p>
              </div>
              <form
                className="ml-block-form"
                action="https://assets.mailerlite.com/jsonp/568565/forms/98256287424316664/subscribe"
                data-code=""
                method="post"
                target="_blank"
              >
                <div className="ml-form-horizontalRow">
                  <div className="ml-input-horizontal">
                    <div
                      style={{ width: "100%" }}
                      className="horizontal-fields"
                    >
                      <div className="ml-field-group ml-field-email ml-validate-email ml-validate-required">
                        <Input
                          type="email"
                          className="form-control"
                          data-inputmask=""
                          name="fields[email]"
                          placeholder="Email"
                          autoComplete="email"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="ml-button-horizontal primary">
                    <InputButton type="submit" className="primary">
                      Subscribe
                    </InputButton>
                  </div>
                </div>
                <DivCheck className="ml-form-checkboxRow ml-validate-required">
                  <label className="checkbox">
                    <input type="checkbox" />
                    <CheckLabel>
                      I would like to receive news and updates.
                    </CheckLabel>
                  </label>
                </DivCheck>
                <input type="hidden" name="ml-submit" value="1" />
                <input type="hidden" name="anticsrf" value="true" />
              </form>
            </div>
            <div
              className="ml-form-successBody row-success"
              style={{ display: "none" }}
            >
              <div className="ml-form-successContent">
                <h4>Thank you!</h4>
                <p>You have successfully joined our subscriber list.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Div>
  );
}

const Div = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
`;

const InputButton = styled.button`
  border-radius: 0.75rem;
  outline: 0.1875rem solid var(--dark);
  border: 0;
  margin-top: 1.125rem;
  font-size: 1rem;
  padding: 0.6rem 0.4rem;
  width: 6rem;
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

const DivCheck = styled.div`
  display: flex;
  flex: 1;
`;
const Input = styled.input`
  height: 40px;
  border-radius: 6px;
  padding: 6px;
`;

const CheckLabel = styled.p`
  font-size: 10px;
  margin-left: 28px;
`;

export default Newsletter;
