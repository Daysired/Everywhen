import React from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Mood from "./components/Mood";
import Highlight from "./components/Highlight";
import Vent from "./components/Vent";
import Whatworked from "./components/Whatworked";
import { Link, useHistory } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles({
  link: {
    display: 'flex',
    textDecoration: 'none',
    color: '#FFFC31'
  }
})

const LinkList = () => {
  let history = useHistory()

  const linkTo = (item) => {
    history.push(`/${item}`)
  }

  const classes = useStyles();
  const icons = [
    <Mood className={classes.link} />,
    <Highlight className={classes.link} />,
    <Vent className={classes.link} />,
    <Whatworked className={classes.link} />,


  ]
  return (
    <List>
      {['Mood', 'Highlight', 'Vent', 'What Worked'].map((item, index) => (
        <>
          <ListItem key={index} onClick={() => linkTo(item)} button>
            <ListItemIcon>
              {icons[index]}
            </ListItemIcon>
            <ListItemText className={classes.link} primary={`${item}`} />
          </ListItem>
          <Divider />
        </>
      ))}
    </List>
  )
}

export default LinkList;