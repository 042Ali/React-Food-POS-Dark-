import { FiHome } from "react-icons/fi";
import Menu from "./components/Menu/Menu";

export default function App() {
  // const [activePage, setActivePage] = useState("home");

  // const renderPage = () => {
  //   if (activePage === "home") {
  //     return <Home />;
  //   } else if (activePage === "") {
  //     return <About />;
  //   } else if (activePage === "contact") {
  //     return <Contact />;
  //   } else {
  //     return <Home />;
  //   }
  // };

  return (
    <div className="App">
      <div className="sidebar">
        <div style={{ marginTop: "-10px" }} className="sidebar-icon">
          <img src="./Logo (2).png" />
        </div>
        <div className="sidebar-icon active">
          <FiHome />
        </div>
        <div className="sidebar-icon">
          <img src="./Discount.png" />
        </div>
        <div className="sidebar-icon">
          <img src="./Graph.png" />
        </div>
        <div className="sidebar-icon">
          <img src="./Message.png" />
        </div>
        <div className="sidebar-icon">
          <img src="./Notification.png" />
        </div>
        <div className="sidebar-icon">
          <img src="./Setting.png" />
        </div>
        <div style={{ marginTop: "50px" }} className="sidebar-icon">
          <img src="./Log Out.png" />
        </div>
      </div>
      <Menu />
    </div>
  );
}
