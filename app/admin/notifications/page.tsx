"use client";

import { useMemo, useState } from "react";

type Notification = {
  id: string;
  title: string;
  message: string;
  target: "All Users" | "Drivers" | "Users" | "System";
  status: "Sent" | "Scheduled" | "Failed";
  created: string;
};

const notifications: Notification[] = [
  {
    id: "#N1001",
    title: "50% Off Ride Offer",
    message: "Get 50% off on all rides today using code RIDE50",
    target: "All Users",
    status: "Sent",
    created: "2 hrs ago",
  },
  {
    id: "#N1002",
    title: "Driver Alert",
    message: "High demand in city center, log in now",
    target: "Drivers",
    status: "Sent",
    created: "5 hrs ago",
  },
  {
    id: "#N1003",
    title: "Maintenance Update",
    message: "App will be under maintenance tonight 2AM - 3AM",
    target: "System",
    status: "Scheduled",
    created: "1 day ago",
  },
  {
    id: "#N1004",
    title: "Payment Issue Fixed",
    message: "Refund system is now working normally",
    target: "Users",
    status: "Failed",
    created: "2 days ago",
  },
];

export default function NotificationsPage() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] =
    useState("All Status");

  const [targetFilter, setTargetFilter] =
    useState("All Target");

  /* FILTERED DATA */
  const filtered = useMemo(() => {
    return notifications.filter((n) => {
      const q = search.toLowerCase();

      const matchesSearch =
        n.id.toLowerCase().includes(q) ||
        n.title.toLowerCase().includes(q) ||
        n.message.toLowerCase().includes(q);

      const matchesStatus =
        statusFilter === "All Status" ||
        n.status === statusFilter;

      const matchesTarget =
        targetFilter === "All Target" ||
        n.target === targetFilter;

      return (
        matchesSearch &&
        matchesStatus &&
        matchesTarget
      );
    });
  }, [search, statusFilter, targetFilter]);

  /* STATS */
  const stats = {
    total: notifications.length,

    sent: notifications.filter(
      (n) => n.status === "Sent"
    ).length,

    scheduled: notifications.filter(
      (n) => n.status === "Scheduled"
    ).length,

    failed: notifications.filter(
      (n) => n.status === "Failed"
    ).length,
  };

  /* CLEAR FILTERS */
  const clearFilters = () => {
    setSearch("");
    setStatusFilter("All Status");
    setTargetFilter("All Target");
  };

  return (
    <div className="min-h-screen bg-[#fffdf3] px-6 py-6">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-7 gap-5 max-[768px]:flex-col max-[768px]:items-start">

        <div>

          <h1 className="text-[30px] font-bold text-[#111827]">
            Notifications
          </h1>

          <p className="text-[#6b7280]">
            Send and manage system notifications
          </p>

        </div>

        <div className="flex items-center gap-4 max-[768px]:w-full max-[768px]:justify-between">

          <button className="border-0 cursor-pointer py-[11px] px-[18px] rounded-[10px] bg-[#facc15] text-black font-semibold hover:bg-[#eab308] hover:-translate-y-px transition">
            + Send Notification
          </button>

          <div className="w-[42px] h-[42px] rounded-full bg-[linear-gradient(135deg,#facc15,#eab308)]" />

        </div>

      </div>

      {/* STATS */}
      <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-5 mb-6">

        <div className="bg-white p-6 rounded-[14px] border border-[#e5e7eb]">
          <p className="text-[#6b7280] text-sm mb-2">
            Total Notifications
          </p>

          <h2 className="text-[26px] font-bold text-[#111827]">
            {stats.total}
          </h2>
        </div>

        <div className="bg-white p-6 rounded-[14px] border border-[#e5e7eb]">
          <p className="text-[#6b7280] text-sm mb-2">
            Sent
          </p>

          <h2 className="text-[26px] font-bold text-[#16a34a]">
            {stats.sent}
          </h2>
        </div>

        <div className="bg-white p-6 rounded-[14px] border border-[#e5e7eb]">
          <p className="text-[#6b7280] text-sm mb-2">
            Scheduled
          </p>

          <h2 className="text-[26px] font-bold text-[#0284c7]">
            {stats.scheduled}
          </h2>
        </div>

        <div className="bg-white p-6 rounded-[14px] border border-[#e5e7eb]">
          <p className="text-[#6b7280] text-sm mb-2">
            Failed
          </p>

          <h2 className="text-[26px] font-bold text-[#dc2626]">
            {stats.failed}
          </h2>
        </div>

      </div>

      {/* FILTER BAR */}
      <div className="bg-white rounded-[16px] border border-[#f0e6c2] shadow-[0_4px_12px_rgba(0,0,0,0.04)] p-5 mb-6">

        <div className="flex flex-wrap gap-3.5 items-center">

          {/* SEARCH */}
          <input
            type="text"
            placeholder="Search notifications..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            className="flex-1 min-w-[220px] border border-[#e5e7eb] rounded-[10px] py-3 px-3.5 text-sm focus:outline-none focus:border-[#2563eb] focus:shadow-[0_0_0_4px_rgba(37,99,235,0.1)]"
          />

          {/* STATUS FILTER */}
          <select
            value={statusFilter}
            onChange={(e) =>
              setStatusFilter(e.target.value)
            }
            className="flex-1 min-w-[220px] border border-[#e5e7eb] rounded-[10px] py-3 px-3.5 text-sm focus:outline-none focus:border-[#2563eb] focus:shadow-[0_0_0_4px_rgba(37,99,235,0.1)]"
          >
            <option>All Status</option>
            <option>Sent</option>
            <option>Scheduled</option>
            <option>Failed</option>
          </select>

          {/* TARGET FILTER */}
          <select
            value={targetFilter}
            onChange={(e) =>
              setTargetFilter(e.target.value)
            }
            className="flex-1 min-w-[220px] border border-[#e5e7eb] rounded-[10px] py-3 px-3.5 text-sm focus:outline-none focus:border-[#2563eb] focus:shadow-[0_0_0_4px_rgba(37,99,235,0.1)]"
          >
            <option value="">All Target</option>
            <option value="all-users">All Users</option>
            <option value="users">Users</option>
            <option value="drivers">Drivers</option>
            <option value="system">System</option>
          </select>

          {/* CLEAR BUTTON */}
          <button
            type="button"
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
                Notification
              </th>

              <th className="text-left p-[15px] text-sm text-[#6b7280]">
                Message
              </th>

              <th className="text-left p-[15px] text-sm text-[#6b7280]">
                Target
              </th>

              <th className="text-left p-[15px] text-sm text-[#6b7280]">
                Status
              </th>

              <th className="text-left p-[15px] text-sm text-[#6b7280]">
                Created
              </th>

              <th className="text-left p-[15px] text-sm text-[#6b7280]">
                Action
              </th>

            </tr>

          </thead>

          <tbody>

            {filtered.map((n) => (
              <tr
                key={n.id}
                className="hover:bg-[#fafafa] transition"
              >

                {/* NOTIFICATION */}
                <td className="p-[16px_15px] border-b border-[#f3f4f6]">

                  <div>
                    <p className="font-semibold text-[#111827]">
                      {n.title}
                    </p>

                    <span className="text-xs text-[#6b7280]">
                      {n.id}
                    </span>
                  </div>

                </td>

                {/* MESSAGE */}
                <td className="p-[16px_15px] border-b border-[#f3f4f6] text-sm text-[#374151] max-w-[320px]">
                  {n.message}
                </td>

                {/* TARGET */}
                <td className="p-[16px_15px] border-b border-[#f3f4f6] text-sm text-[#374151]">
                  {n.target}
                </td>

                {/* STATUS */}
                <td className="p-[16px_15px] border-b border-[#f3f4f6]">

                  <span
                    className={`py-1.5 px-3 rounded-full text-xs font-semibold ${
                      n.status === "Sent"
                        ? "bg-[#dcfce7] text-[#16a34a]"
                        : n.status === "Scheduled"
                        ? "bg-[#dbeafe] text-[#0284c7]"
                        : "bg-[#fee2e2] text-[#dc2626]"
                    }`}
                  >
                    {n.status}
                  </span>

                </td>

                {/* CREATED */}
                <td className="p-[16px_15px] border-b border-[#f3f4f6] text-sm text-[#374151]">
                  {n.created}
                </td>

                {/* ACTION */}
                <td className="p-[16px_15px] border-b border-[#f3f4f6]">

                  <div className="flex gap-2 flex-wrap">

                    <button className="bg-[#eff6ff] text-[#2563eb] py-[7px] px-3 rounded-lg text-[13px] font-semibold hover:bg-[#dbeafe]">
                      View
                    </button>

                  </div>

                </td>

              </tr>
            ))}

            {/* EMPTY STATE */}
            {filtered.length === 0 && (
              <tr>

                <td
                  colSpan={6}
                  className="text-center p-7 text-[#6b7280]"
                >
                  No notifications found
                </td>

              </tr>
            )}

          </tbody>

        </table>

      </div>

    </div>
  );
}