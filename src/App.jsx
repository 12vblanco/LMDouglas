import React from "react";
import CookieConsent from "react-cookie-consent";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navigation/Navbar";
import Bio from "./components/pages/Bio";
import Home from "./components/pages/Home";
import Success from "./components/pages/Success";
import Terms from "./components/terms/Terms";

function App() {
  return (
    <BrowserRouter>
      <CookieConsent
        containerClasses="cookie_container"
        buttonText="Accept"
        style={{
          background: "rgba(20, 20, 20, 0.9)",
          fontWeight: "500",
          height: "fit-content",
          alignItems: "center",
          fontSize: "17px",
        }}
        buttonStyle={{
          borderRadius: "50px",
          padding: "14px 26px",
          marginRight: "16px",
          fontSize: "18px",
          fontWeight: "700",
          background: "var(--gold)",
          color: "rgb(2, 60, 113)",
        }}
        contentStyle={{
          textAlign: "left",
          marginBottom: "18px",
          padding: "12px",
        }}
      >
        {" "}
        I use cookies in my website. By clicking “Accept”, you consent to the
        use of these the cookies. To learn more about how we use cookies and
        your rights, please read our
        <Span>
          <a href="/terms"> Terms of Service</a>
        </Span>
        .
      </CookieConsent>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/home#contact" element={<Home />} />
        <Route path="/bio" element={<Bio />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/success" element={<Success />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

const Span = styled.span`
  a {
    color: var(--gold);
    text-decoration: underline;
  }
`;

export default App;
