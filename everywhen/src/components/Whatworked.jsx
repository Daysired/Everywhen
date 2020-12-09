import React from 'react';
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
import { baseURL, config } from "../services";

const Whatworked = (props) => {
  
  const [whatWorked, setWhatWorked] = useState("");
  const [wentWell, setWentWell] = useState("");
  const [feelGood, setFeelGood] = useState("");

  const history = useHistory();
  const params = useParams();

  useEffect(() => {
    if (params.id && props.wellnesTime.length > 0) {
      const wellnessTime = props.wellnessTime.find((wellnessTime) => wellnessTime.id === params.id);
      setWhatWorked(wellnessTime.fields.whatWorked);
    }
  }, [props.wellnessTime, params.id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const fields = {
      whatWorked,
      wentWell,
      feelGood,
    };

    if (params.id) {
      const workURL = `${baseURL}/${params.id}`;
      await axios.put(workURL, { fields }, config);
    } else {
      await axios.post(baseURL, { fields }, config);
    }
    props.setToggleFetch((prev) => !prev);
    history.push("/well-time");
  };
  

  return (
    <div>
        <div>
          <form onSubmit={handleSubmit}>
            <h3>What Worked</h3>
            <label htmlFor="whatworked">What are you proud of?</label>
            <input
              name="whatworked"
              type="text"
              value={whatWorked}
              onChange={(e) => setWhatWorked(e.target.value)}
            />
            <label htmlFor="wentWell">What went well?</label>
          <input
            name="wentWell"
            type="text"
            value={wentWell}
            onChange={(e) => setWentWell(e.target.value)}
          />
          <label htmlFor="feelGood">What made you feel good?</label>
          <input
            name="feelGood"
            type="text"
            value={feelGood}
            onChange={(e) => setFeelGood(e.target.value)}
          />
            <button type="submit">Make Entry</button>
          </form>
      </div>
        
    </div>
  );
}


export default Whatworked;