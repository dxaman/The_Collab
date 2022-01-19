import React, { useState } from "react";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper2,
  ArrowForward,
  ArrowRight,
  TattiBg,
  TattiBg2,
  TattiBg3,
  SocialHandle,
} from "./HeroElements";
import { Button } from "../ButtonElements";
import { SocialIconLink, SocialIcons } from "../Footer/FooterElements";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavLinks,
  NavItem,
  NavBtn,
  NavBtnLink2,
} from "../Navbar/NavbarElements";

const Hero = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer id="home">
      <HeroBg>
        <TattiBg />
        <VideoBg />
        <TattiBg2 />
        <TattiBg3 />
      </HeroBg>
      <HeroContent>
        <HeroH1> Public Policy And Opinion Cell</HeroH1>
        <HeroP>
          "There's Tremendous Gap Between Public Opinion and Public Policy"
          <br></br>
          <br></br>-Noam Chomsky
        </HeroP>
        <HeroBtnWrapper2
          to="/theknowledgehunt"
          onMouseEnter={onHover}
          onMouseLeave={onHover}
          smooth={true}
          duration={500}
          spy={true}
          exact="true"
          offset={-80}
        >
          The Knowledge Hunt {hover ? <ArrowForward /> : <ArrowRight />}
        </HeroBtnWrapper2>
       
        <SocialHandle>
          <SocialIcons>
            <SocialIconLink
              href="//www.facebook.com/sos.iitk"
              target="_blank"
              arial-label="Facebook"
            >
              <FaFacebook />
            </SocialIconLink>
            <SocialIconLink
              href="//www.instagram.com/ppoc_iitk/"
              target="_blank"
              arial-label="Instagram"
            >
              <FaInstagram />
            </SocialIconLink>
            <SocialIconLink
              href="//www.youtube.com/channel/UCL6N8QXTgLIdj2SzxYhHrag/videos"
              target="_blank"
              arial-label="Youtube"
            >
              <FaYoutube />
            </SocialIconLink>
            <SocialIconLink href="/" target="_blank" arial-label="Twitter">
              <FaTwitter />
            </SocialIconLink>
            <SocialIconLink
              href="//www.linkedin.com/company/sos-iitkanpur/"
              target="_blank"
              arial-label="Linkedin"
            >
              <FaLinkedin />
            </SocialIconLink>
          </SocialIcons>
        </SocialHandle>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
