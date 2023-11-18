import { FaFacebook, FaTiktok } from "react-icons/fa";
import { FaThreads } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";
import { Link } from "react-router-dom";
import styled from "styled-components";
import emailImgf from "../../assets/imgs/email_img.png";
import emailImg from "../../assets/imgs/email_img.webp";
import footerBgf from "../../assets/imgs/footer-bg.jpg";
import footerBg from "../../assets/imgs/footer-bg.webp";
import logo2f from "../../assets/logo2.png";
import logo2 from "../../assets/logo2.webp";

const Footer = () => {
  const handleEmailClick = (e) => {
    e.currentTarget.href = e.currentTarget.href
      .replace(/AT/, "@")
      .replace(/DOT/, ".");
  };
  return (
    <Container>
      <BackgroundLayer />
      <ContentLayer>
        <Div>
          <SocialContainer>
            {" "}
            <SocialDiv>
              <Icon>
                <a
                  href="https://www.facebook.com/profile.php?id=100083225184556"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Visit Victor Blanco's Facebook Page"
                >
                  <FaFacebook
                    style={{ color: "var(--gold)", fontSize: "2.2rem" }}
                  />
                </a>
              </Icon>
              <Icon>
                <a
                  href="https://www.instagram.com/l_m_douglas_author/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Visit Lorraine's Instagram Page"
                >
                  <GrInstagram
                    style={{ color: "var(--gold)", fontSize: "2.2rem" }}
                  />
                </a>
              </Icon>
            </SocialDiv>
            <SocialDiv>
              <Icon>
                <a
                  href="https://www.tiktok.com/@lmdouglasauthor?_t=8fg6aYH55l2&_r=1"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Visit Victor Blanco's Facebook Page"
                >
                  <FaTiktok
                    style={{ color: "var(--gold)", fontSize: "2.2rem" }}
                  />
                </a>
              </Icon>
              <Icon>
                <a
                  href="https://www.threads.net/@l_m_douglas_author"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Visit Lorraine's Tik Tok Page"
                >
                  <FaThreads
                    style={{ color: "var(--gold)", fontSize: "2.2rem" }}
                  />
                </a>
              </Icon>{" "}
            </SocialDiv>
          </SocialContainer>
          <NameDiv>
            <LogoDiv>
              <picture>
                <source srcSet={logo2} type="image/webp" />
                <source srcSet={logo2f} type="image/png" />
                <Logo src={logo2} alt="L.M. Douglas Logo" />
              </picture>
            </LogoDiv>
            <Name>L.M. Douglas</Name>
            <SubName>'Chronicles of the Endless war'</SubName>
            <a
              href="mailto:info.lmdouglasATgmailDOTcom"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleEmailClick}
            >
              <picture>
                <source srcSet={emailImg} type="image/webp" />
                <source srcSet={emailImgf} type="image/png" />
                <Img src={emailImg} alt="info dot lmdouglas at gmail dot com" />
              </picture>
            </a>
          </NameDiv>
        </Div>
        <CopyDiv>
          {" "}
          <a href="www.victorblancoweb.com" target="_blank">
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
  background-image: url(${footerBgf});
  background-image: image-set(
    url(${footerBg}) type("image/webp"),
    url(${footerBgf}) type("image/jpeg")
  );
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
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

  @media (max-width: 700px) {
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
  @media (max-width: 700px) {
    margin-top: 1rem;
    flex-direction: row;
  }
`;
const SocialContainer = styled.div`
  display: flex;
`;

const Icon = styled.div`
  margin: 0.625rem 0;
  font-size: 2.075rem;
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
  @media (max-width: 400px) {
    flex-direction: column;
  }
`;

const H4 = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  font-size: 13px;
  color: var(--white);
  @media (max-width: 400px) {
    font-size: 12px;
    padding-bottom: 0.4rem;
  }
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
  @media (max-width: 400px) {
    font-size: 11px;
  }
`;

const Img = styled.img`
  max-width: 13.625rem;
  margin-top: 0.4rem;
`;

export default Footer;
