import React, {useState, useEffect} from 'react'
import { FaBars } from 'react-icons/fa'
import {IconContext} from 'react-icons/lib'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavLinks, NavItem, NavBtn, NavBtnLink } from './NavbarElements'
import { animateScroll as scroll } from 'react-scroll';

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false)
  const changeNav = () => {
    if(window.scrollY >= 80) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, [])

  const toggleHome = () => {
    scroll.scrollToTop();
  }

  return (
    <>
    <IconContext.Provider value={{ color: '#fff'}}>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
        <NavLogo to='/' onClick={toggleHome}>
            {/*<img src="https://i.ibb.co/RQVmwZz/Group-33.png" style={{width:150, marginTop: -7, marginLeft: -250}} />*/}
            <img src="https://i.ibb.co/mRqTx0n/Group-64.png" alt="" style={{width:150, marginTop: -7}} />
          </NavLogo>
          <MobileIcon onClick={toggle} >
            <FaBars color='#402893'/>
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to='about_pc'
              smooth={true} duration={500} spy={true} exact='true' offset={-80}
              >About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='pc_speakers'
              smooth={true} duration={500} spy={true} exact='true' offset={-80}
              >Speakers</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='pc_workshops'
              smooth={true} duration={500} spy={true} exact='true' offset={-80}
              >Workshop</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='pc_competition'
              smooth={true} duration={500} spy={true} exact='true' offset={-80}
              >Competition</NavLinks>
            </NavItem>
           
            
          </NavMenu>
          <NavBtn>
            <NavBtnLink to='/Opine'>Contact Us</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </IconContext.Provider>
    </>
  )
}

export default Navbar
