import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Icon1 from '../../../images/elon.jpg'

import {ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon,ServicesH2, ServicesP} from './ServiceElements'
import  './styles.css'

const Slider = () => {
    
    
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 5
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    return (
        <ServicesContainer id='team'>
        <ServicesH1>Past Speakers</ServicesH1>
        
        
<Carousel responsive={responsive}  
swipeable={true}
  draggable={true}
  showDots={true}
  responsive={responsive}
  ssr={true} // means to render carousel on server-side.
  infinite={true}
  autoPlay={ true }
  focusOnSelect={true}
  className="car "
  sliderClass='slid'
  autoPlaySpeed={2000}
  centerMode={false}
  keyBoardControl={true}
  customTransition="transform 500ms ease-in-out"
  transitionDuration={500}
  containerClass="carousel-container"
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"
  renderDotsOutside={false}>
 
        <ServicesCard>
          <ServicesIcon src={Icon1}/>
          <ServicesH2>Elon Musk</ServicesH2>
          <ServicesP>SpaceX and Tesla CEO</ServicesP>
         
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon1}/>
          <ServicesH2>Elon Musk</ServicesH2>
          <ServicesP>SpaceX and Tesla CEO</ServicesP>
         
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon1}/>
          <ServicesH2>Elon Musk</ServicesH2>
          <ServicesP>SpaceX and Tesla CEO</ServicesP>
         
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon1}/>
          <ServicesH2>Elon Musk</ServicesH2>
          <ServicesP>SpaceX and Tesla CEO</ServicesP>
         
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon1}/>
          <ServicesH2>Elon Musk</ServicesH2>
          <ServicesP>SpaceX and Tesla CEO</ServicesP>
         
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon1}/>
          <ServicesH2>Elon Musk</ServicesH2>
          <ServicesP>SpaceX and Tesla CEO</ServicesP>
         
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon1}/>
          <ServicesH2>Elon Musk</ServicesH2>
          <ServicesP>SpaceX and Tesla CEO</ServicesP>
         
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon1}/>
          <ServicesH2>Elon Musk</ServicesH2>
          <ServicesP>SpaceX and Tesla CEO</ServicesP>
         
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon1}/>
          <ServicesH2>Elon Musk</ServicesH2>
          <ServicesP>SpaceX and Tesla CEO</ServicesP>
         
        </ServicesCard>
       
        
  
</Carousel>
</ServicesContainer>
 )
}

export default Slider
