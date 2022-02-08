import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {ServicesContainer, ServicesH1} from './ServiceElements'
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
          items: 6
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 2
        }
      };
    return (
        <ServicesContainer id='partner'>
        <ServicesH1>Past Sponsors</ServicesH1>
        
  <hr/>      
<Carousel responsive={responsive}  
swipeable={true}
  draggable={true}
  showDots={false}
  responsive={responsive}
  ssr={true} // means to render carousel on server-side.
  infinite={true}
  autoPlay={ true }
  focusOnSelect={true}
  className="car2 "
  sliderClass='slid'
  autoPlaySpeed={3000}
  centerMode={false}
  keyBoardControl={true}
  customTransition="transform 3000ms linear"
  transitionDuration={200}
  containerClass="carousel-container"
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"
  renderDotsOutside={false}>
 
 
 <img src="https://i.ibb.co/gtwSgFC/prs.png" className="sponcer_bigimg1" alt="Parterns_img"/>
<img src="https://i.ibb.co/R7H0cJd/CSTEP-Logo-Color.png"  className="sponcer_bigimg1"alt="Parterns_img"/>
<img src="https://i.ibb.co/QMbrXjh/School-Of-Politics.png" className="sponcer_bigimg1"  alt="Parterns_img"/>
<img src="https://i.ibb.co/k1CNFr6/Bala-Janagraha.png"  className="sponcer_bigimg1" alt="Parterns_img"/>
<img src="https://i.ibb.co/sgh2fFc/class-sathi.png" className="sponcer_bigimg1" alt="Parterns_img"/>
<img src="https://startupxplore.com/uploads/ff8080816ca837ec016ca9da915c00dc-large.png"  className="sponcer_bigimg1"alt="Parterns_img"/>
<img src="https://i1.wp.com/iasdelhi.org/wp-content/uploads/2018/06/forumIAS_logo.png" className="sponcer_bigimg1" alt="Parterns_img"/>
<img src="https://i.ibb.co/Ypx07jS/unnamed.jpg" alt="Parterns_img" className="sponcer_bigimg1"/>
<img src="https://i.ibb.co/vhgbx4t/Taghive.png" className="sponcer_bigimg1" alt="Parterns_img"/>
<img src="https://i.ibb.co/F75RcvW/Jarvis-Logo-2-X2-ft.png" className="sponcer_bigimg1"  alt="Parterns_img"/>
<img src="https://i.ibb.co/FBRyDsG/moolya.png" className="sponcer_bigimg1" alt="Parterns_img"/>
<img src="https://i.ibb.co/sWKHtXS/C3s-India-Default-Image.jpg" alt="Parterns_img" className="sponcer_bigimg1"/>
<img src="https://i.ibb.co/sQ6gqJf/wp-favicon3-1.png"  className="sponcer_bigimg1" alt="Parterns_img"/>

       
        
  
</Carousel>
<hr/>
</ServicesContainer>
 )
}

export default Slider