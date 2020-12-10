import React from "react";
import { useState } from "react";
import { Tabs, Tab, AppBar } from "@material-ui/core";
import Mood from "./Mood";
import Highlight from "./Highlight";
import Vent from "./Vent";
import Whatworked from "./Whatworked";
import Improve from "./Improve";
import "./WellnessTime.css";


function WellnessTime(props) {
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
}

export default WellnessTime;
