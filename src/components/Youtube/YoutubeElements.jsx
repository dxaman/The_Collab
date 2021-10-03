import styled from 'styled-components';

export const YoutubeContainer = styled.div`
  color: #fff;
  z-index: 101;
  background: ${({lightBg}) => (lightBg ? 'white' : 'linear-gradient(to right, #B08CCB, #38218F)')};
  height: 500px;
  @media screen and  (max-width: 768px) {
    padding: 100px 0;
    height:800px;
  }
`
export const YoutubeWrapper = styled.div`
  display: grid;
  z-index: 1;
  width: 100%auto;
  max-width: 1100px;
  margin-right: auto;
  height:500px;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
  
`
export const YoutubeRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)}
  }
`
export const TextWrapper = styled.div`
  position: relative;
  top:10%;
  max-width: 50%;
  padding: 5px;
  left:-5%;
  //padding-bottom: 60px;
  text-align: justify;
  @media screen and (max-width: 768px) {
    top: -30%;
    left:17px;
    max-width:90%;
    text-align: justify;
  }
`
export const TopLine = styled.p`
  color: #01bf71;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`

export const Heading = styled.h1`
  text-align: left;
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600px;
  font-weight: bold;
  color: #664AA6;

  @media screen and (max-width: 760px) {
    
    text-align: center;
  }
`
export const Subtitle  = styled.p`
  align-content: center;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({darkText}) => (darkText ? '#010606' : '#fff')};
`
export const BtnWrap = styled.div`
  display:flex;
  justify-content: flex-start;
  @media screen and (max-width: 800px) {
    justify-content: center;
  }
`;
export const ImgWrap = styled.div`
  position: relative;
  top:-70%;
  left:50%;
  max-width: 455px;
  height: 100%;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const ImgWrap2 = styled.div`
 display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position: relative;
  max-width: 455px;
  height: 100%;
    left :0;
    top:0;
  }
`;
export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
`;
