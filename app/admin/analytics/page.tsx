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

/* ---------------- DATA (single source of truth) ---------------- */
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

/* ---------------- COMPONENT ---------------- */
export default function AnalyticsPage() {
  const [search, setSearch] = useState("");

  /* FILTERED DATA (used for table only) */
  const filtered = useMemo(() => {
    return data.filter((item) =>
      item.date.includes(search)
    );
  }, [search]);

  /* STATS */
  const totalRides = data.reduce((acc, i) => acc + i.rides, 0);
  const totalRevenue = data.reduce((acc, i) => acc + i.revenue, 0);
  const avgRevenue = totalRevenue / data.length;

  return (
    <div className="min-h-screen bg-[#fffdf3] px-6 py-6">

      {/* HEADER */}
      <div className="flex justify-between items-center flex-wrap gap-4 mb-6">

        <div>
          <h1 className="text-3xl font-bold text-[#111827]">
            Analytics Dashboard
          </h1>
          <p className="text-[#6b7280]">
            Ride, revenue & performance insights
          </p>
        </div>

        <button className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white px-5 py-3 rounded-xl font-semibold">
          Export Report
        </button>

      </div>

      {/* STATS CARDS */}
      <div className="grid grid-cols-3 gap-5 mb-6 max-[768px]:grid-cols-1">

        <div className="bg-white p-5 rounded-2xl border">
          <p className="text-sm text-gray-500">Total Rides</p>
          <h2 className="text-3xl font-bold">{totalRides}</h2>
        </div>

        <div className="bg-white p-5 rounded-2xl border">
          <p className="text-sm text-gray-500">Total Revenue</p>
          <h2 className="text-3xl font-bold text-green-600">
            ₹{totalRevenue}
          </h2>
        </div>

        <div className="bg-white p-5 rounded-2xl border">
          <p className="text-sm text-gray-500">Avg Revenue / Day</p>
          <h2 className="text-3xl font-bold text-blue-600">
            ₹{avgRevenue.toFixed(0)}
          </h2>
        </div>

      </div>

      {/* ---------------- CHARTS SECTION ---------------- */}
      <div className="grid grid-cols-2 gap-6 mb-6 max-[900px]:grid-cols-1">

        {/* LINE CHART - RIDES */}
        <div className="bg-white p-5 rounded-2xl border">
          <h2 className="font-semibold mb-4">
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

        {/* BAR CHART - REVENUE */}
        <div className="bg-white p-5 rounded-2xl border">
          <h2 className="font-semibold mb-4">
            Revenue Growth
          </h2>

          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="revenue" fill="#16a34a" />
            </BarChart>
          </ResponsiveContainer>
        </div>

      </div>

      {/* SEARCH */}
      <div className="bg-white p-4 rounded-2xl border mb-6">
        <input
          type="text"
          placeholder="Search by date (YYYY-MM-DD)"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full border px-4 py-3 rounded-xl outline-none"
        />
      </div>

      {/* TABLE */}
      <div className="bg-white rounded-2xl border overflow-auto">

        <table className="w-full min-w-[600px]">

          <thead className="bg-gray-50 border-b">
            <tr className="[&_th]:text-left [&_th]:p-4 text-gray-600">
              <th>Date</th>
              <th>Rides</th>
              <th>Revenue</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>

            {filtered.map((item) => (
              <tr
                key={item.date}
                className="border-b hover:bg-gray-50"
              >

                <td className="p-4 font-medium">
                  {item.date}
                </td>

                <td className="p-4">
                  {item.rides}
                </td>

                <td className="p-4 text-green-600 font-semibold">
                  ₹{item.revenue}
                </td>

                <td className="p-4">

                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      item.rides > 150
                        ? "bg-green-100 text-green-600"
                        : item.rides > 100
                        ? "bg-blue-100 text-blue-600"
                        : "bg-yellow-100 text-yellow-700"
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

          </tbody>

        </table>

      </div>

    </div>
  );
}