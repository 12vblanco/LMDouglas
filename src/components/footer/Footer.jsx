import { FaFacebook } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import styled from "styled-components";
import footerBg from "../../assets/imgs/footer-bg.jpg";
import logo2 from "../../assets/logo2.png";
import Newsletter from "./Newsletter";

const Footer = () => {
  return (
    <Container>
      <BackgroundLayer />
      <ContentLayer>
        <Div>
          <NameDiv>
            <LogoDiv>
              <Logo src={logo2} alt="L.M. Douglas Logo" />
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
        <H4>Website Victor Blanco - {new Date().getFullYear()} &copy;</H4>
      </ContentLayer>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  height: 400px;
  width: 100%;
  background: var(--dark);
`;

const BackgroundLayer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url(${footerBg}) no-repeat center center;
  background-size: cover;
  opacity: 0.07;
  z-index: 0;
`;

const ContentLayer = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
  width: 100%;
`;

const NameDiv = styled.div`
  font-family: "IM Fell Double Pica";
  display: flex;
  flex-direction: column;
  height: fit-content;
  justify-content: center;
  align-items: center;
  font-size: 2.25rem;
  color: white;
`;

const LogoDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

const Logo = styled.img`
  width: 5rem;
  height: 5rem;
  margin: 0 0.75rem;
`;

const Name = styled.h2`
  font-size: 2.625rem;
`;

const SubName = styled.p`
  font-size: 1.375rem;
  font-style: italic;
  font-family: "lato", sans-serif;
`;

const NewsDiv = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.375rem;
  font-family: "lato", sans-serif;
`;

const SocialDiv = styled.div`
  display: flex;
  color: white;
`;

const Icon = styled.div`
  margin: 0.625rem 0;
  font-size: 2.375rem;
  margin-right: 2.25rem;
  a {
    color: white !important;
  }
`;

const H4 = styled.div`
  display: flex;
  justify-content: center;
  background: var(--dark);
  padding: 0.75rem 0;
  color: white;
  height: fit-content;
  background: transparent;
  margin-bottom: -20px;
  width: 100%;
  font-size: 14px;
`;

export default Footer;
