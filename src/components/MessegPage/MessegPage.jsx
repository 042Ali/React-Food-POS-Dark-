import "./MessegPage.css";
import { FaSpinner } from "react-icons/fa";

export default function MessegPage() {
  return (
    <>
      <div className="MessegPage">
        <div className="loading-container">
          <FaSpinner className="spinner" />
          <span>Work In Progress...</span>
        </div>
      </div>
    </>
  );
}
