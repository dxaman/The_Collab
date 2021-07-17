import React, {useState} from 'react'
import Footer from '../components/Footer';
import Hero from '../components/Hero'
import Decor from '../components/Decor'
import Navbar from '../components/Navbar'
import About from '../components/About'
import {AboutOne} from '../components/About/Data';
import {YoutubeOne} from '../components/Youtube/Data';
import Services from '../components/Services';
import Events from '../components/Events';
import Team from '../components/Team';
import Sidebar from '../components/SideBar'
import Ending from "../components/Ending";
import Youtube from "../components/Youtube";
import Pakistan from '../components/igs/IGS_about'

const Home = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () =>{
    setIsOpen(!isOpen);
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle}/>
      <Hero />
      <About {...AboutOne}/>
      <Decor/>
      <Events/>
      <Services />
      <Team/>
      <Ending/>
      <Youtube {...YoutubeOne}/>
      <Footer />
    </>
  )
}

export default Home
