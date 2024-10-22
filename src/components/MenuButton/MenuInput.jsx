import { useState } from "react";
import "./MenuButton.css";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import {
  Button,
  FilledInput,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";

export default function MenuInput() {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <div style={{ marginTop: "-10px" }}>
        <div className="Cardholder__Name">
          <h1>Cardholder Name</h1>
          <TextField
            style={{
              background: "#4a4d59",
              borderRadius: "12px",
              width: "450px",
              color: "#fff",
              marginTop: "15px",
            }}
            id="filled-textarea"
            label="Levi Ackerman"
            multiline
            variant="filled"
          />
        </div>
        <div className="Card__Number">
          <h1>Card Number</h1>
          <TextField
            style={{
              background: "#4a4d59",
              borderRadius: "12px",
              width: "450px",
              color: "#fff",
              marginTop: "15px",
            }}
            id="filled-textarea"
            label="2564 1421 0897 1244"
            multiline
            variant="filled"
          />
        </div>
        <div className="Expiration__Date">
          <h1>Expiration Date</h1>
          <TextField
            style={{
              background: "#4a4d59",
              borderRadius: "12px",
              width: "200px",
              color: "#fff",
              marginTop: "15px",
            }}
            id="filled-textarea"
            label="02/2022"
            multiline
            variant="filled"
          />
          <h1
            style={{
              marginLeft: "30px",
              marginLeft: "220px",
              marginTop: "-95px",
            }}
          >
            CVV
          </h1>
          <FormControl
            sx={{
              m: 1,
              width: "25ch",
              marginLeft: "220px",
              marginTop: "13px",
            }}
            variant="filled"
          >
            <InputLabel htmlFor="filled-adornment-password">CVV</InputLabel>
            <FilledInput
              style={{
                background: "#4a4d59",
                borderRadius: "12px",
                width: "200px",
              }}
              id="filled-adornment-password"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    onMouseUp={handleMouseUpPassword}
                    edge="end"
                  >
                    {showPassword ? <MdVisibilityOff /> : <MdVisibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          <hr className="Newhr" />
        </div>
        <Button
          style={{
            marginTop: "100px",
            width: "200px",
            height: "48px",
            color: "#ea7c69",
            border: "1px solid #ea7c69",
          }}
          variant="outlined"
        >
          Cancel
        </Button>
        <Button
          style={{
            marginTop: "100px",
            width: "200px",
            height: "48px",
            color: "#ffff",
            backgroundColor: " #ea7c69",
            border: "1px solid #ea7c69",
            marginLeft: "30px",
          }}
          variant="outlined"
        >
          Confirm Payment
        </Button>
      </div>
    </>
  );
}
