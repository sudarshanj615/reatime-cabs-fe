"use client";

import { useState } from "react";

export default function RidesPage() {
  const [search, setSearch] =
    useState("");

  const [statusFilter, setStatusFilter] =
    useState("All Status");

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

  const filtered = rides.filter(
    (r) => {

      const query =
        search
          .trim()
          .toLowerCase();

      const matchesSearch =
        r.id
          .toLowerCase()
          .includes(query) ||

        r.user
          .toLowerCase()
          .includes(query) ||

        r.driver
          .toLowerCase()
          .includes(query) ||

        r.from
          .toLowerCase()
          .includes(query) ||

        r.to
          .toLowerCase()
          .includes(query);

      const matchesStatus =
        statusFilter ===
          "All Status" ||
        r.status ===
          statusFilter;

      return (
        matchesSearch &&
        matchesStatus
      );
    }
  );

  const clearFilters = () => {
    setSearch("");
    setStatusFilter(
      "All Status"
    );
  };

  return (
    <div>

      {/* HEADER */}
      <div className="flex justify-between items-center mb-7 gap-5 max-[768px]:flex-col max-[768px]:items-start">

        <h1 className="text-[30px] font-bold text-[#111827]">
          Rides
        </h1>

        <div className="flex items-center gap-4">

          <button className="border-0 outline-none cursor-pointer py-[11px] px-[18px] rounded-[10px] bg-[#2563eb] text-white font-semibold transition duration-200 ease-in hover:bg-[#1d4ed8] hover:-translate-y-px">
            Export Rides
          </button>

          <div className="w-[42px] h-[42px] rounded-full bg-[linear-gradient(135deg,#2563eb,#60a5fa)]" />

        </div>
      </div>

      {/* FILTER BOX */}
      <div className="bg-white border border-[#e5e7eb] rounded-[16px] p-5 shadow-[0_4px_12px_rgba(0,0,0,0.05)] mb-6">

        <div className="flex items-center justify-between mb-5 max-[768px]:flex-col max-[768px]:items-start gap-3">

          <div>

            <h2 className="text-lg font-bold text-[#111827]">
              Filter Bar
            </h2>

            <p className="text-sm text-[#6b7280] mt-1">
              Search and filter rides
            </p>

          </div>

          <button
            type="button"
            onClick={clearFilters}
            className="border-0 outline-none cursor-pointer py-[10px] px-[16px] rounded-[10px] bg-[#111827] text-white text-sm font-semibold hover:bg-black transition"
          >
            Clear Filters
          </button>

        </div>

        {/* FILTER ROW */}
        <div className="grid grid-cols-2 gap-4 max-[900px]:grid-cols-1">

          {/* SEARCH */}
          <div className="flex flex-col gap-2">

            <label className="text-sm font-semibold text-[#374151]">
              Search
            </label>

            <input
              className="border border-[#e5e7eb] rounded-[12px] py-3 px-4 bg-[#fafafa] text-sm transition duration-200 ease-in focus:outline-none focus:border-[#2563eb] focus:bg-white focus:shadow-[0_0_0_4px_rgba(37,99,235,0.1)]"
              placeholder="Search rides..."
              value={search}
              onChange={(e) =>
                setSearch(
                  e.target.value
                )
              }
            />

          </div>

          {/* STATUS */}
          <div className="flex flex-col gap-2">

            <label className="text-sm font-semibold text-[#374151]">
              All Status
            </label>

            <select
              className="border border-[#e5e7eb] rounded-[12px] py-3 px-4 bg-[#fafafa] text-sm transition duration-200 ease-in focus:outline-none focus:border-[#2563eb] focus:bg-white focus:shadow-[0_0_0_4px_rgba(37,99,235,0.1)]"
              value={statusFilter}
              onChange={(e) =>
                setStatusFilter(
                  e.target.value
                )
              }
            >
              <option>
                All Status
              </option>

              <option>
                Ongoing
              </option>

              <option>
                Completed
              </option>

              <option>
                Pending
              </option>

              <option>
                Cancelled
              </option>

            </select>

          </div>

        </div>
      </div>

      {/* TABLE */}
      <div className="bg-white rounded-[14px] p-[22px] shadow-[0_4px_10px_rgba(0,0,0,0.04)] border border-[#e5e7eb] overflow-x-auto">

        <table className="w-full border-collapse min-w-[950px]">

          <thead className="bg-[#f9fafb]">

            <tr>

              <th className="text-left p-[15px] text-sm text-[#6b7280] border-b border-[#e5e7eb]">
                Ride
              </th>

              <th className="text-left p-[15px] text-sm text-[#6b7280] border-b border-[#e5e7eb]">
                User
              </th>

              <th className="text-left p-[15px] text-sm text-[#6b7280] border-b border-[#e5e7eb]">
                Driver
              </th>

              <th className="text-left p-[15px] text-sm text-[#6b7280] border-b border-[#e5e7eb]">
                Route
              </th>

              <th className="text-left p-[15px] text-sm text-[#6b7280] border-b border-[#e5e7eb]">
                Status
              </th>

              <th className="text-left p-[15px] text-sm text-[#6b7280] border-b border-[#e5e7eb]">
                Fare
              </th>

              <th className="text-left p-[15px] text-sm text-[#6b7280] border-b border-[#e5e7eb]">
                Action
              </th>

            </tr>

          </thead>

          <tbody>

            {filtered.map(
              (ride) => (

                <tr
                  key={ride.id}
                  className="hover:bg-[#fafafa]"
                >

                  {/* RIDE */}
                  <td className="p-[16px_15px] border-b border-[#f3f4f6]">

                    <div>

                      <p className="font-semibold text-[#111827]">
                        {ride.id}
                      </p>

                      <span className="text-xs text-[#6b7280]">
                        Ride ID
                      </span>

                    </div>

                  </td>

                  {/* USER */}
                  <td className="p-[16px_15px] border-b border-[#f3f4f6] text-sm text-[#374151]">
                    {ride.user}
                  </td>

                  {/* DRIVER */}
                  <td className="p-[16px_15px] border-b border-[#f3f4f6] text-sm text-[#374151]">
                    {ride.driver}
                  </td>

                  {/* ROUTE */}
                  <td className="p-[16px_15px] border-b border-[#f3f4f6]">

                    <div className="flex items-center gap-[10px]">

                      <span>
                        {ride.from}
                      </span>

                      <span className="text-[#6b7280]">
                        →
                      </span>

                      <span>
                        {ride.to}
                      </span>

                    </div>

                  </td>

                  {/* STATUS */}
                  <td className="p-[16px_15px] border-b border-[#f3f4f6]">

                    <span
                      className={`py-1.5 px-3 rounded-full text-xs font-semibold ${
                        ride.status ===
                        "Completed"
                          ? "bg-[#dcfce7] text-[#16a34a]"
                          : ride.status ===
                            "Pending"
                          ? "bg-[#fef3c7] text-[#b45309]"
                          : ride.status ===
                            "Cancelled"
                          ? "bg-[#fee2e2] text-[#dc2626]"
                          : "bg-[#dbeafe] text-[#0284c7]"
                      }`}
                    >
                      {ride.status}
                    </span>

                  </td>

                  {/* FARE */}
                  <td className="p-[16px_15px] border-b border-[#f3f4f6] font-semibold text-[#111827]">
                    ₹{ride.fare}
                  </td>

                  {/* ACTION */}
                  <td className="p-[16px_15px] border-b border-[#f3f4f6]">

                    <div className="flex flex-wrap gap-2">

                      <button className="border-0 bg-[#eff6ff] text-[#2563eb] py-[7px] px-3 rounded-lg cursor-pointer text-[13px] font-semibold hover:bg-[#dbeafe]">
                        View
                      </button>

                      <button className="border-0 bg-[#eff6ff] text-[#2563eb] py-[7px] px-3 rounded-lg cursor-pointer text-[13px] font-semibold hover:bg-[#dbeafe]">
                        Track
                      </button>

                    </div>

                  </td>

                </tr>
              )
            )}

            {filtered.length ===
              0 && (

              <tr>

                <td
                  colSpan={7}
                  className="text-center text-[#6b7280] p-7"
                >
                  No rides match
                  these filters.
                </td>

              </tr>
            )}

          </tbody>

        </table>

      </div>

    </div>
  );
}