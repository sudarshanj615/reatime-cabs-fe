"use client";

import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import Swal from "sweetalert2";

export default function RidesPage() {
  const [rides, setRides] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All Status");

  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  // SAFE STRING
  const safe = (val: any) => String(val ?? "").toLowerCase();

  const fetchRides = async () => {
    try {
      const res = await axios.get("http://192.168.1.23:8081/rides");
      setRides(res.data || []);
    } catch (err) {
      Swal.fire("Error", "Failed to fetch rides", "error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRides();
  }, []);

  const q = search.toLowerCase();

  // FILTER
  const filtered = rides.filter((r) => {
    const matchSearch =
      safe(r.id).includes(q) ||
      safe(r.user?.name).includes(q) ||
      safe(r.driver?.name).includes(q) ||
      safe(r.from).includes(q) ||
      safe(r.to).includes(q);

    const matchStatus =
      statusFilter === "All Status" || r.status === statusFilter;

    return matchSearch && matchStatus;
  });

  const totalPages = Math.ceil(filtered.length / pageSize);

  const paginatedRides = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return filtered.slice(start, start + pageSize);
  }, [filtered, currentPage, pageSize]);

  const clearFilters = () => {
    setSearch("");
    setStatusFilter("All Status");
    setCurrentPage(1);
  };

  const handlePageSizeChange = (size: number) => {
    setPageSize(size);
    setCurrentPage(1);
  };

  const statusStyle = (status: string) => {
    if (status === "Completed") return "bg-[#dcfce7] text-[#16a34a]";
    if (status === "Pending") return "bg-[#fef3c7] text-[#b45309]";
    if (status === "Cancelled") return "bg-[#fee2e2] text-[#dc2626]";
    return "bg-[#dbeafe] text-[#0284c7]";
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen text-xl font-bold">
        Loading rides...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fffdf3] px-6 py-6">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-7">
        <div>
          <h1 className="text-[30px] font-bold text-[#111827]">Rides</h1>
          <p className="text-[#6b7280]">Track all ride activity in real time</p>
        </div>

        <button className="py-[11px] px-[18px] rounded-[10px] bg-[#facc15] font-semibold">
          Export Rides
        </button>
      </div>

      {/* FILTER */}
      <div className="bg-white rounded-[16px] p-5 mb-6 flex gap-3 flex-wrap">

        <input
          className="border rounded px-3 py-2 flex-1 min-w-[220px]"
          placeholder="Search ride, user, driver..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setCurrentPage(1);
          }}
        />

        <select
          className="border rounded px-3 py-2"
          value={statusFilter}
          onChange={(e) => {
            setStatusFilter(e.target.value);
            setCurrentPage(1);
          }}
        >
          <option>All Status</option>
          <option>Ongoing</option>
          <option>Completed</option>
          <option>Pending</option>
          <option>Cancelled</option>
        </select>

        <button onClick={clearFilters} className="bg-black text-white px-4 py-2 rounded">
          Clear
        </button>

      </div>

      {/* TABLE */}
      <div className="bg-white rounded-[14px] p-6 overflow-x-auto">

        <table className="w-full min-w-[900px]">
          <thead>
            <tr className="text-left text-gray-500">
              <th>Ride</th>
              <th>User</th>
              <th>Driver</th>
              <th>Route</th>
              <th>Status</th>
              <th>Fare</th>
            </tr>
          </thead>

          <tbody>
            {paginatedRides.map((r, i) => (
              <tr key={r.id || i} className="border-t">

                <td className="py-3">{r.id}</td>

                {/* ✅ FIXED OBJECT ISSUE */}
                <td className="py-3">
                  {r.user?.name || r.user?.email || "N/A"}
                </td>

                <td className="py-3">
                  {r.driver?.name || r.driver?.email || "Not Assigned"}
                </td>

                <td className="py-3">
                  {r.from} → {r.to}
                </td>

                <td className="py-3">
                  <span className={`px-3 py-1 rounded text-xs ${statusStyle(r.status)}`}>
                    {r.status}
                  </span>
                </td>

                <td className="py-3 font-semibold">
                  ₹{(r.fare || 0).toLocaleString("en-IN")}
                </td>

              </tr>
            ))}
          </tbody>

        </table>
      </div>

    </div>
  );
}