import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Icon1 from '../../images/pp.jpg'
import Icon2 from '../../images/tt.jpg'
import Icon3 from '../../images/aa2.jpg'
import Icon4 from '../../images/nn.jpg'
import Icon5 from '../../images/11.jpg'
import Icon6 from '../../images/22.png'
import Icon7 from '../../images/33.jpeg'
import Icon8 from '../../images/aa.jpg'
import {ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon,ServicesH2, ServicesP} from './ServiceElements'

const Slider = () => {
    
    
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 4
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
        <ServicesContainer id='team'>
        <ServicesH1>The Team</ServicesH1>
        
        
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
        <ServicesIcon src={Icon1}/>
        <ServicesH2>Aman Dixit</ServicesH2>
        <ServicesP>Web Head</ServicesP>
    </ServicesCard>

    <ServicesCard>
        <ServicesIcon src={Icon2}/>
        <ServicesH2>Tanishq Gupta</ServicesH2>
        <ServicesP>Web Head</ServicesP>
    </ServicesCard>

    <ServicesCard>
        <ServicesIcon src={Icon4}/>
        <ServicesH2>Nikhil </ServicesH2>
        <ServicesP>Overall Coordinator</ServicesP>
    </ServicesCard>

    <ServicesCard>
        <ServicesIcon src={Icon3}/>
        <ServicesH2>Aditya K Rao</ServicesH2>
        <ServicesP>Overall Coordinator</ServicesP>
    </ServicesCard>

    <ServicesCard>
        <ServicesIcon src={Icon5}/>
        <ServicesH2>Sunny Kumar Bhagat</ServicesH2>
        <ServicesP>Policy Research</ServicesP>
    </ServicesCard>

    <ServicesCard>
        <ServicesIcon src={Icon6}/>
        <ServicesH2>Abhinav Raj Singh</ServicesH2>
        <ServicesP>Finance and Marketing</ServicesP>
    </ServicesCard>

    <ServicesCard>
        <ServicesIcon src={'https://i.ibb.co/WDqRmwq/SHUBHI-KANT-POLICY-RESEARCH.jpg'}/>
        <ServicesH2>Shubhi Kant</ServicesH2>
        <ServicesP>Policy Research</ServicesP>
    </ServicesCard>

    <ServicesCard>
        <ServicesIcon src={Icon7}/>
        <ServicesH2>Gaurav Dadhich</ServicesH2>
        <ServicesP>Design</ServicesP>
    </ServicesCard>

    <ServicesCard>
        <ServicesIcon src={'https://i.ibb.co/JyyMKzz/Purushottam-Ojha-DESIGN-1.jpg'}/>
        <ServicesH2>Purushottam Ojha</ServicesH2>
        <ServicesP>Design</ServicesP>
    </ServicesCard>

    <ServicesCard>
        <ServicesIcon src={'https://i.ibb.co/r0Sp7pm/Narendra-Damu-MARKETING-AND-FINANCES-1.jpg'}/>
        <ServicesH2>Narendra Damu</ServicesH2>
        <ServicesP>Marketing and Finances</ServicesP>
    </ServicesCard>

    <ServicesCard>
        <ServicesIcon src={'https://i.ibb.co/YhkNv2H/Devang-UNIYAL-EVENTS.jpg'}/>
        <ServicesH2>Devang Uniyal</ServicesH2>
        <ServicesP>Events</ServicesP>
    </ServicesCard>
        
    <ServicesCard>
        <ServicesIcon src={'https://i.ibb.co/tsbwRWS/arjun.jpg'}/>
        <ServicesH2>Arjun Ajay</ServicesH2>
        <ServicesP>Design</ServicesP>
    </ServicesCard>
  
</Carousel>
</ServicesContainer>
 )
}

export default Slider
