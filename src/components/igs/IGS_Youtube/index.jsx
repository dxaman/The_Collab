import React, {useState} from 'react'
import {
    YoutubeContainer,
    YoutubeWrapper,
    YoutubeRow,
    Column1,
    Column2,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    BtnWrap,
    ImgWrap,
    ImgWrap2,
    Img,
    Content, Speaker, IGS_YoutubeH1
} from './YoutubeElements'
import {Button} from "../IGS_ButtonElements";
import {ServicesCard} from "../../Services/ServiceElements";
import {ArrowForward, ArrowRight, HeroBtnWrapper} from "../../Hero/HeroElements";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import  './styles.css'


import YouTube from 'react-youtube';
import {IGS_ServicesH1} from "../IGS_Services/IGS_ServiceElements";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
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


const Youtube = ({lightBg, id, imgStart, topLine, lightText, headline, darkText, description, subtitle, buttonLabel, alt, img, primary, dark, dark2 }) => {
    const [hover, setHover] = useState(false);
   

    const onHover = () => {
        setHover(!hover)
    }
    const opts = {
        height: '390',
        width: '640',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 0,
        },
      };
      const opts2 = {
        height: '250',
        width: '400',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 0,
        },
      };
      return (

        <YoutubeContainer lightBg={lightBg} id={id}>
            <IGS_YoutubeH1>Sessions</IGS_YoutubeH1>
<Carousel responsive={responsive}  
swipeable={true}
  draggable={true}
  showDots={true}
  responsive={responsive}
  ssr={true} // means to render carousel on server-side.
  infinite={true}
  autoPlay={ true }
  focusOnSelect={true}
  className="pak "
  sliderClass='slid'
  autoPlaySpeed={4000}
  centerMode={false}
  keyBoardControl={true}
  customTransition="transform 500ms ease-in-out"
  transitionDuration={500}
  containerClass="carousel-container"
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"
  renderDotsOutside={false}>


                <YoutubeWrapper>
                            <TextWrapper>
                                <Speaker>
                                    <img src="https://i.ibb.co/RQVmwZz/Group-33.png" style={{}} />
                                </Speaker>
                                <TopLine lightText={lightText}>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headline}</Heading>
                                <Subtitle darkText={darkText}>{subtitle}</Subtitle>
                                <Content lightText={lightText}>{description}</Content>
                                <BtnWrap>
                                    <Button to='#' onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true'               smooth={true} duration={500} spy={true} exact='true' offset={-80}>
                                         Know More {hover ? <ArrowForward /> : <ArrowRight/>}
                                    </Button>
                                </BtnWrap>
                            </TextWrapper>
                            <ImgWrap>
                            <YouTube videoId="wHihLrcZF0o" opts={opts} />;
                            </ImgWrap>
                            <ImgWrap2>
                            <YouTube videoId="wHihLrcZF0o" opts={opts2} />;
                            </ImgWrap2>
                </YoutubeWrapper>
            
          
                <YoutubeWrapper>
                            <TextWrapper>
                                <Speaker>
                                    <img src="https://i.ibb.co/RQVmwZz/Group-33.png" style={{}} />
                                </Speaker>
                                <TopLine lightText={lightText}>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headline}</Heading>
                                <Subtitle darkText={darkText}>{subtitle}</Subtitle>
                                <Content lightText={lightText}>{description}</Content>
                                <BtnWrap>
                                    <Button to='#' onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true'               smooth={true} duration={500} spy={true} exact='true' offset={-80}>
                                         Know More {hover ? <ArrowForward /> : <ArrowRight/>}
                                    </Button>
                                </BtnWrap>
                            </TextWrapper>
                            <ImgWrap>
                            <YouTube videoId="lkSed-_qnxw" opts={opts} />;
                            </ImgWrap>
                            <ImgWrap2>
                            <YouTube videoId="lkSed-_qnxw" opts={opts2} />;
                            </ImgWrap2>
                </YoutubeWrapper>
            
                <YoutubeWrapper>
                            <TextWrapper>
                                <Speaker>
                                    <img src="https://i.ibb.co/RQVmwZz/Group-33.png" style={{}} />
                                </Speaker>
                                <TopLine lightText={lightText}>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headline}</Heading>
                                <Subtitle darkText={darkText}>{subtitle}</Subtitle>
                                <Content lightText={lightText}>{description}</Content>
                                <BtnWrap>
                                    <Button to='#' onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true'               smooth={true} duration={500} spy={true} exact='true' offset={-80}>
                                         Know More {hover ? <ArrowForward /> : <ArrowRight/>}
                                    </Button>
                                </BtnWrap>
                            </TextWrapper>
                            <ImgWrap>
                            <YouTube videoId="77lB8WgJa28" opts={opts} />;
                            </ImgWrap>
                            <ImgWrap2>
                            <YouTube videoId="77lB8WgJa28" opts={opts2} />;
                            </ImgWrap2>
                </YoutubeWrapper>
</Carousel>
</YoutubeContainer>

 )
   
}

export default Youtube
