import React, {useState} from 'react'
import { IGS_HeroContainer, IGS_HeroBg, VideoBg, IGS_HeroContent, IGS_HeroH1, IGS_HeroP, IGS_HeroBtnWrapper, ArrowForward, ArrowRight , TattiBg, TattiBg2, TattiBg3, SocialHandle} from './IGS_HeroElements'


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
      {/*<IGS_HeroContent>*/}
      {/*  /!*<IGS_HeroH1> Public Policy And Opinion Cell</IGS_HeroH1>*!/*/}
      {/*  /!*<IGS_HeroP>"There's Tremendous Gap Between Public Opinion and Public Policy"<br></br><br></br>-Noam Chomsky</IGS_HeroP>*!/*/}
      {/*  /!*<IGS_HeroBtnWrapper>*!/*/}
      {/*  /!*  <Button to='signup' onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true'               smooth={true} duration={500} spy={true} exact='true' offset={-80}>*!/*/}
      {/*  /!*    Know More {hover ? <ArrowForward /> : <ArrowRight/>}*!/*/}
      {/*  /!*  </Button>*!/*/}
      {/*  /!*</IGS_HeroBtnWrapper>*!/*/}
      {/*  /!*  <SocialHandle>*!/*/}
      {/*  /!*  <SocialIcons>*!/*/}
      {/*  /!*      <SocialIconLink href='//www.facebook.com/sos.iitk' target='_blank' arial-label='Facebook'>*!/*/}
      {/*  /!*        <FaFacebook />*!/*/}
      {/*  /!*      </SocialIconLink>*!/*/}
      {/*  /!*      <SocialIconLink href='//www.instagram.com/ppoc_iitk/' target='_blank' arial-label='Instagram'>*!/*/}
      {/*  /!*        <FaInstagram/>*!/*/}
      {/*  /!*      </SocialIconLink>*!/*/}
      {/*  /!*      <SocialIconLink href='//www.youtube.com/channel/UCL6N8QXTgLIdj2SzxYhHrag/videos' target='_blank' arial-label='Youtube'>*!/*/}
      {/*  /!*        <FaYoutube />*!/*/}
      {/*  /!*      </SocialIconLink>*!/*/}
      {/*  /!*      <SocialIconLink href='/' target='_blank' arial-label='Twitter'>*!/*/}
      {/*  /!*        <FaTwitter/>*!/*/}
      {/*  /!*      </SocialIconLink>*!/*/}
      {/*  /!*      <SocialIconLink href='//www.linkedin.com/company/sos-iitkanpur/' target='_blank' arial-label='Linkedin'>*!/*/}
      {/*  /!*        <FaLinkedin />*!/*/}
      {/*  /!*      </SocialIconLink>*!/*/}
      {/*  /!*    </SocialIcons>*!/*/}
      {/*  /!*  </SocialHandle>*!/*/}
      {/*</IGS_HeroContent>*/}
    </IGS_HeroContainer>
  )
}

export default IGS_Hero
