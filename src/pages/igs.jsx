import React, {useState} from 'react'
import Navbar from '../components/NavbarCopy'
import Aboute from "../components/igs/IGS_about";
import {AboutOne} from '../components/igs/IGS_about/Data';
import Sidebar from '../components/SideBar'
import NavBar from "../components/igs/IGS_Navbar";
import Hero from "../components/igs/IGS_Hero";
import IGS_Hero from "../components/igs/IGS_Hero";
import IGS_Footer from "../components/igs/IGS_Footer";
import IGS_Services from "../components/igs/IGS_Services";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () =>{
    setIsOpen(!isOpen);
  }

  return (
    <>
        <NavBar/>
      <Sidebar isOpen={isOpen} toggle={toggle} />
        <IGS_Hero />
      <Aboute {...AboutOne}/>
      <IGS_Services/>
        <IGS_Footer/>
    </>
  )
}

export default Home
