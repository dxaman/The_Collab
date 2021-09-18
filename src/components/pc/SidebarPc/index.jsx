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
          <SidebarLink to='igs' onClick={toggle}>About</SidebarLink>
          <SidebarLink to='sessions' onClick={toggle}>Speaker</SidebarLink>
          <SidebarLink to='IGS_Services' onClick={toggle}>Workshop</SidebarLink>
          <SidebarLink to='pc_competition' onClick={toggle}>Competition</SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to='/Opine'>Contact Us</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar
