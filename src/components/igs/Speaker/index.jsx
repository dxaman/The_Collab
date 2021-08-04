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
          items: 4
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
        <ServicesContainer id='speakers'>
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
  renderDotsOutside={true}>
 
        <ServicesCard>
          <ServicesIcon src={'https://www.stern.nyu.edu/faculty/static/photos/vacharya.jpg'}/>
          <ServicesH2>Viral Acharya</ServicesH2>
          <ServicesP>Deputy Governor, RBI (2017-2019)</ServicesP>
         
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={'https://starsunfolded.com/wp-content/uploads/2020/12/Saurabh-Dwivedi.jpg'}/>
          <ServicesH2>Saurabh Dwivedi</ServicesH2>
          <ServicesP>Chief Editor, The Lallantop</ServicesP>
         
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={'https://thediplomat.com/wp-content/uploads/2014/10/sizes/td-story-s-1/thediplomat_2014-10-07_18-28-29.jpg'}/>
          <ServicesH2>Harsh V. Pant</ServicesH2>
          <ServicesP>Professor of International Relations, KCL</ServicesP>
         
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={'data:image/jpeg;base64,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'}/>
          <ServicesH2>Derek O’Brien</ServicesH2>
          <ServicesP>Parliament and Public Policies of the country</ServicesP>
         
        </ServicesCard>
        {/*<ServicesCard>*/}
        {/*  <ServicesIcon src={Icon1}/>*/}
        {/*  <ServicesH2>Elon Musk</ServicesH2>*/}
        {/*  <ServicesP>SpaceX and Tesla CEO</ServicesP>*/}
        {/* */}
        {/*</ServicesCard>*/}
        {/*<ServicesCard>*/}
        {/*  <ServicesIcon src={Icon1}/>*/}
        {/*  <ServicesH2>Elon Musk</ServicesH2>*/}
        {/*  <ServicesP>SpaceX and Tesla CEO</ServicesP>*/}
        {/* */}
        {/*</ServicesCard>*/}
        {/*<ServicesCard>*/}
        {/*  <ServicesIcon src={Icon1}/>*/}
        {/*  <ServicesH2>Elon Musk</ServicesH2>*/}
        {/*  <ServicesP>SpaceX and Tesla CEO</ServicesP>*/}
        {/* */}
        {/*</ServicesCard>*/}
        {/*<ServicesCard>*/}
        {/*  <ServicesIcon src={Icon1}/>*/}
        {/*  <ServicesH2>Elon Musk</ServicesH2>*/}
        {/*  <ServicesP>SpaceX and Tesla CEO</ServicesP>*/}
        {/* */}
        {/*</ServicesCard>*/}
        {/*<ServicesCard>*/}
        {/*  <ServicesIcon src={Icon1}/>*/}
        {/*  <ServicesH2>Elon Musk</ServicesH2>*/}
        {/*  <ServicesP>SpaceX and Tesla CEO</ServicesP>*/}
        {/* */}
        {/*</ServicesCard>*/}
       
        
  
</Carousel>
</ServicesContainer>
 )
}

export default Slider
