import React, {useState} from 'react'


// import {YoutubeOne, YoutubeTwo, YoutubeThree} from '../components/pc/pc_Youtube/Data';



import Youtube from "../components/pc/pc_Youtube";


import Aboute from "../components/pc/pc_about";
import {AboutOne} from '../components/igs/IGS_about/Data';

import NavBar from "../components/pc/pc_Navbar";
import Pc_Hero from "../components/pc/pc_Hero";
import IGS_Footer from "../components/igs/IGS_Footer";
import Pc_Services from "../components/pc/pc_Competition";
import ScrollToTop from '../components/ScrollToTop'
import Slider from '../components/igs/Speaker'
import Decor from "../components/Decor";
import IGS_Decor from "../components/igs/IGS_Decor";


// import Sidebar from "../components/SideBarIGS";
import Workshop from "../components/pc/pc_workshop/pages/workshop";

import Sidebar from "../components/pc/SidebarPc";
import Partner from "../components/pc/pc_Partners"





const Home = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () =>{
    setIsOpen(!isOpen);
  }

  return (
    <>
    
   <Sidebar isOpen={isOpen} toggle={toggle} />
    <NavBar toggle={toggle}/>
    <Pc_Hero />
 <Aboute {...AboutOne}/>



 <Pc_Services/> 
 <Workshop/>
 <Partner/>
 


    </>
  )
}

export default Home ;







