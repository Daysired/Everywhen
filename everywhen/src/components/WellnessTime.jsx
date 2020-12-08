import React, {Component} from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { withRouter } from "react-router-dom";

// import Mood from "/mood/";
// import Highlight from "/highlight/";

// class NavTabs extends Component {

//  handleCallToRouter = (value) => {
//    this.props.history.push(value);
//  }

//   render () {
//      return (
//       <Tabs
//         value={this.props.history.location.pathname}
//         onChange={this.handleCallToRouter}
//         >
//         <Tab
//           label="Mood"
//           value="/mood/"
//         >
//         <div>
//            <Mood />
//         </div>
//         </Tab>
//         <Tab
//           label="Highlight"
//           value="/highlight/"
//             >
//           <div>
//             <Highlight />
//           </div>
//         </Tab>
//       </Tabs>           
//     )
//   }
// }

// export default withRouter(NavTabs)  

// function TabPanel(props) {
//   const { children, value, index, ...other } = props;

//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`simple-tabpanel-${index}`}
//       aria-labelledby={`simple-tab-${index}`}
//       {...other}
//     >
//       {value === index && (
//         <Box p={6}>
//           <Typography>{children}</Typography>
//         </Box>
//       )}
//     </div>
//   );
// }

// TabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.any.isRequired,
//   value: PropTypes.any.isRequired,
// };

// function a11yProps(index) {
//   return {
//     id: `simple-tab-${index}`,
//     'aria-controls': `simple-tabpanel-${index}`,
//   };
// }

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//     backgroundColor: theme.palette.background.paper,
//   },
// }));

// export default function SimpleTabs(props) {
//   const classes = useStyles();
//   const [value, setValue] = React.useState(0);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   return (
//     <div className={classes.root}>
//       <AppBar position="static">
     
//         <Tabs value={value} onChange={handleChange}>
//           <Tab label="Mood" containerElement={<Link to={`/mood/${props.wellnessTime.id}`} />} />
//           <Tab label="Highlight" {...a11yProps(1)} />
//           <Tab label="Vent" {...a11yProps(2)} />
//           <Tab label="Coping Strategies" {...a11yProps(3)} />
//           <Tab label="What Worked" {...a11yProps(4)} />
//           <Tab label="What to Improve" {...a11yProps(5)} />
//         </Tabs>
//       </AppBar>
//       <TabPanel value={value} index={0}>
       
//       </TabPanel>
//       <TabPanel value={value} index={1}>
//        Highlight
//       </TabPanel>
//       <TabPanel value={value} index={2}>
//         Vent
//       </TabPanel>
//       <TabPanel value={value} index={3}>
//         Coping Strategies
//       </TabPanel>
//       <TabPanel value={value} index={4}>
//        What Worked
//       </TabPanel>
//       <TabPanel value={value} index={5}>
//        What to Improve
//       </TabPanel>
//     </div>
//   );
// }

function WellnessTime(props) {
  
  return (
    <div>
      <Link to={`/mood/${props.wellnessTime.id}`}>
        <h4>Mood</h4>
      </Link>

      <Link to={`/highlight/${props.wellnessTime.id}`}>
        <h4>Highlight</h4>
      </Link>

      <Link to={`/vent/${props.wellnessTime.id}`}>
        <h4>Vent</h4>
      </Link>

      <Link to={`/whatworked/${props.wellnessTime.id}`}>
        <h4>What Worked</h4>
      </Link>

      <Link to={`/improve/${props.wellnessTime.id}`}>
        <h4>What to Improve</h4> 
      </Link>

     </div>
  );
};
export default WellnessTime;

 {/* <h4>Coping Strategies:{props.wellnessTime.fields.copingStrategies}</h4> */}