import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'
import { IGS_FooterContainer, IGS_FooterWrap, IGS_FooterLinkWrapper, IGS_FooterLinkItems, IGS_FooterLinkContainer, IGS_FooterLinkTitle, IGS_FooterLink, SocialIconLink, SocialIcons, SocialLogo, SocialMedia, SocialMediaWrap, WebsiteRights } from './IGS_FooterElements'
import { animateScroll as scroll } from 'react-scroll';
import {NavLogo} from "../IGS_Navbar/NavbarElements";

const IGS_Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  }

  return (
    <IGS_FooterContainer>
      <IGS_FooterWrap>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to='/' onClick={toggleHome}>
              <img src="https://i.ibb.co/ngkty7R/ppocbw.pnggg" style={{width:150, marginTop: -7, marginLeft: -100}} />

              <img src="https://i.ibb.co/7gNf1WP/igsbw.png" style={{width:150, marginTop: -7, marginLeft: 70}} />
            </SocialLogo>
            <WebsiteRights>
              PPOC © {new Date().getFullYear()} All rights reserved.
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink href='//www.facebook.com/sos.iitk' target='_blank' arial-label='Facebook'>
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href='//www.instagram.com/ppoc_iitk/' target='_blank' arial-label='Instagram'>
                <FaInstagram/>
              </SocialIconLink>
              <SocialIconLink href='//www.youtube.com/channel/UCL6N8QXTgLIdj2SzxYhHrag/videos' target='_blank' arial-label='Youtube'>
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink href='/' target='_blank' arial-label='Twitter'>
                <FaTwitter/>
              </SocialIconLink>
              <SocialIconLink href='//www.linkedin.com/company/sos-iitkanpur/' target='_blank' arial-label='Linkedin'>
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </IGS_FooterWrap>
    </IGS_FooterContainer>
  )
}

export default IGS_Footer
