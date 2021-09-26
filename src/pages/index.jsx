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
import Social from '../components/SocialMedia'
import Ending from "../components/Ending";
import Youtube from "../components/Youtube";
import Slider from '../components/Slider'
import Partner from '../components/Partner'
import AboveFooter from '../components/AboveFooter/AboveFooter';

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
      <Social/>
      <Services />
      <Slider/>
      {/* <Team/> */}
      <Partner/>
      <Youtube {...YoutubeOne}/>
      <AboveFooter/>
      <Footer />
    </>
  )
}

export default Home
