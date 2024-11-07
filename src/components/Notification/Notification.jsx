import "./Notification.css";
import { FaSpinner } from "react-icons/fa";

export default function Notification() {
  return (
    <>
      <div className="Notification">
        <div className="loading-container">
          <FaSpinner className="spinner" />
          <span>Work In Progress...</span>
        </div>
      </div>
    </>
  );
}
