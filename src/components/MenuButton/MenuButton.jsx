import { FaArrowLeftLong } from "react-icons/fa6";
import { PiCreditCard } from "react-icons/pi";
import { TbBrandPaypal } from "react-icons/tb";
import { RiCashLine } from "react-icons/ri";
import { Button } from "@mui/material";
import { useState } from "react";
import MenuInput from "./MenuInput";
import "./MenuButton.css";

export default function MenuButton() {
  const [showPage, setShowPage] = useState(false);

  const handleClick = () => {
    setShowPage(!showPage);
  };

  return (
    <>
      <div>
        <div style={{ display: "flex" }}>
          <Button
            style={{
              marginTop: "550px",
              width: "390px",
              marginLeft: "60px",
              backgroundColor: "#ea7c69",
            }}
            variant="contained"
            onClick={handleClick}
          >
            Continue to Payment
          </Button>
        </div>

        <div className={`sliding-page ${showPage ? "open" : ""}`}>
          <FaArrowLeftLong className="close-button" onClick={handleClick} />
          <div>
            <h1
              style={{
                color: "#ffffff",
                padding: "20px",
                marginLeft: "-18px",
                fontSize: "24px",
                marginTop: "-20px",
              }}
            >
              Payment
            </h1>
            <p
              style={{
                color: "#abbbc2",
                marginTop: "-10px",
                marginLeft: "3px",
              }}
            >
              3 payment method available
            </p>
            <hr className="New" />
            <h1
              style={{
                color: "#ffffff",
                padding: "20px",
                marginLeft: "-18px",
                fontSize: "24px",
              }}
            >
              Payment Method
            </h1>
            <div style={{ display: "flex" }}>
              <div className="CreditCard">
                <PiCreditCard
                  style={{ height: "40px", width: "40px", marginLeft: "27px" }}
                />
                <h1>Credit Card</h1>
              </div>
              <div className="paypal">
                <TbBrandPaypal
                  style={{ height: "40px", width: "40px", marginLeft: "27px" }}
                />
                <h1>Paypal</h1>
              </div>
              <div className="Cash">
                <RiCashLine
                  style={{ height: "40px", width: "40px", marginLeft: "27px" }}
                />
                <h1>Cash</h1>
              </div>
            </div>
            <MenuInput />
          </div>
        </div>
      </div>
    </>
  );
}
