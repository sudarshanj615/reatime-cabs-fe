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
  const [statusFilter, setStatusFilter] =
    useState("All Status");
  const [typeFilter, setTypeFilter] =
    useState("All Type");

  const filteredPayments = payments.filter((payment) => {
    const query = search.trim().toLowerCase();

    const matchesSearch =
      payment.id.toLowerCase().includes(query) ||
      payment.user.toLowerCase().includes(query) ||
      payment.method.toLowerCase().includes(query);

    const matchesStatus =
      statusFilter === "All Status" ||
      payment.status === statusFilter;

    const matchesType =
      typeFilter === "All Type" ||
      payment.type === typeFilter;

    return (
      matchesSearch &&
      matchesStatus &&
      matchesType
    );
  });

  const totalRevenue = payments
    .filter((payment) => payment.status === "Success")
    .reduce(
      (total, payment) => total + payment.amount,
      0
    );

  const todayEarnings = payments
    .filter((payment) => payment.date === "Today")
    .reduce(
      (total, payment) => total + payment.amount,
      0
    );

  const pendingPayouts = payments
    .filter((payment) => payment.status === "Pending")
    .reduce(
      (total, payment) => total + payment.amount,
      0
    );

  const clearFilters = () => {
    setSearch("");
    setStatusFilter("All Status");
    setTypeFilter("All Type");
  };

  return (
    <div className="payments-page min-h-screen bg-[#fffdf3] px-6 py-6">
            <div className="flex justify-between items-center mb-7 gap-5 max-[768px]:flex-col max-[768px]:items-start [&>h1]:text-[30px] [&>h1]:font-bold [&>h1]:text-[#111827]">
              <div >
                <h1>Payments</h1>

                <p className="text-[#6b7280]">
                  Track all transactions and driver payouts
                </p>
              </div>

              <button className="border-0 outline-none cursor-pointer py-[11px] px-[18px] rounded-[10px] bg-[#2563eb] text-white font-semibold transition duration-200 ease-in hover:bg-[#1d4ed8] hover:-translate-y-px">
                Export CSV
              </button>

            </div>

            {/* KPI CARDS */}
            <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-5 mb-6 max-[768px]:grid-cols-1">

              <div className="bg-white rounded-[14px] p-6 shadow-[0_4px_10px_rgba(0,0,0,0.04)] border border-[#e5e7eb]">
                <p className="text-[#6b7280] mb-[10px] text-sm">
                  Total Revenue
                </p>

                <h2 className="text-[28px] font-bold text-[#111827]">
                  INR {totalRevenue.toLocaleString("en-IN")}
                </h2>
              </div>

              <div className="bg-white rounded-[14px] p-6 shadow-[0_4px_10px_rgba(0,0,0,0.04)] border border-[#e5e7eb]">
                <p className="text-[#6b7280] mb-[10px] text-sm">
                  Today Earnings
                </p>

                <h2 className="text-[28px] font-bold text-[#111827]">
                  INR {todayEarnings.toLocaleString("en-IN")}
                </h2>
              </div>

              <div className="bg-white rounded-[14px] p-6 shadow-[0_4px_10px_rgba(0,0,0,0.04)] border border-[#e5e7eb]">
                <p className="text-[#6b7280] mb-[10px] text-sm">
                  Pending Payouts
                </p>

                <h2 className="text-[28px] font-bold text-[#111827]">
                  INR {pendingPayouts.toLocaleString("en-IN")}
                </h2>
              </div>

              <div className="bg-white rounded-[14px] p-6 shadow-[0_4px_10px_rgba(0,0,0,0.04)] border border-[#e5e7eb]">
                <p className="text-[#6b7280] mb-[10px] text-sm">
                  Failed Payments
                </p>

                <h2 className="text-[28px] font-bold text-[#111827]">
                  {
                    payments.filter(
                      (payment) =>
                        payment.status === "Failed"
                    ).length
                  }
                </h2>
              </div>

            </div>

            {/* FILTER BOX */}
            <div className="bg-white rounded-[14px] p-[22px] shadow-[0_4px_10px_rgba(0,0,0,0.04)] border border-[#e5e7eb] mb-6">

              <div className="flex flex-wrap gap-4 items-center">

                {/* SEARCH */}
                <div className="flex-1 min-w-[240px]">
                  <input
                    className="w-full border border-[#e5e7eb] rounded-[10px] py-3 px-4 bg-[#f9fafb] text-sm transition duration-200 ease-in focus:outline-none focus:border-[#2563eb] focus:bg-white focus:shadow-[0_0_0_4px_rgba(37,99,235,0.1)]"
                    placeholder="Search transaction, user or method..."
                    value={search}
                    onChange={(e) =>
                      setSearch(e.target.value)
                    }
                  />
                </div>

                {/* STATUS */}
                <div className="min-w-[190px]">
                  <select
                    className="w-full border border-[#e5e7eb] rounded-[10px] py-3 px-4 bg-[#f9fafb] text-sm transition duration-200 ease-in focus:outline-none focus:border-[#2563eb] focus:bg-white focus:shadow-[0_0_0_4px_rgba(37,99,235,0.1)]"
                    value={statusFilter}
                    onChange={(e) =>
                      setStatusFilter(e.target.value)
                    }
                  >
                    <option>All Status</option>
                    <option>Success</option>
                    <option>Pending</option>
                    <option>Processing</option>
                    <option>Failed</option>
                  </select>
                </div>

                {/* TYPE */}
                <div className="min-w-[190px]">
                  <select
                    className="w-full border border-[#e5e7eb] rounded-[10px] py-3 px-4 bg-[#f9fafb] text-sm transition duration-200 ease-in focus:outline-none focus:border-[#2563eb] focus:bg-white focus:shadow-[0_0_0_4px_rgba(37,99,235,0.1)]"
                    value={typeFilter}
                    onChange={(e) =>
                      setTypeFilter(e.target.value)
                    }
                  >
                    <option>All Type</option>
                    <option>Ride Payment</option>
                    <option>Driver Payout</option>
                    <option>Refund</option>
                  </select>
                </div>

                {/* CLEAR */}
                <button
                  type="button"
                  onClick={clearFilters}
                  className="border-0 outline-none cursor-pointer py-3 px-5 rounded-[10px] bg-[#111827] text-white text-sm font-semibold transition duration-200 ease-in hover:bg-black"
                >
                  Clear
                </button>

              </div>

            </div>

            <div className="bg-white rounded-[14px] p-[22px] shadow-[0_4px_10px_rgba(0,0,0,0.04)] border border-[#e5e7eb] ">
              <table className="w-full border-collapse max-[768px]:min-w-[750px] [&_thead]:bg-[#f9fafb] [&_th]:text-left [&_th]:p-[15px] [&_th]:text-sm [&_th]:text-[#6b7280] [&_th]:border-b [&_th]:border-[#e5e7eb] [&_td]:p-[16px_15px] [&_td]:border-b [&_td]:border-[#f3f4f6] [&_td]:text-[#374151] [&_td]:text-sm [&_tr:hover]:bg-[#fafafa] [&_.status]:py-1.5 [&_.status]:px-3 [&_.status]:rounded-full [&_.status]:text-xs [&_.status]:font-semibold [&_.active]:bg-[#dcfce7] [&_.active]:text-[#16a34a] [&_.online]:bg-[#dcfce7] [&_.online]:text-[#16a34a] [&_.completed]:bg-[#dcfce7] [&_.completed]:text-[#16a34a] [&_.success]:bg-[#dcfce7] [&_.success]:text-[#16a34a] [&_.pending]:bg-[#fef3c7] [&_.pending]:text-[#b45309] [&_.processing]:bg-[#fef3c7] [&_.processing]:text-[#b45309] [&_.cancelled]:bg-[#fee2e2] [&_.cancelled]:text-[#dc2626] [&_.blocked]:bg-[#fee2e2] [&_.blocked]:text-[#dc2626] [&_.ongoing]:bg-[#dbeafe] [&_.ongoing]:text-[#0284c7] [&_.info]:bg-[#dbeafe] [&_.info]:text-[#0284c7] [&_.busy]:bg-[#dbeafe] [&_.busy]:text-[#0284c7] [&_.offline]:bg-[#e5e7eb] [&_.offline]:text-[#4b5563] [&_.inactive]:bg-[#e5e7eb] [&_.inactive]:text-[#4b5563]">
                <thead>
                  <tr>
                    <th>Txn ID</th>
                    <th>User</th>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Method</th>
                    <th>Status</th>
                    <th>Date</th>
                    <th>Action</th>
                  </tr>
                </thead>

                <tbody>

                  {filteredPayments.map((payment) => (
                    <tr key={payment.id}>

                      <td className="font-semibold text-[#111827]">
                        {payment.id}
                      </td>

                      <td>{payment.user}</td>

                      <td>{payment.type}</td>

                      <td className="font-semibold">
                        INR{" "}
                        {payment.amount.toLocaleString(
                          "en-IN"
                        )}
                      </td>

                      <td>{payment.method}</td>

                      {/* STATUS */}
                      <td>
                        <span
                          className={`py-1.5 px-3 rounded-full text-xs font-semibold ${payment.status === "Success"
                              ? "bg-[#dcfce7] text-[#16a34a]"
                              : payment.status === "Pending"
                                ? "bg-[#fef3c7] text-[#b45309]"
                                : payment.status ===
                                  "Processing"
                                  ? "bg-[#dbeafe] text-[#0284c7]"
                                  : "bg-[#fee2e2] text-[#dc2626]"
                            }`}
                        >
                          {payment.status}
                        </span>
                      </td>

                      <td>{payment.date}</td>

                      {/* ACTION */}
                      <td>
                        <button className="border-0 bg-[#eff6ff] text-[#2563eb] py-[7px] px-3 rounded-lg cursor-pointer text-[13px] font-semibold hover:bg-[#dbeafe]">
                          View
                        </button>
                      </td>

                    </tr>
                  ))}

                  {filteredPayments.length === 0 && (
                    <tr>
                      <td
                        colSpan={8}
                        className="text-center text-[#6b7280] !p-7"
                      >
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