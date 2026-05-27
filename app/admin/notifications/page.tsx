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
  const [statusFilter, setStatusFilter] = useState("All");
  const [targetFilter, setTargetFilter] = useState("All");

  const filtered = useMemo(() => {
    return notifications.filter((n) => {
      const q = search.toLowerCase();

      const matchesSearch =
        n.id.toLowerCase().includes(q) ||
        n.title.toLowerCase().includes(q) ||
        n.message.toLowerCase().includes(q);

      const matchesStatus =
        statusFilter === "All" || n.status === statusFilter;

      const matchesTarget =
        targetFilter === "All" || n.target === targetFilter;

      return matchesSearch && matchesStatus && matchesTarget;
    });
  }, [search, statusFilter, targetFilter]);

  const stats = {
    total: notifications.length,
    sent: notifications.filter((n) => n.status === "Sent").length,
    scheduled: notifications.filter((n) => n.status === "Scheduled").length,
    failed: notifications.filter((n) => n.status === "Failed").length,
  };

  return (
    <div className="min-h-screen bg-[#fffdf3] px-6 py-6">

      {/* HEADER */}
      <div className="flex justify-between items-center flex-wrap gap-4 mb-6">

        <div>
          <h1 className="text-3xl font-bold text-[#111827]">
            Notifications
          </h1>

          <p className="text-[#6b7280]">
            Send and manage system notifications
          </p>
        </div>

        <button className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white px-5 py-3 rounded-xl font-semibold">
          + Send Notification
        </button>

      </div>

      {/* STATS */}
      <div className="grid grid-cols-4 gap-5 mb-6 max-[900px]:grid-cols-2 max-[520px]:grid-cols-1">

        <div className="bg-white p-5 rounded-2xl border">
          <p className="text-sm text-gray-500">Total</p>
          <h2 className="text-3xl font-bold">{stats.total}</h2>
        </div>

        <div className="bg-white p-5 rounded-2xl border">
          <p className="text-sm text-gray-500">Sent</p>
          <h2 className="text-3xl font-bold text-green-600">
            {stats.sent}
          </h2>
        </div>

        <div className="bg-white p-5 rounded-2xl border">
          <p className="text-sm text-gray-500">Scheduled</p>
          <h2 className="text-3xl font-bold text-blue-600">
            {stats.scheduled}
          </h2>
        </div>

        <div className="bg-white p-5 rounded-2xl border">
          <p className="text-sm text-gray-500">Failed</p>
          <h2 className="text-3xl font-bold text-red-600">
            {stats.failed}
          </h2>
        </div>

      </div>

      {/* FILTERS */}
      <div className="bg-white p-4 rounded-2xl border mb-6 flex flex-wrap gap-4">

        <input
          type="text"
          placeholder="Search notifications..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 min-w-[220px] border px-4 py-3 rounded-xl outline-none"
        />

        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="border px-4 py-3 rounded-xl outline-none"
        >
          <option>All</option>
          <option>Sent</option>
          <option>Scheduled</option>
          <option>Failed</option>
        </select>

        <select
          value={targetFilter}
          onChange={(e) => setTargetFilter(e.target.value)}
          className="border px-4 py-3 rounded-xl outline-none"
        >
          <option>All</option>
          <option>All Users</option>
          <option>Users</option>
          <option>Drivers</option>
          <option>System</option>
        </select>

      </div>

      {/* TABLE */}
      <div className="bg-white rounded-2xl border overflow-auto">

        <table className="w-full min-w-[900px]">

          <thead className="bg-gray-50 border-b">

            <tr className="[&_th]:text-left [&_th]:p-4 text-gray-600">
              <th>ID</th>
              <th>Title</th>
              <th>Message</th>
              <th>Target</th>
              <th>Status</th>
              <th>Created</th>
              <th>Action</th>
            </tr>

          </thead>

          <tbody>

            {filtered.map((n) => (
              <tr
                key={n.id}
                className="border-b hover:bg-gray-50"
              >

                <td className="p-4 font-semibold">
                  {n.id}
                </td>

                <td className="p-4">
                  {n.title}
                </td>

                <td className="p-4 max-w-[300px]">
                  {n.message}
                </td>

                <td className="p-4">
                  {n.target}
                </td>

                <td className="p-4">

                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      n.status === "Sent"
                        ? "bg-green-100 text-green-600"
                        : n.status === "Scheduled"
                        ? "bg-blue-100 text-blue-600"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    {n.status}
                  </span>

                </td>

                <td className="p-4">
                  {n.created}
                </td>

                <td className="p-4">

                  <button className="bg-blue-50 hover:bg-blue-100 text-blue-600 px-4 py-2 rounded-lg text-sm font-semibold">
                    View
                  </button>

                </td>

              </tr>
            ))}

          </tbody>

        </table>

      </div>
    </div>
  );
}