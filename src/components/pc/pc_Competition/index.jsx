import React from 'react'
import Icon1 from '../../../images/book-open1.png'
import Icon2 from '../../../images/book-open2.png'
import Icon3 from '../../../images/book-open3.png'
import Icon4 from '../../../images/book-open4.png'
import { Button2 } from '../IGS_ButtonElements'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavLinks, NavItem, NavBtn, NavBtnLink } from '../PC_NavbarElements'
import {IGS_ServicesContainer, IGS_ServicesH1, IGS_ServicesWrapper, IGS_ServicesCard, IGS_ServicesIcon, IGS_ServicesH2, IGS_ServicesP, IGS_ServicesCardMid, IGS_ServicesCardRght} from './IGS_ServiceElements'
import './PC_compete.css';
const IGS_Services = () => {
  return (
    <IGS_ServicesContainer id='pc_competition'>
      <IGS_ServicesH1>Competitions</IGS_ServicesH1>
      <IGS_ServicesWrapper>
     
       <IGS_ServicesCard>
          <IGS_ServicesIcon src={Icon1}/>
          <IGS_ServicesH2>Lok Niti</IGS_ServicesH2>
          <h6>(Prizes worth <b>INR 10k)</b></h6>
          <IGS_ServicesP>The competition aims to encourage young minds to develop innovative policy solutions and contribute to the development of frameworks to overcome the challenges. Participants are expected to deliver the most realistic and practical solutions to a case study/problem in various fields provided by public policy think tanks of India.</IGS_ServicesP>
          <NavBtn>
            <a href = "https://dare2compete.com/competition/lok-niti-policy-conclave-22-indian-institute-of-technology-iit-kanpur-255788" target="_blank" class="PC">Register!</a>
            
          </NavBtn>
        </IGS_ServicesCard>
        <IGS_ServicesCard>
        <IGS_ServicesIcon src={Icon2}/>
          <IGS_ServicesH2>Rajneeti </IGS_ServicesH2>
          <h6>(Prizes worth <b>INR 7k)</b></h6>
          <IGS_ServicesP>Rajneeti strives to make students think critically and creatively to solve real challenges being faced by Indian political consultancy sector. Participants are expected to deliver the most realistic and practical solutions to a case study shared by political consulting firms in India.
</IGS_ServicesP>
          <NavBtn>
            <a href = "https://dare2compete.com/competition/rajneeti-a-political-case-study-competition-policy-conclave-22-indian-institute-of-technology-iit-kanpur-255887" target="_blank" class="PC">Register!</a>
            
          </NavBtn>
        </IGS_ServicesCard>
        <IGS_ServicesCard>
          <IGS_ServicesIcon src={Icon3}/>
          <IGS_ServicesH2>Policy Cipher</IGS_ServicesH2>
          <h6>(Prizes worth <b>INR 3k)</b></h6>
          <IGS_ServicesP>All you need to do is google around and collect information in this case, find the logic, get to the answer, submit it. If you are interested in cryptic hunts, this is undoubtedly for you!

          </IGS_ServicesP>
          <NavBtn>
            <a href = "https://dare2compete.com/quiz/policy-cipher-policy-conclave-22-indian-institute-of-technology-iit-kanpur-256383" target="_blank" class="PC">Register!</a>
            
          </NavBtn>
        </IGS_ServicesCard>
        <IGS_ServicesCard>
          <IGS_ServicesIcon src={Icon4}/>
          <IGS_ServicesH2>The Knowledge Hunt</IGS_ServicesH2>
          <h6>(Prizes worth <b>INR 7k)</b></h6>
          <IGS_ServicesP>The Knowledge Hunt engage students at the grass-root level and strengthen the talent pool of our nation in the field of policy and governance. Through this, the students can access themselves on a national level in the field of science, social sciences, maths, and mental ability. This will give the students a general overview of their knowledge level.
          </IGS_ServicesP>
          <NavBtn>
            <a href = "https://www.ppociitk.in/theknowledgehunt" target="_blank" class="PC">Register!</a>
            
          </NavBtn>
        </IGS_ServicesCard>
       
       
      </IGS_ServicesWrapper>
    </IGS_ServicesContainer>
  )
}

export default IGS_Services
