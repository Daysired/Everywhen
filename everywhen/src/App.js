import axios from "axios";
import WellnessTime from "./components/WellnessTime";
import WellnessCard from "./components/WellnessCard"
import Landing from "./components/Landing";
import { Route, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import { baseURL, config } from "./services"
import './App.css';
import { createMuiTheme, ThemeProvider } from '@material-ui/core'
import Layout from "./layouts/layout";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#638C80'
    },
    secondary: {
      main: '#fefefe'
    }
  }
})

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
    <ThemeProvider theme={theme}>
 <Layout>
    <div className="App">
      <Route exact path="/home">
        <Landing />
      </Route>
      <Route exact path="/assessment">
        <WellnessTime
          setToggleFetch={setToggleFetch}
          handleClick={handleClick}
          handleWellTime={handleWellTime}
          submitWellTime={submitWellTime}
          selectedTab={selectedTab}
          />
      </Route>

      <Route path="/card">
        {info.map((card) => (
          <WellnessCard cardInfo={card}  key={card.id} setToggleFetch={setToggleFetch}/>  
        ))}
        
      </Route>

        </div>
        </Layout>
      </ThemeProvider>
  );
}

export default App;
