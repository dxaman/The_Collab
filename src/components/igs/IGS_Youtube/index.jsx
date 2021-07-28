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
    Content, Speaker, IGS_YoutubeH1, Speakerbio, IGS_hr
} from './YoutubeElements'
import {Button} from "../IGS_ButtonElements";
import {ServicesCard} from "../../Services/ServiceElements";
import {ArrowForward, ArrowRight, HeroBtnWrapper} from "../../Hero/HeroElements";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import  './styles.css'


import YouTube from 'react-youtube';
import {IGS_ServicesH1} from "../IGS_Services/IGS_ServiceElements";
import Icon1 from "../../../images/elon.jpg";
import {ServicesIcon} from "../Speaker/ServiceElements";
import {YoutubeOne,YoutubeTwo, YoutubeThree} from "./Data";

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


const Youtube = () => {
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

        <YoutubeContainer lightBg='true'>
            <IGS_YoutubeH1>Sessions</IGS_YoutubeH1>
            <IGS_hr/>
<Carousel responsive={responsive}
swipeable={true}
  draggable={true}
  showDots={true}
  responsive={responsive}
  ssr={true} // means to render carousel on server-side.
  infinite={true}
  autoPlay={ false }
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
  renderDotsOutside={true}>


                <YoutubeWrapper>
                            <TextWrapper>
                                <Speaker>
                                    <ServicesIcon src={Icon1}/>
                                </Speaker>
                                <Speakerbio>
                                    {/*<TopLine lightText={YoutubeOne.lightText}>{YoutubeOne.topLine}</TopLine>*/}
                                    <Heading lightText={YoutubeOne.lightText}>{YoutubeOne.headline}</Heading>
                                    <Subtitle darkText={YoutubeOne.darkText}>{YoutubeOne.subtitle}</Subtitle>
                                </Speakerbio>
                                <Content lightText={YoutubeOne.lightText}>{YoutubeOne.description}</Content>
                                <BtnWrap>
                                    <Button to='#' onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true'               smooth={true} duration={500} spy={true} exact='true' offset={-80}>
                                         Know More {hover ? <ArrowForward /> : <ArrowRight/>}
                                    </Button>
                                </BtnWrap>
                            </TextWrapper>
                            <ImgWrap>
                            <YouTube videoId="wHihLrcZF0o" opts={opts} />
                            </ImgWrap>
                            <ImgWrap2>
                            <YouTube videoId="wHihLrcZF0o" opts={opts2} />
                            </ImgWrap2>
                </YoutubeWrapper>


                <YoutubeWrapper>
                    <TextWrapper>
                        <Speaker>
                            <ServicesIcon src={Icon1}/>
                        </Speaker>
                        <Speakerbio>
                            {/*<TopLine lightText={YoutubeTwo.lightText}>{YoutubeTwo.topLine}</TopLine>*/}
                            <Heading lightText={YoutubeTwo.lightText}>{YoutubeTwo.headline}</Heading>
                            <Subtitle darkText={YoutubeTwo.darkText}>{YoutubeTwo.subtitle}</Subtitle>
                        </Speakerbio>
                        <Content lightText={YoutubeTwo.lightText}>{YoutubeTwo.description}</Content>
                        <BtnWrap>
                            <Button to='#' onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true'               smooth={true} duration={500} spy={true} exact='true' offset={-80}>
                                Know More {hover ? <ArrowForward /> : <ArrowRight/>}
                            </Button>
                        </BtnWrap>
                    </TextWrapper>
                    <ImgWrap>
                        <YouTube videoId="wHihLrcZF0o" opts={opts} />
                    </ImgWrap>
                    <ImgWrap2>
                        <YouTube videoId="wHihLrcZF0o" opts={opts2} />
                    </ImgWrap2>
                </YoutubeWrapper>

                <YoutubeWrapper>
                        <TextWrapper>
                            <Speaker>
                                <ServicesIcon src={Icon1}/>
                            </Speaker>
                            <Speakerbio>
                                <Heading lightText={YoutubeThree.lightText}>{YoutubeThree.headline}</Heading>
                                <Subtitle darkText={YoutubeThree.darkText}>{YoutubeThree.subtitle}</Subtitle>
                            </Speakerbio>
                            <Content lightText={YoutubeThree.lightText}>{YoutubeThree.description}</Content>
                            <BtnWrap>
                                <Button to='#' onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true'               smooth={true} duration={500} spy={true} exact='true' offset={-80}>
                                    Know More {hover ? <ArrowForward /> : <ArrowRight/>}
                                </Button>
                            </BtnWrap>
                        </TextWrapper>
                            <ImgWrap>
                            <YouTube videoId="77lB8WgJa28" opts={opts} />
                            </ImgWrap>
                            <ImgWrap2>
                            <YouTube videoId="77lB8WgJa28" opts={opts2} />
                            </ImgWrap2>
                </YoutubeWrapper>
</Carousel>
            <IGS_hr/>
</YoutubeContainer>

 )
   
}

export default Youtube
