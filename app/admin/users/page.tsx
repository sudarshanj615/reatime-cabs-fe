"use client";

import { useState } from "react";

export default function UsersPage() {
  const [search, setSearch] = useState("");

  const users = [
    { id: "U101", name: "Aman Sharma", email: "aman@gmail.com", role: "Customer", status: "Active" },
    { id: "U102", name: "Neha Verma", email: "neha@gmail.com", role: "Customer", status: "Blocked" },
    { id: "U103", name: "Raj Mehta", email: "raj@gmail.com", role: "Driver", status: "Active" },
    { id: "U104", name: "John Doe", email: "john@gmail.com", role: "Customer", status: "Active" },
    { id: "U105", name: "Mike Ross", email: "mike@gmail.com", role: "Driver", status: "Inactive" },
  ];

  const filteredUsers = users.filter((u) =>
    u.name.toLowerCase().includes(search.toLowerCase()) ||
    u.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="users-page">

      {/* HEADER */}
      <div className="admin-navbar">
        <h1>Users</h1>

        <div className="admin-navbar-right">
          <button className="admin-btn">Export Users</button>
          <div className="admin-profile" />
        </div>
      </div>

      {/* FILTER BAR */}
      <div className="users-toolbar">

        <input
          className="input"
          placeholder="Search users by name or email..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select className="input">
          <option>All Roles</option>
          <option>Customer</option>
          <option>Driver</option>
        </select>

        <select className="input">
          <option>All Status</option>
          <option>Active</option>
          <option>Blocked</option>
          <option>Inactive</option>
        </select>

      </div>

      {/* TABLE */}
      <div className="card">

        <table className="admin-table">
          <thead>
            <tr>
              <th>User</th>
              <th>Email</th>
              <th>Role</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {filteredUsers.map((user) => (
              <tr key={user.id}>

                {/* USER INFO */}
                <td>
                  <div className="user-cell">
                    <div className="user-avatar">
                      {user.name.charAt(0)}
                    </div>

                    <div>
                      <p className="user-name">{user.name}</p>
                      <span className="user-id">{user.id}</span>
                    </div>
                  </div>
                </td>

                <td>{user.email}</td>
                <td>{user.role}</td>

                {/* STATUS */}
                <td>
                  <span className={`status ${user.status.toLowerCase()}`}>
                    {user.status}
                  </span>
                </td>

                {/* ACTIONS */}
                <td>
                  <div className="action-buttons">
                    <button className="small-btn">View</button>
                    <button className="small-btn danger">Block</button>
                  </div>
                </td>

              </tr>
            ))}
          </tbody>
        </table>

      </div>
    </div>
  );
}