import React from 'react';
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
import { baseURL, config } from "../services";

const Whatworked = (props) => {
  const myWork = props.info.map((work) => {
    return (
      <h3>What Worked:{work.fields.whatWorked}</h3>
    )
  })

  const [whatWorked, setWhatWorked] = useState("");

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
      {myWork}

    <button onClick={handleClick}>
       Add Entry 
     </button>
      { showMore ?
        <div Class="card">
          <form onSubmit={handleSubmit}>
            <h3>What Worked</h3>
            <label htmlFor="whatworked">What Worked</label>
            <input
              name="whatworked"
              type="text"
              value={whatWorked}
              onChange={(e) => setWhatWorked(e.target.value)}
            />
            <button type="submit">Make Entry</button>
          </form>
        </div> : <p></p>
      } 
    </div>
  );
}


export default Whatworked;