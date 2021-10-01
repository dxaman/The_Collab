import React from 'react'
import Icon1 from '../../images/book-open.png'
import Icon2 from '../../images/svg-2.svg'
import Icon3 from '../../images/svg-3.svg'
import { Button2 } from '../ButtonElements'
import {ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP} from './ServiceElements'

const Services = () => {
  return (
    <ServicesContainer id='services'>
      <ServicesH1>Campus Initiatives</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1}/>
          <ServicesH2>E Samvaad</ServicesH2>
          <ServicesP>An enthralling event which revolves around the discussion on contemporary issues and accentuates the students to peep into the happenings related to Politics, Geographic, Socioeconomic etc  occurring globally or nationally and participate into such  brainstorming sessions and voice their respective opinions.</ServicesP>
          <Button2 to = 'www.google.com'>
          Learn More
          </Button2>
        </ServicesCard>
        <ServicesCard>
        <ServicesIcon src={Icon1}/>
          <ServicesH2>Talks and Session</ServicesH2>
          <ServicesP>Talks and sessions are organized over the year, bringing together prominent personalities from health, finance, civic sector, etc., to discuss the various aspects of public policy. UPSC talks are conducted where the people who triumphed over 10L+ candidates in the grueling ordeal are invited to share their experiences, tips, and personal motivation, enabling students to have the edge over every other participant.</ServicesP>
          <Button2 to = '#'>
          Learn More
          </Button2>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon1}/>
          <ServicesH2>Quiz</ServicesH2>
          <ServicesP>"Facts are the foundation of great ideas."
            Fun and informative quizzes are conducted under the quiz series: " scratch out the policy" every fortnight for the IITK junta. The wide variety of questions here ensures that the knowledge, howsoever outlandish, is respected. It also provides a learning opportunity for students to improve their understanding of various domains.
          </ServicesP>
          <Button2 to = '#'>
          Learn More
          </Button2>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon1}/>
          <ServicesH2>Sansad</ServicesH2>
          <ServicesP>Sansad event ,  which is the replica of Indian Parliamentary system yearns to grave out the political ethos and articulation in the best way it could from its participants. A two-day event environs the political speech , rebuttals and answering of stared questions on the motion given. The session , ends with the discussion hour followed by final voting from all the participants over the motion.</ServicesP>
          <Button2 to = '#'>
          Learn More
          </Button2>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services
