import styled from 'styled-components'

export const ServicesContainer = styled.div`
  position:relative;
  height: 630px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to right, #B08CCB, #38218F);

  @media screen and (max-width: 768px) {
    height: 1000px;
  }

  @media screen and (max-width: 480px) {
    height: 1300px;
  }
 `
export const ServicesWrapper = styled.div`
    max-width: 2000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    grid-gap: 300px;
    padding: 0 50px;

    @media screen and (max-width: 1000px) {
      grid-template-columns: 1fr 1fr;
  }

    @media screen and (max-width: 786px) {
      grid-template-columns: 1fr;
      padding: 0 20px;
      grid-gap: 100px;
  }
`
export const ServicesCard = styled.div`
position : relative;
  background: #0c0c0c03;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  
  text-align: center;
  border-radius: 10px;
  max-height: 450px;
  padding:  30px;
  transition: all 0.2s ease-in-out;
  background: white;
box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.25);
border-radius: 16px;
height: 445px;
width: 350px;
left: 0px;
top: 0px;
border-radius: 16px;
z-index:2;


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
  align-items: center;

`
export const ServicesH1 = styled.h1`
  font-size: 2.5rem;
  color: white;
  font-weight:bold;
  margin-bottom: 64px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }  
`
export const ServicesH2 = styled.h2`
  font-size: 1.2rem;
  margin-bottom: 10px;
  color: black;
`

export const ServicesP = styled.p`
  font-size: 0.9rem;
  text-align: center;
  padding-bottom: 20%;
  color: black;
`
export const Line = styled.hr`
position: absolute;
left: 50%;
  border-left: 3px solid #ff6c00;
  border-right: 0;
  width:0;
  padding:0;
  height: 350px;
  @media screen and (max-width: 786px) {
  top:54%;
  border-top: 3px solid #ff6c00;
  border-bottom: 0;
  left: 17%;
  width: 300px;
  height: 0px;
  
  }
`

