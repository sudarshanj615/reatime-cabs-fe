"use client";

import { useState } from "react";

export default function UsersPage() {
  const [search, setSearch] = useState("");
  const [roleFilter, setRoleFilter] = useState("All Roles");
  const [statusFilter, setStatusFilter] = useState("All Status");

  const users = [
    { id: "U101", name: "Aman Sharma", email: "aman@gmail.com", role: "Customer", status: "Active" },
    { id: "U102", name: "Neha Verma", email: "neha@gmail.com", role: "Customer", status: "Blocked" },
    { id: "U103", name: "Raj Mehta", email: "raj@gmail.com", role: "Driver", status: "Active" },
    { id: "U104", name: "John Doe", email: "john@gmail.com", role: "Customer", status: "Active" },
    { id: "U105", name: "Mike Ross", email: "mike@gmail.com", role: "Driver", status: "Inactive" },
  ];

  const query = search.trim().toLowerCase();

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

  const clearFilters = () => {
    setSearch("");
    setRoleFilter("All Roles");
    setStatusFilter("All Status");
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
              <th className="text-left p-[15px] text-sm text-[#6b7280]">User</th>
              <th className="text-left p-[15px] text-sm text-[#6b7280]">Email</th>
              <th className="text-left p-[15px] text-sm text-[#6b7280]">Role</th>
              <th className="text-left p-[15px] text-sm text-[#6b7280]">Status</th>
              <th className="text-left p-[15px] text-sm text-[#6b7280]">Action</th>
            </tr>
          </thead>

          <tbody>

            {filteredUsers.map((user) => (
              <tr key={user.id} className="hover:bg-[#fafafa] transition">

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
                  <span className={`py-1.5 px-3 rounded-full text-xs font-semibold ${
                    user.status === "Active"
                      ? "bg-[#dcfce7] text-[#16a34a]"
                      : user.status === "Blocked"
                      ? "bg-[#fee2e2] text-[#dc2626]"
                      : "bg-[#e5e7eb] text-[#4b5563]"
                  }`}>
                    {user.status}
                  </span>
                </td>

                {/* ACTION */}
                <td className="p-[16px_15px] border-b border-[#f3f4f6]">
                  <div className="flex gap-2">

                    <button className="bg-[#eff6ff] text-[#2563eb] py-[7px] px-3 rounded-lg text-[13px] font-semibold hover:bg-[#dbeafe]">
                      View
                    </button>

                    <button className="bg-[#fee2e2] text-[#dc2626] py-[7px] px-3 rounded-lg text-[13px] font-semibold hover:bg-[#fecaca]">
                      Block
                    </button>

                  </div>
                </td>

              </tr>
            ))}

            {filteredUsers.length === 0 && (
              <tr>
                <td colSpan={5} className="text-center p-7 text-[#6b7280]">
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