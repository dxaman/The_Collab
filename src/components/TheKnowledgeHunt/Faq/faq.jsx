import { React, useState } from "react";

import Accordion from 'react-bootstrap/Accordion';
import './faq.css';
const Faq = () => {
    const [currentActiveKey, setCurrentActiveKey] = useState(null);

    const toggleActiveKey = (key) => {
        setCurrentActiveKey(currentActiveKey === key ? null : key);
    };
    return <>
        <div className="accordion-container">
            <div className="detailContainer">
                <div className="detailContainerTop">
                    <h2>FAQ</h2>
                </div>
            </div>
            <Accordion defaultActiveKey="0" >
                <Accordion.Item eventKey="0" className="active">
                    <Accordion.Header className={(currentActiveKey === "0") ? "active" : ""}>What is “The Knowledge Hunt”?</Accordion.Header>
                    <Accordion.Body>
                        <h5>The hunt will be conducted on 8 February and any students from class 6 onwards is eligible for the examination. The students will have to register individually and they will be tested on topics ranging from reasoning, science, economics, political science, history, and geography that they have studied in their school. Through this, the students can access themselves on a national level in the field of science, social sciences, maths, and mental ability. This will give the students a general overview of their knowledge level.
                        </h5>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1" className={currentActiveKey === "1" ? "active" : ""}>
                    <Accordion.Header>What is the Public Policy and Opinion Cell?</Accordion.Header>
                    <Accordion.Body>
                        <h5>The Public Policy and Opinion Cell provides the campus community with a platform to discuss various events of national and international importance and thus explore the plethora of viewpoints that can be constructed on the same issue, leading to the growth of the intellect of its student members. The Public Policy and Opinion Cell will be organising its annual policy summit “Policy Conclave” from 12- 14 February. The Policy Conclave was established with the aim of engaging students with the challenges of policy-making in contemporary society by fostering, creating, and scrutinising potential policy solutions to a diverse range of issues including but not limited to Foreign Policy, Environment, Government, Health, Education, and Governance. Policy Conclave is the first of its kind of summit held at IIT Kanpur among all sister IITs.</h5>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2" className={currentActiveKey === "2" ? "active" : ""}>
                    <Accordion.Header>What is Prizes and Awards?</Accordion.Header>
                    <Accordion.Body>
                        <h5>Cash Prizes and Goodies worth  <span className="text-danger">  Rs. 10,000 </span> for each pool.
                        </h5>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3" className={currentActiveKey === "3" ? "active" : ""}>
                    <Accordion.Header>Selection of Toppers</Accordion.Header>
                    <Accordion.Body>
                        <h5>Toppers shall be selected on the basis of following two criteria:
                        </h5>
                        <ul >
                            <li className="pb-2 pt-2">Score: The person who scores more marks shall be awarded with a higher rank.
                            </li>
                            <li className="pb-2 pt-2">Duration of solving: In case of a tie due to same marks, the person who completes the exam in lesser duration shall be awarded with a higher rank. Also, a junior student would be given more priority in case of tie in the same pool
                            </li>
                            <li className="pb-2 pt-2">Further, In case of any doubt, personal interviews might be conducted in order to decide pool toppers. </li>

                        </ul>

                        <h6 className="text-warning"> <span>&#174;</span>  The organising reserves all rights to decide the winner and decisions taken
                            would be considered final.
                        </h6>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4" className={currentActiveKey === "4" ? "active" : ""}>
                    <Accordion.Header>How to pay fees?</Accordion.Header>
                    <Accordion.Body>
                        <h5>SBI collect. Go to <a style={{ color: "rgb(199, 88, 88)", textDecoration: "none" }} className="text-danger" href="https://www.onlinesbi.com/sbicollect/" target={"_blank"}>https://www.onlinesbi.com/sbicollect</a></h5>
                    </Accordion.Body>
                </Accordion.Item>

            </Accordion>

        </div>
    </>
}

export default Faq;