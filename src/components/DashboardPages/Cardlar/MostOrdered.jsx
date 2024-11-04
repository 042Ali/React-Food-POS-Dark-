import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";
import { Button } from "@mui/material";

export default function MostOrdered() {
  const [today, setToday] = useState("");

  const handleChange = (event) => {
    setToday(event.target.value);
  };
  return (
    <>
      <div className="Most__Ordered">
        <h1>Most Ordered</h1>
        <FormControl
          style={{
            width: "120px",
            marginTop: "-70px",
            marginLeft: "400px",
          }}
        >
          <InputLabel id="demo-simple-select-label">Today</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
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
        <div className="Food">
          <div className="Food__img--1">
            <img src="./image1.png" alt="" />
          </div>
          <div className="Food__img--2">
            <img src="./image 2.png" alt="" />
          </div>
          <div className="Food__img--3">
            <img src="./image 3.png" alt="" />
          </div>
        </div>
        <div className="Food__img--Name">
          <p>Spicy seasoned seafood noodles</p>
          <h6>200 dishes ordered</h6>
          <p>Salted pasta with mushroom sauce</p>
          <h6>120 dishes ordered</h6>
          <p>Beef dumpling in hot and sour soup</p>
          <h6>80 dishes ordered</h6>
        </div>
        <Button
          style={{
            marginTop: "30px",
            width: "300px",
            marginLeft: "120px",
            color: "#ea7c69",
            border: "1px solid #ea7c69",
          }}
          variant="outlined"
        >
          View All
        </Button>
      </div>
    </>
  );
}
