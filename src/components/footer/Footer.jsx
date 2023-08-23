import { FaFacebook } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import styled from "styled-components";
import logo2 from "../../assets/logo2.png";
import logo from "../../assets/logoWhite.png";
import Newsletter from "./Newsletter";

const Footer = () => {
  return (
    <>
      <Div>
        <NameDiv>
          <LogoDiv>
            <Logo src={logo2} />
            <Logo src={logo} />
          </LogoDiv>

          <Name>L.M. Douglas</Name>
          <SubName>'The Endless War Chronicles'</SubName>
        </NameDiv>
        <NewsDiv>
          <Newsletter />
          <SocialDiv>
            <Icon>
              <a
                href="https://www.facebook.com/VictorBlancoWebDesign/"
                target="_blank"
                rel="noreferrer"
                aria-label="Visit Victor Blanco's Facebook Page"
              >
                <FaFacebook />
              </a>
            </Icon>
            <Icon>
              <a
                href="https://www.instagram.com/victorblancoweb/"
                target="_blank"
                rel="noreferrer"
                aria-label="Visit Victor Blanco's Instagram Page"
              >
                <GrInstagram />
              </a>
            </Icon>
          </SocialDiv>
        </NewsDiv>
      </Div>
      <H4>
        Website Victor Blanco - {new Date().getFullYear()} &copy;
        <span>&nbsp;&nbsp;</span>
      </H4>{" "}
    </>
  );
};

const Div = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 300px;
  width: 100vw;
  background: #000;
  @media (max-width: 600px) {
    flex-direction: column-reverse;
    height: fit-content;
    padding: 42px;
  }
`;
const NewsDiv = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 22px;
  font-family: "lato", sans-serif;
  @media (max-width: 600px) {
    justify-content: center;
    align-items: center;
  }
`;

const SocialDiv = styled.div`
  display: flex;
  color: white;
`;

const Icon = styled.div`
  margin: 10px 0;
  font-size: 38px;
  margin-right: 36px;
  a {
    color: white !important;
  }
`;

const Logo = styled.img`
  width: 80px;
  height: 80px;
  margin: 0 12px;
`;

const NameDiv = styled.div`
  font-family: "IM Fell Double Pica";
  display: flex;
  flex-direction: column;
  height: fit-content;
  justify-content: center;
  align-items: center;
  font-size: 36px;
  color: white;
  @media (max-width: 600px) {
    margin-top: 12px;
  }
`;

const LogoDiv = styled.div`
  display: flex;
  flex-direction: row;
`;
const Name = styled.h2`
  font-size: 42px;
  @media (max-width: 600px) {
    margin-top: 24px;
  }
`;
const SubName = styled.p`
  font-size: 22px;
  font-style: italic;
  font-family: "lato", sans-serif;
`;

const H4 = styled.div`
  display: flex;
  justify-content: center;
  background: black;
  padding: 12px 0;
  color: white;
  height: 100%;
  width: 100%;
  font-size: 14px;
`;

export default Footer;
