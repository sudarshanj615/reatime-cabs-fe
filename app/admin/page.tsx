export default function AdminDashboard() {
  return (
    <div className="admin-dashboard">

      {/* HEADER */}
      <div className="admin-navbar">
        <h1>Dashboard</h1>

        <div className="admin-navbar-right">
          <button className="admin-btn">Generate Report</button>
          <div className="admin-profile" />
        </div>
      </div>

      {/* KPI CARDS */}
      <div className="dashboard-grid">
        <div className="stats-card">
          <p className="stats-title">Total Users</p>
          <h2 className="stats-value">1,248</h2>
        </div>

        <div className="stats-card">
          <p className="stats-title">Active Rides</p>
          <h2 className="stats-value">86</h2>
        </div>

        <div className="stats-card">
          <p className="stats-title">Drivers Online</p>
          <h2 className="stats-value">42</h2>
        </div>

        <div className="stats-card">
          <p className="stats-title">Revenue Today</p>
          <h2 className="stats-value">₹18,540</h2>
        </div>
      </div>

      {/* LOWER GRID */}
      <div className="admin-dashboard-grid">

        {/* RECENT RIDES */}
        <div className="card">
          <h3 className="section-title">Recent Rides</h3>

          <table className="admin-table">
            <thead>
              <tr>
                <th>Ride ID</th>
                <th>User</th>
                <th>Driver</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>#RIDE1021</td>
                <td>Aman</td>
                <td>Raj</td>
                <td><span className="status active">Ongoing</span></td>
              </tr>

              <tr>
                <td>#RIDE1022</td>
                <td>Neha</td>
                <td>Vikram</td>
                <td><span className="status completed">Completed</span></td>
              </tr>

              <tr>
                <td>#RIDE1023</td>
                <td>John</td>
                <td>Mike</td>
                <td><span className="status pending">Pending</span></td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* ALERTS PANEL */}
        <div className="card">
          <h3 className="section-title">System Alerts</h3>

          <div className="alert-list">

            <div className="alert-item warning">
              ⚠ High ride cancellation rate in Mumbai zone
            </div>

            <div className="alert-item danger">
              ❌ 5 drivers reported offline unexpectedly
            </div>

            <div className="alert-item success">
              ✅ Payment gateway working normally
            </div>

            <div className="alert-item info">
              ℹ Peak traffic expected at 6–9 PM
            </div>

          </div>
        </div>

      </div>

    </div>
  );
}