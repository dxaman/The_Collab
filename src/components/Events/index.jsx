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
          <ServicesP>Policy Conclave is the annual flagship event of PPOC, IITK, hosted in April. An exhaustive three-day long chain of events organised in Webinars, Competitions and Workshops designed to enrich the audience with knowledge on Public Issues and Policy Research. If you are a college student seeking to know and understand Public Opinion and its implementation in real life, Policy Conclave is the one-stop destination for you!</ServicesP>
          <Button3 to = '#'>
          Learn More
          </Button3>
        </ServicesCard>
        <Line/>
        <ServicesCard>
        <ServicesIcon src={Icon1}/>
          <ServicesH2>Indian Governance Summit</ServicesH2>
          <ServicesP>Does Governance fascinate you? Ever wondered how Public Opinion translates into Public Policy and what are challenges faced to implement it in a diverse nation like India? If you want to understand the chaotic order that India is, IGS is the elixir mine you are looking for!! Organised in September, an open-to-all three-day-long fest of insightful Webinars and exciting Competitions to satiate your thirst for Knowledge!</ServicesP>
          <Button3 to = '#'>
          Learn More
          </Button3>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services
