import React, {useState} from 'react'
import Icon1 from '../../../images/LIFE OF AN IAS OFFICER.jpeg'
import Icon2 from '../../../images/NATIONAL DIGITAL HEALTH MISSION.jpeg'
import Icon3 from '../../../images/POLICY FOR DAY ZERO.jpeg'
import { Button2 } from '../IGS_ButtonElements'
import {ArrowForward, ArrowRight, HeroBtnWrapper} from "../../Hero/HeroElements";
import { YoutubeContainer, YoutubeWrapper, YoutubeRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, ImgWrap,ImgWrap2, Img } from '../../Youtube/YoutubeElements'
import {IGS_ServicesContainer, IGS_ServicesH1, IGS_ServicesWrapper, IGS_ServicesCard, IGS_ServicesIcon, IGS_ServicesH2, IGS_ServicesP} from './IGS_ServiceElements'
import  './navstyle.css'

  const IGS_Services = ({lightBg, id, imgStart, topLine, lightText, headline, darkText, description, buttonLabel, alt, img, primary, dark, dark2 }) => {
    const [hover, setHover] = useState(false);
   

    const onHover = () => {
        setHover(!hover)
    }
    
  return (
    <IGS_ServicesContainer id='IGS_Services'>
      <IGS_ServicesH1>9th October</IGS_ServicesH1>
      <IGS_ServicesWrapper>
        <IGS_ServicesCard>
           

        <IGS_ServicesH2>Life of an IAS Officer</IGS_ServicesH2>
        <IGS_ServicesIcon src={Icon1}/>
          
         
        <BtnWrap>
                                    <a href="https://forms.gle/k6kN5RUch6AvDaXW8" onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true'               smooth={true} duration={500} spy={true} exact='true' offset={-80} class="register">
                                         Register {hover ? <ArrowForward /> : <ArrowRight/>}
                                    </a>
                                </BtnWrap>
        </IGS_ServicesCard>
        <IGS_ServicesCard>
           

           <IGS_ServicesH2>National Digital Health Mission</IGS_ServicesH2>
           <IGS_ServicesIcon src={Icon2}/>
             
            
           <BtnWrap>
                                    <a href="https://forms.gle/k6kN5RUch6AvDaXW8" onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true'               smooth={true} duration={500} spy={true} exact='true' offset={-80} class="register">
                                         Register {hover ? <ArrowForward /> : <ArrowRight/>}
                                    </a>
                                </BtnWrap>
           </IGS_ServicesCard>
           <IGS_ServicesCard>
           

           <IGS_ServicesH2>Policy for zero day</IGS_ServicesH2>
           <IGS_ServicesIcon src={Icon3}/>
             
            
           <BtnWrap>
                                    <a href="https://forms.gle/k6kN5RUch6AvDaXW8" onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true'               smooth={true} duration={500} spy={true} exact='true' offset={-80} class="register">
                                         Register {hover ? <ArrowForward /> : <ArrowRight/>}
                                    </a>
                                </BtnWrap>
           </IGS_ServicesCard>
        
      </IGS_ServicesWrapper>
    </IGS_ServicesContainer>
  )
}

export default IGS_Services
