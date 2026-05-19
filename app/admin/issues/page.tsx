"use client";

import { useState } from "react";

const tickets = [
  {
    id: "#T1001",
    user: "Rahul Sharma",
    issue: "Payment deducted but ride not confirmed",
    priority: "High",
    status: "Open",
    created: "2 hrs ago",
  },
  {
    id: "#T1002",
    user: "Anjali Verma",
    issue: "Driver cancelled mid ride",
    priority: "Medium",
    status: "In Progress",
    created: "5 hrs ago",
  },
  {
    id: "#T1003",
    user: "Amit Singh",
    issue: "App crash during booking",
    priority: "Critical",
    status: "Open",
    created: "1 day ago",
  },
  {
    id: "#T1004",
    user: "Neha Gupta",
    issue: "Refund not received",
    priority: "Low",
    status: "Resolved",
    created: "2 days ago",
  },
];

export default function IssuesPage() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All Status");
  const [priorityFilter, setPriorityFilter] = useState("All Priority");

  const filteredTickets = tickets.filter((ticket) => {
    const query = search.trim().toLowerCase();
    const matchesSearch =
      ticket.id.toLowerCase().includes(query) ||
      ticket.user.toLowerCase().includes(query) ||
      ticket.issue.toLowerCase().includes(query);
    const matchesStatus = statusFilter === "All Status" || ticket.status === statusFilter;
    const matchesPriority =
      priorityFilter === "All Priority" || ticket.priority === priorityFilter;

    return matchesSearch && matchesStatus && matchesPriority;
  });

  const clearFilters = () => {
    setSearch("");
    setStatusFilter("All Status");
    setPriorityFilter("All Priority");
  };

  return (
    <div>
      <div className="admin-navbar">
        <div>
          <h1>Issues & Support</h1>
          <p className="muted">Manage user complaints and system reports</p>
        </div>

        <button className="admin-btn">Export Report</button>
      </div>

      <div className="dashboard-grid" style={{ marginBottom: "24px" }}>
        <div className="stats-card">
          <p className="stats-title">Open Tickets</p>
          <h2 className="stats-value">
            {tickets.filter((ticket) => ticket.status === "Open").length}
          </h2>
        </div>

        <div className="stats-card">
          <p className="stats-title">In Progress</p>
          <h2 className="stats-value">
            {tickets.filter((ticket) => ticket.status === "In Progress").length}
          </h2>
        </div>

        <div className="stats-card">
          <p className="stats-title">Resolved</p>
          <h2 className="stats-value">
            {tickets.filter((ticket) => ticket.status === "Resolved").length}
          </h2>
        </div>

        <div className="stats-card">
          <p className="stats-title">Critical Issues</p>
          <h2 className="stats-value">
            {tickets.filter((ticket) => ticket.priority === "Critical").length}
          </h2>
        </div>
      </div>

      <div className="card admin-filter-card">
        <input
          className="input"
          placeholder="Search ticket ID, user or issue..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="input"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option>All Status</option>
          <option>Open</option>
          <option>In Progress</option>
          <option>Resolved</option>
        </select>

        <select
          className="input"
          value={priorityFilter}
          onChange={(e) => setPriorityFilter(e.target.value)}
        >
          <option>All Priority</option>
          <option>Critical</option>
          <option>High</option>
          <option>Medium</option>
          <option>Low</option>
        </select>

        <button className="admin-btn dark" type="button" onClick={clearFilters}>
          Clear
        </button>
      </div>

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
            {filteredTickets.map((ticket) => (
              <tr key={ticket.id}>
                <td>{ticket.id}</td>
                <td>{ticket.user}</td>
                <td>{ticket.issue}</td>
                <td>
                  <span className="status active">{ticket.priority}</span>
                </td>
                <td>
                  <span className={`status ${ticket.status.toLowerCase().replace(" ", "-")}`}>
                    {ticket.status}
                  </span>
                </td>
                <td>{ticket.created}</td>
                <td>
                  <button className="admin-btn dark">View</button>
                </td>
              </tr>
            ))}

            {filteredTickets.length === 0 && (
              <tr>
                <td colSpan={7} className="empty-row">
                  No tickets match these filters.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
