import { useState } from "react";
import "./MenuButton.css";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import { Toaster, toast } from "react-hot-toast";

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

  // Function to handle the Cancel button click
  const handleCancel = () => {
    toast("Redirecting to the main page..."); // Show a toast message
    setTimeout(() => {
      window.location.href = "/"; // Redirects the user to the home page
    }, 1500); // Waits 1.5 seconds before redirecting
  };

  // Function to handle the Confirm Payment button click
  const handleConfirmPayment = () => {
    toast.success("Order has been successfully accepted!"); // Shows a success toast
  };

  return (
    <>
      <Toaster /> {/* This will display toast notifications */}
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
          onClick={handleCancel} // Shows toast and redirects after 1.5 seconds
        >
          Cancel
        </Button>
        <Button
          style={{
            marginTop: "100px",
            width: "200px",
            height: "48px",
            color: "#fff",
            backgroundColor: "#ea7c69",
            border: "1px solid #ea7c69",
            marginLeft: "30px",
          }}
          variant="outlined"
          onClick={handleConfirmPayment} // Shows a success toast
        >
          Confirm Payment
        </Button>
      </div>
    </>
  );
}
