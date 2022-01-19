import React from 'react'
import Icon1 from '../../../images/aa.jpg'
import Icon2 from '../../../images/nn.jpg'
import Icon3 from '../../../images/pp.jpg'
import { Button2 } from '../IGS_ButtonElements'
import {IGS_ServicesContainer, IGS_ServicesH1, IGS_ServicesWrapper, IGS_ServicesCard, IGS_ServicesIcon, IGS_ServicesH2, IGS_ServicesP} from './IGS_ServiceElements'

const IGS_Services = () => {
  return (
    <IGS_ServicesContainer id='IGS_Services'>
      <IGS_ServicesH1>Contact Us</IGS_ServicesH1>
      <IGS_ServicesWrapper>
        <IGS_ServicesCard>
          <IGS_ServicesIcon src={Icon1}/>
          <IGS_ServicesH2>Aditya K Rao</IGS_ServicesH2>
          <IGS_ServicesP>Overall Coordinator<br/>+91-8826240462</IGS_ServicesP>
          
        </IGS_ServicesCard>
        <IGS_ServicesCard>
        <IGS_ServicesIcon src={Icon2}/>
        <IGS_ServicesH2>Nikhil Kumar Singh</IGS_ServicesH2>
          <IGS_ServicesP>Overall Coordinator<br/>+91-7488746500</IGS_ServicesP>
          
        </IGS_ServicesCard>
        <IGS_ServicesCard>
        <IGS_ServicesIcon src={'https://i.ibb.co/RhgKj1Q/Purushottam-Ojha-DESIGN.jpg'}/>
          <IGS_ServicesH2>Purushottam Ojha</IGS_ServicesH2>
          <IGS_ServicesP>Design<br/>+91-9334287809</IGS_ServicesP>
          
        </IGS_ServicesCard>
        <IGS_ServicesCard>
          <IGS_ServicesIcon src={Icon3}/>
          <IGS_ServicesH2>Aman Dixit</IGS_ServicesH2>
          <IGS_ServicesP>Web<br/>+91-9111427403</IGS_ServicesP>
          
        </IGS_ServicesCard>
      </IGS_ServicesWrapper>
    </IGS_ServicesContainer>
  )
}

export default IGS_Services
