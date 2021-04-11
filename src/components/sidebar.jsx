import { ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader, SidebarFooter, SidebarContent } from 'react-pro-sidebar';


import 'react-pro-sidebar/dist/css/styles.css';
function Sidebar(){
  return(
    <div className="sidebar">
<ProSidebar>
<SidebarHeader>
<Menu iconShape="square">
<SubMenu title="Profile" >
  <MenuItem>Account</MenuItem>
  <MenuItem>Sign Out</MenuItem>
</SubMenu>
</Menu>
</SidebarHeader>
<SidebarContent>
  <Menu iconShape="square">
    <MenuItem >Dashboard</MenuItem>
    <SubMenu title="Internships" >
      <MenuItem>Component 1</MenuItem>
      <MenuItem>Component 2</MenuItem>
    </SubMenu>
    <SubMenu title="Clubs" >
      <MenuItem>lauda</MenuItem>
      <MenuItem>lassan</MenuItem>
      <MenuItem>gand</MenuItem>
    </SubMenu>
<MenuItem >Classes</MenuItem>
<MenuItem >Others</MenuItem>
  </Menu>
  </SidebarContent>
   <SidebarFooter>
   
   Copyright 2021

    </SidebarFooter>
</ProSidebar>
</div>
);
}
export default Sidebar;
