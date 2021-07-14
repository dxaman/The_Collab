import React, {useState} from 'react'
import { YoutubeContainer, YoutubeWrapper, YoutubeRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, ImgWrap, Img } from './YoutubeElements'
import {Button} from "../ButtonElements";
import {ServicesCard} from "../Services/ServiceElements";
import {ArrowForward, ArrowRight, HeroBtnWrapper} from "../Hero/HeroElements";

const Youtube = ({lightBg, id, imgStart, topLine, lightText, headline, darkText, description, buttonLabel, alt, img, primary, dark, dark2 }) => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover)
    }
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
                                <Img src={img} alt={alt}/>
                            </ImgWrap>
                </YoutubeWrapper>
            </YoutubeContainer>
        </>
    )
}

export default Youtube
