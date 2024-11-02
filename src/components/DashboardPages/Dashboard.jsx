import { FaArrowUp } from "react-icons/fa6";
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
        <div className="Order__Report">
          <h1>Order Report</h1>
          <div className="Filter__Order__card">
            <div className="Filter__Order">
              <div>
                <img src="./Filter.png" alt="" />
              </div>
              <h2>Filter Order</h2>
            </div>
          </div>
          <ul>
            <li>Customer</li>
            <li>Menu</li>
            <li>Total Payment</li>
            <li>Status</li>
          </ul>
          <div className="newhr"></div>
          <div className="Profile__Name">
            <span>Eren Jaegar</span>
            <span>Reiner Braunn</span>
            <span>Levi Ackerman</span>
            <span>Historia Reiss</span>
          </div>

          <div className="Avatar_Image">
            <div>
              <img className="Avatar__Profile" src="./AvatarImg/Avatar1.png" />
            </div>
            <div>
              <img className="Avatar__Profile" src="./AvatarImg/Avatar2.png" />
            </div>
            <div>
              <img className="Avatar__Profile" src="./AvatarImg/Avatar3.png" />
            </div>
            <div>
              <img className="Avatar__Profile" src="./AvatarImg/Avatar4.png" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}