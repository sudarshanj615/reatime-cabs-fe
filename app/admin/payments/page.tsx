"use client";

import { useState } from "react";

const payments = [
  {
    id: "#TXN1001",
    user: "Rahul Sharma",
    type: "Ride Payment",
    amount: 450,
    method: "UPI",
    status: "Success",
    date: "Today",
  },
  {
    id: "#TXN1002",
    user: "Anjali Verma",
    type: "Driver Payout",
    amount: 1200,
    method: "Bank",
    status: "Pending",
    date: "Today",
  },
  {
    id: "#TXN1003",
    user: "Amit Singh",
    type: "Refund",
    amount: 300,
    method: "UPI",
    status: "Processing",
    date: "Yesterday",
  },
  {
    id: "#TXN1004",
    user: "Neha Gupta",
    type: "Ride Payment",
    amount: 780,
    method: "Card",
    status: "Success",
    date: "Yesterday",
  },
];

export default function PaymentsPage() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All Status");
  const [typeFilter, setTypeFilter] = useState("All Type");

  const filteredPayments = payments.filter((p) => {
    const q = search.toLowerCase();

    const matchSearch =
      p.id.toLowerCase().includes(q) ||
      p.user.toLowerCase().includes(q) ||
      p.method.toLowerCase().includes(q);

    const matchStatus =
      statusFilter === "All Status" || p.status === statusFilter;

    const matchType =
      typeFilter === "All Type" || p.type === typeFilter;

    return matchSearch && matchStatus && matchType;
  });

  const totalRevenue = payments
    .filter((p) => p.status === "Success")
    .reduce((a, b) => a + b.amount, 0);

  const todayEarnings = payments
    .filter((p) => p.date === "Today")
    .reduce((a, b) => a + b.amount, 0);

  const pendingPayouts = payments
    .filter((p) => p.status === "Pending")
    .reduce((a, b) => a + b.amount, 0);

  const clearFilters = () => {
    setSearch("");
    setStatusFilter("All Status");
    setTypeFilter("All Type");
  };

  return (
    <div className="min-h-screen bg-[#fffdf3] px-6 py-6">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-7 max-[768px]:flex-col max-[768px]:items-start gap-4">
        <div>
          <h1 className="text-[30px] font-bold text-[#111827]">
            Payments
          </h1>
          <p className="text-[#6b7280]">
            Track all transactions and driver payouts
          </p>
        </div>

        <button className="bg-[#facc15] text-black font-semibold px-[18px] py-[11px] rounded-[10px] hover:bg-[#eab308] transition">
          Export CSV
        </button>
      </div>

      {/* KPI CARDS */}
      <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-5 mb-6">
        {[
          { label: "Total Revenue", value: totalRevenue },
          { label: "Today Earnings", value: todayEarnings },
          { label: "Pending Payouts", value: pendingPayouts },
          {
            label: "Failed Payments",
            value: payments.filter((p) => p.status === "Failed").length,
          },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-[14px] border border-[#e5e7eb]"
          >
            <p className="text-[#6b7280] text-sm mb-2">
              {item.label}
            </p>
            <h2 className="text-[26px] font-bold text-[#111827]">
              {item.label.includes("Payments")
                ? item.value
                : `INR ${item.value.toLocaleString("en-IN")}`}
            </h2>
          </div>
        ))}
      </div>

      {/* FILTERS */}
      <div className="bg-white p-[22px] rounded-[14px] border border-[#e5e7eb] mb-6">
        <div className="flex flex-wrap gap-4">

          <input
            className="flex-1 min-w-[220px] border rounded-[10px] px-4 py-3 bg-[#f9fafb]"
            placeholder="Search transaction..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            className="min-w-[180px] border rounded-[10px] px-4 py-3 bg-[#f9fafb]"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option>All Status</option>
            <option>Success</option>
            <option>Pending</option>
            <option>Processing</option>
            <option>Failed</option>
          </select>

          <select
            className="min-w-[180px] border rounded-[10px] px-4 py-3 bg-[#f9fafb]"
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
          >
            <option>All Type</option>
            <option>Ride Payment</option>
            <option>Driver Payout</option>
            <option>Refund</option>
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

        <table className="w-full min-w-[750px]">

          <thead className="bg-[#f9fafb] text-left">
            <tr className="text-[#6b7280] text-sm">
              <th className="p-4">Txn ID</th>
              <th className="p-4">User</th>
              <th className="p-4">Type</th>
              <th className="p-4">Amount</th>
              <th className="p-4">Method</th>
              <th className="p-4">Status</th>
              <th className="p-4">Date</th>
              <th className="p-4">Action</th>
            </tr>
          </thead>

          <tbody>
            {filteredPayments.map((p) => (
              <tr key={p.id} className="border-b hover:bg-[#fafafa]">

                <td className="p-4 font-semibold text-[#111827]">
                  {p.id}
                </td>

                <td className="p-4">{p.user}</td>
                <td className="p-4">{p.type}</td>

                <td className="p-4 font-semibold">
                  INR {p.amount.toLocaleString("en-IN")}
                </td>

                <td className="p-4">{p.method}</td>

                <td className="p-4">
                  <span
                    className={`text-xs px-3 py-1 rounded-full font-semibold ${
                      p.status === "Success"
                        ? "bg-[#dcfce7] text-[#16a34a]"
                        : p.status === "Pending"
                        ? "bg-[#fef3c7] text-[#b45309]"
                        : p.status === "Processing"
                        ? "bg-[#dbeafe] text-[#0284c7]"
                        : "bg-[#fee2e2] text-[#dc2626]"
                    }`}
                  >
                    {p.status}
                  </span>
                </td>

                <td className="p-4">{p.date}</td>

                <td className="p-4">
                  <button className="bg-[#eff6ff] text-[#2563eb] px-3 py-2 rounded-lg text-sm hover:bg-[#dbeafe]">
                    View
                  </button>
                </td>

              </tr>
            ))}

            {filteredPayments.length === 0 && (
              <tr>
                <td colSpan={8} className="text-center p-6 text-[#6b7280]">
                  No payments match these filters.
                </td>
              </tr>
            )}
          </tbody>

        </table>

      </div>

    </div>
  );
}