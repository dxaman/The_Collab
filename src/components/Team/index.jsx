import React,{useState}  from 'react'
import Icon1 from '../../images/pp.jpg'
import Icon2 from '../../images/tt.jpg'
import Icon3 from '../../images/aa2.jpg'
import Icon4 from '../../images/nn.jpg'
import Icon5 from '../../images/11.jpg'
import Icon6 from '../../images/22.png'
import Icon7 from '../../images/33.jpeg'
import Icon8 from '../../images/aa.jpg'
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
          <ServicesP>Senior Web Manager</ServicesP>
         
        </ServicesCard>
        <ServicesCard>
        <ServicesIcon src={Icon2}/>
          <ServicesH2>Tanishq Gupta</ServicesH2>
          <ServicesP>Junior Web Manager</ServicesP>
          
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon4}/>
          <ServicesH2>Nikhil </ServicesH2>
          <ServicesP>Overall Coordinator</ServicesP>
         
        </ServicesCard>
        <ServicesCard>
        <ServicesIcon src={Icon3}/>
          <ServicesH2>Aditya Rao</ServicesH2>
          <ServicesP>Overall Coordinator</ServicesP>
          
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon5}/>
          <ServicesH2>Sunny Kumar Bhagat</ServicesH2>
          <ServicesP>Policy Research</ServicesP>
         
        </ServicesCard>
        <ServicesCard>
        <ServicesIcon src={Icon6}/>
          <ServicesH2>Abhinav Raj Singh</ServicesH2>
          <ServicesP>Finance and Marketing</ServicesP>
          
        </ServicesCard>
        <ServicesCard>
        <ServicesIcon src={Icon8}/>
          <ServicesH2>Narendra Damu</ServicesH2>
          <ServicesP>Finance and Marketing</ServicesP>
          
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon7}/>
          <ServicesH2>Gaurav Dadhich</ServicesH2>
          <ServicesP>Design</ServicesP>
         
        </ServicesCard>
       
      </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services
