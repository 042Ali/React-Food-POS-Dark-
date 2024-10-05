import { FiHome } from "react-icons/fi";
import "./Sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div style={{ marginTop: "-10px" }} className="sidebar-icon">
        <img src="./Logo (2).png" alt="" />
      </div>
      <div className="sidebar-icon active">
        <FiHome />
      </div>
      <div className="sidebar-icon">
        <img src="./Discount.png" alt="" />
      </div>
      <div className="sidebar-icon">
        <img src="./Graph.png" alt="" />
      </div>
      <div className="sidebar-icon">
        <img src="./Message.png" alt="" />
      </div>
      <div className="sidebar-icon">
        <img src="./Notification.png" alt="" />
      </div>
      <div className="sidebar-icon">
        <img src="./Setting.png" alt="" />
      </div>
      <div style={{ marginTop: "50px" }} className="sidebar-icon">
        <img src="./Log Out.png" alt="" />
      </div>
    </div>
  );
}
