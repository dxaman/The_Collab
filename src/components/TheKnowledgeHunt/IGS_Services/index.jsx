import React from 'react'
import Icon1 from '../../../images/aa.jpg'
import Icon2 from '../../../images/nn.jpg'
import { Button2 } from '../IGS_ButtonElements'
import {IGS_ServicesContainer, IGS_ServicesH1, IGS_ServicesWrapper, IGS_ServicesCard, IGS_ServicesIcon, IGS_ServicesH2, IGS_ServicesP} from './IGS_ServiceElements'

const IGS_Services = () => {
  return (
    <IGS_ServicesContainer id='IGS_Services'>
      <IGS_ServicesH1>Contact Us</IGS_ServicesH1>
      <IGS_ServicesWrapper>
        <IGS_ServicesCard>
          <IGS_ServicesIcon src={Icon1}/>
          <IGS_ServicesH2>Aditya</IGS_ServicesH2>
          <IGS_ServicesP>Overall Coordinator<br/>+91-9999999999</IGS_ServicesP>
          
        </IGS_ServicesCard>
        <IGS_ServicesCard>
        <IGS_ServicesIcon src={Icon2}/>
        <IGS_ServicesH2>Nikhil</IGS_ServicesH2>
          <IGS_ServicesP>Overall Coordinator<br/>+91-9999999999</IGS_ServicesP>
          
        </IGS_ServicesCard>
        <IGS_ServicesCard>
          <IGS_ServicesIcon src={Icon1}/>
          <IGS_ServicesH2>Aditya</IGS_ServicesH2>
          <IGS_ServicesP>Overall Coordinator<br/>+91-9999999999</IGS_ServicesP>
          
        </IGS_ServicesCard>
        <IGS_ServicesCard>
          <IGS_ServicesIcon src={Icon2}/>
          <IGS_ServicesH2>Nikhil</IGS_ServicesH2>
          <IGS_ServicesP>Overall Coordinator<br/>+91-9999999999</IGS_ServicesP>
          
        </IGS_ServicesCard>
      </IGS_ServicesWrapper>
    </IGS_ServicesContainer>
  )
}

export default IGS_Services
