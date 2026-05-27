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

  const filteredTickets = tickets.filter((t) => {
    const q = search.toLowerCase();

    const matchSearch =
      t.id.toLowerCase().includes(q) ||
      t.user.toLowerCase().includes(q) ||
      t.issue.toLowerCase().includes(q);

    const matchStatus =
      statusFilter === "All Status" || t.status === statusFilter;

    const matchPriority =
      priorityFilter === "All Priority" || t.priority === priorityFilter;

    return matchSearch && matchStatus && matchPriority;
  });

  const clearFilters = () => {
    setSearch("");
    setStatusFilter("All Status");
    setPriorityFilter("All Priority");
  };

  return (
    <div className="issues-page min-h-screen bg-[#fffdf3] px-6 py-6">
      <div className="flex justify-between items-center mb-7 gap-5 max-[768px]:flex-col max-[768px]:items-start [&>h1]:text-[30px] [&>h1]:font-bold [&>h1]:text-[#111827]">

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

      <div className="bg-white rounded-[14px] p-[22px] shadow-[0_4px_10px_rgba(0,0,0,0.04)] border border-[#e5e7eb] ">
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

            {filteredTickets.map((t) => (
              <tr key={t.id} className="border-b hover:bg-[#fafafa]">

                <td className="p-4 font-semibold text-[#111827]">
                  {t.id}
                </td>

                <td className="p-4">{t.user}</td>

                <td className="p-4 max-w-[260px]">
                  {t.issue}
                </td>

                {/* PRIORITY */}
                <td className="p-4">
                  <span
                    className={`text-xs px-3 py-1 rounded-full font-semibold ${
                      t.priority === "Critical"
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
                    className={`text-xs px-3 py-1 rounded-full font-semibold ${
                      t.status === "Resolved"
                        ? "bg-[#dcfce7] text-[#16a34a]"
                        : t.status === "In Progress"
                        ? "bg-[#dbeafe] text-[#0284c7]"
                        : "bg-[#fef3c7] text-[#b45309]"
                    }`}
                  >
                    {t.status}
                  </span>
                </td>

                <td className="p-4">{t.created}</td>

                <td className="p-4">
                  <button className="bg-[#eff6ff] text-[#2563eb] px-3 py-2 rounded-lg text-sm hover:bg-[#dbeafe]">
                    View
                  </button>
                </td>

              </tr>
            ))}

            {filteredTickets.length === 0 && (
              <tr>
                <td colSpan={7} className="text-center p-6 text-[#6b7280]">
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