import React from 'react'
import Icon1 from '../../images/book-open-w.png'
import Icon2 from '../../images/svg-2.svg'
import Icon3 from '../../images/svg-3.svg'
import { Button3 } from '../ButtonElements'
import {ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP,Line} from './ServiceElements'

const Services = () => {
  return (
    <ServicesContainer id='events'>
      <ServicesH1>Major Events</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1}/>
          <ServicesH2>Policy Conclave</ServicesH2>
          <ServicesP>Event details can be given in this card in a condensed format. Event details can be given in this card in a condensed format. Event details can be given in this card in a condensed format. Event details can be given in this card in a condensed format.</ServicesP>
          <Button3 to = '#'>
          Learn More
          </Button3>
        </ServicesCard>
        <Line/>
        <ServicesCard>
        <ServicesIcon src={Icon1}/>
          <ServicesH2>Indian Governance Summit</ServicesH2>
          <ServicesP>Event details can be given in this card in a condensed format. Event details can be given in this card in a condensed format. Event details can be given in this card in a condensed format. Event details can be given in this card in a condensed format.</ServicesP>
          <Button3 to = '#'>
          Learn More
          </Button3>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services
