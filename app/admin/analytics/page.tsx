"use client";

import { useMemo, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";

/* ---------------- DATA ---------------- */
type RideStats = {
  date: string;
  rides: number;
  revenue: number;
};

const data: RideStats[] = [
  { date: "2026-05-01", rides: 120, revenue: 12500 },
  { date: "2026-05-02", rides: 90, revenue: 9800 },
  { date: "2026-05-03", rides: 150, revenue: 15200 },
  { date: "2026-05-04", rides: 80, revenue: 8700 },
  { date: "2026-05-05", rides: 200, revenue: 21000 },
];

/* ---------------- PAGE ---------------- */
export default function AnalyticsPage() {
  const [search, setSearch] = useState("");

  /* FILTERED TABLE DATA */
  const filtered = useMemo(() => {
    return data.filter((item) =>
      item.date.includes(search)
    );
  }, [search]);

  /* STATS */
  const totalRides = data.reduce(
    (acc, i) => acc + i.rides,
    0
  );

  const totalRevenue = data.reduce(
    (acc, i) => acc + i.revenue,
    0
  );

  const avgRevenue = totalRevenue / data.length;

  /* CLEAR */
  const clearFilters = () => {
    setSearch("");
  };

  return (
    <div className="min-h-screen bg-[#fffdf3] px-6 py-6">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-7 gap-5 max-[768px]:flex-col max-[768px]:items-start">

        <div>

          <h1 className="text-[30px] font-bold text-[#111827]">
            Analytics Dashboard
          </h1>

          <p className="text-[#6b7280]">
            Ride, revenue & performance insights
          </p>

        </div>

        <div className="flex items-center gap-4 max-[768px]:w-full max-[768px]:justify-between">

          <button className="border-0 cursor-pointer py-[11px] px-[18px] rounded-[10px] bg-[#facc15] text-black font-semibold hover:bg-[#eab308] hover:-translate-y-px transition">
            Export Report
          </button>

          <div className="w-[42px] h-[42px] rounded-full bg-[linear-gradient(135deg,#facc15,#eab308)]" />

        </div>

      </div>

      {/* STATS */}
      <div className="grid grid-cols-3 gap-5 mb-6 max-[900px]:grid-cols-1">

        {/* TOTAL RIDES */}
        <div className="bg-white rounded-[16px] border border-[#f0e6c2] shadow-[0_4px_12px_rgba(0,0,0,0.04)] p-6">

          <p className="text-sm text-[#6b7280] mb-2">
            Total Rides
          </p>

          <h2 className="text-[30px] font-bold text-[#111827]">
            {totalRides}
          </h2>

        </div>

        {/* REVENUE */}
        <div className="bg-white rounded-[16px] border border-[#f0e6c2] shadow-[0_4px_12px_rgba(0,0,0,0.04)] p-6">

          <p className="text-sm text-[#6b7280] mb-2">
            Total Revenue
          </p>

          <h2 className="text-[30px] font-bold text-[#16a34a]">
            ₹{totalRevenue.toLocaleString("en-IN")}
          </h2>

        </div>

        {/* AVG */}
        <div className="bg-white rounded-[16px] border border-[#f0e6c2] shadow-[0_4px_12px_rgba(0,0,0,0.04)] p-6">

          <p className="text-sm text-[#6b7280] mb-2">
            Avg Revenue / Day
          </p>

          <h2 className="text-[30px] font-bold text-[#2563eb]">
            ₹{avgRevenue.toFixed(0)}
          </h2>

        </div>

      </div>

      {/* CHARTS */}
      <div className="grid grid-cols-2 gap-6 mb-6 max-[900px]:grid-cols-1">

        {/* RIDES CHART */}
        <div className="bg-white rounded-[16px] border border-[#f0e6c2] shadow-[0_4px_12px_rgba(0,0,0,0.04)] p-5">

          <h2 className="text-[18px] font-semibold text-[#111827] mb-5">
            Rides Trend
          </h2>

          <ResponsiveContainer width="100%" height={300}>

            <LineChart data={data}>

              <CartesianGrid strokeDasharray="3 3" />

              <XAxis dataKey="date" />

              <YAxis />

              <Tooltip />

              <Line
                type="monotone"
                dataKey="rides"
                stroke="#2563eb"
                strokeWidth={3}
              />

            </LineChart>

          </ResponsiveContainer>

        </div>

        {/* REVENUE CHART */}
        <div className="bg-white rounded-[16px] border border-[#f0e6c2] shadow-[0_4px_12px_rgba(0,0,0,0.04)] p-5">

          <h2 className="text-[18px] font-semibold text-[#111827] mb-5">
            Revenue Growth
          </h2>

          <ResponsiveContainer width="100%" height={300}>

            <BarChart data={data}>

              <CartesianGrid strokeDasharray="3 3" />

              <XAxis dataKey="date" />

              <YAxis />

              <Tooltip />

              <Bar
                dataKey="revenue"
                fill="#16a34a"
              />

            </BarChart>

          </ResponsiveContainer>

        </div>

      </div>

      {/* FILTER BAR */}
      <div className="bg-white rounded-[16px] border border-[#f0e6c2] shadow-[0_4px_12px_rgba(0,0,0,0.04)] p-5 mb-6">

        <div className="flex flex-wrap gap-3 items-center">

          {/* SEARCH */}
          <input
            type="text"
            placeholder="Search by date (YYYY-MM-DD)..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            className="flex-1 min-w-[220px] border border-[#e5e7eb] rounded-[10px] py-3 px-3.5 text-sm focus:outline-none focus:border-[#2563eb] focus:shadow-[0_0_0_4px_rgba(37,99,235,0.1)]"
          />

          {/* CLEAR */}
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

        <table className="w-full border-collapse min-w-[700px]">

          <thead className="bg-[#f9fafb]">

            <tr>

              <th className="text-left p-[15px] text-sm text-[#6b7280]">
                Date
              </th>

              <th className="text-left p-[15px] text-sm text-[#6b7280]">
                Rides
              </th>

              <th className="text-left p-[15px] text-sm text-[#6b7280]">
                Revenue
              </th>

              <th className="text-left p-[15px] text-sm text-[#6b7280]">
                Status
              </th>

            </tr>

          </thead>

          <tbody>

            {filtered.map((item) => (
              <tr
                key={item.date}
                className="hover:bg-[#fafafa] transition"
              >

                {/* DATE */}
                <td className="p-[16px_15px] border-b border-[#f3f4f6] font-semibold text-[#111827]">
                  {item.date}
                </td>

                {/* RIDES */}
                <td className="p-[16px_15px] border-b border-[#f3f4f6] text-sm text-[#374151]">
                  {item.rides}
                </td>

                {/* REVENUE */}
                <td className="p-[16px_15px] border-b border-[#f3f4f6] font-semibold text-[#16a34a]">
                  ₹{item.revenue.toLocaleString("en-IN")}
                </td>

                {/* STATUS */}
                <td className="p-[16px_15px] border-b border-[#f3f4f6]">

                  <span
                    className={`py-1.5 px-3 rounded-full text-xs font-semibold ${
                      item.rides > 150
                        ? "bg-[#dcfce7] text-[#16a34a]"
                        : item.rides > 100
                        ? "bg-[#dbeafe] text-[#0284c7]"
                        : "bg-[#fef3c7] text-[#b45309]"
                    }`}
                  >
                    {item.rides > 150
                      ? "High Demand"
                      : item.rides > 100
                      ? "Normal"
                      : "Low"}
                  </span>

                </td>

              </tr>
            ))}

            {/* EMPTY */}
            {filtered.length === 0 && (
              <tr>

                <td
                  colSpan={4}
                  className="text-center p-7 text-[#6b7280]"
                >
                  No analytics data found
                </td>

              </tr>
            )}

          </tbody>

        </table>

      </div>

    </div>
  );
}