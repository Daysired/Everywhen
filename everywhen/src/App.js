import axios from "axios";
import Nav from "./components/Nav";
import Well from "./components/Well";
import WellnessTime from "./components/WellnessTime";
import Mood from "./components/Mood";
import Highlight from "./components/Highlight";
import Vent from "./components/Vent";
import Coping from "./components/Coping";
import Whatworked from "./components/Whatworked";
import Improve from "./components/Improve";
import { Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { baseURL, config } from "./services";
import './App.css';

function App() {
  const [info, setInfo] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(false);
  
    useEffect(() => {
        async function getWellnessTime() {
            let response = await axios.get(baseURL, config);
          setInfo(response.data.records);
          console.log(response)
          
        }
        getWellnessTime();
    }, [toggleFetch]);

  return (
    <div className="App">
      <Nav />
      <Route exact path="/">

      </Route>
      <Route path='/well-time'>
        {info.map((wellnessTime) => (
          <WellnessTime wellnessTime={wellnessTime} key={wellnessTime.id} setToggleFetch={setToggleFetch} />
        ))}
      </Route>
      <Route path='/wellness/:id'>
        <Well info={info} setToggleFetch={setToggleFetch} />
      </Route>
    </div>
  );
}

export default App;
