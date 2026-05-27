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
  const [statusFilter, setStatusFilter] =
    useState("All Status");

  const [priorityFilter, setPriorityFilter] =
    useState("All Priority");

  // FILTER
  const filteredTickets = tickets.filter((t) => {
    const q = search.toLowerCase();

    const matchSearch =
      t.id.toLowerCase().includes(q) ||
      t.user.toLowerCase().includes(q) ||
      t.issue.toLowerCase().includes(q);

    const matchStatus =
      statusFilter === "All Status" ||
      t.status === statusFilter;

    const matchPriority =
      priorityFilter === "All Priority" ||
      t.priority === priorityFilter;

    return (
      matchSearch &&
      matchStatus &&
      matchPriority
    );
  });

  // CLEAR FILTERS
  const clearFilters = () => {
    setSearch("");
    setStatusFilter("All Status");
    setPriorityFilter("All Priority");
  };

  return (
    <div className="issues-page min-h-screen bg-[#fffdf3] px-6 py-6">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-7 gap-5 max-[768px]:flex-col max-[768px]:items-start">

        <div>

          <h1 className="text-[30px] font-bold text-[#111827]">
            Issues & Support
          </h1>

          <p className="text-[#6b7280]">
            Manage user complaints and system reports
          </p>

        </div>

        <button className="bg-[#facc15] text-black font-semibold px-[18px] py-[11px] rounded-[10px] hover:bg-[#eab308] transition">
          Export Report
        </button>

      </div>

      {/* FILTER BAR */}
      <div className="bg-white rounded-[14px] border border-[#e5e7eb] p-5 mb-6 shadow-[0_4px_10px_rgba(0,0,0,0.04)]">

        <div className="flex flex-wrap gap-3 items-center">

          {/* SEARCH */}
          <input
            type="text"
            placeholder="Search ticket, user or issue..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 min-w-[220px] border border-[#e5e7eb] rounded-[10px] px-4 py-3 bg-[#f9fafb] focus:outline-none focus:border-[#2563eb]"
          />

          {/* STATUS FILTER */}
          <select
            value={statusFilter}
            onChange={(e) =>
              setStatusFilter(e.target.value)
            }
            className="min-w-[180px] border border-[#e5e7eb] rounded-[10px] px-4 py-3 bg-[#f9fafb]"
          >
            <option>All Status</option>
            <option>Open</option>
            <option>In Progress</option>
            <option>Resolved</option>
          </select>

          {/* PRIORITY FILTER */}
          <select
            value={priorityFilter}
            onChange={(e) =>
              setPriorityFilter(e.target.value)
            }
            className="min-w-[180px] border border-[#e5e7eb] rounded-[10px] px-4 py-3 bg-[#f9fafb]"
          >
            <option>All Priority</option>
            <option>Critical</option>
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>

          {/* CLEAR BUTTON */}
          <button
            type="button"
            onClick={clearFilters}
            className="bg-[#111827] text-white px-5 py-3 rounded-[10px] hover:bg-black transition"
          >
            Clear
          </button>

        </div>

      </div>

      {/* TABLE */}
      <div className="bg-white rounded-[14px] p-[22px] shadow-[0_4px_10px_rgba(0,0,0,0.04)] border border-[#e5e7eb] overflow-x-auto">

        <table className="w-full border-collapse min-w-[850px]">

          <thead className="bg-[#f9fafb]">

            <tr>

              <th className="text-left p-[15px] text-sm text-[#6b7280]">
                Ticket ID
              </th>

              <th className="text-left p-[15px] text-sm text-[#6b7280]">
                User
              </th>

              <th className="text-left p-[15px] text-sm text-[#6b7280]">
                Issue
              </th>

              <th className="text-left p-[15px] text-sm text-[#6b7280]">
                Priority
              </th>

              <th className="text-left p-[15px] text-sm text-[#6b7280]">
                Status
              </th>

              <th className="text-left p-[15px] text-sm text-[#6b7280]">
                Created
              </th>

              <th className="text-left p-[15px] text-sm text-[#6b7280]">
                Action
              </th>

            </tr>

          </thead>

          <tbody>

            {filteredTickets.map((t) => (
              <tr
                key={t.id}
                className="border-b hover:bg-[#fafafa]"
              >

                {/* TICKET ID */}
                <td className="p-4 font-semibold text-[#111827]">
                  {t.id}
                </td>

                {/* USER */}
                <td className="p-4">
                  {t.user}
                </td>

                {/* ISSUE */}
                <td className="p-4 max-w-[260px]">
                  {t.issue}
                </td>

                {/* PRIORITY */}
                <td className="p-4">

                  <span
                    className={`text-xs px-3 py-1 rounded-full font-semibold ${t.priority === "Critical"
                        ? "bg-[#fee2e2] text-[#dc2626]"
                        : t.priority === "High"
                          ? "bg-[#fef3c7] text-[#b45309]"
                          : t.priority === "Medium"
                            ? "bg-[#dbeafe] text-[#0284c7]"
                            : "bg-[#dcfce7] text-[#16a34a]"
                      }`}
                  >
                    {t.priority}
                  </span>

                </td>

                {/* STATUS */}
                <td className="p-4">

                  <span
                    className={`text-xs px-3 py-1 rounded-full font-semibold ${t.status === "Resolved"
                        ? "bg-[#dcfce7] text-[#16a34a]"
                        : t.status === "In Progress"
                          ? "bg-[#dbeafe] text-[#0284c7]"
                          : "bg-[#fef3c7] text-[#b45309]"
                      }`}
                  >
                    {t.status}
                  </span>

                </td>

                {/* CREATED */}
                <td className="p-4">
                  {t.created}
                </td>

                {/* ACTION */}
                <td className="p-4">

                  <button className="bg-[#eff6ff] text-[#2563eb] px-3 py-2 rounded-lg text-sm hover:bg-[#dbeafe]">
                    View
                  </button>

                </td>

              </tr>
            ))}

            {/* EMPTY STATE */}
            {filteredTickets.length === 0 && (
              <tr>

                <td
                  colSpan={7}
                  className="text-center p-6 text-[#6b7280]"
                >
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