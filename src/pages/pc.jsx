import React, {useState} from 'react'
import Youtoobe from ".././components/Youtube_PC";
import Aboute from "../components/pc/pc_about";
import {AboutOne} from '../components/pc/pc_about/Data';
import Speakers from '../components/pc/pc_speakers'
import NavBar from "../components/pc/pc_Navbar";
import Pc_Hero from "../components/pc/pc_Hero";
import IGS_Footer from "../components/igs/IGS_Footer";
import Pc_Services from "../components/pc/pc_Competition";
import ScrollToTop from '../components/ScrollToTop'
import Slider from '../components/igs/Speaker'
import Decor from "../components/Decor";
import IGS_Decor from "../components/igs/IGS_Decor";
import Workshop from '../components/pc/pc_workshop/pages/workshop';
import PC_Footer from "../components/pc/pc_footer"
// import Sidebar from "../components/SideBarIGS";
import Sidebar from "../components/pc/SidebarPc";
import Partner from "../components/pc/pc_Partners"
import Workshop_new from "../components/pc/pc_workshops_new"





const Home = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () =>{
    setIsOpen(!isOpen);
  }

  return (
    <>

    <ScrollToTop />
   <Sidebar isOpen={isOpen} toggle={toggle} />
    <NavBar toggle={toggle}/>
    <Pc_Hero />
 <Aboute {...AboutOne}/>
 <Speakers/>
 <Workshop_new/>
 <Pc_Services/> 
 <Youtoobe/>
 {/* <Workshop/> */}
 <Partner/>
 <PC_Footer />
    </>
  )
}

export default Home ;







