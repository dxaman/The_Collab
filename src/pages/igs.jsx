import React, {useState} from 'react'
import Navbar from '../components/NavbarCopy'
import {AboutOne} from '../components/About/Data';
import Sidebar from '../components/SideBar'
import Pakistan from '../components/IGS-about'

const Home = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () =>{
    setIsOpen(!isOpen);
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle}/>
      <Pakistan {...AboutOne}/>
    </>
  )
}

export default Home
