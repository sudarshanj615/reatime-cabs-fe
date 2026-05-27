"use client";

import { useState } from "react";
import Swal from "sweetalert2";

export default function PaymentsPage() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] =
    useState("All Status");

  const [typeFilter, setTypeFilter] =
    useState("All Type");

  // PAYMENTS STATE
  const [payments, setPayments] = useState([
    {
      id: "#TXN1001",
      user: "Rahul Sharma",
      type: "Ride Payment",
      amount: 450,
      method: "UPI",
      status: "Success",
      date: "Today",
      email: "rahul@gmail.com",
      phone: "+91 9876543210",
      city: "Aurangabad",
    },
    {
      id: "#TXN1002",
      user: "Anjali Verma",
      type: "Driver Payout",
      amount: 1200,
      method: "Bank",
      status: "Pending",
      date: "Today",
      email: "anjali@gmail.com",
      phone: "+91 9876543222",
      city: "Pune",
    },
    {
      id: "#TXN1003",
      user: "Amit Singh",
      type: "Refund",
      amount: 300,
      method: "UPI",
      status: "Processing",
      date: "Yesterday",
      email: "amit@gmail.com",
      phone: "+91 9876543233",
      city: "Mumbai",
    },
    {
      id: "#TXN1004",
      user: "Neha Gupta",
      type: "Ride Payment",
      amount: 780,
      method: "Card",
      status: "Success",
      date: "Yesterday",
      email: "neha@gmail.com",
      phone: "+91 9876543244",
      city: "Delhi",
    },
  ]);

  // FILTER PAYMENTS
  const filteredPayments = payments.filter((p) => {
    const q = search.toLowerCase();

    const matchSearch =
      p.id.toLowerCase().includes(q) ||
      p.user.toLowerCase().includes(q) ||
      p.method.toLowerCase().includes(q);

    const matchStatus =
      statusFilter === "All Status" ||
      p.status === statusFilter;

    const matchType =
      typeFilter === "All Type" ||
      p.type === typeFilter;

    return (
      matchSearch &&
      matchStatus &&
      matchType
    );
  });

  // KPI DATA
  const totalRevenue = payments
    .filter((p) => p.status === "Success")
    .reduce((a, b) => a + b.amount, 0);

  const todayEarnings = payments
    .filter((p) => p.date === "Today")
    .reduce((a, b) => a + b.amount, 0);

  const pendingPayouts = payments
    .filter((p) => p.status === "Pending")
    .reduce((a, b) => a + b.amount, 0);

  // CLEAR FILTERS
  const clearFilters = () => {
    setSearch("");
    setStatusFilter("All Status");
    setTypeFilter("All Type");
  };

  // VIEW PAYMENT
  const handleView = (payment: any) => {
    Swal.fire({
      title: payment.id,

      html: `
        <div style="text-align:left; line-height:1.9">

          <div style="display:flex; justify-content:center; margin-bottom:18px;">
            <div style="
              width:70px;
              height:70px;
              border-radius:999px;
              background:#dbeafe;
              color:#2563eb;
              display:flex;
              align-items:center;
              justify-content:center;
              font-size:28px;
              font-weight:700;
            ">
              ${payment.user.charAt(0)}
            </div>
          </div>

          <p><b>Transaction ID:</b> ${payment.id}</p>

          <p><b>User:</b> ${payment.user}</p>

          <p><b>Email:</b> ${payment.email}</p>

          <p><b>Phone:</b> ${payment.phone}</p>

          <p><b>City:</b> ${payment.city}</p>

          <p><b>Payment Type:</b> ${payment.type}</p>

          <p><b>Amount:</b> INR ${payment.amount}</p>

          <p><b>Method:</b> ${payment.method}</p>

          <p><b>Status:</b> ${payment.status}</p>

          <p><b>Date:</b> ${payment.date}</p>

        </div>
      `,

      confirmButtonText: "Close",
      confirmButtonColor: "#facc15",
      width: 540,
    });
  };

  // MARK SUCCESS
  const handleMarkSuccess = async (id: string) => {
    const currentPayment = payments.find(
      (p) => p.id === id
    );

    if (!currentPayment) return;

    const result = await Swal.fire({
      title: "Mark Payment Successful?",
      text: `Do you want to update ${currentPayment.id} as successful payment?`,
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#16a34a",
      cancelButtonColor: "#6b7280",
      confirmButtonText: "Yes, Update",
      cancelButtonText: "Cancel",
    });

    if (!result.isConfirmed) return;

    setPayments((prev) =>
      prev.map((payment) =>
        payment.id === id
          ? {
              ...payment,
              status: "Success",
            }
          : payment
      )
    );

    Swal.fire({
      icon: "success",
      title: "Payment Updated Successfully",
      timer: 1800,
      showConfirmButton: false,
    });
  };

  return (
    <div className="min-h-screen bg-[#fffdf3] px-6 py-6">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-7 gap-5 max-[768px]:flex-col max-[768px]:items-start">

        <div>
          <h1 className="text-[30px] font-bold text-[#111827]">
            Payments
          </h1>

          <p className="text-[#6b7280]">
            Track all transactions and driver payouts
          </p>
        </div>

        <div className="flex items-center gap-4 max-[768px]:w-full max-[768px]:justify-between">

          <button className="border-0 cursor-pointer py-[11px] px-[18px] rounded-[10px] bg-[#facc15] text-black font-semibold hover:bg-[#eab308] hover:-translate-y-px transition">
            Export CSV
          </button>

          <div className="w-[42px] h-[42px] rounded-full bg-[linear-gradient(135deg,#facc15,#eab308)]" />

        </div>

      </div>

      {/* KPI CARDS */}
      <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-5 mb-6">

        {[
          {
            label: "Total Revenue",
            value: totalRevenue,
          },
          {
            label: "Today Earnings",
            value: todayEarnings,
          },
          {
            label: "Pending Payouts",
            value: pendingPayouts,
          },
          {
            label: "Failed Payments",
            value: payments.filter(
              (p) => p.status === "Failed"
            ).length,
          },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-[14px] border border-[#e5e7eb] shadow-[0_4px_10px_rgba(0,0,0,0.04)]"
          >

            <p className="text-[#6b7280] text-sm mb-2">
              {item.label}
            </p>

            <h2 className="text-[26px] font-bold text-[#111827]">

              {item.label.includes("Payments")
                ? item.value
                : `INR ${Number(item.value).toLocaleString(
                    "en-IN"
                  )}`}

            </h2>

          </div>
        ))}

      </div>

      {/* FILTER BAR */}
      <div className="bg-white rounded-[16px] border border-[#f0e6c2] shadow-[0_4px_12px_rgba(0,0,0,0.04)] p-5 mb-6">

        <div className="flex flex-wrap gap-3.5 items-center">

          {/* SEARCH */}
          <input
            className="flex-1 min-w-[220px] border border-[#e5e7eb] rounded-[10px] py-3 px-3.5 text-sm focus:outline-none focus:border-[#2563eb] focus:shadow-[0_0_0_4px_rgba(37,99,235,0.1)]"
            placeholder="Search transaction..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
          />

          {/* STATUS FILTER */}
          <select
            className="min-w-[180px] border border-[#e5e7eb] rounded-[10px] py-3 px-3.5 text-sm"
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

          {/* TYPE FILTER */}
          <select
            className="min-w-[180px] border border-[#e5e7eb] rounded-[10px] py-3 px-3.5 text-sm"
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

          {/* CLEAR BUTTON */}
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
                Txn ID
              </th>

              <th className="text-left p-[15px] text-sm text-[#6b7280]">
                User
              </th>

              <th className="text-left p-[15px] text-sm text-[#6b7280]">
                Type
              </th>

              <th className="text-left p-[15px] text-sm text-[#6b7280]">
                Amount
              </th>

              <th className="text-left p-[15px] text-sm text-[#6b7280]">
                Method
              </th>

              <th className="text-left p-[15px] text-sm text-[#6b7280]">
                Status
              </th>

              <th className="text-left p-[15px] text-sm text-[#6b7280]">
                Date
              </th>

              <th className="text-left p-[15px] text-sm text-[#6b7280]">
                Action
              </th>

            </tr>

          </thead>

          <tbody>

            {filteredPayments.map((p) => (
              <tr
                key={p.id}
                className="hover:bg-[#fafafa] transition"
              >

                {/* TXN ID */}
                <td className="p-[16px_15px] border-b border-[#f3f4f6] font-semibold text-[#111827]">
                  {p.id}
                </td>

                {/* USER */}
                <td className="p-[16px_15px] border-b border-[#f3f4f6]">
                  {p.user}
                </td>

                {/* TYPE */}
                <td className="p-[16px_15px] border-b border-[#f3f4f6]">
                  {p.type}
                </td>

                {/* AMOUNT */}
                <td className="p-[16px_15px] border-b border-[#f3f4f6] font-semibold">
                  INR {p.amount.toLocaleString("en-IN")}
                </td>

                {/* METHOD */}
                <td className="p-[16px_15px] border-b border-[#f3f4f6]">
                  {p.method}
                </td>

                {/* STATUS */}
                <td className="p-[16px_15px] border-b border-[#f3f4f6]">

                  <span
                    className={`py-1.5 px-3 rounded-full text-xs font-semibold ${
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

                {/* DATE */}
                <td className="p-[16px_15px] border-b border-[#f3f4f6]">
                  {p.date}
                </td>

                {/* ACTION */}
                <td className="p-[16px_15px] border-b border-[#f3f4f6]">

                  <div className="flex gap-2 flex-wrap">

                    {/* VIEW BUTTON */}
                    <button
                      onClick={() => handleView(p)}
                      className="bg-[#eff6ff] text-[#2563eb] py-[7px] px-3 rounded-lg text-[13px] font-semibold hover:bg-[#dbeafe]"
                    >
                      View
                    </button>

                    {/* SUCCESS BUTTON */}
                    {p.status !== "Success" && (
                      <button
                        onClick={() =>
                          handleMarkSuccess(p.id)
                        }
                        className="bg-[#dcfce7] text-[#16a34a] py-[7px] px-3 rounded-lg text-[13px] font-semibold hover:bg-[#bbf7d0]"
                      >
                        Mark Success
                      </button>
                    )}

                  </div>

                </td>

              </tr>
            ))}

            {/* EMPTY STATE */}
            {filteredPayments.length === 0 && (
              <tr>

                <td
                  colSpan={8}
                  className="text-center p-7 text-[#6b7280]"
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