import React, { useState } from 'react'

import ScrollToTop from '../components/ScrollToTop'
import NavBar from "../components/TheKnowledgeHunt/IGS_Navbar";
import Hunt_Footer from "../components/TheKnowledgeHunt/Hunt_Footer";
import Sidebar from "../components/SideBarIGS";
import ConductionDetail from '../components/TheKnowledgeHunt/ConductionDetail/ConductionDetail';
import Faqs from '../components/TheKnowledgeHunt/ConductionDetail_copy/ConductionDetail'  
import Register from '../components/TheKnowledgeHunt/Register/Register';
import Sponsors from '../components/TheKnowledgeHunt/Partner';
import Hunt from './Hunt'
import AboveFooter from '../components/AboveFooter/AboveFooter';
import Prizes from '../components/TheKnowledgeHunt/IGS_Services_copy';
import Services from '../components/TheKnowledgeHunt/IGS_Services';



const Home = () => {
    const [isOpen, setIsOpen] = useState(false)
  
    const toggle = () =>{
      setIsOpen(!isOpen);
    }

    return (
        <><ScrollToTop />
             <Sidebar isOpen={isOpen} toggle={toggle} /> 
             <NavBar toggle={toggle} /> 
            <Hunt/>
            <Register />
            <ConductionDetail />
            <Prizes/>
            <Services/>
            <Sponsors/>
            <Faqs/>
            {/* <AboveFooter/> */}
             <Hunt_Footer /> 
        </>
    )
}

export default Home







