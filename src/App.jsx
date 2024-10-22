import { useState } from "react";
import Menu from "./components/Menu/Menu";
import Sidebar from "./components/Sidebar/Sidebar";
import Settings from "./components/SettingsPages/Settings";
import Dashboard from "./components/DashboardPages/Dashboard";

export default function App() {
  const [page, setPage] = useState("Menu");

  return (
    <div style={{ display: "flex" }} className="App">
      <Sidebar page={page} setPage={setPage} />
      {page === "Menu" ? (
        <Menu />
      ) : page === "settings" ? (
        <Settings />
      ) : page === "Dashboard" ? (
        <Dashboard />
      ) : (
        "Something went wrong"
      )}
    </div>
  );
}
