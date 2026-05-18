export default function SettingsPage() {
  return (
    <div>
      {/* HEADER */}
      <div className="admin-navbar">
        <div>
          <h1>Settings</h1>
          <p className="muted">Manage system configuration and preferences</p>
        </div>

        <button className="admin-btn">Save Changes</button>
      </div>

      {/* GRID */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "24px",
        }}
      >
        {/* PROFILE SETTINGS */}
        <div className="card">
          <h3>Admin Profile</h3>

          <div style={{ display: "grid", gap: "12px", marginTop: "16px" }}>
            <input className="input" placeholder="Admin Name" />
            <input className="input" placeholder="Email Address" />
            <input className="input" placeholder="Phone Number" />

            <button className="admin-btn dark">Update Profile</button>
          </div>
        </div>

        {/* SECURITY */}
        <div className="card">
          <h3>Security</h3>

          <div style={{ display: "grid", gap: "12px", marginTop: "16px" }}>
            <input className="input" placeholder="Current Password" />
            <input className="input" placeholder="New Password" />
            <input className="input" placeholder="Confirm Password" />

            <button className="admin-btn">Change Password</button>
          </div>
        </div>

        {/* APP SETTINGS */}
        <div className="card">
          <h3>App Settings</h3>

          <div style={{ display: "grid", gap: "12px", marginTop: "16px" }}>
            <input className="input" placeholder="App Name (e.g. RideX)" />
            <input className="input" placeholder="Support Email" />
            <input className="input" placeholder="Support Phone" />

            <button className="admin-btn dark">Update App</button>
          </div>
        </div>

        {/* NOTIFICATIONS */}
        <div className="card">
          <h3>Notifications</h3>

          <div style={{ display: "grid", gap: "12px", marginTop: "16px" }}>
            <label style={{ display: "flex", gap: "10px", alignItems: "center" }}>
              <input type="checkbox" />
              Email notifications
            </label>

            <label style={{ display: "flex", gap: "10px", alignItems: "center" }}>
              <input type="checkbox" />
              SMS alerts for bookings
            </label>

            <label style={{ display: "flex", gap: "10px", alignItems: "center" }}>
              <input type="checkbox" />
              Driver alerts
            </label>

            <button className="admin-btn">Save Preferences</button>
          </div>
        </div>
      </div>

      {/* SYSTEM INFO */}
      <div className="card" style={{ marginTop: "24px" }}>
        <h3>System Information</h3>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "12px",
            marginTop: "16px",
          }}
        >
          <div>
            <p className="muted">Version</p>
            <strong>v1.0.0</strong>
          </div>

          <div>
            <p className="muted">Environment</p>
            <strong>Production</strong>
          </div>

          <div>
            <p className="muted">Database</p>
            <strong>Connected</strong>
          </div>
        </div>
      </div>
    </div>
  );
}