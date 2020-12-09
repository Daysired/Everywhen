import React from 'react';
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
import { baseURL, config } from "../services";

const Improve = (props) => {
  const myImprovement = props.info.map((fix) => {
    return (
      <h3>What to Improve:{fix.fields.improve}</h3>
    )
  })
  const [improve, setImprove] = useState("");
  const [negativeEmotions, setNegativeEmotions] = useState("");
  // const [todo, setTodo] = useState("");

  const history = useHistory();
  const params = useParams();

  useEffect(() => {
    if (params.id && props.wellnesTime.length > 0) {
      const wellnessTime = props.wellnessTime.find((wellnessTime) => wellnessTime.id === params.id);
      setImprove(wellnessTime.fields.improve);
    }
  }, [props.wellnessTime, params.id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const fields = {
      improve,
    };

    if (params.id) {
      const improveURL = `${baseURL}/${params.id}`;
      await axios.put(improveURL, { fields }, config);
    } else {
      await axios.post(baseURL, { fields }, config);
    }
    props.setToggleFetch((prev) => !prev);
    history.push("/");
  };
  
  const [showMore, setShowMore] = useState(false)
  const handleClick = (e) => {
    setShowMore(!showMore)
  }

  return (
    <div>
      {myImprovement}
      <button onClick={handleClick}>
       Add Entry 
     </button>
      { showMore ?
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
          <button type="submit">Make Entry</button>
        </form>
      </div>: <p></p>
      }
    </div>
  );
}

export default Improve;