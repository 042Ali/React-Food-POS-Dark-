import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";

export default function MostTypeofOrder() {
  const [today, setToday] = useState("");

  const handleChange = (event) => {
    setToday(event.target.value);
  };

  return (
    <>
      <div className="MostType__ofOrder">
        <h1>Most Type of Order</h1>
        <div>
          <FormControl
            style={{
              width: "120px",
              marginTop: "-70px",
              marginLeft: "400px",
            }}
          >
            <InputLabel id="demo-simple-select-label">Today</InputLabel>
            <Select
              labelId="#50d1aa"
              id="#363455"
              value={today}
              label="Today"
              onChange={handleChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          <div className="Neewhr"></div>
          <img className="Circle" src="./Circle.png" alt="" />
          <div className="color1"></div>
          <h4>Dine In</h4>
          <div className="color2"></div>
          <h4>To Go</h4>
          <div className="color3"></div>
          <h4>Delivery</h4>
        </div>
      </div>
    </>
  );
}
