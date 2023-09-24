import { FaFacebook } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { Link } from "react-router-dom";
import styled from "styled-components";
import footerBg from "../../assets/imgs/footer-bg.jpg";
import logo2 from "../../assets/logo2.png";

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
            <SubName>'Chronicles of the Endless war'</SubName>
            <a
              href="mailto:info.lmdouglasATgmailDOTcom"
              target="_blank"
              rel="noopener noreferrer"
              onClick="this.href=this.href
              .replace(/AT/,'&#64;')
              .replace(/DOT/,'&#46;')"
            >
              <Img
                className="email-img"
                src="src/assets/imgs/email_img.png"
                alt="info.lmdouglas@gmail.com"
                // alt="info dot lmdouglas at gmail dot com"
              />
            </a>
          </NameDiv>
          <SocialDiv>
            <Icon>
              <a
                href="https://www.facebook.com/VictorBlancoWebDesign/"
                target="_blank"
                rel="noreferrer"
                aria-label="Visit Victor Blanco's Facebook Page"
              >
                <FaFacebook
                  style={{ color: "var(--gold)", fontSize: "2.6rem" }}
                />
              </a>
            </Icon>
            <Icon>
              <a
                href="https://www.instagram.com/victorblancoweb/"
                target="_blank"
                rel="noreferrer"
                aria-label="Visit Lorraine's Instagram Page"
              >
                <GrInstagram
                  style={{ color: "var(--gold)", fontSize: "2.6rem" }}
                />
              </a>
            </Icon>
          </SocialDiv>
        </Div>
        <CopyDiv>
          {" "}
          <a href="https://victorblancoweb.com/" target="_blank">
            {" "}
            <H4>
              Website Victor Blanco Web - {new Date().getFullYear()} &copy;
            </H4>
          </a>
          <Link to="/terms">
            <Terms>Terms & Conditions</Terms>
          </Link>{" "}
        </CopyDiv>
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
  opacity: 0.04;
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
  justify-content: space-evenly;
  align-items: center;
  height: 300px;
  width: 100%;

  @media (max-width: 400px) {
    flex-direction: column;
  }
`;

const NameDiv = styled.div`
  font-family: "IM Fell Double Pica";
  display: flex;
  flex-direction: column;
  height: fit-content;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  color: var(--gold);
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

const SocialDiv = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  @media (max-width: 400px) {
    flex-direction: row;
  }
`;

const Icon = styled.div`
  margin: 0.625rem 0;
  font-size: 2.375rem;
  margin-right: 2.25rem;
  a {
    color: white !important;
  }
`;

const CopyDiv = styled.div`
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  display: flex;
  max-width: fit-content;
  margin: 0 auto;
  padding-bottom: 0px;
`;

const H4 = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  font-size: 13px;
  color: var(--white);

  a {
    color: white;
  }
`;
const Terms = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  margin-left: 4px;
  color: var(--gold);
`;

const Img = styled.img`
  max-width: 13.63rem;
  margin-top: 0.4rem;
`;

export default Footer;
