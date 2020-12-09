import React from "react";
import { Tabs, Tab, AppBar } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Mood from "./Mood";
import Highlight from "./Highlight";
import Vent from "./Vent";
import Whatworked from "./Whatworked";
import Improve from "./Improve";
import { Link } from "react-router-dom";
import "./WellnessTime.css"


function WellnessTime ({handleClick}) {
  // const [selectedTab, setSelectedTab] = React.useState(0);

  // const handleChange = (event, newValue) => {
  //   setSelectedTab(newValue);
  // }

  // return (
  //   <>
  //     <AppBar position="static">
  //       <Tabs value={selectedTab} onChange={handleChange}>
  //         <Tab label="Mood" />
  //         <Tab label="Highlight" />
  //         <Tab label="Vent" />
  //         <Tab label="Whatworked" />
  //         <Tab label="Improve" />
  //       </Tabs>
  //     </AppBar>
  //     {selectedTab === 0 && <Mood />}
  //     {selectedTab === 1 && <Highlight />}
  //     {selectedTab === 2 && <Vent />}
  //     {selectedTab === 3 && <Whatworked />}
  //     {selectedTab === 4 && <Improve />}
  //   </>
  // )




 
  return (
    <div className="tabs">
      <div onClick ={()=> handleClick('mood')}>
        <h4>Mood</h4>
    	</div>
  
      <div onClick={() => handleClick('highlight')}>
      <h4>Highlight</h4>
      </div> 
     

      <div onClick={() => handleClick('vent')}>
       <h4>Vent</h4>
      </div>

    <div onClick={() => handleClick('whatworked')}>
        <h4>What Worked</h4>
    </div>

    <div onClick={() => handleClick('improve')}>
      <h4>What to Improve</h4> 
      </div>
      
   </div>
  );
};

export default WellnessTime;

 