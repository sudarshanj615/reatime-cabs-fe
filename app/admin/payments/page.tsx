export default function PaymentsPage() {
  return (
    <div>
      {/* HEADER */}
      <div className="admin-navbar">
        <div>
          <h1>Payments</h1>
          <p className="muted">Track all transactions and driver payouts</p>
        </div>

        <button className="admin-btn">Export CSV</button>
      </div>

      {/* STATS */}
      <div className="dashboard-grid" style={{ marginBottom: "24px" }}>
        <div className="stats-card">
          <p className="stats-title">Total Revenue</p>
          <h2 className="stats-value">₹2,45,890</h2>
        </div>

        <div className="stats-card">
          <p className="stats-title">Today Earnings</p>
          <h2 className="stats-value">₹18,420</h2>
        </div>

        <div className="stats-card">
          <p className="stats-title">Pending Payouts</p>
          <h2 className="stats-value">₹32,100</h2>
        </div>

        <div className="stats-card">
          <p className="stats-title">Failed Payments</p>
          <h2 className="stats-value">6</h2>
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
        <input className="input" placeholder="Search transaction ID..." />

        <select className="input">
          <option>All Status</option>
          <option>Success</option>
          <option>Pending</option>
          <option>Failed</option>
        </select>

        <select className="input">
          <option>All Type</option>
          <option>Ride Payment</option>
          <option>Driver Payout</option>
          <option>Refund</option>
        </select>
      </div>

      {/* TABLE */}
      <div className="table-wrapper">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Txn ID</th>
              <th>User</th>
              <th>Type</th>
              <th>Amount</th>
              <th>Method</th>
              <th>Status</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>#TXN1001</td>
              <td>Rahul Sharma</td>
              <td>Ride Payment</td>
              <td>₹450</td>
              <td>UPI</td>
              <td><span className="status completed">Success</span></td>
              <td>Today</td>
              <td>
                <button className="admin-btn dark">View</button>
              </td>
            </tr>

            <tr>
              <td>#TXN1002</td>
              <td>Anjali Verma</td>
              <td>Driver Payout</td>
              <td>₹1,200</td>
              <td>Bank</td>
              <td><span className="status pending">Pending</span></td>
              <td>Today</td>
              <td>
                <button className="admin-btn dark">View</button>
              </td>
            </tr>

            <tr>
              <td>#TXN1003</td>
              <td>Amit Singh</td>
              <td>Refund</td>
              <td>₹300</td>
              <td>UPI</td>
              <td><span className="status active">Processing</span></td>
              <td>Yesterday</td>
              <td>
                <button className="admin-btn dark">View</button>
              </td>
            </tr>

            <tr>
              <td>#TXN1004</td>
              <td>Neha Gupta</td>
              <td>Ride Payment</td>
              <td>₹780</td>
              <td>Card</td>
              <td><span className="status completed">Success</span></td>
              <td>Yesterday</td>
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