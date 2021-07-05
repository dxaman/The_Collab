import React from 'react'
import { AboutContainer, AboutWrapper, AboutRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, ImgWrap, Img } from './AboutElements'

const About = ({lightBg, id, imgStart, topLine, lightText, headline, darkText, description, buttonLabel, alt, img, primary, dark, dark2 }) => {
    return (
        <>
            <AboutContainer lightBg={lightBg} id={id}>
                <AboutWrapper>
                            <TextWrapper>
                                <Heading lightText={lightText}>{headline}</Heading>
                                <Subtitle darkText={darkText}>{description}</Subtitle>
                            </TextWrapper>
                            <ImgWrap>
                                <Img src={img} alt={alt}/>
                            </ImgWrap>
                </AboutWrapper>
            </AboutContainer>
        </>
    )
}

export default About
