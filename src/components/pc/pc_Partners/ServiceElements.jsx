import styled from 'styled-components'

export const ServicesContainer = styled.div`
position:relative;
  padding-bottom:1%;
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: white;

  @media screen and (max-width: 1000px) {
    height: 600px;
  }

  @media screen and (max-width: 480px) {
    height: 600px;
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
      grid-gap: 20px;
  }
`
export const ServicesCard = styled.div`
position : relative;
 
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 340px;
  padding:  30px;
  transition: all 0.2s ease-in-out;
  background: none;
height: 375px;
width: 250px;
left: 0px;
top: 0px;
border-radius: 16px;


  &:hover {
    transform: scale(1.05);
    transition: all 0.2s ease-in-out;
    cursor:pointer;
  }
`
export const ServicesIcon = styled.img`
  height: 230px;
  width: 230px;
  margin-bottom: 10px;
  border-radius: 10px 40px 10px 40px;

`
export const ServicesH1 = styled.h1`
  font-size: 2.5rem;
  color: #664aa6;
  margin-bottom: 64px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }  
`
export const ServicesH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
  color:white;
`

export const ServicesP = styled.p`
  font-size: 1rem;
  text-align: center;
  padding-bottom: 20%;
  color: white;
`



