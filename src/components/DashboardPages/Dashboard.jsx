import { FaArrowUp } from "react-icons/fa6";
import OrderReport from "./Cardlar/OrderReport";
import MostOrdered from "./Cardlar/MostOrdered";
import MostTypeofOrder from "./Cardlar/MostTypeofOrder";
import { IoMdArrowDown } from "react-icons/io";
import "./Dashboard.css";

export default function Dashboard() {
  return (
    <>
      <div className="Dashboard">
        <h1 style={{ padding: " 30px 50px" }}>Dashboard</h1>
        <p style={{ color: "#abbbc2", marginLeft: "50px", marginTop: "-20px" }}>
          Tuesday 2 Feb, 2021
        </p>
        <div className="hr"></div>
        {/*  */}
        <div style={{ display: "flex" }}>
          <div className="Card1">
            <img className="Card1__image" src="./icon.png" alt="" />
            <div className="FaArrowUp">
              <FaArrowUp />
            </div>
            <p>+32.40%</p>
            <h4>$10,243.00</h4>
            <p
              style={{
                color: "#abbbc2",
                marginLeft: "10px",
                marginTop: "-5px",
              }}
            >
              Total Revenue
            </p>
          </div>
          {/*  */}
          <div className="Card2">
            <img className="Card2__image" src="./icon2.png" alt="" />
            <div className="IoMdArrowDown">
              <IoMdArrowDown />
            </div>
            <p>-12.40%</p>
            <h4>23,456</h4>
            <p
              style={{
                color: "#abbbc2",
                marginLeft: "10px",
                marginTop: "-5px",
              }}
            >
              Total Dish Ordered
            </p>
          </div>
          {/*  */}
          <div className="Card3">
            <img className="Card3__image" src="./icon3.png" alt="" />
            <div className="FaArrowUp">
              <FaArrowUp />
            </div>
            <p>+2.40%</p>
            <h4>1,234</h4>
            <p
              style={{
                color: "#abbbc2",
                marginLeft: "10px",
                marginTop: "-5px",
              }}
            >
              Total Customer
            </p>
          </div>
        </div>
        {/*  */}
        <OrderReport />
        <MostOrdered />
        <MostTypeofOrder />
      </div>
    </>
  );
}
