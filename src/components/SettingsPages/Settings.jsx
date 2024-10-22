import "./Setting.css";

export default function Setting() {
  return (
    <>
      <div className="Setting__products">
        <div className="settings-container">
          <main className="settings-main" style={{ color: "#fff" }}>
            <h1 style={{ padding: "24px" }}>Settings</h1>

            <div className="settings-section">
              {/* Appearance Section */}
              <div>
                <h2
                  style={{
                    fontSize: "12px",
                    marginTop: "24px",
                    marginLeft: "-40px",
                  }}
                >
                  Appearance
                </h2>
                <p
                  style={{
                    fontSize: "10px",
                    marginLeft: "-40px",
                    marginTop: "10px",
                  }}
                >
                  Dark and Light mode, Font size
                </p>
              </div>

              {/* Your Restaurant Section */}
              <div style={{ marginTop: "50px" }}>
                <h2
                  style={{
                    fontSize: "12px",
                    marginTop: "24px",
                    marginLeft: "-40px",
                  }}
                >
                  Your Restaurant
                </h2>
                <p
                  style={{
                    fontSize: "10px",
                    marginLeft: "-40px",
                    marginTop: "10px",
                  }}
                >
                  Dark and Light mode, Font size
                </p>
              </div>

              {/* Products Management Section */}
              <div style={{ marginTop: "50px" }}>
                <h2
                  style={{
                    fontSize: "12px",
                    marginTop: "24px",
                    marginLeft: "-40px",
                  }}
                >
                  Products Management
                </h2>
                <p
                  style={{
                    fontSize: "10px",
                    marginLeft: "-40px",
                    marginTop: "10px",
                  }}
                >
                  Manage your product, pricing, etc.
                </p>
              </div>

              {/* Notifications Section */}
              <div style={{ marginTop: "50px" }}>
                <h2
                  style={{
                    fontSize: "12px",
                    marginTop: "24px",
                    marginLeft: "-40px",
                  }}
                >
                  Notifications
                </h2>
                <p
                  style={{
                    fontSize: "10px",
                    marginLeft: "-40px",
                    marginTop: "10px",
                  }}
                >
                  Customize your notifications
                </p>
              </div>

              {/* Security Section */}
              <div style={{ marginTop: "50px" }}>
                <h2
                  style={{
                    fontSize: "12px",
                    marginTop: "24px",
                    marginLeft: "-40px",
                  }}
                >
                  Security
                </h2>
                <p
                  style={{
                    fontSize: "10px",
                    marginLeft: "-40px",
                    marginTop: "10px",
                  }}
                >
                  Configure Password, PIN, etc.
                </p>
              </div>

              {/* About Us Section */}
              <div style={{ marginTop: "50px" }}>
                <h2
                  style={{
                    fontSize: "12px",
                    marginTop: "24px",
                    marginLeft: "-40px",
                  }}
                >
                  About Us
                </h2>
                <p
                  style={{
                    fontSize: "10px",
                    marginLeft: "-40px",
                    marginTop: "10px",
                  }}
                >
                  Find out more about Posly
                </p>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
