"use client";

import { useState } from "react";

export default function DriversPage() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All Status");
  const [verificationFilter, setVerificationFilter] =
    useState("All Verification");

  const drivers = [
    {
      id: "D101",
      name: "Raj Singh",
      email: "raj@gmail.com",
      status: "Online",
      rides: 124,
      earnings: 15420,
      rating: 4.8,
      verified: true,
    },
    {
      id: "D102",
      name: "Mike Ross",
      email: "mike@gmail.com",
      status: "Offline",
      rides: 89,
      earnings: 9800,
      rating: 4.5,
      verified: false,
    },
    {
      id: "D103",
      name: "Vikram Rao",
      email: "vikram@gmail.com",
      status: "Busy",
      rides: 210,
      earnings: 24500,
      rating: 4.9,
      verified: true,
    },
  ];

  const query = search.trim().toLowerCase();

  const filtered = drivers.filter((d) => {
    const verification = d.verified ? "Verified" : "Pending";

    const matchesSearch =
      d.name.toLowerCase().includes(query) ||
      d.email.toLowerCase().includes(query) ||
      d.id.toLowerCase().includes(query);

    const matchesStatus =
      statusFilter === "All Status" || d.status === statusFilter;

    const matchesVerification =
      verificationFilter === "All Verification" ||
      verification === verificationFilter;

    return matchesSearch && matchesStatus && matchesVerification;
  });

  const clearFilters = () => {
    setSearch("");
    setStatusFilter("All Status");
    setVerificationFilter("All Verification");
  };

  return (
    <div className="drivers-page min-h-screen bg-[#fffdf3] px-6 py-6">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-7 gap-5 max-[768px]:flex-col max-[768px]:items-start [&>h1]:text-[30px] [&>h1]:font-bold [&>h1]:text-[#111827]">
        <h1>Drivers</h1>

        <div className="flex items-center gap-4 max-[768px]:w-full max-[768px]:justify-between">
          <button className="border-0 outline-none cursor-pointer py-[11px] px-[18px] rounded-[10px] bg-[#2563eb] text-white font-semibold transition duration-200 ease-in hover:bg-[#1d4ed8] hover:-translate-y-px">
            Export Drivers
          </button>

          <div className="w-[42px] h-[42px] rounded-full bg-[linear-gradient(135deg,#2563eb,#60a5fa)]" />
        </div>
      </div>

      {/* SEARCH */}
      <div className="bg-white rounded-[16px] border border-[#f0e6c2] shadow-[0_4px_12px_rgba(0,0,0,0.04)] p-5 mb-6">
        <div className="flex flex-wrap gap-3.5 items-center">

          <input
            className="border border-[#e5e7eb] rounded-[10px] py-3 px-3.5 bg-white text-sm w-full min-w-[180px]"
            placeholder="Search drivers..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            className="border border-[#e5e7eb] rounded-[10px] py-3 px-3.5 bg-white text-sm w-full min-w-[180px]"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option>All Status</option>
            <option>Online</option>
            <option>Offline</option>
            <option>Busy</option>
          </select>

          <select
            className="border border-[#e5e7eb] rounded-[10px] py-3 px-3.5 bg-white text-sm w-full min-w-[180px]"
            value={verificationFilter}
            onChange={(e) => setVerificationFilter(e.target.value)}
          >
            <option>All Verification</option>
            <option>Verified</option>
            <option>Pending</option>
          </select>

          <button
            className="border-0 cursor-pointer py-[11px] px-[18px] rounded-[10px] bg-[#111827] text-white font-semibold"
            onClick={clearFilters}
          >
            Clear
          </button>

        </div>
      </div>

      {/* TABLE */}
      <div className="bg-white rounded-[14px] p-[22px] shadow-[0_4px_10px_rgba(0,0,0,0.04)] border border-[#e5e7eb] overflow-x-auto">

        <table className="w-full border-collapse min-w-[900px]">

          <thead className="bg-[#f9fafb]">
            <tr>
              <th className="text-left p-3">Driver</th>
              <th className="text-left p-3">Status</th>
              <th className="text-left p-3">Rides</th>
              <th className="text-left p-3">Earnings</th>
              <th className="text-left p-3">Rating</th>
              <th className="text-left p-3">Verification</th>
              <th className="text-left p-3">Action</th>
            </tr>
          </thead>

          <tbody>

            {filtered.map((driver) => (
              <tr key={driver.id} className="border-b">

                {/* DRIVER */}
                <td className="p-3">
                  <div className="flex items-center gap-3">

                    <div className="w-[42px] h-[42px] rounded-full bg-[#dbeafe] text-[#2563eb] flex items-center justify-center font-bold">
                      {driver.name.charAt(0)}
                    </div>

                    <div>
                      <p className="font-semibold text-[#111827]">
                        {driver.name}
                      </p>
                      <span className="text-xs text-[#6b7280]">
                        {driver.id}
                      </span>
                    </div>

                  </div>
                </td>

                {/* STATUS */}
                <td className="p-3">
                  <span className={`status ${driver.status.toLowerCase()}`}>
                    {driver.status}
                  </span>
                </td>

                {/* RIDES */}
                <td className="p-3">{driver.rides}</td>

                {/* EARNINGS */}
                <td className="p-3 font-semibold">₹{driver.earnings}</td>

                {/* RATING */}
                <td className="p-3">⭐ {driver.rating}</td>

                {/* VERIFICATION */}
                <td className="p-3">
                  {driver.verified ? (
                    <span className="py-1 px-3 rounded-full text-xs font-semibold bg-[#dcfce7] text-[#16a34a]">
                      Verified
                    </span>
                  ) : (
                    <span className="py-1 px-3 rounded-full text-xs font-semibold bg-[#fef3c7] text-[#b45309]">
                      Pending
                    </span>
                  )}
                </td>

                {/* ACTIONS */}
                <td className="p-3">
                  <div className="flex flex-wrap gap-2">

                    <button className="bg-[#eff6ff] text-[#2563eb] py-1 px-3 rounded-lg text-sm font-semibold">
                      View
                    </button>

                    {!driver.verified && (
                      <button className="bg-[#dcfce7] text-[#16a34a] py-1 px-3 rounded-lg text-sm font-semibold">
                        Approve
                      </button>
                    )}

                    <button className="bg-[#fee2e2] text-[#dc2626] py-1 px-3 rounded-lg text-sm font-semibold">
                      Suspend
                    </button>

                  </div>
                </td>

              </tr>
            ))}

            {filtered.length === 0 && (
              <tr>
                <td colSpan={7} className="text-center p-7 text-[#6b7280]">
                  No drivers match these filters.
                </td>
              </tr>
            )}

          </tbody>

        </table>

      </div>
    </div>
  );
}