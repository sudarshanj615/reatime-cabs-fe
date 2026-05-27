"use client";

import { useState } from "react";

export default function DriversPage() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] =
    useState("All Status");

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
    const verification = d.verified
      ? "Verified"
      : "Pending";

    const matchSearch =
      d.name.toLowerCase().includes(q) ||
      d.email.toLowerCase().includes(q) ||
      d.id.toLowerCase().includes(q);

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

  const clearFilters = () => {
    setSearch("");
    setStatusFilter("All Status");
    setVerificationFilter("All Verification");
  };

  const statusStyle = (status: string) => {
    if (status === "Online")
      return "bg-[#dcfce7] text-[#16a34a]";

    if (status === "Busy")
      return "bg-[#dbeafe] text-[#0284c7]";

    return "bg-[#e5e7eb] text-[#4b5563]";
  };

  return (
    <div className="min-h-screen bg-[#fffdf3] px-6 py-6">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-7 gap-5 max-[768px]:flex-col max-[768px]:items-start">

        <div>
          <h1 className="text-[30px] font-bold text-[#111827]">
            Drivers
          </h1>

          <p className="text-[#6b7280]">
            Manage all registered drivers
          </p>
        </div>

        <div className="flex items-center gap-4 max-[768px]:w-full max-[768px]:justify-between">

          <button className="border-0 cursor-pointer py-[11px] px-[18px] rounded-[10px] bg-[#facc15] text-black font-semibold hover:bg-[#eab308] hover:-translate-y-px transition">
            Export Drivers
          </button>

          <div className="w-[42px] h-[42px] rounded-full bg-[linear-gradient(135deg,#facc15,#eab308)]" />

        </div>
      </div>

      {/* FILTER BAR */}
      <div className="bg-white rounded-[16px] border border-[#f0e6c2] shadow-[0_4px_12px_rgba(0,0,0,0.04)] p-5 mb-6">

        <div className="flex flex-wrap gap-3.5 items-center">

          <input
            className="flex-1 min-w-[220px] border border-[#e5e7eb] rounded-[10px] py-3 px-3.5 text-sm focus:outline-none focus:border-[#2563eb] focus:shadow-[0_0_0_4px_rgba(37,99,235,0.1)]"
            placeholder="Search drivers..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
          />

          <select
            className="min-w-[180px] border border-[#e5e7eb] rounded-[10px] py-3 px-3.5 text-sm"
            value={statusFilter}
            onChange={(e) =>
              setStatusFilter(e.target.value)
            }
          >
            <option>All Status</option>
            <option>Online</option>
            <option>Offline</option>
            <option>Busy</option>
          </select>

          <select
            className="min-w-[180px] border border-[#e5e7eb] rounded-[10px] py-3 px-3.5 text-sm"
            value={verificationFilter}
            onChange={(e) =>
              setVerificationFilter(e.target.value)
            }
          >
            <option>All Verification</option>
            <option>Verified</option>
            <option>Pending</option>
          </select>

          <button
            onClick={clearFilters}
            className="border-0 cursor-pointer py-[11px] px-[18px] rounded-[10px] bg-[#111827] text-white font-semibold hover:bg-black transition"
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
              <th className="text-left p-[15px] text-sm text-[#6b7280]">
                Driver
              </th>

              <th className="text-left p-[15px] text-sm text-[#6b7280]">
                Status
              </th>

              <th className="text-left p-[15px] text-sm text-[#6b7280]">
                Rides
              </th>

              <th className="text-left p-[15px] text-sm text-[#6b7280]">
                Earnings
              </th>

              <th className="text-left p-[15px] text-sm text-[#6b7280]">
                Rating
              </th>

              <th className="text-left p-[15px] text-sm text-[#6b7280]">
                Verification
              </th>

              <th className="text-left p-[15px] text-sm text-[#6b7280]">
                Action
              </th>
            </tr>

          </thead>

          <tbody>

            {filtered.map((d) => (
              <tr
                key={d.id}
                className="hover:bg-[#fafafa] transition"
              >

                {/* DRIVER */}
                <td className="p-[16px_15px] border-b border-[#f3f4f6]">

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
                <td className="p-[16px_15px] border-b border-[#f3f4f6]">

                  <span
                    className={`py-1.5 px-3 rounded-full text-xs font-semibold ${statusStyle(
                      d.status
                    )}`}
                  >
                    {d.status}
                  </span>

                </td>

                {/* RIDES */}
                <td className="p-[16px_15px] border-b border-[#f3f4f6] text-sm text-[#374151]">
                  {d.rides}
                </td>

                {/* EARNINGS */}
                <td className="p-[16px_15px] border-b border-[#f3f4f6] font-semibold text-[#111827]">
                  ₹{d.earnings.toLocaleString("en-IN")}
                </td>

                {/* RATING */}
                <td className="p-[16px_15px] border-b border-[#f3f4f6] text-sm text-[#374151]">
                  ⭐ {d.rating}
                </td>

                {/* VERIFICATION */}
                <td className="p-[16px_15px] border-b border-[#f3f4f6]">

                  {d.verified ? (
                    <span className="py-1.5 px-3 rounded-full text-xs font-semibold bg-[#dcfce7] text-[#16a34a]">
                      Verified
                    </span>
                  ) : (
                    <span className="py-1.5 px-3 rounded-full text-xs font-semibold bg-[#fef3c7] text-[#b45309]">
                      Pending
                    </span>
                  )}

                </td>

                {/* ACTIONS */}
                <td className="p-[16px_15px] border-b border-[#f3f4f6]">

                  <div className="flex gap-2 flex-wrap">

                    <button className="bg-[#eff6ff] text-[#2563eb] py-[7px] px-3 rounded-lg text-[13px] font-semibold hover:bg-[#dbeafe]">
                      View
                    </button>

                    {!d.verified && (
                      <button className="bg-[#dcfce7] text-[#16a34a] py-[7px] px-3 rounded-lg text-[13px] font-semibold hover:bg-[#bbf7d0]">
                        Approve
                      </button>
                    )}

                    <button className="bg-[#fee2e2] text-[#dc2626] py-[7px] px-3 rounded-lg text-[13px] font-semibold hover:bg-[#fecaca]">
                      Suspend
                    </button>

                  </div>

                </td>

              </tr>
            ))}

            {filtered.length === 0 && (
              <tr>
                <td
                  colSpan={7}
                  className="text-center p-7 text-[#6b7280]"
                >
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