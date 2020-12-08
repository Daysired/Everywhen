import React from 'react';
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
import { baseURL, config } from "../services";

const Vent = (props) => {
  const myVent = props.info.map((release) => {
    return (
      <h3>Vent:{release.fields.vent}</h3>
    )
  })
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

    const fields = {
      vent,
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

  const [showMore, setShowMore] = useState(false)
  const handleClick = (e) => {
    setShowMore(!showMore)
  }

  return (
    <div>
      {myVent}
      <button onClick={handleClick}>
       Add Entry 
     </button>
      { showMore ?
      <div Class="card">
        <form onSubmit={handleSubmit}>
        <h3>VENT THAT SH*T!</h3>
          <label htmlFor="vent">vent</label>
          <input
            name="vent"
            type="text"
            value={vent}
            onChange={(e) => setVent(e.target.value)}
          />
          <button type="submit">Make Entry</button>
        </form>
      </div>: <p></p>
      }
    </div>
  );
}

export default Vent;