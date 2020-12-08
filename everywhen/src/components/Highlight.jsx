import React from 'react';
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
import { baseURL, config } from "../services";

const Highlight = (props) => {
  const myHighlight = props.info.map((high) => {
    return (
      <h3>Highlight:{high.fields.highlight}</h3>
    )
  })
  const [highlight, setHighlight] = useState("");

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
    };

    if (params.id) {
      const ventURL = `${baseURL}/${params.id}`;
      await axios.put(ventURL, { fields }, config);
    } else {
      await axios.post(baseURL, { fields }, config);
    }
    props.setToggleFetch((prev) => !prev);
    history.push("/mood/");
  };

  const [showMore, setShowMore] = useState(false)
  const handleClick = (e) => {
    setShowMore(!showMore)
  }

  return (
    <div>
      {myHighlight}
      <button onClick={handleClick}>
       Add Entry 
     </button>
      { showMore ?
      <div Class="card">
        <form onSubmit={handleSubmit}>
        <h3>Highlight</h3>
          <label htmlFor="highlight">Highlight</label>
          <input
            name="highlight"
            type="text"
            value={highlight}
            onChange={(e) => setHighlight(e.target.value)}
          />
          <button type="submit">Make Entry</button>
        </form>
      </div>: <p></p>
      }
    </div>
  );
}
export default Highlight;