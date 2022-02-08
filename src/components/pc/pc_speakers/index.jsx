import React from 'react'
import Icon1 from '../../../images/jaskirat.jpg'
import Icon2 from '../../../images/anil_swarup.jpeg'
import Icon3 from '../../../images/venkatesh.png'
import Icon4 from '../../../images/abhishek.png'
import { Button2 } from '../IGS_ButtonElements'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavLinks, NavItem, NavBtn, NavBtnLink } from '../PC_NavbarElements'
import {IGS_ServicesContainer, IGS_ServicesH1, IGS_ServicesWrapper, IGS_ServicesCard, IGS_ServicesIcon, IGS_ServicesH2, IGS_ServicesP, IGS_ServicesCardMid, IGS_ServicesCardRght} from './IGS_ServiceElements'
import './PC_compete.css';
const IGS_Services = () => {
  return (
    <IGS_ServicesContainer id='pc_speakers'>
      <IGS_ServicesH1>Speakers</IGS_ServicesH1>
      <IGS_ServicesWrapper>
     
       <IGS_ServicesCard>
          <IGS_ServicesIcon src={Icon1}/>
          <IGS_ServicesH2>Role of Technology in Improving Democracy</IGS_ServicesH2>
          by
          <h5>Mr. Jaskirat Singh</h5>
          <IGS_ServicesP>Trustee of ADR,<br></br>
          CEO of Webrosoft Solutions (P) Ltd,<br></br>
          IIT-BHU alumnus, & Nasscom social innovation award 2011 awardee</IGS_ServicesP>
          <h6>Date:<b> Feb. 12th, 2022 </b></h6>
          <h6>Time:<b> 15:30-16:30 IST</b></h6>
          {/* <NavBtn>
            <a href = "https://dare2compete.com/competition/lok-niti-policy-conclave-22-indian-institute-of-technology-iit-kanpur-255788" target="_blank" class="PC">Register!</a>
            
          </NavBtn> */}
        </IGS_ServicesCard>
        <IGS_ServicesCard>
        <IGS_ServicesIcon src={Icon2}/>
          <IGS_ServicesH2>Reforms in Bureaucracy<br></br> of India</IGS_ServicesH2>
          by
          <h5>Mr. Anil Swarup</h5>
          <IGS_ServicesP>
          Former Secretary,<br></br>
          School Education & Coal, Govt of India;
          Author of "Ethical Dilemmas of a Civil Servant"
          </IGS_ServicesP>
          <h6>Date:<b> Feb. 12th, 2022 </b></h6>
          <h6>Time:<b> 17:00-18:00 IST</b></h6>
          {/* <NavBtn>
            <a href = "https://dare2compete.com/competition/rajneeti-a-political-case-study-competition-policy-conclave-22-indian-institute-of-technology-iit-kanpur-255887" target="_blank" class="PC">Register!</a>
            
          </NavBtn> */}
        </IGS_ServicesCard>
        <IGS_ServicesCard>
          <IGS_ServicesIcon src={Icon4}/>
          <IGS_ServicesH2>Role of technology in bringing Government closer to citizens</IGS_ServicesH2>
          by
          <h5>Mr. Abhishek Singh</h5>
          <IGS_ServicesP>
          CEO MyGov, President & CEO NeGD, <br></br>MD & CEO Digital India Corporation <br></br>(DIC) at Govt of India
          </IGS_ServicesP>
          <h6>Date:<b> Feb. 12th, 2022 </b></h6>
          <h6>Time:<b> 18:00-19:00 IST</b></h6>
          
          {/* <NavBtn>
            <a href = "https://www.ppociitk.in/theknowledgehunt" target="_blank" class="PC">Register!</a>
            
          </NavBtn> */}
        </IGS_ServicesCard>
        <IGS_ServicesCard>
          <IGS_ServicesIcon src={Icon3}/>
          <IGS_ServicesH2>Economy, Development & Civilisation</IGS_ServicesH2>
          by
          <h5>Dr. M.R. Venkatesh</h5>
          <IGS_ServicesP>
          Economist, Advocate, <br></br>
          Profilic writer, & Author of <br></br>
          "A handbook on Antidumping"
          </IGS_ServicesP>
          <br></br>
          <h6>Date:<b> Feb. 13th, 2022 </b></h6>
          <h6>Time:<b> 13:00-14:00 IST</b></h6>
          {/* <NavBtn>
            <a href = "https://dare2compete.com/quiz/policy-cipher-policy-conclave-22-indian-institute-of-technology-iit-kanpur-256383" target="_blank" class="PC">Register!</a>
            
          </NavBtn> */}
        </IGS_ServicesCard>
       
      </IGS_ServicesWrapper>
    </IGS_ServicesContainer>
  )
}

export default IGS_Services
