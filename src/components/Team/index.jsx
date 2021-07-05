import React,{useState}  from 'react'
import Icon1 from '../../images/pp.jpg'
import Icon2 from '../../images/tt.jpg'
import Icon3 from '../../images/aa.jpg'
import Icon4 from '../../images/nn.jpg'
import { Button4 } from '../ButtonElements'
import {ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP} from './ServiceElements'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight , TattiBg, TattiBg2, TattiBg3} from '../Hero/HeroElements'



const Services = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover)
  }
  return (
    <ServicesContainer id='team'>
    
      <ServicesH1>The Team</ServicesH1>
      <Button4 to='#' onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true'               smooth={true} duration={500} spy={true} exact='true' offset={-80}>
            See All {hover ? <ArrowForward /> : <ArrowRight/>}
          </Button4>
      
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1}/>
          <ServicesH2>Aman Dixit</ServicesH2>
          <ServicesP>The God</ServicesP>
         
        </ServicesCard>
        <ServicesCard>
        <ServicesIcon src={Icon2}/>
          <ServicesH2>Tanishq Gupta</ServicesH2>
          <ServicesP>Assistant God</ServicesP>
          
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon4}/>
          <ServicesH2>Nikhil </ServicesH2>
          <ServicesP>Overall Coordinator</ServicesP>
         
        </ServicesCard>
        <ServicesCard>
        <ServicesIcon src={Icon3}/>
          <ServicesH2>Aditya</ServicesH2>
          <ServicesP>Overall Coordinator</ServicesP>
          
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon1}/>
          <ServicesH2>Aman Dixit</ServicesH2>
          <ServicesP>The God</ServicesP>
         
        </ServicesCard>
        <ServicesCard>
        <ServicesIcon src={Icon2}/>
          <ServicesH2>Tanishq Gupta</ServicesH2>
          <ServicesP>Assistant God</ServicesP>
          
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon4}/>
          <ServicesH2>Nikhil </ServicesH2>
          <ServicesP>Overall Coordinator</ServicesP>
         
        </ServicesCard>
        <ServicesCard>
        <ServicesIcon src={Icon3}/>
          <ServicesH2>Aditya</ServicesH2>
          <ServicesP>Overall Coordinator</ServicesP>
          
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services
