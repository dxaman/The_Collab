import styled from 'styled-components';
import { MdArrowForward, MdKeyboardArrowRight } from 'react-icons/md'

export const HeroContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 800px;
  position: relative;
  z-index: 1;
  :before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: linear-gradient(180deg, rgba(0,0,0,0.2)0%, rgba(0,0,0,0.6)100%),  
    linear-gradient(180deg, rgba(0,0,0,0.2)0%, transparent 100%)
    z-index: 2;
  }
`
export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 117%;
  overflow: hidden;
`
export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: linear-gradient(to right, #B08CCB, #38218F);
`
export const TattiBg = styled.div`
  position: absolute;
  left: 85.94%;
  right: -7.84%;
  top: -150px;
  bottom: 96.93%;
  height: 260.5168151855469px;
  width: 420.5814514160156px;
  border-radius: 0px;
  background-image: url('https://i.ibb.co/KwrmKqP/landpagetopright.png');
`

export const TattiBg2 = styled.div`
  position: absolute;
  height: 1358.9783935546875px;
  width: 2575.9697265625px;
  left: -550px;
  top: -230px;
  border-radius: 0px;
  background-image: url('https://i.ibb.co/HxWkGyK/landpagemain.png');
  background-attachment: fixed;
  background-position:-550px -230px;
  background-repeat: no-repeat;
  background-size: 2575.9697265625px 1358.9783935546875px ;
`

export const TattiBg3 = styled.div`
  position: absolute;
  height: 1525.1356201171875px;
  width: 1680px;
  left: 120px;
  top: -150px;
  border-radius: 0px;
  background-image: url('https://i.ibb.co/GRKQ6Z2/Tattimgae.png');
  background-attachment: fixed;
  background-position:120px -150px;
  background-repeat: no-repeat;
  background-size: 1680px 1525.1356201171875px ;
  //@media screen and (max-width: 768px) {
  //  left: 1100px;
  //}
`

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const HeroH1 = styled.h1`
  color: #fff;
  font-size: 48px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 40px
  }
  @media screen and (max-width: 480px) {
    font-size: 32px
  }
`

export const HeroP = styled.p`
  margin-top: 24px;
  color: #fff;
  font-size: 24px;
  text-align: center;
  max-width: 600px;

  @media screen and (max-width: 768px) {
    font-size: 24px
  }
  @media screen and (max-width: 480px) {
    font-size: 18px
  }
`
export const HeroBtnWrapper = styled.div`
 margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`
export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`

export const SocialHandle = styled.div`
  position: absolute;
  align-content: center;
  height: 5%;
  width: 20%;
  top: 250%;
  left: 60%;
  border-radius: 0px;
  margin-left: 70%;
  @media screen and (max-width: 756px) {
    top: 230%;
    left: -45%;
  }
`

