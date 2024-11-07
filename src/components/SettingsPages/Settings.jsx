import ProductsManagement from "./Cardlar/ProductsManagement";
import SettingSection from "./Cardlar/SettingSection";
import "./Setting.css";

export default function Setting() {
  return (
    <>
      <div className="Setting__products">
        <div className="settings-container">
          <div className="settings-main" style={{ color: "#fff" }}>
            <h1 style={{ padding: "24px" }}>Settings</h1>
            <SettingSection />
            <ProductsManagement />
          </div>
        </div>
      </div>
    </>
  );
}
