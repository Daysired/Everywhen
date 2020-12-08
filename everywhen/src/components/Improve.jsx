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
      const ventURL = `${baseURL}/${params.id}`;
      await axios.put(ventURL, { fields }, config);
    } else {
      await axios.post(baseURL, { fields }, config);
    }
    props.setToggleFetch((prev) => !prev);
    history.push("/");
  };
  return (
    <div>
      {myImprovement}
      <div Class="card">
        <form onSubmit={handleSubmit}>
        <h3>What To Improve</h3>
          <label htmlFor="improve">Improve</label>
          <input
            name="improve"
            type="text"
            value={improve}
            onChange={(e) => setImprove(e.target.value)}
          />
          <button type="submit">Make Entry</button>
        </form>
      </div>
    </div>
  );
}

export default Improve;