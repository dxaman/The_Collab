import React from "react";
import Leftbox from "../component/Leftbox";
import Rightbox from "../component/Rightbox";



const Workshop = () => {
  return (
    <>
     <h1>Workshop </h1>
      <div className="main_box shadow-lg p-3 mb-5 bg-body rounded containers">
        <div className="row">
          <div className="col-md-7 col-sm-12">
            <div className="scroll">   
           <Leftbox/>
          </div>
          </div>

          <div className="col-md-5 col-sm-12">

            <div className="right">
               <Rightbox/>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Workshop;
