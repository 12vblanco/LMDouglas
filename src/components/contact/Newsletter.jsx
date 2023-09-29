import React from "react";
import styled from "styled-components";

function Newsletter() {
  const [isSubscribed, setIsSubscribed] = React.useState(false);
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    try {
      const response = await fetch(e.target.action, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        e.target.reset();
        setIsSubscribed(true);
      } else {
        // Handle error
      }
    } catch (error) {
      // Handle network error
    }
  };

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
                <P>Join my newsletter</P>
              </div>
              <form
                className="ml-block-form"
                action="https://assets.mailerlite.com/jsonp/568565/forms/98256287424316664/subscribe"
                data-code=""
                method="post"
                // target="_blank"
                onSubmit={handleFormSubmit}
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
                  <DivCheck className="ml-form-checkboxRow ml-validate-required">
                    <label className="checkbox">
                      <input type="checkbox" required />
                      <label style={{ marginLeft: "12px", fontSize: "12px" }}>
                        I would like to receive news and updates.
                      </label>
                    </label>
                  </DivCheck>
                  <div className="ml-button-horizontal primary">
                    <InputButton
                      type="submit"
                      className="primary"
                      style={{ borderRadius: "0.75rem", color: "#333" }}
                    >
                      Join
                    </InputButton>
                  </div>
                </div>

                <input type="hidden" name="ml-submit" value="1" />
                <input type="hidden" name="anticsrf" value="true" />
              </form>
            </div>
            <div
              className="ml-form-successBody row-success"
              style={{ display: isSubscribed ? "block" : "none" }}
              // style={{ display: isSubscribed ? "block" : "block" }}
            >
              <div
                className="ml-form-successContent"
                style={{ position: "absolute" }}
              >
                <h4 style={{ color: "var(--gold)" }}>Thank you!</h4>
                <p style={{ fontSize: "14px" }}>
                  For joining my subscriber list.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Div>
  );
}

const Div = styled.div`
  color: var(--dark);
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  height: 200px;
`;

const InputButton = styled.button`
  border-radius: 0.75rem !important;
  outline: 0.1275rem solid var(--dark) !important;
  border: 0;
  margin-top: 1.125rem;
  font-size: 1rem;
  padding: 0.6rem 1rem;
  background: #fff;
  cursor: pointer;
  box-sizing: border-box;
  position: relative;
  left: 50%;
  transform: translate(-50%);
  color: var(--dark) !important;
  @media (max-width: 600px) {
    font-size: 1.125rem;
  }
`;

const DivCheck = styled.div`
  display: flex;
  height: 30px;
  margin-top: 12px;
  justify-content: center;
  align-items: center;
`;
const Input = styled.input`
  height: 40px;
  border-radius: 6px;
  width: 100%;
  padding: 6px;
  outline: 0.1275rem solid var(--dark);
  border: 0;
  font-size: 1rem;
  padding: 0.6rem 0.4rem;
`;

const P = styled.p`
  font-size: 26px;
  margin: 12px 0;
`;

export default Newsletter;
