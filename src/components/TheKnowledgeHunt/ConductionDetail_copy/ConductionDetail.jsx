import { React, useState } from "react";

import Accordion from 'react-bootstrap/Accordion';
import './ConductionDetail.css';
const ConductionDetail = () => {
    const [currentActiveKey, setCurrentActiveKey] = useState(null);

    const toggleActiveKey = (key) => {
        setCurrentActiveKey(currentActiveKey === key ? null : key);
    };
    return <>
        <div className="accordion-container" id="faq-container">
            <div className="detailContainer">
                <div className="detailContainerTop">
                    <h2>FAQ</h2>
                </div>
            </div>
            <Accordion defaultActiveKey="0" >
                <Accordion.Item eventKey="0" className="active">
                    <Accordion.Header className={(currentActiveKey === "0") ? "active" : ""}>How to pay fees?</Accordion.Header>
                    <Accordion.Body>
                        <h5>SBI collect. Go to https://www.onlinesbi.com</h5>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1" className={currentActiveKey === "1" ? "active" : ""}>
                    <Accordion.Header>How to pay fees?</Accordion.Header>
                    <Accordion.Body>
                        <h5>SBI collect. Go to https://www.onlinesbi.com</h5>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2" className={currentActiveKey === "2" ? "active" : ""}>
                    <Accordion.Header>How to pay fees?</Accordion.Header>
                    <Accordion.Body>
                        <h5>SBI collect. Go to https://www.onlinesbi.com</h5>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3" className={currentActiveKey === "3" ? "active" : ""}>
                    <Accordion.Header>How to pay fees?</Accordion.Header>
                    <Accordion.Body>
                        <h5>SBI collect. Go to https://www.onlinesbi.com</h5>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4" className={currentActiveKey === "4" ? "active" : ""}>
                    <Accordion.Header>How to pay fees?</Accordion.Header>
                    <Accordion.Body>
                        <h5>SBI collect. Go to https://www.onlinesbi.com</h5>
                    </Accordion.Body>
                </Accordion.Item>

            </Accordion>
            
        </div>
    </>
}

export default ConductionDetail;
