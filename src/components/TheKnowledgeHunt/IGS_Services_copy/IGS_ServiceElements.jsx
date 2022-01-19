import styled from 'styled-components'

export const IGS_ServicesContainer = styled.div`
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #000;

  @media screen and (max-width: 1000px) {
    height: 2000px;
  }

  @media screen and (max-width: 480px) {
    height: 2400px;
  }
 `
export const IGS_ServicesWrapper = styled.div`
    max-width: 2000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 30px;
    padding: 0 0px;

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
  background: #000;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 16px;
  max-height: 375px;
  transition: all 0.2s ease-in-out;
  background: #000;
  box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
  height: 375px;
  width: 250px;
  left: 0px;
  top: 0px;
  border-radius: 16px;
  border: 1px solid #FFFFFF;
  


  &:hover {
    transform: scale(1.1);
    transition: all 0.2s ease-in-out;
    cursor:pointer;
  }
`
export const IGS_ServicesIcon = styled.img`
  height: 187.5px;
  border-radius: 16px;
  width: 250px;
  
`
export const IGS_ServicesH1 = styled.h1`
  font-size: 2.5rem;
  color: #C6182F;
  margin-bottom: 64px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }  
`
export const IGS_ServicesH2 = styled.h2`
  font-size: 1rem;
  color: #f9f9f9;
  margin-bottom: 10px;
font-weight: normal;
font-size: 22px;
line-height: 22px;
text-align: center;
margin-top:25.97px;
`

export const IGS_ServicesP = styled.p`
  font-size: 0.98rem;
  padding-left: 10%;
  color: #fff;
  padding-bottom: 20%;
`



