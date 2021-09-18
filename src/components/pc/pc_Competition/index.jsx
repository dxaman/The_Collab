import React from 'react'
import Icon1 from '../../../images/book-open.png'
import { Button2 } from '../IGS_ButtonElements'
import {IGS_ServicesContainer, IGS_ServicesH1, IGS_ServicesWrapper, IGS_ServicesCard, IGS_ServicesIcon, IGS_ServicesH2, IGS_ServicesP} from './IGS_ServiceElements'

const IGS_Services = () => {
  return (
    <IGS_ServicesContainer id='pc_competition'>
      <IGS_ServicesH1>Competitions</IGS_ServicesH1>
      <IGS_ServicesWrapper>
        <IGS_ServicesCard>
          <IGS_ServicesIcon src={Icon1}/>
          <IGS_ServicesH2>E Samvaad</IGS_ServicesH2>
          <IGS_ServicesP>An enthralling event which revolves around the discussion on contemporary issues and accentuates the students to peep into the happenings related to Politics, Geographic, Socioeconomic etc  occurring globally or nationally and participate into such  brainstorming sessions and voice their respective opinions.</IGS_ServicesP>
          <Button2 to = '#'>
          Learn More
          </Button2>
        </IGS_ServicesCard>
        <IGS_ServicesCard>
        <IGS_ServicesIcon src={Icon1}/>
          <IGS_ServicesH2>Talks and Session</IGS_ServicesH2>
          <IGS_ServicesP>Talks and sessions are organized over the year, bringing together prominent personalities from health, finance, civic sector, etc., to discuss the various aspects of public policy. UPSC talks are conducted where the people who triumphed over 10L+ candidates in the grueling ordeal are invited to share their experiences, tips, and personal motivation, enabling students to have the edge over every other participant.</IGS_ServicesP>
          <Button2 to = '#'>
          Learn More
          </Button2>
        </IGS_ServicesCard>
        <IGS_ServicesCard>
          <IGS_ServicesIcon src={Icon1}/>
          <IGS_ServicesH2>Quiz</IGS_ServicesH2>
          <IGS_ServicesP>"Facts are the foundation of great ideas."
            Fun and informative quizzes are conducted under the quiz series: " scratch out the policy" every fortnight for the IITK junta. The wide variety of questions here ensures that the knowledge, howsoever outlandish, is respected. It also provides a learning opportunity for students to improve their understanding of various domains.
          </IGS_ServicesP>
          <Button2 to = '#'>
          Learn More
          </Button2>
        </IGS_ServicesCard>
        <IGS_ServicesCard>
          <IGS_ServicesIcon src={Icon1}/>
          <IGS_ServicesH2>Sansad</IGS_ServicesH2>
          <IGS_ServicesP>Sansad event ,  which is the replica of Indian Parliamentary system yearns to grave out the political ethos and articulation in the best way it could from its participants. A two-day event environs the political speech , rebuttals and answering of stared questions on the motion given. The session , ends with the discussion hour followed by final voting from all the participants over the motion.</IGS_ServicesP>
          <Button2 to = '#'>
          Learn More
          </Button2>
        </IGS_ServicesCard>
      </IGS_ServicesWrapper>
    </IGS_ServicesContainer>
  )
}

export default IGS_Services
