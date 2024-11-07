import { FiHome } from "react-icons/fi";
import "./Sidebar.css";

export default function Sidebar({ page, setPage }) {
  return (
    <div className="sidebar">
      <div style={{ marginTop: "-10px" }} className="sidebar-icon">
        <img src="./Logo (2).png" />
      </div>
      <div
        className={`sidebar-icon ${page === "Menu" ? "active" : ""}`}
        onClick={() => setPage("Menu")}
      >
        <FiHome />
      </div>
      <div
        className={`sidebar-icon ${page === "Discount" ? "active" : ""}`}
        onClick={() => setPage("Discount")}
      >
        <img src="./Discount.png" />
      </div>
      <div
        className={`sidebar-icon ${page === "Dashboard" ? "active" : ""}`}
        onClick={() => setPage("Dashboard")}
      >
        <img src="./Graph.png" />
      </div>
      <div
        className={`sidebar-icon ${page === "MessegPage" ? "active" : ""}`}
        onClick={() => setPage("MessegPage")}
      >
        <img src="./Message.png" />
      </div>
      <div className="sidebar-icon">
        <img src="./Notification.png" />
      </div>
      <div
        className={`sidebar-icon ${page === "settings" ? "active" : ""}`}
        onClick={() => setPage("settings")}
      >
        <img src="./Setting.png" />
      </div>
      <div style={{ marginTop: "50px" }} className="sidebar-icon">
        <img src="./Log Out.png" />
      </div>
    </div>
  );
}
