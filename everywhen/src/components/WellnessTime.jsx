import React from "react";
import { Link } from "react-router-dom";

function WellnessTime(props) {
  
  return (
    <div>
      {/* <Link to={`/recipes/${props.recipe.id}`}></Link> */}
      <h4>Mood:{props.wellnessTime.fields.mood}</h4>
      <h4>Highlight:{props.wellnessTime.fields.highlight}</h4>
      <h4>Vent:{props.wellnessTime.fields.vent}</h4>
      <h4>Coping Strategies:{props.wellnessTime.fields.copingStrategies}</h4>
      <h4>What Worked:{props.wellnessTime.fields.whatWorked}</h4>
      <h4>What to Improve:{props.wellnessTime.fields.improve}</h4>
      </div>
  );
};

export default WellnessTime