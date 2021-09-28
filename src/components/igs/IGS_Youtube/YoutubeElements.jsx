import styled from 'styled-components';

export const YoutubeContainer = styled.div`
position: relative;
  color: #fff;
  padding-top:4%;
  padding-bottom:2%;
  z-index: 0;
  

  background: linear-gradient(90deg, #2F3E41 10.31%, #273132 35.06%, #1E2422 71.4%, #1B1F1C 99.48%);;

  @media screen and  (max-width: 768px) {
    padding: 100px 0;
        
  }
`
export const IGS_YoutubeH1 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  padding-bottom: 40px;
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
  max-width: 50%;
  margin-right: auto;
  margin-left: auto;
  padding: 40px 24px;
  justify-content: center;
  @media screen and (max-width: 700px) {
  
  } 
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
  max-width: 70%;
  left:-35%;
  padding: 5px;
  @media screen and (max-width: 768px) {
    top: 2%;
    max-width:100%;
    left:0%;
    text-align: center;
    align-items: center;
    align-content: center;
    auto-align: center;
  }
`
export const TopLine = styled.p`
  color: #fff;
  font-size: 11px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
`

export const Heading = styled.h1`
  font-size: 25px;
  line-height: 1.1;
  text-align: left;
  //font-weight: 600px;
  color: #fff;
  margin-top: 15px;

  @media screen and (max-width: 700px) {
    font-size: 25px;
    text-align: center;

  }
`

export const Subtitle  = styled.p`
  font-size: 15px;
  line-height: 24px;
  color: #fff;
  // text-align:center;
  @media screen and (max-width: 700px) {
    text-align:center;
  // position:absolute;
  }
`

export const Content = styled.p`
  position: relative;
  margin-bottom: 45px;
  top:127%;
  font-size: 14px;
  line-height: 24px;
  color: #fff;
  margin-top: 5%;
  @media screen and (max-width: 700px) {
  top:120%;
  max-width: 90%;
  font-size: 10px;
  text-align: justify;
  }
`
export const IGS_hr = styled.hr`
  position: absolute;
  width: 1680px;
  height: 0px;
  left: 5%;
  border: 2px solid #FFFFFF;
  border-radius: 2px;
  @media screen and (max-width: 700px) {
    width: 400px;
    margin-top: 10px;
    left:2.5%;
  }
`

export const Speaker  = styled.div`
  float: left;
  position: absolute;
  align-content: center;
  height: 250px;
  width: 250px;
  border-radius: 16px;
  //background-image: src('https://i.ibb.co/RQVmwZz/Group-33.png');
  @media screen and (max-width: 700px) {
    height: 200px;
    float:none;
    width: 200px;
    top:-75%;
  }
`
export const Speakerbio  = styled.div`
  float: right;
  right: -20%;
  top: 50%;
  position: absolute;
  align-content: center;
  height: 250px;
  width: 255px;
  //background-image: src('https://i.ibb.co/RQVmwZz/Group-33.png');
  @media screen and (max-width: 700px) {
    float:none;
    right:0;
    height: 190px;
    left:0;
    top:50%;
  }
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
  top:-40%;
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
    left :-15%;
    top:90%;
    padding-left:10%;
  }
`;
export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
`;
