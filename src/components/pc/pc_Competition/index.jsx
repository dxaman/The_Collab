import React from 'react'
import Icon1 from '../../../images/book-open.png'
import { Button2 } from '../IGS_ButtonElements'
import {IGS_ServicesContainer, IGS_ServicesH1, IGS_ServicesWrapper, IGS_ServicesCard, IGS_ServicesIcon, IGS_ServicesH2, IGS_ServicesP, IGS_ServicesCardMid, IGS_ServicesCardRght} from './IGS_ServiceElements'

const IGS_Services = () => {
  return (
    <IGS_ServicesContainer id='pc_competition'>
      <IGS_ServicesH1>Competitions</IGS_ServicesH1>
      <IGS_ServicesWrapper>
     
       <IGS_ServicesCard>
          <IGS_ServicesIcon src={Icon1}/>
          <IGS_ServicesH2>Lok Niti : A Public Policy Hackathon</IGS_ServicesH2>
          <IGS_ServicesP>We brings to you Lok Niti, a public policy hackathon where participants are expected to come up with the most pragmatic solutions to a case study/problem provided by eminent public policy think tanks of the nation.</IGS_ServicesP>
          <Button2 to = 'https://dare2compete.com/competition/lok-niti-policy-conclave-indian-institute-of-technology-iit-kanpur-156149?search=normal&lb=npOKAPI'>
          Learn More
          </Button2>
        </IGS_ServicesCard>
        <IGS_ServicesCard>
        <IGS_ServicesIcon src={Icon1}/>
          <IGS_ServicesH2>Rajneeti : A Political Case Study Competition</IGS_ServicesH2>
          <IGS_ServicesP>The competition aims to solve real world challenges being faced by India with their optimal solutions. Participants are expected to deliver the most realistic and effective solutions to a case study/problem faced by political consulting firms in India.</IGS_ServicesP>
          <Button2 to = ' https://dare2compete.com/competition/rajneeti-a-political-case-study-competition-policy-conclave-indian-institute-of-technology-iit-kanpur-156329?fbclid=IwAR2pFDpALfD9FqsfBDVDKy-iS4ssYKc85b4eL2lCM1UkHg2Y2q_Rc-blUKw&lb=npOKAPI'>
          Learn More
          </Button2>
        </IGS_ServicesCard>
        <IGS_ServicesCard>
          <IGS_ServicesIcon src={Icon1}/>
          <IGS_ServicesH2>Unscripted:</IGS_ServicesH2>
          <IGS_ServicesP>Do you like reviewing and discussing about movies and web series? If you are interested to review some controversial but interesting documentaries on social issues, here is a competition only for you. Feel free to opiate and win exciting prizes.
          </IGS_ServicesP>
          <Button2 to = 'https://dare2compete.com/creative-cultural-event/unscripted-a-documentary-case-study-competition-policy-conclave-indian-institute-of-technology-iit-kanpur-156136?search=normal&lb=npOKAPI'>
          Learn More
          </Button2>
        </IGS_ServicesCard>
       
       
      </IGS_ServicesWrapper>
    </IGS_ServicesContainer>
  )
}

export default IGS_Services
