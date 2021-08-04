import styled from 'styled-components';

export const AboutContainer = styled.div`
  color: #fff;
  z-index: 101;
  background: ${({lightBg}) => (lightBg ? '#f9f9f9' : 'linear-gradient(to right, #B08CCB, #38218F)')};
  
  @media screen and  (max-width: 768px) {
    padding: 100px 0;
  }
`
export const AboutWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 650px;
  width: 100%auto;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`
export const AboutRow = styled.div`
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
  top:55%;
  max-width: 80%;
  padding-top: 0;
  //padding-bottom: 60px;
  @media screen and (max-width: 768px) {
    top: 20%;
    max-width:100%;
    
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
  align-content: center;
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600px;
  color: #664AA6;

  @media screen and (max-width: 480px) {
    font-size: 32px;
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
`;
export const ImgWrap = styled.div`
  position: relative;
  top: -33%;
  left:95%;
  max-width: 455px;
  height: 100%;
  @media screen and (max-width: 768px) {
    left:20%;
    top:29%;
    max-width: 300px;
    display: none;
  }
`;
export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
`;
