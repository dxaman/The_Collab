import { React, useState } from "react";
import './Register.css';
import imageName from './workshop.png';
const Register = () => {

    return <>
        <div className="RegisterDetail">
            <h2 className="registerheading">How to register</h2>
            <div className="RegisterOption">
                <div className="RegisterOptionLeft">
                    <h3 className="RegisterOptionHeading">Individual Registration.</h3>
                    <div className="OptionStep">
                        <h2 className="RegisterOptionHeading">1.</h2>
                        <p>Go to <a style={{ color: "rgb(199, 88, 88)", textDecoration: "none" }} href="https://www.onlinesbi.com/sbicollect/icollecthome.html" target={"_blank"}>https://www.onlinesbi.com/sbicollect/icollecthome.html</a></p>
                    </div>
                    <div className="OptionStep">
                        <h2 className="RegisterOptionHeading">2.</h2>
                        <p>On accepting the terms and conditions, click on ‘Proceed’.</p>
                    </div>
                    <div className="OptionStep">
                        <h2 className="RegisterOptionHeading">3.</h2>
                        <p>Select ‘Uttar Pradesh’ in State of Corporate/Institution.</p>
                    </div>
                    <div className="OptionStep">
                        <h2 className="RegisterOptionHeading">4.</h2>
                        <p>Select ‘Educational Institutions’ in Type of Corporate/Institution.</p>
                    </div>
                    <div className="OptionStep">
                        <h2 className="RegisterOptionHeading">5.</h2>
                        <p>Click on ‘Go’.</p>
                    </div>
                    <div className="OptionStep">
                        <h2 className="RegisterOptionHeading">6.</h2>
                        <p>Select ‘INDIAN INSTITUTE OF TECHNOLOGY, KANPUR’ in Educational Institutions Name.</p>
                    </div>
                    <div className="OptionStep">
                        <h2 className="RegisterOptionHeading">7.</h2>
                        <p>Click on ‘Submit’.</p>
                    </div>
                    <div className="OptionStep">
                        <h2 className="RegisterOptionHeading">8.</h2>
                        <p>Select ‘STUDENTS GYMKHANA’ in the Payment Category.</p>
                    </div>
                </div>
                <div className="RegisterOptionRight">
                    <h3 className="RegisterOptionHeading">Via School Registration</h3>
                    <div className="OptionStep">
                        <h2 className="RegisterOptionHeading">1.</h2>
                        <p>Interested schools/academic institutions may contact us at <strong style={{ color: "rgb(199, 88, 88)", textDecoration: "none" }}>ppoc.iitk@gmail.com</strong> </p>
                    </div>
                    <div className="OptionStep">
                        <h2 className="RegisterOptionHeading">2.</h2>
                        <p>On accepting the terms and conditions, click on ‘Proceed’.</p>
                    </div>
                    <div className="OptionStep">
                        <img src={imageName} alt="workshop image" />

                    </div>
                </div>
            </div>

        </div>
    </>
}

export default Register;
