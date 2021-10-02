import styled from 'styled-components'

export const ServicesContainer = styled.div`
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: white;

  @media screen and (max-width: 1000px) {
    height: 2000px;
  }

  @media screen and (max-width: 480px) {
    height: 2000px;
  }
 `
export const ServicesWrapper = styled.div`
    max-width: 2000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
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
export const ServicesCard = styled.div`
position : relative;
 z-index: 2;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 490px;
  padding:  30px;
  transition: all 0.2s ease-in-out;
  background: #F9F9F9;
box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.25);
border-radius: 16px;
height: 600px;
width: 300px;
left: 0px;
top: 0px;
border-radius: 16px;
text-align: center;


  &:hover {
    transform: scale(1.1);
    transition: all 0.2s ease-in-out;
    cursor:pointer;
  }
`
export const ServicesIcon = styled.img`
  height: 80px;
  width: 80px;
  margin-bottom: 10px;

`
export const ServicesH1 = styled.h1`
  font-size: 2.5rem;
  color: #664aa6;
  margin-bottom: 64px;
  font-weight: bold;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }  
`
export const ServicesH2 = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 10px;
`

export const ServicesP = styled.p`
  font-size: 0.98rem;
  text-align: center;
  padding-bottom: 20%;
`


