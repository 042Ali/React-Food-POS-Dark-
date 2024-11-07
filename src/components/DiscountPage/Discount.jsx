import "./Discount.css";
import { FaSpinner } from "react-icons/fa";

export default function Discount() {
  return (
    <>
      <div className="Discount">
        <div className="loading-container">
          <FaSpinner className="spinner" />
          <span>Work In Progress...</span>
        </div>
      </div>
    </>
  );
}
