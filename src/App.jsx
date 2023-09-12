import React from "react";
import CookieConsent from "react-cookie-consent";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navigation/Navbar";
import Bio from "./components/pages/Bio";
import Home from "./components/pages/Home";
import Terms from "./components/terms/Terms";

function App() {
  return (
    <BrowserRouter>
      <CookieConsent
      /*... your CookieConsent props ...*/
      >
        {/*... CookieConsent content ...*/}
      </CookieConsent>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/home#contact" element={<Home />} />
        <Route path="/bio" element={<Bio />} />
        {/* Uncomment and add components when they're ready */}
        <Route path="/terms" element={<Terms />} />
        {/* <Route path="/success" element={<Success />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

const Span = styled.span`
  a {
    color: white;
    text-decoration: underline;
  }
`;

export default App;
