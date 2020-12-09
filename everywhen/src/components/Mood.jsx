import React from "react";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
import { baseURL, config } from "../services";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import SentimentSatisfiedIcon from "@material-ui/icons/SentimentSatisfied";
import SentimentDissatisfiedIcon from "@material-ui/icons/SentimentDissatisfied";
import SentimentSatisfiedAltIcon from "@material-ui/icons/SentimentSatisfiedAlt";
import SentimentVeryDissatisfiedIcon from "@material-ui/icons/SentimentVeryDissatisfied";
import SentimentVerySatisfiedIcon from "@material-ui/icons/SentimentVerySatisfied";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

export default function FloatingActionButtons(props) {
  
  const classes = useStyles();
  const [date, setDate] = useState("");
  const [mood, setMood] = useState("");

  const history = useHistory();
  const params = useParams();

  useEffect(() => {
    if (params.id && props.wellnesTime.length > 0) {
      const wellnessTime = props.wellnessTime.find(
        (wellnessTime) => wellnessTime.id === params.id
      );
      setDate(wellnessTime.fields.vent);
    }
  }, [props.wellnessTime, params.id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const fields = {
      date,
      mood,
    };

    if (params.id) {
      const dateURL = `${baseURL}/${params.id}`;
      await axios.put(dateURL, { fields }, config);
    } else {
      await axios.post(baseURL, { fields }, config);
    }
    props.setToggleFetch((prev) => !prev);
    history.push("/well-time");
  };

  return (
    <div className={classes.root}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="date">Date</label>
        <input
          name="vent"
          type="text"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      
      <span onClick={() => setMood("dissatisfied")}>
      <Fab color="secondary">
        <SentimentDissatisfiedIcon />
      </Fab>
      </span>
      <span onClick={() => setMood("satisfiedv")}>
      <Fab color="secondary">
        <SentimentSatisfiedAltIcon />
        </Fab>
      </span>
      
      <span onClick={() => setMood("satisfied")}>
      <Fab color="secondary">
        <SentimentSatisfiedIcon />
        </Fab>
        </span>

       <span onClick={() => setMood("verydissatisfied")}>
      <Fab color="secondary">
        <SentimentVeryDissatisfiedIcon />
      </Fab>
      </span>

      <span onClick={() => setMood("verysatisfied")}>
      <Fab color="secondary">
        <SentimentVerySatisfiedIcon />
        </Fab>
        </span>
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
