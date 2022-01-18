import { React, useState } from "react";

import Accordion from 'react-bootstrap/Accordion';
import './ConductionDetail.css';
const ConductionDetail = () => {
    const [currentActiveKey, setCurrentActiveKey] = useState(null);

    const toggleActiveKey = (key) => {
        setCurrentActiveKey(currentActiveKey === key ? null : key);
    };
    return <>
        <div className="accordion-container">
            <div className="detailContainer">
                <div className="detailContainerTop">
                    <h2>Details about conduction</h2>
                    <p>All the related info, including syllabus, sample questions, and deadlines, shall be updated well in advance on this website of Public Policy and Opinion Cell, IIT Kanpur. Please find the schedule for The Knowledge Hunt below:
                    </p>
                </div>
                <div className="detailContainerBottom">
                    <div className="detailContainerBottomLeft">
                        <ul>
                            <li><span className="detailHeading">Registrations Start: </span>18th January 2022</li>
                            <li><span className="detailHeading">Last Date for Registrations: </span>6th February 2022</li>
                            <li><span className="detailHeading">Release of Sample Question Paper: </span>26th January 2022</li>
                        </ul>
                    </div>
                    <div className="detailContainerBottomRight">
                        <ul>
                            <li><span className="detailHeading">Date and Time of The Knowledge Hunt: </span>8th February 2022</li>
                            <li><span className="detailHeading">Result Declaration: </span>10th February 2022</li>
                            <li><span className="detailHeading">Dates of Policy Conclave: </span>12th-14th February 2022</li>
                        </ul>
                    </div>
                </div>
            </div>
            <Accordion defaultActiveKey="0" >
                <Accordion.Item eventKey="0" className="active">
                    <Accordion.Header className={(currentActiveKey === "0") ? "active" : ""}>Pool A: Class VI-VIII</Accordion.Header>
                    <Accordion.Body>
                        <h5>Social Science, Science and Maths NCERT book of class 6-8</h5>
                        <div className="subjects">
                            <div className="subject">
                                <ul>
                                    {/* mention "heading " class for subject name */}
                                    <li className="heading">History(15Q)</li>
                                    <li>General History of India and The World</li>
                                    <li>Modern, Mediaeval and Ancient History</li>
                                </ul>
                            </div>
                            <div className="subject">
                                <ul>
                                    <li className="heading">Geography (10Q)</li>
                                    <li>Our Country India</li>
                                    <li>Motions of the Earth</li>
                                    <li>Natural Vegetation and wildlife</li>
                                    <li>Agriculture and Natural Resources</li>
                                </ul>
                            </div>
                            <div className="subject">
                                <ul>
                                    <li className="heading">Polity and Governance (15Q)</li>
                                    <li>Panchayat Raj</li>
                                    <li>Urban Administration</li>
                                    <li>Understanding media</li>
                                    <li>Judiciary</li>
                                    <li>Law and Social justice</li>
                                    <li>The Indian Constitution</li>
                                </ul>
                            </div>
                            <div className="subject">
                                <ul>
                                    <li className="heading">Economics and finance (10Q)</li>
                                    <li>Urban livelihood</li>
                                    <li>Rural livelihood</li>
                                    <li>Markets around us</li>
                                    <li>Struggles for equality</li>
                                    <li>Public facilities</li>
                                    <li>Understanding Marginalised</li>
                                </ul>
                            </div>
                            <div className="subject last">
                                <ul>
                                    <li className="heading">General Science (20Q)</li>

                                </ul>
                                <ul>
                                    <li className="heading">Reasoning (20Q)</li>

                                </ul>
                            </div>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1" className={currentActiveKey === "1" ? "active" : ""}>
                    <Accordion.Header>Pool B: Class IX-X</Accordion.Header>
                    <Accordion.Body>
                        <h5>Social Science, Science and Maths NCERT book of class 9-10</h5>
                        <div className="subjects">
                            <div className="subject">
                                <ul>
                                    {/* mention "heading " class for subject name */}
                                    <li className="heading">History(15Q)</li>
                                    <li>French Revolution</li>
                                    <li>Socialism in Europe and Russian Revolution</li>
                                    <li>Nationalism in India</li>
                                    <li> Indian Historians and their works</li>
                                </ul>
                            </div>
                            <div className="subject">
                                <ul>
                                    <li className="heading">Geography(10Q)</li>
                                    <li>Physical Features of India</li>
                                    <li>Climate</li>
                                    <li>Water Resources of India</li>
                                    <li>Agriculture</li>
                                    <li>Minerals and Energy Resources of India </li>
                                </ul>
                            </div>
                            <div className="subject">
                                <ul>
                                    <li className="heading">Polity and Governance(15Q)</li>
                                    <li>Constitution of India</li>
                                    <li>Electoral Politics</li>
                                    <li>Democratic Rights</li>
                                    <li>Gender</li>
                                    <li>Caste and Religion</li>
                                    <li>Popular Struggles and Movements</li>
                                    <li>Political Parties</li>
                                    <li>Famous Office Bearers in Indian Governance </li>
                                </ul>
                            </div>
                            <div className="subject">
                                <ul>
                                    <li className="heading">Economics and Finance(10Q)</li>
                                    <li>Money and Credit</li>
                                    <li>Sectors of Indian Economy</li>
                                    <li>Globalisation</li>
                                    <li>Poverty in India</li>
                                    <li>Food Security in India</li>
                                    <li>Recent Global Economic Reforms</li>
                                </ul>
                            </div>

                            <div className="subject last">
                                <ul>
                                    <li className="heading">General Science(20Q)</li>

                                </ul>
                                <ul>
                                    <li className="heading">Reasoning (20Q)</li>

                                </ul>

                            </div>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2" className={currentActiveKey === "2" ? "active" : ""}>
                    <Accordion.Header>Pool C: Class XI-XII - College Students</Accordion.Header>
                    <Accordion.Body>
                        <h5>Social Science, Science and Maths NCERT book of class 11-12th</h5>
                        <div className="subjects">
                            <div className="subject">
                                <ul>
                                    {/* mention "heading " class for subject name */}
                                    <li className="heading">History(5Q)</li>
                                    <li>History of India</li>
                                    <li>Indian National Movement.</li>
                                </ul>
                            </div>
                            <div className="subject">
                                <ul>
                                    <li className="heading">Polity and Governance(10Q)</li>
                                    <li>Indian Polity and Governance - Constitution</li>
                                    <li>Political System</li>
                                    <li>Panchayati Raj</li>
                                    <li>Public Policy</li>
                                    <li>Rights Issues</li>
                                </ul>
                            </div>
                            <div className="subject">
                                <ul>
                                    <li className="heading">Economics and Finance(10Q)</li>
                                    <li>Economics</li>
                                    <li>Sustainable Development</li>
                                    <li>Poverty</li>
                                    <li>Inclusion</li>
                                    <li>Demographics</li>
                                    <li>Social Sector initiatives</li>
                                </ul>
                            </div>
                            <div className="subject">
                                <ul>
                                    <li className="heading">Geography(5Q)</li>
                                    <li>Indian and World Geography</li>
                                    <li>Physical, Social, Economic Geography of India and the World</li>
                                    <li>General issues on Environmental Ecology</li>
                                </ul>
                            </div>
                            <div className="subject last">
                                <ul>
                                    <li className="heading">General Science(20Q)</li>
                                </ul>
                                <ul>
                                    <li className="heading">Reasoning (20Q)</li>
                                </ul>
                            </div>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

        </div>
    </>
}

export default ConductionDetail;
