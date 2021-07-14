import React, {useState} from 'react'
import Footer from '../components/Footer';
import Hero from '../components/Hero'
import Decor from '../components/Decor'
import Navbar from '../components/Navbar'
import About from '../components/About'
import {AboutOne} from '../components/About/Data';
import Services from '../components/Services';
import Events from '../components/Events';
import Team from '../components/Team';
import Sidebar from '../components/SideBar'

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
      <Footer />
    </>
  )
}

export default Home
