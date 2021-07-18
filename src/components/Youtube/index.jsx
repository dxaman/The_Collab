import React, {useState} from 'react'
import { YoutubeContainer, YoutubeWrapper, YoutubeRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, ImgWrap,ImgWrap2, Img } from './YoutubeElements'
import {Button} from "../ButtonElements";
import {ServicesCard} from "../Services/ServiceElements";
import {ArrowForward, ArrowRight, HeroBtnWrapper} from "../Hero/HeroElements";



import YouTube from 'react-youtube';



const Youtube = ({lightBg, id, imgStart, topLine, lightText, headline, darkText, description, buttonLabel, alt, img, primary, dark, dark2 }) => {
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
        <>
      
            <YoutubeContainer lightBg={lightBg} id={id}>
                <YoutubeWrapper>
                            <TextWrapper>
                                <Heading lightText={lightText}>{headline}</Heading>
                                <Subtitle darkText={darkText}>{description}</Subtitle>
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
            </YoutubeContainer>
            
        </>
    )
}

export default Youtube
