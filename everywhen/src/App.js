import axios from "axios";
import { useEffect, useState } from "react";
import { baseURL, config } from "./services";
import './App.css';

function App() {
    const [wellness, setWellness] = useState([]);
  
    useEffect(() => {
        async function getWellness() {
            let response = await axios.get(baseURL, config);
          setWellness(response.data.records);
          console.log(response)
        }
        getWellness();
    }, []);

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
