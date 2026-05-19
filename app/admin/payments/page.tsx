"use client";

import { useState } from "react";

const payments = [
  {
    id: "#TXN1001",
    user: "Rahul Sharma",
    type: "Ride Payment",
    amount: 450,
    method: "UPI",
    status: "Success",
    date: "Today",
  },
  {
    id: "#TXN1002",
    user: "Anjali Verma",
    type: "Driver Payout",
    amount: 1200,
    method: "Bank",
    status: "Pending",
    date: "Today",
  },
  {
    id: "#TXN1003",
    user: "Amit Singh",
    type: "Refund",
    amount: 300,
    method: "UPI",
    status: "Processing",
    date: "Yesterday",
  },
  {
    id: "#TXN1004",
    user: "Neha Gupta",
    type: "Ride Payment",
    amount: 780,
    method: "Card",
    status: "Success",
    date: "Yesterday",
  },
];

export default function PaymentsPage() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All Status");
  const [typeFilter, setTypeFilter] = useState("All Type");

  const filteredPayments = payments.filter((payment) => {
    const query = search.trim().toLowerCase();
    const matchesSearch =
      payment.id.toLowerCase().includes(query) ||
      payment.user.toLowerCase().includes(query) ||
      payment.method.toLowerCase().includes(query);
    const matchesStatus = statusFilter === "All Status" || payment.status === statusFilter;
    const matchesType = typeFilter === "All Type" || payment.type === typeFilter;

    return matchesSearch && matchesStatus && matchesType;
  });

  const totalRevenue = payments
    .filter((payment) => payment.status === "Success")
    .reduce((total, payment) => total + payment.amount, 0);
  const todayEarnings = payments
    .filter((payment) => payment.date === "Today")
    .reduce((total, payment) => total + payment.amount, 0);
  const pendingPayouts = payments
    .filter((payment) => payment.status === "Pending")
    .reduce((total, payment) => total + payment.amount, 0);

  const clearFilters = () => {
    setSearch("");
    setStatusFilter("All Status");
    setTypeFilter("All Type");
  };

  return (
    <div>
      <div className="admin-navbar">
        <div>
          <h1>Payments</h1>
          <p className="muted">Track all transactions and driver payouts</p>
        </div>

        <button className="admin-btn">Export CSV</button>
      </div>

      <div className="dashboard-grid" style={{ marginBottom: "24px" }}>
        <div className="stats-card">
          <p className="stats-title">Total Revenue</p>
          <h2 className="stats-value">INR {totalRevenue.toLocaleString("en-IN")}</h2>
        </div>

        <div className="stats-card">
          <p className="stats-title">Today Earnings</p>
          <h2 className="stats-value">INR {todayEarnings.toLocaleString("en-IN")}</h2>
        </div>

        <div className="stats-card">
          <p className="stats-title">Pending Payouts</p>
          <h2 className="stats-value">INR {pendingPayouts.toLocaleString("en-IN")}</h2>
        </div>

        <div className="stats-card">
          <p className="stats-title">Failed Payments</p>
          <h2 className="stats-value">
            {payments.filter((payment) => payment.status === "Failed").length}
          </h2>
        </div>
      </div>

      <div className="card admin-filter-card">
        <input
          className="input"
          placeholder="Search transaction, user or method..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="input"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option>All Status</option>
          <option>Success</option>
          <option>Pending</option>
          <option>Processing</option>
          <option>Failed</option>
        </select>

        <select
          className="input"
          value={typeFilter}
          onChange={(e) => setTypeFilter(e.target.value)}
        >
          <option>All Type</option>
          <option>Ride Payment</option>
          <option>Driver Payout</option>
          <option>Refund</option>
        </select>

        <button className="admin-btn dark" type="button" onClick={clearFilters}>
          Clear
        </button>
      </div>

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
            {filteredPayments.map((payment) => (
              <tr key={payment.id}>
                <td>{payment.id}</td>
                <td>{payment.user}</td>
                <td>{payment.type}</td>
                <td>INR {payment.amount.toLocaleString("en-IN")}</td>
                <td>{payment.method}</td>
                <td>
                  <span className={`status ${payment.status.toLowerCase()}`}>
                    {payment.status}
                  </span>
                </td>
                <td>{payment.date}</td>
                <td>
                  <button className="admin-btn dark">View</button>
                </td>
              </tr>
            ))}

            {filteredPayments.length === 0 && (
              <tr>
                <td colSpan={8} className="empty-row">
                  No payments match these filters.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
