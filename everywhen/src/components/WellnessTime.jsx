import React from "react";
import { useState } from "react";
import { Tabs, Tab, AppBar } from "@material-ui/core";
import Mood from "./Mood";
import Highlight from "./Highlight";
import Vent from "./Vent";
import Whatworked from "./Whatworked";
import Improve from "./Improve";
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import "./WellnessTime.css";


function WellnessTime(props) {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleChange = (event, newValue) => {
    let num = selectedTab
    setSelectedTab(num + 1);
  };

  return (
    <div class="container">
      <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md">
      <AppBar position="static" color="primary" maxWidth="md" className="appbar">
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
            handleWellTime={props.handleWellTime} selectedTab={selectedTab} submitWellTime={props.submitWellTime} />}
          <Typography component="div" style={{ height: '100vh' }} />
        </Container>
    </React.Fragment>
    </div>
  );
}

export default WellnessTime;
