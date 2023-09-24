import React from "react";
import CookieConsent from "react-cookie-consent";
import { BrowserRouter } from "react-router-dom";
import styled from "styled-components";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navigation/Navbar";
import Home from "./components/pages/Home";

function App() {
  return (
    <>
      <CookieConsent
        containerClasses="cookie_container"
        style={{
          background: "rgba(2, 60, 113, 0.9)",
          fontWeight: "500",
          height: "10vh",
          alignItems: "center",
          fontSize: "18px",
        }}
        buttonStyle={{
          borderRadius: "50px",
          padding: "20px 32px",
          fontSize: "18px",
          fontWeight: "700",
          background: "white",
          color: "rgb(2, 60, 113)",
        }}
        contentStyle={{ textAlign: "left", marginBottom: "12px" }}
      >
        This website uses cookies and third party software to monitor traffic
        anonymously and improve user experience. For more info read my{" "}
        <Span>
          <a href="/terms" aria-label="Visit Victor Blanco's Terms Page">
            terms & conditions
          </a>
        </Span>
      </CookieConsent>
      <BrowserRouter>
        <Navbar />
        <Home />
        <Footer />
      </BrowserRouter>
    </>
  );
}
const Span = styled.span`
  a {
    color: white;
    text-decoration: underline;
  }
`;

export default App;
