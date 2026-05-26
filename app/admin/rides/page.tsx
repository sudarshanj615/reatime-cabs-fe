"use client";

import { useState } from "react";

export default function RidesPage() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All Status");

  const rides = [
    {
      id: "RIDE1001",
      user: "Aman Sharma",
      driver: "Raj Singh",
      from: "MG Road",
      to: "Airport",
      status: "Ongoing",
      fare: 320,
    },
    {
      id: "RIDE1002",
      user: "Neha Verma",
      driver: "Mike Ross",
      from: "BTM Layout",
      to: "Koramangala",
      status: "Completed",
      fare: 180,
    },
    {
      id: "RIDE1003",
      user: "John Doe",
      driver: "Not Assigned",
      from: "Whitefield",
      to: "HSR Layout",
      status: "Pending",
      fare: 0,
    },
    {
      id: "RIDE1004",
      user: "Sara Khan",
      driver: "Vikram Rao",
      from: "Indiranagar",
      to: "Majestic",
      status: "Cancelled",
      fare: 0,
    },
  ];

  const q = search.toLowerCase();

  const filtered = rides.filter((r) => {
    const matchSearch =
      r.id.toLowerCase().includes(q) ||
      r.user.toLowerCase().includes(q) ||
      r.driver.toLowerCase().includes(q) ||
      r.from.toLowerCase().includes(q) ||
      r.to.toLowerCase().includes(q);

    const matchStatus =
      statusFilter === "All Status" || r.status === statusFilter;

    return matchSearch && matchStatus;
  });

  const clearFilters = () => {
    setSearch("");
    setStatusFilter("All Status");
  };

  const statusStyle = (status: string) => {
  if (status === "Completed") return "bg-[#dcfce7] text-[#16a34a]";
  if (status === "Pending") return "bg-[#fef3c7] text-[#b45309]";
  if (status === "Cancelled") return "bg-[#fee2e2] text-[#dc2626]";
  return "bg-[#dbeafe] text-[#0284c7]";
};

  return (
    <div className="min-h-screen bg-[#fffdf3] px-6 py-6">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-7 max-[768px]:flex-col max-[768px]:items-start gap-4">

        <div>
          <h1 className="text-[30px] font-bold text-[#111827]">
            Rides
          </h1>
          <p className="text-[#6b7280]">
            Track all ride activity in real time
          </p>
        </div>

        <div className="w-[42px] h-[42px] rounded-full bg-gradient-to-br from-[#facc15] to-[#eab308]" />

      </div>

      {/* FILTERS */}
      <div className="bg-white p-5 rounded-[14px] border border-[#e5e7eb] mb-6">
        <div className="flex flex-wrap gap-3">

          <input
            className="flex-1 min-w-[220px] border rounded-[10px] px-4 py-3 bg-[#f9fafb]"
            placeholder="Search ride, user, driver..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            className="min-w-[180px] border rounded-[10px] px-4 py-3 bg-[#f9fafb]"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option>All Status</option>
            <option>Ongoing</option>
            <option>Completed</option>
            <option>Pending</option>
            <option>Cancelled</option>
          </select>

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

        <table className="w-full min-w-[950px]">

          <thead className="bg-[#f9fafb] text-left">
            <tr className="text-sm text-[#6b7280]">
              <th className="p-4">Ride</th>
              <th className="p-4">User</th>
              <th className="p-4">Driver</th>
              <th className="p-4">Route</th>
              <th className="p-4">Status</th>
              <th className="p-4">Fare</th>
              <th className="p-4">Action</th>
            </tr>
          </thead>

          <tbody>

            {filtered.map((r) => (
              <tr key={r.id} className="border-b hover:bg-[#fafafa]">

                <td className="p-4">
                  <p className="font-semibold text-[#111827]">{r.id}</p>
                  <span className="text-xs text-[#6b7280]">Ride ID</span>
                </td>

                <td className="p-4">{r.user}</td>

                <td className="p-4">{r.driver}</td>

                <td className="p-4">
                  <div className="flex items-center gap-2">
                    <span>{r.from}</span>
                    <span className="text-[#6b7280]">→</span>
                    <span>{r.to}</span>
                  </div>
                </td>

                {/* STATUS */}
                <td className="p-4">
                  <span
                    className={`text-xs px-3 py-1 rounded-full font-semibold ${statusStyle(
                      r.status
                    )}`}
                  >
                    {r.status}
                  </span>
                </td>

                <td className="p-4 font-semibold">
                  ₹{r.fare.toLocaleString("en-IN")}
                </td>

                <td className="p-4">
                  <div className="flex gap-2 flex-wrap">

                    <button className="bg-[#eff6ff] text-[#2563eb] px-3 py-2 rounded-lg text-sm font-semibold hover:bg-[#dbeafe]">
                      View
                    </button>

                    <button className="bg-[#eff6ff] text-[#2563eb] px-3 py-2 rounded-lg text-sm font-semibold hover:bg-[#dbeafe]">
                      Track
                    </button>

                  </div>
                </td>

              </tr>
            ))}

            {filtered.length === 0 && (
              <tr>
                <td colSpan={7} className="text-center p-6 text-[#6b7280]">
                  No rides match these filters.
                </td>
              </tr>
            )}

          </tbody>

        </table>

      </div>

    </div>
  );
}