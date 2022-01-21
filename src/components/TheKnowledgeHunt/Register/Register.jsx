import { React, useState } from "react";
import './Register.css';
import { Button2 } from '../IGS_ButtonElements'
import imageName from './workshop.png';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavLinks, NavItem, NavBtn, NavBtnLink } from '../KH_NavbarElements'
const Register = () => {

    return <>
        <div className="RegisterDetail" id='register'>
            <h2 className="registerheading">How to register</h2>
            <div className="RegisterOption">
                <div className="RegisterOptionLeft">
                    <h3 className="RegisterOptionHeading">1. Individual Registration.</h3>
                    <ul>
                    <div className="OptionStep">

                       
                       <li> <p>Click on your respective pool<br></br>
<b>Pool A: 6-8 class</b><br></br>
<b>Pool B: 9-10 class</b><br></br>
<b>Pool C: 11-12 class and College students</b><br></br>
You will be redirected to the corresponding Registration Form on Dare2Compete Platform.</p></li>

                    </div>
                    <div className="OptionStep">
                        <p>Login into Dare2Compete platform and fill the registration form.
</p>
                    </div>
                    <div className="OptionStep">
                        <p>You would receive a confirmation email following successful registration. </p>
                    </div>
                    
                    </ul>
                    <p><b><i>Important Note: The Knowledge Hunt will be conducted on Dare2compete platform itself hence you must remember your login credentials and keep a track of the confirmation email.</i></b></p>
                    <NavBtn>
            <a href = "https://dare2compete.com/o/rXj1uvi?lb=h0xkG4o" target="_blank" class="KH">Pool A</a>
            
          </NavBtn>
          <NavBtn>
            <a href = "https://dare2compete.com/o/E5SRy0c?lb=h0xkG4o" target="_blank" class="KH">Pool B</a>
            
          </NavBtn>
          <NavBtn>
            <a href = " https://dare2compete.com/o/zJNARnH?lb=h0xkG4o" target="_blank" class="KH">Pool C</a>
            
          </NavBtn>
                     </div>
                     <div className="RegisterOptionLeft">
                    <h3 className="RegisterOptionHeading">2. Fee Payment</h3>
                    <ul>
                    <div className="OptionStep">
                       
                       <li> <p>Click on the link given below.</p></li>
                    </div>
                    <div className="OptionStep">
                        <p>On accepting the terms and conditions, click on ‘Proceed’.

</p>
                    </div>
                    <div className="OptionStep">
                        <p>Enter the following details in drop down menu:<br></br>
State of Corporate/Institution - <b>Uttar Pradesh</b><br></br>
Type of Corporate/Institution - <b>Educational Institutions</b></p>
                    </div>
                    <div className="OptionStep">
                       
                       <li> <p>Click on ‘Go’.</p></li>
                    </div>
                    <div className="OptionStep">
                        <p>Select<b> ‘INDIAN INSTITUTE OF TECHNOLOGY, KANPUR’ </b>in Educational Institutions Name.

</p>
                    </div>
                    <div className="OptionStep">
                       
                       <li> <p>Click on ‘Submit’.</p></li>
                    </div>
                    <div className="OptionStep">
                        <p>Select <b>‘STUDENTS GYMKHANA’</b> in the Payment Category.

</p>
                    </div>
                    
                    </ul>
                    <p><b><i>Important Note: Keep a soft copy of the receipt generated and kindly note
down the transaction number as well. 
</i></b></p>
                    <NavBtn>
            <a href = "#" class="KH">Coming Soon!</a>
            
          </NavBtn>
          
                     </div>
                     
                     {/* <div className="RegisterOptionLeft">
                    <h3 className="RegisterOptionHeading">3. Verification</h3>
                    <ul>
                    <div className="OptionStep">
                       
                       <li> <p>Fill the following google form <a href="https://forms.gle/jNimyVj1xazZZfmh7">here.</a><br></br>
</p></li>
                    </div>
                    <div className="OptionStep">
                        <p>Fill in the necessary details and upload the receipt.
</p>
                    </div>
                   
                    
                    </ul>
                    <p className="note"><b><i>Note: 	Interested schools/academic institutions may contact us at ppoc.iitk@gmail.com                                           
Further information shall be conveyed after the preliminary contact is  made.
</i></b></p>
 <div className="OptionStep">
                        <img src={imageName} alt="workshop image" />

                    </div>
                   
                     </div> */}
                     <div className="RegisterOptionRight">
                    <h3 className="RegisterOptionHeading">Via School Registration</h3>
                    <div className="OptionStep">
                        
                        <p className="note"><b><i>Interested schools/academic institutions may contact us at ppoc.iitk@gmail.com                                           
Further information shall be conveyed after the preliminary contact is  made.
</i></b></p>
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
