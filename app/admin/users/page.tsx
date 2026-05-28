"use client";

import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import Swal from "sweetalert2";

/* =========================
   TYPES
========================= */
type User = {
  id: number;
  name?: string;
  fullName?: string;
  email: string;
  role?: string;
  status?: string;
};

/* =========================
   COMPONENT
========================= */
export default function UsersPage() {
  /* -------------------------
     STATE
  ------------------------- */
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  /* -------------------------
     FETCH USERS
  ------------------------- */
  const fetchUsers = async () => {
    try {
      const res = await axios.get("http://192.168.1.23:8081/users");
      setUsers(res.data);
    } catch (err) {
      Swal.fire("Error", "Failed to fetch users", "error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  /* -------------------------
     FILTER USERS
  ------------------------- */
  const filteredUsers = useMemo(() => {
    return users.filter((u) => {
      const name = (u.name || u.fullName || "").toLowerCase();
      const email = (u.email || "").toLowerCase();
      const q = search.toLowerCase();

      return name.includes(q) || email.includes(q);
    });
  }, [users, search]);

  /* -------------------------
     PAGINATION
  ------------------------- */
  const totalPages = Math.ceil(filteredUsers.length / pageSize);

  const paginatedUsers = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return filteredUsers.slice(start, start + pageSize);
  }, [filteredUsers, currentPage, pageSize]);

  const handlePageSizeChange = (size: number) => {
    setPageSize(size);
    setCurrentPage(1);
  };

  /* -------------------------
     LOADING STATE
  ------------------------- */
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen text-xl font-bold">
        Loading users...
      </div>
    );
  }

  /* =========================
     UI
  ========================= */
  return (
    <div className="min-h-screen bg-[#fffdf3] p-6">

      {/* HEADER */}
      <h1 className="text-3xl font-bold mb-5">Users</h1>

      {/* SEARCH */}
      <input
        className="border px-3 py-2 rounded-lg w-full mb-4"
        placeholder="Search users..."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setCurrentPage(1);
        }}
      />

      {/* TABLE */}
      <div className="bg-white rounded-lg shadow overflow-x-auto">
        <table className="w-full min-w-[800px]">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 text-left">ID</th>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Email</th>
              <th className="p-3 text-left">Role</th>
              <th className="p-3 text-left">Status</th>
            </tr>
          </thead>

          <tbody>
            {paginatedUsers.map((user) => (
              <tr key={user.id} className="border-b">
                <td className="p-3">{user.id}</td>
                <td className="p-3">{user.name || user.fullName}</td>
                <td className="p-3">{user.email}</td>
                <td className="p-3">{user.role || "USER"}</td>
                <td className="p-3">
                  <span className="px-2 py-1 text-xs rounded bg-green-100 text-green-600">
                    {user.status || "ACTIVE"}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* PAGINATION */}
        <div className="flex flex-wrap justify-between items-center p-4 border-t bg-gray-50">

          {/* PAGE SIZE */}
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">Show</span>

            <select
              className="border rounded px-2 py-1"
              value={pageSize}
              onChange={(e) => handlePageSizeChange(Number(e.target.value))}
            >
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={25}>25</option>
              <option value={50}>50</option>
            </select>

            <span className="text-sm text-gray-600">entries</span>
          </div>

          {/* PAGE NAVIGATION */}
          <div className="flex gap-2">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((p) => p - 1)}
              className="px-3 py-1 border rounded disabled:opacity-50"
            >
              Prev
            </button>

            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`px-3 py-1 border rounded ${
                  currentPage === i + 1 ? "bg-blue-500 text-white" : ""
                }`}
              >
                {i + 1}
              </button>
            ))}

            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((p) => p + 1)}
              className="px-3 py-1 border rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}