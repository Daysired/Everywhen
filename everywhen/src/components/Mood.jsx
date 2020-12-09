import React from 'react';
import { useEffect, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';


const Mood = (props) => {
  const [showMore, setShowMore] = useState(false)
  const handleSubmit = (e) => {
    setShowMore(!showMore)
  }

  const myMood = props.info.map((mood) => {
    return (
      <h3>Mood:{mood.fields.mood}</h3>
    )
  })
  return (
    <div>
      {myMood}
       <button onClick={handleSubmit}>
        Show More 
     </button>
      {showMore ? 
        <div>
        <h5>hi</h5>
        <h5>hello</h5> </div>:
        <p></p>
      } 
     </div>
  );
} 





export default Mood;