import React from 'react';
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
import { baseURL, config } from "../services";

const Highlight = (props) => {
  
  const [highlight, setHighlight] = useState("");
  const [activities, setActivities] = useState("");

  const history = useHistory();
  const params = useParams();

  useEffect(() => {
    if (params.id && props.wellnesTime.length > 0) {
      const wellnessTime = props.wellnessTime.find((wellnessTime) => wellnessTime.id === params.id);
      setHighlight(wellnessTime.fields.highlight);
    }
  }, [props.wellnessTime, params.id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const fields = {
      highlight,
      activities,
    };

    if (params.id) {
      const highlightURL = `${baseURL}/${params.id}`;
      await axios.put(highlightURL, { fields }, config);
    } else {
      await axios.post(baseURL, { fields }, config);
    }
    props.setToggleFetch((prev) => !prev);
    history.push("/well-time");
  };

  return (
    <div>
      <div Class="card">
        <form onSubmit={handleSubmit}>
        <h3>Highlight</h3>
          <label htmlFor="highlight">What was the highlight of your day?</label>
          <input
            name="highlight"
            type="text"
            value={highlight}
            onChange={(e) => setHighlight(e.target.value)}
            />
            <label htmlFor="activities">What activities contributed to your highlight?</label>
          <input
            name="activities"
            type="text"
            value={activities}
            onChange={(e) => setActivities(e.target.value)}
          />
          <button type="submit">Make Entry</button>
        </form>
      </div>
    </div>
  );
}
export default Highlight;