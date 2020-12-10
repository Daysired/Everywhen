import React, {useState, useEffect} from "react";
import axios from "axios";
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { baseURL, config } from "../services";
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import { createMuiTheme } from '@material-ui/core/styles';
import pink from '@material-ui/core/colors/pink';

const useStyles = makeStyles((theme) => ({
  palette: {
    primary: {
      main: pink[500],
    },
    secondary: {
      main: '#f44336',
    },
  },
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  
}));

// const theme = createMuiTheme({
//   palette: {
//     primary: {
//       main: pink[500],
//     },
//     secondary: {
//       main: '#f44336',
//     },
//   },
// });

const WellnessCard = (props) => {

  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  const [emoji, setEmoji] = useState("");
  const emojis = {
    dissatisfied: "https://i.pinimg.com/originals/da/8c/21/da8c2163061be58d770f6f9af78258e8.png",
    satisfied: "",
    satisfiedv: "",
    verysatisfied: "",
    verydissatisfied: "",
    
  }
  useEffect(() => {
    setEmoji(emojis[props.cardInfo.fields.mood])
  },[])

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleDelete = async () => {
    const cardURL = `${baseURL}/${props.cardInfo.id}`;
    await axios.delete(cardURL, config);
    props.setToggleFetch((prev) => !prev);
  };

console.log(props.cardInfo)
  return (
    <Card className={classes.root}>
      <CardHeader
       
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="WellnessCard"
        subheader={props.cardInfo.fields.date}

      />
      <CardMedia
        className={classes.media}
        image={emoji}
        title="emoji"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.cardInfo.fields.mood}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
    
      {/* <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        startIcon={<DeleteIcon />}
        onClick={handleDelete}
      >
        </Button> */}
        
      <IconButton color="secondary"  size="large" onClick={handleDelete}>
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
          <ExpandMoreIcon />
        </IconButton>
        
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Highlight</Typography>
          <Typography paragraph>
            <p>What was the highlight of your day?: {props.cardInfo.fields.highlight}</p>
            <p>What activities contributed to your highlight?:</p>{props.cardInfo.fields.activities}
          </Typography>

          <Typography paragraph>Vent</Typography>
          <Typography paragraph>
            <p>Vent That Sh*T!</p>
            {props.cardInfo.fields.vent}
          </Typography>
          <Typography paragraph>
            <p>What Worked</p>
            <p>What are you proud of?{props.cardInfo.fields.whatWorked}</p>
            <p>What went well?{props.cardInfo.fields.wentWell}</p>
            <p>What made you feel good?{props.cardInfo.fields.feelGood}</p>
          </Typography>
          <Typography>
            <p>What to Improve</p>
            <p>What would you change?{props.cardInfo.fields.improve}</p>
            <p>What contributed to any negative emotions?{props.cardInfo.fields.negativeEmotions}</p>
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}


export default WellnessCard;