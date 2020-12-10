import React from 'react';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const Improve = (props) => {
  
  const [improve, setImprove] = useState("");
  const [negativeEmotions, setNegativeEmotions] = useState("");

  const params = useParams();

  useEffect(() => {
    if (params.id && props.wellnesTime.length > 0) {
      const wellnessTime = props.wellnessTime.find((wellnessTime) => wellnessTime.id === params.id);
      setImprove(wellnessTime.fields.improve);
    }
  }, [props.wellnessTime, params.id]);

  const handleSubmit = async (e) => {
    e.preventDefault();


    // props.handleWellTime("improve", improve)
    // props.handleWellTime("negativeEmotions", negativeEmotions)
    props.submitWellTime(improve, negativeEmotions)

    
  };


  return (
    <div>
      <div Class="card">
        <form onSubmit={handleSubmit}>
        <h3>What To Improve</h3>
          <label htmlFor="improve">What would you change?</label>
          <input
            name="improve"
            type="text"
            value={improve}
            onChange={(e) => setImprove(e.target.value)}
            />
            <label htmlFor="negativeEmotions">What contributed to any negative emotions?</label>
          <input
            name="negativeEmotions"
            type="text"
            value={negativeEmotions}
            onChange={(e) => setNegativeEmotions(e.target.value)}
          />
          <button onClick={handleSubmit} type="submit">Submit</button>

          {/* <button onClick={props.submitWellTime}>
           Submit 
          </button> */}
        </form>
      </div>
    </div>
  );
}

export default Improve;