import React from 'react';
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
import { baseURL, config } from "../services";

const Vent = (props) => {
  
  const [vent, setVent] = useState("");

  const history = useHistory();
  const params = useParams();

  useEffect(() => {
    if (params.id && props.wellnesTime.length > 0) {
      const wellnessTime = props.wellnessTime.find((wellnessTime) => wellnessTime.id === params.id);
      setVent(wellnessTime.fields.vent);
    }
  }, [props.wellnessTime, params.id]);

  const handleSubmit = async (e) => {
    e.preventDefault();


    props.handleWellTime("vent", vent)
    props.handleClick("whatWorked")
    

  };


  return (
    <div>
      <div Class="card">
        <form onSubmit={handleSubmit}>
        <h3>VENT THAT SH*T!</h3>
          <label htmlFor="vent">Vent Away!</label>
          <input
            name="vent"
            type="text"
            value={vent}
            onChange={(e) => setVent(e.target.value)}
          />
          <button type="submit">Make Entry</button>
        </form>
      </div>
    </div>
  );
}

export default Vent;