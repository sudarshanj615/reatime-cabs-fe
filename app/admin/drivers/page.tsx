"use client";

import { useState } from "react";

export default function DriversPage() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All Status");
  const [verificationFilter, setVerificationFilter] = useState("All Verification");

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

  const filtered = drivers.filter((d) => {
    const query = search.trim().toLowerCase();
    const verification = d.verified ? "Verified" : "Pending";
    const matchesSearch =
      d.name.toLowerCase().includes(query) ||
      d.email.toLowerCase().includes(query) ||
      d.id.toLowerCase().includes(query);
    const matchesStatus = statusFilter === "All Status" || d.status === statusFilter;
    const matchesVerification =
      verificationFilter === "All Verification" || verification === verificationFilter;

    return matchesSearch && matchesStatus && matchesVerification;
  });

  const clearFilters = () => {
    setSearch("");
    setStatusFilter("All Status");
    setVerificationFilter("All Verification");
  };

  return (
    <div>

      {/* HEADER */}
      <div className="flex justify-between items-center mb-7 gap-5 max-[768px]:flex-col max-[768px]:items-start [&>h1]:text-[30px] [&>h1]:font-bold [&>h1]:text-[#111827]">
        <h1>Drivers</h1>

        <div className="flex items-center gap-4 max-[768px]:w-full max-[768px]:justify-between">
          <button className="border-0 outline-none cursor-pointer py-[11px] px-[18px] rounded-[10px] bg-[#2563eb] text-white font-semibold transition duration-200 ease-in hover:bg-[#1d4ed8] hover:-translate-y-px">Export Drivers</button>
          <div className="w-[42px] h-[42px] rounded-full bg-[linear-gradient(135deg,#2563eb,#60a5fa)]" />
        </div>
      </div>

      {/* SEARCH */}
      <div className="flex flex-wrap gap-3.5 mb-6 items-center">
        <input
          className="border border-[#e5e7eb] rounded-[10px] py-3 px-3.5 bg-white text-sm w-full min-w-[180px] transition duration-200 ease-in focus:outline-none focus:border-[#2563eb] focus:shadow-[0_0_0_4px_rgba(37,99,235,0.1)]"
          placeholder="Search drivers..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          className="border border-[#e5e7eb] rounded-[10px] py-3 px-3.5 bg-white text-sm w-full min-w-[180px] transition duration-200 ease-in focus:outline-none focus:border-[#2563eb] focus:shadow-[0_0_0_4px_rgba(37,99,235,0.1)]"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option>All Status</option>
          <option>Online</option>
          <option>Offline</option>
          <option>Busy</option>
        </select>
        <select
          className="border border-[#e5e7eb] rounded-[10px] py-3 px-3.5 bg-white text-sm w-full min-w-[180px] transition duration-200 ease-in focus:outline-none focus:border-[#2563eb] focus:shadow-[0_0_0_4px_rgba(37,99,235,0.1)]"
          value={verificationFilter}
          onChange={(e) => setVerificationFilter(e.target.value)}
        >
          <option>All Verification</option>
          <option>Verified</option>
          <option>Pending</option>
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
              <th>Driver</th>
              <th>Status</th>
              <th>Rides</th>
              <th>Earnings</th>
              <th>Rating</th>
              <th>Verification</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {filtered.map((driver) => (
              <tr key={driver.id}>

                {/* DRIVER INFO */}
                <td>
                  <div className="flex items-center gap-3">
                    <div className="w-[42px] h-[42px] rounded-full bg-[#dbeafe] text-[#2563eb] flex items-center justify-center font-bold">
                      {driver.name.charAt(0)}
                    </div>

                    <div>
                      <p className="font-semibold text-[#111827]">{driver.name}</p>
                      <span className="text-xs text-[#6b7280]">{driver.id}</span>
                    </div>
                  </div>
                </td>

                {/* STATUS */}
                <td>
                  <span className={`status ${driver.status.toLowerCase()}`}>
                    {driver.status}
                  </span>
                </td>

                {/* RIDES */}
                <td>{driver.rides}</td>

                {/* EARNINGS */}
                <td>
                  <b>₹{driver.earnings}</b>
                </td>

                {/* RATING */}
                <td>⭐ {driver.rating}</td>

                {/* VERIFIED */}
                <td>
                  {driver.verified ? (
                    <span className="py-1.5 px-3 rounded-full text-xs font-semibold bg-[#dcfce7] text-[#16a34a]">Verified</span>
                  ) : (
                    <span className="py-1.5 px-3 rounded-full text-xs font-semibold bg-[#fef3c7] text-[#b45309]">Pending</span>
                  )}
                </td>

                {/* ACTIONS */}
                <td>
                  <div className="flex flex-wrap gap-2">
                    <button className="border-0 bg-[#eff6ff] text-[#2563eb] py-[7px] px-3 rounded-lg cursor-pointer text-[13px] font-semibold hover:bg-[#dbeafe]">View</button>
                    {!driver.verified && (
                      <button className="border-0 bg-[#eff6ff] text-[#2563eb] py-[7px] px-3 rounded-lg cursor-pointer text-[13px] font-semibold hover:bg-[#dbeafe]">Approve</button>
                    )}
                    <button className="border-0 bg-[#eff6ff] text-[#2563eb] py-[7px] px-3 rounded-lg cursor-pointer text-[13px] font-semibold hover:bg-[#dbeafe] bg-[#fee2e2] text-[#dc2626] hover:bg-[#fecaca]">Suspend</button>
                  </div>
                </td>

              </tr>
            ))}

            {filtered.length === 0 && (
              <tr>
                <td colSpan={7} className="text-center text-[#6b7280] !p-7">
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
