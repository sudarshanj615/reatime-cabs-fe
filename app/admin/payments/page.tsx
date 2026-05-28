"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

export default function PaymentsPage() {

  const [payments, setPayments] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] =
    useState("All Status");

  const [typeFilter, setTypeFilter] =
    useState("All Type");

  // ✅ FETCH PAYMENTS
  const fetchPayments = async () => {

    try {

      const res = await axios.get(
        "http://192.168.1.23:8081/payments"
      );

      console.log("API RESPONSE:", res.data);

      // ✅ SAFE ARRAY CHECK
      setPayments(
        Array.isArray(res.data)
          ? res.data
          : []
      );

    } catch (err) {

      console.error(err);

      Swal.fire(
        "Error",
        "Failed to fetch payments",
        "error"
      );

    } finally {

      setLoading(false);

    }
  };

  useEffect(() => {
    fetchPayments();
  }, []);

  // ✅ FILTER PAYMENTS
  const filteredPayments = payments.filter((p) => {

    const q = search.toLowerCase();

    const matchSearch =
      String(p.id || "")
        .toLowerCase()
        .includes(q) ||

      String(p.user || "")
        .toLowerCase()
        .includes(q) ||

      String(p.method || "")
        .toLowerCase()
        .includes(q);

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

  // ✅ KPI DATA
  const totalRevenue = payments
    .filter((p) => p.status === "Success")
    .reduce(
      (a, b) => a + Number(b.amount || 0),
      0
    );

  const todayEarnings = payments
    .filter((p) => p.date === "Today")
    .reduce(
      (a, b) => a + Number(b.amount || 0),
      0
    );

  const pendingPayouts = payments
    .filter((p) => p.status === "Pending")
    .reduce(
      (a, b) => a + Number(b.amount || 0),
      0
    );

  // ✅ CLEAR FILTERS
  const clearFilters = () => {

    setSearch("");

    setStatusFilter("All Status");

    setTypeFilter("All Type");

  };

  // ✅ VIEW PAYMENT
  const handleView = (payment: any) => {

    Swal.fire({

      title: payment.id || "Payment",

      html: `
        <div style="text-align:left; line-height:1.9">

          <p><b>Transaction ID:</b> ${payment.id || "N/A"}</p>

          <p><b>User:</b> ${payment.user || "N/A"}</p>

          <p><b>Email:</b> ${payment.email || "N/A"}</p>

          <p><b>Phone:</b> ${payment.phone || "N/A"}</p>

          <p><b>City:</b> ${payment.city || "N/A"}</p>

          <p><b>Payment Type:</b> ${payment.type || "N/A"}</p>

          <p><b>Amount:</b> INR ${
            payment.amount || 0
          }</p>

          <p><b>Method:</b> ${payment.method || "N/A"}</p>

          <p><b>Status:</b> ${payment.status || "N/A"}</p>

          <p><b>Date:</b> ${payment.date || "N/A"}</p>

        </div>
      `,

      confirmButtonText: "Close",

      confirmButtonColor: "#facc15",

      width: 540,

    });
  };

  // ✅ LOADING
  if (loading) {

    return (
      <div className="flex items-center justify-center min-h-screen text-xl font-bold">
        Loading payments...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fffdf3] px-6 py-6">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-7">

        <div>

          <h1 className="text-[30px] font-bold text-[#111827]">
            Payments
          </h1>

          <p className="text-[#6b7280]">
            Track all transactions
          </p>

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
            className="bg-white p-6 rounded-[14px] border border-[#e5e7eb]"
          >

            <p className="text-[#6b7280] text-sm mb-2">
              {item.label}
            </p>

            <h2 className="text-[26px] font-bold text-[#111827]">

              {item.label.includes("Payments")
                ? item.value
                : `INR ${Number(
                    item.value
                  ).toLocaleString("en-IN")}`}

            </h2>

          </div>
        ))}

      </div>

      {/* FILTER BAR */}
      <div className="bg-white rounded-[16px] border border-[#f0e6c2] p-5 mb-6">

        <div className="flex flex-wrap gap-3.5 items-center">

          {/* SEARCH */}
          <input
            className="flex-1 min-w-[220px] border border-[#e5e7eb] rounded-[10px] py-3 px-3.5 text-sm"

            placeholder="Search transaction..."

            value={search}

            onChange={(e) =>
              setSearch(e.target.value)
            }
          />

          {/* STATUS */}
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

          {/* TYPE */}
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

          {/* CLEAR */}
          <button
            onClick={clearFilters}
            className="py-[11px] px-[18px] rounded-[10px] bg-[#111827] text-white"
          >
            Clear
          </button>

        </div>

      </div>

      {/* TABLE */}
      <div className="bg-white rounded-[14px] p-[22px] border border-[#e5e7eb] overflow-x-auto">

        <table className="w-full min-w-[900px]">

          <thead className="bg-[#f9fafb]">

            <tr>

              <th className="text-left p-4">
                Txn ID
              </th>

              <th className="text-left p-4">
                User
              </th>

              <th className="text-left p-4">
                Type
              </th>

              <th className="text-left p-4">
                Amount
              </th>

              <th className="text-left p-4">
                Method
              </th>

              <th className="text-left p-4">
                Status
              </th>

              <th className="text-left p-4">
                Date
              </th>

              <th className="text-left p-4">
                Action
              </th>

            </tr>

          </thead>

          <tbody>

            {filteredPayments.map((p, index) => (

              <tr
                key={p.id || index}
                className="hover:bg-[#fafafa]"
              >

                <td className="p-4 border-b">
                  {p.id}
                </td>

                <td className="p-4 border-b">
                  {p.user}
                </td>

                <td className="p-4 border-b">
                  {p.type}
                </td>

                <td className="p-4 border-b">
                  INR {Number(
                    p.amount || 0
                  ).toLocaleString("en-IN")}
                </td>

                <td className="p-4 border-b">
                  {p.method}
                </td>

                <td className="p-4 border-b">

                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
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

                <td className="p-4 border-b">
                  {p.date}
                </td>

                <td className="p-4 border-b">

                  <button
                    onClick={() =>
                      handleView(p)
                    }
                    className="bg-[#eff6ff] text-[#2563eb] py-[7px] px-3 rounded-lg text-[13px] font-semibold"
                  >
                    View
                  </button>

                </td>

              </tr>
            ))}

            {/* EMPTY */}
            {filteredPayments.length === 0 && (

              <tr>

                <td
                  colSpan={8}
                  className="text-center p-7 text-[#6b7280]"
                >
                  No payments found.
                </td>

              </tr>
            )}

          </tbody>

        </table>

      </div>

    </div>
  );
}