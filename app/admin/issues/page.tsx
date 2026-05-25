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

    const matchesStatus =
      statusFilter === "All Status" ||
      ticket.status === statusFilter;

    const matchesPriority =
      priorityFilter === "All Priority" ||
      ticket.priority === priorityFilter;

    return matchesSearch && matchesStatus && matchesPriority;
  });

  const clearFilters = () => {
    setSearch("");
    setStatusFilter("All Status");
    setPriorityFilter("All Priority");
  };

  return (
    <div>

      {/* HEADER */}
      <div className="flex justify-between items-center mb-7 gap-5 max-[768px]:flex-col max-[768px]:items-start [&>h1]:text-[30px] [&>h1]:font-bold [&>h1]:text-[#111827]">

        <div>
          <h1>Issues & Support</h1>

          <p className="text-[#6b7280]">
            Manage user complaints and system reports
          </p>
        </div>

        <button className="border-0 outline-none cursor-pointer py-[11px] px-[18px] rounded-[10px] bg-[#2563eb] text-white font-semibold transition duration-200 ease-in hover:bg-[#1d4ed8] hover:-translate-y-px">
          Export Report
        </button>

      </div>

      {/* KPI CARDS */}
      <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-5 mb-6 max-[768px]:grid-cols-1">

        <div className="bg-white rounded-[14px] p-6 shadow-[0_4px_10px_rgba(0,0,0,0.04)] border border-[#e5e7eb]">
          <p className="text-[#6b7280] mb-[10px] text-sm">
            Open Tickets
          </p>

          <h2 className="text-[28px] font-bold text-[#111827]">
            {
              tickets.filter(
                (ticket) => ticket.status === "Open"
              ).length
            }
          </h2>
        </div>

        <div className="bg-white rounded-[14px] p-6 shadow-[0_4px_10px_rgba(0,0,0,0.04)] border border-[#e5e7eb]">
          <p className="text-[#6b7280] mb-[10px] text-sm">
            In Progress
          </p>

          <h2 className="text-[28px] font-bold text-[#111827]">
            {
              tickets.filter(
                (ticket) => ticket.status === "In Progress"
              ).length
            }
          </h2>
        </div>

        <div className="bg-white rounded-[14px] p-6 shadow-[0_4px_10px_rgba(0,0,0,0.04)] border border-[#e5e7eb]">
          <p className="text-[#6b7280] mb-[10px] text-sm">
            Resolved
          </p>

          <h2 className="text-[28px] font-bold text-[#111827]">
            {
              tickets.filter(
                (ticket) => ticket.status === "Resolved"
              ).length
            }
          </h2>
        </div>

        <div className="bg-white rounded-[14px] p-6 shadow-[0_4px_10px_rgba(0,0,0,0.04)] border border-[#e5e7eb]">
          <p className="text-[#6b7280] mb-[10px] text-sm">
            Critical Issues
          </p>

          <h2 className="text-[28px] font-bold text-[#111827]">
            {
              tickets.filter(
                (ticket) => ticket.priority === "Critical"
              ).length
            }
          </h2>
        </div>

      </div>

      {/* FILTER BOX */}
      <div className="bg-white rounded-[14px] p-[22px] shadow-[0_4px_10px_rgba(0,0,0,0.04)] border border-[#e5e7eb] mb-6">

        <div className="flex flex-wrap gap-4 items-center">

          {/* SEARCH */}
          <div className="flex-1 min-w-[240px]">
            <input
              className="w-full border border-[#e5e7eb] rounded-[10px] py-3 px-4 bg-[#f9fafb] text-sm transition duration-200 ease-in focus:outline-none focus:border-[#2563eb] focus:bg-white focus:shadow-[0_0_0_4px_rgba(37,99,235,0.1)]"
              placeholder="Search ticket ID, user or issue..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          {/* STATUS */}
          <div className="min-w-[190px]">
            <select
              className="w-full border border-[#e5e7eb] rounded-[10px] py-3 px-4 bg-[#f9fafb] text-sm transition duration-200 ease-in focus:outline-none focus:border-[#2563eb] focus:bg-white focus:shadow-[0_0_0_4px_rgba(37,99,235,0.1)]"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option>All Status</option>
              <option>Open</option>
              <option>In Progress</option>
              <option>Resolved</option>
            </select>
          </div>

          {/* PRIORITY */}
          <div className="min-w-[190px]">
            <select
              className="w-full border border-[#e5e7eb] rounded-[10px] py-3 px-4 bg-[#f9fafb] text-sm transition duration-200 ease-in focus:outline-none focus:border-[#2563eb] focus:bg-white focus:shadow-[0_0_0_4px_rgba(37,99,235,0.1)]"
              value={priorityFilter}
              onChange={(e) => setPriorityFilter(e.target.value)}
            >
              <option>All Priority</option>
              <option>Critical</option>
              <option>High</option>
              <option>Medium</option>
              <option>Low</option>
            </select>
          </div>

          {/* CLEAR */}
          <button
            type="button"
            onClick={clearFilters}
            className="border-0 outline-none cursor-pointer py-3 px-5 rounded-[10px] bg-[#111827] text-white text-sm font-semibold transition duration-200 ease-in hover:bg-black"
          >
            Clear
          </button>

        </div>

      </div>

      {/* TABLE */}
      <div className="bg-white rounded-[14px] p-[22px] shadow-[0_4px_10px_rgba(0,0,0,0.04)] border border-[#e5e7eb] overflow-x-auto">

        <table className="w-full border-collapse max-[768px]:min-w-[900px] [&_thead]:bg-[#f9fafb] [&_th]:text-left [&_th]:p-[15px] [&_th]:text-sm [&_th]:font-semibold [&_th]:text-[#6b7280] [&_th]:border-b [&_th]:border-[#e5e7eb] [&_td]:p-[16px_15px] [&_td]:border-b [&_td]:border-[#f3f4f6] [&_td]:text-[#374151] [&_td]:text-sm [&_tr:hover]:bg-[#fafafa]">

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

                <td className="font-semibold text-[#111827]">
                  {ticket.id}
                </td>

                <td>{ticket.user}</td>

                <td className="max-w-[260px]">
                  {ticket.issue}
                </td>

                {/* PRIORITY */}
                <td>
                  <span
                    className={`py-1.5 px-3 rounded-full text-xs font-semibold ${
                      ticket.priority === "Critical"
                        ? "bg-[#fee2e2] text-[#dc2626]"
                        : ticket.priority === "High"
                        ? "bg-[#fef3c7] text-[#b45309]"
                        : ticket.priority === "Medium"
                        ? "bg-[#dbeafe] text-[#0284c7]"
                        : "bg-[#dcfce7] text-[#16a34a]"
                    }`}
                  >
                    {ticket.priority}
                  </span>
                </td>

                {/* STATUS */}
                <td>
                  <span
                    className={`py-1.5 px-3 rounded-full text-xs font-semibold ${
                      ticket.status === "Resolved"
                        ? "bg-[#dcfce7] text-[#16a34a]"
                        : ticket.status === "In Progress"
                        ? "bg-[#dbeafe] text-[#0284c7]"
                        : "bg-[#fef3c7] text-[#b45309]"
                    }`}
                  >
                    {ticket.status}
                  </span>
                </td>

                <td>{ticket.created}</td>

                {/* ACTION */}
                <td>
                  <button className="border-0 bg-[#eff6ff] text-[#2563eb] py-[7px] px-3 rounded-lg cursor-pointer text-[13px] font-semibold hover:bg-[#dbeafe]">
                    View
                  </button>
                </td>

              </tr>
            ))}

            {filteredTickets.length === 0 && (
              <tr>
                <td
                  colSpan={7}
                  className="text-center text-[#6b7280] !p-7"
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