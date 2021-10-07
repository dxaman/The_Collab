import React, {useState} from 'react'
import ScrollToTop from "react-scroll-to-top";



import {YoutubeOne, YoutubeTwo, YoutubeThree} from '../components/igs/IGS_Youtube/Data';



import Youtube from "../components/Youtoob_IGS";
import Aboute from "../components/igs/IGS_about";
import {AboutOne} from '../components/igs/IGS_about/Data';

import NavBar from "../components/igs/IGS_Navbar";
import IGS_Hero from "../components/igs/IGS_Hero";
import IGS_Footer from "../components/igs/IGS_Footer";
import IGS_Services from "../components/igs/IGS_Services";
import ScrollTooTawp from '../components/ScrollToTop'
import Slider from '../components/igs/Speaker'
import Decor from "../components/Decor";
import IGS_Decor from "../components/igs/IGS_Decor";
import Sidebar from "../components/SideBarIGS";
import { ReactComponent as MySVG } from "../images/up.svg";




const Home = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () =>{
    setIsOpen(!isOpen);
  }

  return (
    <>
    
    <ScrollToTop smooth color="black" component={<MySVG />}/>
   <Sidebar isOpen={isOpen} toggle={toggle} />
      <NavBar toggle={toggle}/>
      <ScrollTooTawp />
      
     <IGS_Decor/>
      
        <IGS_Hero />
      <Aboute {...AboutOne}/>
      <Youtube/>
      <IGS_Services/>
        <Slider/>

        <IGS_Footer/>
    </>
  )
}

export default Home







