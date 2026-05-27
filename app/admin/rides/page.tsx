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
      from: "Chh.Shivaji Nagar",
      to: "Swargate",
      status: "Ongoing",
      fare: 320,
    },
    {
      id: "RIDE1002",
      user: "Neha Verma",
      driver: "Vikram Rao",
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
    if (status === "Completed")
      return "bg-[#dcfce7] text-[#16a34a]";

    if (status === "Pending")
      return "bg-[#fef3c7] text-[#b45309]";

    if (status === "Cancelled")
      return "bg-[#fee2e2] text-[#dc2626]";

    return "bg-[#dbeafe] text-[#0284c7]";
  };

  return (
    <div className="min-h-screen bg-[#fffdf3] px-6 py-6">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-7 gap-5 max-[768px]:flex-col max-[768px]:items-start">

        <div>
          <h1 className="text-[30px] font-bold text-[#111827]">
            Rides
          </h1>

          <p className="text-[#6b7280]">
            Track all ride activity in real time
          </p>
        </div>

        <div className="flex items-center gap-4 max-[768px]:w-full max-[768px]:justify-between">

          <button className="border-0 cursor-pointer py-[11px] px-[18px] rounded-[10px] bg-[#facc15] text-black font-semibold hover:bg-[#eab308] hover:-translate-y-px transition">
            Export Rides
          </button>

          <div className="w-[42px] h-[42px] rounded-full bg-[linear-gradient(135deg,#facc15,#eab308)]" />

        </div>
      </div>

      {/* FILTER BAR */}
      <div className="bg-white rounded-[16px] border border-[#f0e6c2] shadow-[0_4px_12px_rgba(0,0,0,0.04)] p-5 mb-6">

        <div className="flex flex-wrap gap-3.5 items-center">

          <input
            className="flex-1 min-w-[220px] border border-[#e5e7eb] rounded-[10px] py-3 px-3.5 text-sm focus:outline-none focus:border-[#2563eb] focus:shadow-[0_0_0_4px_rgba(37,99,235,0.1)]"
            placeholder="Search ride, user, driver..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            className="min-w-[180px] border border-[#e5e7eb] rounded-[10px] py-3 px-3.5 text-sm"
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
                Ride
              </th>

              <th className="text-left p-[15px] text-sm text-[#6b7280]">
                User
              </th>

              <th className="text-left p-[15px] text-sm text-[#6b7280]">
                Driver
              </th>

              <th className="text-left p-[15px] text-sm text-[#6b7280]">
                Route
              </th>

              <th className="text-left p-[15px] text-sm text-[#6b7280]">
                Status
              </th>

              <th className="text-left p-[15px] text-sm text-[#6b7280]">
                Fare
              </th>

              <th className="text-left p-[15px] text-sm text-[#6b7280]">
                Action
              </th>
            </tr>

          </thead>

          <tbody>

            {filtered.map((r) => (
              <tr
                key={r.id}
                className="hover:bg-[#fafafa] transition"
              >

                {/* RIDE */}
                <td className="p-[16px_15px] border-b border-[#f3f4f6]">

                  <div>
                    <p className="font-semibold text-[#111827]">
                      {r.id}
                    </p>

                    <span className="text-xs text-[#6b7280]">
                      Ride ID
                    </span>
                  </div>

                </td>

                {/* USER */}
                <td className="p-[16px_15px] border-b border-[#f3f4f6] text-sm text-[#374151]">
                  {r.user}
                </td>

                {/* DRIVER */}
                <td className="p-[16px_15px] border-b border-[#f3f4f6] text-sm text-[#374151]">
                  {r.driver}
                </td>

                {/* ROUTE */}
                <td className="p-[16px_15px] border-b border-[#f3f4f6] text-sm text-[#374151]">

                  <div className="flex items-center gap-2">
                    <span>{r.from}</span>

                    <span className="text-[#6b7280]">
                      →
                    </span>

                    <span>{r.to}</span>
                  </div>

                </td>

                {/* STATUS */}
                <td className="p-[16px_15px] border-b border-[#f3f4f6]">

                  <span
                    className={`py-1.5 px-3 rounded-full text-xs font-semibold ${statusStyle(
                      r.status
                    )}`}
                  >
                    {r.status}
                  </span>

                </td>

                {/* FARE */}
                <td className="p-[16px_15px] border-b border-[#f3f4f6] font-semibold text-[#111827]">
                  ₹{r.fare.toLocaleString("en-IN")}
                </td>

                {/* ACTION */}
                <td className="p-[16px_15px] border-b border-[#f3f4f6]">

                  <div className="flex gap-2">

                    <button className="bg-[#eff6ff] text-[#2563eb] py-[7px] px-3 rounded-lg text-[13px] font-semibold hover:bg-[#dbeafe]">
                      View
                    </button>

                    <button className="bg-[#eff6ff] text-[#2563eb] py-[7px] px-3 rounded-lg text-[13px] font-semibold hover:bg-[#dbeafe]">
                      Track
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