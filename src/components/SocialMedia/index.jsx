import React from 'react'
import Icon1 from '../../images/book-open.png'
import Icon2 from '../../images/svg-2.svg'
import Icon3 from '../../images/svg-3.svg'
import { Button2 } from '../ButtonElements'
import TweetEmbed from 'react-tweet-embed'
import InstagramEmbed from 'react-instagram-embed';
 

import {ServicesContainer, ServicesH1, ServicesWrapper,ServicesCard,Boxx, ServicesIcon, ServicesH2, ServicesP} from './ServiceElements'

const Services = () => {
  return (
    <ServicesContainer id='services'>
      <ServicesH1>Social Medias</ServicesH1>

      <Boxx>
       <>
          <iframe max-width="100%" height={440} src="https://www.instagram.com/p/CUMsyK-rbfb/embed" frameBorder={0} />

          </>
      
          
      <div style={{marginLeft: "150px"}} >
      <TweetEmbed id="692527862369357824"  />
      </div>
       </Boxx>
        
    
    
    </ServicesContainer>
    
  )
}

export default Services
