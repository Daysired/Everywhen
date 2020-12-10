import React from "react";
import { useState } from "react";
import { Tabs, Tab, AppBar } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Mood from "./Mood";
import Highlight from "./Highlight";
import Vent from "./Vent";
import Whatworked from "./Whatworked";
import Improve from "./Improve";
import "./WellnessTime.css";

// {handleClick}
function WellnessTime(props) {
//  useMediaQuery("(max-width:1025px)");
//  useMediaQuery("(max-width:650px)");

  const [selectedTab, setSelectedTab] = useState(0);

  const handleChange = (event, newValue) => {
    let num = selectedTab
    setSelectedTab(num + 1);
  };

  return (
    <>
      <AppBar position="static" color="primary" className="appbar">
        <Tabs value={selectedTab} onChange={handleChange}>
          <Tab label="Mood" />
          <Tab label="Highlight" />
          <Tab label="Vent" />
          <Tab label="Whatworked" />
          <Tab label="Improve" />
        </Tabs>
      </AppBar>
      {selectedTab === 0 && <Mood setToggleFetch={props.setToggleFetch} handleClick={handleChange}
        handleWellTime={props.handleWellTime} selectedTab={selectedTab}/>}
      {selectedTab === 1 && <Highlight setToggleFetch={props.setToggleFetch} handleClick={handleChange}
        handleWellTime={props.handleWellTime} selectedTab={selectedTab}/>}
      {selectedTab === 2 && <Vent setToggleFetch={props.setToggleFetch} handleClick={handleChange}
        handleWellTime={props.handleWellTime} selectedTab={selectedTab}/>}
      {selectedTab === 3 && <Whatworked setToggleFetch={props.setToggleFetch} handleClick={handleChange}
        handleWellTime={props.handleWellTime} selectedTab={selectedTab}/>}
      {selectedTab === 4 && <Improve setToggleFetch={props.setToggleFetch} handleClick={handleChange}
        handleWellTime={props.handleWellTime} selectedTab={selectedTab}submitWellTime={props.submitWellTime}/>}
    </>
  );

  // return (
  //   <div className="tabs">
  //     <div onClick ={()=> handleClick('mood')}>
  //       <h4>Mood</h4>
  //   	</div>

  //     <div onClick={() => handleClick('highlight')}>
  //     <h4>Highlight</h4>
  //     </div>

  //     <div onClick={() => handleClick('vent')}>
  //      <h4>Vent</h4>
  //     </div>

  //   <div onClick={() => handleClick('whatworked')}>
  //       <h4>What Worked</h4>
  //   </div>

  //   <div onClick={() => handleClick('improve')}>
  //     <h4>What to Improve</h4>
  //     </div>

  //  </div>
  // );
}

export default WellnessTime;
