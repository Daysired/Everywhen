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
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import "./Mood.css";

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
      
        <div>
        
          <ul id="horizontal-list">
        <li><span onClick={() => setMood("Sad")}>
          <Fab size="large" color="secondary">
            <SentimentDissatisfiedIcon />
          </Fab>
            </span></li>
              
            <li><span onClick={() => setMood("Happy")}>
          <Fab color="secondary">
            <SentimentSatisfiedAltIcon />
          </Fab>
        </span></li>

        <li><span onClick={() => setMood("Feeling Good")}>
          <Fab color="secondary">
            <SentimentSatisfiedIcon />
          </Fab>
        </span></li>

        <li><span onClick={() => setMood("Depressed")}>
          <Fab color="secondary">
            <SentimentVeryDissatisfiedIcon />
          </Fab>
        </span></li>

        <li><span onClick={() => setMood("Excited")}>
          <Fab color="secondary">
            <SentimentVerySatisfiedIcon />
          </Fab>
            </span> </li>
            </ul> 
            
        </div>
        <label htmlFor="date">Date</label>
        <input id= "date"
          name="date"
          type="text"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <Button type="submit" variant="contained" color="primary" size="small" id="button">
       Next
      </Button>
        </form>
        
    </div>
  );
}
