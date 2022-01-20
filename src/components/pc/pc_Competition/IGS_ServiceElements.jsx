import styled from 'styled-components'

export const IGS_ServicesContainer = styled.div`
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: justify;
  background: white;

  @media screen and (max-width: 1000px) {
    height: 2000px;
  }

  @media screen and (max-width: 480px) {
    height: 1600px;
  }
 `
export const IGS_ServicesWrapper = styled.div`
    max-width: 2000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 50px;
    padding: 0 50px;

    @media screen and (max-width: 1000px) {
      grid-template-columns: 1fr 1fr;
  }

    @media screen and (max-width: 786px) {
      grid-template-columns: 1fr;
      padding: 0 20px;
      grid-gap: 60px;
  }
`
export const IGS_ServicesCard = styled.div`
position : relative;
 z-index: 2;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 400px;
  padding:  30px;
  background: #F9F9F9;
  box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
  height: 600px;
  width: 320px;
  left: 0px;
  top: -20%;
  border-radius: 16px;
  text-align: center;
  

`

export const IGS_ServicesIcon = styled.img`
  height: 80px;
  width: 80px;
  margin-bottom: 10px;

`
export const IGS_ServicesH1 = styled.h1`
  font-size: 2.5rem;
  color: #664aa6;
  text-align: center;
  margin-bottom: 64px;
  font-weight: bold;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }  
`
export const IGS_ServicesH2 = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 10px;
`

export const IGS_ServicesP = styled.p`
  font-size: 1rem;
  text-align: center;
  padding-bottom: 20%;
`


