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
            <img src="https://i.ibb.co/RQVmwZz/Group-33.png" style={{width:150, marginTop: -7}} />
            <img src="https://i.ibb.co/zxtxY7C/Group-63.png" style={{width:150, marginTop: -7}} />
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to='igs'
              smooth={true} duration={500} spy={true} exact='true' offset={-80}
              >About Us</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='youtube'
              smooth={true} duration={500} spy={true} exact='true' offset={-80}
              >Videos</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='team'
              smooth={true} duration={500} spy={true} exact='true' offset={-80}
              >Speakers</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='IGS_Services'
              smooth={true} duration={500} spy={true} exact='true' offset={-80}
              >Events</NavLinks>
            </NavItem>
            
          </NavMenu>
          <NavBtn>
            <NavBtnLink to='/Opine'>Opine Matters</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </IconContext.Provider>
    </>
  )
}

export default Navbar
