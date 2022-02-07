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
            <NavLinks to='hunt-home'
              smooth={true} duration={500} spy={true} exact='true' offset={-80}
              >Home</NavLinks>
            </NavItem>
            <NavItem>
            
              <NavLinks to='register'
              smooth={true} duration={500} spy={true} exact='true' offset={-80}
              >Register</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='details-about-conduction'
              smooth={true} duration={500} spy={true} exact='true' offset={-80}
              >Details</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='exam_link'
              smooth={true} duration={500} spy={true} exact='true' offset={-80}
              >Exam Link</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='Prizes'
              smooth={true} duration={500} spy={true} exact='true' offset={-80}
              >Prizes</NavLinks>
            </NavItem>
            
            <NavItem>
              <NavLinks to='IGS_Services'
              smooth={true} duration={500} spy={true} exact='true' offset={-80}
              >Contact Us</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='faq-container'
              smooth={true} duration={500} spy={true} exact='true' offset={-80}
              >FAQ</NavLinks>
            </NavItem>
           
            
          </NavMenu>
          <NavBtn>
             <a href = "https://www.blogger.com/profile/05197863151050865456" class="opineRed">Opine Matters</a>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </IconContext.Provider>
    </>
  )
}

export default Navbar
