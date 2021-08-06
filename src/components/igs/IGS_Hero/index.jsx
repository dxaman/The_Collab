import React, {useState} from 'react'
import { IGS_HeroContainer, IGS_HeroBg, VideoBg, IGS_HeroContent, IGS_HeroH1, IGS_HeroP, IGS_HeroBtnWrapper, ArrowForward, ArrowRight , TattiBg, TattiBg2, TattiBg3, SocialHandle} from './IGS_HeroElements'

import {Button} from "../IGS_ButtonElements";
import {SocialIconLink, SocialIcons} from "../../Footer/FooterElements";
import {FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube} from "react-icons/fa";

const IGS_Hero = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover)
  }

  return (
    <IGS_HeroContainer id='home'>
      <IGS_HeroBg>
          {/*<TattiBg/>*/}
          <VideoBg/>
          {/*<TattiBg2/>*/}
          {/*<TattiBg3/>*/}
      </IGS_HeroBg>
      <IGS_HeroContent>
      <IGS_HeroH1> Indian Governance Summit</IGS_HeroH1>
  {/*<IGS_HeroP>"There's Tremendous Gap Between Public Opinion and Public Policy"</IGS_HeroP>*/}
      
    <SocialHandle>
     <SocialIcons>
        <SocialIconLink href='//www.facebook.com/sos.iitk' target='_blank' arial-label='Facebook' >
      <FaFacebook color='#c6182f'/>
          </SocialIconLink>
         <SocialIconLink href='//www.instagram.com/ppoc_iitk/' target='_blank' arial-label='Instagram'>
         <FaInstagram  color='#c6182f'/>
        </SocialIconLink>
     <SocialIconLink href='//www.youtube.com/channel/UCL6N8QXTgLIdj2SzxYhHrag/videos' target='_blank' arial-label='Youtube'>
         <FaYoutube  color='#c6182f'/>
        </SocialIconLink>
        <SocialIconLink href='/' target='_blank' arial-label='Twitter'>
          <FaTwitter  color='#c6182f'/>
      </SocialIconLink>
        <SocialIconLink href='//www.linkedin.com/company/sos-iitkanpur/' target='_blank' arial-label='Linkedin'>
        <FaLinkedin  color='#c6182f'/>
       </SocialIconLink>
       </SocialIcons>
       </SocialHandle>
      </IGS_HeroContent>
      
    </IGS_HeroContainer>
  )

  }
export default IGS_Hero
