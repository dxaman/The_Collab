import React from 'react'
import Icon1 from '../../images/book-open.png'
import Icon2 from '../../images/svg-2.svg'
import Icon3 from '../../images/svg-3.svg'
import { Button2 } from '../ButtonElements'
import TweetEmbed from 'react-tweet-embed'
import InstagramEmbed from 'react-instagram-embed';
 

import {ServicesContainer, ServicesH1, ServicesWrapper,ServicesCard,Boxx, ServicesIcon, ServicesH2, ServicesP, SocialHandle} from './ServiceElements'

const Services = () => {
  return (
    <ServicesContainer id='socialMedia'>
      <centre>
      <ServicesH1>Social Medias</ServicesH1>

<Boxx>
 <>
  <SocialHandle>
    <iframe max-width="100%" title="ig" height={440} src="https://www.instagram.com/p/CUZ3r5rvJqw/embed" frameBorder={0} />
    </SocialHandle>

    </>

  <SocialHandle>  
<div class="twitter" >
<TweetEmbed id="1441750799764262917"  />
</div>
</SocialHandle>
 </Boxx>
  

      </centre>
    
    </ServicesContainer>
    
  )
}

export default Services
