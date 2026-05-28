"use client";

import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import Swal from "sweetalert2";

export default function IssuesPage() {
  const [tickets, setTickets] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] =
    useState("All Status");
  const [priorityFilter, setPriorityFilter] =
    useState("All Priority");

  // ✅ PAGINATION
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  // ✅ FETCH FROM BACKEND
  const fetchTickets = async () => {
    try {
      const res = await axios.get(
        "http://192.168.1.23:8081/issues"
      );

      setTickets(res.data || []);
    } catch (err) {
      Swal.fire(
        "Error",
        "Failed to fetch tickets",
        "error"
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTickets();
  }, []);

  // ✅ FILTERS
  const q = search.toLowerCase();

  const filteredTickets = tickets.filter((t) => {
    const matchSearch =
      (t.id || "")
        .toLowerCase()
        .includes(q) ||
      (t.user || "")
        .toLowerCase()
        .includes(q) ||
      (t.issue || "")
        .toLowerCase()
        .includes(q);

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

  // ✅ TOTAL PAGES
  const totalPages = Math.ceil(
    filteredTickets.length / pageSize
  );

  // ✅ PAGINATION DATA
  const paginatedTickets = useMemo(() => {
    const start =
      (currentPage - 1) * pageSize;

    return filteredTickets.slice(
      start,
      start + pageSize
    );
  }, [filteredTickets, currentPage, pageSize]);

  // ✅ CLEAR FILTERS
  const clearFilters = () => {
    setSearch("");
    setStatusFilter("All Status");
    setPriorityFilter("All Priority");
    setCurrentPage(1);
  };

  // ✅ VIEW TICKET
  const handleView = (ticket: any) => {
    Swal.fire({
      title: ticket.issue,

      html: `
        <div style="text-align:left; line-height:1.9">

          <p><b>Ticket ID:</b> ${ticket.id}</p>
          <p><b>User:</b> ${ticket.user}</p>
          <p><b>Email:</b> ${ticket.email || "N/A"}</p>
          <p><b>Phone:</b> ${ticket.phone || "N/A"}</p>
          <p><b>City:</b> ${ticket.city || "N/A"}</p>
          <p><b>Issue:</b> ${ticket.issue}</p>
          <p><b>Description:</b> ${ticket.description || "N/A"}</p>
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

  // ✅ RESOLVE TICKET
  const handleResolve = async (id: string) => {
    const currentTicket = tickets.find(
      (t) => t.id === id
    );

    if (!currentTicket) return;

    const result = await Swal.fire({
      title: "Resolve Ticket?",
      text: `Are you sure you want to resolve ${id}?`,
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#16a34a",
      cancelButtonColor: "#6b7280",
      confirmButtonText: "Yes, Resolve",
    });

    if (!result.isConfirmed) return;

    setTickets((prev) =>
      prev.map((t) =>
        t.id === id
          ? { ...t, status: "Resolved" }
          : t
      )
    );

    Swal.fire({
      icon: "success",
      title: "Ticket Resolved",
      timer: 1800,
      showConfirmButton: false,
    });
  };

  // ✅ LOADING
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen text-xl font-bold">
        Loading tickets...
      </div>
    );
  }

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

          <button className="py-[11px] px-[18px] rounded-[10px] bg-[#facc15] text-black font-semibold hover:bg-[#eab308] transition">
            Export Report
          </button>

          <div className="w-[42px] h-[42px] rounded-full bg-[linear-gradient(135deg,#facc15,#eab308)]" />

        </div>

      </div>

      {/* FILTER BAR */}
      <div className="bg-white rounded-[16px] border border-[#f0e6c2] p-5 mb-6">

        <div className="flex flex-wrap gap-3.5 items-center">

          {/* SEARCH */}
          <input
            placeholder="Search ticket, user or issue..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setCurrentPage(1);
            }}
            className="flex-1 min-w-[220px] border border-[#e5e7eb] rounded-[10px] py-3 px-3.5 text-sm focus:outline-none focus:border-[#2563eb] focus:shadow-[0_0_0_4px_rgba(37,99,235,0.1)]"
          />

          {/* STATUS */}
          <select
            value={statusFilter}
            onChange={(e) => {
              setStatusFilter(e.target.value);
              setCurrentPage(1);
            }}
            className="min-w-[180px] border border-[#e5e7eb] rounded-[10px] py-3 px-3.5 text-sm focus:outline-none focus:border-[#2563eb] focus:shadow-[0_0_0_4px_rgba(37,99,235,0.1)]"
          >
            <option>All Status</option>
            <option>Open</option>
            <option>In Progress</option>
            <option>Resolved</option>
          </select>

          {/* PRIORITY */}
          <select
            value={priorityFilter}
            onChange={(e) => {
              setPriorityFilter(e.target.value);
              setCurrentPage(1);
            }}
            className="min-w-[180px] border border-[#e5e7eb] rounded-[10px] py-3 px-3.5 text-sm focus:outline-none focus:border-[#2563eb] focus:shadow-[0_0_0_4px_rgba(37,99,235,0.1)]"
          >
            <option>All Priority</option>
            <option>Critical</option>
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>

          {/* CLEAR */}
          <button
            onClick={clearFilters}
            className="bg-[#111827] text-white px-5 py-3 rounded-[10px] focus:outline-none focus:shadow-[0_0_0_4px_rgba(37,99,235,0.1)]"
          >
            Clear
          </button>

        </div>

      </div>

      {/* TABLE */}
      <div className="bg-white rounded-[14px] p-[22px] border border-[#e5e7eb] overflow-x-auto">

        <table className="w-full min-w-[950px]">

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

            {paginatedTickets.map((t, index) => (
              <tr key={t.id || index} className="hover:bg-[#fafafa]">

                <td className="p-[16px_15px] font-semibold">
                  {t.id}
                </td>

                <td className="p-[16px_15px]">
                  {t.user}
                </td>

                <td className="p-[16px_15px]">
                  {t.issue}
                </td>

                <td className="p-[16px_15px]">
                  {t.priority}
                </td>

                <td className="p-[16px_15px]">
                  {t.status}
                </td>

                <td className="p-[16px_15px]">
                  {t.created}
                </td>

                <td className="p-[16px_15px]">
                  <div className="flex gap-2">

                    <button
                      onClick={() => handleView(t)}
                      className="bg-[#eff6ff] text-[#2563eb] px-3 py-2 rounded-lg text-sm"
                    >
                      View
                    </button>

                    {t.status !== "Resolved" && (
                      <button
                        onClick={() =>
                          handleResolve(t.id)
                        }
                        className="bg-[#dcfce7] text-[#16a34a] px-3 py-2 rounded-lg text-sm"
                      >
                        Resolve
                      </button>
                    )}

                  </div>
                </td>

              </tr>
            ))}

            {paginatedTickets.length === 0 && (
              <tr>
                <td
                  colSpan={7}
                  className="text-center p-7 text-[#6b7280]"
                >
                  No tickets found.
                </td>
              </tr>
            )}

          </tbody>

        </table>

        {/* PAGINATION */}
        <div className="flex flex-wrap justify-between items-center p-4 border-t bg-[#f9fafb] gap-4">

          <div className="flex items-center gap-2">

            <span className="text-sm text-[#6b7280]">
              Show
            </span>

            <select
              value={pageSize}
              onChange={(e) =>
                setPageSize(Number(e.target.value))
              }
              className="border rounded px-2 py-1 focus:outline-none focus:border-[#2563eb] focus:shadow-[0_0_0_4px_rgba(37,99,235,0.1)]"
            >
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={25}>25</option>
              <option value={50}>50</option>
            </select>

            <span className="text-sm text-[#6b7280]">
              entries
            </span>

          </div>

          <div className="flex gap-2 flex-wrap">

            <button
              disabled={currentPage === 1}
              onClick={() =>
                setCurrentPage((p) => p - 1)
              }
              className="px-3 py-1 border rounded disabled:opacity-50 focus:outline-none focus:border-[#2563eb] focus:shadow-[0_0_0_4px_rgba(37,99,235,0.1)]"
            >
              Prev
            </button>

            {Array.from(
              { length: totalPages },
              (_, i) => (
                <button
                  key={i}
                  onClick={() =>
                    setCurrentPage(i + 1)
                  }
                  className={`px-3 py-1 border rounded ${
                    currentPage === i + 1
                      ? "bg-blue-500 text-white"
                      : ""
                  }`}
                >
                  {i + 1}
                </button>
              )
            )}

            <button
              disabled={
                currentPage === totalPages ||
                totalPages === 0
              }
              onClick={() =>
                setCurrentPage((p) => p + 1)
              }
              className="px-3 py-1 border rounded disabled:opacity-50"
            >
              Next
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}