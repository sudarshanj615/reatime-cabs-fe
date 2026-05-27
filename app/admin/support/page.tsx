"use client";

import { useMemo, useState } from "react";

type Ticket = {
  id: string;
  user: string;
  issue: string;
  priority: "Low" | "Medium" | "High" | "Critical";
  status: "Open" | "In Progress" | "Resolved";
  created: string;
};

type Message = {
  sender: "admin" | "user";
  text: string;
};

const tickets: Ticket[] = [
  {
    id: "#T1001",
    user: "Rahul Sharma",
    issue: "Payment deducted but ride not confirmed",
    priority: "High",
    status: "Open",
    created: "2 hrs ago",
  },
  {
    id: "#T1002",
    user: "Anjali Verma",
    issue: "Driver cancelled mid ride",
    priority: "Medium",
    status: "In Progress",
    created: "5 hrs ago",
  },
  {
    id: "#T1003",
    user: "Amit Singh",
    issue: "App crash during booking",
    priority: "Critical",
    status: "Open",
    created: "1 day ago",
  },
  {
    id: "#T1004",
    user: "Neha Gupta",
    issue: "Refund not received",
    priority: "Low",
    status: "Resolved",
    created: "2 days ago",
  },
];

export default function SupportPage() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [priorityFilter, setPriorityFilter] = useState("All");

  // CHAT STATE
  const [selectedTicket, setSelectedTicket] = useState<Ticket | null>(null);
  const [messages, setMessages] = useState<Message[]>([
    { sender: "user", text: "Hello I need help" },
    { sender: "admin", text: "Sure, tell me your issue" },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;

    setMessages((prev) => [
      ...prev,
      { sender: "admin", text: input },
    ]);

    setInput("");
  };

  const filteredTickets = useMemo(() => {
    return tickets.filter((ticket) => {
      const query = search.toLowerCase();

      const matchesSearch =
        ticket.id.toLowerCase().includes(query) ||
        ticket.user.toLowerCase().includes(query) ||
        ticket.issue.toLowerCase().includes(query);

      const matchesStatus =
        statusFilter === "All" ||
        ticket.status === statusFilter;

      const matchesPriority =
        priorityFilter === "All" ||
        ticket.priority === priorityFilter;

      return (
        matchesSearch &&
        matchesStatus &&
        matchesPriority
      );
    });
  }, [search, statusFilter, priorityFilter]);

  return (
    <div className="min-h-screen bg-[#fffdf3] px-6 py-6">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold">
            Support & Complaints
          </h1>
        </div>

        <button className="bg-[#2563eb] text-white px-5 py-3 rounded-xl font-semibold">
          Export Report
        </button>
      </div>

      {/* MAIN LAYOUT */}
      <div className="grid grid-cols-3 gap-6">

        {/* LEFT SIDE TABLE */}
        <div className="col-span-2">

          {/* FILTERS */}
          <div className="bg-white p-4 rounded-2xl mb-6 flex gap-4 flex-wrap">

            <input
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="border px-4 py-2 rounded-xl flex-1"
            />

            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="border px-4 py-2 rounded-xl"
            >
              <option>All</option>
              <option>Open</option>
              <option>In Progress</option>
              <option>Resolved</option>
            </select>

            <select
              value={priorityFilter}
              onChange={(e) => setPriorityFilter(e.target.value)}
              className="border px-4 py-2 rounded-xl"
            >
              <option>All</option>
              <option>Critical</option>
              <option>High</option>
              <option>Medium</option>
              <option>Low</option>
            </select>

          </div>

          {/* TABLE */}
          <div className="bg-white rounded-2xl border overflow-auto">

            <table className="w-full">

              <thead className="bg-gray-50">
                <tr className="[&_th]:text-left [&_th]:p-4">
                  <th>ID</th>
                  <th>User</th>
                  <th>Issue</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>

                {filteredTickets.map((ticket) => (
                  <tr key={ticket.id} className="border-b">

                    <td className="p-4">{ticket.id}</td>
                    <td className="p-4">{ticket.user}</td>
                    <td className="p-4">{ticket.issue}</td>

                    <td className="p-4">
                      {ticket.status}
                    </td>

                    {/* CHAT BUTTON ADDED HERE */}
                    <td className="p-4">

                      <button
                        onClick={() => setSelectedTicket(ticket)}
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm"
                      >
                        Chat
                      </button>

                    </td>

                  </tr>
                ))}

              </tbody>

            </table>

          </div>

        </div>

        {/* RIGHT SIDE CHAT PANEL */}
        <div className="col-span-1 bg-white border rounded-2xl flex flex-col h-[600px]">

          {selectedTicket ? (
            <>
              <div className="p-4 border-b font-semibold">
                Chat with {selectedTicket.user}
              </div>

              <div className="flex-1 p-4 overflow-y-auto bg-gray-50">

                {messages.map((msg, i) => (
                  <div
                    key={i}
                    className={`flex ${
                      msg.sender === "admin"
                        ? "justify-end"
                        : "justify-start"
                    }`}
                  >
                    <div
                      className={`px-3 py-2 rounded-xl max-w-[70%] text-sm ${
                        msg.sender === "admin"
                          ? "bg-blue-600 text-white"
                          : "bg-gray-200"
                      }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                ))}

              </div>

              <div className="p-3 border-t flex gap-2">

                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="flex-1 border rounded-xl px-3 py-2"
                  placeholder="Type message..."
                />

                <button
                  onClick={sendMessage}
                  className="bg-blue-600 text-white px-4 py-2 rounded-xl"
                >
                  Send
                </button>

              </div>
            </>
          ) : (
            <div className="flex items-center justify-center h-full text-gray-500">
              Click Chat to open conversation
            </div>
          )}

        </div>

      </div>

    </div>
  );
}