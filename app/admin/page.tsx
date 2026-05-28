"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

export default function AdminDashboard() {
  const [showReportDropdown, setShowReportDropdown] =
    useState(false);

  // ✅ BACKEND STATES
  const [kpis, setKpis] = useState<any>({});
  const [recentRides, setRecentRides] = useState<any[]>([]);
  const [alerts, setAlerts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // ✅ FETCH DASHBOARD DATA
  const fetchDashboard = async () => {
    try {
      const [kpiRes, ridesRes, alertsRes] =
        await Promise.all([
          axios.get("http://192.168.1.23:8081/dashboard"),
          axios.get("http://192.168.1.23:8081/rides"),
          axios.get("http://192.168.1.23:8081/alerts"),
        ]);

      setKpis(kpiRes.data || {});
      setRecentRides(ridesRes.data || []);
      setAlerts(alertsRes.data || []);
    } catch (err) {
      Swal.fire(
        "Error",
        "Failed to load dashboard data",
        "error"
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDashboard();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen text-xl font-bold">
        Loading dashboard...
      </div>
    );
  }

  return (
    <div className="admin-dashboard min-h-screen bg-[#fffdf3] px-6 py-6">

      {/* HEADER (UNCHANGED UI) */}
      <div className="flex justify-between items-center mb-7 gap-5 max-[768px]:flex-col max-[768px]:items-start [&>h1]:text-[30px] [&>h1]:font-bold [&>h1]:text-[#111827]">

        <h1>Dashboard</h1>

        <div className="flex items-center gap-4 flex-wrap max-[768px]:w-full">

          <Link href="/admin/users/create">
            <button className="py-[11px] px-[18px] rounded-[10px] bg-[#facc15] text-black font-semibold">
              Create New Account
            </button>
          </Link>

          <Link href="/admin/rides/create">
            <button className="py-[11px] px-[18px] rounded-[10px] bg-[#facc15] text-black font-semibold">
              Create New Ride
            </button>
          </Link>

          {/* REPORT DROPDOWN (UNCHANGED) */}
          <div className="relative">

            <button
              onClick={() =>
                setShowReportDropdown(!showReportDropdown)
              }
              className="py-[11px] px-[18px] rounded-[10px] bg-[#facc15] text-black font-semibold"
            >
              Generate Report
            </button>

            {showReportDropdown && (
              <div className="absolute top-[55px] right-0 bg-white border rounded-[10px] shadow-md w-[180px] z-50">

                <button
                  onClick={() =>
                    Swal.fire(
                      "Success",
                      "CSV report generated successfully!",
                      "success"
                    )
                  }
                  className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                >
                  CSV File
                </button>

                <button
                  onClick={() =>
                    Swal.fire(
                      "Success",
                      "PDF report generated successfully!",
                      "success"
                    )
                  }
                  className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                >
                  PDF File
                </button>

                <button
                  onClick={() =>
                    Swal.fire(
                      "Success",
                      "Excel report generated successfully!",
                      "success"
                    )
                  }
                  className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                >
                  Excel File
                </button>

              </div>
            )}

          </div>

          <div className="w-[42px] h-[42px] rounded-full bg-[linear-gradient(135deg,#facc15,#eab308)]" />

        </div>
      </div>

      {/* KPI CARDS (NOW FROM BACKEND) */}
      <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-5 mb-6 max-[768px]:grid-cols-1">

        <div className="bg-white rounded-[14px] p-[22px] shadow-[0_4px_10px_rgba(0,0,0,0.04)] border border-[#e5e7eb]">
          <p className="text-[#6b7280] mb-[10px] text-sm">
            Total Users
          </p>
          <h2 className="text-[28px] font-bold text-[#111827]">
            {kpis.totalUsers ?? 0}
          </h2>
        </div>

        <div className="bg-white rounded-[14px] p-[22px] shadow-[0_4px_10px_rgba(0,0,0,0.04)] border border-[#e5e7eb]">
          <p className="text-[#6b7280] mb-[10px] text-sm">
            Active Rides
          </p>
          <h2 className="text-[28px] font-bold text-[#111827]">
            {kpis.activeRides ?? 0}
          </h2>
        </div>

        <div className="bg-white rounded-[14px] p-[22px] shadow-[0_4px_10px_rgba(0,0,0,0.04)] border border-[#e5e7eb]">
          <p className="text-[#6b7280] mb-[10px] text-sm">
            Drivers Online
          </p>
          <h2 className="text-[28px] font-bold text-[#111827]">
            {kpis.driversOnline ?? 0}
          </h2>
        </div>

        <div className="bg-white rounded-[14px] p-[22px] shadow-[0_4px_10px_rgba(0,0,0,0.04)] border border-[#e5e7eb]">
          <p className="text-[#6b7280] mb-[10px] text-sm">
            Revenue Today
          </p>
          <h2 className="text-[28px] font-bold text-[#111827]">
            ₹{(kpis.revenueToday ?? 0).toLocaleString("en-IN")}
          </h2>
        </div>

      </div>

      {/* LOWER GRID */}
      <div className="grid grid-cols-[2fr_1fr] gap-[22px] max-[900px]:grid-cols-1">

        {/* RECENT RIDES (FROM BACKEND) */}
        <div className="bg-white rounded-[14px] p-[22px] shadow-[0_4px_10px_rgba(0,0,0,0.04)] border border-[#e5e7eb]">

          <h3 className="mb-[18px] text-lg font-bold text-[#111827]">
            Recent Rides
          </h3>

          <table className="w-full border-collapse max-[768px]:min-w-[750px]">

            <thead className="bg-[#f9fafb]">
              <tr>
                <th>Ride ID</th>
                <th>User</th>
                <th>Driver</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {recentRides.map((r: any) => (
                <tr key={r.id}>
                  <td>{r.id}</td>
                  <td>{r.user}</td>
                  <td>{r.driver}</td>
                  <td>
                    <span
                      className={`py-1.5 px-3 rounded-full text-xs font-semibold ${
                        r.status === "Completed"
                          ? "bg-[#dcfce7] text-[#16a34a]"
                          : r.status === "Pending"
                          ? "bg-[#fef3c7] text-[#b45309]"
                          : "bg-[#dbeafe] text-[#0284c7]"
                      }`}
                    >
                      {r.status}
                    </span>
                  </td>
                </tr>
              ))}

              {recentRides.length === 0 && (
                <tr>
                  <td colSpan={4} className="text-center p-4 text-gray-500">
                    No recent rides
                  </td>
                </tr>
              )}
            </tbody>

          </table>

        </div>

        {/* ALERTS (FROM BACKEND) */}
        <div className="bg-white rounded-[14px] p-[22px] shadow-[0_4px_10px_rgba(0,0,0,0.04)] border border-[#e5e7eb]">

          <h3 className="mb-[18px] text-lg font-bold text-[#111827]">
            System Alerts
          </h3>

          <div className="flex flex-col gap-3.5">

            {alerts.map((a: any, i: number) => (
              <div
                key={i}
                className={`p-3.5 rounded-[10px] text-sm font-medium ${
                  a.type === "warning"
                    ? "bg-[#fff7ed] text-[#c2410c]"
                    : a.type === "error"
                    ? "bg-[#fee2e2] text-[#b91c1c]"
                    : a.type === "success"
                    ? "bg-[#dcfce7] text-[#16a34a]"
                    : "bg-[#dbeafe] text-[#0284c7]"
                }`}
              >
                {a.message}
              </div>
            ))}

            {alerts.length === 0 && (
              <div className="text-gray-500 text-sm">
                No alerts
              </div>
            )}

          </div>

        </div>

      </div>

    </div>
  );
}