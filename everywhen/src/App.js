import axios from "axios";
import Nav from "./components/Nav";
import Well from "./components/Well";
import WellnessTime from "./components/WellnessTime";
import Mood from "./components/Mood";
import Highlight from "./components/Highlight";
import Vent from "./components/Vent";
import Whatworked from "./components/Whatworked";
import Improve from "./components/Improve";
import Date from "./components/Date";
import WellnessCard from "./components/WellnessCard"
import { Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { baseURL, config } from "./services";
import './App.css';

function App() {

  const [info, setInfo] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(false);
  const [tabs, setTabs] = useState({
    mood: true,
    vent: false,
    highlight: false,
    whatworked: false,
    improve: false,
  })
  
    useEffect(() => {
        async function getWellnessTime() {
            let response = await axios.get(baseURL, config);
          setInfo(response.data.records);
          console.log(response)
          
        }
        getWellnessTime();
    }, [toggleFetch]);
  
  let handleClick = (tabName) => {
    setTabs ({
      mood: false,
      vent: false,
      highlight: false,
      whatworked: false,
      improve: false,
    })
    console.log(tabs[tabName])
    setTabs(prevTabs => ({
      ...prevTabs,
      [tabName]:!tabs[tabName]
    }))
  }
console.log(tabs.mood)
  return (
    <div className="App">
      <Nav />
      <Route exact path="/">

      </Route>
      <Route path='/well-time'>
          <WellnessTime
            // wellnessTime={wellnessTime}
            setToggleFetch={setToggleFetch}
            handleClick={handleClick}
          />
      
       
        {tabs.mood && <Mood info={info} setToggleFetch={setToggleFetch} />}
        {tabs.vent && <Vent info={info} setToggleFetch={setToggleFetch} />}
        {tabs.highlight && <Highlight info={info} setToggleFetch={setToggleFetch} />}
        {tabs.whatworked && <Whatworked info={info} setToggleFetch={setToggleFetch} />}
        {tabs.improve && <Improve info={info} setToggleFetch={setToggleFetch} />}
        
      </Route>

      <Route path="/well-card">
        {info.map((card) => (
          <WellnessCard cardInfo={card}  key={card.id}/>  
        ))}
        
      </Route>


      {/* <Route path='/wellness/:id'>
        <Well info={info} setToggleFetch={setToggleFetch} />
      </Route>

      <Route path='/mood/'>
        <Mood info={info}  setToggleFetch={setToggleFetch} />
      </Route>

      <Route path='/vent/'>
        <Vent info={info} setToggleFetch={setToggleFetch} />
      </Route>

      <Route path='/highlight/'>
        <Highlight info={info} setToggleFetch={setToggleFetch} />
      </Route>

      <Route path='/whatworked/'>
        <Whatworked info={info} setToggleFetch={setToggleFetch} /> 
      </Route>

      <Route path='/improve/'>
        <Improve info={info} setToggleFetch={setToggleFetch} />
      </Route> */}

      

    </div>
  );
}

export default App;
