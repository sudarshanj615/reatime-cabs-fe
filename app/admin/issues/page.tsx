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
      <div className="flex justify-between items-center mb-7 gap-5 max-[768px]:flex-col max-[768px]:items-start [&>h1]:text-[30px] [&>h1]:font-bold [&>h1]:text-[#111827]">
        <div>
          <h1>Issues & Support</h1>
          <p className="text-[#6b7280]">Manage user complaints and system reports</p>
        </div>

        <button className="border-0 outline-none cursor-pointer py-[11px] px-[18px] rounded-[10px] bg-[#2563eb] text-white font-semibold transition duration-200 ease-in hover:bg-[#1d4ed8] hover:-translate-y-px">Export Report</button>
      </div>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-5 mb-6 max-[768px]:grid-cols-1">
        <div className="bg-white rounded-[14px] p-6 shadow-[0_4px_10px_rgba(0,0,0,0.04)] border border-[#e5e7eb]">
          <p className="text-[#6b7280] mb-[10px] text-sm">Open Tickets</p>
          <h2 className="text-[28px] font-bold text-[#111827]">
            {tickets.filter((ticket) => ticket.status === "Open").length}
          </h2>
        </div>

        <div className="bg-white rounded-[14px] p-6 shadow-[0_4px_10px_rgba(0,0,0,0.04)] border border-[#e5e7eb]">
          <p className="text-[#6b7280] mb-[10px] text-sm">In Progress</p>
          <h2 className="text-[28px] font-bold text-[#111827]">
            {tickets.filter((ticket) => ticket.status === "In Progress").length}
          </h2>
        </div>

        <div className="bg-white rounded-[14px] p-6 shadow-[0_4px_10px_rgba(0,0,0,0.04)] border border-[#e5e7eb]">
          <p className="text-[#6b7280] mb-[10px] text-sm">Resolved</p>
          <h2 className="text-[28px] font-bold text-[#111827]">
            {tickets.filter((ticket) => ticket.status === "Resolved").length}
          </h2>
        </div>

        <div className="bg-white rounded-[14px] p-6 shadow-[0_4px_10px_rgba(0,0,0,0.04)] border border-[#e5e7eb]">
          <p className="text-[#6b7280] mb-[10px] text-sm">Critical Issues</p>
          <h2 className="text-[28px] font-bold text-[#111827]">
            {tickets.filter((ticket) => ticket.priority === "Critical").length}
          </h2>
        </div>
      </div>

      <div className="bg-white rounded-[14px] p-[22px] shadow-[0_4px_10px_rgba(0,0,0,0.04)] border border-[#e5e7eb] flex flex-wrap gap-3.5 mb-6 items-center">
        <input
          className="border border-[#e5e7eb] rounded-[10px] py-3 px-3.5 bg-white text-sm w-full min-w-[180px] transition duration-200 ease-in focus:outline-none focus:border-[#2563eb] focus:shadow-[0_0_0_4px_rgba(37,99,235,0.1)]"
          placeholder="Search ticket ID, user or issue..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="border border-[#e5e7eb] rounded-[10px] py-3 px-3.5 bg-white text-sm w-full min-w-[180px] transition duration-200 ease-in focus:outline-none focus:border-[#2563eb] focus:shadow-[0_0_0_4px_rgba(37,99,235,0.1)]"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option>All Status</option>
          <option>Open</option>
          <option>In Progress</option>
          <option>Resolved</option>
        </select>

        <select
          className="border border-[#e5e7eb] rounded-[10px] py-3 px-3.5 bg-white text-sm w-full min-w-[180px] transition duration-200 ease-in focus:outline-none focus:border-[#2563eb] focus:shadow-[0_0_0_4px_rgba(37,99,235,0.1)]"
          value={priorityFilter}
          onChange={(e) => setPriorityFilter(e.target.value)}
        >
          <option>All Priority</option>
          <option>Critical</option>
          <option>High</option>
          <option>Medium</option>
          <option>Low</option>
        </select>

        <button className="border-0 outline-none cursor-pointer py-[11px] px-[18px] rounded-[10px] bg-[#2563eb] text-white font-semibold transition duration-200 ease-in hover:bg-[#1d4ed8] hover:-translate-y-px bg-[#111827] hover:bg-black" type="button" onClick={clearFilters}>
          Clear
        </button>
      </div>

      <div className="table-wrapper">
        <table className="w-full border-collapse max-[768px]:min-w-[750px] [&_thead]:bg-[#f9fafb] [&_th]:text-left [&_th]:p-[15px] [&_th]:text-sm [&_th]:text-[#6b7280] [&_th]:border-b [&_th]:border-[#e5e7eb] [&_td]:p-[16px_15px] [&_td]:border-b [&_td]:border-[#f3f4f6] [&_td]:text-[#374151] [&_td]:text-sm [&_tr:hover]:bg-[#fafafa] [&_.status]:py-1.5 [&_.status]:px-3 [&_.status]:rounded-full [&_.status]:text-xs [&_.status]:font-semibold [&_.active]:bg-[#dcfce7] [&_.active]:text-[#16a34a] [&_.online]:bg-[#dcfce7] [&_.online]:text-[#16a34a] [&_.completed]:bg-[#dcfce7] [&_.completed]:text-[#16a34a] [&_.success]:bg-[#dcfce7] [&_.success]:text-[#16a34a] [&_.pending]:bg-[#fef3c7] [&_.pending]:text-[#b45309] [&_.processing]:bg-[#fef3c7] [&_.processing]:text-[#b45309] [&_.cancelled]:bg-[#fee2e2] [&_.cancelled]:text-[#dc2626] [&_.blocked]:bg-[#fee2e2] [&_.blocked]:text-[#dc2626] [&_.ongoing]:bg-[#dbeafe] [&_.ongoing]:text-[#0284c7] [&_.info]:bg-[#dbeafe] [&_.info]:text-[#0284c7] [&_.busy]:bg-[#dbeafe] [&_.busy]:text-[#0284c7] [&_.offline]:bg-[#e5e7eb] [&_.offline]:text-[#4b5563] [&_.inactive]:bg-[#e5e7eb] [&_.inactive]:text-[#4b5563]">
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
                  <span className="py-1.5 px-3 rounded-full text-xs font-semibold bg-[#dcfce7] text-[#16a34a]">{ticket.priority}</span>
                </td>
                <td>
                  <span className={`status ${ticket.status.toLowerCase().replace(" ", "-")}`}>
                    {ticket.status}
                  </span>
                </td>
                <td>{ticket.created}</td>
                <td>
                  <button className="border-0 outline-none cursor-pointer py-[11px] px-[18px] rounded-[10px] bg-[#2563eb] text-white font-semibold transition duration-200 ease-in hover:bg-[#1d4ed8] hover:-translate-y-px bg-[#111827] hover:bg-black">View</button>
                </td>
              </tr>
            ))}

            {filteredTickets.length === 0 && (
              <tr>
                <td colSpan={7} className="text-center text-[#6b7280] !p-7">
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
