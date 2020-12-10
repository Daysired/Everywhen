import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const Vent = (props) => {
  const [vent, setVent] = useState("");

  const params = useParams();

  useEffect(() => {
    if (params.id && props.wellnesTime.length > 0) {
      const wellnessTime = props.wellnessTime.find(
        (wellnessTime) => wellnessTime.id === params.id
      );
      setVent(wellnessTime.fields.vent);
    }
  }, [props.wellnessTime, params.id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    props.handleWellTime("vent", vent);
    props.handleClick("whatWorked");
  };

  return (
    <div>
      <div Class="card">
        <form onSubmit={handleSubmit}>
          <h3>VENT THAT SH*T!</h3>
          <label htmlFor="vent">Vent Away!</label>
          <input
            name="vent"
            type="text"
            value={vent}
            onChange={(e) => setVent(e.target.value)}
          />
          {/* <button type="submit">Make Entry</button> */}
          <Button
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

export default Vent;
