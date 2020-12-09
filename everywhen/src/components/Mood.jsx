import React from 'react';
import { useEffect, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAlt';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

export default function FloatingActionButtons() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Fab color="secondary" aria-label="edit">
        <SentimentDissatisfiedIcon />
      </Fab>
      <Fab color="secondary">
        <SentimentSatisfiedAltIcon />
      </Fab>
      <Fab color="secondary">
        <SentimentSatisfiedIcon />
      </Fab>
    
      <Fab color="secondary">
        <SentimentVeryDissatisfiedIcon />
      </Fab>
      <Fab color="secondary" aria-label="edit">
        <SentimentVerySatisfiedIcon />
      </Fab>
     
    </div>
  );
}

// const Mood = (props) => {
//   const [showMore, setShowMore] = useState(false)
//   const handleSubmit = (e) => {
//     setShowMore(!showMore)
//   }

//   const myMood = props.info.map((mood) => {
//     return (
//       <h3>Mood:{mood.fields.mood}</h3>
//     )
//   })
//   return (
//     <div>
//       {myMood}
//        <button onClick={handleSubmit}>
//         Show More 
//      </button>
//       {showMore ? 
//         <div>
//         <h5>hi</h5>
//         <h5>hello</h5> </div>
//         :
//         <p></p>
//       } 
//      </div>
//   );
// } 

// export default Mood;


