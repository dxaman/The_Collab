import React, { useState } from 'react'


import NavBar from "../components/igs/IGS_Navbar";
import IGS_Footer from "../components/igs/IGS_Footer";
import Sidebar from "../components/SideBarIGS";
import TheKnowledgeHunt from '../components/TheKnowledgeHunt/ConductionDetail/TheKnowledgeHunt';




const Home = () => {
 
    return (
        <>
            {/* <Sidebar isOpen={isOpen} toggle={toggle} /> */}
            {/* <NavBar toggle={toggle} /> */}

            <TheKnowledgeHunt />
            {/* <IGS_Footer /> */}
        </>
    )
}

export default Home







