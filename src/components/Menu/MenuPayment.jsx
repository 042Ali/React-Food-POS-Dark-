import { Button } from "@mui/material";
import MenuButton from "../MenuButton/MenuButton";

export default function MenuPayment() {
  return (
    <>
      <div className="MenuPayment">
        <h1
          style={{
            color: "#fff",
            padding: "24px",
          }}
        >
          Orders #34562
        </h1>
        <div style={{ padding: "24px" }}>
          <Button
            style={{
              backgroundColor: "#ea7c69",
              borderRadius: "12px",
              width: "90px",
              height: "40px",
            }}
            variant="contained"
          >
            Dine In
          </Button>
          <Button
            style={{
              color: "#ea7c69",
              borderRadius: "12px",
              border: "1px solid #393c49",
              height: "40px",
              marginLeft: "10px",
            }}
            variant="outlined"
          >
            To Go
          </Button>
          <Button
            style={{
              color: "#ea7c69",
              borderRadius: "12px",
              border: "1px solid #393c49",
              height: "40px",
              marginLeft: "10px",
            }}
            variant="outlined"
          >
            Delivery
          </Button>
        </div>
        <MenuButton />
      </div>
    </>
  );
}
