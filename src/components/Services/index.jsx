import React from 'react'
import Icon1 from '../../images/book-open.png'
import Icon2 from '../../images/svg-2.svg'
import Icon3 from '../../images/svg-3.svg'
import { Button2 } from '../ButtonElements'
import {ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP} from './ServiceElements'

const Services = () => {
  return (
    <ServicesContainer id='services'>
      <ServicesH1>Campus Initiatives</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1}/>
          <ServicesH2>E Samvaad</ServicesH2>
          <ServicesP>Event details can be given in this card in a condensed format. Event details can be given in this card in a condensed format.</ServicesP>
          <Button2 to = '#'>
          Learn More
          </Button2>
        </ServicesCard>
        <ServicesCard>
        <ServicesIcon src={Icon1}/>
          <ServicesH2>UPSC Talks</ServicesH2>
          <ServicesP>Event details can be given in this card in a condensed format. Event details can be given in this card in a condensed format.</ServicesP>
          <Button2 to = '#'>
          Learn More
          </Button2>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon1}/>
          <ServicesH2>Quiz</ServicesH2>
          <ServicesP>Event details can be given in this card in a condensed format. Event details can be given in this card in a condensed format.</ServicesP>
          <Button2 to = '#'>
          Learn More
          </Button2>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon1}/>
          <ServicesH2>Workshop</ServicesH2>
          <ServicesP>Event details can be given in this card in a condensed format. Event details can be given in this card in a condensed format.</ServicesP>
          <Button2 to = '#'>
          Learn More
          </Button2>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services
