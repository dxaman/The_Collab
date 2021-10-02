import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SidebarRoute, SideBtnWrap } from './SidebarElements'
import  './navstyle.css'

const Sidebar = ({isOpen,toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to='about' onClick={toggle}>About Us</SidebarLink>
          <SidebarLink to='events' onClick={toggle}>Competitions</SidebarLink>
          <SidebarLink to='services' onClick={toggle}>Events</SidebarLink>
          <SidebarLink to='team' onClick={toggle}>Our Team</SidebarLink>
          <SidebarLink to='youtube' onClick={toggle}>Videos</SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          {/* <SidebarRoute to='/Opine'>Opine Matters</SidebarRoute> */}
           <a href = "https://www.blogger.com/profile/05197863151050865456" class="opine">Opine Matters</a>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar
