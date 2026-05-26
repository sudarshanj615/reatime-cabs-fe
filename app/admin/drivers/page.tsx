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

  const q = search.toLowerCase();

  const filtered = drivers.filter((d) => {
    const verification = d.verified ? "Verified" : "Pending";

    const matchSearch =
      d.name.toLowerCase().includes(q) ||
      d.email.toLowerCase().includes(q) ||
      d.id.toLowerCase().includes(q);

    const matchStatus =
      statusFilter === "All Status" || d.status === statusFilter;

    const matchVerification =
      verificationFilter === "All Verification" ||
      verification === verificationFilter;

    return matchSearch && matchStatus && matchVerification;
  });

  const clearFilters = () => {
    setSearch("");
    setStatusFilter("All Status");
    setVerificationFilter("All Verification");
  };

  const statusStyle = (status: string) => {
  if (status === "Online") return "bg-[#dcfce7] text-[#16a34a]";
  if (status === "Busy") return "bg-[#dbeafe] text-[#0284c7]";
  return "bg-[#e5e7eb] text-[#4b5563]";
};

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

          <input
            className="flex-1 min-w-[220px] border rounded-[10px] px-4 py-3 bg-[#f9fafb]"
            placeholder="Search drivers..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            className="min-w-[180px] border rounded-[10px] px-4 py-3 bg-[#f9fafb]"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option>All Status</option>
            <option>Online</option>
            <option>Offline</option>
            <option>Busy</option>
          </select>

          <select
            className="min-w-[180px] border rounded-[10px] px-4 py-3 bg-[#f9fafb]"
            value={verificationFilter}
            onChange={(e) => setVerificationFilter(e.target.value)}
          >
            <option>All Verification</option>
            <option>Verified</option>
            <option>Pending</option>
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

        <table className="w-full min-w-[900px]">

          <thead className="bg-[#f9fafb] text-left">
            <tr className="text-sm text-[#6b7280]">
              <th className="p-4">Driver</th>
              <th className="p-4">Status</th>
              <th className="p-4">Rides</th>
              <th className="p-4">Earnings</th>
              <th className="p-4">Rating</th>
              <th className="p-4">Verification</th>
              <th className="p-4">Action</th>
            </tr>
          </thead>

          <tbody>

            {filtered.map((d) => (
              <tr key={d.id} className="border-b hover:bg-[#fafafa]">

                {/* DRIVER */}
                <td className="p-4">
                  <div className="flex items-center gap-3">

                    <div className="w-[42px] h-[42px] rounded-full bg-[#dbeafe] text-[#2563eb] flex items-center justify-center font-bold">
                      {d.name.charAt(0)}
                    </div>

                    <div>
                      <p className="font-semibold text-[#111827]">
                        {d.name}
                      </p>
                      <span className="text-xs text-[#6b7280]">
                        {d.id}
                      </span>
                    </div>

                  </div>
                </td>

                {/* STATUS */}
                <td className="p-4">
                  <span
                    className={`text-xs px-3 py-1 rounded-full font-semibold ${statusStyle(
                      d.status
                    )}`}
                  >
                    {d.status}
                  </span>
                </td>

                <td className="p-4">{d.rides}</td>

                <td className="p-4 font-semibold">
                  ₹{d.earnings.toLocaleString("en-IN")}
                </td>

                <td className="p-4">⭐ {d.rating}</td>

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
            ))}

            {filtered.length === 0 && (
              <tr>
                <td colSpan={7} className="text-center p-6 text-[#6b7280]">
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