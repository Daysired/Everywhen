import React from 'react';
import { Link } from "react-router-dom";

const Mood = (props) => {
  return (
    <div>
      <h3>Mood: {props.wellnessTime.fields.mood}</h3>
    </div>
  );
};

export default Mood;