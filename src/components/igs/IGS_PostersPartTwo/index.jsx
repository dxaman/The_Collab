import React from 'react'
import Icon4 from '../../../images/ROLE OF TECHNOLOGY IN POLITICAL DOMAIN.jpeg'
import Icon5 from '../../../images/UPSC TALKS.jpeg'
import { Button2 } from '../IGS_ButtonElements'
import {IGS_ServicesContainer, IGS_ServicesH1, IGS_ServicesWrapper, IGS_ServicesCard, IGS_ServicesIcon, IGS_ServicesH2, IGS_ServicesP} from './IGS_ServiceElements'

const IGS_Services = () => {
  return (
    <IGS_ServicesContainer id='IGS_Services'>
      <IGS_ServicesH1>10th October</IGS_ServicesH1>
      <IGS_ServicesWrapper>
        <IGS_ServicesCard>
           

        <IGS_ServicesH2>Role of Technology in Polotical Domain</IGS_ServicesH2>
        <IGS_ServicesIcon src={Icon4}/>
          
         
          <Button2 to = '#'>
          Register
          </Button2>
        </IGS_ServicesCard>
        <IGS_ServicesCard>
           

           <IGS_ServicesH2>UPSC Talks</IGS_ServicesH2>
           <IGS_ServicesIcon src={Icon5}/>
             
            
             <Button2 to = '#'>
             Register
             </Button2>
           </IGS_ServicesCard>
          
        
      </IGS_ServicesWrapper>
    </IGS_ServicesContainer>
  )
}

export default IGS_Services
