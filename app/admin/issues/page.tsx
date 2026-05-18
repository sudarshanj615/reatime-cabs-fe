export default function IssuesPage() {
  return (
    <div>
      {/* HEADER */}
      <div className="admin-navbar">
        <div>
          <h1>Issues & Support</h1>
          <p className="muted">Manage user complaints and system reports</p>
        </div>

        <button className="admin-btn">Export Report</button>
      </div>

      {/* STATS ROW */}
      <div className="dashboard-grid" style={{ marginBottom: "24px" }}>
        <div className="stats-card">
          <p className="stats-title">Open Tickets</p>
          <h2 className="stats-value">18</h2>
        </div>

        <div className="stats-card">
          <p className="stats-title">In Progress</p>
          <h2 className="stats-value">7</h2>
        </div>

        <div className="stats-card">
          <p className="stats-title">Resolved</p>
          <h2 className="stats-value">124</h2>
        </div>

        <div className="stats-card">
          <p className="stats-title">Critical Issues</p>
          <h2 className="stats-value">3</h2>
        </div>
      </div>

      {/* FILTER BAR */}
      <div
        className="card"
        style={{
          display: "flex",
          gap: "12px",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <input className="input" placeholder="Search ticket ID or user..." />

        <select className="input">
          <option>All Status</option>
          <option>Open</option>
          <option>In Progress</option>
          <option>Resolved</option>
        </select>

        <select className="input">
          <option>All Priority</option>
          <option>High</option>
          <option>Medium</option>
          <option>Low</option>
        </select>
      </div>

      {/* TABLE */}
      <div className="table-wrapper">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Ticket ID</th>
              <th>User</th>
              <th>Issue</th>
              <th>Priority</th>
              <th>Status</th>
              <th>Created</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>#T1001</td>
              <td>Rahul Sharma</td>
              <td>Payment deducted but ride not confirmed</td>
              <td>
                <span className="status active">High</span>
              </td>
              <td>
                <span className="status pending">Open</span>
              </td>
              <td>2 hrs ago</td>
              <td>
                <button className="admin-btn dark">View</button>
              </td>
            </tr>

            <tr>
              <td>#T1002</td>
              <td>Anjali Verma</td>
              <td>Driver cancelled mid ride</td>
              <td>
                <span className="status active">Medium</span>
              </td>
              <td>
                <span className="status active">In Progress</span>
              </td>
              <td>5 hrs ago</td>
              <td>
                <button className="admin-btn dark">View</button>
              </td>
            </tr>

            <tr>
              <td>#T1003</td>
              <td>Amit Singh</td>
              <td>App crash during booking</td>
              <td>
                <span className="status active">Critical</span>
              </td>
              <td>
                <span className="status pending">Open</span>
              </td>
              <td>1 day ago</td>
              <td>
                <button className="admin-btn dark">View</button>
              </td>
            </tr>

            <tr>
              <td>#T1004</td>
              <td>Neha Gupta</td>
              <td>Refund not received</td>
              <td>
                <span className="status active">Low</span>
              </td>
              <td>
                <span className="status completed">Resolved</span>
              </td>
              <td>2 days ago</td>
              <td>
                <button className="admin-btn dark">View</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}