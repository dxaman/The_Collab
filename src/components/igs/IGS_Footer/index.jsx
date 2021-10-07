import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
  FaPhoneSquareAlt,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import {
  TopLine,
  Tittle,
  SocialIconLink,
  SocialIcons,
  SocialLogo,
} from "./FooterElements";
import { animateScroll as scroll } from "react-scroll";
import { useEffect, useState } from "react";
import "./styles4.css";
const PC_Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  // This function will scroll the window to the top
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className="footer2">
      <div className="footer-content">
        <div className="footer-section contact">
          <SocialLogo to="/" onClick={toggleHome}>
            <img src="https://i.ibb.co/zxtxY7C/Group-63.png" title="Logo of Policy Conclave"/>
          </SocialLogo>
          <TopLine>
            <span>Public Policy</span>
            <br />
            <span>& Opinion Cell</span>
          </TopLine>
          <Tittle> Follow Us </Tittle>
          <SocialIcons title="follow us here">
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
              className="instagram"
            >
              <FaInstagram />
            </SocialIconLink>
            <SocialIconLink
              href="//www.youtube.com/channel/UCL6N8QXTgLIdj2SzxYhHrag/videos"
              target="_blank"
              arial-label="Youtube"
              className="youtube"
            >
              <FaYoutube />
            </SocialIconLink>
            <SocialIconLink
              href="/"
              target="_blank"
              arial-label="Twitter"
              className="twitter"
            >
              <FaTwitter />
            </SocialIconLink>
            <SocialIconLink
              href="//www.linkedin.com/company/sos-iitkanpur/"
              target="_blank"
              arial-label="Linkedin"
              className="linkedin"
            >
              <FaLinkedin />
            </SocialIconLink>
          </SocialIcons>
        </div>
        <div className="footer-section links">
          <Tittle> Quick Links </Tittle>
          <ul>
            <Link to="/" className="link">
              <li>Home</li>
            </Link>
            <Link to="../../igs" className="link">
              <li>Indian Governance Summit</li>
            </Link>
            <Link to="../pc" className="link">
              <li>Policy Conclave</li>
            </Link>
            <Link to="../../igs" className="link">
              <li>link4</li>
            </Link>
            <Link to="../../igs" className="link">
              <li>link5</li>
            </Link>
          </ul>
        </div>
        <div className="footer-section aboutus">
          <Tittle>Contact Us</Tittle>
          <TopLine>Post :-</TopLine>
          <TopLine>Name</TopLine>
          <p>
            <FaPhoneSquareAlt></FaPhoneSquareAlt> 1234567890
          </p>
          <p>
            <HiOutlineMail></HiOutlineMail> info@example.com
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        PPOC © {new Date().getFullYear()} All rights reserved.
      </div>
      {showButton && (
        <button
          title="Back to top"
          onClick={scrollToTop}
          className="back-to-top"
        >
          &#8679;
        </button>
      )}
    </div>
  );
};

export default PC_Footer;
