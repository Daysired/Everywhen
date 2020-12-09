import React from "react";
import { Link } from "react-router-dom";
import "./WellnessTime.css"

function WellnessTime({handleClick}) {
  
  return (
    <div className="tabs">
      <div onClick ={()=> handleClick('mood')}>
      <h4>Mood</h4>
      </div>
        
  
      <div onClick={() => handleClick('highlight')}>
      <h4>Highlight</h4>
      </div> 
     

      <div onClick={() => handleClick('vent')}>
        <h4>Vent</h4>
      </div>

      <div onClick={() => handleClick('whatworked')}>
        <h4>What Worked</h4>
      </div>

      <div onClick={() => handleClick('improve')}>
        <h4>What to Improve</h4> 
      </div>

     </div>
  );
};

export default WellnessTime;

 