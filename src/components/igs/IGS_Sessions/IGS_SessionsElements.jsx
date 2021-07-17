import styled from 'styled-components';

export const IGS_SessionsContainer = styled.div`
  color: #fff;
  z-index: 101;
  background: linear-gradient(90deg, #2F3E41 10.31%, #273132 35.06%, #1E2422 71.4%, #1B1F1C 99.48%);

  @media screen and  (max-width: 768px) {
    display: none;
    padding: 100px 0;
  }
`
export const IGS_SessionsWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 860px;
  width: 100%auto;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`
export const IGS_SessionsRow = styled.div`
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
  top:100%;
  max-width: 80%;
  padding-top: 0;
  //padding-bottom: 60px;
  @media screen and (max-width: 768px) {
    top: 50%;
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
export const EndH1 = styled.h1`
  font-size: 2.5rem;
  color: #664AA6;
  margin-top: 10px;
  margin-bottom: 10px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }  
`
