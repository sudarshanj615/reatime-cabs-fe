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

  const filtered = rides.filter((r) => {
    const query = search.trim().toLowerCase();
    const matchesSearch =
      r.id.toLowerCase().includes(query) ||
      r.user.toLowerCase().includes(query) ||
      r.driver.toLowerCase().includes(query) ||
      r.from.toLowerCase().includes(query) ||
      r.to.toLowerCase().includes(query);
    const matchesStatus = statusFilter === "All Status" || r.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  const clearFilters = () => {
    setSearch("");
    setStatusFilter("All Status");
  };

  return (
    <div>

      {/* HEADER */}
      <div className="flex justify-between items-center mb-7 gap-5 max-[768px]:flex-col max-[768px]:items-start [&>h1]:text-[30px] [&>h1]:font-bold [&>h1]:text-[#111827]">
        <h1>Rides</h1>

        <div className="flex items-center gap-4 max-[768px]:w-full max-[768px]:justify-between">
          <button className="border-0 outline-none cursor-pointer py-[11px] px-[18px] rounded-[10px] bg-[#2563eb] text-white font-semibold transition duration-200 ease-in hover:bg-[#1d4ed8] hover:-translate-y-px">Export Rides</button>
          <div className="w-[42px] h-[42px] rounded-full bg-[linear-gradient(135deg,#2563eb,#60a5fa)]" />
        </div>
      </div>

      {/* SEARCH */}
      <div className="flex flex-wrap gap-3.5 mb-6 items-center">
        <input
          className="border border-[#e5e7eb] rounded-[10px] py-3 px-3.5 bg-white text-sm w-full min-w-[180px] transition duration-200 ease-in focus:outline-none focus:border-[#2563eb] focus:shadow-[0_0_0_4px_rgba(37,99,235,0.1)]"
          placeholder="Search ride, user or driver..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          className="border border-[#e5e7eb] rounded-[10px] py-3 px-3.5 bg-white text-sm w-full min-w-[180px] transition duration-200 ease-in focus:outline-none focus:border-[#2563eb] focus:shadow-[0_0_0_4px_rgba(37,99,235,0.1)]"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option>All Status</option>
          <option>Ongoing</option>
          <option>Completed</option>
          <option>Pending</option>
          <option>Cancelled</option>
        </select>
        <button className="border-0 outline-none cursor-pointer py-[11px] px-[18px] rounded-[10px] bg-[#2563eb] text-white font-semibold transition duration-200 ease-in hover:bg-[#1d4ed8] hover:-translate-y-px bg-[#111827] hover:bg-black" type="button" onClick={clearFilters}>
          Clear
        </button>
      </div>

      {/* TABLE */}
      <div className="bg-white rounded-[14px] p-[22px] shadow-[0_4px_10px_rgba(0,0,0,0.04)] border border-[#e5e7eb]">

        <table className="w-full border-collapse max-[768px]:min-w-[750px] [&_thead]:bg-[#f9fafb] [&_th]:text-left [&_th]:p-[15px] [&_th]:text-sm [&_th]:text-[#6b7280] [&_th]:border-b [&_th]:border-[#e5e7eb] [&_td]:p-[16px_15px] [&_td]:border-b [&_td]:border-[#f3f4f6] [&_td]:text-[#374151] [&_td]:text-sm [&_tr:hover]:bg-[#fafafa] [&_.status]:py-1.5 [&_.status]:px-3 [&_.status]:rounded-full [&_.status]:text-xs [&_.status]:font-semibold [&_.active]:bg-[#dcfce7] [&_.active]:text-[#16a34a] [&_.online]:bg-[#dcfce7] [&_.online]:text-[#16a34a] [&_.completed]:bg-[#dcfce7] [&_.completed]:text-[#16a34a] [&_.success]:bg-[#dcfce7] [&_.success]:text-[#16a34a] [&_.pending]:bg-[#fef3c7] [&_.pending]:text-[#b45309] [&_.processing]:bg-[#fef3c7] [&_.processing]:text-[#b45309] [&_.cancelled]:bg-[#fee2e2] [&_.cancelled]:text-[#dc2626] [&_.blocked]:bg-[#fee2e2] [&_.blocked]:text-[#dc2626] [&_.ongoing]:bg-[#dbeafe] [&_.ongoing]:text-[#0284c7] [&_.info]:bg-[#dbeafe] [&_.info]:text-[#0284c7] [&_.busy]:bg-[#dbeafe] [&_.busy]:text-[#0284c7] [&_.offline]:bg-[#e5e7eb] [&_.offline]:text-[#4b5563] [&_.inactive]:bg-[#e5e7eb] [&_.inactive]:text-[#4b5563]">
          <thead>
            <tr>
              <th>Ride</th>
              <th>User</th>
              <th>Driver</th>
              <th>Route</th>
              <th>Status</th>
              <th>Fare</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {filtered.map((ride) => (
              <tr key={ride.id}>

                {/* RIDE ID */}
                <td>
                  <div>
                    <p className="font-semibold text-[#111827]">{ride.id}</p>
                    <span className="text-xs text-[#6b7280]">ID</span>
                  </div>
                </td>

                {/* USER */}
                <td>{ride.user}</td>

                {/* DRIVER */}
                <td>{ride.driver}</td>

                {/* ROUTE */}
                <td>
                  <div className="flex items-center gap-[10px]">
                    <span>{ride.from}</span>
                    <span className="text-[#6b7280]">→</span>
                    <span>{ride.to}</span>
                  </div>
                </td>

                {/* STATUS */}
                <td>
                  <span className={`status ${ride.status.toLowerCase()}`}>
                    {ride.status}
                  </span>
                </td>

                {/* FARE */}
                <td>
                  <b>₹{ride.fare}</b>
                </td>

                {/* ACTIONS */}
                <td>
                  <div className="flex flex-wrap gap-2">
                    <button className="border-0 bg-[#eff6ff] text-[#2563eb] py-[7px] px-3 rounded-lg cursor-pointer text-[13px] font-semibold hover:bg-[#dbeafe]">View</button>
                    <button className="border-0 bg-[#eff6ff] text-[#2563eb] py-[7px] px-3 rounded-lg cursor-pointer text-[13px] font-semibold hover:bg-[#dbeafe]">Track</button>
                  </div>
                </td>

              </tr>
            ))}

            {filtered.length === 0 && (
              <tr>
                <td colSpan={7} className="text-center text-[#6b7280] !p-7">
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
