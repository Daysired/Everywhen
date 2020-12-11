import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from '@material-ui/core/Button';
import "./Whatworked.css";

const Whatworked = (props) => {
  const [whatWorked, setWhatWorked] = useState("");
  const [wentWell, setWentWell] = useState("");
  const [feelGood, setFeelGood] = useState("");

  const params = useParams();

  useEffect(() => {
    if (params.id && props.wellnesTime.length > 0) {
      const wellnessTime = props.wellnessTime.find(
        (wellnessTime) => wellnessTime.id === params.id
      );
      setWhatWorked(wellnessTime.fields.whatWorked);
    }
  }, [props.wellnessTime, params.id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    props.handleWellTime("whatWorked", whatWorked);
    props.handleWellTime("wentWell", wentWell);
    props.handleWellTime("feelGood", feelGood);
    props.handleClick("improve");
  };

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <h3>What Worked</h3>
          <label htmlFor="whatworked">What are you proud of?</label>
          <input
            name="whatworked"
            type="text"
            value={whatWorked}
            onChange={(e) => setWhatWorked(e.target.value)}
          />
          <label htmlFor="wentWell">What went well?</label>
          <input
            name="wentWell"
            type="text"
            value={wentWell}
            onChange={(e) => setWentWell(e.target.value)}
          />
          <label htmlFor="feelGood">What made you feel good?</label>
          <input
            name="feelGood"
            type="text"
            value={feelGood}
            onChange={(e) => setFeelGood(e.target.value)}
          />
          {/* <button type="submit">Make Entry</button> */}
          <Button
            id="button"
            type="submit"
            variant="contained"
            color="primary"
            size="small">
            Next
            </Button>
        </form>
      </div>
    </div>
  );
};

export default Whatworked;
