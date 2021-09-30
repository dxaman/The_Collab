import React, {useState} from 'react'
import Dialog from './Dialog'
import './AboveFooter.css'

const AboveFooter = () => {
    const [iskm, setIskm] = useState(false)
    const [iscs, setIscs] = useState(false)
    
    return (
        <div>
          <h4>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias tempore illum non repellendus dolorum aliquid voluptate sint, earum cum in et, est vel? Voluptatem quidem quasi eligendi nemo debitis provident?
          </h4>  
          <center><div className="button-container">
              <button class='kmcs' onClick={() => setIskm((val)=>!val)}>Know More</button>
              <button class='kmcs2' onClick={() => setIscs((val)=>!val)}>Contact Us</button>
          </div></center>
          {
              iskm ? (
                  <Dialog heading="Know More" text="Lorem Ipsum" isBtn={iskm} setIsBtn={setIskm}/>
              ) : null
          }
                    {
              iscs ? (
                <Dialog heading="Contact Us" text="Lorem Ipsum" isBtn={iscs} setIsBtn={setIscs}/>
              ) : null
          }
        </div>
    )
}

export default AboveFooter
