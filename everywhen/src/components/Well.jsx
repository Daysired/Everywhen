import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { baseURL, config } from "../services";


const Well = (props) => {
    let { id } = useParams();
    const [currentWell, setCurrentWell] = useState({});

    // api call for a single item
    useEffect(() => {
        let getWell = async () => {
            let response = await axios.get(`${baseURL}/${id}`, config);
            setCurrentWell(response.data);
        };
        getWell();
    }, []);

    // Using .find because we only want to return one item
    let currentWelly = props.wellnessTime.find((wellness) => {
        return wellness.id === id;
    });
    console.log(currentWelly);

   
    return (
        <div>
            {/* {currentWelly.fields && (
                <div>
                    <h1>{currentWelly.fields.mood}</h1>
                    <h4>Highlight: {currentWelly.fields.highlight}</h4>
                    <h4>Vent: {currentWelly.fields.vent}</h4>
                    <h4>Coping Strategies: {currentWelly.fields.copingStrategies}
                    </h4>
                    <h4>What Worked: {currentWelly.fields.whatWorked}</h4>
                    <h4>What to Improve: {currentWelly.fields.improve}</h4>
                </div>
            )} */}
        </div>
    );
  };
  
    export default Well;