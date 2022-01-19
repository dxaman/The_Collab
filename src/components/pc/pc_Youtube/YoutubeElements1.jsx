import styled from "styled-components";
import { Link, Link as LinkR } from 'react-router-dom'
export const IGS_YoutubeH1 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  padding-bottom: 10px;
  padding-top: 5px;
  text-align: center;
  margin-top: 50px;
  font-weight: bold;
  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;
export const TopLine = styled.p`
  color: #fff;
  font-size: 14px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
`;

export const Heading = styled.h1`
  font-size: 20px;
  line-height: 1.1;
  text-align: left;
  //font-weight: 600px;
  color: #fff;
  margin-top: 15px;

  @media screen and (max-width: 700px) {
    font-size: 25px;
  }
`;
export const Subtitle = styled.p`
  font-size: 15px;
  line-height: 24px;
  color: #fff;
  @media screen and (max-width: 700px) {
    position: absolute;
  }
`;

export const Content = styled.p`
  ${"" /* position: relative; */}
  margin-bottom: 35px;
  ${"" /* top:127%; */}
  font-size: 14px;
  line-height: 24px;
  color: #fff;
  margin-top: 5%;
  @media screen and (max-width: 700px) {
    ${"" /* top:120%; */}
    ${"" /* max-width: 90%; */}
  font-size: 14px;
    text-align: justify;
  }
`;
export const IGS_hr = styled.hr`
  height: 0px;

  width: 90%;
  margin: 10px 5%;
  text-align: center;
  border: 2px solid #ffffff;
  border-radius: 2px;
  @media screen and (max-width: 700px) {
    ${"" /* width: 400px; */}
    margin-top: 10px;
    width: 95%;
    margin: 10px 2.5% 0px 2.5%;
    ${"" /* left:2.5%; */}
  }
`;
export const HeroBtnWrapper2 = styled(Link)`
 margin-top: 32px;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 10px;
  background: ${({primary}) => (primary ?  '#c6182f' : '#c6182f')};
  white-space: nowrap;
  padding: ${({big}) =>  (big ? '14px  48px' : '12px 30px')};
  color: ${({dark}) =>  (dark ? '#fff' : '#fff')};
  font-size:${({fontBig}) =>  (fontBig ? '20px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({primary}) => (primary ?  '#38218F' : '#38218F')};
  }
`
// export const ImgWrap = styled.div`
//   position: relative;
//   max-width: 40%;
//   height: 100%;
//   @media screen and (max-width: 768px) {
//     display: none;
//   }
// `;
// export const ImgWrap2 = styled.div`
//  display: none;
//   @media screen and (max-width: 768px) {
//    display:block;
//     position: relative;
//   width:100%;
//   height: 100%;

//   }
// `;
// export const Img = styled.img`
//   width: 100%;
//   margin: 0 0 10px 0;
//   padding-right: 0;
// `;
