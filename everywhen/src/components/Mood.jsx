import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import Fab from "@material-ui/core/Fab";
import SentimentSatisfiedIcon from "@material-ui/icons/SentimentSatisfied";
import SentimentDissatisfiedIcon from "@material-ui/icons/SentimentDissatisfied";
import SentimentSatisfiedAltIcon from "@material-ui/icons/SentimentSatisfiedAlt";
import SentimentVeryDissatisfiedIcon from "@material-ui/icons/SentimentVeryDissatisfied";
import SentimentVerySatisfiedIcon from "@material-ui/icons/SentimentVerySatisfied";
import TextField from '@material-ui/core/TextField';

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

    props.handleWellTime("date", date);
    props.handleWellTime("mood", mood);
    props.handleClick("highlight");
  };
  console.log(props)

  return (
    <div className={classes.root}>
      <form onSubmit={handleSubmit}>
        <TextField
          id="standard-secondary"
          label="Date"
          color="secondary"
          value={date}
          onChange={(e) => setDate(e.target.value)}/>
        {/* <input
          name="vent"
          type="text"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        /> */}

        <span onClick={() => setMood("dissatisfied")}>
          <Fab size="large" color="secondary">
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
        {/* <button type="submit">Make Entry</button> */}
        <Button type="submit" variant="contained" color="primary" size="small">
       Next
      </Button>
      </form>
    </div>
  );
}
