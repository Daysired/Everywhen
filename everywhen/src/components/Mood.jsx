import React from 'react';

const Mood = (props) => {
  
  const myMood = props.info.map((mood) => {
    return (
      <h3>Mood:{mood.fields.mood}</h3>
    )
  })
  return (
    <div>
      {myMood}
    </div>
  );
};

export default Mood;