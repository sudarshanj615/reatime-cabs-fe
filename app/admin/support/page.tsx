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

  const [statusFilter, setStatusFilter] =
    useState("All Status");

  const [priorityFilter, setPriorityFilter] =
    useState("All Priority");

  /* CHAT */
  const [selectedTicket, setSelectedTicket] =
    useState<Ticket | null>(null);

  const [messages, setMessages] = useState<Message[]>([
    {
      sender: "user",
      text: "Hello I need help",
    },
    {
      sender: "admin",
      text: "Sure, tell me your issue",
    },
  ]);

  const [input, setInput] = useState("");

  /* SEND MESSAGE */
  const sendMessage = () => {
    if (!input.trim()) return;

    setMessages((prev) => [
      ...prev,
      {
        sender: "admin",
        text: input,
      },
    ]);

    setInput("");
  };

  /* FILTERED TICKETS */
  const filteredTickets = useMemo(() => {
    return tickets.filter((ticket) => {
      const query = search.toLowerCase();

      const matchesSearch =
        ticket.id.toLowerCase().includes(query) ||
        ticket.user.toLowerCase().includes(query) ||
        ticket.issue.toLowerCase().includes(query);

      const matchesStatus =
        statusFilter === "All Status" ||
        ticket.status === statusFilter;

      const matchesPriority =
        priorityFilter === "All Priority" ||
        ticket.priority === priorityFilter;

      return (
        matchesSearch &&
        matchesStatus &&
        matchesPriority
      );
    });
  }, [search, statusFilter, priorityFilter]);

  /* CLEAR FILTERS */
  const clearFilters = () => {
    setSearch("");
    setStatusFilter("All Status");
    setPriorityFilter("All Priority");
  };

  /* STATUS STYLE */
  const statusStyle = (status: string) => {
    if (status === "Resolved") {
      return "bg-[#dcfce7] text-[#16a34a]";
    }

    if (status === "In Progress") {
      return "bg-[#dbeafe] text-[#0284c7]";
    }

    return "bg-[#fef3c7] text-[#b45309]";
  };

  /* PRIORITY STYLE */
  const priorityStyle = (priority: string) => {
    if (priority === "Critical") {
      return "bg-[#fee2e2] text-[#dc2626]";
    }

    if (priority === "High") {
      return "bg-[#fef3c7] text-[#b45309]";
    }

    if (priority === "Medium") {
      return "bg-[#dbeafe] text-[#0284c7]";
    }

    return "bg-[#dcfce7] text-[#16a34a]";
  };

  return (
    <div className="min-h-screen bg-[#fffdf3] px-6 py-6">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-7 gap-5 max-[900px]:flex-col max-[900px]:items-start">

        <div>

          <h1 className="text-[30px] font-bold text-[#111827]">
            Support & Complaints
          </h1>

          <p className="text-[#6b7280]">
            Manage user complaints and support chats
          </p>

        </div>

        <div className="flex items-center gap-4 max-[768px]:w-full max-[768px]:justify-between">

          <button className="border-0 cursor-pointer py-[11px] px-[18px] rounded-[10px] bg-[#facc15] text-black font-semibold hover:bg-[#eab308] hover:-translate-y-px transition">
            Export Report
          </button>

          <div className="w-[42px] h-[42px] rounded-full bg-[linear-gradient(135deg,#facc15,#eab308)]" />

        </div>

      </div>

      {/* MAIN LAYOUT */}
      <div className="grid grid-cols-[1.7fr_1fr] gap-6 max-[1100px]:grid-cols-1">

        {/* LEFT SIDE */}
        <div>

          {/* FILTER BAR */}
          <div className="bg-white rounded-[16px] border border-[#f0e6c2] shadow-[0_4px_12px_rgba(0,0,0,0.04)] p-5 mb-6">

            <div className="flex flex-wrap gap-3.5 items-center">

              {/* SEARCH */}
              <input
                type="text"
                placeholder="Search tickets..."
                value={search}
                onChange={(e) =>
                  setSearch(e.target.value)
                }
                className="flex-1 min-w-[220px] border border-[#e5e7eb] rounded-[10px] py-3 px-3.5 text-sm focus:outline-none focus:border-[#2563eb] focus:shadow-[0_0_0_4px_rgba(37,99,235,0.1)]"
              />

              {/* STATUS */}
              <select
                value={statusFilter}
                onChange={(e) =>
                  setStatusFilter(e.target.value)
                }
                className="min-w-[180px] border border-[#e5e7eb] rounded-[10px] py-3 px-3.5 text-sm"
              >
                <option>All Status</option>
                <option>Open</option>
                <option>In Progress</option>
                <option>Resolved</option>
              </select>

              {/* PRIORITY */}
              <select
                value={priorityFilter}
                onChange={(e) =>
                  setPriorityFilter(e.target.value)
                }
                className="min-w-[180px] border border-[#e5e7eb] rounded-[10px] py-3 px-3.5 text-sm"
              >
                <option>All Priority</option>
                <option>Critical</option>
                <option>High</option>
                <option>Medium</option>
                <option>Low</option>
              </select>

              {/* CLEAR */}
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

            <table className="w-full border-collapse min-w-[850px]">

              <thead className="bg-[#f9fafb]">

                <tr>

                  <th className="text-left p-[15px] text-sm text-[#6b7280]">
                    Ticket
                  </th>

                  <th className="text-left p-[15px] text-sm text-[#6b7280]">
                    Issue
                  </th>

                  <th className="text-left p-[15px] text-sm text-[#6b7280]">
                    Priority
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

                {filteredTickets.map((ticket) => (
                  <tr
                    key={ticket.id}
                    className="hover:bg-[#fafafa] transition"
                  >

                    {/* USER */}
                    <td className="p-[16px_15px] border-b border-[#f3f4f6]">

                      <div className="flex items-center gap-3">

                        <div className="w-[42px] h-[42px] rounded-full bg-[#dbeafe] text-[#2563eb] flex items-center justify-center font-bold">
                          {ticket.user.charAt(0)}
                        </div>

                        <div>
                          <p className="font-semibold text-[#111827]">
                            {ticket.user}
                          </p>

                          <span className="text-xs text-[#6b7280]">
                            {ticket.id}
                          </span>
                        </div>

                      </div>

                    </td>

                    {/* ISSUE */}
                    <td className="p-[16px_15px] border-b border-[#f3f4f6] text-sm text-[#374151] max-w-[280px]">
                      {ticket.issue}
                    </td>

                    {/* PRIORITY */}
                    <td className="p-[16px_15px] border-b border-[#f3f4f6]">

                      <span
                        className={`py-1.5 px-3 rounded-full text-xs font-semibold ${priorityStyle(
                          ticket.priority
                        )}`}
                      >
                        {ticket.priority}
                      </span>

                    </td>

                    {/* STATUS */}
                    <td className="p-[16px_15px] border-b border-[#f3f4f6]">

                      <span
                        className={`py-1.5 px-3 rounded-full text-xs font-semibold ${statusStyle(
                          ticket.status
                        )}`}
                      >
                        {ticket.status}
                      </span>

                    </td>

                    {/* CREATED */}
                    <td className="p-[16px_15px] border-b border-[#f3f4f6] text-sm text-[#374151]">
                      {ticket.created}
                    </td>

                    {/* ACTION */}
                    <td className="p-[16px_15px] border-b border-[#f3f4f6]">

                      <button
                        onClick={() =>
                          setSelectedTicket(ticket)
                        }
                        className="bg-[#eff6ff] text-[#2563eb] py-[7px] px-3 rounded-lg text-[13px] font-semibold hover:bg-[#dbeafe]"
                      >
                        Chat
                      </button>

                    </td>

                  </tr>
                ))}

                {/* EMPTY */}
                {filteredTickets.length === 0 && (
                  <tr>

                    <td
                      colSpan={6}
                      className="text-center p-7 text-[#6b7280]"
                    >
                      No tickets found
                    </td>

                  </tr>
                )}

              </tbody>

            </table>

          </div>

        </div>

        {/* CHAT PANEL */}
        <div className="bg-white rounded-[16px] border border-[#e5e7eb] shadow-[0_4px_10px_rgba(0,0,0,0.04)] flex flex-col h-[700px] overflow-hidden">

          {selectedTicket ? (
            <>
              {/* CHAT HEADER */}
              <div className="p-5 border-b border-[#f3f4f6] bg-[#f9fafb]">

                <div className="flex items-center gap-3">

                  <div className="w-[45px] h-[45px] rounded-full bg-[#dbeafe] text-[#2563eb] flex items-center justify-center font-bold">
                    {selectedTicket.user.charAt(0)}
                  </div>

                  <div>
                    <h2 className="font-semibold text-[#111827]">
                      {selectedTicket.user}
                    </h2>

                    <p className="text-xs text-[#6b7280]">
                      {selectedTicket.id}
                    </p>
                  </div>

                </div>

              </div>

              {/* CHAT BODY */}
              <div className="flex-1 overflow-y-auto p-5 bg-[#fcfcfc] space-y-4">

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
                      className={`max-w-[75%] px-4 py-3 rounded-2xl text-sm ${
                        msg.sender === "admin"
                          ? "bg-[#2563eb] text-white rounded-br-sm"
                          : "bg-[#f3f4f6] text-[#111827] rounded-bl-sm"
                      }`}
                    >
                      {msg.text}
                    </div>

                  </div>
                ))}

              </div>

              {/* INPUT */}
              <div className="p-4 border-t border-[#f3f4f6] bg-white">

                <div className="flex gap-3">

                  <input
                    type="text"
                    value={input}
                    onChange={(e) =>
                      setInput(e.target.value)
                    }
                    placeholder="Type your message..."
                    className="flex-1 border border-[#e5e7eb] rounded-[12px] px-4 py-3 text-sm focus:outline-none focus:border-[#2563eb] focus:shadow-[0_0_0_4px_rgba(37,99,235,0.1)]"
                  />

                  <button
                    onClick={sendMessage}
                    className="bg-[#2563eb] text-white px-5 py-3 rounded-[12px] font-semibold hover:bg-[#1d4ed8] transition"
                  >
                    Send
                  </button>

                </div>

              </div>
            </>
          ) : (
            <div className="flex flex-col items-center justify-center h-full text-center px-6">

              <div className="w-[70px] h-[70px] rounded-full bg-[#eff6ff] flex items-center justify-center text-[#2563eb] text-2xl font-bold mb-4">
                💬
              </div>

              <h2 className="text-lg font-semibold text-[#111827] mb-2">
                No Chat Selected
              </h2>

              <p className="text-sm text-[#6b7280]">
                Select a support ticket to start
                chatting with the user.
              </p>

            </div>
          )}

        </div>

      </div>

    </div>
  );
}