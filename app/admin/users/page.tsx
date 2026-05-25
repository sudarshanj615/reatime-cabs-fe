"use client";

import { useState } from "react";

export default function UsersPage() {
  const [search, setSearch] = useState("");
  const [roleFilter, setRoleFilter] =
    useState("All Roles");

  const [statusFilter, setStatusFilter] =
    useState("All Status");

  const users = [
    {
      id: "U101",
      name: "Aman Sharma",
      email: "aman@gmail.com",
      role: "Customer",
      status: "Active",
    },

    {
      id: "U102",
      name: "Neha Verma",
      email: "neha@gmail.com",
      role: "Customer",
      status: "Blocked",
    },

    {
      id: "U103",
      name: "Raj Mehta",
      email: "raj@gmail.com",
      role: "Driver",
      status: "Active",
    },

    {
      id: "U104",
      name: "John Doe",
      email: "john@gmail.com",
      role: "Customer",
      status: "Active",
    },

    {
      id: "U105",
      name: "Mike Ross",
      email: "mike@gmail.com",
      role: "Driver",
      status: "Inactive",
    },
  ];

  const filteredUsers = users.filter((u) => {
    const query =
      search.trim().toLowerCase();

    const matchesSearch =
      u.name
        .toLowerCase()
        .includes(query) ||
      u.email
        .toLowerCase()
        .includes(query) ||
      u.id
        .toLowerCase()
        .includes(query);

    const matchesRole =
      roleFilter === "All Roles" ||
      u.role === roleFilter;

    const matchesStatus =
      statusFilter === "All Status" ||
      u.status === statusFilter;

    return (
      matchesSearch &&
      matchesRole &&
      matchesStatus
    );
  });

  const clearFilters = () => {
    setSearch("");
    setRoleFilter("All Roles");
    setStatusFilter("All Status");
  };

  return (
    <div className="users-page">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-7 gap-5 max-[768px]:flex-col max-[768px]:items-start">

        <h1 className="text-[30px] font-bold text-[#111827]">
          Users
        </h1>

        <div className="flex items-center gap-4">

          <button className="border-0 outline-none cursor-pointer py-[11px] px-[18px] rounded-[10px] bg-[#2563eb] text-white font-semibold transition duration-200 ease-in hover:bg-[#1d4ed8] hover:-translate-y-px">
            Export Users
          </button>

          <div className="w-[42px] h-[42px] rounded-full bg-[linear-gradient(135deg,#2563eb,#60a5fa)]" />

        </div>
      </div>

      {/* FILTER BOX */}
      <div className="bg-white border border-[#e5e7eb] rounded-[16px] p-5 shadow-[0_4px_12px_rgba(0,0,0,0.05)] mb-6">

        <div className="flex items-center justify-between mb-5 max-[768px]:flex-col max-[768px]:items-start gap-3">

          <div>
            <h2 className="text-lg font-bold text-[#111827]">
              Filter Bar
            </h2>

            <p className="text-sm text-[#6b7280] mt-1">
              Search and filter users
            </p>
          </div>

          <button
            type="button"
            onClick={clearFilters}
            className="border-0 outline-none cursor-pointer py-[10px] px-[16px] rounded-[10px] bg-[#111827] text-white text-sm font-semibold hover:bg-black transition"
          >
            Clear Filters
          </button>

        </div>

        {/* FILTER ROW */}
        <div className="grid grid-cols-3 gap-4 max-[900px]:grid-cols-1">

          {/* SEARCH */}
          <div className="flex flex-col gap-2">

            <label className="text-sm font-semibold text-[#374151]">
              Search
            </label>

            <input
              className="border border-[#e5e7eb] rounded-[12px] py-3 px-4 bg-[#fafafa] text-sm transition duration-200 ease-in focus:outline-none focus:border-[#2563eb] focus:bg-white focus:shadow-[0_0_0_4px_rgba(37,99,235,0.1)]"
              placeholder="Search users..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
            />

          </div>

          {/* ROLE FILTER */}
          <div className="flex flex-col gap-2">

            <label className="text-sm font-semibold text-[#374151]">
              All Roles
            </label>

            <select
              className="border border-[#e5e7eb] rounded-[12px] py-3 px-4 bg-[#fafafa] text-sm transition duration-200 ease-in focus:outline-none focus:border-[#2563eb] focus:bg-white focus:shadow-[0_0_0_4px_rgba(37,99,235,0.1)]"
              value={roleFilter}
              onChange={(e) =>
                setRoleFilter(
                  e.target.value
                )
              }
            >
              <option>
                All Roles
              </option>

              <option>
                Customer
              </option>

              <option>
                Driver
              </option>
            </select>

          </div>

          {/* STATUS FILTER */}
          <div className="flex flex-col gap-2">

            <label className="text-sm font-semibold text-[#374151]">
              All Status
            </label>

            <select
              className="border border-[#e5e7eb] rounded-[12px] py-3 px-4 bg-[#fafafa] text-sm transition duration-200 ease-in focus:outline-none focus:border-[#2563eb] focus:bg-white focus:shadow-[0_0_0_4px_rgba(37,99,235,0.1)]"
              value={statusFilter}
              onChange={(e) =>
                setStatusFilter(
                  e.target.value
                )
              }
            >
              <option>
                All Status
              </option>

              <option>
                Active
              </option>

              <option>
                Blocked
              </option>

              <option>
                Inactive
              </option>
            </select>

          </div>

        </div>
      </div>

      {/* TABLE */}
      <div className="bg-white rounded-[14px] p-[22px] shadow-[0_4px_10px_rgba(0,0,0,0.04)] border border-[#e5e7eb] overflow-x-auto">

        <table className="w-full border-collapse min-w-[750px]">

          <thead className="bg-[#f9fafb]">

            <tr>

              <th className="text-left p-[15px] text-sm text-[#6b7280] border-b border-[#e5e7eb]">
                User
              </th>

              <th className="text-left p-[15px] text-sm text-[#6b7280] border-b border-[#e5e7eb]">
                Email
              </th>

              <th className="text-left p-[15px] text-sm text-[#6b7280] border-b border-[#e5e7eb]">
                Role
              </th>

              <th className="text-left p-[15px] text-sm text-[#6b7280] border-b border-[#e5e7eb]">
                Status
              </th>

              <th className="text-left p-[15px] text-sm text-[#6b7280] border-b border-[#e5e7eb]">
                Action
              </th>

            </tr>
          </thead>

          <tbody>

            {filteredUsers.map((user) => (

              <tr
                key={user.id}
                className="hover:bg-[#fafafa]"
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
                      user.status ===
                      "Active"
                        ? "bg-[#dcfce7] text-[#16a34a]"
                        : user.status ===
                          "Blocked"
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

                    <button className="border-0 bg-[#eff6ff] text-[#2563eb] py-[7px] px-3 rounded-lg cursor-pointer text-[13px] font-semibold hover:bg-[#dbeafe]">
                      View
                    </button>

                    <button className="border-0 bg-[#fee2e2] text-[#dc2626] py-[7px] px-3 rounded-lg cursor-pointer text-[13px] font-semibold hover:bg-[#fecaca]">
                      Block
                    </button>

                  </div>

                </td>

              </tr>
            ))}

            {filteredUsers.length === 0 && (

              <tr>

                <td
                  colSpan={5}
                  className="text-center text-[#6b7280] p-7"
                >
                  No users match these
                  filters.
                </td>

              </tr>
            )}

          </tbody>
        </table>
      </div>
    </div>
  );
}