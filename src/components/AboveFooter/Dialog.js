import React from 'react'
import './Dialog.css'

const Dialog = ({ heading, text, isBtn, setIsBtn }) => {
    return (
        <div className="dialog-container">
            <h1>{heading}</h1>
            <p>{text}</p>
            <center><button id='close' onClick={()=>setIsBtn((val)=>!val)}>Close</button></center>
        </div>
    )
}

export default Dialog
