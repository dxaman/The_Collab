import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'

export const Nav = styled.nav`
  background: ${({scrollNav}) => (scrollNav ? '#0000008a' : 'transparent')};
  height: 80px;
  margin-top: -80px;
  display:flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  position: sticky;
  top:0;
  z-index:10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`
export const NavLogo = styled(LinkR) `
  justify-self: flex-start;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-left: 24px;

`
export const MobileIcon = styled.div`
  display: none;
  
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }
`
export const NavMenu = styled.ul`
  display:flex;
  justify-content: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const NavItem = styled.li`
  height: 80px;
`
export const NavLinks = styled(LinkS)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  font-size: 1.2rem;

  &.active {
    border-bottom: 3px solid #ff6c00
  }
  &:hover {
    font-size: 1.4rem;
    color: #ff6c00
  }
`
export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  float : left;
  
  margin:20px;

 
`
export const NavBtnLink = styled(LinkR)`
border-radius: 10px;
background: #ff7e3d;
white-space: nowrap;
padding: 10px 22px;
color: white;
font-size: 16px;
outline: none;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;

&:hover {
    transition: all 0.2s ease-in-out;
    background: #38218f;
    color: white;
}
`
export const NavBtnLink2 = styled(LinkR)`
position: absolute;
  top: 92.5%;
  left:-10.3%;
  border-radius: 0 0 10px 10px;
  width: 120.8%;
  background: ${({primary}) => (primary ?  '#ff6c00' : '#ff6c00')};
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
    color: black;
    transition: all 0.2s ease-in-out;
    background: ${({primary}) => (primary ?  '#38218F' : '#fff')};
}
`
export const NavBtnLink3 = styled(LinkR)`
text-decoration: none;
justify-content: center;
  align-items: center;
   outline: none;
  border: none;
  position: relative;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
 
}
`
