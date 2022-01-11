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
            <img src="https://i.ibb.co/3MGGPYL/Group-33.png" style={{width:150, marginTop: -7}} />
          </NavLogo>
          <MobileIcon onClick={toggle} >
            <FaBars color='#c6182f'/>
          </MobileIcon>
          <NavMenu>
          <NavItem>
            <NavLinks to='igs'
              smooth={true} duration={500} spy={true} exact='true' offset={-80}
              >Home</NavLinks>
            </NavItem>
            <NavItem>
            
              <NavLinks to='IGS_Services'
              smooth={true} duration={500} spy={true} exact='true' offset={-80}
              >Major Events</NavLinks>
            </NavItem>
            <NavItem>
            
              <NavLinks to='IGS_Services'
              smooth={true} duration={500} spy={true} exact='true' offset={-80}
              >Campus Initiatives</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='Speakers'
              smooth={true} duration={500} spy={true} exact='true' offset={-80}
              >Policy Research</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='Speakers'
              smooth={true} duration={500} spy={true} exact='true' offset={-80}
              >Media</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='Speakers'
              smooth={true} duration={500} spy={true} exact='true' offset={-80}
              >About</NavLinks>
            </NavItem>
           
            
          </NavMenu>
          <NavBtn>
             <a href = "https://www.blogger.com/profile/05197863151050865456" class="opineRed">Contact Us</a>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </IconContext.Provider>
    </>
  )
}

export default Navbar
