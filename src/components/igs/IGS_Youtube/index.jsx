import React, { useState } from "react";
import {
  TopLine,
  Heading,
  Content,
  IGS_YoutubeH1,
  IGS_hr,
} from "./YoutubeElements";

import { Button5 } from "../../igs/IGS_ButtonElements";

import {
  ArrowForward,
  ArrowRight,
  HeroBtnWrapper,
} from "../../Hero/HeroElements";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { YoutubeOne, YoutubeTwo, YoutubeThree, YoutubeFour } from "./Data";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: {
      max: 4000,
      min: 3000,
    },
    items: 5,
  },
  desktop: {
    breakpoint: {
      max: 3000,
      min: 1024,
    },
    items: 1,
  },
  tablet: {
    breakpoint: {
      max: 1024,
      min: 464,
    },
    items: 1,
  },
  mobile: {
    breakpoint: {
      max: 464,
      min: 0,
    },
    items: 1,
  },
};

const Youtube = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <div className="YoutubeContainer" lightBg="true" id="sessions">
      <IGS_YoutubeH1>Past Sessions</IGS_YoutubeH1>

      <IGS_hr />

      <Carousel
        responsive={responsive}
        swipeable={true}
        draggable={true}
        showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={true}
        focusOnSelect={true}
        className="pak "
        sliderClass="slid"
        autoPlaySpeed={4000}
        centerMode={false}
        keyBoardControl={true}
        customTransition="transform 500ms ease-in-out"
        transitionDuration={500}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-80-px"
        renderDotsOutside={true}
      >
        <div className="YoutubeWrapper">
          <div className="TextWrapper">
            <div className="info">
              <div className="Speaker">
                <img
                  src={
                    "https://www.stern.nyu.edu/faculty/static/photos/vacharya.jpg"
                  }  alt=""
                />
              </div>
              <div className="Speakerbio">
                <TopLine className="Heading" lightText={YoutubeOne.lightText}>
                  {YoutubeOne.topic}
                </TopLine>
                <Heading className="Subtitle" darkText={YoutubeOne.darkText}>
                  {YoutubeOne.name}
                </Heading>
                <h4>
                  {YoutubeOne.job} {YoutubeOne.role}
                </h4>
              </div>
            </div>
            <div className="Content">
              <Content lightText={YoutubeOne.lightText}>
                {YoutubeOne.description}
              </Content>

              <Button5
                to=""
                onMouseEnter={onHover}
                onMouseLeave={onHover}
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Visit Our channel {hover ? <ArrowForward /> : <ArrowRight />}
              </Button5>
            </div>
          </div>
          <div className="YoutubeImg">
            <div className="ImgWrap">
              <iframe
                src="https://www.youtube.com/embed/RkkD6IUu9bQ"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>

        <div className="YoutubeWrapper">
          <div className="TextWrapper">
            <div className="info">
              <div className="Speaker">
                <img
                  src={
                    "https://starsunfolded.com/wp-content/uploads/2020/12/Saurabh-Dwivedi.jpg"
                  }  alt=""
                />
              </div>
              <div className="Speakerbio">
                <TopLine className="Heading" lightText={YoutubeTwo.lightText}>
                  {YoutubeTwo.topic}
                </TopLine>
                <Heading className="Subtitle" darkText={YoutubeTwo.darkText}>
                  {YoutubeTwo.name}
                </Heading>
                <h4>
                  {YoutubeTwo.job} {YoutubeTwo.role}
                </h4>
              </div>
            </div>
            <div className="Content">
              <Content lightText={YoutubeTwo.lightText}>
                {YoutubeTwo.description}
              </Content>

              <Button5
                to=""
                onMouseEnter={onHover}
                onMouseLeave={onHover}
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Visit Our channel {hover ? <ArrowForward /> : <ArrowRight />}
              </Button5>
            </div>
          </div>
          <div className="YoutubeImg">
            <div className="ImgWrap">
              <iframe
                src="https://www.youtube.com/embed/u1XRGwOkbYw"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>

        <div className="YoutubeWrapper">
          <div className="TextWrapper">
            <div className="info">
              <div className="Speaker">
                <img
                  src={
                    "https://thediplomat.com/wp-content/uploads/2014/10/sizes/td-story-s-1/thediplomat_2014-10-07_18-28-29.jpg"
                  }  alt=""
                />
              </div>
              <div className="Speakerbio">
                <TopLine className="Heading" lightText={YoutubeThree.lightText}>
                  {YoutubeThree.topic}
                </TopLine>
                <Heading className="Subtitle" darkText={YoutubeThree.darkText}>
                  {YoutubeThree.name}
                </Heading>
                <h4>
                  {YoutubeThree.job} {YoutubeThree.role}
                </h4>
              </div>
            </div>
            <div className="Content">
              <Content lightText={YoutubeThree.lightText}>
                {YoutubeThree.description}
              </Content>

              <Button5
                to=""
                onMouseEnter={onHover}
                onMouseLeave={onHover}
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Visit Our channel {hover ? <ArrowForward /> : <ArrowRight />}
              </Button5>
            </div>
          </div>
          <div className="YoutubeImg">
            <div className="ImgWrap">
              <iframe
                src="https://www.youtube.com/embed/W-lpZOiyw3Q"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>

        <div className="YoutubeWrapper">
          <div className="TextWrapper">
            <div className="info">
              <div className="Speaker">
                <img
                  src={
                    "https://images.outlookindia.com/public/uploads/articles/2019/7/31/Derek_20181227_350_630_630_630_571_855.jpg"
                  } alt=""
                />
              </div>
              <div className="Speakerbio">
                <TopLine className="Heading"  lightText={YoutubeFour.lightText}>
                  {YoutubeFour.topic}
                </TopLine>
                <Heading className="Subtitle" darkText={YoutubeFour.darkText}>
                  {YoutubeFour.name}
                </Heading>
                <h4>
                  {YoutubeFour.job} {YoutubeFour.role}
                </h4>
              </div>
            </div>
            <div className="Content">
              <Content lightText={YoutubeFour.lightText}>
                {YoutubeFour.description}
              </Content>

              <Button5
                to=""
                onMouseEnter={onHover}
                onMouseLeave={onHover}
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Visit Our channel {hover ? <ArrowForward /> : <ArrowRight />}
              </Button5>
            </div>
          </div>
          <div className="YoutubeImg">
            <div className="ImgWrap">
              <iframe
                src="https://www.youtube.com/embed/lkSed-_qnxw"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </Carousel>
      <IGS_hr />
    </div>
  );
};

export default Youtube;
