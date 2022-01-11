import React from 'react'
import Icon1 from '../../../images/super-boss-2194245-0 (1).png'
import Icon2 from '../../../images/super-boss-2194245-0 (1).png'
import { Button2 } from '../IGS_ButtonElements'
import {IGS_ServicesContainer, IGS_ServicesH1, IGS_ServicesWrapper, IGS_ServicesCard, IGS_ServicesIcon, IGS_ServicesH2, IGS_ServicesP} from './IGS_ServiceElements'

const IGS_Services = () => {
  return (
    <IGS_ServicesContainer id='IGS_Services'>
      <IGS_ServicesH1>Prizes</IGS_ServicesH1>
      <IGS_ServicesWrapper>
        <IGS_ServicesCard>
          <IGS_ServicesIcon src={Icon1}/>
          <IGS_ServicesH2>Winner</IGS_ServicesH2>
          <IGS_ServicesP>Prize details can be given in this card in a condensed format. Prize details can be given in this card in a condensed format.</IGS_ServicesP>
          
        </IGS_ServicesCard>
        <IGS_ServicesCard>
        <IGS_ServicesIcon src={Icon2}/>
        <IGS_ServicesH2>Runner Up</IGS_ServicesH2>
          <IGS_ServicesP>Prize details can be given in this card in a condensed format. Prize details can be given in this card in a condensed format.</IGS_ServicesP>
          
        </IGS_ServicesCard>
        <IGS_ServicesCard>
          <IGS_ServicesIcon src={Icon1}/>
          <IGS_ServicesH2>2nd Runner up</IGS_ServicesH2>
          <IGS_ServicesP>Prize details can be given in this card in a condensed format. Prize details can be given in this card in a condensed format.</IGS_ServicesP>
          
        </IGS_ServicesCard>
        <IGS_ServicesCard>
          <IGS_ServicesIcon src={Icon2}/>
          <IGS_ServicesH2>Participant</IGS_ServicesH2>
          <IGS_ServicesP>Prize details can be given in this card in a condensed format. Prize details can be given in this card in a condensed format.</IGS_ServicesP>
          
        </IGS_ServicesCard>
      </IGS_ServicesWrapper>
    </IGS_ServicesContainer>
  )
}

export default IGS_Services
