"use client";

import { useState } from "react";
import Swal from "sweetalert2";

export default function IssuesPage() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] =
    useState("All Status");

  const [priorityFilter, setPriorityFilter] =
    useState("All Priority");

  // TICKETS STATE
  const [tickets, setTickets] = useState([
    {
      id: "#T1001",
      user: "Rahul Sharma",
      issue: "Payment deducted but ride not confirmed",
      priority: "High",
      status: "Open",
      created: "2 hrs ago",
      email: "rahul@gmail.com",
      phone: "+91 9876543210",
      city: "Aurangabad",
      description:
        "User payment was deducted but ride booking failed due to server timeout.",
    },
    {
      id: "#T1002",
      user: "Anjali Verma",
      issue: "Driver cancelled mid ride",
      priority: "Medium",
      status: "In Progress",
      created: "5 hrs ago",
      email: "anjali@gmail.com",
      phone: "+91 9876543222",
      city: "Pune",
      description:
        "Driver cancelled the ride after pickup causing inconvenience to customer.",
    },
    {
      id: "#T1003",
      user: "Amit Singh",
      issue: "App crash during booking",
      priority: "Critical",
      status: "Open",
      created: "1 day ago",
      email: "amit@gmail.com",
      phone: "+91 9876543233",
      city: "Mumbai",
      description:
        "Application crashed repeatedly during ride confirmation process.",
    },
    {
      id: "#T1004",
      user: "Neha Gupta",
      issue: "Refund not received",
      priority: "Low",
      status: "Resolved",
      created: "2 days ago",
      email: "neha@gmail.com",
      phone: "+91 9876543244",
      city: "Delhi",
      description:
        "Refund was delayed after ride cancellation but later resolved.",
    },
  ]);

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

  // VIEW ISSUE
  const handleView = (ticket: any) => {
    Swal.fire({
      title: ticket.issue,

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
              ${ticket.user.charAt(0)}
            </div>
          </div>

          <p><b>Ticket ID:</b> ${ticket.id}</p>

          <p><b>User:</b> ${ticket.user}</p>

          <p><b>Email:</b> ${ticket.email}</p>

          <p><b>Phone:</b> ${ticket.phone}</p>

          <p><b>City:</b> ${ticket.city}</p>

          <p><b>Issue:</b> ${ticket.issue}</p>

          <p><b>Description:</b> ${ticket.description}</p>

          <p><b>Priority:</b> ${ticket.priority}</p>

          <p><b>Status:</b> ${ticket.status}</p>

          <p><b>Created:</b> ${ticket.created}</p>

        </div>
      `,

      confirmButtonText: "Close",
      confirmButtonColor: "#facc15",
      width: 540,
    });
  };

  // RESOLVE ISSUE
  const handleResolve = async (id: string) => {
    const currentTicket = tickets.find(
      (t) => t.id === id
    );

    if (!currentTicket) return;

    const result = await Swal.fire({
      title: "Resolve Ticket?",
      text: `Are you sure you want to resolve ${currentTicket.id}?`,
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#16a34a",
      cancelButtonColor: "#6b7280",
      confirmButtonText: "Yes, Resolve",
      cancelButtonText: "Cancel",
    });

    if (!result.isConfirmed) return;

    setTickets((prev) =>
      prev.map((ticket) =>
        ticket.id === id
          ? {
              ...ticket,
              status: "Resolved",
            }
          : ticket
      )
    );

    Swal.fire({
      icon: "success",
      title: "Ticket Resolved Successfully",
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
            Issues & Support
          </h1>

          <p className="text-[#6b7280]">
            Manage user complaints and system reports
          </p>

        </div>

        <div className="flex items-center gap-4 max-[768px]:w-full max-[768px]:justify-between">

          <button className="border-0 cursor-pointer py-[11px] px-[18px] rounded-[10px] bg-[#facc15] text-black font-semibold hover:bg-[#eab308] hover:-translate-y-px transition">
            Export Report
          </button>

          <div className="w-[42px] h-[42px] rounded-full bg-[linear-gradient(135deg,#facc15,#eab308)]" />

        </div>

      </div>

      {/* FILTER BAR */}
      <div className="bg-white rounded-[16px] border border-[#f0e6c2] shadow-[0_4px_12px_rgba(0,0,0,0.04)] p-5 mb-6">

        <div className="flex flex-wrap gap-3.5 items-center">

          {/* SEARCH */}
          <input
            type="text"
            placeholder="Search ticket, user or issue..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 min-w-[220px] border border-[#e5e7eb] rounded-[10px] py-3 px-3.5 text-sm focus:outline-none focus:border-[#2563eb] focus:shadow-[0_0_0_4px_rgba(37,99,235,0.1)]"
          />

          {/* STATUS FILTER */}
          <select
            value={statusFilter}
            onChange={(e) =>
              setStatusFilter(e.target.value)
            }
            className="min-w-[180px] border border-[#e5e7eb] rounded-[10px] py-3 px-3.5 text-sm"
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
            className="min-w-[180px] border border-[#e5e7eb] rounded-[10px] py-3 px-3.5 text-sm"
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
            className="border-0 cursor-pointer py-[11px] px-[18px] rounded-[10px] bg-[#111827] text-white font-semibold hover:bg-black transition"
          >
            Clear
          </button>

        </div>

      </div>

      {/* TABLE */}
      <div className="bg-white rounded-[14px] p-[22px] shadow-[0_4px_10px_rgba(0,0,0,0.04)] border border-[#e5e7eb] overflow-x-auto">

        <table className="w-full border-collapse min-w-[950px]">

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
                className="hover:bg-[#fafafa] transition"
              >

                {/* TICKET ID */}
                <td className="p-[16px_15px] border-b border-[#f3f4f6] font-semibold text-[#111827]">
                  {t.id}
                </td>

                {/* USER */}
                <td className="p-[16px_15px] border-b border-[#f3f4f6]">
                  {t.user}
                </td>

                {/* ISSUE */}
                <td className="p-[16px_15px] border-b border-[#f3f4f6] max-w-[260px]">
                  {t.issue}
                </td>

                {/* PRIORITY */}
                <td className="p-[16px_15px] border-b border-[#f3f4f6]">

                  <span
                    className={`py-1.5 px-3 rounded-full text-xs font-semibold ${
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
                <td className="p-[16px_15px] border-b border-[#f3f4f6]">

                  <span
                    className={`py-1.5 px-3 rounded-full text-xs font-semibold ${
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

                {/* CREATED */}
                <td className="p-[16px_15px] border-b border-[#f3f4f6]">
                  {t.created}
                </td>

                {/* ACTION */}
                <td className="p-[16px_15px] border-b border-[#f3f4f6]">

                  <div className="flex gap-2 flex-wrap">

                    {/* VIEW BUTTON */}
                    <button
                      onClick={() => handleView(t)}
                      className="bg-[#eff6ff] text-[#2563eb] py-[7px] px-3 rounded-lg text-[13px] font-semibold hover:bg-[#dbeafe]"
                    >
                      View
                    </button>

                    {/* RESOLVE BUTTON */}
                    {t.status !== "Resolved" && (
                      <button
                        onClick={() =>
                          handleResolve(t.id)
                        }
                        className="bg-[#dcfce7] text-[#16a34a] py-[7px] px-3 rounded-lg text-[13px] font-semibold hover:bg-[#bbf7d0]"
                      >
                        Resolve
                      </button>
                    )}

                  </div>

                </td>

              </tr>
            ))}

            {/* EMPTY STATE */}
            {filteredTickets.length === 0 && (
              <tr>

                <td
                  colSpan={7}
                  className="text-center p-7 text-[#6b7280]"
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