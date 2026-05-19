"use client";

import { useState } from "react";

export default function RidesPage() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All Status");

  const rides = [
    {
      id: "RIDE1001",
      user: "Aman Sharma",
      driver: "Raj Singh",
      from: "MG Road",
      to: "Airport",
      status: "Ongoing",
      fare: 320,
    },
    {
      id: "RIDE1002",
      user: "Neha Verma",
      driver: "Mike Ross",
      from: "BTM Layout",
      to: "Koramangala",
      status: "Completed",
      fare: 180,
    },
    {
      id: "RIDE1003",
      user: "John Doe",
      driver: "Not Assigned",
      from: "Whitefield",
      to: "HSR Layout",
      status: "Pending",
      fare: 0,
    },
    {
      id: "RIDE1004",
      user: "Sara Khan",
      driver: "Vikram Rao",
      from: "Indiranagar",
      to: "Majestic",
      status: "Cancelled",
      fare: 0,
    },
  ];

  const filtered = rides.filter((r) => {
    const query = search.trim().toLowerCase();
    const matchesSearch =
      r.id.toLowerCase().includes(query) ||
      r.user.toLowerCase().includes(query) ||
      r.driver.toLowerCase().includes(query) ||
      r.from.toLowerCase().includes(query) ||
      r.to.toLowerCase().includes(query);
    const matchesStatus = statusFilter === "All Status" || r.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  const clearFilters = () => {
    setSearch("");
    setStatusFilter("All Status");
  };

  return (
    <div>

      {/* HEADER */}
      <div className="admin-navbar">
        <h1>Rides</h1>

        <div className="admin-navbar-right">
          <button className="admin-btn">Export Data</button>
          <div className="admin-profile" />
        </div>
      </div>

      {/* SEARCH */}
      <div className="rides-toolbar">
        <input
          className="input"
          placeholder="Search ride, user or driver..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          className="input"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option>All Status</option>
          <option>Ongoing</option>
          <option>Completed</option>
          <option>Pending</option>
          <option>Cancelled</option>
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
              <th>Ride</th>
              <th>User</th>
              <th>Driver</th>
              <th>Route</th>
              <th>Status</th>
              <th>Fare</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {filtered.map((ride) => (
              <tr key={ride.id}>

                {/* RIDE ID */}
                <td>
                  <div>
                    <p className="user-name">{ride.id}</p>
                    <span className="user-id">ID</span>
                  </div>
                </td>

                {/* USER */}
                <td>{ride.user}</td>

                {/* DRIVER */}
                <td>{ride.driver}</td>

                {/* ROUTE */}
                <td>
                  <div className="route-cell">
                    <span>{ride.from}</span>
                    <span className="route-arrow">→</span>
                    <span>{ride.to}</span>
                  </div>
                </td>

                {/* STATUS */}
                <td>
                  <span className={`status ${ride.status.toLowerCase()}`}>
                    {ride.status}
                  </span>
                </td>

                {/* FARE */}
                <td>
                  <b>₹{ride.fare}</b>
                </td>

                {/* ACTIONS */}
                <td>
                  <div className="action-buttons">
                    <button className="small-btn">View</button>
                    <button className="small-btn">Track</button>
                  </div>
                </td>

              </tr>
            ))}

            {filtered.length === 0 && (
              <tr>
                <td colSpan={7} className="empty-row">
                  No rides match these filters.
                </td>
              </tr>
            )}
          </tbody>

        </table>
      </div>

    </div>
  );
}
