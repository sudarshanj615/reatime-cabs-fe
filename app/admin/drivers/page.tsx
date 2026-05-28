"use client";

import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import Swal from "sweetalert2";

export default function DriversPage() {
  const [drivers, setDrivers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All Status");
  const [verificationFilter, setVerificationFilter] =
    useState("All Verification");

  // ✅ PAGINATION STATES
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  // ✅ FETCH DRIVERS FROM BACKEND
  const fetchDrivers = async () => {
    try {
      const res = await axios.get(
        "http://192.168.1.23:8081/drivers"
      );

      setDrivers(res.data || []);
    } catch (err) {
      Swal.fire(
        "Error",
        "Failed to fetch drivers",
        "error"
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDrivers();
  }, []);

  // ✅ FILTERED DATA
  const filtered = drivers.filter((d) => {
    const verification = d.verified
      ? "Verified"
      : "Pending";

    const q = search.toLowerCase();

    const matchSearch =
      (d.name || "")
        .toLowerCase()
        .includes(q) ||
      (d.email || "")
        .toLowerCase()
        .includes(q) ||
      (d.id || "")
        .toString()
        .toLowerCase()
        .includes(q);

    const matchStatus =
      statusFilter === "All Status" ||
      d.status === statusFilter;

    const matchVerification =
      verificationFilter === "All Verification" ||
      verification === verificationFilter;

    return (
      matchSearch &&
      matchStatus &&
      matchVerification
    );
  });

  // ✅ TOTAL PAGES
  const totalPages = Math.ceil(
    filtered.length / pageSize
  );

  // ✅ PAGINATED DATA
  const paginatedDrivers = useMemo(() => {
    const start =
      (currentPage - 1) * pageSize;

    return filtered.slice(
      start,
      start + pageSize
    );
  }, [filtered, currentPage, pageSize]);

  // ✅ CLEAR FILTERS
  const clearFilters = () => {
    setSearch("");
    setStatusFilter("All Status");
    setVerificationFilter(
      "All Verification"
    );
    setCurrentPage(1);
  };

  // ✅ CHANGE PAGE SIZE
  const handlePageSizeChange = (
    size: number
  ) => {
    setPageSize(size);
    setCurrentPage(1);
  };

  // ✅ STATUS STYLE
  const statusStyle = (status: string) => {
    if (status === "Online")
      return "bg-[#dcfce7] text-[#16a34a]";

    if (status === "Busy")
      return "bg-[#dbeafe] text-[#0284c7]";

    return "bg-[#e5e7eb] text-[#4b5563]";
  };

  // ✅ LOADING
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen text-xl font-bold">
        Loading drivers...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fffdf3] px-6 py-6">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-7 max-[768px]:flex-col max-[768px]:items-start gap-4">

        <div>
          <h1 className="text-[30px] font-bold text-[#111827]">
            Drivers
          </h1>

          <p className="text-[#6b7280]">
            Manage all registered drivers
          </p>
        </div>

        <div className="flex items-center gap-4 max-[768px]:w-full max-[768px]:justify-between">

          <button className="bg-[#facc15] text-black font-semibold px-[18px] py-[11px] rounded-[10px] hover:bg-[#eab308] transition">
            Export Drivers
          </button>

          <div className="w-[42px] h-[42px] rounded-full bg-gradient-to-br from-[#facc15] to-[#eab308]" />

        </div>
      </div>

      {/* FILTERS */}
      <div className="bg-white p-5 rounded-[14px] border border-[#e5e7eb] mb-6">

        <div className="flex flex-wrap gap-3">

          {/* SEARCH */}
          <input
            className="flex-1 min-w-[220px] border border-[#e5e7eb] rounded-[10px] py-3 px-3.5 text-sm focus:outline-none focus:border-[#2563eb] focus:shadow-[0_0_0_4px_rgba(37,99,235,0.1)]"
            placeholder="Search drivers..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setCurrentPage(1);
            }}
          />

          {/* STATUS FILTER */}
          <select
            className="flex-1 min-w-[180px] border border-[#e5e7eb] rounded-[10px] py-3 px-3.5 text-sm focus:outline-none focus:border-[#2563eb] focus:shadow-[0_0_0_4px_rgba(37,99,235,0.1)]"
            value={statusFilter}
            onChange={(e) => {
              setStatusFilter(e.target.value);
              setCurrentPage(1);
            }}
          >
            <option>All Status</option>
            <option>Online</option>
            <option>Offline</option>
            <option>Busy</option>
          </select>

          {/* VERIFICATION FILTER */}
          <select
            className="flex-1 min-w-[220px] border border-[#e5e7eb] rounded-[10px] py-3 px-3.5 text-sm focus:outline-none focus:border-[#2563eb] focus:shadow-[0_0_0_4px_rgba(37,99,235,0.1)]"
            value={verificationFilter}
            onChange={(e) => {
              setVerificationFilter(
                e.target.value
              );

              setCurrentPage(1);
            }}
          >
            <option>
              All Verification
            </option>

            <option>Verified</option>

            <option>Pending</option>
          </select>

          {/* CLEAR */}
          <button
            onClick={clearFilters}
            className="bg-[#111827] text-white px-5 py-3 rounded-[10px] hover:bg-black transition"
          >
            Clear
          </button>

        </div>
      </div>

      {/* TABLE */}
      <div className="bg-white rounded-[14px] border border-[#e5e7eb] overflow-x-auto">

        <table className="w-full min-w-[1000px]">

          <thead className="bg-[#f9fafb] text-left">

            <tr className="text-sm text-[#6b7280]">

              <th className="p-4">Driver</th>

              <th className="p-4">Email</th>

              <th className="p-4">Status</th>

              <th className="p-4">Rides</th>

              <th className="p-4">Earnings</th>

              <th className="p-4">Rating</th>

              <th className="p-4">
                Verification
              </th>

              <th className="p-4">Action</th>

            </tr>

          </thead>

          <tbody>

            {paginatedDrivers.map(
              (d, index) => (
                <tr
                  key={d.id || index}
                  className="border-b hover:bg-[#fafafa]"
                >

                  {/* DRIVER */}
                  <td className="p-4">

                    <div className="flex items-center gap-3">

                      <div className="w-[42px] h-[42px] rounded-full bg-[#dbeafe] text-[#2563eb] flex items-center justify-center font-bold">

                        {(d.name || "D")
                          .charAt(0)
                          .toUpperCase()}

                      </div>

                      <div>

                        <p className="font-semibold text-[#111827]">

                          {d.name ||
                            d.fullName ||
                            "N/A"}

                        </p>

                        <span className="text-xs text-[#6b7280]">

                          {d.id}

                        </span>

                      </div>

                    </div>

                  </td>

                  {/* EMAIL */}
                  <td className="p-4">
                    {d.email || "N/A"}
                  </td>

                  {/* STATUS */}
                  <td className="p-4">

                    <span
                      className={`text-xs px-3 py-1 rounded-full font-semibold ${statusStyle(
                        d.status
                      )}`}
                    >
                      {d.status || "Offline"}
                    </span>

                  </td>

                  {/* RIDES */}
                  <td className="p-4">
                    {d.rides || 0}
                  </td>

                  {/* EARNINGS */}
                  <td className="p-4 font-semibold">
                    ₹
                    {(
                      d.earnings || 0
                    ).toLocaleString(
                      "en-IN"
                    )}
                  </td>

                  {/* RATING */}
                  <td className="p-4">
                    ⭐ {d.rating || 0}
                  </td>

                  {/* VERIFICATION */}
                  <td className="p-4">

                    {d.verified ? (
                      <span className="text-xs px-3 py-1 rounded-full bg-[#dcfce7] text-[#16a34a] font-semibold">
                        Verified
                      </span>
                    ) : (
                      <span className="text-xs px-3 py-1 rounded-full bg-[#fef3c7] text-[#b45309] font-semibold">
                        Pending
                      </span>
                    )}

                  </td>

                  {/* ACTIONS */}
                  <td className="p-4">

                    <div className="flex gap-2 flex-wrap">

                      <button className="bg-[#eff6ff] text-[#2563eb] px-3 py-2 rounded-lg text-sm font-semibold hover:bg-[#dbeafe]">
                        View
                      </button>

                      {!d.verified && (
                        <button className="bg-[#dcfce7] text-[#16a34a] px-3 py-2 rounded-lg text-sm font-semibold">
                          Approve
                        </button>
                      )}

                      <button className="bg-[#fee2e2] text-[#dc2626] px-3 py-2 rounded-lg text-sm font-semibold">
                        Suspend
                      </button>

                    </div>

                  </td>

                </tr>
              )
            )}

            {paginatedDrivers.length ===
              0 && (
              <tr>
                <td
                  colSpan={8}
                  className="text-center p-6 text-[#6b7280]"
                >
                  No drivers found.
                </td>
              </tr>
            )}

          </tbody>

        </table>

        {/* ✅ PAGINATION */}
        <div className="flex flex-wrap justify-between items-center p-4 border-t bg-[#f9fafb] gap-4">

          {/* PAGE SIZE */}
          <div className="flex items-center gap-2">

            <span className="text-sm text-[#6b7280]">
              Show
            </span>

            <select
              className="border rounded px-2 py-1"
              value={pageSize}
              onChange={(e) =>
                handlePageSizeChange(
                  Number(e.target.value)
                )
              }
            >
              <option value={5}>5</option>

              <option value={10}>
                10
              </option>

              <option value={25}>
                25
              </option>

              <option value={50}>
                50
              </option>
            </select>

            <span className="text-sm text-[#6b7280]">
              entries
            </span>

          </div>

          {/* PAGE NUMBERS */}
          <div className="flex gap-2 flex-wrap">

            <button
              disabled={
                currentPage === 1
              }
              onClick={() =>
                setCurrentPage(
                  (p) => p - 1
                )
              }
              className="px-3 py-1 border rounded disabled:opacity-50"
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
                    currentPage ===
                    i + 1
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
                currentPage ===
                  totalPages ||
                totalPages === 0
              }
              onClick={() =>
                setCurrentPage(
                  (p) => p + 1
                )
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