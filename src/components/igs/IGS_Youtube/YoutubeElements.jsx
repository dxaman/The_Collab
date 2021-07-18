import styled from 'styled-components';

export const YoutubeContainer = styled.div`
position: relative;
  color: #fff;
  padding-top:4%;
  padding-bottom:2%;
  z-index: 101;

  background: linear-gradient(90deg, #2F3E41 10.31%, #273132 35.06%, #1E2422 71.4%, #1B1F1C 99.48%);;

  @media screen and  (max-width: 768px) {
    padding: 100px 0;
    top:-300px;
    
  }
`
export const IGS_YoutubeH1 = styled.h1`
  font-size: 2.5rem;
  color: #664aa6;
  margin-top: 0%;
  text-align: center;
  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }  
`

export const YoutubeWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 500px;
  width: 100%auto;
  max-width: 1100px;
  margin-right: auto;
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
  top: 20%;
  max-width: 40%;
  padding: 5px;
  //padding-bottom: 60px;
  @media screen and (max-width: 768px) {
    top: 10%;
    max-width:100%;
    text-align: center;
  }
`
export const TopLine = styled.p`
  color: #C6182F;
  font-size: 11px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
`

export const Heading = styled.h1`
  font-size: 20px;
  line-height: 1.1;
  text-align: left;
  font-weight: 600px;
  color: #664AA6;

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`

export const Subtitle  = styled.p`
  font-size: 10px;
  line-height: 24px;
  color: ${({darkText}) => (darkText ? '#010606' : '#fff')};
`

export const Content = styled.p`
  margin-bottom: 35px;
  font-size: 8px;
  line-height: 24px;
  color: ${({darkText}) => (darkText ? '#010606' : '#fff')};
`

export const Speaker  = styled.div`
  align-content: center;
  height: 100px;
  width:100px
  left: 117px;
  top: 1823px;
  border-radius: 16px;
  //background-image: src('https://i.ibb.co/RQVmwZz/Group-33.png');
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
  top:-80%;
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
    top:44%;
  }
`;
export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
`;
