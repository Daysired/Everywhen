import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const Highlight = (props) => {
  const [highlight, setHighlight] = useState("");
  const [activities, setActivities] = useState("");

  const params = useParams();

  useEffect(() => {
    if (params.id && props.wellnesTime.length > 0) {
      const wellnessTime = props.wellnessTime.find(
        (wellnessTime) => wellnessTime.id === params.id
      );
      setHighlight(wellnessTime.fields.highlight);
    }
  }, [props.wellnessTime, params.id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    props.handleWellTime("highlight", highlight);
    props.handleWellTime("activities", activities);
    props.handleClick("vent");
  };

  return (
    <div>
      <div Class="card">
        <form onSubmit={handleSubmit}>
          <h3>Highlight</h3>
          <label htmlFor="highlight">What was the highlight of your day?</label>
          <TextField
          id="standard-multiline-flexible"
          label="highlight"
          multiline
          rowsMax={4}
          value={activities}
          onChange={(e) => setHighlight(e.target.value)}
        />
          {/* <input
            name="highlight"
            type="text"
            value={highlight}
            onChange={(e) => setHighlight(e.target.value)}
          /> */}
          <label htmlFor="activities">
            What activities contributed to your highlight?
          </label>
          {/* <TextField
          id="outlined-textarea"
          label="Multiline Placeholder"
          placeholder="Placeholder"
          multiline
          variant="outlined"
        /> */}
          <TextField
          id="standard-multiline-flexible"
          label="activities"
          multiline
          rowsMax={4}
          value={activities}
          onChange={(e) => setActivities(e.target.value)}
        />
          {/* <input
            name="activities"
            type="text"
            value={activities}
            onChange={(e) => setActivities(e.target.value)}
          /> */}
          {/* <button type="submit">Make Entry</button> */}
          <Button
            type="submit"
            variant="contained"
            color="primary"
            size="small">
            Make Entry
            </Button>
        </form>
      </div>
    </div>
  );
};
export default Highlight;
