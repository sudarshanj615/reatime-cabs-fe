"use client";

import { useState } from "react";
import Swal from "sweetalert2";

export default function UsersPage() {
  const [search, setSearch] = useState("");
  const [roleFilter, setRoleFilter] = useState("All Roles");
  const [statusFilter, setStatusFilter] = useState("All Status");

  // USERS STATE
  const [users, setUsers] = useState([
    {
      id: "U101",
      name: "Aman Sharma",
      email: "aman@gmail.com",
      role: "Customer",
      status: "Active",
      phone: "+91 9876543210",
      city: "Aurangabad",
      joined: "22 May 2026",
      rides: 18,
    },
    {
      id: "U102",
      name: "Neha Verma",
      email: "neha@gmail.com",
      role: "Customer",
      status: "Blocked",
      phone: "+91 9876543222",
      city: "Pune",
      joined: "18 April 2026",
      rides: 9,
    },
    {
      id: "U103",
      name: "Raj Mehta",
      email: "raj@gmail.com",
      role: "Driver",
      status: "Active",
      phone: "+91 9876543233",
      city: "Mumbai",
      joined: "11 March 2026",
      rides: 52,
    },
    {
      id: "U104",
      name: "John Doe",
      email: "john@gmail.com",
      role: "Customer",
      status: "Active",
      phone: "+91 9876543244",
      city: "Delhi",
      joined: "5 January 2026",
      rides: 26,
    },
    {
      id: "U105",
      name: "Mike Ross",
      email: "mike@gmail.com",
      role: "Driver",
      status: "Inactive",
      phone: "+91 9876543255",
      city: "Nagpur",
      joined: "14 February 2026",
      rides: 31,
    },
  ]);

  const query = search.trim().toLowerCase();

  // FILTER USERS
  const filteredUsers = users.filter((u) => {
    const matchesSearch =
      u.name.toLowerCase().includes(query) ||
      u.email.toLowerCase().includes(query) ||
      u.id.toLowerCase().includes(query);

    const matchesRole =
      roleFilter === "All Roles" || u.role === roleFilter;

    const matchesStatus =
      statusFilter === "All Status" || u.status === statusFilter;

    return matchesSearch && matchesRole && matchesStatus;
  });

  // CLEAR FILTERS
  const clearFilters = () => {
    setSearch("");
    setRoleFilter("All Roles");
    setStatusFilter("All Status");
  };

  // VIEW USER
  const handleView = (user: any) => {
    Swal.fire({
      title: user.name,

      html: `
        <div style="text-align:left; line-height:1.9">

          <div style="display:flex; justify-content:center; margin-bottom:18px;">
            <div style="
              width:70px;
              height:70px;
              border-radius:999px;
              background:#dbeafe;
              color:#2563eb;
              display:flex;
              align-items:center;
              justify-content:center;
              font-size:28px;
              font-weight:700;
            ">
              ${user.name.charAt(0)}
            </div>
          </div>

          <p><b>User ID:</b> ${user.id}</p>

          <p><b>Full Name:</b> ${user.name}</p>

          <p><b>Email Address:</b> ${user.email}</p>

          <p><b>Phone:</b> ${user.phone}</p>

          <p><b>Role:</b> ${user.role}</p>

          <p><b>Status:</b> ${user.status}</p>

          <p><b>City:</b> ${user.city}</p>

          <p><b>Joined:</b> ${user.joined}</p>

          <p><b>Total Rides:</b> ${user.rides}</p>

        </div>
      `,

      confirmButtonText: "Close",
      confirmButtonColor: "#facc15",
      width: 520,
    });
  };

  // BLOCK / UNBLOCK USER
  const handleBlock = async (id: string) => {
    const currentUser = users.find((u) => u.id === id);

    if (!currentUser) return;

    // CONFIRMATION
    const result = await Swal.fire({
      title:
        currentUser.status === "Blocked"
          ? "Unblock User?"
          : "Block User?",

      text:
        currentUser.status === "Blocked"
          ? `Do you want to unblock ${currentUser.name}?`
          : `Are you sure you want to block ${currentUser.name}?`,

      icon: "warning",

      showCancelButton: true,

      confirmButtonColor:
        currentUser.status === "Blocked"
          ? "#16a34a"
          : "#dc2626",

      cancelButtonColor: "#6b7280",

      confirmButtonText:
        currentUser.status === "Blocked"
          ? "Yes, Unblock"
          : "Yes, Block",

      cancelButtonText: "No",
    });

    // IF CANCELLED
    if (!result.isConfirmed) return;

    // UPDATE STATUS
    setUsers((prev) =>
      prev.map((user) =>
        user.id === id
          ? {
              ...user,
              status:
                user.status === "Blocked"
                  ? "Active"
                  : "Blocked",
            }
          : user
      )
    );

    // SUCCESS ALERT
    Swal.fire({
      icon: "success",

      title:
        currentUser.status === "Blocked"
          ? "User Unblocked Successfully"
          : "User Blocked Successfully",

      timer: 1800,
      showConfirmButton: false,
    });
  };

  return (
    <div className="min-h-screen bg-[#fffdf3] px-6 py-6">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-7 gap-5 max-[768px]:flex-col max-[768px]:items-start">

        <div>
          <h1 className="text-[30px] font-bold text-[#111827]">
            Users
          </h1>

          <p className="text-[#6b7280]">
            Manage all customers and drivers
          </p>
        </div>

        <div className="flex items-center gap-4 max-[768px]:w-full max-[768px]:justify-between">

          <button className="border-0 cursor-pointer py-[11px] px-[18px] rounded-[10px] bg-[#facc15] text-black font-semibold hover:bg-[#eab308] hover:-translate-y-px transition">
            Export Users
          </button>

          <div className="w-[42px] h-[42px] rounded-full bg-[linear-gradient(135deg,#facc15,#eab308)]" />

        </div>
      </div>

      {/* FILTER BAR */}
      <div className="bg-white rounded-[16px] border border-[#f0e6c2] shadow-[0_4px_12px_rgba(0,0,0,0.04)] p-5 mb-6">

        <div className="flex flex-wrap gap-3.5 items-center">

          <input
            className="flex-1 min-w-[220px] border border-[#e5e7eb] rounded-[10px] py-3 px-3.5 text-sm focus:outline-none focus:border-[#2563eb] focus:shadow-[0_0_0_4px_rgba(37,99,235,0.1)]"
            placeholder="Search users by name, email or ID..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            className="min-w-[180px] border border-[#e5e7eb] rounded-[10px] py-3 px-3.5 text-sm"
            value={roleFilter}
            onChange={(e) => setRoleFilter(e.target.value)}
          >
            <option>All Roles</option>
            <option>Customer</option>
            <option>Driver</option>
          </select>

          <select
            className="min-w-[180px] border border-[#e5e7eb] rounded-[10px] py-3 px-3.5 text-sm"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option>All Status</option>
            <option>Active</option>
            <option>Blocked</option>
            <option>Inactive</option>
          </select>

          <button
            onClick={clearFilters}
            className="border-0 cursor-pointer py-[11px] px-[18px] rounded-[10px] bg-[#111827] text-white font-semibold hover:bg-black transition"
          >
            Clear
          </button>

        </div>
      </div>

      {/* TABLE */}
      <div className="bg-white rounded-[14px] p-[22px] shadow-[0_4px_10px_rgba(0,0,0,0.04)] border border-[#e5e7eb] overflow-x-auto">

        <table className="w-full border-collapse min-w-[900px]">

          <thead className="bg-[#f9fafb]">
            <tr>
              <th className="text-left p-[15px] text-sm text-[#6b7280]">
                User
              </th>

              <th className="text-left p-[15px] text-sm text-[#6b7280]">
                Email
              </th>

              <th className="text-left p-[15px] text-sm text-[#6b7280]">
                Role
              </th>

              <th className="text-left p-[15px] text-sm text-[#6b7280]">
                Status
              </th>

              <th className="text-left p-[15px] text-sm text-[#6b7280]">
                Action
              </th>
            </tr>
          </thead>

          <tbody>

            {filteredUsers.map((user) => (
              <tr
                key={user.id}
                className="hover:bg-[#fafafa] transition"
              >

                {/* USER */}
                <td className="p-[16px_15px] border-b border-[#f3f4f6]">

                  <div className="flex items-center gap-3">

                    <div className="w-[42px] h-[42px] rounded-full bg-[#dbeafe] text-[#2563eb] flex items-center justify-center font-bold">
                      {user.name.charAt(0)}
                    </div>

                    <div>
                      <p className="font-semibold text-[#111827]">
                        {user.name}
                      </p>

                      <span className="text-xs text-[#6b7280]">
                        {user.id}
                      </span>
                    </div>

                  </div>

                </td>

                {/* EMAIL */}
                <td className="p-[16px_15px] border-b border-[#f3f4f6] text-sm text-[#374151]">
                  {user.email}
                </td>

                {/* ROLE */}
                <td className="p-[16px_15px] border-b border-[#f3f4f6] text-sm text-[#374151]">
                  {user.role}
                </td>

                {/* STATUS */}
                <td className="p-[16px_15px] border-b border-[#f3f4f6]">

                  <span
                    className={`py-1.5 px-3 rounded-full text-xs font-semibold ${
                      user.status === "Active"
                        ? "bg-[#dcfce7] text-[#16a34a]"
                        : user.status === "Blocked"
                        ? "bg-[#fee2e2] text-[#dc2626]"
                        : "bg-[#e5e7eb] text-[#4b5563]"
                    }`}
                  >
                    {user.status}
                  </span>

                </td>

                {/* ACTION */}
                <td className="p-[16px_15px] border-b border-[#f3f4f6]">

                  <div className="flex gap-2">

                    {/* VIEW BUTTON */}
                    <button
                      onClick={() => handleView(user)}
                      className="bg-[#eff6ff] text-[#2563eb] py-[7px] px-3 rounded-lg text-[13px] font-semibold hover:bg-[#dbeafe]"
                    >
                      View
                    </button>

                    {/* BLOCK BUTTON */}
                    <button
                      onClick={() => handleBlock(user.id)}
                      className={`py-[7px] px-3 rounded-lg text-[13px] font-semibold transition ${
                        user.status === "Blocked"
                          ? "bg-[#dcfce7] text-[#16a34a] hover:bg-[#bbf7d0]"
                          : "bg-[#fee2e2] text-[#dc2626] hover:bg-[#fecaca]"
                      }`}
                    >
                      {user.status === "Blocked"
                        ? "Unblock"
                        : "Block"}
                    </button>

                  </div>

                </td>

              </tr>
            ))}

            {filteredUsers.length === 0 && (
              <tr>
                <td
                  colSpan={5}
                  className="text-center p-7 text-[#6b7280]"
                >
                  No users found
                </td>
              </tr>
            )}

          </tbody>

        </table>

      </div>

    </div>
  );
}