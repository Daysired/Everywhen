import React, { useState, useEffect } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { baseURL, config } from "../services";
import DeleteIcon from "@material-ui/icons/Delete";
import "./WellnessCard.css";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((pink) => ({
  root: {
    maxWidth: 275,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },

  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: pink.transitions.create("transform", {
      duration: pink.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
}));

const WellnessCard = (props) => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  const [emoji, setEmoji] = useState("");
  const emojis = {
    Sad:
      "https://i.pinimg.com/originals/da/8c/21/da8c2163061be58d770f6f9af78258e8.png",
    Happy:
      "https://image.shutterstock.com/image-vector/smiling-emoticon-happy-eyes-rosy-260nw-336997097.jpg",
    FeelingGood:
      "https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/smiling-face.png",
    Depressed:
      "https://image.shutterstock.com/image-illustration/emoji-sad-unhappy-feeling-depressed-260nw-1087583894.jpg",
    Excited:
      "https://image.shutterstock.com/image-illustration/isolated-yellow-smiling-face-upper-260nw-677579860.jpg",
  };
  useEffect(() => {
    setEmoji(emojis[props.cardInfo.fields.mood]);
  }, []);
  console.log(props.cardInfo.createdTime);
  console.log(Date.parse(props.cardInfo.createdTime));

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleDelete = async () => {
    const cardURL = `${baseURL}/${props.cardInfo.id}`;
    await axios.delete(cardURL, config);
    props.setToggleFetch((prev) => !prev);
  };

  console.log(props.cardInfo);
  return (
    <div className="Wellness-Card">
    {/* <Grid container spacing={2}>
      <Grid item xs={4}> */}
        <Card style={{ backgroundColor: "#638C80"}} className={classes.root} id="card">
      <CardHeader
        id="title"
        title="WellnessCard"
        color="#FAE0DD"
        style={{color:"#FAE0DD"}}
        subheader={props.cardInfo.fields.date}
      />
      <CardMedia className={classes.media} image={emoji} title="emoji" />
      <CardContent>
        <Typography variant="body2" style={{color:"#FAE0DD"}} component="p">
          {props.cardInfo.fields.mood}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton style={{color:"#FAE0DD"}} size="large" onClick={handleDelete}>
          <DeleteIcon />
        </IconButton>

        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon style={{color:"#FAE0DD"}} />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent style={{color:"#FAE0DD"}}>
          <h4>Highlight</h4>
          <Typography paragraph>
            <p>
              What was the highlight of your day:{" "}
              {props.cardInfo.fields.highlight}
            </p>
            <p>What activities contributed to your highlight:</p>
            {props.cardInfo.fields.activities}
          </Typography>

          <h4>Vent That Sh*T!</h4>
          <Typography paragraph>{props.cardInfo.fields.vent}</Typography>
          <Typography paragraph>
            <h4>What Worked</h4>
            <p>What are you proud of:{props.cardInfo.fields.whatWorked}</p>
            <p>What went well:{props.cardInfo.fields.wentWell}</p>
            <p>What made you feel good:{props.cardInfo.fields.feelGood}</p>
          </Typography>
          <Typography>
            <h4>What To Improve</h4>
            <p>What would you change:{props.cardInfo.fields.improve}</p>
            <p>
              What contributed to any negative emotions:
              {props.cardInfo.fields.negativeEmotions}
            </p>
          </Typography>
        </CardContent>
      </Collapse>
        </Card>
        {/* </Grid>
      </Grid> */}
      </div>
  );
};

export default WellnessCard;
