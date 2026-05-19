"use client";

import { useState } from "react";

export default function DriversPage() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All Status");
  const [verificationFilter, setVerificationFilter] = useState("All Verification");

  const drivers = [
    {
      id: "D101",
      name: "Raj Singh",
      email: "raj@gmail.com",
      status: "Online",
      rides: 124,
      earnings: 15420,
      rating: 4.8,
      verified: true,
    },
    {
      id: "D102",
      name: "Mike Ross",
      email: "mike@gmail.com",
      status: "Offline",
      rides: 89,
      earnings: 9800,
      rating: 4.5,
      verified: false,
    },
    {
      id: "D103",
      name: "Vikram Rao",
      email: "vikram@gmail.com",
      status: "Busy",
      rides: 210,
      earnings: 24500,
      rating: 4.9,
      verified: true,
    },
  ];

  const filtered = drivers.filter((d) => {
    const query = search.trim().toLowerCase();
    const verification = d.verified ? "Verified" : "Pending";
    const matchesSearch =
      d.name.toLowerCase().includes(query) ||
      d.email.toLowerCase().includes(query) ||
      d.id.toLowerCase().includes(query);
    const matchesStatus = statusFilter === "All Status" || d.status === statusFilter;
    const matchesVerification =
      verificationFilter === "All Verification" || verification === verificationFilter;

    return matchesSearch && matchesStatus && matchesVerification;
  });

  const clearFilters = () => {
    setSearch("");
    setStatusFilter("All Status");
    setVerificationFilter("All Verification");
  };

  return (
    <div>

      {/* HEADER */}
      <div className="admin-navbar">
        <h1>Drivers</h1>

        <div className="admin-navbar-right">
          <button className="admin-btn">Export Drivers</button>
          <div className="admin-profile" />
        </div>
      </div>

      {/* SEARCH */}
      <div className="rides-toolbar">
        <input
          className="input"
          placeholder="Search drivers..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          className="input"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option>All Status</option>
          <option>Online</option>
          <option>Offline</option>
          <option>Busy</option>
        </select>
        <select
          className="input"
          value={verificationFilter}
          onChange={(e) => setVerificationFilter(e.target.value)}
        >
          <option>All Verification</option>
          <option>Verified</option>
          <option>Pending</option>
        </select>
        <button className="admin-btn dark" type="button" onClick={clearFilters}>
          Clear
        </button>
      </div>

      {/* TABLE */}
      <div className="card">

        <table className="admin-table">
          <thead>
            <tr>
              <th>Driver</th>
              <th>Status</th>
              <th>Rides</th>
              <th>Earnings</th>
              <th>Rating</th>
              <th>Verification</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {filtered.map((driver) => (
              <tr key={driver.id}>

                {/* DRIVER INFO */}
                <td>
                  <div className="user-cell">
                    <div className="user-avatar">
                      {driver.name.charAt(0)}
                    </div>

                    <div>
                      <p className="user-name">{driver.name}</p>
                      <span className="user-id">{driver.id}</span>
                    </div>
                  </div>
                </td>

                {/* STATUS */}
                <td>
                  <span className={`status ${driver.status.toLowerCase()}`}>
                    {driver.status}
                  </span>
                </td>

                {/* RIDES */}
                <td>{driver.rides}</td>

                {/* EARNINGS */}
                <td>
                  <b>₹{driver.earnings}</b>
                </td>

                {/* RATING */}
                <td>⭐ {driver.rating}</td>

                {/* VERIFIED */}
                <td>
                  {driver.verified ? (
                    <span className="status completed">Verified</span>
                  ) : (
                    <span className="status pending">Pending</span>
                  )}
                </td>

                {/* ACTIONS */}
                <td>
                  <div className="action-buttons">
                    <button className="small-btn">View</button>
                    {!driver.verified && (
                      <button className="small-btn">Approve</button>
                    )}
                    <button className="small-btn danger">Suspend</button>
                  </div>
                </td>

              </tr>
            ))}

            {filtered.length === 0 && (
              <tr>
                <td colSpan={7} className="empty-row">
                  No drivers match these filters.
                </td>
              </tr>
            )}
          </tbody>

        </table>

      </div>

    </div>
  );
}
