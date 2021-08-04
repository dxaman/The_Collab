import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SidebarRoute, SideBtnWrap } from './SidebarElements'

const Sidebar = ({isOpen,toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to='igs' onClick={toggle}>About Us</SidebarLink>
          <SidebarLink to='sessions' onClick={toggle}>Sessions</SidebarLink>
          <SidebarLink to='IGS_Services' onClick={toggle}>Events</SidebarLink>
          <SidebarLink to='speakers' onClick={toggle}>Speakers</SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to='/Opine'>Opine Matters</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar
