import axios from "axios";
import Nav from "./components/Nav";
import WellnessTime from "./components/WellnessTime";
import WellnessCard from "./components/WellnessCard"
import { Route, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import { baseURL, config } from "./services"
import './App.css';

function App(props) {

  const history = useHistory()
  const [info, setInfo] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(false);
  const [selectedTab, setSelectedTab] = useState(0);
  const [wellTime, setWellTime] = useState({
    mood: "",
    date: "",
    highlight: "",
    activities: "",
    vent: "",
    whatWorked: "",
    wentWell: "",
    feelGood: "",
    improve: "",
    negativeEmotions: "",
  })

  const handleWellTime = (type, str) => {
    setWellTime(prevState => ({
      ...prevState, 
      [type]: str
    })) 
  }

  const submitWellTime = async (improve, negativeEmotions) => {
    let fields = {
      ...wellTime,
      improve: improve, 
      negativeEmotions: negativeEmotions
    }
    let response = await axios.post(baseURL, { fields: fields }, config)
    setToggleFetch(!toggleFetch)
    history.push("/well-card")
  }
  
    useEffect(() => {
        async function getWellnessTime() {
          let response = await axios.get(baseURL, config);
          let sortedInfo = response.data.records.sort((card1, card2) => Date.parse(card2.createdTime) - Date.parse(card1.createdTime))
          setInfo(sortedInfo);
          console.log(response)
          
        }
        getWellnessTime();
    }, [toggleFetch]);
  
  const handleClick = () => {
      let num = selectedTab
      setSelectedTab(num + 1);
    }
  
  
  return (
    <div className="App">
      <Nav />
      {/* <Route exact path="/">
        <h1>hiiii</h1> */}
      {/* </Route> */}
      <Route exact path="/">
        <WellnessTime
          setToggleFetch={setToggleFetch}
          handleClick={handleClick}
          handleWellTime={handleWellTime}
          submitWellTime={submitWellTime}
          selectedTab={selectedTab}
          />
      </Route>

      <Route path="/well-card">
        {info.map((card) => (
          <WellnessCard cardInfo={card}  key={card.id} setToggleFetch={setToggleFetch}/>  
        ))}
        
      </Route>

    </div>
  );
}

export default App;
