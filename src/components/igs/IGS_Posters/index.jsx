import React from 'react'
import Icon1 from '../../../images/LIFE OF AN IAS OFFICER.jpeg'
import Icon2 from '../../../images/NATIONAL DIGITAL HEALTH MISSION.jpeg'
import Icon3 from '../../../images/POLICY FOR DAY ZERO.jpeg'
import { Button2 } from '../IGS_ButtonElements'
import {IGS_ServicesContainer, IGS_ServicesH1, IGS_ServicesWrapper, IGS_ServicesCard, IGS_ServicesIcon, IGS_ServicesH2, IGS_ServicesP} from './IGS_ServiceElements'

const IGS_Services = () => {
  return (
    <IGS_ServicesContainer id='IGS_Services'>
      <IGS_ServicesH1>9th October</IGS_ServicesH1>
      <IGS_ServicesWrapper>
        <IGS_ServicesCard>
           

        <IGS_ServicesH2>Life of an IAS Officer</IGS_ServicesH2>
        <IGS_ServicesIcon src={Icon1}/>
          
         
          <Button2 to = '#'>
          Register
          </Button2>
        </IGS_ServicesCard>
        <IGS_ServicesCard>
           

           <IGS_ServicesH2>National Digital Health Mission</IGS_ServicesH2>
           <IGS_ServicesIcon src={Icon2}/>
             
            
             <Button2 to = '#'>
             Register
             </Button2>
           </IGS_ServicesCard>
           <IGS_ServicesCard>
           

           <IGS_ServicesH2>Policy for zero day</IGS_ServicesH2>
           <IGS_ServicesIcon src={Icon3}/>
             
            
             <Button2 to = '#'>
             Register
             </Button2>
           </IGS_ServicesCard>
        
      </IGS_ServicesWrapper>
    </IGS_ServicesContainer>
  )
}

export default IGS_Services
