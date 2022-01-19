import React, { useState } from 'react'
import ScrollToTop from '../components/ScrollToTop'
import Sidebar from '../components/SideBar'
import Navbar from '../components/Navbar/NewNavbar'

import ConductionDetail from '../components/TheKnowledgeHunt/ConductionDetail/ConductionDetail';
import Register from '../components/TheKnowledgeHunt/Register/Register';
import bg_img from '../images/hunt_bg_img.png'

import Group from '../images/Group.png'
import Knowledge from '../images/knowledge.png'


import down_arrow from '../images/down_arrow.png'
import {ButtonR} from "../components/ButtonElements";
// import ConductionDetail from '../components/TheKnowledgeHunt/ConductionDetail/ConductionDetail';
// import Register from '../components/TheKnowledgeHunt/Register/Register';
import './hunt_style.css'
import Faq from '../components/TheKnowledgeHunt/Faq/faq';
const Hunt = () => {
    const [isOpen, setIsOpen] = useState(false)
    

    const toggle = () => {
        setIsOpen(!isOpen);
    }
    return (
        <>

          {/*  <ScrollToTop />
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <div style={{ marginTop: "80px" }}>
                <Navbar toggle={toggle} />
            </div>
            <section className="hunt_home">
                <div className="main">
                    <h1>Knowledge Hunt</h1>
                    The Knowledge Hunt is an initiative of Public Policy and Opinion Cell, IIT Kanpur to engage students at the grass-root level and strengthen the talent pool of our nation in the field of policy and governance.<br /><br /><br />
                    <a href="#" className="register_now">Register Now!</a>
                </div><br />
                <img src={bg_img} className="hunt_bg_img" /><br />
                <div className="div_know_more">
                    <a href="#pg2" className="know_more">Know More</a><br />
                    <a href="#pg2"><img src={down_arrow} className="down_arrow"></img></a>
                </div>
            </section>
            <section className="hunt_page2" id="pg2">
                <div className="left_box cardi">
                    <h2 className="left_heading">
                        What is Knowledge Hunt?</h2><br />
                    The hunt will be conducted on 6 Feb and any students from class 6 onwards are eligible for the examination. The students will have to register individually and they will be tested on topics ranging from mental ability, science, economics, political science, history, and geography that they have studied in their school. Through this, the students can access themselves on a national level in the field of science, social sciences, maths, and mental ability. This will give the students a general overview of their knowledge level.

                </div>
                <div className="right_box cardi">
                    <h2>PPOC</h2><br />
                    The Public Policy and Opinion Cell provides the campus community with a platform to discuss various events of national and international importance and thus explore the plethora of viewpoints that can be constructed on the same issue, leading to the growth of the intellect of its student members. The Public Policy and Opinion Cell will be organizing its annual policy summit “Policy Conclave” from 12- 14 February. The Policy Conclave was established with the aim of engaging students with the challenges of policy-making in contemporary society by fostering, creating, and scrutinizing potential policy solutions to a diverse range of issues including but not limited to Foreign Policy, Environment, Government, Health, Education, and Governance. Policy Conclave is the first of its kind of summit held at IIT Kanpur among all sister IITs
                </div>
            </section>
            <Register />
            <ConductionDetail />
            <Faq />*/}

        <ScrollToTop />
        
        <section className="hunt_home" id="hunt-home">
        <div className="main">
            <div className='left_side'>
                <div className='left_side_1'>
                    <h3 className='heading_top'>THE</h3>
                <img src={Knowledge} className='knowledge_img'  />
                <h3 className='heading_hunt'>HUNT</h3>
                </div>
                <div className='left_side_2'>
            <div>
          <h3>The</h3>
            </div>
            <div>
          <h3>Knowledge</h3>
            </div>
            <div>
          <h3> Hunt</h3>
          </div>
                </div>     
            </div>
            The Knowledge Hunt is an initiative of Public Policy and Opinion Cell, IIT Kanpur to engage students at the grass-root level and strengthen the talent pool of our nation in the field of policy and governance.
            <br/><br/><br/>
            <ButtonR to='register' smooth={true} duration={500} spy={true} exact='true' offset={-80}>
             Register Now! 
            </ButtonR>
        </div><br/>
        <img src={Group} className="hunt_bg_img"/><br/>
        <div className="div_know_more">
        <a href="#pg2" className="know_more">Know More</a><br/>
        <a href="#pg2"><img src={down_arrow} className="down_arrow"></img></a>
        </div>
        </section>
        <section className="hunt_page2" id="pg2">
            <div className="left_box cardi">
                <h2 className="left_heading">
                    What is Knowledge Hunt?</h2><br/>
                    The hunt will be conducted on 6 Feb and any students from class 6 onwards are eligible for the examination. The students will have to register individually and they will be tested on topics ranging from mental ability, science, economics, political science, history, and geography that they have studied in their school. Through this, the students can access themselves on a national level in the field of science, social sciences, maths, and mental ability. This will give the students a general overview of their knowledge level.
                
            </div>
            <div className="right_box cardi">
                <h2>PPOC</h2><br/>
                The Public Policy and Opinion Cell provides the campus community with a platform to discuss various events of national and international importance and thus explore the plethora of viewpoints that can be constructed on the same issue, leading to the growth of the intellect of its student members. The Public Policy and Opinion Cell will be organizing its annual policy summit “Policy Conclave” from 12- 14 February. The Policy Conclave was established with the aim of engaging students with the challenges of policy-making in contemporary society by fostering, creating, and scrutinizing potential policy solutions to a diverse range of issues including but not limited to Foreign Policy, Environment, Government, Health, Education, and Governance. Policy Conclave is the first of its kind of summit held at IIT Kanpur among all sister IITs
            </div>
        </section>
        {/* <Register />
        <ConductionDetail /> */}
                    {/* <Faq /> */}

        </>
    )
}

export default Hunt
